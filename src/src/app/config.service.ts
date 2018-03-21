import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ConfigService {
  config_file: any;
  valueObj: any;
  getDashboardDataUrl: any;
  verifyLoginUrl: any;
  mapUrl: any;
  getProvisioningListUrl: any;
  addDataCenterUrl: any;
  editDataCenterUrl: any;
  deleteDataCenterUrl: any;

  constructor(private http: Http) {
    this.http.get('assets/config.json')
      .map((result) => result.json()).subscribe(result => {
        this.getDashboardDataUrl = this.BASE_URL + result[0].callMetricsUrl;
        this.verifyLoginUrl = this.BASE_URL + result[0].verifyLoginUrl;
        this.mapUrl = this.BASE_URL + result[0].mapUrl;
        this.getProvisioningListUrl = this.BASE_URL + result[0].getProvisioningListUrl;
        this.addDataCenterUrl = this.BASE_URL + result[0].addDataCenterUrl;
        this.editDataCenterUrl = this.BASE_URL + result[0].editDataCenterUrl;
        this.deleteDataCenterUrl = this.BASE_URL + result[0].deleteDataCenterUrl;
      });
  }

  verifyLogin(username, password) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'username=' + username + '&password=' + password + '';
    return this.http.post(this.verifyLoginUrl, body, options).map((res: Response) => res.json());
  }

  getDashboardData() {
    return this.http.get(this.getDashboardDataUrl)
      .map((result) => result.json());
  }

  getMap() {
    return this.http.get(this.mapUrl)
      .map((result) => result.json());
  }

  getProvisioningList() {
    return this.http.get(this.getProvisioningListUrl)
      .map((result) => result.json());
  }

  addDataCenter(userId, name, country, state, city, timezone) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'userId=' + userId + '&name=' + name + '&country=' + country + '&state=' + state + '&city=' + city + '&timezone=' + timezone;
    return this.http.post(this.addDataCenterUrl, body, options).map((res: Response) => res.json());
  }

  editDataCenter(userId, name, country, state, city, timezone) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'userId=' + userId + '&name=' + name + '&country=' + country + '&state=' + state + '&city=' + city + '&timezone=' + timezone;
    return this.http.post(this.editDataCenterUrl, body, options).map((res: Response) => res.json());
  }

  deleteDataCenter(userId, id) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'userId=' + userId + '&id=' + id;
    return this.http.post(this.deleteDataCenterUrl, body, options).map((res: Response) => res.json());
  }
  BASE_URL = window.location.protocol + '//' + window.location.hostname;
}
