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
  dataCenters: Datacenter[];
  dataCentersDetails: DatacenterDetails[];
  apiStatus: boolean = false;
  apiStatusMsg: boolean = false;
  name: string = '';
  country: string = 'Country*';
  state: string = '';
  city: string = '';
  timezone: string = 'Time zone*';
  editIdIndex: any;
  editId: any;
  editData: any;
  country_list: string[];
  time_zone_list: string[];
  test: string;

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
        this.dataCenters.splice(this.editIdIndex, 1);
        this.activateCard(0);
        this.dataCentersDetails = this.dataCenters[this.editIdIndex].components;
        $('.apiFailed').hide();
        $('.apiSuccess').show();
      } else {
        $('#deleteApiErrorMsg').html(res.message);
        $('.apiSuccess').hide();
        $('.apiFailed').show();
      }
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

  validateEdit() {

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

  ngOnInit() {

    this.country_list = ['United States', 'Australia', 'Canada', 'India'];
    this.time_zone_list = ['IST', 'ATC', 'CNT'];

    setTimeout(() => {
      this.config.getProvisioningList().subscribe(res => {
        this.dataCenters = res;
        this.dataCentersDetails = this.dataCenters[0].components;
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
    } else {
      this.dataCentersDetails = [];
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
