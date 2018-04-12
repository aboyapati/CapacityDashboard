import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';
declare const $: any;

@Component({
  selector: 'app-customerview',
  templateUrl: './customerview.component.html',
  styleUrls: ['./customerview.component.css']
})
export class CustomerviewComponent implements OnInit {

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
  
  resetSlider(){
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
  }

  compTabClick(id) {
    var selCompTabId = $('.tab-active').attr('id');
    $('#' + selCompTabId).attr('class', 'col-md-2 col-sm-6 component-tab');
    $('#compTab' + id).attr('class', 'col-md-2 col-sm-6 component-tab tab-active');
    if (id == 1) {
      this.setConponent('nexus');
    } else if (id == 2) {
      this.setConponent('vcenter');
    } else if (id == 3) {
      this.setConponent('sbc');
    } else if (id == 4) {
      this.setConponent('asa');
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
      this.selectedSubCompTypeId = this.subCompTabItems[0].type_id;
      this.selectedSubCompName = this.subCompTabItems[0].name;
    });
    if (this.selectedComp != id) {
      var selSubCompTabId = $('.comp-active').attr('id');
      $('#' + selSubCompTabId).attr('class', 'comp-tile');
    }
    this.selectedComp = id;
    setTimeout(() => {
      this.config.getCustomerContentCusView(this.selectedSubCompTypeId, this.selectedSubCompName).subscribe(res => {
        this.customerContent = res;
      });
    }, 100);
    $("#subCompDetails").show();
    $("#subCompTab").show();
  }

  getDataCenterList(id) {
    setTimeout(() => {
      this.config.getDataCenterListCusView(id).subscribe(res => {
        this.dataCenters = res;
        this.selectedDataCenter = this.dataCenters[0].id;
        setTimeout(() => {
          this.getComponentList(this.selectedDataCenter);
        }, 100);
      });
    }, 100);
  }

  getComponentList(id) {
    this.config.getComponetCusView(id).subscribe(res => {
      this.ComponentItems = res;
      this.hideEmptyCompTab();
      this.selectDefSelectedCompTab();
    });
  }

  setConponent(type) {
    setTimeout(() => {
      this.currentCompItems = this.ComponentItems[type];
      $("#subCompDetails").hide();
      $("#subCompTab").hide();
    }, 100);
  }

  subCompTabClick(type_id, name) {
    this.config.getCustomerContentCusView(type_id, name).subscribe(res => {
      this.customerContent = res;
    });
    if (this.selectedSubCompName != name) {
      var selSubCompTabId = $('.sub-tab-active').attr('id');
      $('#' + selSubCompTabId).attr('class', 'col-md-2 col-sm-6 component-tab-small');
    }
    this.selectedSubCompTypeId = type_id;
    this.selectedSubCompName = name;
  }

  hideEmptyCompTab() {
    if(typeof this.ComponentItems['nexus'] != 'undefined') {
      if (this.ComponentItems['nexus'].length == 0) {
        $("#compTab1").hide();
      } else {
        $("#compTab1").show();
      }
    } else {
      $("#compTab1").hide();
    }
    if(typeof this.ComponentItems['vcenter'] != 'undefined') {
      if (this.ComponentItems['vcenter'].length == 0) {
        $("#compTab2").hide();
      } else {
        $("#compTab2").show();
      }
    } else {
      $("#compTab2").hide();
    }
    if(typeof this.ComponentItems['sbc'] != 'undefined') {
      if (this.ComponentItems['sbc'].length == 0) {
        $("#compTab3").hide();
      } else {
        $("#compTab3").show();
      }
    } else {
      $("#compTab3").hide();
    }
    if(typeof this.ComponentItems['asa'] != 'undefined') {
      if (this.ComponentItems['asa'].length == 0) {
        $("#compTab4").hide();
      } else {
        $("#compTab4").show();
      }
    } else {
      $("#compTab4").hide();
    }
  }
  selectDefSelectedCompTab() {
    var nexus_exists = 1;
    var vcenter_exists = 1;
    var sbc_exists = 1;
    var asa_exists = 1;
    if(typeof this.ComponentItems['nexus'] != 'undefined') {
      if (this.ComponentItems['nexus'].length > 0) {
        this.setConponent('nexus');
        this.selectedCompTab = 1;
        this.compNotFound = false;
        $("#tabContent").show();
      } else {
        nexus_exists = 0;
      }
    } else {
      nexus_exists = 0;
    }
    if(nexus_exists == 0) {
      if(typeof this.ComponentItems['vcenter'] != 'undefined') {
        if (this.ComponentItems['vcenter'].length > 0) {
          this.setConponent('vcenter');
          this.selectedCompTab = 2;
          this.compNotFound = false;
          $("#tabContent").show();
        } else {
          vcenter_exists = 0;
        }
      } else {
        vcenter_exists = 0;
      }
    }
   
    if(vcenter_exists == 0) {
      if(typeof this.ComponentItems['sbc'] != 'undefined') {
        if (this.ComponentItems['sbc'].length > 0) {
          this.setConponent('sbc');
          this.selectedCompTab = 3;
          this.compNotFound = false;
          $("#tabContent").show();
        } else {
          sbc_exists = 0;
        }
      } else {
        sbc_exists = 0;
      }
    }
    if(sbc_exists == 0) {
      if(typeof this.ComponentItems['asa'] != 'undefined') {
        if (this.ComponentItems['asa'].length > 0) {
          this.setConponent('asa');
          this.selectedCompTab = 4;
          this.compNotFound = false;
          $("#tabContent").show();
        } else {
          asa_exists = 0;
        }
      } else {
        asa_exists = 0;
      }
    }
    if(asa_exists == 0) {
      $("#subCompDetails").hide();
      $("#subCompTab").hide();
      $("#tabContent").hide();
      this.compNotFound = true;
    }
  }

}
