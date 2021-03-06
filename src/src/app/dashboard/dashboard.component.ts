import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
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
  notificationFilterType = 'Today';
  notifications: any;
  reportCount: number;
  usersCount: number;
  customersCount: number;
  callMetricsLoading: boolean = true;
  notificationsLoading: boolean = true;

  constructor(private config: ConfigService, private router: Router) {
    sessionStorage.setItem('previousUrl', this.router.url);
  }

  ngOnInit() {

    if (!sessionStorage.username || !sessionStorage.id || typeof sessionStorage.username == 'undefined' || typeof sessionStorage.id == 'undefined') {
      this.router.navigate(['login']);
    }

    this.config.getDashboardData()
      .subscribe(res => {
        this.datas = res;
        this.callMetricsLoading = false;
      });

    this.getNotificationWithFilter(this.notificationFilterType);

    this.config.getDashboardTileDatas().subscribe(res => {
      this.reportCount = res.reportCount;
      this.usersCount = res.usersCount;
      this.customersCount = res.customersCount;
    });

    if (sessionStorage.alertMenuClicked == 'yes') {
      sessionStorage.setItem('alertMenuClicked', '');
      $('#leftNavAlertId').trigger('click');
    }

    Observable.interval(15000 * 60).subscribe(x => {
      this.config.getDashboardData()
        .subscribe(res => {
          this.datas = res;
        });
    });

    setTimeout(() => {
      $('#dashboard').removeClass('pcoded-trigger');
    }, 1000);

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
      this.notificationsLoading = false;
      let j = 0;
      for (let i = 0; i < this.notifications.length; i++) {
        if (this.notifications[i].status == 'Bad') {
          j = j + 1;
        }
      }
      if (j > 0) {
        $('#alertValue').text(j);
        $('#alertValue').show();
      } else {
        $('#alertValue').hide();
      }
    });
  }

  customerList() {
    this.router.navigate(['customers']);
  }

  redirectReport() {
    this.router.navigate(['report']);
  }

}
