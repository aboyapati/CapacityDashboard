import { Component, OnInit, ElementRef, HostListener, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';
import { MenuItems } from '../shared/menu-items/menu-items';
import { LowerCasePipe } from '@angular/common';
import { AdminLayoutComponent } from '../layouts/admin/admin-layout.component';
declare const $: any;

@Component({
  selector: 'app-provisioning',
  templateUrl: './provisioning.component.html',
  styleUrls: ['./provisioning.component.css']
})
export class ProvisioningComponent implements OnInit {
  closeResult: string;
  imgUrl: string = "assets/images/icon-cube.png";
  callMatricsFilter: boolean = false;
  editComponentFilter: boolean = false;
  dataCenters: any;
  dataCentersDetails: any;
  apiStatus: boolean = false;
  apiStatusMsg: boolean = false;
  name: string = '';
  country: string = 'Country*';
  state: string = 'State*';
  city: string = 'City*';
  timezone: string = 'Time zone*';
  statesList: string[];
  citiesList: string[];

  apiError: number = 1;
  userId: number = sessionStorage.id;
  comName: string;
  dataCenterId: number;
  type: string;
  ipAddress: string;
  ComVersion: string = 'Type*';
  ComSubVersion: string = 'Sub Type';
  editComponentVersion: string;
  componentUser: string;
  password: string;
  enablePassword: string = '';

  //Thresholds
  vrfWarnStart: any = '';
  vrfWarnEnd: any = '';
  vrfMax: any = '';

  bgpPeersWarnStart: any = '';
  bgpPeersWarnEnd: any = '';
  bgpPeersMax: any = '';

  vlanWarnStart: any = '';
  vlanWarnEnd: any = '';
  vlanMax: any = '';

  hsrpWarnStart: any = '';
  hsrpWarnEnd: any = '';
  hsrpMax: any = '';

  staticRoutesWarnStart: any = '';
  staticRoutesWarnEnd: any = '';
  staticRoutesMax: any = '';

  vrrpWarnStart: any = '';
  vrrpWarnEnd: any = '';
  vrrpMax: any = '';
  showNullRowMessage: boolean = false;

  editIdIndex: any;
  editId: any;
  editData: any;
  country_list: string[];
  time_zone_list: string[];
  test: string;
  deleteData: any;
  componentRecords: any;
  deleteComponentId: number;
  currentDC: number;
  currentRow: number;
  version: string[];
  subversion: string[];
  editFromView: boolean = false;
  newDeleteDataIndex: number;
  currentDataCenterComponentId: number;
  subTypes: any;
  subTypesEdit: any;
  deviceHeight: any;
  deviceWidth: any;
  scrollLimit: number;
  sliderLimit: number;
  scrollLimitMin: number;
  scrollLimitMax: number;
  selectedDataCenter: number;
  progressPerc: any;
  next_step: boolean;
  modalClassName: string;
  thresholdErrorMsg1: string = '';
  thresholdErrorMsg2: string = '';
  thresholdErrorMsg3: string = '';
  thresholdErrorMsg4: string = '';
  thresholdErrorMsg5: string = '';

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (event.target.className == 'rsddropdown-span') {
      sessionStorage.setItem('lastSelectedDropDownId', event.target.nextElementSibling.attributes.id.nodeValue);
    } else {
      $('#' + sessionStorage.lastSelectedDropDownId).hide();
      this.callMatricsFilter = false;
      if (sessionStorage.selectedComponentActionButtonId != '') {
        this.editComponentClick(sessionStorage.selectedComponentActionButtonId, 'manual');
        sessionStorage.setItem('selectedComponentActionButtonId', '');
      }
    }
  }

  constructor(private modalService: NgbModal, private config: ConfigService, private router: Router, public adminLayoutComponnet: AdminLayoutComponent) {
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

  open(content, id = 0, type) {

    if (type == 'delete' || type == 'edit') {
      this.editIdIndex = id;
      this.editId = this.dataCenters[this.editIdIndex].id;
      this.editData = this.dataCenters[id];
      this.callMatricsFilter = false;
      $('#callMatricsDropdown' + id).hide();
      if (type == 'edit') {
        this.config.getStates(this.editData.countryid).subscribe(res => {
          this.statesList = res;
        });
        this.config.getCities(this.editData.stateid).subscribe(res => {
          this.citiesList = res;
        });
      }
    }

    if (type == 'add') {
      this.modalClassName = 'custom_modal_dcAdd';
    } else if (type == 'edit') {
      this.modalClassName = 'custom_modal_dcEdit';
    } else if (type == 'delete') {
      this.modalClassName = 'custom_modal_dcDelete';
    } else {
      this.modalClassName = 'custom_modal';
    }

    this.modalService.open(content, { windowClass: this.modalClassName, backdrop: 'static' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if (type == 'add' && this.closeResult == 'Closed with: Close click') {
        this.name = '';
        this.country = 'Country*';
        this.state = 'State*';
        this.city = 'City*';
        this.timezone = 'Time zone*';
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  hide(id) {
    $('.cred' + id).show();
    $('.span' + id).hide();
  }

  deleteDC() {
    this.config.deleteDataCenter(this.userId, this.editId).subscribe(res => {
      $('.modalForm').hide();
      $('.apiResponseDiv').show();
      if (res.status == 'success') {
        this.provisioningList();
        this.adminLayoutComponnet.setMenu();
        $('.apiFailed').hide();
        $('.apiSuccess').show();
      } else {
        $('#deleteApiErrorMsg').html(res.message);
        $('.apiSuccess').hide();
        $('.apiFailed').show();
      }
    });
  }

  openComponentModal(content) {
    this.modalService.open(content, { windowClass: 'custom_modal', backdrop: 'static' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if (this.closeResult == 'Closed with: Close click') {
        this.comName = '';
        this.ComVersion = 'Type*';
        this.ComSubVersion = 'Sub Type';
        this.componentUser = '';
        this.password = '';
        this.ipAddress = '';
        this.enablePassword = '';
        this.vrfWarnStart = '';
        this.vrfWarnEnd = '';
        this.vrfMax = '';
        this.bgpPeersWarnStart = '';
        this.bgpPeersWarnEnd = '';
        this.bgpPeersMax = '';
        this.vlanWarnStart = '';
        this.vlanWarnEnd = '';
        this.vlanMax = '';
        this.hsrpWarnStart = '';
        this.hsrpWarnEnd = '';
        this.hsrpMax = '';
        this.staticRoutesWarnStart = '';
        this.staticRoutesWarnEnd = '';
        this.staticRoutesMax = '';
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.fadeModalContent();
  }

  fadeModalContent() {
    $('.f1 fieldset:first').fadeIn('slow');
  }

  openComponentModalNew(content, id = 0, type, currentdatacenter, editFromView = false) {
    $('#editComponentDropdown' + id).hide();
    this.newDeleteDataIndex = id;

    if (type == 'delete' || type == 'edit' || 'view') {
      this.deleteData = this.dataCentersDetails[id];
      this.currentDataCenterComponentId = this.dataCentersDetails[id].id;
      this.componentRecords = [];
      this.config.getDataCenterComponentRecords(this.currentDataCenterComponentId).subscribe(res => {
        this.componentRecords = res;
        var type_id = this.componentRecords.type;
        var Subtype_id = this.componentRecords.version;
        if (type == 'edit') {
          this.subTypesEdit = [];
          this.config.getSubtypes(type_id).subscribe(res => {
            this.subTypesEdit = res;
          });

          if (this.subTypesEdit.length > 0) {
            this.editComponentVersion = Subtype_id;
          } else {
            this.editComponentVersion = 'Sub Type';
            $("#editComponentVersion").prop("disabled", true);
          }
        }

        this.currentRow = id;
        if (editFromView == true) {
          $('#closeViewComponentModal').trigger('click');
        }

        if (type == 'view') {
          $('#editComponentSuccessClose').trigger('click');
          if (this.componentRecords.type.toLowerCase() == 'nexus') {
            this.modalClassName = 'custom_modal_componentNexusView';
          } else {
            this.modalClassName = 'custom_modal_componentView';
          }
        } else if (type == 'edit') {
          if (this.componentRecords.type.toLowerCase() == 'nexus') {
            this.modalClassName = 'custom_modal_componentNexusEdit';
          } else {
            this.modalClassName = 'custom_modal_componentEdit';
          }
        } else if (type == 'delete') {
          this.modalClassName = 'custom_modal_componentDelete';
        } else {
          this.modalClassName = 'custom_modal';
        }

        if (type == 'view' || type == 'edit') {
          this.modalService.open(content, { windowClass: this.modalClassName, backdrop: 'static' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
          }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          });
        } else {
          this.modalService.open(content, { windowClass: this.modalClassName, size: 'lg', backdrop: 'static' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
          }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          });
        }

      });
    }
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

  callMatricsClick(i) {
    this.callMatricsFilter = !this.callMatricsFilter;
    if (this.callMatricsFilter) {
      $('#callMatricsDropdown' + i).show();
    } else {
      $('#callMatricsDropdown' + i).hide();
    }
  }

  addComponent() {
    if (this.next_step) {
      if (this.ComSubVersion == 'Sub Type') {
        this.ComSubVersion = '';
      }
      if (this.ComVersion != 'NEXUS') {
        this.vrfWarnStart = ''; this.vrfWarnEnd = ''; this.vrfMax = '';
        this.bgpPeersWarnStart = ''; this.bgpPeersWarnEnd = ''; this.bgpPeersMax = '';
        this.vlanWarnStart = ''; this.vlanWarnEnd = ''; this.vlanMax = '';
        this.hsrpWarnStart = ''; this.hsrpWarnEnd = ''; this.hsrpMax = '';
        this.staticRoutesWarnStart = ''; this.staticRoutesWarnEnd = ''; this.staticRoutesMax = '';
      }
      if (this.ComVersion != 'ASA') {
        this.enablePassword = '';
      }
      this.config.componentAdd(this.userId, this.comName, this.currentDC, this.ComVersion, this.ipAddress, this.ComSubVersion, '', this.componentUser, this.password, this.enablePassword, this.vrfWarnStart, this.vrfWarnEnd, this.vrfMax, this.bgpPeersWarnStart, this.bgpPeersWarnEnd, this.bgpPeersMax, this.vlanWarnStart, this.vlanWarnEnd, this.vlanMax, this.hsrpWarnStart, this.hsrpWarnEnd, this.hsrpMax, this.staticRoutesWarnStart, this.staticRoutesWarnEnd, this.staticRoutesMax, this.vrrpWarnStart, this.vrrpWarnEnd, this.vrrpMax).subscribe(res => {
        if (res.status == 'success') {
          this.setDataCenterComponnets(this.currentDC);
          this.apiError = 1;
          this.currentDataCenterComponentId = res.id;
          this.adminLayoutComponnet.setMenu();
          $('#apiErrorMsg').hide();
          $('#complete-title').html("Complete");
          $('#complete-title').attr('style', 'color: #7bbf6a !important');
          $('#complete-icon').attr('class', 'fa fa-check');
          $('#complete-step').attr('style', 'background-color: #7bbf6a !important; border: unset !important;');
          $('.f1-progress-error').hide();
        } else {
          this.apiError = 0;
          $('#apiErrorMsg').show();
          $('#apiErrorMsg').html(res.message);
          $('#complete-step').attr('style', 'background-color: red !important; border: unset !important;');
          $('#complete-icon').attr('class', 'fa fa-close');
          $('#complete-title').html("Error");
          $('#complete-title').attr('style', 'color: red !important');
          $('.f1-progress-line').attr('style', 'width: 75%;');
          $('.f1-progress-error').show();
        }
      });
    }
  }

  addComTryAgain() {
    $("#complete").removeClass('active').addClass('activated');
    $("#f1-step_1").removeClass('activated').addClass('active');
    if (this.ComSubVersion == '') {
      this.ComSubVersion = 'Sub Type';
    }
    $("#fieldset_4").fadeOut(500, () => { });
    $("#fieldset_1").fadeIn(500, () => { });
  }

  getComponentDetails(content, componentId) {
    $('#addComponentSuccessClose').trigger('click');
    this.componentRecords = [];
    this.config.getDataCenterComponentRecords(componentId).subscribe(res => {
      this.componentRecords = res;
    });
    this.modalService.open(content, { windowClass: 'custom_modal', backdrop: 'static', size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  next(event, value) {
    this.next_step = true;
    if (value == 1) {
      if ($('#addComponentName').val() == '' || $('#addComponentName').val().length > 100) {
        $('#NameBar').css('border-bottom', '0.0625rem solid red');
        this.next_step = false;
      } else {
        $('#NameBar').css('border-bottom', '0.0625rem solid #999');
      }
    } else if (value == 2) {
      if ($('#addComponentType').val() == 'Type*') {
        $('#Typebar').css('border-bottom', '0.0625rem solid red');
        this.next_step = false;
      } else {
        $('#Typebar').css('border-bottom', '0.0625rem solid #999');
      }
    } else if (value == 3) {
      if ($('#addIpAddress').val() == '') {
        $('#ipAddressBar').css('border-bottom', '0.0625rem solid red');
        this.next_step = false;
      } else {
        var ip_val = this.ipValidation($('#addIpAddress').val());
        if (ip_val == 'success') {
          $('#ipAddressBar').css('border-bottom', '0.0625rem solid #999');
        } else {
          $('#ipAddressBar').css('border-bottom', '0.0625rem solid red');
          this.next_step = false;
        }
      }
      if ($('#addComponentUser').val() == '') {
        $('#UserBar').css('border-bottom', '0.0625rem solid red');
        this.next_step = false;
      } else {
        $('#UserBar').css('border-bottom', '0.0625rem solid #999');
      }
      if ($('#addComponentPassword').val() == '') {
        $('#PasswordBar').css('border-bottom', '0.0625rem solid red');
        this.next_step = false;
      } else {
        $('#PasswordBar').css('border-bottom', '0.0625rem solid #999');
      }
    }
    //Thresholds Validation
    if (value == 2) {
      if (!this.thresholdsValidate()) {
        this.next_step = false;

        if (this.thresholdErrorMsg1 != '') {
          $('#thresholdErrorMsg1').slideDown().text(this.thresholdErrorMsg1).css('background', 'red').slideUp(5000);
        }
        if (this.thresholdErrorMsg2 != '') {
          $('#thresholdErrorMsg2').slideDown().text(this.thresholdErrorMsg2).css('background', 'red').slideUp(5000);
        }
        if (this.thresholdErrorMsg3 != '') {
          $('#thresholdErrorMsg3').slideDown().text(this.thresholdErrorMsg3).css('background', 'red').slideUp(5000);
        }
        if (this.thresholdErrorMsg4 != '') {
          $('#thresholdErrorMsg4').slideDown().text(this.thresholdErrorMsg4).css('background', 'red').slideUp(5000);
        }
        if (this.thresholdErrorMsg5 != '') {
          $('#thresholdErrorMsg5').slideDown().text(this.thresholdErrorMsg5).css('background', 'red').slideUp(5000);
        }

      }
    }
    if (this.next_step) {
      this.progressPerc = (($(".f1-progress-line").css('width').slice(0, -2) * 100) / $(".f1-progress").css('width').slice(0, -2));
      var fieldSet = event.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
      $(fieldSet).fadeOut(1, () => { });
      $(".f1-step.active").removeClass('active').addClass('activated').next().removeClass('next').addClass('active').next().addClass('next');
      if (value == 1 && this.progressPerc == '25') {
        $(".f1-progress-line").css('width', '50%');
      } else if (value == 2 && this.progressPerc == '50') {
        $(".f1-progress-line").css('width', '75%');
      } else if (value == 3 && this.progressPerc == '75') {
        $(".f1-progress-line").css('width', '100%');
      }
      if ($(".f1-step.active").attr('id') == 'complete') {
        $(".f1-step-icon").css('cursor', 'default');
      }
      $(fieldSet).next().fadeIn(1, () => { });
    }
  }

  thresholdsValidate() {

    this.thresholdErrorMsg1 = '';
    this.thresholdErrorMsg2 = '';
    this.thresholdErrorMsg3 = '';
    this.thresholdErrorMsg4 = '';
    this.thresholdErrorMsg5 = '';

    var thrFlag = true;
    if (this.ComVersion == 'NEXUS') {
      if (this.vrfWarnStart == '' || isNaN(this.vrfWarnStart) || this.vrfWarnStart < 0 || parseInt(this.vrfWarnStart) >= parseInt(this.vrfWarnEnd) || parseInt(this.vrfWarnStart) >= parseInt(this.vrfMax)) {

        if (isNaN(this.vrfWarnStart)) {
          this.thresholdErrorMsg1 = 'Threshold values should be numeric';
        }
        if (parseInt(this.vrfWarnStart) >= parseInt(this.vrfWarnEnd)) {
          this.thresholdErrorMsg2 = 'Warning Value should be less than Alert Value';
        }
        if (parseInt(this.vrfWarnStart) >= parseInt(this.vrfMax)) {
          this.thresholdErrorMsg3 = 'Warning Value should be less than Max Value';
        }

        $('#add-vrfWarnStart').css('border-bottom', '0.0625rem solid red');
        thrFlag = false;
      } else {
        $('#add-vrfWarnStart').css('border-bottom', '0.0625rem solid #999');
      }
      if (this.vrfWarnEnd == '' || isNaN(this.vrfWarnEnd) || this.vrfWarnEnd < 0 || parseInt(this.vrfWarnEnd) >= parseInt(this.vrfMax)) {

        if (isNaN(this.vrfWarnEnd)) {
          this.thresholdErrorMsg1 = 'Threshold values should be numeric';
        }
        if (parseInt(this.vrfWarnEnd) >= parseInt(this.vrfMax)) {
          this.thresholdErrorMsg4 = 'Alert Value should be less than Max Value';
        }

        $('#add-vrfWarnEnd').css('border-bottom', '0.0625rem solid red');
        thrFlag = false;
      } else {
        $('#add-vrfWarnEnd').css('border-bottom', '0.0625rem solid #999');
      }
      if (this.vrfMax == '' || isNaN(this.vrfMax) || this.vrfMax < 0 || this.vrfMax % 100 != 0) {

        if (isNaN(this.vrfMax)) {
          this.thresholdErrorMsg1 = 'Threshold values should be numeric';
        }
        if (this.vrfMax % 100 != 0) {
          this.thresholdErrorMsg5 = 'Max value should be multiples of 100';
        }

        $('#add-vrfMax').css('border-bottom', '0.0625rem solid red');
        thrFlag = false;
      } else {
        $('#add-vrfMax').css('border-bottom', '0.0625rem solid #999');
      }
      if (this.bgpPeersWarnStart == '' || isNaN(this.bgpPeersWarnStart) || this.bgpPeersWarnStart < 0 || parseInt(this.bgpPeersWarnStart) >= parseInt(this.bgpPeersWarnEnd) || parseInt(this.bgpPeersWarnStart) >= parseInt(this.bgpPeersMax)) {

        if (isNaN(this.bgpPeersWarnStart)) {
          this.thresholdErrorMsg1 = 'Threshold values should be numeric';
        }
        if (parseInt(this.bgpPeersWarnStart) >= parseInt(this.bgpPeersWarnEnd)) {
          this.thresholdErrorMsg2 = 'Warning Value should be less than Alert Value';
        }
        if (parseInt(this.bgpPeersWarnStart) >= parseInt(this.bgpPeersMax)) {
          this.thresholdErrorMsg3 = 'Warning Value should be less than Max Value';
        }

        $('#add-bgpPeersWarnStart').css('border-bottom', '0.0625rem solid red');
        thrFlag = false;
      } else {
        $('#add-bgpPeersWarnStart').css('border-bottom', '0.0625rem solid #999');
      }
      if (this.bgpPeersWarnEnd == '' || isNaN(this.bgpPeersWarnEnd) || this.bgpPeersWarnEnd < 0 || parseInt(this.bgpPeersWarnEnd) >= parseInt(this.bgpPeersMax)) {

        if (isNaN(this.bgpPeersWarnEnd)) {
          this.thresholdErrorMsg1 = 'Threshold values should be numeric';
        }
        if (parseInt(this.bgpPeersWarnEnd) >= parseInt(this.bgpPeersMax)) {
          this.thresholdErrorMsg4 = 'Alert Value should be less than Max Value';
        }

        $('#add-bgpPeersWarnEnd').css('border-bottom', '0.0625rem solid red');
        thrFlag = false;
      } else {
        $('#add-bgpPeersWarnEnd').css('border-bottom', '0.0625rem solid #999');
      }
      if (this.bgpPeersMax == '' || isNaN(this.bgpPeersMax) || this.bgpPeersMax < 0 || this.bgpPeersMax % 100 != 0) {

        if (isNaN(this.bgpPeersMax)) {
          this.thresholdErrorMsg1 = 'Threshold values should be numeric';
        }
        if (this.bgpPeersMax % 100 != 0) {
          this.thresholdErrorMsg5 = 'Max value should be multiples of 100';
        }

        $('#add-bgpPeersMax').css('border-bottom', '0.0625rem solid red');
        thrFlag = false;
      } else {
        $('#add-bgpPeersMax').css('border-bottom', '0.0625rem solid #999');
      }
      if (this.vlanWarnStart == '' || isNaN(this.vlanWarnStart) || this.vlanWarnStart < 0 || parseInt(this.vlanWarnStart) >= parseInt(this.vlanWarnEnd) || parseInt(this.vlanWarnStart) >= parseInt(this.vlanMax)) {

        if (isNaN(this.vlanWarnStart)) {
          this.thresholdErrorMsg1 = 'Threshold values should be numeric';
        }
        if (parseInt(this.vlanWarnStart) >= parseInt(this.vlanWarnEnd)) {
          this.thresholdErrorMsg2 = 'Warning Value should be less than Alert Value';
        }
        if (parseInt(this.vlanWarnStart) >= parseInt(this.vlanMax)) {
          this.thresholdErrorMsg3 = 'Warning Value should be less than Max Value';
        }

        $('#add-vlanWarnStart').css('border-bottom', '0.0625rem solid red');
        thrFlag = false;
      } else {
        $('#add-vlanWarnStart').css('border-bottom', '0.0625rem solid #999');
      }
      if (this.vlanWarnEnd == '' || isNaN(this.vlanWarnEnd) || this.vlanWarnEnd < 0 || parseInt(this.vlanWarnEnd) >= parseInt(this.vlanMax)) {

        if (isNaN(this.vlanWarnEnd)) {
          this.thresholdErrorMsg1 = 'Threshold values should be numeric';
        }
        if (parseInt(this.vlanWarnEnd) >= parseInt(this.vlanMax)) {
          this.thresholdErrorMsg4 = 'Alert Value should be less than Max Value';
        }

        $('#add-vlanWarnEnd').css('border-bottom', '0.0625rem solid red');
        thrFlag = false;
      } else {
        $('#add-vlanWarnEnd').css('border-bottom', '0.0625rem solid #999');
      }
      if (this.vlanMax == '' || isNaN(this.vlanMax) || this.vlanMax < 0 || this.vlanMax % 100 != 0) {

        if (isNaN(this.vlanMax)) {
          this.thresholdErrorMsg1 = 'Threshold values should be numeric';
        }
        if (this.vlanMax % 100 != 0) {
          this.thresholdErrorMsg5 = 'Max value should be multiples of 100';
        }

        $('#add-vlanMax').css('border-bottom', '0.0625rem solid red');
        thrFlag = false;
      } else {
        $('#add-vlanMax').css('border-bottom', '0.0625rem solid #999');
      }
      if (this.hsrpWarnStart == '' || isNaN(this.hsrpWarnStart) || this.hsrpWarnStart < 0 || parseInt(this.hsrpWarnStart) >= parseInt(this.hsrpWarnEnd) || parseInt(this.hsrpWarnStart) >= parseInt(this.hsrpMax)) {

        if (isNaN(this.hsrpWarnStart)) {
          this.thresholdErrorMsg1 = 'Threshold values should be numeric';
        }
        if (parseInt(this.hsrpWarnStart) >= parseInt(this.hsrpWarnEnd)) {
          this.thresholdErrorMsg2 = 'Warning Value should be less than Alert Value';
        }
        if (parseInt(this.hsrpWarnStart) >= parseInt(this.hsrpMax)) {
          this.thresholdErrorMsg3 = 'Warning Value should be less than Max Value';
        }

        $('#add-hsrpWarnStart').css('border-bottom', '0.0625rem solid red');
        thrFlag = false;
      } else {
        $('#add-hsrpWarnStart').css('border-bottom', '0.0625rem solid #999');
      }
      if (this.hsrpWarnEnd == '' || isNaN(this.hsrpWarnEnd) || this.hsrpWarnEnd < 0 || parseInt(this.hsrpWarnEnd) >= parseInt(this.hsrpMax)) {

        if (isNaN(this.hsrpWarnEnd)) {
          this.thresholdErrorMsg1 = 'Threshold values should be numeric';
        }
        if (parseInt(this.hsrpWarnEnd) >= parseInt(this.hsrpMax)) {
          this.thresholdErrorMsg4 = 'Alert Value should be less than Max Value';
        }

        $('#add-hsrpWarnEnd').css('border-bottom', '0.0625rem solid red');
        thrFlag = false;
      } else {
        $('#add-hsrpWarnEnd').css('border-bottom', '0.0625rem solid #999');
      }
      if (this.hsrpMax == '' || isNaN(this.hsrpMax) || this.hsrpMax < 0 || this.hsrpMax % 100 != 0) {

        if (isNaN(this.hsrpMax)) {
          this.thresholdErrorMsg1 = 'Threshold values should be numeric';
        }
        if (this.hsrpMax % 100 != 0) {
          this.thresholdErrorMsg5 = 'Max value should be multiples of 100';
        }

        $('#add-hsrpMax').css('border-bottom', '0.0625rem solid red');
        thrFlag = false;
      } else {
        $('#add-hsrpMax').css('border-bottom', '0.0625rem solid #999');
      }
      if (this.staticRoutesWarnStart == '' || isNaN(this.staticRoutesWarnStart) || this.staticRoutesWarnStart < 0 || parseInt(this.staticRoutesWarnStart) >= parseInt(this.staticRoutesWarnEnd) || parseInt(this.staticRoutesWarnStart) >= parseInt(this.staticRoutesMax)) {

        if (isNaN(this.staticRoutesWarnStart)) {
          this.thresholdErrorMsg1 = 'Threshold values should be numeric';
        }
        if (parseInt(this.staticRoutesWarnStart) >= parseInt(this.staticRoutesWarnEnd)) {
          this.thresholdErrorMsg2 = 'Warning Value should be less than Alert Value';
        }
        if (parseInt(this.staticRoutesWarnStart) >= parseInt(this.staticRoutesMax)) {
          this.thresholdErrorMsg3 = 'Warning Value should be less than Max Value';
        }

        $('#add-staticRoutesWarnStart').css('border-bottom', '0.0625rem solid red');
        thrFlag = false;
      } else {
        $('#add-staticRoutesWarnStart').css('border-bottom', '0.0625rem solid #999');
      }
      if (this.staticRoutesWarnEnd == '' || isNaN(this.staticRoutesWarnEnd) || this.staticRoutesWarnEnd < 0 || parseInt(this.staticRoutesWarnEnd) >= parseInt(this.staticRoutesMax)) {

        if (isNaN(this.staticRoutesWarnEnd)) {
          this.thresholdErrorMsg1 = 'Threshold values should be numeric';
        }
        if (parseInt(this.staticRoutesWarnEnd) >= parseInt(this.staticRoutesMax)) {
          this.thresholdErrorMsg4 = 'Alert Value should be less than Max Value';
        }

        $('#add-staticRoutesWarnEnd').css('border-bottom', '0.0625rem solid red');
        thrFlag = false;
      } else {
        $('#add-staticRoutesWarnEnd').css('border-bottom', '0.0625rem solid #999');
      }
      if (this.staticRoutesMax == '' || isNaN(this.staticRoutesMax) || this.staticRoutesMax < 0 || this.staticRoutesMax % 100 != 0) {

        if (isNaN(this.staticRoutesMax)) {
          this.thresholdErrorMsg1 = 'Threshold values should be numeric';
        }
        if (this.staticRoutesMax % 100 != 0) {
          this.thresholdErrorMsg5 = 'Max value should be multiples of 100';
        }

        $('#add-staticRoutesMax').css('border-bottom', '0.0625rem solid red');
        thrFlag = false;
      } else {
        $('#add-staticRoutesMax').css('border-bottom', '0.0625rem solid #999');
      }
    }
    //Thresholds Validation Ends
    if (this.subTypes) {
      if (this.ComVersion == 'Type*') {
        $('#add-ComSubVersion').css('border-bottom', '0.0625rem solid #999');
      } else if (this.ComSubVersion == 'Sub Type' && this.subTypes.length > 0) {
        $('#add-ComSubVersion').css('border-bottom', '0.0625rem solid red');
        thrFlag = false;
      } else {
        $('#add-ComSubVersion').css('border-bottom', '0.0625rem solid #999');
      }
    } else {
      $('#add-ComSubVersion').css('border-bottom', '0.0625rem solid #999');
    }
    return thrFlag;
  }

  ipValidation(ipAddr) {
    var ipformat = "/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/";
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAddr)) {
      return 'success';
    } else {
      return 'failed';
    }
  }

  previous(event) {
    var fieldSet = event.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    $(fieldSet).fadeOut(1, () => { });
    $(".f1-step.active").removeClass('active').addClass('activated').prev().addClass('active');
    $(fieldSet).prev().fadeIn(1, () => { });
  }

  tabClick(event, id) {
    var flag_id = true;
    if (id == 2 || id == 3) {
      if ($(".f1-step.active").attr('id') == "f1-step_1") {
        if ($('#addComponentName').val() == '') {
          $('#NameBar').css('border-bottom', '0.0625rem solid red');
          flag_id = false;
        } else {
          $('#NameBar').css('border-bottom', '0.0625rem solid #999');
        }
      }
    }
    if (id == 3) {
      if ($('#addComponentType').val() == 'Type*') {
        $('#Typebar').css('border-bottom', '0.0625rem solid red');
        flag_id = false;
      } else {
        $('#Typebar').css('border-bottom', '0.0625rem solid #999');
      }
      if (!this.thresholdsValidate()) {
        flag_id = false;
      }
    }
    if (flag_id) {
      if ($(".f1-step.active").attr('id') != 'complete') {
        var fieldSet = event.currentTarget.parentElement;
        if ($(fieldSet).attr("class") == 'f1-step activated' || $(fieldSet).attr("class") == 'f1-step activated next') {
          $(".f1-step.active").removeClass('active').addClass('activated');
          $(fieldSet).removeClass('activated').addClass('active');
          $('fieldSet').fadeOut(1, () => { });
          $("#fieldset_" + id).fadeIn(1, () => { });
        }
      }
    }
  }

  editComponentClick(i, type = 'auto') {
    if (type == 'auto') {
      sessionStorage.setItem('selectedComponentActionButtonId', i);
    }
    this.clearDcActionsDropDown(0, 'clearAll');
    for (let j = 0; j < this.dataCentersDetails.length; j++) {
      if (j == i) {
        if ($('#comp_filter').val() - 1 == i) {
          $('#editComponentDropdown' + i).hide();
          $('#comp_filter').val("");
        } else {
          $('#editComponentDropdown' + i).show();
          $('#comp_filter').val(i + 1);
        }
      } else {
        $('#editComponentDropdown' + j).hide();
      }
    }
  }

  validateEdit(e) {
    var flag = false;
    if ($('#editDataCenterName').val() == '') {
      $('#nameBar').css('border-bottom', '0.0625rem solid red');
      var flag = true;
    } else {
      $('#nameBar').css('border-bottom', '0.0625rem solid #999');
    }
    if ($('#editDataCenterCountry').val() == 'Country*') {
      $('#countryBar').css('border-bottom', '0.0625rem solid red');
      var flag = true;
    } else {
      $('#countryBar').css('border-bottom', '0.0625rem solid #999');
    }
    if ($('#editDataCenterCountry').val() != 'Country*') {
      if ($('#editDataCenterState').val() == 'State*') {
        $('#stateBar').css('border-bottom', '0.0625rem solid red');
        var flag = true;
      } else {
        $('#stateBar').css('border-bottom', '0.0625rem solid #999');
      }
      if ($('#editDataCenterState').val() != 'State*') {
        if ($('#editDataCenterCity').val() == 'City*') {
          $('#cityBar').css('border-bottom', '0.0625rem solid red');
          var flag = true;
        } else {
          $('#cityBar').css('border-bottom', '0.0625rem solid #999');
        }
      }
    }
    if ($('#editDataCenterTimezone').val() == 'Time zone*') {
      $('#timezoneBar').css('border-bottom', '0.0625rem solid red');
      var flag = true;
    } else {
      $('#timezoneBar').css('border-bottom', '0.0625rem solid #999');
    }

    if (flag != true) {
      let editName = $('#editDataCenterName').val();
      let editId = $('#editDataCenterId').val();
      let editCountry = $('#editDataCenterCountry').val();
      let editState = $('#editDataCenterState').val();
      let editCity = $('#editDataCenterCity').val();
      let editTimezone = $('#editDataCenterTimezone').val();

      this.config.editDataCenter(this.userId, editId, editName, editCountry, editState, editCity, editTimezone).subscribe(res => {
        $('.modalForm').hide();
        $('.custom_modal_dcEdit').css('top', '35%');
        $('.apiResponseDiv').show();
        if (res.status == 'success') {
          this.adminLayoutComponnet.setMenu();
          $('#callMatricsDropdown' + this.editIdIndex).hide();
          this.provisioningList(this.editData.id, true);
          $('.apiFailed').hide();
          $('.apiSuccess').show();
        } else {
          $('#editApiErrorMsg').html(res.message);
          $('.apiSuccess').hide();
          $('.apiFailed').show();
        }
      });
    }
  }

  validateEditComponent(e) {

    this.thresholdErrorMsg1 = '';
    this.thresholdErrorMsg2 = '';
    this.thresholdErrorMsg3 = '';
    this.thresholdErrorMsg4 = '';
    this.thresholdErrorMsg5 = '';

    var flag = false;
    if ($('#editComponentName').val() == '' || $('#editComponentName').val().length > 100) {
      $('#editComponentBar1').css('border-bottom', '0.0625rem solid red');
      flag = true;
    } else {
      $('#editComponentBar1').css('border-bottom', '0.0625rem solid #999');
    }
    if ($('#editComponentNameType').val() == 'Type*') {
      $('#editComponentBar2').css('border-bottom', '0.0625rem solid red');
      flag = true;
    } else {
      $('#editComponentBar2').css('border-bottom', '0.0625rem solid #999');
    }
    /*if ($('#editComponentVersion').val() == 'Sub Type') {
      $('#editComponentBar3').css('border-bottom', '0.0625rem solid red');
      var flag = true;
    } else {
      $('#editComponentBar3').css('border-bottom', '0.0625rem solid #999');
    }*/
    if ($('#editComponentIpAddress').val() == '') {
      $('#editComponentBar4').css('border-bottom', '0.0625rem solid red');
      flag = true;
    } else {
      var ip_val = this.ipValidation($('#editComponentIpAddress').val());
      if (ip_val == 'success') {
        $('#editComponentBar4').css('border-bottom', '0.0625rem solid #999');
      } else {
        $('#editComponentBar4').css('border-bottom', '0.0625rem solid red');
        flag = true;
      }
    }
    if ($('#editComponentComponentUser').val() == '') {
      $('#editComponentBar5').css('border-bottom', '0.0625rem solid red');
      flag = true;
    } else {
      $('#editComponentBar5').css('border-bottom', '0.0625rem solid #999');
    }
    if ($('#editComponentPassword').val() == '') {
      $('#editComponentBar6').css('border-bottom', '0.0625rem solid red');
      flag = true;
    } else {
      $('#editComponentBar6').css('border-bottom', '0.0625rem solid #999');
    }

    if ($('#editComponentNameType').val() == 'NEXUS') {
      if ($('#editComponentvrfWarnStart').val() == '' || isNaN($('#editComponentvrfWarnStart').val()) || $('#editComponentvrfWarnStart').val() < 0 || parseInt($('#editComponentvrfWarnStart').val()) >= parseInt($('#editComponentvrfWarnEnd').val()) || parseInt($('#editComponentvrfWarnStart').val()) >= parseInt($('#editComponentvrfMax').val())) {

        if (isNaN($('#editComponentvrfWarnStart').val())) {
          this.thresholdErrorMsg1 = 'Threshold values should be numeric';
        }
        if (parseInt($('#editComponentvrfWarnStart').val()) >= parseInt($('#editComponentvrfWarnEnd').val())) {
          this.thresholdErrorMsg2 = 'Warning Value should be less than Alert Value';
        }
        if (parseInt($('#editComponentvrfWarnStart').val()) >= parseInt($('#editComponentvrfMax').val())) {
          this.thresholdErrorMsg3 = 'Warning Value should be less than Max Value';
        }

        $('#editComponentBar77').css('border-bottom', '0.0625rem solid red');
        flag = true;
      } else {
        $('#editComponentBar77').css('border-bottom', '0.0625rem solid #999');
      }
      if ($('#editComponentvrfWarnEnd').val() == '' || isNaN($('#editComponentvrfWarnEnd').val()) || $('#editComponentvrfWarnEnd').val() < 0 || parseInt($('#editComponentvrfWarnEnd').val()) >= parseInt($('#editComponentvrfMax').val())) {

        if (isNaN($('#editComponentvrfWarnEnd').val())) {
          this.thresholdErrorMsg1 = 'Threshold values should be numeric';
        }
        if (parseInt($('#editComponentvrfWarnEnd').val()) >= parseInt($('#editComponentvrfMax').val())) {
          this.thresholdErrorMsg4 = 'Alert Value should be less than Max Value';
        }

        $('#editComponentBar8').css('border-bottom', '0.0625rem solid red');
        flag = true;
      } else {
        $('#editComponentBar8').css('border-bottom', '0.0625rem solid #999');
      }
      if ($('#editComponentvrfMax').val() == '' || isNaN($('#editComponentvrfMax').val()) || $('#editComponentvrfMax').val() < 0 || $('#editComponentvrfMax').val() % 100 != 0) {

        if (isNaN($('#editComponentvrfMax').val())) {
          this.thresholdErrorMsg1 = 'Threshold values should be numeric';
        }
        if ($('#editComponentvrfMax').val() % 100 != 0) {
          this.thresholdErrorMsg5 = 'Max value should be multiples of 100';
        }

        $('#editComponentBar9').css('border-bottom', '0.0625rem solid red');
        flag = true;
      } else {
        $('#editComponentBar9').css('border-bottom', '0.0625rem solid #999');
      }

      if ($('#editComponentbgpPeersWarnStart').val() == '' || isNaN($('#editComponentbgpPeersWarnStart').val()) || $('#editComponentbgpPeersWarnStart').val() < 0 || parseInt($('#editComponentbgpPeersWarnStart').val()) >= parseInt($('#editComponentbgpPeersWarnEnd').val()) || parseInt($('#editComponentbgpPeersWarnStart').val()) >= parseInt($('#editComponentbgpPeersMax').val())) {

        if (isNaN($('#editComponentbgpPeersWarnStart').val())) {
          this.thresholdErrorMsg1 = 'Threshold values should be numeric';
        }
        if (parseInt($('#editComponentbgpPeersWarnStart').val()) >= parseInt($('#editComponentbgpPeersWarnEnd').val())) {
          this.thresholdErrorMsg2 = 'Warning Value should be less than Alert Value';
        }
        if (parseInt($('#editComponentbgpPeersWarnStart').val()) >= parseInt($('#editComponentbgpPeersMax').val())) {
          this.thresholdErrorMsg3 = 'Warning Value should be less than Max Value';
        }

        $('#editComponentBar10').css('border-bottom', '0.0625rem solid red');
        flag = true;
      } else {
        $('#editComponentBar10').css('border-bottom', '0.0625rem solid #999');
      }
      if ($('#editComponentbgpPeersWarnEnd').val() == '' || isNaN($('#editComponentbgpPeersWarnEnd').val()) || $('#editComponentbgpPeersWarnEnd').val() < 0 || parseInt($('#editComponentbgpPeersWarnEnd').val()) >= parseInt($('#editComponentbgpPeersMax').val())) {

        if (isNaN($('#editComponentbgpPeersWarnEnd').val())) {
          this.thresholdErrorMsg1 = 'Threshold values should be numeric';
        }
        if (parseInt($('#editComponentbgpPeersWarnEnd').val()) >= parseInt($('#editComponentbgpPeersMax').val())) {
          this.thresholdErrorMsg4 = 'Alert Value should be less than Max Value';
        }

        $('#editComponentBar11').css('border-bottom', '0.0625rem solid red');
        flag = true;
      } else {
        $('#editComponentBar11').css('border-bottom', '0.0625rem solid #999');
      }
      if ($('#editComponentbgpPeersMax').val() == '' || isNaN($('#editComponentbgpPeersMax').val()) || $('#editComponentbgpPeersMax').val() < 0 || $('#editComponentbgpPeersMax').val() % 100 != 0) {

        if (isNaN($('#editComponentbgpPeersMax').val())) {
          this.thresholdErrorMsg1 = 'Threshold values should be numeric';
        }
        if ($('#editComponentbgpPeersMax').val() % 100 != 0) {
          this.thresholdErrorMsg5 = 'Max value should be multiples of 100';
        }

        $('#editComponentBar12').css('border-bottom', '0.0625rem solid red');
        flag = true;
      } else {
        $('#editComponentBar12').css('border-bottom', '0.0625rem solid #999');
      }

      if ($('#editComponentvlanWarnStart').val() == '' || isNaN($('#editComponentvlanWarnStart').val()) || $('#editComponentvlanWarnStart').val() < 0 || parseInt($('#editComponentvlanWarnStart').val()) >= parseInt($('#editComponentvlanWarnEnd').val()) || parseInt($('#editComponentvlanWarnStart').val()) >= parseInt($('#editComponentvlanMax').val())) {

        if (isNaN($('#editComponentvlanWarnStart').val())) {
          this.thresholdErrorMsg1 = 'Threshold values should be numeric';
        }
        if (parseInt($('#editComponentvlanWarnStart').val()) >= parseInt($('#editComponentvlanWarnEnd').val())) {
          this.thresholdErrorMsg2 = 'Warning Value should be less than Alert Value';
        }
        if (parseInt($('#editComponentvlanWarnStart').val()) >= parseInt($('#editComponentvlanMax').val())) {
          this.thresholdErrorMsg3 = 'Warning Value should be less than Max Value';
        }

        $('#editComponentBar13').css('border-bottom', '0.0625rem solid red');
        flag = true;
      } else {
        $('#editComponentBar13').css('border-bottom', '0.0625rem solid #999');
      }
      if ($('#editComponentvlanWarnEnd').val() == '' || isNaN($('#editComponentvlanWarnEnd').val()) || $('#editComponentvlanWarnEnd').val() < 0 || parseInt($('#editComponentvlanWarnEnd').val()) >= parseInt($('#editComponentvlanMax').val())) {

        if (isNaN($('#editComponentvlanWarnEnd').val())) {
          this.thresholdErrorMsg1 = 'Threshold values should be numeric';
        }
        if (parseInt($('#editComponentvlanWarnEnd').val()) >= parseInt($('#editComponentvlanMax').val())) {
          this.thresholdErrorMsg4 = 'Alert Value should be less than Max Value';
        }

        $('#editComponentBar14').css('border-bottom', '0.0625rem solid red');
        flag = true;
      } else {
        $('#editComponentBar14').css('border-bottom', '0.0625rem solid #999');
      }
      if ($('#editComponentvlanMax').val() == '' || isNaN($('#editComponentvlanMax').val()) || $('#editComponentvlanMax').val() < 0 || $('#editComponentvlanMax').val() % 100 != 0) {

        if (isNaN($('#editComponentvlanMax').val())) {
          this.thresholdErrorMsg1 = 'Threshold values should be numeric';
        }
        if ($('#editComponentvlanMax').val() % 100 != 0) {
          this.thresholdErrorMsg5 = 'Max value should be multiples of 100';
        }

        $('#editComponentBar15').css('border-bottom', '0.0625rem solid red');
        flag = true;
      } else {
        $('#editComponentBar15').css('border-bottom', '0.0625rem solid #999');
      }

      if ($('#editComponenthsrpWarnStart').val() == '' || isNaN($('#editComponenthsrpWarnStart').val()) || $('#editComponenthsrpWarnStart').val() < 0 || parseInt($('#editComponenthsrpWarnStart').val()) >= parseInt($('#editComponenthsrpWarnEnd').val()) || parseInt($('#editComponenthsrpWarnStart').val()) >= parseInt($('#editComponenthsrpMax').val())) {

        if (isNaN($('#editComponenthsrpWarnStart').val())) {
          this.thresholdErrorMsg1 = 'Threshold values should be numeric';
        }
        if (parseInt($('#editComponenthsrpWarnStart').val()) >= parseInt($('#editComponenthsrpWarnEnd').val())) {
          this.thresholdErrorMsg2 = 'Warning Value should be less than Alert Value';
        }
        if (parseInt($('#editComponenthsrpWarnStart').val()) >= parseInt($('#editComponenthsrpMax').val())) {
          this.thresholdErrorMsg3 = 'Warning Value should be less than Max Value';
        }

        $('#editComponentBar16').css('border-bottom', '0.0625rem solid red');
        flag = true;
      } else {
        $('#editComponentBar16').css('border-bottom', '0.0625rem solid #999');
      }
      if ($('#editComponenthsrpWarnEnd').val() == '' || isNaN($('#editComponenthsrpWarnEnd').val()) || $('#editComponenthsrpWarnEnd').val() < 0 || parseInt($('#editComponenthsrpWarnEnd').val()) >= parseInt($('#editComponenthsrpMax').val())) {

        if (isNaN($('#editComponenthsrpWarnEnd').val())) {
          this.thresholdErrorMsg1 = 'Threshold values should be numeric';
        }
        if (parseInt($('#editComponenthsrpWarnEnd').val()) >= parseInt($('#editComponenthsrpMax').val())) {
          this.thresholdErrorMsg4 = 'Alert Value should be less than Max Value';
        }

        $('#editComponentBar17').css('border-bottom', '0.0625rem solid red');
        flag = true;
      } else {
        $('#editComponentBar17').css('border-bottom', '0.0625rem solid #999');
      }
      if ($('#editComponenthsrpMax').val() == '' || isNaN($('#editComponenthsrpMax').val()) || $('#editComponenthsrpMax').val() < 0 || $('#editComponenthsrpMax').val() % 100 != 0) {

        if (isNaN($('#editComponenthsrpMax').val())) {
          this.thresholdErrorMsg1 = 'Threshold values should be numeric';
        }
        if ($('#editComponenthsrpMax').val() % 100 != 0) {
          this.thresholdErrorMsg5 = 'Max value should be multiples of 100';
        }

        $('#editComponentBar18').css('border-bottom', '0.0625rem solid red');
        flag = true;
      } else {
        $('#editComponentBar18').css('border-bottom', '0.0625rem solid #999');
      }

      if ($('#editComponentstaticRoutesWarnStart').val() == '' || isNaN($('#editComponentstaticRoutesWarnStart').val()) || $('#editComponentstaticRoutesWarnStart').val() < 0 || parseInt($('#editComponentstaticRoutesWarnStart').val()) >= parseInt($('#editComponentstaticRoutesWarnEnd').val()) || parseInt($('#editComponentstaticRoutesWarnStart').val()) >= parseInt($('#editComponentstaticRoutesMax').val())) {

        if (isNaN($('#editComponentstaticRoutesWarnStart').val())) {
          this.thresholdErrorMsg1 = 'Threshold values should be numeric';
        }
        if (parseInt($('#editComponentstaticRoutesWarnStart').val()) >= parseInt($('#editComponentstaticRoutesWarnEnd').val())) {
          this.thresholdErrorMsg2 = 'Warning Value should be less than Alert Value';
        }
        if (parseInt($('#editComponentstaticRoutesWarnStart').val()) >= parseInt($('#editComponentstaticRoutesMax').val())) {
          this.thresholdErrorMsg3 = 'Warning Value should be less than Max Value';
        }

        $('#editComponentBar19').css('border-bottom', '0.0625rem solid red');
        flag = true;
      } else {
        $('#editComponentBar19').css('border-bottom', '0.0625rem solid #999');
      }
      if ($('#editComponentstaticRoutesWarnEnd').val() == '' || isNaN($('#editComponentstaticRoutesWarnEnd').val()) || $('#editComponentstaticRoutesWarnEnd').val() < 0 || parseInt($('#editComponentstaticRoutesWarnEnd').val()) >= parseInt($('#editComponentstaticRoutesMax').val())) {

        if (isNaN($('#editComponentstaticRoutesWarnEnd').val())) {
          this.thresholdErrorMsg1 = 'Threshold values should be numeric';
        }
        if (parseInt($('#editComponentstaticRoutesWarnEnd').val()) >= parseInt($('#editComponentstaticRoutesMax').val())) {
          this.thresholdErrorMsg4 = 'Alert Value should be less than Max Value';
        }

        $('#editComponentBar20').css('border-bottom', '0.0625rem solid red');
        flag = true;
      } else {
        $('#editComponentBar20').css('border-bottom', '0.0625rem solid #999');
      }
      if ($('#editComponentstaticRoutesMax').val() == '' || isNaN($('#editComponentstaticRoutesMax').val()) || $('#editComponentstaticRoutesMax').val() < 0 || $('#editComponentstaticRoutesMax').val() % 100 != 0) {

        if (isNaN($('#editComponentstaticRoutesMax').val())) {
          this.thresholdErrorMsg1 = 'Threshold values should be numeric';
        }
        if ($('#editComponentstaticRoutesMax').val() % 100 != 0) {
          this.thresholdErrorMsg5 = 'Max value should be multiples of 100';
        }

        $('#editComponentBar21').css('border-bottom', '0.0625rem solid red');
        flag = true;
      } else {
        $('#editComponentBar21').css('border-bottom', '0.0625rem solid #999');
      }
    }
    if (this.subTypesEdit) {
      if ($('#editComponentNameType').val() == 'Type*') {
        $('#editComponentBar3').css('border-bottom', '0.0625rem solid #999');
      } else if ($('#editComponentVersion').val() == 'Sub Type' && this.subTypesEdit.length > 0) {
        $('#editComponentBar3').css('border-bottom', '0.0625rem solid red');
        flag = true;
      } else {
        $('#editComponentBar3').css('border-bottom', '0.0625rem solid #999');
      }
    } else {
      $('#editComponentBar3').css('border-bottom', '0.0625rem solid #999');
    }


    if (flag != true) {
      let editComponentName = $('#editComponentName').val();
      let editComponentNameType = $('#editComponentNameType').val();
      let editComponentVersion = $('#editComponentVersion').val();
      let editComponentIpAddress = $('#editComponentIpAddress').val();
      let editComponentComponentUser = $('#editComponentComponentUser').val();
      let editComponentPassword = $('#editComponentPassword').val();
      let editComponentEnablePassword = editComponentNameType == 'ASA' ? $('#editComponentEnablePassword').val() : '';
      let editComponentvrfWarnStart = editComponentNameType == 'NEXUS' ? $('#editComponentvrfWarnStart').val() : '';
      let editComponentvrfWarnEnd = editComponentNameType == 'NEXUS' ? $('#editComponentvrfWarnEnd').val() : '';
      let editComponentvrfMax = editComponentNameType == 'NEXUS' ? $('#editComponentvrfMax').val() : '';
      let editComponentbgpPeersWarnStart = editComponentNameType == 'NEXUS' ? $('#editComponentbgpPeersWarnStart').val() : '';
      let editComponentbgpPeersWarnEnd = editComponentNameType == 'NEXUS' ? $('#editComponentbgpPeersWarnEnd').val() : '';
      let editComponentbgpPeersMax = editComponentNameType == 'NEXUS' ? $('#editComponentbgpPeersMax').val() : '';
      let editComponentvlanWarnStart = editComponentNameType == 'NEXUS' ? $('#editComponentvlanWarnStart').val() : '';
      let editComponentvlanWarnEnd = editComponentNameType == 'NEXUS' ? $('#editComponentvlanWarnEnd').val() : '';
      let editComponentvlanMax = editComponentNameType == 'NEXUS' ? $('#editComponentvlanMax').val() : '';
      let editComponenthsrpWarnStart = editComponentNameType == 'NEXUS' ? $('#editComponenthsrpWarnStart').val() : '';
      let editComponenthsrpWarnEnd = editComponentNameType == 'NEXUS' ? $('#editComponenthsrpWarnEnd').val() : '';
      let editComponenthsrpMax = editComponentNameType == 'NEXUS' ? $('#editComponenthsrpMax').val() : '';
      let editComponentstaticRoutesWarnStart = editComponentNameType == 'NEXUS' ? $('#editComponentstaticRoutesWarnStart').val() : '';
      let editComponentstaticRoutesWarnEnd = editComponentNameType == 'NEXUS' ? $('#editComponentstaticRoutesWarnEnd').val() : '';
      let editComponentstaticRoutesMax = editComponentNameType == 'NEXUS' ? $('#editComponentstaticRoutesMax').val() : '';

      if (editComponentVersion == 'Sub Type') {
        editComponentVersion = '';
      }

      this.config.editComponent(this.userId, this.currentDataCenterComponentId, editComponentName, editComponentNameType, editComponentVersion, editComponentIpAddress, editComponentComponentUser, editComponentPassword, editComponentEnablePassword, editComponentvrfWarnStart, editComponentvrfWarnEnd, editComponentvrfMax, editComponentbgpPeersWarnStart, editComponentbgpPeersWarnEnd, editComponentbgpPeersMax, editComponentvlanWarnStart, editComponentvlanWarnEnd, editComponentvlanMax, editComponenthsrpWarnStart, editComponenthsrpWarnEnd, editComponenthsrpMax, editComponentstaticRoutesWarnStart, editComponentstaticRoutesWarnEnd, editComponentstaticRoutesMax).subscribe(res => {

        $('.modalForm').hide();
        $('.custom_modal_componentEdit').css('top', '35%');
        $('.custom_modal_componentNexusEdit').css('top', '35%');
        $('.apiResponseDiv').show();
        if (res.status == 'success') {
          this.adminLayoutComponnet.setMenu();
          $('#editComponentDropdown' + this.currentRow).hide();
          this.setDataCenterComponnets(this.currentDC);
          $('.apiFailed').hide();
          $('.apiSuccess').show();
        } else {
          $('#editComponentApiErrorMsg').html(res.message);
          $('.apiSuccess').hide();
          $('.apiFailed').show();
        }
      });
    } else {
      if (this.thresholdErrorMsg1 != '') {
        $('#editthresholdErrorMsg1').slideDown().text(this.thresholdErrorMsg1).css('background', 'red').slideUp(5000);
      }
      if (this.thresholdErrorMsg2 != '') {
        $('#editthresholdErrorMsg2').slideDown().text(this.thresholdErrorMsg2).css('background', 'red').slideUp(5000);
      }
      if (this.thresholdErrorMsg3 != '') {
        $('#editthresholdErrorMsg3').slideDown().text(this.thresholdErrorMsg3).css('background', 'red').slideUp(5000);
      }
      if (this.thresholdErrorMsg4 != '') {
        $('#editthresholdErrorMsg4').slideDown().text(this.thresholdErrorMsg4).css('background', 'red').slideUp(5000);
      }
      if (this.thresholdErrorMsg5 != '') {
        $('#editthresholdErrorMsg5').slideDown().text(this.thresholdErrorMsg5).css('background', 'red').slideUp(5000);
      }
    }
  }

  ngOnInit() {

    sessionStorage.setItem('selectedComponentActionButtonId', '');

    if (!sessionStorage.username || !sessionStorage.id || typeof sessionStorage.username == 'undefined' || typeof sessionStorage.id == 'undefined') {
      this.router.navigate(['login']);
    }
    this.CountryTimezoneList();
    this.ComponentTypeList();

    this.provisioningList();

    setTimeout(() => {
      $('#provisioning').removeClass('pcoded-trigger');
    }, 1000);

  }

  onClickedOutside(e: Event) {
    //dosomething
  }

  CountryTimezoneList() {
    this.config.getCountryList().subscribe(res => {
      this.country_list = res.country;
      this.time_zone_list = res.timezone;
    });
  }

  ComponentTypeList() {
    this.config.getTypes().subscribe(res => {
      this.version = res;
    });
  }

  provisioningList(id = 0, loop_status = false) {
    this.config.getProvisioningList().subscribe(res => {
      this.dataCenters = res;
      if (this.dataCenters.length >= 1) {
        $('#withdcBlock').show();
      } else {
        $('#withoutdcBlock').show();
      }

      if (loop_status) {
        id = this.findDataCenterIndex(id);
      }

      this.selectedDataCenter = id;
      if (this.dataCenters.length > 0) {
        this.dataCenterScrollClick(id, 'scroll');
      }
    });
  }

  findDataCenterIndex(responseId) {
    for (let i = 0; i < this.dataCenters.length; i++) {
      if (this.dataCenters[i].id == responseId) {
        return i;
      }
    }
  }

  onSubmit() {
    var flag = false;

    if ($('#addDataCenterName').val() == '') {
      $('#addnameBar').css('border-bottom', '0.0625rem solid red');
      var flag = true;
    } else {
      $('#addnameBar').css('border-bottom', '0.0625rem solid #999');
    }
    if ($('#addDataCenterCountry').val() == 'Country*') {
      $('#addcountryBar').css('border-bottom', '0.0625rem solid red');
      var flag = true;
    } else {
      $('#addcountryBar').css('border-bottom', '0.0625rem solid #999');
    }
    if ($('#addDataCenterCountry').val() != 'Country*') {
      if ($('#addDataCenterState').val() == 'State*') {
        $('#addstateBar').css('border-bottom', '0.0625rem solid red');
        var flag = true;
      } else {
        $('#addstateBar').css('border-bottom', '0.0625rem solid #999');
      }
      if ($('#addDataCenterState').val() != 'State*') {
        if ($('#addDataCenterCity').val() == 'City*') {
          $('#addcityBar').css('border-bottom', '0.0625rem solid red');
          var flag = true;
        } else {
          $('#addcityBar').css('border-bottom', '0.0625rem solid #999');
        }
      }
    }
    if ($('#addDataCenterTimezone').val() == 'Time zone*') {
      $('#addtimezoneBar').css('border-bottom', '0.0625rem solid red');
      var flag = true;
    } else {
      $('#addtimezoneBar').css('border-bottom', '0.0625rem solid #999');
    }

    if (flag != true) {
      this.config.addDataCenter(this.userId, this.name, this.country, this.state, this.city, this.timezone).subscribe(res => {
        $('.modalForm').hide();
        $('.custom_modal_dcAdd').css('top', '35%');
        $('.apiResponseDiv').show();
        var sucflag = false;
        if (res.status == 'success') {
          this.name = '';
          this.country = 'Country*';
          this.state = 'State*';
          this.city = 'City*';
          this.timezone = 'Time zone*';
          $('.apiFailed').hide();
          $('.apiSuccess').show();
          $('#withoutdcBlock').hide();
          sucflag = true;
        } else {
          $('#apiErrorMsg').html(res.message);
          $('.apiSuccess').hide();
          $('.apiFailed').show();
        }

        if (sucflag != false) {
          this.adminLayoutComponnet.setMenu();
          let lastInsertedDataCenterId = res.id;
          this.provisioningList(lastInsertedDataCenterId, true);
        }
      });
    }
  }

  addDataAgain() {
    $('.modalForm').show();
    $('.apiFailed').hide();
  }

  activateCard(id) {
    var preId = $('.tab-tile-active').attr('id');
    $('#' + preId).attr('class', 'col-md-3 col-sm-6 tab-tile');
    $('#rsddropdown' + preId).hide();
    $('#rsddropdown' + id).show();
  }
  deactivateCard() {
    var preId = $('.tab-tile-active').attr('id');
    $('#' + preId).attr('class', 'col-md-3 col-sm-6 tab-tile');
    $('#rsddropdown' + preId).hide();
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
    if (sessionStorage.previousSelectedId != id) {
      this.clearDcActionsDropDown(id);
    }
    sessionStorage.setItem('previousSelectedId', id);
  }

  clearDcActionsDropDown(id, type = 'clearSelected') {
    this.callMatricsFilter = false;
    for (let i = 0; i < this.dataCenters.length; i++) {
      if (type == 'clearAll') {
        $('#callMatricsDropdown' + i).hide();
      } else {
        if (id != i) {
          $('#callMatricsDropdown' + i).hide();
        }
      }
    }
  }

  dataCenterClick(id) {
    this.currentDC = this.dataCenters[id].id;
    this.dataCentersDetails = [];
    this.activateCard(id);
    $('#' + id).attr('class', 'col-md-3 col-sm-6 tab-tile tab-tile-active');
    this.setDataCenterComponnets(this.currentDC);
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

  onVersionChange(name) {
    if (name == 'NEXUS') {
      $('.toggleThreshold').show();
    } else {
      $('.toggleThreshold').hide();
    }
    if (name == 'ASA') {
      $('.toggleEnablePassword').show();
    } else {
      $('.toggleEnablePassword').hide();
    }
    if (name == 'Type*') {
      this.ComSubVersion = "Sub Type";
      $("#addComponentSubType").prop("disabled", true);
    } else {
      this.config.getSubtypes(name).subscribe(res => {
        this.subTypes = res;
        this.ComSubVersion = "Sub Type";
        if (this.subTypes.length == 0) {
          $("#addComponentSubType").prop("disabled", true);
        } else {
          $("#addComponentSubType").prop("disabled", false);
        }
      });
    }
  }

  onVersionChangeEdit() {
    let name = $('#editComponentNameType').val();
    if (name == 'Type*') {
      this.editComponentVersion = "Sub Type";
      $("#editComponentVersion").prop("disabled", true);
    } else {
      this.config.getSubtypes(name).subscribe(res => {
        this.subTypesEdit = res;
        this.editComponentVersion = "Sub Type";
        if (this.subTypesEdit.length == 0) {
          $("#editComponentVersion").prop("disabled", true);
        } else {
          $("#editComponentVersion").prop("disabled", false);
        }
      });
    }
    if (name == 'NEXUS') {
      $('#edit-componet-thresholds').removeAttr('hidden');
    } else {
      $('#edit-componet-thresholds').attr("hidden", "true");
    }
    if (name == 'ASA') {
      $('#edit-enable-password').removeAttr('hidden');
    } else {
      $('#edit-enable-password').attr("hidden", "true");
    }
  }

  deleteComponentData(componentId) {
    this.config.componentDelete(this.userId, componentId).subscribe(res => {
      let componentFlag = false;
      $('.componentDeleteModal').hide();
      $('.apiResponseDivComponent').show();
      if (res.status == 'success') {
        componentFlag = true;
        this.adminLayoutComponnet.setMenu();
        $('.apiFailed').hide();
        $('.apiSuccess').show();
      } else {
        $('#apiErrorMsgComponent').html(res.message);
        $('.apiSuccess').hide();
        $('.apiFailed').show();
      }
      if (componentFlag == true) {
        this.dataCentersDetails.splice(this.newDeleteDataIndex, 1);
      }
    });
  }

  loadStates(country, type) {
    if (type == 'edit') {
      if ($('#editDataCenterCountry').val() == 'Country*') {
        $("#editDataCenterState").prop("disabled", true);
        $("#editDataCenterCity").prop("disabled", true);
        this.statesList = [];
        this.citiesList = [];
      } else {
        this.config.getStates($('#editDataCenterCountry').val()).subscribe(res => {
          this.statesList = res;
        });
        $("#editDataCenterState").prop("disabled", false);
      }
    } else {
      this.state = 'State*';
      this.city = 'City*';
      if (country == 'Country*') {
        $("#addDataCenterState").prop("disabled", true);
        $("#addDataCenterCity").prop("disabled", true);
        this.statesList = [];
      } else {
        this.config.getStates(country).subscribe(res => {
          this.statesList = res;
        });
        $("#addDataCenterState").prop("disabled", false);
        $("#addDataCenterCity").prop("disabled", true);
      }
    }
  }

  loadCities(state, type) {
    if (type == 'edit') {
      if ($('#editDataCenterState').val() == 'State*') {
        $("#editDataCenterCity").prop("disabled", true);
        this.citiesList = [];
      } else {
        this.config.getCities($('#editDataCenterState').val()).subscribe(res => {
          this.citiesList = res;
        });
        $("#editDataCenterCity").prop("disabled", false);
      }
    } else {
      this.city = 'City*';
      if (state == 'State*') {
        $("#addDataCenterCity").prop("disabled", true);
        this.citiesList = [];
      } else {
        this.config.getCities(state).subscribe(res => {
          this.citiesList = res;
        });
        $("#addDataCenterCity").prop("disabled", false);
      }
    }
  }

  scrollRightClick() {
    let nextClick = parseInt(sessionStorage.previousSelectedId) + 1;
    if (nextClick >= this.dataCenters.length) {
      nextClick = 0;
    }
    this.dataCenterScrollClick(nextClick);
  }

  scrollLeftClick() {
    let nextClick = parseInt(sessionStorage.previousSelectedId) - 1;
    if (nextClick < 0) {
      nextClick = this.dataCenters.length - 1;
    }
    this.dataCenterScrollClick(nextClick);
  }

}