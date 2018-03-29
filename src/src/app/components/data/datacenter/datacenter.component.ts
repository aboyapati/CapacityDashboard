import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../config.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
declare const $: any;

@Component({
  selector: 'app-datacenter',
  templateUrl: './datacenter.component.html',
  styleUrls: ['./datacenter.component.css']
})
export class DatacenterComponent implements OnInit {

  private chart: AmChart;
  private chart1: AmChart;
  private chart2: AmChart;
  private chart3: AmChart;
  private chart4: AmChart;
  private observeRef: any;
  private userId: number;
  private dataCenterId: number;
  private subComponentList: any;
  private subComponentPopUpdata: any;
  private selectedComponentId: number = 0;
  private selectedComponentType: string = 'default';
  private vcenterData: any;
  private vcenetrDataStatus: boolean;
  private popUptypeId: number;
  private popUpsubComponentName: string;
  private scrollLimit: number = 4;
  private scrollLimitMin: number = 0;
  private scrollLimitMax: number = 3;
  private popupName : string;
  private subFilterFlag: boolean = false;
  private subComponentCounter: number = 0;

  closeResult: string;
  imgUrl: string = "assets/images/icon-cube.png";
  subComimgUrl: string = "assets/images/subcomponent.png";
  subComChartimgUrl: string = "assets/images/subcomponentChart.png";

  components: any;
  subComponents: any;

  constructor(private modalService: NgbModal, private config: ConfigService, private route: ActivatedRoute, private AmCharts: AmChartsService) {

    this.observeRef = route.params.subscribe(params => {
      this.dataCenterId = params['dataCenterId'];
      this.userId = 1;
      setTimeout(() => {
        this.config.getComponentList(this.dataCenterId).subscribe(res_comp => {
          this.components = res_comp.components;
          this.subComponents = [];
          if (this.subComponentCounter == 0) {
            this.subComponentCounter = 1;
            this.setSubComData();
          }
        });
      }, 100);
    });
  }

  ngOnInit() {
  }

  componnetScrollClick(id, clickType = 'scroll') {

    if (clickType == 'scroll') {
      if (id < this.scrollLimit) {
        this.scrollLimitMin = 0;
        this.scrollLimitMax = 3;
      } else {
        this.scrollLimitMin = id - 3;
        this.scrollLimitMax = id;
      }
    }

    $('.fa-circle').removeClass("fa fa-circle").addClass("ti-control-record");
    $('#componentScroll' + id).removeClass("ti-control-record").addClass("fa fa-circle").css('font-size', '15px');
    this.selectedComponentId = this.components[id].id;
    this.selectedComponentType = this.components[id].type;
    this.componentClick();
  }

  subComponentPopUp() {
    this.config.getsubComponentPopUp(this.popUptypeId, this.popUpsubComponentName).subscribe(res_pop => {
      this.subComponentPopUpdata = res_pop;
      this.subComponentModal(res_pop);
    });
  }

  componentClick() {
    this.deActivateCard();
    $('#cmp_div_' + this.selectedComponentId).attr('class', 'col-md-3 col-sm-6 tab-tile tab-tile-active');
    this.setSubComData();
  }

  deActivateCard() {
    var preId = $('.tab-tile-active').attr('id');
    $('#' + preId).attr('class', 'col-md-3 col-sm-6 tab-tile');
  }

  setSubComData() {

    this.config.getSubComponentList(this.selectedComponentId, this.selectedComponentType).subscribe(res_sub_co => {
      this.subComponentList = res_sub_co;
      var subCoId = 1;
	  this.subComponents.forEach(subCo => {
        this.makeDynamicChart(subCoId++, subCo.status, subCo.consumed, subCo.total, (subCo.consumed / subCo.total) * 100);
      });
    });

    this.subComponents = this.subComponentList.subcomponents;

    if (this.selectedComponentType.toLowerCase() == 'vcenter') {
      this.config.getVcenterData(this.selectedComponentId).subscribe(res_v => {
        this.dataUsagePercentageChart1(res_v.datastore);
        this.dataUsagePercentageChart3(res_v.host_memory);
        this.dataUsagePercentageChart2(res_v.host_cpu);
        $('#vcenetrDataDiv').show();
      });
    } else {
      $('#vcenetrDataDiv').hide();
    }
  }

  filterSubcoPopup(months) {
    $('#callMatricsDropdown').hide();
    this.subComponentModal(this.subComponentPopUpdata, months);
  }

  subCoPopupFilter() {
    $('#callMatricsDropdown').show();
  }

  subComponentModal(details, months = 12) {
    this.popupName = details.name;
    this.chart4 = this.AmCharts.makeChart("speedochartpopup", {
      "type": "serial",
      "hideCredits": true,
      "theme": "light",
      "dataProvider": details.report.slice(details.report.length - months, details.report.length),
      "valueAxes": [{
        "gridColor": "#000000",
        "gridAlpha": 0.2,
        "dashLength": 0,
        "minimum": 0
      }],
      "gridAboveGraphs": true,
      "startDuration": 1,
      "graphs": [{
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "fillAlphas": 1,
        "lineAlpha": 1,
        "type": "column",
        "valueField": "value",
        "fillColors":"#089A04",
      }],
      "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
      },
      "categoryField": "month",
      "categoryAxis": {
        "gridPosition": "start",
        "gridAlpha": 0,
        "tickPosition": "start",
        "tickLength": 20
      }
    });
  }


  dataUsagePercentageChart1(details) {

    var graphData = [];
    for (var data in details) {
      var name = details[data].name;
      var percent = Math.round((details[data].capacity_gb / details[data].provisioned_gb) * 100);
      if (details[data].status == "Good") {
        var color = 'green';
      } else if (details[data].status == "Bad") {
        var color = 'red';
      } else {
        var color = '#f1c40f';
      }

      var unit = {
        name: name,
        percent: percent,
        color: color
      }

      graphData.push(unit);
    }



    this.chart1 = this.AmCharts.makeChart("speedochartdiv", {
      "type": "serial",
      "hideCredits": true,
      "theme": "light",
      "dataProvider": graphData,
      "valueAxes": [{
        "gridColor": "#000000",
        "gridAlpha": 0.2,
        "dashLength": 0,
        "minimum": 0,
        "maximum" : 100
      }],
      "gridAboveGraphs": true,
      "startDuration": 1,
      "graphs": [{
        "balloonText": "[[category]]: <b>[[value]]</b> %",
        "fillAlphas": 1,
        "lineAlpha": 1,
        "type": "column",
        "valueField": "percent",
        "fillColorsField": "color",
        "fixedColumnWidth": 20
      }],
      "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
      },
      "categoryField": "name",
      "categoryAxis": {
        "gridPosition": "start",
        "gridAlpha": 0,
        "tickLength": 10,
        "labelRotation": 45
      }

    });
  }

  dataUsagePercentageChart2(details) {

    var graphData = [];
    for (var data in details) {
      var name = details[data].name;
      var percent = Math.round((details[data].cpu_usage / details[data].cpu_total) * 100);
      if (details[data].status == "Good") {
        var color = 'green';
      } else if (details[data].status == "Bad") {
        var color = 'red';
      } else {
        var color = '#f1c40f';
      }

      var unit = {
        name: name,
        percent: percent,
        color: color
      }

      graphData.push(unit);
    }



    this.chart2 = this.AmCharts.makeChart("speedochartdiv1", {
      "type": "serial",
      "hideCredits": true,
      "theme": "light",
      "dataProvider": graphData,
      "valueAxes": [{
        "gridColor": "#000000",
        "gridAlpha": 0.2,
        "dashLength": 0,
        "minimum": 0,
        "maximum" : 100
      }],
      "gridAboveGraphs": true,
      "startDuration": 1,
      "graphs": [{
        "balloonText": "[[category]]: <b>[[value]]</b> %",
        "fillAlphas": 1,
        "lineAlpha": 1,
        "type": "column",
        "valueField": "percent",
        "fillColorsField": "color",
        "fixedColumnWidth": 20
      }],
      "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
      },
      "categoryField": "name",
      "categoryAxis": {
        "gridPosition": "start",
        "gridAlpha": 0,
        "tickLength": 10,
        "labelRotation": 45
      }

    });
  }

  dataUsagePercentageChart3(details) {


    var graphData = [];
    for (var data in details) {
      var name = details[data].name;
      var percent = Math.round((details[data].memory_usage / details[data].memory_total) * 100);
      if (details[data].status == "Good") {
        var color = 'green';
      } else if (details[data].status == "Bad") {
        var color = 'red';
      } else {
        var color = '#f1c40f';
      }

      var unit = {
        name: name,
        percent: percent,
        color: color
      }

      graphData.push(unit);
    }



    this.chart3 = this.AmCharts.makeChart("speedochartdiv2", {
      "type": "serial",
      "hideCredits": true,
      "theme": "light",
      "dataProvider": graphData,
      "valueAxes": [{
        "gridColor": "#000000",
        "gridAlpha": 0.2,
        "dashLength": 0,
        "minimum": 0,
        "maximum" : 100
      }],
      "gridAboveGraphs": true,
      "startDuration": 1,
      "graphs": [{
        "balloonText": "[[category]]: <b>[[value]]</b> %",
        "fillAlphas": 1,
        "lineAlpha": 1,
        "type": "column",
        "valueField": "percent",
        "fillColorsField": "color",
        "fixedColumnWidth": 20
      }],
      "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
      },
      "categoryField": "name",
      "categoryAxis": {
        "gridPosition": "start",
        "gridAlpha": 0,
        "tickLength": 10,
        "labelRotation": 45
      }

    });
  }

  makeDynamicChart(id, status, consumed, total, value) {
    if (status == 'Good') {
      var color = '#00b300';
    } else if (status == 'Bad') {
      var color = '#ff0000';
    } else {
      var color = '#ff9900';
    }

    this.chart = this.AmCharts.makeChart("chartdiv_" + id, {
      "theme": "light",
      "hideCredits": true,
      "type": "gauge",
      "axes": [{
        "topText": consumed + ' / ' + total + ' (' + value + '%' + ')',
        "topTextFontSize": 14,
        "bandOutlineThickness": 10,
        "topTextYOffset": 70,
        "axisColor": "#fff",
        "axisThickness": 70,
        "endValue": 100,
        "gridInside": true,
        "inside": true,
        "radius": "50%",
        "valueInterval": 100,
        "tickColor": "#000000",
        "startAngle": -90,
        "endAngle": 90,
        "unit": "%",
        "bandOutlineAlpha": 0,
        "bands": [{
          "alphe": 1,
          "color": "#e7e7e7",
          "endValue": 100,
          "innerRadius": "105%",
          "radius": "170%",
          "startValue": 0
        }, {
          "alphe": 1,
          "color": color,
          "balloonText": value + '%',
          "endValue": value,
          "innerRadius": "105%",
          "radius": "170%",
          "startValue": 0
        }]
      }],
      "arrows": [{
        "value": value,
        "alpha": 10,
        "color": color,
        "innerRadius": "50%",
        "nailRadius": 20,
        "radius": "130%"
      }]
    });
  }

  open(content, popup_id) {
    this.popUptypeId = this.subComponents[popup_id].type_id;
    this.popUpsubComponentName = this.subComponents[popup_id].name;
    this.subComponentPopUp();
    this.modalService.open(content, { windowClass: 'sub_component_modal', size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return 'with: ${reason}';
    }
  }
}