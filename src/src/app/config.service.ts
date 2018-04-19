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
  getCustomerCuntentUrl: any;
  getVcenterGraphContentUrl: any;
  getDashboardTileDatasUrl: any;
  getCustomerNameUrl: any;

  constructor(private http: Http) {
    if (!sessionStorage.urlSessionSet) {
      this.http.get('assets/config.json')
        .map((result) => result.json()).subscribe(result => {
          this.verifyLoginUrl = this.BASE_URL + result[0].verifyLoginUrl;
          this.getDashboardDataUrl = this.BASE_URL + result[0].callMetricsUrl;
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
          this.getCustomerCuntentUrl = this.BASE_URL + result[0].getCustomerCuntent;
          this.getVcenterGraphContentUrl = this.BASE_URL + result[0].getVcenterGraphContentUrl;
          this.getDashboardTileDatasUrl = this.BASE_URL + result[0].getDashboardTileDatasUrl;
          this.getCustomerNameUrl = this.BASE_URL + result[0].getCustomerNameUrl;
          this.setUrlInSession();
        });
    }
  }

  setUrlInSession() {
    sessionStorage.setItem('urlSessionSet', 'yes');
    sessionStorage.setItem('verifyLoginUrl', this.verifyLoginUrl);
    sessionStorage.setItem('getDashboardDataUrl', this.getDashboardDataUrl);
    sessionStorage.setItem('mapUrl', this.mapUrl);
    sessionStorage.setItem('getProvisioningListUrl', this.getProvisioningListUrl);
    sessionStorage.setItem('addDataCenterUrl', this.addDataCenterUrl);
    sessionStorage.setItem('editDataCenterUrl', this.editDataCenterUrl);
    sessionStorage.setItem('deleteDataCenterUrl', this.deleteDataCenterUrl);
    sessionStorage.setItem('editComponentUrl', this.editComponentUrl);
    sessionStorage.setItem('componentAddUrl', this.componentAddUrl);
    sessionStorage.setItem('getTypesUrl', this.getTypesUrl);
    sessionStorage.setItem('getSubtypesUrl', this.getSubtypesUrl);
    sessionStorage.setItem('componentDeleteUrl', this.componentDeleteUrl);
    sessionStorage.setItem('countryUrl', this.countryUrl);
    sessionStorage.setItem('customersUrl', this.customersUrl);
    sessionStorage.setItem('customerListUrl', this.customerListUrl);
    sessionStorage.setItem('getCustomerLicenseUrl', this.getCustomerLicenseUrl);
    sessionStorage.setItem('leftNavDetailUrl', this.leftNavDetailUrl);
    sessionStorage.setItem('getComponentListUrl', this.getComponentListUrl);
    sessionStorage.setItem('getSubComponentListUrl', this.getSubComponentListUrl);
    sessionStorage.setItem('getsubComponentPopUpUrl', this.getsubComponentPopUpUrl);
    sessionStorage.setItem('getVcenterDataUrl', this.getVcenterDataUrl);
    sessionStorage.setItem('getDataCenterComponentRecordsUrl', this.getDataCenterComponentRecordsUrl);
    sessionStorage.setItem('getNotificationUrl', this.getNotificationUrl);
    sessionStorage.setItem('getStatesUrl', this.getStatesUrl);
    sessionStorage.setItem('getCitiesUrl', this.getCitiesUrl);
    sessionStorage.setItem('getDataCenterListCustomer', this.getDataCenterListCustomer);
    sessionStorage.setItem('getComponetCustomer', this.getComponetCustomer);
    sessionStorage.setItem('getReportNamesUrl', this.getReportNamesUrl);
    sessionStorage.setItem('getDownloadReportUrl', this.getDownloadReportUrl);
    sessionStorage.setItem('getSubComponetCustomer', this.getSubComponetCustomer);
    sessionStorage.setItem('getCustomerCuntentUrl', this.getCustomerCuntentUrl);
    sessionStorage.setItem('getVcenterGraphContentUrl', this.getVcenterGraphContentUrl);
    sessionStorage.setItem('getDashboardTileDatasUrl', this.getDashboardTileDatasUrl);
    sessionStorage.setItem('getCustomerNameUrl', this.getCustomerNameUrl);
  }

  verifyLogin(username, password) {
    if (sessionStorage.verifyLoginUrl) {
      this.verifyLoginUrl = sessionStorage.verifyLoginUrl;
    }
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'username=' + username + '&password=' + password + '';
    return this.http.post(this.verifyLoginUrl, body, options).map((res: Response) => res.json());
  }

  getDashboardData() {
    if (sessionStorage.getDashboardDataUrl) {
      this.getDashboardDataUrl = sessionStorage.getDashboardDataUrl;
    }
    return this.http.get(this.getDashboardDataUrl)
      .map((result) => result.json());
  }

  getMap() {
    if (sessionStorage.mapUrl) {
      this.mapUrl = sessionStorage.mapUrl;
    }
    return this.http.get(this.mapUrl)
      .map((result) => result.json());
  }

  getProvisioningList() {
    if (sessionStorage.getProvisioningListUrl) {
      this.getProvisioningListUrl = sessionStorage.getProvisioningListUrl;
    }
    return this.http.get(this.getProvisioningListUrl)
      .map((result) => result.json());
  }

  getCustomersList() {
    if (sessionStorage.customersUrl) {
      this.customersUrl = sessionStorage.customersUrl;
    }
    return this.http.get(this.customersUrl)
      .map((result) => result.json());
  }

  getCustomerLicense(id) {
    if (sessionStorage.getCustomerLicenseUrl) {
      this.getCustomerLicenseUrl = sessionStorage.getCustomerLicenseUrl;
    }
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'id=' + id;
    return this.http.post(this.getCustomerLicenseUrl, body, options).map((res: Response) => res.json());
  }

  getCustomer() {
    if (sessionStorage.customerListUrl) {
      this.customerListUrl = sessionStorage.customerListUrl;
    }
    return this.http.get(this.customerListUrl)
      .map((result) => result.json());
  }

  getCountryList() {
    if (sessionStorage.countryUrl) {
      this.countryUrl = sessionStorage.countryUrl;
    }
    return this.http.get(this.countryUrl)
      .map((result) => result.json());
  }

  getLeftNavDetailslist() {
    if (sessionStorage.leftNavDetailUrl) {
      this.leftNavDetailUrl = sessionStorage.leftNavDetailUrl;
    }
    return this.http.get(this.leftNavDetailUrl)
      .map((result) => result.json());
  }

  addDataCenter(userId, name, country, state, city, timezone) {
    if (sessionStorage.addDataCenterUrl) {
      this.addDataCenterUrl = sessionStorage.addDataCenterUrl;
    }
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'userId=' + userId + '&name=' + name + '&country=' + country + '&state=' + state + '&city=' + city + '&timezone=' + timezone;
    return this.http.post(this.addDataCenterUrl, body, options).map((res: Response) => res.json());
  }

  editDataCenter(userId, id, name, country, state, city, timezone) {
    if (sessionStorage.editDataCenterUrl) {
      this.editDataCenterUrl = sessionStorage.editDataCenterUrl;
    }
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'userId=' + userId + '&id=' + id + '&name=' + name + '&country=' + country + '&state=' + state + '&city=' + city + '&timezone=' + timezone;
    return this.http.post(this.editDataCenterUrl, body, options).map((res: Response) => res.json());
  }

  deleteDataCenter(userId, id) {
    if (sessionStorage.deleteDataCenterUrl) {
      this.deleteDataCenterUrl = sessionStorage.deleteDataCenterUrl;
    }
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'userId=' + userId + '&id=' + id;
    return this.http.post(this.deleteDataCenterUrl, body, options).map((res: Response) => res.json());
  }

  editComponent(userId, componentId, name, version, subVersion, ipAddress, componentUser, password, enablePassword, vrfWarnStart, vrfWarnEnd, vrfMax, bgpPeersWarnStart, bgpPeersWarnEnd, bgpPeersMax, vlanWarnStart, vlanWarnEnd, vlanMax, hsrpWarnStart, hsrpWarnEnd, hsrpMax, staticRoutesWarnStart, staticRoutesWarnEnd, staticRoutesMax) {
    if (sessionStorage.editComponentUrl) {
      this.editComponentUrl = sessionStorage.editComponentUrl;
    }
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'userId=' + userId + '&componentId=' + componentId + '&name=' + name + '&type=' + version + '&version=' + subVersion + '&ipAddress=' + ipAddress + '&componentUser=' + componentUser + '&password=' + password + '&enablePassword=' + enablePassword + '&vrfWarnStart=' + vrfWarnStart + '&vrfWarnEnd=' + vrfWarnEnd + '&vrfMax=' + vrfMax + '&bgpPeersWarnStart=' + bgpPeersWarnStart + '&bgpPeersWarnEnd=' + bgpPeersWarnEnd + '&bgpPeersMax=' + bgpPeersMax + '&vlanWarnStart=' + vlanWarnStart + '&vlanWarnEnd=' + vlanWarnEnd + '&vlanMax=' + vlanMax + '&hsrpWarnStart=' + hsrpWarnStart + '&hsrpWarnEnd=' + hsrpWarnEnd + '&hsrpMax=' + hsrpMax + '&staticRoutesWarnStart=' + staticRoutesWarnStart + '&staticRoutesWarnEnd=' + staticRoutesWarnEnd + '&staticRoutesMax=' + staticRoutesMax;
    return this.http.post(this.editComponentUrl, body, options).map((res: Response) => res.json());
  }

  componentAdd(userId, name, dataCenterId, type, ipAddress, version, subVersion, componentUser, password, enablePassword, vrfWarnStart, vrfWarnEnd, vrfMax, bgpPeersWarnStart, bgpPeersWarnEnd, bgpPeersMax, vlanWarnStart, vlanWarnEnd, vlanMax, hsrpWarnStart, hsrpWarnEnd, hsrpMax, staticRoutesWarnStart, staticRoutesWarnEnd, staticRoutesMax, vrrpWarnStart, vrrpWarnEnd, vrrpMax) {
    if (sessionStorage.componentAddUrl) {
      this.componentAddUrl = sessionStorage.componentAddUrl;
    }
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'userId=' + userId + '&name=' + name + '&dataCenterId=' + dataCenterId + '&type=' + type + '&version=' + version + '&ipAddress=' + ipAddress + '&componentUser=' + componentUser + '&password=' + password + '&enablePassword=' + enablePassword + '&vrfWarnStart=' + vrfWarnStart + '&vrfWarnEnd=' + vrfWarnEnd + '&vrfMax=' + vrfMax + '&bgpPeersWarnStart=' + bgpPeersWarnStart + '&bgpPeersWarnEnd=' + bgpPeersWarnEnd + '&bgpPeersMax=' + bgpPeersMax + '&vlanWarnStart=' + vlanWarnStart + '&vlanWarnEnd=' + vlanWarnEnd + '&vlanMax=' + vlanMax + '&hsrpWarnStart=' + hsrpWarnStart + '&hsrpWarnEnd=' + hsrpWarnEnd + '&hsrpMax=' + hsrpMax + '&staticRoutesWarnStart=' + staticRoutesWarnStart + '&staticRoutesWarnEnd=' + staticRoutesWarnEnd + '&staticRoutesMax=' + staticRoutesMax + '&vrrpWarnStart=' + vrrpWarnStart + '&vrrpWarnEnd=' + vrrpWarnEnd + '&vrrpMax=' + vrrpMax;
    return this.http.post(this.componentAddUrl, body, options).map((res: Response) => res.json());
  }

  getTypes() {
    if (sessionStorage.getTypesUrl) {
      this.getTypesUrl = sessionStorage.getTypesUrl;
    }
    return this.http.get(this.getTypesUrl).map((res: Response) => res.json());
  }

  getSubtypes(id) {
    if (sessionStorage.getSubtypesUrl) {
      this.getSubtypesUrl = sessionStorage.getSubtypesUrl;
    }
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'typeId=' + id;
    return this.http.post(this.getSubtypesUrl, body, options).map((res: Response) => res.json());
  }

  componentDelete(userId, componentId) {
    if (sessionStorage.componentDeleteUrl) {
      this.componentDeleteUrl = sessionStorage.componentDeleteUrl;
    }
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'userId=' + userId + '&componentId=' + componentId;
    return this.http.post(this.componentDeleteUrl, body, options).map((res: Response) => res.json());
  }

  getComponentList(id) {
    if (sessionStorage.getComponentListUrl) {
      this.getComponentListUrl = sessionStorage.getComponentListUrl;
    }
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'id=' + id;
    return this.http.post(this.getComponentListUrl, body, options).map((res: Response) => res.json());
  }

  getSubComponentList(id, type) {
    if (sessionStorage.getSubComponentListUrl) {
      this.getSubComponentListUrl = sessionStorage.getSubComponentListUrl;
    }
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'id=' + id + '&type=' + type;
    return this.http.post(this.getSubComponentListUrl, body, options).map((res: Response) => res.json());
  }

  getsubComponentPopUp(typeId, subComponentName) {
    if (sessionStorage.getsubComponentPopUpUrl) {
      this.getsubComponentPopUpUrl = sessionStorage.getsubComponentPopUpUrl;
    }
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'typeId=' + typeId + '&subComponentName=' + subComponentName;
    return this.http.post(this.getsubComponentPopUpUrl, body, options).map((res: Response) => res.json());
  }

  getVcenterData(id) {
    if (sessionStorage.getVcenterDataUrl) {
      this.getVcenterDataUrl = sessionStorage.getVcenterDataUrl;
    }
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'id=' + id;
    return this.http.post(this.getVcenterDataUrl, body, options).map((res: Response) => res.json());
  }

  getDataCenterComponentRecords(componentId) {
    if (sessionStorage.getDataCenterComponentRecordsUrl) {
      this.getDataCenterComponentRecordsUrl = sessionStorage.getDataCenterComponentRecordsUrl;
    }
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'componentId=' + componentId;
    return this.http.post(this.getDataCenterComponentRecordsUrl, body, options).map((res: Response) => res.json());
  }

  getNotification(type) {
    if (sessionStorage.getNotificationUrl) {
      this.getNotificationUrl = sessionStorage.getNotificationUrl;
    }
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'type=' + type;
    return this.http.post(this.getNotificationUrl, body, options).map((res: Response) => res.json());
  }

  getStates(country) {
    if (sessionStorage.getStatesUrl) {
      this.getStatesUrl = sessionStorage.getStatesUrl;
    }
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'country=' + country;
    return this.http.post(this.getStatesUrl, body, options).map((res: Response) => res.json());
  }

  getCities(state) {
    if (sessionStorage.getCitiesUrl) {
      this.getCitiesUrl = sessionStorage.getCitiesUrl;
    }
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'state=' + state;
    return this.http.post(this.getCitiesUrl, body, options).map((res: Response) => res.json());
  }

  getDataCenterListCusView(customerId) {
    if (sessionStorage.getDataCenterListCustomer) {
      this.getDataCenterListCustomer = sessionStorage.getDataCenterListCustomer;
    }
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'customerId=' + customerId;
    return this.http.post(this.getDataCenterListCustomer, body, options).map((res: Response) => res.json());
  }

  getComponetCusView(id) {
    if (sessionStorage.getComponetCustomer) {
      this.getComponetCustomer = sessionStorage.getComponetCustomer;
    }
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'id=' + id;
    return this.http.post(this.getComponetCustomer, body, options).map((res: Response) => res.json());
  }

  getSubComponetCusView(compId, type) {
    if (sessionStorage.getSubComponetCustomer) {
      this.getSubComponetCustomer = sessionStorage.getSubComponetCustomer;
    }
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'compId=' + compId + '&type=' + type;
    return this.http.post(this.getSubComponetCustomer, body, options).map((res: Response) => res.json());
  }

  getReportNames(id, componentId) {
    if (sessionStorage.getReportNamesUrl) {
      this.getReportNamesUrl = sessionStorage.getReportNamesUrl;
    }
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'id=' + id + '&componentId=' + componentId;
    return this.http.post(this.getReportNamesUrl, body, options).map((res: Response) => res.json());
  }

  getDownloadReport(compId, fromDate, toDate, reportId, name) {
    if (sessionStorage.getDownloadReportUrl) {
      this.getDownloadReportUrl = sessionStorage.getDownloadReportUrl;
    }
    window.open(this.getDownloadReportUrl + '?compId=' + compId + '&reportId=' + reportId + '&fromDate=' + fromDate + '&toDate=' + toDate + '&name=' + name, "_blank");
  }

  getCustomerContentCusView(typeId, subComponentName) {
    if (sessionStorage.getCustomerCuntentUrl) {
      this.getCustomerCuntentUrl = sessionStorage.getCustomerCuntentUrl;
    }
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'typeId=' + typeId + '&subComponentName=' + subComponentName;
    return this.http.post(this.getCustomerCuntentUrl, body, options).map((res: Response) => res.json());
  }

  getVcenterGraphContent(compId, type, typeId, duration) {
    if (sessionStorage.getVcenterGraphContentUrl) {
      this.getVcenterGraphContentUrl = sessionStorage.getVcenterGraphContentUrl;
    }
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'compId=' + compId + '&type=' + type + '&typeId=' + typeId + '&duration=' + duration;
    return this.http.post(this.getVcenterGraphContentUrl, body, options).map((res: Response) => res.json());
  }

  getDashboardTileDatas() {
    if (sessionStorage.getDashboardTileDatasUrl) {
      this.getDashboardTileDatasUrl = sessionStorage.getDashboardTileDatasUrl;
    }
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = '';
    return this.http.post(this.getDashboardTileDatasUrl, body, options).map((res: Response) => res.json());
  }

  getCustomerName(customerId) {
    if (sessionStorage.getCustomerNameUrl) {
      this.getCustomerNameUrl = sessionStorage.getCustomerNameUrl;
    }
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = 'customerId=' + customerId;
    return this.http.post(this.getCustomerNameUrl, body, options).map((res: Response) => res.json());
  }

  BASE_URL = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
}    