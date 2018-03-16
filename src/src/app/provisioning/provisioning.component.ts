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
    this.name = '';
    this.country = '';
    this.state = '';
    this.city = '';
    this.timezone = '';
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
