import { Component, OnInit } from '@angular/core';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";

declare const $: any;

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css']
})
export class WorldMapComponent implements OnInit {

  private map: AmChart;
  datas:any;

  constructor(private AmCharts: AmChartsService) { }

  ngOnDestroy() {
    if (this.map) {
      this.AmCharts.destroyChart(this.map);
  }
}

ngOnInit() {

    this.datas = function () {
      var tmp = null;
      $.ajax({
        'async': false,
        'type': "POST",
        'global': false,
        'dataType': 'html',
        'url': "assets/webservices/map.php",
        'data': {},
        'success': function (data) {
          tmp = data;
      }
  });
      return tmp;
  }();

  var details = JSON.parse(this.datas);


  var mapData = [];

  for(var data in details){
      var code = details[data].country_code;
      var latitude = details[data].latitude;
      var longitude = details[data].longitude;
      var name = details[data].city + ', ' + details[data].state + ', ' + details[data].country;
      if(details[data].status == 'Good'){
        var color = 'green';
    }else if(details[data].status == 'Bad'){
        var color = 'red';
    }else{
        var color = '#f1c40f';
    }

    var unit = {
        code:code,
        name:name,
        value:34349561,
        color:color,
        latitude:latitude,
        longitude:longitude
    }

    mapData.push(unit);
}


    // get min and max values
    var minBulletSize = 3;
    var maxBulletSize = 70;
    var min = Infinity;
    var max = -Infinity;
    for (var i = 0; i < mapData.length; i++) {
      var value = mapData[i].value;
      if (value < min) {
        min = value;
    }
    if (value > max) {
        max = value;
    }
}

    // it's better to use circle square to show difference between values, not a radius
    var maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
    var minSquare = minBulletSize * minBulletSize * 2 * Math.PI;

    // create circle for each country
    var images = [];
    for (var i = 0; i < mapData.length; i++) {
      var dataItem = mapData[i];
      var value = dataItem.value;
      // calculate size of a bubble
      var square = (value - min) / (max - min) * (maxSquare - minSquare) + minSquare;
      if (square < minSquare) {
        square = minSquare;
    }
    var size = Math.sqrt(square / (Math.PI * 2));
    var id = dataItem.code;

    var pinIcon = "M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16.125c-3.383 0-6.125-2.742-6.125-6.125s2.742-6.125 6.125-6.125 6.125 2.742 6.125 6.125-2.742 6.125-6.125 6.125zM12.125 10c0-2.14 1.735-3.875 3.875-3.875s3.875 1.735 3.875 3.875c0 2.14-1.735 3.875-3.875 3.875s-3.875-1.735-3.875-3.875z";

    images.push({
        "svgPath": pinIcon,
        "theme": "light",
        "width": 10,
        "height": 10,
        "color": dataItem.color,
        "longitude": dataItem.longitude,
        "latitude": dataItem.latitude,
        "title": dataItem.name,
        "value": value
    });
}

    // build map
    this.map = this.AmCharts.makeChart("chartdiv", {
      "type": "map",
    "addClassNames": true,
      "projection": "",
      "hideCredits":true,
      "titles": [{
        "text": "",
        "id" : "main",
        "size": 14,
        "bold":true
    }, {
        "text": "",
        "size": 11
    }],
    "areasSettings": {
    },
    "dataProvider": {
        "map": "worldLow",
        "images": images
    },
    "export": {
        "enabled": true
    },
    "balloon": {
        "adjustBorderColor": true,
        "color": "#33B86C",
        "cornerRadius": 5,
        "fillColor": "#FFFFFF",
        "fontSize": 16.667,
        "fontWeight": "bold"
    }
});

    this.map.addListener("drawn", function() {
        $(".amcharts-title-main").css("font-family", "Open Sans");
    });

}

}
