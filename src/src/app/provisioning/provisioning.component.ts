import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ConfigService } from '../config.service';
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
  state: string = '';
  city: string = '';
  timezone: string = 'Time zone*';

  apiError: number = 1;
  userId: number;
  comName: string;
  dataCenterId: number;
  type: string;
  ipAddress: string;
  ComVersion: string = 'Type*';
  ComSubVersion: string = 'Sub Type';
  componentUser: string;
  password: string;
  enablePassword: string;

  //Thresholds
  vrfWarnStart: string;
  vrfWarnEnd: string;
  vrfMax: string;

  bgpPeersWarnStart: string;
  bgpPeersWarnEnd: string;
  bgpPeersMax: string;

  vlanWarnStart: string;
  vlanWarnEnd: string;
  vlanMax: string;

  hsrpWarnStart: string;
  hsrpWarnEnd: string;
  hsrpMax: string;

  staticRoutesWarnStart: string;
  staticRoutesWarnEnd: string;
  staticRoutesMax: string;

  vrrpWarnStart: string;
  vrrpWarnEnd: string;
  vrrpMax: string;

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
  subTypes : any;
  private scrollLimit: number = 4;
  private scrollLimitMin: number = 0;
  private scrollLimitMax: number = 3;
  private selectedDataCenter: number;
  progressPerc: any;
  next_step: boolean;

  constructor(private modalService: NgbModal, private config: ConfigService) { }

  open(content, id = 0, type) {

    if (type == 'delete' || type == 'edit') {
      this.editIdIndex = id;
      this.editId = this.dataCenters[this.editIdIndex].id;
      this.editData = this.dataCenters[id];
      this.callMatricsFilter = false;
      $('#callMatricsDropdown' + id).hide();
    }

    this.modalService.open(content, { windowClass: 'custom_modal', backdrop : 'static' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if (type == 'add' && this.closeResult == 'Closed with: Close click') {
        this.name = '';
        this.country = 'Country*';
        this.state = '';
        this.city = '';
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
    this.config.deleteDataCenter('1', this.editId).subscribe(res => {
      $('.modalForm').hide();
      $('.apiResponseDiv').show();
      if (res.status == 'success') {
        this.provisioningList();
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
    this.modalService.open(content, { windowClass: 'custom_modal', size: 'lg', backdrop : 'static' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if (this.closeResult == 'Closed with: Close click') {
        this.comName = '';
        this.ComVersion = 'Type*';
        this.ComSubVersion = 'Sub Type';
        this.componentUser = '';
        this.password = '';
		this.ipAddress = '';
		this.enablePassword = '';
        this.vrfWarnStart = ''; this.vrfWarnEnd = ''; this.vrfMax = '';
        this.bgpPeersWarnStart = ''; this.bgpPeersWarnEnd = ''; this.bgpPeersMax = '';
        this.vlanWarnStart = ''; this.vlanWarnEnd = ''; this.vlanMax = '';
        this.hsrpWarnStart = ''; this.hsrpWarnEnd = ''; this.hsrpMax = '';
        this.staticRoutesWarnStart = ''; this.staticRoutesWarnEnd = ''; this.staticRoutesMax = '';
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
      });
      this.currentRow = id;
      if (editFromView == true) {
        $('#closeViewComponentModal').trigger('click');
      }
    }

    if (type == 'view') {
      $('#editComponentSuccessClose').trigger('click');
    }

    this.modalService.open(content, { windowClass: 'custom_modal', size: 'lg', backdrop : 'static' }).result.then((result) => {
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
	if(this.next_step) {
		if(this.ComSubVersion == 'Sub Type') {
			this.ComSubVersion = '';
		}
		this.config.componentAdd(1, this.comName, this.currentDC, '', '', this.ComVersion, this.ComSubVersion, this.componentUser, this.password, '', this.vrfWarnStart, this.vrfWarnEnd, this.vrfMax, this.bgpPeersWarnStart, this.bgpPeersWarnEnd, this.bgpPeersMax, this.vlanWarnStart, this.vlanWarnEnd, this.vlanMax, this.hsrpWarnStart, this.hsrpWarnEnd, this.hsrpMax, this.staticRoutesWarnStart, this.staticRoutesWarnEnd, this.staticRoutesMax, '', '', '').subscribe(res => {
		  if (res.status == 'success') {
			this.provisioningList();
			this.apiError = 1;
			this.currentDataCenterComponentId = res.component_id;
		  } else {
			this.apiError = 0;
		  }
		});
	}
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
    if(value == 1) {
      if ($('#addComponentName').val() == '') {
        $('#NameBar').css('border-bottom', '0.0625rem solid red');
        this.next_step = false;
      } else {
        $('#NameBar').css('border-bottom', '0.0625rem solid #999');
      }
    } else if(value == 2) {
      if ($('#addComponentType').val() == 'Type*') {
        $('#Typebar').css('border-bottom', '0.0625rem solid red');
        this.next_step = false;
      } else {
        $('#Typebar').css('border-bottom', '0.0625rem solid #999');
      }
    } else if(value == 3) {
      if ($('#addIpAddress').val() == '') {
        $('#ipAddressBar').css('border-bottom', '0.0625rem solid red');
        this.next_step = false;
      } else {
        var ip_val = this.ipValidation($('#addIpAddress').val());
		if(ip_val == 'success') {
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
    if(this.next_step) {
      this.progressPerc = ( ( $(".f1-progress-line").css('width').slice(0, -2) * 100 ) / $(".f1-progress").css('width').slice(0, -2));
      var fieldSet = event.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
      $(fieldSet).fadeOut(500, () => { });
      $(".f1-step.active").removeClass('active').addClass('activated').next().removeClass('next').addClass('active').next().addClass('next');
      if (value == 1 && this.progressPerc == '25') {
        $(".f1-progress-line").css('width', '50%');
      } else if (value == 2 && this.progressPerc == '50') {
        $(".f1-progress-line").css('width', '75%');
      } else if (value == 3 && this.progressPerc == '75') {
        $(".f1-progress-line").css('width', '100%');
      }
      if($(".f1-step.active").attr('id') == 'complete') {
        $(".f1-step-icon").css('cursor', 'default');
      }
      $(fieldSet).next().fadeIn(500, () => { });
    }
  }
  
  ipValidation(ipAddr) {
  	var ipformat = "/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/";
	if(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAddr)) {
		return 'success';
	} else {
		return 'failed';
	}
  }

  previous(event) {
    var fieldSet = event.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    $(fieldSet).fadeOut(500, () => { });
    $(".f1-step.active").removeClass('active').addClass('activated').prev().addClass('active');
    $(fieldSet).prev().fadeIn(500, () => { });
  }

  tabClick(event, id) {
    var flag_id = true;
    if($(".f1-step.active").attr('id') == "f1-step_1") {
      if ($('#addComponentName').val() == '') {
        $('#NameBar').css('border-bottom', '0.0625rem solid red');
        var flag_id = false;
      } else {
        $('#NameBar').css('border-bottom', '0.0625rem solid #999');
      }
    } else if($(".f1-step.active").attr('id') == "f1-step_2") {
      if ($('#addComponentType').val() == 'Type*') {
        $('#Typebar').css('border-bottom', '0.0625rem solid red');
        var flag_id = false;
      } else {
        $('#Typebar').css('border-bottom', '0.0625rem solid #999');
      }
    } 
    if(flag_id) {

    if($(".f1-step.active").attr('id') != 'complete') {
      var fieldSet = event.currentTarget.parentElement;
      if ($(fieldSet).attr("class") == 'f1-step activated' || $(fieldSet).attr("class") == 'f1-step activated next') {
        $(".f1-step.active").removeClass('active').addClass('activated');
        $(fieldSet).removeClass('activated').addClass('active');
        $('fieldSet').fadeOut(500, () => { });
        $("#fieldset_" + id).fadeIn(500, () => { });
      }
    }
   }
  }

  editComponentClick(i) {
    for (let j = 0; j < this.dataCentersDetails.length; j++) {
      if (j == i) {
        $('#editComponentDropdown' + i).show();
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
    if ($('#editDataCenterState').val() == '') {
      $('#stateBar').css('border-bottom', '0.0625rem solid red');
      var flag = true;
    } else {
      $('#stateBar').css('border-bottom', '0.0625rem solid #999');
    }
    if ($('#editDataCenterCity').val() == '') {
      $('#cityBar').css('border-bottom', '0.0625rem solid red');
      var flag = true;
    } else {
      $('#cityBar').css('border-bottom', '0.0625rem solid #999');
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
        this.config.editDataCenter('1', editId, editName, editCountry, editState, editCity, editTimezone).subscribe(res => {
          $('.modalForm').hide();
          $('.apiResponseDiv').show();
          if (res.status == 'success') {
            $('#callMatricsDropdown' + this.editIdIndex).hide();
            this.editData.name = editName;
            this.editData.country = editCountry;
            this.editData.state = editState;
            this.editData.city = editCity;
            this.editData.time_zone = editTimezone;
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
      var flag = true;
    } else {
      $('#editComponentBar1').css('border-bottom', '0.0625rem solid #999');
    }
    if ($('#editComponentNameType').val() == 'Country*') {
      $('#editComponentBar2').css('border-bottom', '0.0625rem solid red');
      var flag = true;
    } else {
      $('#editComponentBar2').css('border-bottom', '0.0625rem solid #999');
    }
    if ($('#editComponentVersion').val() == '') {
      $('#editComponentBar3').css('border-bottom', '0.0625rem solid red');
      var flag = true;
    } else {
      $('#editComponentBar3').css('border-bottom', '0.0625rem solid #999');
    }
    if ($('#editComponentIpAddress').val() == '') {
      $('#editComponentBar4').css('border-bottom', '0.0625rem solid red');
      var flag = true;
    } else {
      var ip_val = this.ipValidation($('#editComponentIpAddress').val());
	  if(ip_val == 'success') {
		$('#editComponentBar4').css('border-bottom', '0.0625rem solid #999');
	  } else {
		$('#editComponentBar4').css('border-bottom', '0.0625rem solid red');
		var flag = true;
	  }
    }
    if ($('#editComponentComponentUser').val() == '') {
      $('#editComponentBar5').css('border-bottom', '0.0625rem solid red');
      var flag = true;
    } else {
      $('#editComponentBar5').css('border-bottom', '0.0625rem solid #999');
    }
    if ($('#editComponentPassword').val() == '') {
      $('#editComponentBar6').css('border-bottom', '0.0625rem solid red');
      var flag = true;
    } else {
      $('#editComponentBar6').css('border-bottom', '0.0625rem solid #999');
    }


    if ($('#editComponentvrfWarnStart').val() == '') {
      $('#editComponentBar7').css('border-bottom', '0.0625rem solid red');
      var flag = true;
    } else {
      $('#editComponentBar7').css('border-bottom', '0.0625rem solid #999');
    }
    if ($('#editComponentvrfWarnEnd').val() == '') {
      $('#editComponentBar8').css('border-bottom', '0.0625rem solid red');
      var flag = true;
    } else {
      $('#editComponentBar8').css('border-bottom', '0.0625rem solid #999');
    }
    if ($('#editComponentvrfMax').val() == '') {
      $('#editComponentBar9').css('border-bottom', '0.0625rem solid red');
      var flag = true;
    } else {
      $('#editComponentBar9').css('border-bottom', '0.0625rem solid #999');
    }

    if ($('#editComponentbgpPeersWarnStart').val() == '') {
      $('#editComponentBar10').css('border-bottom', '0.0625rem solid red');
      var flag = true;
    } else {
      $('#editComponentBar10').css('border-bottom', '0.0625rem solid #999');
    }
    if ($('#editComponentbgpPeersWarnEnd').val() == '') {
      $('#editComponentBar11').css('border-bottom', '0.0625rem solid red');
      var flag = true;
    } else {
      $('#editComponentBar11').css('border-bottom', '0.0625rem solid #999');
    }
    if ($('#editComponentbgpPeersMax').val() == '') {
      $('#editComponentBar12').css('border-bottom', '0.0625rem solid red');
      var flag = true;
    } else {
      $('#editComponentBar12').css('border-bottom', '0.0625rem solid #999');
    }

    if ($('#editComponentvlanWarnStart').val() == '') {
      $('#editComponentBar13').css('border-bottom', '0.0625rem solid red');
      var flag = true;
    } else {
      $('#editComponentBar13').css('border-bottom', '0.0625rem solid #999');
    }
    if ($('#editComponentvlanWarnEnd').val() == '') {
      $('#editComponentBar14').css('border-bottom', '0.0625rem solid red');
      var flag = true;
    } else {
      $('#editComponentBar14').css('border-bottom', '0.0625rem solid #999');
    }
    if ($('#editComponentvlanMax').val() == '') {
      $('#editComponentBar15').css('border-bottom', '0.0625rem solid red');
      var flag = true;
    } else {
      $('#editComponentBar15').css('border-bottom', '0.0625rem solid #999');
    }

    if ($('#editComponenthsrpWarnStart').val() == '') {
      $('#editComponentBar16').css('border-bottom', '0.0625rem solid red');
      var flag = true;
    } else {
      $('#editComponentBar16').css('border-bottom', '0.0625rem solid #999');
    }
    if ($('#editComponenthsrpWarnEnd').val() == '') {
      $('#editComponentBar17').css('border-bottom', '0.0625rem solid red');
      var flag = true;
    } else {
      $('#editComponentBar17').css('border-bottom', '0.0625rem solid #999');
    }
    if ($('#editComponenthsrpMax').val() == '') {
      $('#editComponentBar18').css('border-bottom', '0.0625rem solid red');
      var flag = true;
    } else {
      $('#editComponentBar18').css('border-bottom', '0.0625rem solid #999');
    }

    if ($('#editComponentstaticRoutesWarnStart').val() == '') {
      $('#editComponentBar19').css('border-bottom', '0.0625rem solid red');
      var flag = true;
    } else {
      $('#editComponentBar19').css('border-bottom', '0.0625rem solid #999');
    }
    if ($('#editComponentstaticRoutesWarnEnd').val() == '') {
      $('#editComponentBar20').css('border-bottom', '0.0625rem solid red');
      var flag = true;
    } else {
      $('#editComponentBar20').css('border-bottom', '0.0625rem solid #999');
    }
    if ($('#editComponentstaticRoutesMax').val() == '') {
      $('#editComponentBar21').css('border-bottom', '0.0625rem solid red');
      var flag = true;
    } else {
      $('#editComponentBar21').css('border-bottom', '0.0625rem solid #999');
    }


    if (flag != true) {

      let editComponentName = $('#editComponentName').val();
      let editComponentNameType = $('#editComponentNameType').val();
      let editComponentVersion = $('#editComponentVersion').val();
      let editComponentIpAddress = $('#editComponentIpAddress').val();
      let editComponentComponentUser = $('#editComponentComponentUser').val();
      let editComponentPassword = $('#editComponentPassword').val();
      let editComponentvrfWarnStart = $('#editComponentvrfWarnStart').val();
      let editComponentvrfWarnEnd = $('#editComponentvrfWarnEnd').val();
      let editComponentvrfMax = $('#editComponentvrfMax').val();
      let editComponentbgpPeersWarnStart = $('#editComponentbgpPeersWarnStart').val();
      let editComponentbgpPeersWarnEnd = $('#editComponentbgpPeersWarnEnd').val();
      let editComponentbgpPeersMax = $('#editComponentbgpPeersMax').val();
      let editComponentvlanWarnStart = $('#editComponentvlanWarnStart').val();
      let editComponentvlanWarnEnd = $('#editComponentvlanWarnEnd').val();
      let editComponentvlanMax = $('#editComponentvlanMax').val();
      let editComponenthsrpWarnStart = $('#editComponenthsrpWarnStart').val();
      let editComponenthsrpWarnEnd = $('#editComponenthsrpWarnEnd').val();
      let editComponenthsrpMax = $('#editComponenthsrpMax').val();
      let editComponentstaticRoutesWarnStart = $('#editComponentstaticRoutesWarnStart').val();
      let editComponentstaticRoutesWarnEnd = $('#editComponentstaticRoutesWarnEnd').val();
      let editComponentstaticRoutesMax = $('#editComponentstaticRoutesMax').val();

      setTimeout(() => {
        this.config.editComponent('1', this.currentDataCenterComponentId, editComponentName, editComponentNameType, editComponentVersion, editComponentIpAddress, editComponentComponentUser, editComponentPassword, editComponentvrfWarnStart, editComponentvrfWarnEnd, editComponentvrfMax, editComponentbgpPeersWarnStart, editComponentbgpPeersWarnEnd, editComponentbgpPeersMax, editComponentvlanWarnStart, editComponentvlanWarnEnd, editComponentvlanMax, editComponenthsrpWarnStart, editComponenthsrpWarnEnd, editComponenthsrpMax, editComponentstaticRoutesWarnStart, editComponentstaticRoutesWarnEnd, editComponentstaticRoutesMax).subscribe(res => {

          $('.modalForm').hide();
          $('.apiResponseDiv').show();
          if (res.status == 'success') {
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
    this.CountryTimezoneList();
    this.ComponentTypeList();

    this.provisioningList();
  }

  onClickedOutside(e: Event) {
    //dosomething
  }
  
  CountryTimezoneList() {
    setTimeout(() => {
      this.config.getCountryList().subscribe(res=>{
		  this.country_list = res.country;
		  this.time_zone_list = res.timezone;
    });
    }, 100);
  }
  
  ComponentTypeList() {
    setTimeout(() => {
      this.config.getTypes().subscribe(res=>{
      	this.version = res;
    });
    }, 100);
  }

  provisioningList(id = 0, loop_status = false) {
    setTimeout(() => {
      this.config.getProvisioningList().subscribe(res => {
        this.dataCenters = res;
        if (loop_status) {
          id = this.findDataCenterIndex(id);
        }
        this.selectedDataCenter = id;
        this.dataCenterScrollClick(id, 'auto');
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

  // moveRight() {
  //   this.deactivateCard();
  //   this.dataCenters.push({
  //     name: 'Data Center 5',
  //     country: 'United States',
  //     state: 'Texas',
  //     city: 'Plano',
  //     timezone: 'IST',
  //     components: ''
  //   });
  //   this.dataCenters.splice(0, 1);
  // }

  // moveLeft() {
  //   this.deactivateCard();
  //   this.dataCenters.push({
  //     name: 'Data Center 2',
  //     country: 'United States',
  //     state: 'Texas',
  //     city: 'Plano',
  //     timezone: 'IST',
  //     components: ''
  //   });
  //   this.dataCenters.splice(3, 1);
  // }

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
    if ($('#addDataCenterState').val() == '') {
      $('#addstateBar').css('border-bottom', '0.0625rem solid red');
      var flag = true;
    } else {
      $('#addstateBar').css('border-bottom', '0.0625rem solid #999');
    }
    if ($('#addDataCenterCity').val() == '') {
      $('#addcityBar').css('border-bottom', '0.0625rem solid red');
      var flag = true;
    } else {
      $('#addcityBar').css('border-bottom', '0.0625rem solid #999');
    }
    if ($('#addDataCenterTimezone').val() == 'Time zone*') {
      $('#addtimezoneBar').css('border-bottom', '0.0625rem solid red');
      var flag = true;
    } else {
      $('#addtimezoneBar').css('border-bottom', '0.0625rem solid #999');
    }

    if (flag != true) {

      setTimeout(() => {
        this.config.addDataCenter('1', this.name, this.country, this.state, this.city, this.timezone).subscribe(res => {
          $('.modalForm').hide();
          $('.apiResponseDiv').show();
          var sucflag = false;
          if (res.status == 'success') {
            this.name = '';
            this.country = 'Country*';
            this.state = '';
            this.city = '';
            this.timezone = 'Time zone*';
            $('.apiFailed').hide();
            $('.apiSuccess').show();
            sucflag = true;
          } else {
            $('#apiErrorMsg').html(res.message);
            $('.apiSuccess').hide();
            $('.apiFailed').show();
          }

          if (sucflag != false) {
            let lastInsertedDataCenterId = res.id;
            this.provisioningList(lastInsertedDataCenterId, true);
          }
        });
      }, 100);
    }
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
        this.scrollLimitMax = 3;
      } else {
        this.scrollLimitMin = id - 3;
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
    this.config.getDataCenterComponents(id).subscribe(res => {
      if (res.length > 0) {
        this.dataCentersDetails = res;
      }
    });
  }

  onVersionChange(name){
    if(name == 'NEXUS'){
      $('.toggleThreshold').show();
    }else{
      $('.toggleThreshold').hide();
    }
    if(name == 'ASA'){
      $('.toggleEnablePassword').show();
    }else{
      $('.toggleEnablePassword').hide();
    }
    if(name == 'Type*') {
		this.ComSubVersion = "Sub Type";
		$("#addComponentSubType").prop("disabled", true);
	} else {
		this.config.getSubtypes(name).subscribe(res => {
		  this.subTypes = res;
		});
		this.ComSubVersion = "Sub Type";
		$("#addComponentSubType").prop("disabled", false);
	}
  }

  deleteComponentData(componentId) {
    this.config.componentDelete(1, componentId).subscribe(res => {
      let componentFlag = false;
      $('.componentDeleteModal').hide();
      $('.apiResponseDivComponent').show();
      if (res.status == 'success') {
        componentFlag = true;
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
