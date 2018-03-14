import { Component, OnInit } from '@angular/core';
declare const $: any;
declare var Morris: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  callMatricsFilter: boolean = false;
  notificationFilter: boolean = false;
  datas: any;

  constructor() { }

  ngOnInit() {


    this.datas = function () {
      var tmp = null;
      $.ajax({
        'async': false,
        'type': "POST",
        'global': false,
        'dataType': 'html',
        'url': "assets/webservices/datacenters.php",
        'data': {},
        'success': function (data) {
          tmp = data;
        }
      });
      return tmp;
    }();

    var details = JSON.parse(this.datas);

    var dataset = [];

    for(var data in details){
      var name = details[data].name;
      var total = details[data].total_calls;
      var concurrent = details[data].concurrent_calls;

      var unit = {
        name:name,
        total:total,
        concurrent:concurrent
      }

      dataset.push(unit);
    }


      this.datas = dataset;

  }

  callMatricsClick() {
    this.callMatricsFilter = !this.callMatricsFilter;
    if(this.callMatricsFilter){
      $('#callMatricsDropdown').show();
    } else {
      $('#callMatricsDropdown').hide();
    }
  }

  notificationClick() {
    this.notificationFilter = !this.notificationFilter;
    if(this.notificationFilter){
      $('#notificationDropDown').show();
    } else {
      $('#notificationDropDown').hide();
    }
  }

  getCallMatrics(id){
    $('#callMatricsDropdown').hide();
    alert(id);
  }

  getNotification(id){
    $('#notificationDropDown').hide();
    alert(id);
  }

}
