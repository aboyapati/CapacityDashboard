import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';
import { chart } from 'highcharts';
declare const $: any;

@Component({
  selector: 'app-customerview',
  templateUrl: './customerview.component.html',
  styleUrls: ['./customerview.component.css']
})
export class CustomerviewComponent implements OnInit {


  chart: Highcharts.ChartObject;

  imgUrl: string = 'assets/images/icon-cube.png';
  dataCenters: any;
  compTabItems: any;
  selectedCompTab: any;
  subCompTabItems: any;
  selectedSubCompTypeId: any;
  selectedSubCompName: string;
  ComponentItems: any;
  currentCompItems: any;
  selectedDataCenter: number;
  selectedComp: any;
  componentCount: any;
  userId: number;
  customerContent: any = 0;
  compNotFound: boolean = false;
  subCompNotFound: boolean = false;
  deviceHeight: any;
  deviceWidth: any;
  scrollLimit: number;
  sliderLimit: number;
  scrollLimitMin: number;
  scrollLimitMax: number;
  scrollLimit1: number;
  sliderLimit1: number;
  scrollLimitMin1: number;
  scrollLimitMax1: number;
  observeRef: any;
  selectedDcViewId: number = 0;
  selectedDcSubViewId: number = -1;
  customerName: string;
  selectedVcenterGraphFilter: number;
  minTabWidth: any = '50';

  constructor(private route: ActivatedRoute, private config: ConfigService, private router: Router) {
    sessionStorage.setItem('previousUrl', this.router.url);
    this.deviceHeight = (window.innerHeight);
    this.deviceWidth = (window.innerWidth);
    if (this.deviceWidth >= 768) {
      this.scrollLimit = 4;
      this.scrollLimitMin = 0;
      this.scrollLimitMax = 3;
      this.sliderLimit = 3;
      this.scrollLimit1 = 4;
      this.scrollLimitMin1 = 0;
      this.scrollLimitMax1 = 3;
      this.sliderLimit1 = 3;
    } else if (this.deviceWidth >= 576) {
      this.scrollLimit = 2;
      this.scrollLimitMin = 0;
      this.scrollLimitMax = 1;
      this.sliderLimit = 1;
      this.scrollLimit1 = 2;
      this.scrollLimitMin1 = 0;
      this.scrollLimitMax1 = 1;
      this.sliderLimit1 = 1;
    } else {
      this.scrollLimit = 1;
      this.scrollLimitMin = 0;
      this.scrollLimitMax = 0;
      this.sliderLimit = 0;
      this.scrollLimit1 = 1;
      this.scrollLimitMin1 = 0;
      this.scrollLimitMax1 = 0;
      this.sliderLimit1 = 0;
    }
    this.observeRef = route.params.subscribe(params => {
      this.userId = params['userId'];
    });
  }

  ngOnInit() {
    if (!sessionStorage.username || !sessionStorage.id || typeof sessionStorage.username == 'undefined' || typeof sessionStorage.id == 'undefined') {
      this.router.navigate(['login']);
    }
    this.getDataCenterList(this.userId);

    this.config.getCustomerName(this.userId).subscribe(res => {
      this.customerName = res.customerName;
    });
  }

  resetSlider() {
    if (this.deviceWidth >= 768) {
      this.scrollLimit1 = 4;
      this.scrollLimitMin1 = 0;
      this.scrollLimitMax1 = 3;
      this.sliderLimit1 = 3;
    } else if (this.deviceWidth >= 576) {
      this.scrollLimit1 = 2;
      this.scrollLimitMin1 = 0;
      this.scrollLimitMax1 = 1;
      this.sliderLimit1 = 1;
    } else {
      this.scrollLimit1 = 1;
      this.scrollLimitMin1 = 0;
      this.scrollLimitMax1 = 0;
      this.sliderLimit1 = 0;
    }
  }

  dataCenterClick(id, scrollIndex, clickType = 'scroll') {

    this.resetSlider();

    if (clickType == 'scroll') {
      if (scrollIndex < this.scrollLimit) {
        this.scrollLimitMin = 0;
        this.scrollLimitMax = this.sliderLimit;
      } else {
        this.scrollLimitMin = scrollIndex - this.sliderLimit;
        this.scrollLimitMax = scrollIndex;
      }
    }

    this.compNotFound = false;
    this.subCompNotFound = false;
    this.config.getComponetCusView(id).subscribe(res => {
      this.ComponentItems = res;
      if (this.ComponentItems.length != 0) {
        let j = 1;
        this.compTabItems = [];
        for (let i = 0; i < this.ComponentItems.length; i++) {
          if (this.ComponentItems[i].components.length != 0) {
            this.compTabItems.push({
              'id': j,
              'name': this.ComponentItems[i].type
            });
            j++;
          }
        }
        this.minTabWidth = 100 / this.compTabItems.length;
        this.selectDefSelectedCompTab();
      } else {
        $("#subCompDetails").hide();
        $("#subCompTab").hide();
        $("#tabContent").hide();
        this.compNotFound = true;
        this.currentCompItems = [];
      }
    });
    if (this.selectedDataCenter != id) {
      var selDataTabId = $('.tab-tile-active').attr('id');
      $('#' + selDataTabId).attr('class', 'col-md-3 col-sm-6 tab-tile');
    }
    this.selectedDataCenter = id;
    this.selectedComp = '';

    var selCompTabId = $('.tab-active').attr('id');
    $('#' + selCompTabId).attr('class', 'col-md-2 col-sm-6 component-tab');
    $('#compTab1').attr('class', 'col-md-2 col-sm-6 component-tab tab-active');
    $("#subCompDetails").hide();
    $("#subCompTab").hide();
    this.selectedDcViewId = scrollIndex;
  }

  setComponent(type) {
    let subComponentExist = false;
    this.subCompNotFound = false;
    var that = this;
    setTimeout(() => {
      $.each(this.ComponentItems, function (key, value) {
        if (value['type'] == type) {
          subComponentExist = true;
          that.currentCompItems = value['components'];
        }
      });
      $("#subCompDetails").hide();
      $("#subCompTab").hide();
      if (subComponentExist) {
        this.ComponentClick(that.currentCompItems[0].id, that.currentCompItems[0].type, 0);
      }
    }, 100);
  }

  compTabClick(name) {
    this.selectedCompTab = name.toUpperCase();
    this.setComponent(this.selectedCompTab);
    this.selectedComp = '';
  }

  ComponentClick(id, type, scrollIndex, clickType = 'scroll') {

    if (clickType == 'scroll') {
      if (scrollIndex < this.scrollLimit1) {
        this.scrollLimitMin1 = 0;
        this.scrollLimitMax1 = this.sliderLimit1;
      } else {
        this.scrollLimitMin1 = scrollIndex - this.sliderLimit1;
        this.scrollLimitMax1 = scrollIndex;
      }
    }

    this.config.getSubComponetCusView(id, type).subscribe(res => {
      this.subCompTabItems = res;
      if (this.subCompTabItems.length != 0) {
        this.subCompNotFound = false;
        this.selectedSubCompTypeId = this.subCompTabItems[0].type_id;
        this.selectedSubCompName = this.subCompTabItems[0].name;
        $("#subCompTab").show();
        $("#subCompDetails").show();
      } else {
        this.subCompNotFound = true;
        this.selectedSubCompTypeId = '';
        this.selectedSubCompName = '';
        $("#subCompDetails").hide();
        $("#subCompTab").hide();
      }
      this.selectedComp = id;
      setTimeout(() => {
        if (this.selectedSubCompTypeId != '' && this.selectedSubCompName != '') {
          this.selectedVcenterGraphFilter = 12;
          this.config.getCustomerContentCusView(this.selectedSubCompTypeId, this.selectedSubCompName, this.userId).subscribe(res => {
            this.customerContent = res;
            if (this.customerContent.length > 0) {
              $("#contentErrorDiv").hide();
              $("#contentDiv").show();
            } else {
              $("#contentErrorDiv").show();
              $("#contentDiv").hide();
            }
          });

          if (this.selectedCompTab == 'VCENTER') {
            this.vcenterGraphContent();
          }
        }
      }, 100);
    });
    this.selectedDcSubViewId = scrollIndex;
  }

  getDataCenterList(id) {
    setTimeout(() => {
      this.config.getDataCenterListCusView(id).subscribe(res => {
        this.dataCenters = res;
        if (this.dataCenters.length != 0) {
          this.selectedDataCenter = this.dataCenters[0].id;
          setTimeout(() => {
            this.getComponentList(this.selectedDataCenter);
          }, 100);
        }
      });
    }, 100);
  }

  getComponentList(id) {
    this.subCompNotFound = false;
    this.config.getComponetCusView(id).subscribe(res => {
      this.ComponentItems = res;
      if (this.ComponentItems.length != 0) {
        let j = 1;
        this.compTabItems = [];
        for (let i = 0; i < this.ComponentItems.length; i++) {
          if (this.ComponentItems[i].components.length != 0) {
            this.compTabItems.push({
              'id': j,
              'name': this.ComponentItems[i].type
            });
            j++;
          }
        }
        this.minTabWidth = 100 / this.compTabItems.length;
        this.componentCount = this.ComponentItems.length;
        this.selectDefSelectedCompTab();
      } else {
        this.compNotFound = true;
      }
    });
  }

  subCompTabClick() {
    var myString = $('#selectedSubComp').val();
    var arr = myString.split('|');
    var type_id = arr[0];
    var name = arr[1];
    this.selectedVcenterGraphFilter = 12;
    this.config.getCustomerContentCusView(type_id, name, this.userId).subscribe(res => {
      this.customerContent = res;
      if (this.customerContent.length > 0) {
        $("#contentErrorDiv").hide();
        $("#contentDiv").show();
      } else {
        $("#contentErrorDiv").show();
        $("#contentDiv").hide();
      }
    });
    this.selectedSubCompTypeId = type_id;
    this.selectedSubCompName = name;
    if (this.selectedCompTab == 'VCENTER') {
      this.vcenterGraphContent();
    }
  }

  hideEmptyCompTab() {
    this.componentCount = 0;
    var that = this;

    $.each(this.ComponentItems, function (key, value) {
      if (value['type'] == 'NEXUS') {
        if (value['components'].length == 0) {
          $("#compTab1").hide();
        } else {
          $("#compTab1").show();
          that.componentCount++;
        }
      } else if (value['type'] == 'VCENTER') {
        if (value['components'].length == 0) {
          $("#compTab2").hide();
        } else {
          $("#compTab2").show();
          that.componentCount++;
        }
      } else if (value['type'] == 'SBC') {
        if (value['components'].length == 0) {
          $("#compTab3").hide();
        } else {
          $("#compTab3").show();
          that.componentCount++;
        }
      } else if (value['type'] == 'ASA') {
        if (value['components'].length == 0) {
          $("#compTab4").hide();
        } else {
          $("#compTab4").show();
          that.componentCount++;
        }
      }
    });
  }

  selectDefSelectedCompTab() {
    var that = this;
    let selectFirstComponent = false;
    var x;
    for (let k = this.ComponentItems.length - 1; k >= 0; k--) {
      if (this.ComponentItems[k].components.length > 0) {
        selectFirstComponent = true;
        //that.setComponent(this.ComponentItems[k].type);
        that.selectedCompTab = this.ComponentItems[k].type;
        that.compNotFound = false;
        $("#tabContent").show();
        x = k;
      }
    }
    if (!selectFirstComponent) {
      $("#subCompDetails").hide();
      $("#subCompTab").hide();
      $("#tabContent").hide();
      that.compNotFound = true;
    } else {
      this.setComponent(this.ComponentItems[x].type);
    }
  }

  vcenterGraphContent() {
    this.config.getVcenterGraphContent(this.selectedComp, 'VCENTER', this.selectedSubCompTypeId, this.selectedVcenterGraphFilter, this.userId, this.selectedSubCompName).subscribe(res => {
      if (res.length > 0) {
        var date = [];
        var cpu_percent = [];
        var mem_percent = [];
        res.forEach(function (element) {
          date.push(element.date);
          cpu_percent.push(parseInt(element.cpu_percent));
          mem_percent.push(parseInt(element.memory_percent));
        });

        const options: Highcharts.Options = {
          chart: {
            type: 'spline'
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'Vcenter Data Percentage'
          },
          xAxis: {
            categories: date
          },
          yAxis: {
            title: {
              text: 'Percentage (%)'
            },
            labels: {
              formatter: function () {
                return this.value;
              }
            },
            min: 0,
            max: 100
          },
          tooltip: {
            crosshairs: false,
            shared: true
          },
          plotOptions: {
            spline: {
              marker: {
                radius: 0,
                lineColor: '#666666',
                lineWidth: 1
              }
            }
          },
          series: [{
            name: 'CPU Percent',
            data: cpu_percent

          }, {
            name: 'Memory Percent',
            data: mem_percent
          }]
        };

        this.chart = chart('highchartVcenterGraph', options);
      }
    });
  }

  scrollRightClick() {
    let nextClick = this.selectedDcViewId + 1;
    if (nextClick >= this.dataCenters.length) {
      nextClick = 0;
    }
    this.dataCenterClick(this.dataCenters[nextClick].id, nextClick);
  }

  scrollLeftClick() {
    let nextClick = this.selectedDcViewId - 1;
    if (nextClick < 0) {
      nextClick = this.dataCenters.length - 1;
    }
    this.dataCenterClick(this.dataCenters[nextClick].id, nextClick);
  }

  scrollRightClickSub() {
    let nextClick = this.selectedDcSubViewId + 1;
    if (nextClick >= this.currentCompItems.length) {
      nextClick = 0;
    }
    this.ComponentClick(this.currentCompItems[nextClick].id, this.currentCompItems[nextClick].type, nextClick);
  }

  scrollLeftClickSub() {
    let nextClick = this.selectedDcSubViewId - 1;
    if (nextClick < 0) {
      nextClick = this.currentCompItems.length - 1;
    }
    this.ComponentClick(this.currentCompItems[nextClick].id, this.currentCompItems[nextClick].type, nextClick);
  }

  changeVcenterGraphContent() {
    this.selectedVcenterGraphFilter = $('#selectHighchartVcenterGraph').val();
    this.vcenterGraphContent();
  }

}
