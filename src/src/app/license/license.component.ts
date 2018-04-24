import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
declare const $: any;

@Component({
  selector: 'app-simple-page',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css']
})
export class LicenseComponent implements OnInit {

  customer: string = 'Customers';
  customersList: any;
  licenseList: any;
  customerFlagMessage: boolean = false;
  licenseFlagMessage: boolean = false;
  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.getCustomersList();

    setTimeout(() => {
      $('#license').removeClass('pcoded-trigger');
    }, 1000);

  }

  customeOnChange(id = 0) {
    if (id == 0) {
      id = $('#customer').val();
    }
    this.config.getCustomerLicense(id).subscribe(res => {
      this.licenseList = res;
      if (this.licenseList.length < 1) {
        this.licenseFlagMessage = true;
      } else {
        this.licenseFlagMessage = false;
      }
    });
  }

  getCustomersList() {
    this.config.getCustomer().subscribe(res => {
      this.customersList = res;
      if (this.customersList.length < 1) {
        this.customerFlagMessage = true;
      } else {
        this.customeOnChange(this.customersList[0].id);
        this.customerFlagMessage = false;
      }
    });
  }

}
