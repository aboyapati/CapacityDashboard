import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';
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
  private notificationFilterType = 'Today';
  private notifications: any;

  constructor(private config: ConfigService, private router: Router) { }

  ngOnInit() {

    if (!sessionStorage.username || !sessionStorage.id || typeof sessionStorage.username == 'undefined' || typeof sessionStorage.id == 'undefined') {
      this.router.navigate(['login']);
    }
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

      this.getNotificationWithFilter(this.notificationFilterType);

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

  getNotificationWithFilter(type) {
    this.notificationFilterType = type;
    if (this.notificationFilterType == 'Today') {
      type = 'today';
    } else if (this.notificationFilterType == 'Yesterday') {
      type = 'yesterday';
    } else if (this.notificationFilterType == '1 Week') {
      type = 'week';
    }
    this.notificationFilter = false;
    $('#notificationDropDown').hide();
    this.config.getNotification(type).subscribe(res => {
      this.notifications = res;
    });
  }

}
