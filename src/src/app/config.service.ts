import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ConfigService {
  config_file: any;
  valueObj: any;
  getDashboardDataUrl: any;

  constructor(private http: Http) {
    this.http.get('assets/config.json')
      .map((result) => result.json()).subscribe(result => {
        this.getDashboardDataUrl = this.BASE_URL + result[0].callMetricsUrl;
      });
  }

  getDashboardData() {
    return this.http.get(this.getDashboardDataUrl)
      .map((result) => result.json());
  }

  BASE_URL = window.location.protocol + '//' + window.location.hostname;
}
