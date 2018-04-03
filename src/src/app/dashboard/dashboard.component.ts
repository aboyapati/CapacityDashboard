import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
declare const $: any;
declare var Morris: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  callMatricsFilter: boolean = false;
  notificationFilter: boolean = false;
  datas: any;

  constructor(private config: ConfigService) { }

  ngOnInit() {

    setTimeout(() => {
      this.config.getDashboardData()
        .subscribe(res => {

          var dataset = [];

          for (var data in res) {
            var name = res[data].name;
            var total = res[data].total_calls;
            var concurrent = res[data].concurrent_calls;

            var unit = {
              name: name,
              total: total,
              concurrent: concurrent
            }

            dataset.push(unit);
          }

          this.datas = dataset;
        });
    }, 100);

  }

  callMatricsClick() {
    this.callMatricsFilter = !this.callMatricsFilter;
    if (this.callMatricsFilter) {
      $('#callMatricsDropdown').show();
    } else {
      $('#callMatricsDropdown').hide();
    }
  }

  notificationClick() {
    this.notificationFilter = !this.notificationFilter;
    if (this.notificationFilter) {
      $('#notificationDropDown').show();
    } else {
      $('#notificationDropDown').hide();
    }
  }

  getCallMatrics(id) {
    $('#callMatricsDropdown').hide();
  }

  getNotification(id) {
    $('#notificationDropDown').hide();
  }

}
