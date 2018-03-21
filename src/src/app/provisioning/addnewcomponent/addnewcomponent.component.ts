import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-addnewcomponent',
  templateUrl: './addnewcomponent.component.html',
  styleUrls: ['./addnewcomponent.component.css']
})
export class AddnewcomponentComponent implements OnInit {
  closeResult: string;
  apiError:number = 1;
  userId: number;
  name: string;
  dataCenterId: number;
  type: string;
  ipAddress: string;
  version: string;
  subVersion: string;
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

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content) {
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

  next(event) {
    var next_step = true;

    if(next_step) {
      var fieldSet = event.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
      console.log(fieldSet);
      $(fieldSet).fadeOut(400, () => { });
      $(".f1-step.active").removeClass('active').addClass('activated').next().addClass('active');
      $(fieldSet).next().fadeIn(400, () => { });
    }
  }

  previous(event) {
    var next_step = true;

    if(next_step) {
      var fieldSet = event.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
      console.log(fieldSet);
      $(fieldSet).fadeOut(400, () => { });
      $(fieldSet).prev().fadeIn(400, () => { });
    }
  }

  addComponent() {

    $.ajax({
      url: 'assets/webservices/addComponent.php',
      type: 'post',
      data: {
        userId: 1,
        name: this.name,
        dataCenterId: 1,
        type: '',
        ipAddress: '',
        version: this.version,
        subVersion: this.subVersion,
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

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
