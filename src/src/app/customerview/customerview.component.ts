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
  dataCenters: any[];
  compTabItems: any[];
  selectedCompTab: any;
  subCompTabItems: any[];
  selectedSubCompTypeId: any;
  selectedSubCompName: string;
  ComponentItems: any[];
  currentCompItems: any[];
  selectedDataCenter: number;
  selectedComp: any;
  componentCount: any;
  userId: number;
  customerContent: any = '';
  compNotFound: boolean = false;
  private deviceHeight: any;
  private deviceWidth: any;
  private scrollLimit: number;
  private sliderLimit: number;
  private scrollLimitMin: number;
  private scrollLimitMax: number;
  private scrollLimit1: number;
  private sliderLimit1: number;
  private scrollLimitMin1: number;
  private scrollLimitMax1: number;
  private observeRef: any;
  private selectedDcViewId: number = 0;
  private selectedDcSubViewId: number = -1;

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
    this.compTabItems = [{ "id": 1, "name": "NEXUS" }, { "id": 2, "name": "VCENTER" }, { "id": 3, "name": "SBC" }, { "id": 4, "name": "ASA" }];
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

    this.compTabItems = [{ "id": 1, "name": "NEXUS" }, { "id": 2, "name": "VCENTER" }, { "id": 3, "name": "SBC" }, { "id": 4, "name": "ASA" }];

    this.config.getComponetCusView(id).subscribe(res => {
      this.ComponentItems = res;
      this.hideEmptyCompTab();
      this.selectDefSelectedCompTab();
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
    var that = this;
    setTimeout(() => {
      //this.currentCompItems = this.ComponentItems[type];     
      $.each(this.ComponentItems, function (key, value) {
        if (value['type'] == type) {
          that.currentCompItems = value['components'];
        }
      });
      $("#subCompDetails").hide();
      $("#subCompTab").hide();
    }, 100);
  }

  compTabClick(id) {

    this.selectedCompTab = id;

    if (id == 1) {
      this.setComponent('NEXUS');
    } else if (id == 2) {
      this.setComponent('VCENTER');
    } else if (id == 3) {
      this.setComponent('SBC');
    } else if (id == 4) {
      this.setComponent('ASA');
    }
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
      if(this.subCompTabItems.length != 0) {
        this.selectedSubCompTypeId = this.subCompTabItems[0].type_id;
        this.selectedSubCompName = this.subCompTabItems[0].name;
        $("#subCompTab").show();
        $("#subCompDetails").show();
      } else {
        this.selectedSubCompTypeId = '';
        this.selectedSubCompName = '';
        $("#subCompDetails").hide();
        $("#subCompTab").hide();
      }
    });
    this.selectedComp = id;
    setTimeout(() => {
      if(this.selectedSubCompTypeId != '' && this.selectedSubCompName != '') {
        this.config.getCustomerContentCusView(this.selectedSubCompTypeId, this.selectedSubCompName).subscribe(res => {
          this.customerContent = res;
          if(typeof this.customerContent.content == 'undefined') {
            $("#contentErrorDiv").show();
            $("#contentDiv").hide();
          } else {
            if(this.customerContent.content == '') {
              $("#contentErrorDiv").show();
              $("#contentDiv").hide();
            } else {
              $("#contentErrorDiv").hide();
              $("#contentDiv").show();
            }
          }
        });

        if (this.selectedCompTab == 2) {
          this.vcenterGraphContent();
        }
      }
    }, 100);
    this.selectedDcSubViewId = scrollIndex;
  }

  getDataCenterList(id) {
    setTimeout(() => {
      this.config.getDataCenterListCusView(id).subscribe(res => {
        this.dataCenters = res;
        if(this.dataCenters.length != 0) {
          this.selectedDataCenter = this.dataCenters[0].id;
          setTimeout(() => {
            this.getComponentList(this.selectedDataCenter);
          }, 100);
        }
      });
    }, 100);
  }

  getComponentList(id) {
    this.config.getComponetCusView(id).subscribe(res => {
      this.ComponentItems = res;
      if(this.ComponentItems.length != 0) {
        this.componentCount = this.ComponentItems.length;
        this.hideEmptyCompTab();
        this.selectDefSelectedCompTab();
      } else {
        this.compNotFound = true;
      }
    });
  }

  subCompTabClick(type_id, name) {
    this.config.getCustomerContentCusView(type_id, name).subscribe(res => {
      this.customerContent = res;
      if(typeof this.customerContent.content == 'undefined') {
        $("#contentErrorDiv").show();
        $("#contentDiv").hide();
      } else {
        if(this.customerContent.content == '') {
          $("#contentErrorDiv").show();
          $("#contentDiv").hide();
        } else {
          $("#contentErrorDiv").hide();
          $("#contentDiv").show();
        }
      }
    });
    this.selectedSubCompTypeId = type_id;
    this.selectedSubCompName = name;
    if (this.selectedCompTab == 2) {
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


    // if (typeof this.ComponentItems['nexus'] != 'undefined') {
    //   if (this.ComponentItems['nexus'].length == 0) {
    //     $("#compTab1").hide();
    //   } else {
    //     $("#compTab1").show();
    //     this.componentCount++;
    //   }
    // } else {
    //   $("#compTab1").hide();
    // }
    // if (typeof this.ComponentItems['vcenter'] != 'undefined') {
    //   if (this.ComponentItems['vcenter'].length == 0) {
    //     $("#compTab2").hide();
    //   } else {
    //     $("#compTab2").show();
    //     this.componentCount++;
    //   }
    // } else {
    //   $("#compTab2").hide();
    // }
    // if (typeof this.ComponentItems['sbc'] != 'undefined') {
    //   if (this.ComponentItems['sbc'].length == 0) {
    //     $("#compTab3").hide();
    //   } else {
    //     $("#compTab3").show();
    //     this.componentCount++;
    //   }
    // } else {
    //   $("#compTab3").hide();
    // }
    // if (typeof this.ComponentItems['asa'] != 'undefined') {
    //   if (this.ComponentItems['asa'].length == 0) {
    //     $("#compTab4").hide();
    //   } else {
    //     $("#compTab4").show();
    //     this.componentCount++;
    //   }
    // } else {
    //   $("#compTab4").hide();
    // }
  }

  selectDefSelectedCompTab() {
    var nexus_exists = 0;
    var vcenter_exists = 0;
    var sbc_exists = 0;
    var asa_exists = 0;
    var that = this;

    $.each(this.ComponentItems, function (key, value) {
      if (value['type'] == 'NEXUS') {
        if (value['components'].length > 0) {
          nexus_exists = 1;
          that.setComponent('NEXUS');
          that.selectedCompTab = 1;
          that.compNotFound = false;
          $("#tabContent").show();
        }
      }
    });
    if (nexus_exists == 0) {
      $.each(this.ComponentItems, function (key, value) {
        if (value['type'] == 'VCENTER') {
          if (value['components'].length > 0) {
            vcenter_exists = 1;
            that.setComponent('VCENTER');
            that.selectedCompTab = 2;
            that.compNotFound = false;
            $("#tabContent").show();
          }
        }
      });
    }
    if (nexus_exists == 0 && vcenter_exists == 0) {
      $.each(this.ComponentItems, function (key, value) {
        if (value['type'] == 'SBC') {
          if (value['components'].length > 0) {
            sbc_exists = 1;
            that.setComponent('SBC');
            that.selectedCompTab = 3;
            that.compNotFound = false;
            $("#tabContent").show();
          }
        }
      });
    }
    if (nexus_exists == 0 && vcenter_exists == 0 && sbc_exists == 0) {
      $.each(this.ComponentItems, function (key, value) {
        if (value['type'] == 'ASA') {
          if (value['components'].length > 0) {
            asa_exists = 1;
            that.setComponent('ASA');
            that.selectedCompTab = 4;
            that.compNotFound = false;
            $("#tabContent").show();
          }
        }
      });
    }
    if (nexus_exists == 0 && vcenter_exists == 0 && sbc_exists == 0 && asa_exists == 0) {
      $("#subCompDetails").hide();
      $("#subCompTab").hide();
      $("#tabContent").hide();
      that.compNotFound = true;
    }




    // if (typeof this.ComponentItems['nexus'] != 'undefined') {
    //   if (this.ComponentItems['nexus'].length > 0) {
    //     this.setComponent('nexus');
    //     this.selectedCompTab = 1;
    //     this.compNotFound = false;
    //     $("#tabContent").show();
    //   } else {
    //     nexus_exists = 0;
    //   }
    // } else {
    //   nexus_exists = 0;
    // }
    // if (nexus_exists == 0) {
    //   if (typeof this.ComponentItems['vcenter'] != 'undefined') {
    //     if (this.ComponentItems['vcenter'].length > 0) {
    //       this.setComponent('vcenter');
    //       this.selectedCompTab = 2;
    //       this.compNotFound = false;
    //       $("#tabContent").show();
    //     } else {
    //       vcenter_exists = 0;
    //     }
    //   } else {
    //     vcenter_exists = 0;
    //   }
    // }

    // if (vcenter_exists == 0) {
    //   if (typeof this.ComponentItems['sbc'] != 'undefined') {
    //     if (this.ComponentItems['sbc'].length > 0) {
    //       this.setComponent('sbc');
    //       this.selectedCompTab = 3;
    //       this.compNotFound = false;
    //       $("#tabContent").show();
    //     } else {
    //       sbc_exists = 0;
    //     }
    //   } else {
    //     sbc_exists = 0;
    //   }
    // }
    // if (sbc_exists == 0) {
    //   if (typeof this.ComponentItems['asa'] != 'undefined') {
    //     if (this.ComponentItems['asa'].length > 0) {
    //       this.setComponent('asa');
    //       this.selectedCompTab = 4;
    //       this.compNotFound = false;
    //       $("#tabContent").show();
    //     } else {
    //       asa_exists = 0;
    //     }
    //   } else {
    //     asa_exists = 0;
    //   }
    // }
    // if (asa_exists == 0) {
    //   $("#subCompDetails").hide();
    //   $("#subCompTab").hide();
    //   $("#tabContent").hide();
    //   this.compNotFound = true;
    // }
  }

  vcenterGraphContent() {
    this.config.getVcenterGraphContent(this.selectedComp, 'VCENTER', this.selectedSubCompTypeId).subscribe(res => {
      if (res.length > 0) {
        var date = [];
        var cpu_percent = [];
        var mem_percent = [];
        res.forEach(function (element) {
          date.push(element.date);
          cpu_percent.push(element.cpu_percent);
          mem_percent.push(element.memory_percent);
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

}
