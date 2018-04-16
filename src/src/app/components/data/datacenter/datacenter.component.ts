import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../config.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
import { Router } from '@angular/router';
import { LowerCasePipe } from '@angular/common';
import { AdminLayoutComponent } from '../../../layouts/admin/admin-layout.component';
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
  private userId: number = sessionStorage.id;
  private dataCenterId: any;
  private subComponentList: any;
  private subComponentPopUpdata: any;
  private selectedComponentId: number = 0;
  private selectedComponentType: string = 'default';
  private vcenterData: any;
  private vcenetrDataStatus: boolean;
  private popUptypeId: number;
  private popUpsubComponentName: string;
  private deviceHeight: any;
  private deviceWidth: any;
  private scrollLimit: number;
  private sliderLimit: number;
  private scrollLimitMin: number;
  private scrollLimitMax: number;
  private popupName: string;
  private subFilterFlag: boolean = false;
  private subComponentCounter: number = 0;
  private subCoFlag: boolean = false;
  private coFlag: boolean = false;
  private selectedComponentViewId: number;
  private dataCenterHeading: string = '';

  closeResult: string;
  imgUrl: string = "assets/images/icon-cube.png";
  subComimgUrl: string = "assets/images/subcomponent.png";
  subComChartimgUrl: string = "assets/images/subcomponentChart.png";

  components: any;
  subComponents: any;

  constructor(private modalService: NgbModal, private config: ConfigService, private route: ActivatedRoute, private AmCharts: AmChartsService, private router: Router, private dynamicSubMenu: AdminLayoutComponent) {
    sessionStorage.setItem('previousUrl', this.router.url);
    this.deviceHeight = (window.innerHeight);
    this.deviceWidth = (window.innerWidth);
    if (this.deviceWidth >= 768) {
      this.scrollLimit = 4;
      this.scrollLimitMin = 0;
      this.scrollLimitMax = 3;
      this.sliderLimit = 3;
    } else if (this.deviceWidth >= 576) {
      this.scrollLimit = 2;
      this.scrollLimitMin = 0;
      this.scrollLimitMax = 1;
      this.sliderLimit = 1;
    } else {
      this.scrollLimit = 1;
      this.scrollLimitMin = 0;
      this.scrollLimitMax = 0;
      this.sliderLimit = 0;
    }

    this.observeRef = route.params.subscribe(params => {
      this.dataCenterId = params['dataCenterId'];

      $('.EnableDcDis').removeClass('EnableDcDis').addClass('EnableDcBlock');
      $('#toEnableDc' + this.dataCenterId).addClass('EnableDcDis').removeClass('EnableDcBlock');
      sessionStorage.setItem('leftNavSelectedSubcompId', this.dataCenterId);

      if (typeof this.dataCenterId !== "undefined") {
        setTimeout(() => {
          this.config.getComponentList(this.dataCenterId).subscribe(res_comp => {
            this.components = res_comp;
            sessionStorage.setItem('cookieComponnets', JSON.stringify(this.components));
            if (this.components.length < 1) {
              this.coFlag = true;
              $('#withoutComponentBlock').show();
            } else {
              this.coFlag = false;
              $('#withoutComponentBlock').hide();
            }
            for (let i = 0; i < this.dynamicSubMenu.dynamicSubMenu.length; i++) {
              if (this.dynamicSubMenu.dynamicSubMenu[i].id == this.dataCenterId) {
                this.dataCenterHeading = this.dynamicSubMenu.dynamicSubMenu[i].name;
                break;
              }
            }
            this.subComponents = [];
            if (this.subComponentCounter == 0) {
              this.subComponentCounter = 1;
            }
            setTimeout(() => {
              $('#componentScroll0').trigger('click');
            }, 100);
          });
        }, 1000);
      }
    });
  }

  ngOnInit() {

    if (!sessionStorage.username || !sessionStorage.id || typeof sessionStorage.username == 'undefined' || typeof sessionStorage.id == 'undefined') {
      this.router.navigate(['login']);
    }
  }

  componnetScrollClick(id, clickType = 'scroll', from = 'dcPage') {

    if (clickType == 'scroll') {
      if (id < this.scrollLimit) {
        this.scrollLimitMin = 0;
        this.scrollLimitMax = this.sliderLimit;
      } else {
        this.scrollLimitMin = id - this.sliderLimit;
        this.scrollLimitMax = id;
      }
    }

    $('.fa-circle').removeClass("fa fa-circle").addClass("ti-control-record");
    $('#componentScroll' + id).removeClass("ti-control-record").addClass("fa fa-circle").css('font-size', '15px');
    this.selectedComponentId = this.components[id].id;
    this.selectedComponentType = this.components[id].type;

    if (from != 'dcPage') {
      $('#componentScroll' + id).trigger('click');
    } else {
      this.componentClick();
      this.selectLeftNavComponents();
    }

    this.selectedComponentViewId = id;

  }

  public selectDataCenterComponents(id) {
    this.components = JSON.parse(sessionStorage.cookieComponnets);

    for (let i = 0; i < this.components.length; i++) {
      if (this.components[i].id == id) {
        id = i;
        break;
      }
    }

    this.componnetScrollClick(id, '', 'leftNav');
  }

  selectLeftNavComponents() {
    $('.subComponentActive').removeClass('subComponentActive').addClass('subComponent');
    $('#subCompChild' + this.selectedComponentId).addClass('subComponentActive').removeClass('subComponent');
  }

  subComponentPopUp() {
    this.config.getsubComponentPopUp(this.popUptypeId, this.popUpsubComponentName).subscribe(res_pop => {
      if (!$.isEmptyObject(res_pop)) {
        this.subComponentPopUpdata = res_pop;
        this.subComponentModal(res_pop);
      }
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
      this.subComponents = this.subComponentList.subcomponents;

      var subCoId = 1;

      if (this.subComponents && (this.subComponents.length > 0)) {
        this.subCoFlag = false;
        setTimeout(() => {
          this.subComponents.forEach(subCo => {
            this.makeDynamicChart(subCoId++, subCo.status, subCo.consumed, subCo.total, (subCo.consumed / subCo.total) * 100);
          });
        }, 100);
      } else {
        this.subCoFlag = true;
      }
    });

    if (this.selectedComponentType.toLowerCase() == 'vcenter') {
      this.config.getVcenterData(this.selectedComponentId).subscribe(res_v => {
        if (!$.isEmptyObject(res_v.datastore)) {
          $('#speedochartdivErrorMsg').hide();
          $('#speedochartdiv').css('height', '500px');
          this.dataUsagePercentageChart1(res_v.datastore);
        } else {
          $('#speedochartdiv').css('height', 'auto');
          $('#speedochartdiv').html('<div id="speedochartdivErrorMsg" style="text-align: center;font-size: 16px;">No Details Found</div>');
        }
        if (!$.isEmptyObject(res_v.host_cpu)) {
          $('#speedochartdiv1ErrorMsg').hide();
          $('#speedochartdiv1').css('height', '500px');
          this.dataUsagePercentageChart2(res_v.host_cpu);
        } else {
          $('#speedochartdiv1').css('height', 'auto');
          $('#speedochartdiv1').html('<div id="speedochartdiv1ErrorMsg" style="text-align: center;font-size: 16px;">No Details Found</div>');
        }
        if (!$.isEmptyObject(res_v.host_memory)) {
          $('#speedochartdiv2ErrorMsg').hide();
          $('#speedochartdiv2').css('height', '500px');
          this.dataUsagePercentageChart3(res_v.host_memory);
        } else {
          $('#speedochartdiv2').css('height', 'auto');
          $('#speedochartdiv2').html('<div id="speedochartdiv2ErrorMsg" style="text-align: center;font-size: 16px;">No Details Found</div>');
        }
        $('#vcenetrDataDiv').show();
      });
    } else {
      $('#vcenetrDataDiv').hide();
    }
  }

  filterSubcoPopup(months) {
    $('#callMatricsDropdown').hide();
    if (!$.isEmptyObject(this.subComponentPopUpdata)) {
      this.subComponentModal(this.subComponentPopUpdata, months);
    }
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
        "fillColors": "#089A04",
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
        "maximum": 100
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
        "maximum": 100
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
        "maximum": 100
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
    value = Math.round(value * 100) / 100;
    if (!$.isNumeric(value)) {
      value = 0;
    }
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

  scrollRightClick() {
    let nextClick = this.selectedComponentViewId + 1;
    if (nextClick >= this.components.length) {
      nextClick = 0;
    }
    this.componnetScrollClick(nextClick);
  }

  scrollLeftClick() {
    let nextClick = this.selectedComponentViewId - 1;
    if (nextClick < 0) {
      nextClick = this.components.length - 1;
    }
    this.componnetScrollClick(nextClick);
  }

}