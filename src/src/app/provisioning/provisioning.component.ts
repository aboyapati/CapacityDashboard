import { Component, OnInit } from '@angular/core';
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
  dataCenters: Datacenter[];
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
  vrfWarnStart: string = '';
  vrfWarnEnd: string = '';
  vrfMax: string = '';

  bgpPeersWarnStart: string = '';
  bgpPeersWarnEnd: string = '';
  bgpPeersMax: string = '';

  vlanWarnStart: string = '';
  vlanWarnEnd: string = '';
  vlanMax: string = '';

  hsrpWarnStart: string = '';
  hsrpWarnEnd: string = '';
  hsrpMax: string = '';

  staticRoutesWarnStart: string = '';
  staticRoutesWarnEnd: string = '';
  staticRoutesMax: string = '';

  vrrpWarnStart: string = '';
  vrrpWarnEnd: string = '';
  vrrpMax: string = '';
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
  private deviceHeight: any;
  private deviceWidth: any;
  private scrollLimit: number;
  private sliderLimit: number;
  private scrollLimitMin: number;
  private scrollLimitMax: number;
  private selectedDataCenter: number;
  progressPerc: any;
  next_step: boolean;

  constructor(private modalService: NgbModal, private config: ConfigService, private router: Router, public adminLayoutComponnet: AdminLayoutComponent) {
    sessionStorage.setItem('previousUrl', this.router.url);
    this.deviceHeight = (window.screen.height);
    this.deviceWidth = (window.screen.width);
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

    this.modalService.open(content, { windowClass: 'custom_modal', backdrop: 'static' }).result.then((result) => {
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
        this.adminLayoutComponnet.setDcLeftNav();
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
    this.modalService.open(content, { windowClass: 'custom_modal', size: 'lg', backdrop: 'static' }).result.then((result) => {
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
          this.config.getSubtypes(type_id).subscribe(res => {
            this.subTypesEdit = res;
          });
          this.editComponentVersion = Subtype_id;
        }
      });

      this.currentRow = id;
      if (editFromView == true) {
        $('#closeViewComponentModal').trigger('click');
      }
    }

    if (type == 'view') {
      $('#editComponentSuccessClose').trigger('click');
    }

    this.modalService.open(content, { windowClass: 'custom_modal', size: 'lg', backdrop: 'static' }).result.then((result) => {
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
          this.provisioningList();
          this.apiError = 1;
          this.currentDataCenterComponentId = res.component_id;
          this.adminLayoutComponnet.setDcLeftNav();
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
      if ($('#addComponentName').val() == '') {
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
    var thrFlag = true;
    if (this.ComVersion == 'NEXUS') {
      if (this.vrfWarnStart == '') {
        $('#add-vrfWarnStart').css('border-bottom', '0.0625rem solid red');
        thrFlag = false;
      } else {
        $('#add-vrfWarnStart').css('border-bottom', '0.0625rem solid #999');
      }
      if (this.vrfWarnEnd == '') {
        $('#add-vrfWarnEnd').css('border-bottom', '0.0625rem solid red');
        thrFlag = false;
      } else {
        $('#add-vrfWarnEnd').css('border-bottom', '0.0625rem solid #999');
      }
      if (this.vrfMax == '') {
        $('#add-vrfMax').css('border-bottom', '0.0625rem solid red');
        thrFlag = false;
      } else {
        $('#add-vrfMax').css('border-bottom', '0.0625rem solid #999');
      }
      if (this.bgpPeersWarnStart == '') {
        $('#add-bgpPeersWarnStart').css('border-bottom', '0.0625rem solid red');
        thrFlag = false;
      } else {
        $('#add-bgpPeersWarnStart').css('border-bottom', '0.0625rem solid #999');
      }
      if (this.bgpPeersWarnEnd == '') {
        $('#add-bgpPeersWarnEnd').css('border-bottom', '0.0625rem solid red');
        thrFlag = false;
      } else {
        $('#add-bgpPeersWarnEnd').css('border-bottom', '0.0625rem solid #999');
      }
      if (this.bgpPeersMax == '') {
        $('#add-bgpPeersMax').css('border-bottom', '0.0625rem solid red');
        thrFlag = false;
      } else {
        $('#add-bgpPeersMax').css('border-bottom', '0.0625rem solid #999');
      }
      if (this.vlanWarnStart == '') {
        $('#add-vlanWarnStart').css('border-bottom', '0.0625rem solid red');
        thrFlag = false;
      } else {
        $('#add-vlanWarnStart').css('border-bottom', '0.0625rem solid #999');
      }
      if (this.vlanWarnEnd == '') {
        $('#add-vlanWarnEnd').css('border-bottom', '0.0625rem solid red');
        thrFlag = false;
      } else {
        $('#add-vlanWarnEnd').css('border-bottom', '0.0625rem solid #999');
      }
      if (this.vlanMax == '') {
        $('#add-vlanMax').css('border-bottom', '0.0625rem solid red');
        thrFlag = false;
      } else {
        $('#add-vlanMax').css('border-bottom', '0.0625rem solid #999');
      }
      if (this.hsrpWarnStart == '') {
        $('#add-hsrpWarnStart').css('border-bottom', '0.0625rem solid red');
        thrFlag = false;
      } else {
        $('#add-hsrpWarnStart').css('border-bottom', '0.0625rem solid #999');
      }
      if (this.hsrpWarnEnd == '') {
        $('#add-hsrpWarnEnd').css('border-bottom', '0.0625rem solid red');
        thrFlag = false;
      } else {
        $('#add-hsrpWarnEnd').css('border-bottom', '0.0625rem solid #999');
      }
      if (this.hsrpMax == '') {
        $('#add-hsrpMax').css('border-bottom', '0.0625rem solid red');
        thrFlag = false;
      } else {
        $('#add-hsrpMax').css('border-bottom', '0.0625rem solid #999');
      }
      if (this.staticRoutesWarnStart == '') {
        $('#add-staticRoutesWarnStart').css('border-bottom', '0.0625rem solid red');
        thrFlag = false;
      } else {
        $('#add-staticRoutesWarnStart').css('border-bottom', '0.0625rem solid #999');
      }
      if (this.staticRoutesWarnEnd == '') {
        $('#add-staticRoutesWarnEnd').css('border-bottom', '0.0625rem solid red');
        thrFlag = false;
      } else {
        $('#add-staticRoutesWarnEnd').css('border-bottom', '0.0625rem solid #999');
      }
      if (this.staticRoutesMax == '') {
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

  editComponentClick(i) {
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

      setTimeout(() => {
        this.config.editDataCenter(this.userId, editId, editName, editCountry, editState, editCity, editTimezone).subscribe(res => {
          $('.modalForm').hide();
          $('.apiResponseDiv').show();
          if (res.status == 'success') {
            this.adminLayoutComponnet.setDcLeftNav();
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
      }, 100);
    }
  }

  validateEditComponent(e) {
    var flag = false;
    if ($('#editComponentName').val() == '') {
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
      if ($('#editComponentvrfWarnStart').val() == '') {
        $('#editComponentBar7').css('border-bottom', '0.0625rem solid red');
        flag = true;
      } else {
        $('#editComponentBar7').css('border-bottom', '0.0625rem solid #999');
      }
      if ($('#editComponentvrfWarnEnd').val() == '') {
        $('#editComponentBar8').css('border-bottom', '0.0625rem solid red');
        flag = true;
      } else {
        $('#editComponentBar8').css('border-bottom', '0.0625rem solid #999');
      }
      if ($('#editComponentvrfMax').val() == '') {
        $('#editComponentBar9').css('border-bottom', '0.0625rem solid red');
        flag = true;
      } else {
        $('#editComponentBar9').css('border-bottom', '0.0625rem solid #999');
      }

      if ($('#editComponentbgpPeersWarnStart').val() == '') {
        $('#editComponentBar10').css('border-bottom', '0.0625rem solid red');
        flag = true;
      } else {
        $('#editComponentBar10').css('border-bottom', '0.0625rem solid #999');
      }
      if ($('#editComponentbgpPeersWarnEnd').val() == '') {
        $('#editComponentBar11').css('border-bottom', '0.0625rem solid red');
        flag = true;
      } else {
        $('#editComponentBar11').css('border-bottom', '0.0625rem solid #999');
      }
      if ($('#editComponentbgpPeersMax').val() == '') {
        $('#editComponentBar12').css('border-bottom', '0.0625rem solid red');
        flag = true;
      } else {
        $('#editComponentBar12').css('border-bottom', '0.0625rem solid #999');
      }

      if ($('#editComponentvlanWarnStart').val() == '') {
        $('#editComponentBar13').css('border-bottom', '0.0625rem solid red');
        flag = true;
      } else {
        $('#editComponentBar13').css('border-bottom', '0.0625rem solid #999');
      }
      if ($('#editComponentvlanWarnEnd').val() == '') {
        $('#editComponentBar14').css('border-bottom', '0.0625rem solid red');
        flag = true;
      } else {
        $('#editComponentBar14').css('border-bottom', '0.0625rem solid #999');
      }
      if ($('#editComponentvlanMax').val() == '') {
        $('#editComponentBar15').css('border-bottom', '0.0625rem solid red');
        flag = true;
      } else {
        $('#editComponentBar15').css('border-bottom', '0.0625rem solid #999');
      }

      if ($('#editComponenthsrpWarnStart').val() == '') {
        $('#editComponentBar16').css('border-bottom', '0.0625rem solid red');
        flag = true;
      } else {
        $('#editComponentBar16').css('border-bottom', '0.0625rem solid #999');
      }
      if ($('#editComponenthsrpWarnEnd').val() == '') {
        $('#editComponentBar17').css('border-bottom', '0.0625rem solid red');
        flag = true;
      } else {
        $('#editComponentBar17').css('border-bottom', '0.0625rem solid #999');
      }
      if ($('#editComponenthsrpMax').val() == '') {
        $('#editComponentBar18').css('border-bottom', '0.0625rem solid red');
        flag = true;
      } else {
        $('#editComponentBar18').css('border-bottom', '0.0625rem solid #999');
      }

      if ($('#editComponentstaticRoutesWarnStart').val() == '') {
        $('#editComponentBar19').css('border-bottom', '0.0625rem solid red');
        flag = true;
      } else {
        $('#editComponentBar19').css('border-bottom', '0.0625rem solid #999');
      }
      if ($('#editComponentstaticRoutesWarnEnd').val() == '') {
        $('#editComponentBar20').css('border-bottom', '0.0625rem solid red');
        flag = true;
      } else {
        $('#editComponentBar20').css('border-bottom', '0.0625rem solid #999');
      }
      if ($('#editComponentstaticRoutesMax').val() == '') {
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

      setTimeout(() => {
        this.config.editComponent(this.userId, this.currentDataCenterComponentId, editComponentName, editComponentNameType, editComponentVersion, editComponentIpAddress, editComponentComponentUser, editComponentPassword, editComponentEnablePassword, editComponentvrfWarnStart, editComponentvrfWarnEnd, editComponentvrfMax, editComponentbgpPeersWarnStart, editComponentbgpPeersWarnEnd, editComponentbgpPeersMax, editComponentvlanWarnStart, editComponentvlanWarnEnd, editComponentvlanMax, editComponenthsrpWarnStart, editComponenthsrpWarnEnd, editComponenthsrpMax, editComponentstaticRoutesWarnStart, editComponentstaticRoutesWarnEnd, editComponentstaticRoutesMax).subscribe(res => {

          $('.modalForm').hide();
          $('.apiResponseDiv').show();
          if (res.status == 'success') {
            this.adminLayoutComponnet.setDcLeftNav();
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
      }, 100);
    }
  }

  ngOnInit() {

    if (!sessionStorage.username || !sessionStorage.id || typeof sessionStorage.username == 'undefined' || typeof sessionStorage.id == 'undefined') {
      this.router.navigate(['login']);
    }
    this.CountryTimezoneList();
    this.ComponentTypeList();

    this.provisioningList();
  }

  onClickedOutside(e: Event) {
    //dosomething
  }

  CountryTimezoneList() {
    setTimeout(() => {
      this.config.getCountryList().subscribe(res => {
        this.country_list = res.country;
        this.time_zone_list = res.timezone;
      });
    }, 100);
  }

  ComponentTypeList() {
    setTimeout(() => {
      this.config.getTypes().subscribe(res => {
        this.version = res;
      });
    }, 100);
  }

  provisioningList(id = 0, loop_status = false) {
    setTimeout(() => {
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
    }, 100);
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

      setTimeout(() => {
        this.config.addDataCenter(this.userId, this.name, this.country, this.state, this.city, this.timezone).subscribe(res => {
          $('.modalForm').hide();
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
            this.adminLayoutComponnet.setDcLeftNav();
            let lastInsertedDataCenterId = res.id;
            this.provisioningList(lastInsertedDataCenterId, true);
          }
        });
      }, 100);
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

  onVersionChangeEdit(name) {
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
        this.adminLayoutComponnet.setDcLeftNav();
        $('.apiFailed').hide();
        $('.apiSuccess').show();
      } else {
        $('#apiErrorMsgComponent').html(res.message);
        $('.apiSuccess').hide();
        $('.apiFailed').show();
      }
      if (componentFlag = true) {
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
}

interface Datacenter {
  id: number;
  name: string;
  country: string;
  state: string;
  city: string;
  time_zone: string;
  components: any;
}
