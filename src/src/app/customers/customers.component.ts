import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';
declare const $: any;

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customerList: any;
  emptyCustomerFlag : boolean = false;
  emptySearchCustomerFlag : boolean = false;

  constructor(private modalService: NgbModal, private config: ConfigService, private router: Router) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    setTimeout(() => {
      var val = '';
      this.config.getCustomersList(val).subscribe(res => {
        if(res.length < 1){
          this.emptyCustomerFlag = true;
        }
        this.customerList = res;
      });
    }, 1000);
  }

  valuechange(e) {
    var val = $('#searchText').val();
    this.config.getCustomersList(val).subscribe(res => {
      if(res.length < 1){
        this.emptySearchCustomerFlag = true;
      }else{
      this.emptySearchCustomerFlag = false;
      }
      this.customerList = res;
    });
  }

  editCustomerClick(i) {
    for (let j = 0; j < this.customerList.length; j++) {
      if (j == i) {
        if ($('#cust_filter').val() - 1 == i) {
          $('#editCustomerDropdown' + i).hide();
          $('#cust_filter').val("");
        } else {
          $('#editCustomerDropdown' + i).show();
          $('#cust_filter').val(i + 1);
        }
      } else {
        $('#editCustomerDropdown' + j).hide();
      }
    }
  }

}
