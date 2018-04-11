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
  getTypesUrl: any;
  getSubtypesUrl: any;
  componentDeleteUrl: any;
  countryUrl: any;
  leftNavDetailUrl: any;
  getComponentListUrl: any;
  getSubComponentListUrl: any;
  getsubComponentPopUpUrl: any;
  getVcenterDataUrl: any;
  getDataCenterComponentRecordsUrl: any;
  getNotificationUrl: any;
  getStatesUrl: any;
  getCitiesUrl: any;
  customersUrl: any;
  customerListUrl: any;
  getCustomerLicenseUrl: any;
  getDataCenterListCustomer: any;
  getComponetCustomer: any;
  getReportNamesUrl: any;
  getSubComponetCustomer: any;
  getDownloadReportUrl: any;
  getCustomerCuntent: any;

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
        this.getTypesUrl = this.BASE_URL + result[0].getTypesUrl;
        this.getSubtypesUrl = this.BASE_URL + result[0].getSubtypesUrl;
        this.componentDeleteUrl = this.BASE_URL + result[0].componentDeleteUrl;
        this.countryUrl = this.BASE_URL + result[0].countryUrl;
        this.customersUrl = this.BASE_URL + result[0].customersUrl;
        this.customerListUrl = this.BASE_URL + result[0].customerListUrl;
        this.getCustomerLicenseUrl = this.BASE_URL + result[0].getCustomerLicenseUrl;
        this.leftNavDetailUrl = this.BASE_URL + result[0].leftNavDetailUrl;
        this.getComponentListUrl = this.BASE_URL + result[0].getComponentListUrl;
        this.getSubComponentListUrl = this.BASE_URL + result[0].getSubComponentListUrl;
        this.getsubComponentPopUpUrl = this.BASE_URL + result[0].getsubComponentPopUpUrl;
        this.getVcenterDataUrl = this.BASE_URL + result[0].getVcenterDataUrl;
        this.getDataCenterComponentRecordsUrl = this.BASE_URL + result[0].getDataCenterComponentRecordsUrl;
        this.getNotificationUrl = this.BASE_URL + result[0].getNotificationUrl;
        this.getStatesUrl = this.BASE_URL + result[0].getStatesUrl;
        this.getCitiesUrl = this.BASE_URL + result[0].getCitiesUrl;
        this.getDataCenterListCustomer = this.BASE_URL + result[0].getDataCenterListCustomer;
        this.getComponetCustomer = this.BASE_URL + result[0].getComponetCustomer;
		    this.getReportNamesUrl = this.BASE_URL + result[0].getReportNamesUrl;
        this.getDownloadReportUrl = this.BASE_URL + result[0].getDownloadReportUrl;
        this.getSubComponetCustomer = this.BASE_URL + result[0].getSubComponetCustomer;
        this.getCustomerCuntent = this.BASE_URL + result[0].getCustomerCuntent;
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

  getCustomersList(key) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'keyword=' + key;
    return this.http.post(this.customersUrl, body, options).map((res: Response) => res.json());
  }

  getCustomerLicense(id) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'id=' + id;
    return this.http.post(this.getCustomerLicenseUrl, body, options).map((res: Response) => res.json());
  }

  getCustomer() {
    return this.http.get(this.customerListUrl)
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

  editComponent(userId, componentId, name, version, subVersion, ipAddress, componentUser, password, enablePassword, vrfWarnStart, vrfWarnEnd, vrfMax, bgpPeersWarnStart, bgpPeersWarnEnd, bgpPeersMax, vlanWarnStart, vlanWarnEnd, vlanMax, hsrpWarnStart, hsrpWarnEnd, hsrpMax, staticRoutesWarnStart, staticRoutesWarnEnd, staticRoutesMax) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'userId=' + userId + '&componentId=' + componentId + '&name=' + name + '&type=' + version + '&version=' + subVersion + '&ipAddress=' + ipAddress + '&componentUser=' + componentUser + '&password=' + password + '&enablePassword=' + enablePassword + '&vrfWarnStart=' + vrfWarnStart + '&vrfWarnEnd=' + vrfWarnEnd + '&vrfMax=' + vrfMax + '&bgpPeersWarnStart=' + bgpPeersWarnStart + '&bgpPeersWarnEnd=' + bgpPeersWarnEnd + '&bgpPeersMax=' + bgpPeersMax + '&vlanWarnStart=' + vlanWarnStart + '&vlanWarnEnd=' + vlanWarnEnd + '&vlanMax=' + vlanMax + '&hsrpWarnStart=' + hsrpWarnStart + '&hsrpWarnEnd=' + hsrpWarnEnd + '&hsrpMax=' + hsrpMax + '&staticRoutesWarnStart=' + staticRoutesWarnStart + '&staticRoutesWarnEnd=' + staticRoutesWarnEnd + '&staticRoutesMax=' + staticRoutesMax;
    return this.http.post(this.editComponentUrl, body, options).map((res: Response) => res.json());
  }

  componentAdd(userId, name, dataCenterId, type, ipAddress, version, subVersion, componentUser, password, enablePassword, vrfWarnStart, vrfWarnEnd, vrfMax, bgpPeersWarnStart, bgpPeersWarnEnd, bgpPeersMax, vlanWarnStart, vlanWarnEnd, vlanMax, hsrpWarnStart, hsrpWarnEnd, hsrpMax, staticRoutesWarnStart, staticRoutesWarnEnd, staticRoutesMax, vrrpWarnStart, vrrpWarnEnd, vrrpMax) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'userId=' + userId + '&name=' + name + '&dataCenterId=' + dataCenterId + '&type=' + type + '&version=' + version + '&ipAddress=' + ipAddress + '&componentUser=' + componentUser + '&password=' + password + '&enablePassword=' + enablePassword + '&vrfWarnStart=' + vrfWarnStart + '&vrfWarnEnd=' + vrfWarnEnd + '&vrfMax=' + vrfMax + '&bgpPeersWarnStart=' + bgpPeersWarnStart + '&bgpPeersWarnEnd=' + bgpPeersWarnEnd + '&bgpPeersMax=' + bgpPeersMax + '&vlanWarnStart=' + vlanWarnStart + '&vlanWarnEnd=' + vlanWarnEnd + '&vlanMax=' + vlanMax + '&hsrpWarnStart=' + hsrpWarnStart + '&hsrpWarnEnd=' + hsrpWarnEnd + '&hsrpMax=' + hsrpMax + '&staticRoutesWarnStart=' + staticRoutesWarnStart + '&staticRoutesWarnEnd=' + staticRoutesWarnEnd + '&staticRoutesMax=' + staticRoutesMax + '&vrrpWarnStart=' + vrrpWarnStart + '&vrrpWarnEnd=' + vrrpWarnEnd + '&vrrpMax=' + vrrpMax;
    return this.http.post(this.componentAddUrl, body, options).map((res: Response) => res.json());
  }

  getTypes() {
    return this.http.get(this.getTypesUrl).map((res: Response) => res.json());
  }

  getSubtypes(id) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'typeId=' + id;
    return this.http.post(this.getSubtypesUrl, body, options).map((res: Response) => res.json());
  }

  componentDelete(userId, componentId) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'userId=' + userId + '&componentId=' + componentId;
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

  getDataCenterComponentRecords(componentId) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'componentId=' + componentId;
    return this.http.post(this.getDataCenterComponentRecordsUrl, body, options).map((res: Response) => res.json());
  }

  getNotification(type) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'type=' + type;
    return this.http.post(this.getNotificationUrl, body, options).map((res: Response) => res.json());
  }

  getStates(country) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'country=' + country;
    return this.http.post(this.getStatesUrl, body, options).map((res: Response) => res.json());
  }

  getCities(state) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'state=' + state;
    return this.http.post(this.getCitiesUrl, body, options).map((res: Response) => res.json());
  }

  getDataCenterListCusView(customerId) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'customerId=' + customerId;
    return this.http.post(this.getDataCenterListCustomer, body, options).map((res: Response) => res.json());
  }

  getComponetCusView(id) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'id=' + id;
    return this.http.post(this.getComponetCustomer, body, options).map((res: Response) => res.json());
  }
  getSubComponetCusView(compId) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'compId=' + compId;
    return this.http.post(this.getSubComponetCustomer, body, options).map((res: Response) => res.json());
  }

  getReportNames(id, componentId) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'id=' + id + '&componentId=' + componentId;
    return this.http.post(this.getReportNamesUrl, body, options).map((res: Response) => res.json());
  }

  getDownloadReport(id, fromDate, toDate, reportId) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'id=' + id + '&fromDate=' + fromDate + '&toDate=' + toDate + '&reportId=' + reportId;
    return this.http.post(this.getDownloadReportUrl, body, options).map((res: Response) => res.json());
  }

  getCustomerContentCusView(subId) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'subId=' + subId;
    return this.http.post(this.getCustomerCuntent, body, options).map((res: Response) => res.json());
  }

  BASE_URL = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');

}    