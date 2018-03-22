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
  dataCentersDetails: DatacenterDetails[];
  apiStatus: boolean = false;
  apiStatusMsg: boolean = false;
  name: string = '';
  country: string = 'Country*';
  state: string = '';
  city: string = '';
  timezone: string = 'Time zone*';

  apiError:number = 1;
  userId: number;
  comName: string;
  dataCenterId: number;
  type: string;
  ipAddress: string;
  ComVersion: string;
  ComSubVersion: string;
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
  currentDCNew: number;
  currentRow: number;
  version: string[];
  subversion: string[];
  editFromView: boolean = false;
  newDeleteDataIndex: number;

  constructor(private modalService: NgbModal, private config: ConfigService) { }

  open(content, id = 0, type) {

    if (type == 'delete' || type == 'edit') {
      this.editIdIndex = id;
      this.editId = this.dataCenters[this.editIdIndex].id;
      this.editData = this.dataCenters[id];
    }

    this.modalService.open(content, { windowClass: 'custom_modal' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  deleteDC() {
    this.config.deleteDataCenter('1', this.editId).subscribe(res => {
      $('.modalForm').hide();
      $('.apiResponseDiv').show();
      if (res.status == 'success') {
        this.provisioningList();
        //this.dataCenters.splice(this.editIdIndex, 1);
        //this.dataCentersDetails = this.dataCenters[this.editIdIndex].components;
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
    this.modalService.open(content, { windowClass: 'custom_modal', size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
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

    this.currentDCNew = currentdatacenter;
    if (type == 'delete' || type == 'edit' || 'view') {
      this.deleteData = this.dataCentersDetails[id];
      this.componentRecords = this.dataCentersDetails[id];
      this.currentRow = id;
      if(editFromView == true){
        $('#closeViewComponentModal').trigger('click');
      }
    }
    this.modalService.open(content, { windowClass: 'custom_modal', size: 'lg' }).result.then((result) => {
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

  next(event) {
    var next_step = true;

    if(next_step) {
      var fieldSet = event.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
      $(fieldSet).fadeOut(400, () => { });
      $(".f1-step.active").removeClass('active').addClass('activated').next().removeClass('next').addClass('active').next().addClass('next');
      $(fieldSet).next().fadeIn(400, () => { });
    }
  }

  previous(event) {
    var next_step = true;

    if(next_step) {
      var fieldSet = event.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
      $(fieldSet).fadeOut(400, () => { });
      $(".f1-step.active").removeClass('active').addClass('activated').prev().addClass('active');
      $(fieldSet).prev().fadeIn(400, () => { });
    }
  }
  
    editComponentClick(i) {
    this.currentDCNew = i;
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
      let editCountry = $('#editDataCenterCountry').val();
      let editState = $('#editDataCenterState').val();
      let editCity = $('#editDataCenterCity').val();
      let editTimezone = $('#editDataCenterTimezone').val();

      setTimeout(() => {
        this.config.editDataCenter('1', editName, editCountry, editState, editCity, editTimezone).subscribe(res => {
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
  
  addComponent() { 

    $.ajax({
      url: 'http://rishadkv.com/addDataCenter.php',
      type: 'post',
      data: {
        userId: 1,
        name: this.comName,
        dataCenterId: this.currentDC,
        type: '',
        ipAddress: '',
        version: this.ComVersion,
        subVersion: this.ComSubVersion,
        componentUser: this.componentUser,
        password: this.password,
        enablePassword: '',

        vrfWarnStart: this.vrfWarnStart,
        vrfWarnEnd: this.vrfWarnEnd,
        vrfMax: this.vrfMax,

        bgpPeersWarnStart: this.bgpPeersWarnStart,
        bgpPeersWarnEnd: this.bgpPeersWarnEnd,
        bgpPeersMax: this.bgpPeersMax,

        vlanWarnStart: this.vlanWarnStart,
        vlanWarnEnd: this.vlanWarnEnd,
        vlanMax: this.vlanMax,
        
        hsrpWarnStart: this.hsrpWarnStart,
        hsrpWarnEnd: this.hsrpWarnEnd,
        hsrpMax: this.hsrpMax,
        
        staticRoutesWarnStart: this.staticRoutesWarnStart,
        staticRoutesWarnEnd: this.staticRoutesWarnEnd,
        staticRoutesMax: this.staticRoutesMax,

        vrrpWarnStart: '',
        vrrpWarnEnd: '',
        vrrpMax: '',
      },
      success: function (data) {
        this.apiError = 1;
      },
      error: function () {
        this.apiError = 1;
      }
    });
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
      $('#editComponentBar4').css('border-bottom', '0.0625rem solid #999');
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
        this.config.editComponent('1', editComponentName, editComponentNameType, editComponentVersion, editComponentIpAddress, editComponentComponentUser, editComponentPassword, editComponentvrfWarnStart, editComponentvrfWarnEnd, editComponentvrfMax, editComponentbgpPeersWarnStart, editComponentbgpPeersWarnEnd, editComponentbgpPeersMax, editComponentvlanWarnStart, editComponentvlanWarnEnd, editComponentvlanMax, editComponenthsrpWarnStart, editComponenthsrpWarnEnd, editComponenthsrpMax, editComponentstaticRoutesWarnStart, editComponentstaticRoutesWarnEnd, editComponentstaticRoutesMax).subscribe(res => {

          console.log(res);

          $('.modalForm').hide();
          $('.apiResponseDiv').show();
          if (res.status == 'success') {
            $('#editComponentDropdown' + this.currentRow).hide();
            this.componentRecords.name = editComponentName;
            this.componentRecords.version = editComponentNameType;
            this.componentRecords.subVersion = editComponentVersion;
            this.componentRecords.ipAddress = editComponentIpAddress;
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

  ngOnInit() {

    this.country_list = ['United States', 'Australia', 'Canada', 'India'];
    this.time_zone_list = ['IST', 'ATC', 'CNT'];
    this.version = ['NEXUS', 'ASA', 'VCENTER'];

    this.provisioningList();
  }

  onClickedOutside(e: Event) {
    //dosomething
  }


  provisioningList() {
    setTimeout(() => {
      this.config.getProvisioningList().subscribe(res => {
        this.dataCenters = res;
        this.dataCentersDetails = this.dataCenters[0].components;
	this.currentDC = this.dataCenters[0]['id'];
      });
    }, 100);
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
		  if(res.status == 'success') {
            $('.apiFailed').hide();
            $('.apiSuccess').show();
			sucflag =true;
          } else {
            $('#apiErrorMsg').html(res.message);
            $('.apiSuccess').hide();
            $('.apiFailed').show();
          }

		  if(sucflag != false) {
			  this.dataCenters.push({
				id: res.id,
				name: this.name,
				country: this.country,
				state: this.state,
				city: this.city,
				time_zone: this.timezone,
				components: ''
			  });
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

  dataCenterClick(id) {
    this.activateCard(id);
    $('#' + id).attr('class', 'col-md-3 col-sm-6 tab-tile tab-tile-active');
    if (this.dataCenters[id].components) {
      this.dataCentersDetails = this.dataCenters[id].components;
      this.currentDC = this.dataCenters[id]['id'];
      this.currentDCNew = id;
    } else {
      this.dataCentersDetails = [];
    }
  }

  deleteComponentData(id) {

    var componentFlag = false;
    $.ajax({
      url: 'assets/webservices/deleteComponent.php',
      type: 'post',
      data: {
        id: id
      },
      success: function (data) {

        data = JSON.parse(data);
        $('.componentDeleteModal').hide();
        $('.apiResponseDivComponent').show();
        if (data.status == 'success') {
          componentFlag = true;
          $('.apiSuccess').show();
        } else {
          $('#apiErrorMsgComponent').html(data.message);
          $('.apiSuccess').hide();
          $('.apiFailed').show();
        }
      }
    });
    if (componentFlag = true) {
      this.dataCentersDetails.splice(this.newDeleteDataIndex, 1);
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

interface DatacenterDetails {
  name: string;
  type: string;
  version: string;
  ip: any;
  credential: string;
}
