import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';
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
  ComponentItems: any[];
  currentCompItems: any[];
  selectedDataCenter: number;
  selectedComp: any;
  userId: number;

  private observeRef: any;

  constructor(private route: ActivatedRoute, private config: ConfigService) {
    this.observeRef = route.params.subscribe(params => {
      this.userId = params['userId'];
    });
  }

  ngOnInit() {

    this.getDataCenterList(this.userId);

    this.compTabItems = [{"id":1,"name":"NEXUS"},{"id":2,"name":"VCENTER"}, {"id":3,"name":"SBC"}, {"id":4,"name":"ASA"}];
  }

  dataCenterClick(id) {
    if(this.selectedDataCenter != id) {
      var selDataTabId = $('.tab-tile-active').attr('id');
      $('#' + selDataTabId).attr('class', 'col-md-3 col-sm-6 tab-tile');
    }
    this.selectedDataCenter = id;

    var selCompTabId = $('.tab-active').attr('id');
    $('#' + selCompTabId).attr('class', 'col-md-3 col-sm-6 component-tab');
    $('#compTab1').attr('class', 'col-md-3 col-sm-6 component-tab tab-active');
    this.currentCompItems = this.ComponentItems['nexus'];
    this.selectedComp = '';
    $("#subCompDetails").hide();
  }

  compTabClick(id) {
    var selCompTabId = $('.tab-active').attr('id');
    $('#' + selCompTabId).attr('class', 'col-md-3 col-sm-6 component-tab');
    $('#compTab' + id).attr('class', 'col-md-3 col-sm-6 component-tab tab-active');
    if(id == 1) {
      this.currentCompItems = this.ComponentItems['nexus'];
    } else if(id == 2) {
      this.currentCompItems = this.ComponentItems['vcenter'];
    } else if(id == 3) {
      this.currentCompItems = this.ComponentItems['sbc'];
    } else if(id == 4) {
      this.currentCompItems = this.ComponentItems['asa'];
    }
    $("#subCompDetails").hide();
    this.selectedComp = '';
  }

  subCompTabClick(id) {
    if(this.selectedComp != id) {
      var selSubCompTabId = $('.comp-active').attr('id');
      $('#' + selSubCompTabId).attr('class', 'comp-tile');
    }
    this.selectedComp = id;
    $("#subCompDetails").show();
  }

  getDataCenterList(id) {
    setTimeout(() => {
      this.config.getDataCenterListCusView(id).subscribe(res => {
        this.dataCenters = res;
        this.selectedDataCenter = this.dataCenters[0].id;
        setTimeout(() => {
          this.getComponentList(this.selectedDataCenter);
          this.setConponent('nexus');
        }, 100);
      });
    }, 100);
  }

  getComponentList(id) {
    this.config.getComponetCusView(id).subscribe(res => {
      this.ComponentItems =  res;
    });
  }

  setConponent(type) {
    setTimeout(() => {
      this.currentCompItems = this.ComponentItems[type];
      $("#subCompDetails").hide();
    }, 100);
  }

}
