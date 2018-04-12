import { Component, OnInit, Injectable } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';
import { MenuItems } from '../shared/menu-items/menu-items';
import { LowerCasePipe } from '@angular/common';
import { AdminLayoutComponent } from '../layouts/admin/admin-layout.component';
import { ExcelService } from '../excel.service';

declare const $: any;

@Injectable()

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  private dataCenters: any;
  private dataCentersDetails: any;
  private userId: number = sessionStorage.id;
  private dataCenterId: number;
  private showNullRowMessage: boolean = false;
  private currentDC: number;
  private deviceHeight: any;
  private deviceWidth: any;
  private scrollLimit: number;
  private sliderLimit: number;
  private scrollLimitMin: number;
  private scrollLimitMax: number;
  private selectedDataCenter: number;
  private reportStatus: boolean = false;
  private reportList: any;
  private selectedComponents: any;
  private toDate: any;
  private fromDate: any;
  private downloadData: any;

  constructor(private modalService: NgbModal, private config: ConfigService, private router: Router, private excelService: ExcelService) {
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
  }

  ngOnInit() {
    if (!sessionStorage.username || !sessionStorage.id || typeof sessionStorage.username == 'undefined' || typeof sessionStorage.id == 'undefined') {
      this.router.navigate(['login']);
    }
    this.setDataCenterReportList();
    this.selectedComponents = '';
    this.toDate = '';
    this.fromDate = '';
  }

  setDataCenterReportList(id = 0) {
    setTimeout(() => {
      this.config.getProvisioningList().subscribe(res => {
        this.dataCenters = res;
        if (this.dataCenters.length >= 1) {
          $('#withdcBlock').show();
        } else {
          $('#withoutdcBlock').show();
        }
        this.selectedDataCenter = id;
        if (this.dataCenters.length > 0) {
          this.dataCenterScrollClick(id, 'scroll');
        }
      });
    }, 100);
  }

  dataCenterScrollClick(id, clickType = 'scroll') {

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
    $('#dataCenterScroll' + id).removeClass("ti-control-record").addClass("fa fa-circle").css('font-size', '15px');
    this.dataCenterClick(id);
  }

  dataCenterClick(id) {
    this.currentDC = this.dataCenters[id].id;
    this.dataCentersDetails = [];
    this.activateCard(id);
    $('#' + id).attr('class', 'col-md-3 col-sm-6 tab-tile tab-tile-active');
    this.setDataCenterComponnets(this.currentDC);
    this.setReportNames();
  }

  activateCard(id) {
    var preId = $('.tab-tile-active').attr('id');
    $('#' + preId).attr('class', 'col-md-3 col-sm-6 tab-tile');
    $('#rsddropdown' + preId).hide();
    $('#rsddropdown' + id).show();
  }

  setDataCenterComponnets(id) {
    this.config.getComponentList(id).subscribe(res => {
      if (res.length > 0) {
        this.showNullRowMessage = false;
        this.dataCentersDetails = res;
      } else {
        this.showNullRowMessage = true;
      }
    });
  }

  setReportNames() {
    this.reportList = [];
    this.config.getReportNames(this.currentDC, this.selectedComponents).subscribe(res => {
      if (!$.isEmptyObject(res)) {
        this.reportStatus = true;
        this.reportList = res;
      } else {
        this.reportStatus = false;
      }
    });
  }

  changeSelectComponent() {
    this.selectedComponents = $('#selectedComponents').val();
    this.setReportNames();
  }

  downloadReport(reportId) {
    this.config.getDownloadReport(this.currentDC, this.fromDate, this.toDate, reportId).subscribe(res => {
      if (!$.isEmptyObject(res)) {
        this.downloadData = res;
        this.excelService.exportAsExcelFile(this.downloadData, "Data Center Reports");
      } else {
        alert('Oops..Something wrong happened. Please try later');
      }
    });
  }

}