import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';
declare const $: any;

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  private notificationFilterType = 'Today';
  private notifications: any;
  notificationFilter: boolean = false;

  constructor(private config: ConfigService, private router: Router) { }

  ngOnInit() {
    if (!sessionStorage.username || !sessionStorage.id || typeof sessionStorage.username == 'undefined' || typeof sessionStorage.id == 'undefined') {
      this.router.navigate(['login']);
    }
    this.getNotificationWithFilter(this.notificationFilterType);
  }

  notificationClick() {
    this.notificationFilter = !this.notificationFilter;
    if (this.notificationFilter) {
      $('#notificationDropDown').show();
    } else {
      $('#notificationDropDown').hide();
    }
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
