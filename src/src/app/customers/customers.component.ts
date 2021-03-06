import { Component, OnInit, ElementRef, HostListener, Input } from '@angular/core';
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
  tempcustomerList: any;
  customerSearchList: any;
  emptySearchCustomerFlag: boolean = false;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (event.target.className == 'rsddropdown-span') {
      sessionStorage.setItem('lastSelectedDropDownId', event.target.nextElementSibling.attributes.id.nodeValue);
    } else {
      $('#' + sessionStorage.lastSelectedDropDownId).hide();
      if (sessionStorage.selectedComponentActionButtonIdCustomerPage != '') {
        this.editCustomerClick(sessionStorage.selectedComponentActionButtonIdCustomerPage);
        sessionStorage.setItem('selectedComponentActionButtonIdCustomerPage', '');
      }
    }
  }

  constructor(private modalService: NgbModal, private config: ConfigService, private router: Router) {
    sessionStorage.setItem('previousUrl', this.router.url);
  }

  ngOnInit() {
    if (!sessionStorage.username || !sessionStorage.id || typeof sessionStorage.username == 'undefined' || typeof sessionStorage.id == 'undefined') {
      this.router.navigate(['login']);
    }
    this.getCustomers();

    setTimeout(() => {
      $('#customers').removeClass('pcoded-trigger');
    }, 1000);

  }

  getCustomers() {
    this.customerList = [];
    var val = '';
    this.config.getCustomersList().subscribe(res => {
      this.customerList = res;
      this.tempcustomerList = res;
    });
  }

  valuechange(e) {
    this.emptySearchCustomerFlag = false;
    this.customerSearchList = [];
    var val = $('#searchText').val();

    if (val == '') {
      this.customerList = this.tempcustomerList;
    } else {
      this.customerList = [];
      for (let i = 0; i < this.tempcustomerList.length; i++) {
        var string = this.tempcustomerList[i].name,
          substring = val;
        if (string.toLowerCase().search(substring.toLowerCase()) == -1) {

        } else {
          this.customerList.push(this.tempcustomerList[i]);
        }
      }
      if (this.customerList.length < 1) {
        this.emptySearchCustomerFlag = true;
      } else {
        this.emptySearchCustomerFlag = false;
      }
    }
  }

  editCustomerClick(i) {
    sessionStorage.setItem('selectedComponentActionButtonIdCustomerPage', i);
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

  redirectCustomerView(id) {
    this.router.navigate(['customerview', id]);
  }

}
