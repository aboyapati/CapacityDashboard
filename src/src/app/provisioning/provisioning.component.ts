import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
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

  constructor(private modalService: NgbModal) { }

  open(content) {
    this.modalService.open(content, { windowClass: 'custom_modal' }).result.then((result) => {
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
      return `with: ${reason}`;
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

  validateEdit(e){
    if($('#editDataCenterName').val() == ''){
      $('#nameBar').css('border-bottom','0.0625rem solid red');
    } else {
     $('#nameBar').css('border-bottom','0.0625rem solid #999');
       }
       if($('#editDataCenterCountry').val() == 'Country*'){
        $('#countryBar').css('border-bottom','0.0625rem solid red');
      } else {
       $('#countryBar').css('border-bottom','0.0625rem solid #999');
     }
     if($('#editDataCenterState').val() == ''){
      $('#stateBar').css('border-bottom','0.0625rem solid red');
    } else {
     $('#stateBar').css('border-bottom','0.0625rem solid #999');
    }
    if($('#editDataCenterCity').val() == ''){
      $('#cityBar').css('border-bottom','0.0625rem solid red');
    } else {
     $('#cityBar').css('border-bottom','0.0625rem solid #999');
    }
    if($('#editDataCenterTimezone').val() == 'Time zone*'){
      $('#timezoneBar').css('border-bottom','0.0625rem solid red');
    } else {
     $('#timezoneBar').css('border-bottom','0.0625rem solid #999');
    }
}

  ngOnInit() {
    var dcData = function () {
      var tmp = null;
      $.ajax({
        'async': false,
        'type': "POST",
        'global': false,
        'dataType': 'html',
        'url': "assets/webservices/dataCenterList.php",
        'success': function (data) {
          tmp = data;
        }
      });
      return tmp;
    }();

    this.dataCenters = JSON.parse(dcData);
    this.dataCentersDetails = this.dataCenters[0].components;
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

    if($('#addDataCenterName').val() == ''){
      $('#addnameBar').css('border-bottom','0.0625rem solid red');
      var flag = true;
    } else {
     $('#addnameBar').css('border-bottom','0.0625rem solid #999');
   }
   if($('#addDataCenterCountry').val() == 'Country*'){
    $('#addcountryBar').css('border-bottom','0.0625rem solid red');
    var flag = true;
   } else {
     $('#addcountryBar').css('border-bottom','0.0625rem solid #999');
   }
   if($('#addDataCenterState').val() == ''){
    $('#addstateBar').css('border-bottom','0.0625rem solid red');
    var flag = true;
  } else {
   $('#addstateBar').css('border-bottom','0.0625rem solid #999');
  }
  if($('#addDataCenterCity').val() == ''){
    $('#addcityBar').css('border-bottom','0.0625rem solid red');
    var flag = true;
  } else {
   $('#addcityBar').css('border-bottom','0.0625rem solid #999');
  }
  if($('#addDataCenterTimezone').val() == 'Time zone*'){
    $('#addtimezoneBar').css('border-bottom','0.0625rem solid red');
    var flag = true;
  } else {
   $('#addtimezoneBar').css('border-bottom','0.0625rem solid #999');
  }

  if(flag != true) {
		$.ajax({
		  url: 'assets/webservices/addDataCenter.php',
		  type: 'post',
		  data: {
			name: this.name,
			country: this.country,
			state: this.state,
			city: this.city,
			timezone: this.timezone,
		  },
		  success: function (data) {
			data = JSON.parse(data);
			$('.modalForm').hide();
			$('.apiResponseDiv').show();
			if (data.status == 'success') {
			  $('.apiSuccess').show();
			} else {
			  $('#apiErrorMsg').html(data.message);
			  $('.apiSuccess').hide();
			  $('.apiFailed').show();
			}
		  }
		});
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
  name: string;
  country: string;
  state: string;
  city: string;
  timezone: string;
  components: any;
}

interface DatacenterDetails {
  name: string;
  type: string;
  version: string;
  ip: any;
  credential: string;
}
