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
  editComponentUrl: any;
  componentAddUrl: any;
  componentDeleteUrl: any;
  countryUrl: any;
  leftNavDetailUrl: any;
  getComponentListUrl: any;
  getSubComponentListUrl: any;
  getsubComponentPopUpUrl: any;
  getVcenterDataUrl: any;

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
        this.editComponentUrl = this.BASE_URL + result[0].editComponentUrl;
        this.componentAddUrl = this.BASE_URL + result[0].componentAddUrl;
        this.componentDeleteUrl = this.BASE_URL + result[0].componentDeleteUrl;
        this.countryUrl = this.BASE_URL + result[0].countryUrl;
        this.leftNavDetailUrl = this.BASE_URL + result[0].leftNavDetailUrl;
        this.getComponentListUrl = this.BASE_URL + result[0].getComponentListUrl;
        this.getSubComponentListUrl = this.BASE_URL + result[0].getSubComponentListUrl;
        this.getsubComponentPopUpUrl = this.BASE_URL + result[0].getsubComponentPopUpUrl;
        this.getVcenterDataUrl = this.BASE_URL + result[0].getVcenterDataUrl;
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

  getCountryList() {
    return this.http.get(this.countryUrl)
      .map((result) => result.json());
  }

  getLeftNavDetailslist() {
    return this.http.get(this.leftNavDetailUrl)
      .map((result) => result.json());
  }

  addDataCenter(userId, name, country, state, city, timezone) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'userId=' + userId + '&name=' + name + '&country=' + country + '&state=' + state + '&city=' + city + '&timezone=' + timezone;
    return this.http.post(this.addDataCenterUrl, body, options).map((res: Response) => res.json());
  }

  editDataCenter(userId, id, name, country, state, city, timezone) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'userId=' + userId + '&id=' + id + '&name=' + name + '&country=' + country + '&state=' + state + '&city=' + city + '&timezone=' + timezone;
    return this.http.post(this.editDataCenterUrl, body, options).map((res: Response) => res.json());
  }

  deleteDataCenter(userId, id) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'userId=' + userId + '&id=' + id;
    return this.http.post(this.deleteDataCenterUrl, body, options).map((res: Response) => res.json());
  }

  editComponent(userId, name, version, subVersion, ipAddress, componentUser, password, vrfWarnStart, vrfWarnEnd, vrfMax, bgpPeersWarnStart, bgpPeersWarnEnd, bgpPeersMax, vlanWarnStart, vlanWarnEnd, vlanMax, hsrpWarnStart, hsrpWarnEnd, hsrpMax, staticRoutesWarnStart, staticRoutesWarnEnd, staticRoutesMax) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'userId=' + userId + '&name=' + name + '&version=' + version + '&subVersion=' + subVersion + '&ipAddress=' + ipAddress + '&componentUser=' + componentUser + '&password=' + password + '&vrfWarnStart=' + vrfWarnStart + '&vrfWarnEnd=' + vrfWarnEnd + '&vrfMax=' + vrfMax + '&bgpPeersWarnStart=' + bgpPeersWarnStart + '&bgpPeersWarnEnd=' + bgpPeersWarnEnd + '&bgpPeersMax=' + bgpPeersMax + '&vlanWarnStart=' + vlanWarnStart + '&vlanWarnEnd=' + vlanWarnEnd + '&vlanMax=' + vlanMax + '&hsrpWarnStart=' + hsrpWarnStart + '&hsrpWarnEnd=' + hsrpWarnEnd + '&hsrpMax=' + hsrpMax + '&staticRoutesWarnStart=' + staticRoutesWarnStart + '&staticRoutesWarnEnd=' + staticRoutesWarnEnd + '&staticRoutesMax=' + staticRoutesMax;
    return this.http.post(this.editComponentUrl, body, options).map((res: Response) => res.json());
  }

  componentAdd(userId, name, dataCenterId, type, ipAddress, version, subVersion, componentUser, password, enablePassword, vrfWarnStart, vrfWarnEnd, vrfMax, bgpPeersWarnStart, bgpPeersWarnEnd, bgpPeersMax, vlanWarnStart, vlanWarnEnd, vlanMax, hsrpWarnStart, hsrpWarnEnd, hsrpMax, staticRoutesWarnStart, staticRoutesWarnEnd, staticRoutesMax, vrrpWarnStart, vrrpWarnEnd, vrrpMax) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'userId=' + userId + '&name=' + name + '&dataCenterId=' + dataCenterId + '&type=' + type + '&version=' + version + '&subVersion=' + subVersion + '&ipAddress=' + ipAddress + '&componentUser=' + componentUser + '&password=' + password + '&enablePassword=' + enablePassword + '&vrfWarnStart=' + vrfWarnStart + '&vrfWarnEnd=' + vrfWarnEnd + '&vrfMax=' + vrfMax + '&bgpPeersWarnStart=' + bgpPeersWarnStart + '&bgpPeersWarnEnd=' + bgpPeersWarnEnd + '&bgpPeersMax=' + bgpPeersMax + '&vlanWarnStart=' + vlanWarnStart + '&vlanWarnEnd=' + vlanWarnEnd + '&vlanMax=' + vlanMax + '&hsrpWarnStart=' + hsrpWarnStart + '&hsrpWarnEnd=' + hsrpWarnEnd + '&hsrpMax=' + hsrpMax + '&staticRoutesWarnStart=' + staticRoutesWarnStart + '&staticRoutesWarnEnd=' + staticRoutesWarnEnd + '&staticRoutesMax=' + staticRoutesMax + '&vrrpWarnStart=' + vrrpWarnStart + '&vrrpWarnEnd=' + vrrpWarnEnd + '&vrrpMax=' + vrrpMax;
    return this.http.post(this.componentAddUrl, body, options).map((res: Response) => res.json());
  }

  componentDelete(userId, id) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'userId=' + userId + '&id=' + id;
    return this.http.post(this.componentDeleteUrl, body, options).map((res: Response) => res.json());
  }

  getComponentList(id) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'id=' + id;
    return this.http.post(this.getComponentListUrl, body, options).map((res: Response) => res.json());
  }

  getSubComponentList(id, type) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'id=' + id + '&type=' + type;
    return this.http.post(this.getSubComponentListUrl, body, options).map((res: Response) => res.json());
  }

  getsubComponentPopUp(typeId, subComponentName) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'typeId=' + typeId + '&subComponentName=' + subComponentName;
    return this.http.post(this.getsubComponentPopUpUrl, body, options).map((res: Response) => res.json());
  }

  getVcenterData(id) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'id=' + id;
    return this.http.post(this.getVcenterDataUrl, body, options).map((res: Response) => res.json());
  }

  BASE_URL = window.location.protocol + '//' + window.location.hostname;
}
