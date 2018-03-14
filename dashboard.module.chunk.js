webpackJsonp(["dashboard.module"],{

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (min-width: 992px) {\r\n\t#map_part1 {\r\n\t\tpadding-right: 0px;\r\n\t}\r\n\t#map_part2 {\r\n\t\tpadding-left: 0px;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: 991px) {\r\n\t.part1_div {\r\n\t\tmargin-bottom:0px;\r\n\t}\r\n}\r\n.tile-head {\r\n  color: #000;\r\n  font-weight:bold;\r\n  font-size: 15px;\r\n  margin-bottom: 0px;\r\n}\r\n.tile-count {\r\n  float: right;\r\n  font-size: 30px;\r\n}\r\n.tile-footer-p {\r\n  text-align: right;\r\n  margin-bottom: 0px;\r\n}\r\n.card-block-pd {\r\n  padding: .80rem;\r\n}\r\n.round-block {\r\n  display: inline-block;\r\n  box-shadow: -1px 3px 5px #5f5a5a66;\r\n}\r\n.rb-1 {\r\n  padding: 10px 22px;\r\n  background: #2dd2ef;\r\n}\r\n.rb-2 {\r\n  padding: 10px 22px;\r\n  background: #a327d1;\r\n}\r\n.rb-3 {\r\n  padding: 10px 14px;\r\n  background: #33b86c;\r\n}\r\n.rb-4 {\r\n  padding: 10px 14px;\r\n  background: #ffae00;\r\n}\r\n.round-text {\r\n  color: #ffff;\r\n  font-size: 23px;\r\n}\r\n@media screen and (max-width: 1251px) {\r\n\t.block {\r\n\t\t-webkit-box-flex: 0;\r\n\t\t    -ms-flex: 0 0 50%;\r\n\t\t        flex: 0 0 50%;\r\n\t\tmax-width: 50%;\r\n\t}\r\n}\r\n@media screen and (max-width: 595px) {\r\n\t.block {\r\n\t\t-webkit-box-flex: 0;\r\n\t\t    -ms-flex: 0 0 100%;\r\n\t\t        flex: 0 0 100%;\r\n\t\tmax-width: 100%;\r\n\t}\r\n\t.blk1 {\r\n\t\twidth: 41%;\r\n\t}\r\n\t.blk2 {\r\n\t\twidth: 59%;\r\n\t}\r\n}\r\n.rsddropbtn {\r\n  background-color: #fff;\r\n  color: white;\r\n  padding: 7px;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n \r\n.rsddropdown {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.rsddropdown-content {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #fff;\r\n  overflow: auto;\r\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n  z-index: 1;\r\n  right: 10%;\r\n  border-radius: 6px;\r\n  border: 1px solid aliceblue;\r\n  cursor: pointer;\r\n  text-align: left;\r\n}\r\n\r\n.rsddropdown-content a {\r\n  color: #08070799;\r\n  padding: 5px 12px;\r\n  text-decoration: none;\r\n  display: block;\r\n  font-size: 12px;\r\n}\r\n\r\n.rsddropdown a:hover {background-color: #ddd}\r\n\r\n.rsdshow {display:block;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\" style=\"font-weight:600; font-size:20px; color:#4a6076; padding-bottom:15px;\">\r\n    onPOINT HCS.Capacity\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-3 col-sm-6 block\">\r\n    <div class=\"card table-card\">\r\n        <div class=\"row-table\">\r\n          <div class=\"col-md-12 card-block-big card-block-pd\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-5 blk1\">\r\n                  <span class=\"round-block rb-1 img-circle pull-left\" style=\"float:right;\">\r\n                    <span class=\"round-text\" style=\"font-size: 23px\"> 4 </span>\r\n                  </span>\r\n                </div>\r\n              <div class=\"col-sm-7 blk2\" style=\"text-align:right;padding-right:13%;\">\r\n                <div class=\"tile-head\">\r\n          Data Centers<br />\r\n          <span class=\"tile-count\" style=\"font-size:30px;font-weight:normal;min-height:45px;\"></span>\r\n        </div>\r\n              </div>\r\n              <div class=\"col-md-12\" style=\"padding-right:13%;\">\r\n                  <p class=\"tile-footer-p\" style=\"margin-top:7px;\"><span style=\"color: green;\"><i class=\"fa fa-arrow-up\" style=\"font-size:15px;\"></i> 2</span> more than last month</p>\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"col-md-3 col-sm-6 block\">\r\n    <div class=\"card table-card\">\r\n        <div class=\"row-table\">\r\n          <div class=\"col-md-12 card-block-big card-block-pd\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-5 blk1\">\r\n                  <span class=\"round-block rb-2 img-circle pull-left\" style=\"float:right;\">\r\n                    <span class=\"round-text\" style=\"font-size: 23px\"> 8 </span>\r\n                  </span>\r\n                </div>\r\n              <div class=\"col-sm-7 blk2\" style=\"text-align:right;padding-right:13%;\">\r\n                <div class=\"tile-head\">\r\n          New Reports<br />\r\n          <span class=\"tile-count\" style=\"font-size:30px;font-weight:normal;min-height:45px;\"></span>\r\n        </div>\r\n              </div>\r\n              <div class=\"col-md-12\" style=\"padding-right:13%;\">\r\n                  <p class=\"tile-footer-p\" style=\"margin-top:7px;\"><span style=\"color: green;\"><i class=\"fa fa-arrow-up\" style=\"font-size:15px;\"></i> 1</span> more than last month</p>\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"col-md-3 col-sm-6 block\">\r\n    <div class=\"card table-card\">\r\n        <div class=\"row-table\">\r\n          <div class=\"col-md-12 card-block-big card-block-pd\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-5 blk1\">\r\n                  <span class=\"round-block rb-3 img-circle pull-left\" style=\"float:right;\">\r\n                    <span class=\"round-text\" style=\"font-size: 23px\"><i class=\"fa fa-users\"></i></span>\r\n                  </span>\r\n                </div>\r\n              <div class=\"col-sm-7 blk2\" style=\"text-align:right;padding-right:13%;\">\r\n                <div class=\"tile-head\">\r\n          Active Users<br />\r\n          <span class=\"tile-count\" style=\"font-size:30px;font-weight:normal;\">6381</span>\r\n        </div>\r\n              </div>\r\n              <div class=\"col-md-12\" style=\"padding-right:13%;\">\r\n                  <p class=\"tile-footer-p\" style=\"margin-top:7px;\"><span style=\"color: red;\"><i class=\"fa fa-arrow-down\" style=\"font-size:15px;\"></i> 534</span> more than last month</p>\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"col-md-3 col-sm-6 block\">\r\n    <div class=\"card table-card\">\r\n        <div class=\"row-table\">\r\n          <div class=\"col-md-12 card-block-big card-block-pd\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-5 blk1\">\r\n                  <span class=\"round-block rb-4 img-circle pull-left\" style=\"float:right;\">\r\n                    <span class=\"round-text\" style=\"font-size: 23px\"><i class=\"fa fa-user-circle\"></i></span>\r\n                  </span>\r\n                </div>\r\n              <div class=\"col-sm-7 blk2\" style=\"text-align:right;padding-right:13%;\">\r\n                <div class=\"tile-head\">\r\n          Customers<br />\r\n          <span class=\"tile-count\" style=\"font-size:30px;font-weight:normal;\">132</span>\r\n        </div>\r\n              </div>\r\n              <div class=\"col-md-12\" style=\"padding-right:13%;\">\r\n                  <p class=\"tile-footer-p\" style=\"margin-top:7px;\"><span style=\"color: green;\"><i class=\"fa fa-arrow-up\" style=\"font-size:15px;\"></i> 47</span> more than last month</p>\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"map_part1\" class=\"col-lg-7\">\r\n    <div class=\"card part1_div\">\r\n      <div class=\"card-block\">\r\n        <app-world-map></app-world-map>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"map_part2\" class=\"col-lg-5\">\r\n    <div class=\"card\" style=\"height: 541px;\">\r\n      <div class=\"card-block\">\r\n      <div class=\"\" style=\"opacity: 1;\">\r\n        <div class=\"\" style=\"\">\r\n        <div class=\"card-body table-border-style\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table\">\r\n              <thead>\r\n              <tr>\r\n                <th style=\"border-bottom: 0;border-top: 0;\">Call Metrics</th>\r\n                <th style=\"border-bottom: 0;border-top: 0;font-size: 13px;color: #C0BEBE;\">Last 24 hrs</th>\r\n                <th style=\"border-bottom: 0;border-top: 0;text-align:right;\">\r\n                  <div class=\"rsddropdown\">\r\n                    <span (click)=\"callMatricsClick()\" style=\"cursor:pointer;color:#b0bec5;font-size:20px;\">...</span>\r\n                    <div id=\"callMatricsDropdown\" class=\"rsddropdown-content\">\r\n                    <a (click)=\"getCallMatrics('today')\" style=\"text-align:center;font-size:14px;\">Today</a>\r\n                    <a (click)=\"getCallMatrics('yesterday')\" style=\"text-align:center;font-size:14px;\">Yesterday</a>\r\n                    <a (click)=\"getCallMatrics('week')\" style=\"text-align:center;font-size:14px;\">1 Week</a>\r\n                    </div>\r\n                  </div>\r\n                </th>\r\n              </tr>\r\n              </thead>\r\n              <tbody>\r\n              <tr *ngFor=\"let data of datas\">\r\n                <th style=\"vertical-align: middle;\" scope=\"row\"><span style=\"margin-left: 10px;color: #2cd2ef;font-size: 18px;\">{{data.name}}</span></th>\r\n                <td>\r\n                <span style=\"display: block;\">Total Calls</span>\r\n                <span style=\"color: #2cd2ef; font-size: 20px;\">{{data.total}}</span>\r\n                </td>\r\n                <td>\r\n                <span style=\"display: block;\">Concurrent Calls</span>\r\n                <span style=\"color: #2cd2ef; font-size: 20px;\">{{data.concurrent}}</span>\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n            </div>\r\n        </div>\r\n        </div>\r\n      </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-lg-12\">\r\n    <div class=\"card\">\r\n      <div class=\"table-responsive\">\r\n            <table class=\"table\">\r\n              <thead>\r\n                <tr>\r\n                  <th style=\"width: 150px;border-bottom: 0;\">Notifications</th>\r\n                  <th style=\"width: 800px;border-bottom: 0;font-size: 13px;color: #C0BEBE;\">Today</th>\r\n                  <th style=\"text-align:right;border-bottom: 0;\">\r\n                    <div class=\"rsddropdown\">\r\n                        <span (click)=\"notificationClick()\" style=\"cursor:pointer;color:#b0bec5;font-size:20px;\">...</span>\r\n                        <div id=\"notificationDropDown\" class=\"rsddropdown-content\">\r\n                          <a (click)=\"getNotification('today')\" style=\"text-align:center;font-size:14px;\">Today</a>\r\n                          <a (click)=\"getNotification('yesterday')\" style=\"text-align:center;font-size:14px;\">Yesterday</a>\r\n                          <a (click)=\"getNotification('week')\" style=\"text-align:center;font-size:14px;\">1 Week</a>\r\n                        </div>\r\n                      </div>\r\n                  </th>\r\n                </tr>\r\n        <tr>\r\n                  <th style=\"width: 150px;border-top: 0;border-bottom:1px;\">Data Center</th>\r\n                  <th style=\"width: 800px;border-top: 0;border-bottom:1px;\">Alert</th>\r\n                  <th style=\"border-top: 0;border-bottom:1px;\">Time</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <th scope=\"row\"><input type=\"checkbox\"><span style=\"margin-left: 10px;color: red;\">DC 4</span></th>\r\n                  <td>CPU utilization high on host-01</td>\r\n                  <td>12:12 PM</td>\r\n                </tr>\r\n                <tr style=\"background-color:#fafafa;\">\r\n                  <th scope=\"row\"><input type=\"checkbox\"><span style=\"margin-left: 10px;color:#ec7a07;\">DC 2</span></th>\r\n                  <td>Datastore threshold crossed SAN-01</td>\r\n                  <td>2:17 AM</td>\r\n                </tr>\r\n                <tr>\r\n                  <th scope=\"row\"><input type=\"checkbox\"><span style=\"margin-left: 10px;color:#ec7a07;\">DC 2</span></th>\r\n                  <td>CPU count on the VMs exceed the total cores on host-02</td>\r\n                  <td>12:12 PM</td>\r\n                </tr>\r\n                <tr style=\"background-color:#fafafa;\">\r\n                  <th scope=\"row\"><input type=\"checkbox\"><span style=\"margin-left: 10px;color: red;\">DC 4</span></th>\r\n                  <td>CPU utilization high on host-01</td>\r\n                  <td>2:17 PM</td>\r\n                </tr>\r\n                <tr>\r\n                  <th scope=\"row\"><input type=\"checkbox\"><span style=\"margin-left: 10px;color: red;\">DC 4</span></th>\r\n                  <td>Datastore threshold crossed SAN-01</td>\r\n                  <td>12:12 PM</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
        this.callMatricsFilter = false;
        this.notificationFilter = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.datas = function () {
            var tmp = null;
            $.ajax({
                'async': false,
                'type': "POST",
                'global': false,
                'dataType': 'html',
                'url': "assets/webservices/datacenters.php",
                'data': {},
                'success': function (data) {
                    tmp = data;
                }
            });
            return tmp;
        }();
        var details = JSON.parse(this.datas);
        var dataset = [];
        for (var data in details) {
            var name = details[data].name;
            var total = details[data].total_calls;
            var concurrent = details[data].concurrent_calls;
            var unit = {
                name: name,
                total: total,
                concurrent: concurrent
            };
            dataset.push(unit);
        }
        this.datas = dataset;
    };
    DashboardComponent.prototype.callMatricsClick = function () {
        this.callMatricsFilter = !this.callMatricsFilter;
        if (this.callMatricsFilter) {
            $('#callMatricsDropdown').show();
        }
        else {
            $('#callMatricsDropdown').hide();
        }
    };
    DashboardComponent.prototype.notificationClick = function () {
        this.notificationFilter = !this.notificationFilter;
        if (this.notificationFilter) {
            $('#notificationDropDown').show();
        }
        else {
            $('#notificationDropDown').hide();
        }
    };
    DashboardComponent.prototype.getCallMatrics = function (id) {
        $('#callMatricsDropdown').hide();
        alert(id);
    };
    DashboardComponent.prototype.getNotification = function (id) {
        $('#notificationDropDown').hide();
        alert(id);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_routing__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__world_map_world_map_component__ = __webpack_require__("../../../../../src/app/dashboard/world-map/world-map.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__dashboard_routing__["a" /* DashboardRoutes */]),
            __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_6__world_map_world_map_component__["a" /* WorldMapComponent */]]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");

var DashboardRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__dashboard_component__["a" /* DashboardComponent */],
        data: {
            breadcrumb: 'Dashboard',
            icon: 'icofont-home bg-c-blue',
            status: false
        }
    }];
//# sourceMappingURL=dashboard.routing.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/world-map/world-map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#chartdiv {\r\n    width: 100%;\r\n    height: 500px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/world-map/world-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"chartdiv\"></div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/world-map/world-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorldMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorldMapComponent = (function () {
    function WorldMapComponent(AmCharts) {
        this.AmCharts = AmCharts;
    }
    WorldMapComponent.prototype.ngOnDestroy = function () {
        if (this.map) {
            this.AmCharts.destroyChart(this.map);
        }
    };
    WorldMapComponent.prototype.ngOnInit = function () {
        var latlong = {};
        latlong["AD"] = { "latitude": 42.5, "longitude": 1.5 };
        latlong["AE"] = { "latitude": 24, "longitude": 54 };
        latlong["AF"] = { "latitude": 33, "longitude": 65 };
        latlong["AG"] = { "latitude": 17.05, "longitude": -61.8 };
        latlong["AI"] = { "latitude": 18.25, "longitude": -63.1667 };
        latlong["AL"] = { "latitude": 41, "longitude": 20 };
        latlong["AM"] = { "latitude": 40, "longitude": 45 };
        latlong["AN"] = { "latitude": 12.25, "longitude": -68.75 };
        latlong["AO"] = { "latitude": -12.5, "longitude": 18.5 };
        latlong["AP"] = { "latitude": 35, "longitude": 105 };
        latlong["AQ"] = { "latitude": -90, "longitude": 0 };
        latlong["AR"] = { "latitude": -34, "longitude": -64 };
        latlong["AS"] = { "latitude": -14.3333, "longitude": -170 };
        latlong["AT"] = { "latitude": 47.3333, "longitude": 13.3333 };
        latlong["AU"] = { "latitude": -27, "longitude": 133 };
        latlong["AW"] = { "latitude": 12.5, "longitude": -69.9667 };
        latlong["AZ"] = { "latitude": 40.5, "longitude": 47.5 };
        latlong["BA"] = { "latitude": 44, "longitude": 18 };
        latlong["BB"] = { "latitude": 13.1667, "longitude": -59.5333 };
        latlong["BD"] = { "latitude": 24, "longitude": 90 };
        latlong["BE"] = { "latitude": 50.8333, "longitude": 4 };
        latlong["BF"] = { "latitude": 13, "longitude": -2 };
        latlong["BG"] = { "latitude": 43, "longitude": 25 };
        latlong["BH"] = { "latitude": 26, "longitude": 50.55 };
        latlong["BI"] = { "latitude": -3.5, "longitude": 30 };
        latlong["BJ"] = { "latitude": 9.5, "longitude": 2.25 };
        latlong["BM"] = { "latitude": 32.3333, "longitude": -64.75 };
        latlong["BN"] = { "latitude": 4.5, "longitude": 114.6667 };
        latlong["BO"] = { "latitude": -17, "longitude": -65 };
        latlong["BR"] = { "latitude": -10, "longitude": -55 };
        latlong["BS"] = { "latitude": 24.25, "longitude": -76 };
        latlong["BT"] = { "latitude": 27.5, "longitude": 90.5 };
        latlong["BV"] = { "latitude": -54.4333, "longitude": 3.4 };
        latlong["BW"] = { "latitude": -22, "longitude": 24 };
        latlong["BY"] = { "latitude": 53, "longitude": 28 };
        latlong["BZ"] = { "latitude": 17.25, "longitude": -88.75 };
        latlong["CA"] = { "latitude": 54, "longitude": -100 };
        latlong["CC"] = { "latitude": -12.5, "longitude": 96.8333 };
        latlong["CD"] = { "latitude": 0, "longitude": 25 };
        latlong["CF"] = { "latitude": 7, "longitude": 21 };
        latlong["CG"] = { "latitude": -1, "longitude": 15 };
        latlong["CH"] = { "latitude": 47, "longitude": 8 };
        latlong["CI"] = { "latitude": 8, "longitude": -5 };
        latlong["CK"] = { "latitude": -21.2333, "longitude": -159.7667 };
        latlong["CL"] = { "latitude": -30, "longitude": -71 };
        latlong["CM"] = { "latitude": 6, "longitude": 12 };
        latlong["CN"] = { "latitude": 35, "longitude": 105 };
        latlong["CO"] = { "latitude": 4, "longitude": -72 };
        latlong["CR"] = { "latitude": 10, "longitude": -84 };
        latlong["CU"] = { "latitude": 21.5, "longitude": -80 };
        latlong["CV"] = { "latitude": 16, "longitude": -24 };
        latlong["CX"] = { "latitude": -10.5, "longitude": 105.6667 };
        latlong["CY"] = { "latitude": 35, "longitude": 33 };
        latlong["CZ"] = { "latitude": 49.75, "longitude": 15.5 };
        latlong["DE"] = { "latitude": 51, "longitude": 9 };
        latlong["DJ"] = { "latitude": 11.5, "longitude": 43 };
        latlong["DK"] = { "latitude": 56, "longitude": 10 };
        latlong["DM"] = { "latitude": 15.4167, "longitude": -61.3333 };
        latlong["DO"] = { "latitude": 19, "longitude": -70.6667 };
        latlong["DZ"] = { "latitude": 28, "longitude": 3 };
        latlong["EC"] = { "latitude": -2, "longitude": -77.5 };
        latlong["EE"] = { "latitude": 59, "longitude": 26 };
        latlong["EG"] = { "latitude": 27, "longitude": 30 };
        latlong["EH"] = { "latitude": 24.5, "longitude": -13 };
        latlong["ER"] = { "latitude": 15, "longitude": 39 };
        latlong["ES"] = { "latitude": 40, "longitude": -4 };
        latlong["ET"] = { "latitude": 8, "longitude": 38 };
        latlong["EU"] = { "latitude": 47, "longitude": 8 };
        latlong["FI"] = { "latitude": 62, "longitude": 26 };
        latlong["FJ"] = { "latitude": -18, "longitude": 175 };
        latlong["FK"] = { "latitude": -51.75, "longitude": -59 };
        latlong["FM"] = { "latitude": 6.9167, "longitude": 158.25 };
        latlong["FO"] = { "latitude": 62, "longitude": -7 };
        latlong["FR"] = { "latitude": 46, "longitude": 2 };
        latlong["GA"] = { "latitude": -1, "longitude": 11.75 };
        latlong["GB"] = { "latitude": 54, "longitude": -2 };
        latlong["GD"] = { "latitude": 12.1167, "longitude": -61.6667 };
        latlong["GE"] = { "latitude": 42, "longitude": 43.5 };
        latlong["GF"] = { "latitude": 4, "longitude": -53 };
        latlong["GH"] = { "latitude": 8, "longitude": -2 };
        latlong["GI"] = { "latitude": 36.1833, "longitude": -5.3667 };
        latlong["GL"] = { "latitude": 72, "longitude": -40 };
        latlong["GM"] = { "latitude": 13.4667, "longitude": -16.5667 };
        latlong["GN"] = { "latitude": 11, "longitude": -10 };
        latlong["GP"] = { "latitude": 16.25, "longitude": -61.5833 };
        latlong["GQ"] = { "latitude": 2, "longitude": 10 };
        latlong["GR"] = { "latitude": 39, "longitude": 22 };
        latlong["GS"] = { "latitude": -54.5, "longitude": -37 };
        latlong["GT"] = { "latitude": 15.5, "longitude": -90.25 };
        latlong["GU"] = { "latitude": 13.4667, "longitude": 144.7833 };
        latlong["GW"] = { "latitude": 12, "longitude": -15 };
        latlong["GY"] = { "latitude": 5, "longitude": -59 };
        latlong["HK"] = { "latitude": 22.25, "longitude": 114.1667 };
        latlong["HM"] = { "latitude": -53.1, "longitude": 72.5167 };
        latlong["HN"] = { "latitude": 15, "longitude": -86.5 };
        latlong["HR"] = { "latitude": 45.1667, "longitude": 15.5 };
        latlong["HT"] = { "latitude": 19, "longitude": -72.4167 };
        latlong["HU"] = { "latitude": 47, "longitude": 20 };
        latlong["ID"] = { "latitude": -5, "longitude": 120 };
        latlong["IE"] = { "latitude": 53, "longitude": -8 };
        latlong["IL"] = { "latitude": 31.5, "longitude": 34.75 };
        latlong["IN"] = { "latitude": 20, "longitude": 77 };
        latlong["IO"] = { "latitude": -6, "longitude": 71.5 };
        latlong["IQ"] = { "latitude": 33, "longitude": 44 };
        latlong["IR"] = { "latitude": 32, "longitude": 53 };
        latlong["IS"] = { "latitude": 65, "longitude": -18 };
        latlong["IT"] = { "latitude": 42.8333, "longitude": 12.8333 };
        latlong["JM"] = { "latitude": 18.25, "longitude": -77.5 };
        latlong["JO"] = { "latitude": 31, "longitude": 36 };
        latlong["JP"] = { "latitude": 36, "longitude": 138 };
        latlong["KE"] = { "latitude": 1, "longitude": 38 };
        latlong["KG"] = { "latitude": 41, "longitude": 75 };
        latlong["KH"] = { "latitude": 13, "longitude": 105 };
        latlong["KI"] = { "latitude": 1.4167, "longitude": 173 };
        latlong["KM"] = { "latitude": -12.1667, "longitude": 44.25 };
        latlong["KN"] = { "latitude": 17.3333, "longitude": -62.75 };
        latlong["KP"] = { "latitude": 40, "longitude": 127 };
        latlong["KR"] = { "latitude": 37, "longitude": 127.5 };
        latlong["KW"] = { "latitude": 29.3375, "longitude": 47.6581 };
        latlong["KY"] = { "latitude": 19.5, "longitude": -80.5 };
        latlong["KZ"] = { "latitude": 48, "longitude": 68 };
        latlong["LA"] = { "latitude": 18, "longitude": 105 };
        latlong["LB"] = { "latitude": 33.8333, "longitude": 35.8333 };
        latlong["LC"] = { "latitude": 13.8833, "longitude": -61.1333 };
        latlong["LI"] = { "latitude": 47.1667, "longitude": 9.5333 };
        latlong["LK"] = { "latitude": 7, "longitude": 81 };
        latlong["LR"] = { "latitude": 6.5, "longitude": -9.5 };
        latlong["LS"] = { "latitude": -29.5, "longitude": 28.5 };
        latlong["LT"] = { "latitude": 55, "longitude": 24 };
        latlong["LU"] = { "latitude": 49.75, "longitude": 6 };
        latlong["LV"] = { "latitude": 57, "longitude": 25 };
        latlong["LY"] = { "latitude": 25, "longitude": 17 };
        latlong["MA"] = { "latitude": 32, "longitude": -5 };
        latlong["MC"] = { "latitude": 43.7333, "longitude": 7.4 };
        latlong["MD"] = { "latitude": 47, "longitude": 29 };
        latlong["ME"] = { "latitude": 42.5, "longitude": 19.4 };
        latlong["MG"] = { "latitude": -20, "longitude": 47 };
        latlong["MH"] = { "latitude": 9, "longitude": 168 };
        latlong["MK"] = { "latitude": 41.8333, "longitude": 22 };
        latlong["ML"] = { "latitude": 17, "longitude": -4 };
        latlong["MM"] = { "latitude": 22, "longitude": 98 };
        latlong["MN"] = { "latitude": 46, "longitude": 105 };
        latlong["MO"] = { "latitude": 22.1667, "longitude": 113.55 };
        latlong["MP"] = { "latitude": 15.2, "longitude": 145.75 };
        latlong["MQ"] = { "latitude": 14.6667, "longitude": -61 };
        latlong["MR"] = { "latitude": 20, "longitude": -12 };
        latlong["MS"] = { "latitude": 16.75, "longitude": -62.2 };
        latlong["MT"] = { "latitude": 35.8333, "longitude": 14.5833 };
        latlong["MU"] = { "latitude": -20.2833, "longitude": 57.55 };
        latlong["MV"] = { "latitude": 3.25, "longitude": 73 };
        latlong["MW"] = { "latitude": -13.5, "longitude": 34 };
        latlong["MX"] = { "latitude": 23, "longitude": -102 };
        latlong["MY"] = { "latitude": 2.5, "longitude": 112.5 };
        latlong["MZ"] = { "latitude": -18.25, "longitude": 35 };
        latlong["NA"] = { "latitude": -22, "longitude": 17 };
        latlong["NC"] = { "latitude": -21.5, "longitude": 165.5 };
        latlong["NE"] = { "latitude": 16, "longitude": 8 };
        latlong["NF"] = { "latitude": -29.0333, "longitude": 167.95 };
        latlong["NG"] = { "latitude": 10, "longitude": 8 };
        latlong["NI"] = { "latitude": 13, "longitude": -85 };
        latlong["NL"] = { "latitude": 52.5, "longitude": 5.75 };
        latlong["NO"] = { "latitude": 62, "longitude": 10 };
        latlong["NP"] = { "latitude": 28, "longitude": 84 };
        latlong["NR"] = { "latitude": -0.5333, "longitude": 166.9167 };
        latlong["NU"] = { "latitude": -19.0333, "longitude": -169.8667 };
        latlong["NZ"] = { "latitude": -41, "longitude": 174 };
        latlong["OM"] = { "latitude": 21, "longitude": 57 };
        latlong["PA"] = { "latitude": 9, "longitude": -80 };
        latlong["PE"] = { "latitude": -10, "longitude": -76 };
        latlong["PF"] = { "latitude": -15, "longitude": -140 };
        latlong["PG"] = { "latitude": -6, "longitude": 147 };
        latlong["PH"] = { "latitude": 13, "longitude": 122 };
        latlong["PK"] = { "latitude": 30, "longitude": 70 };
        latlong["PL"] = { "latitude": 52, "longitude": 20 };
        latlong["PM"] = { "latitude": 46.8333, "longitude": -56.3333 };
        latlong["PR"] = { "latitude": 18.25, "longitude": -66.5 };
        latlong["PS"] = { "latitude": 32, "longitude": 35.25 };
        latlong["PT"] = { "latitude": 39.5, "longitude": -8 };
        latlong["PW"] = { "latitude": 7.5, "longitude": 134.5 };
        latlong["PY"] = { "latitude": -23, "longitude": -58 };
        latlong["QA"] = { "latitude": 25.5, "longitude": 51.25 };
        latlong["RE"] = { "latitude": -21.1, "longitude": 55.6 };
        latlong["RO"] = { "latitude": 46, "longitude": 25 };
        latlong["RS"] = { "latitude": 44, "longitude": 21 };
        latlong["RU"] = { "latitude": 60, "longitude": 100 };
        latlong["RW"] = { "latitude": -2, "longitude": 30 };
        latlong["SA"] = { "latitude": 25, "longitude": 45 };
        latlong["SB"] = { "latitude": -8, "longitude": 159 };
        latlong["SC"] = { "latitude": -4.5833, "longitude": 55.6667 };
        latlong["SD"] = { "latitude": 15, "longitude": 30 };
        latlong["SE"] = { "latitude": 62, "longitude": 15 };
        latlong["SG"] = { "latitude": 1.3667, "longitude": 103.8 };
        latlong["SH"] = { "latitude": -15.9333, "longitude": -5.7 };
        latlong["SI"] = { "latitude": 46, "longitude": 15 };
        latlong["SJ"] = { "latitude": 78, "longitude": 20 };
        latlong["SK"] = { "latitude": 48.6667, "longitude": 19.5 };
        latlong["SL"] = { "latitude": 8.5, "longitude": -11.5 };
        latlong["SM"] = { "latitude": 43.7667, "longitude": 12.4167 };
        latlong["SN"] = { "latitude": 14, "longitude": -14 };
        latlong["SO"] = { "latitude": 10, "longitude": 49 };
        latlong["SR"] = { "latitude": 4, "longitude": -56 };
        latlong["ST"] = { "latitude": 1, "longitude": 7 };
        latlong["SV"] = { "latitude": 13.8333, "longitude": -88.9167 };
        latlong["SY"] = { "latitude": 35, "longitude": 38 };
        latlong["SZ"] = { "latitude": -26.5, "longitude": 31.5 };
        latlong["TC"] = { "latitude": 21.75, "longitude": -71.5833 };
        latlong["TD"] = { "latitude": 15, "longitude": 19 };
        latlong["TF"] = { "latitude": -43, "longitude": 67 };
        latlong["TG"] = { "latitude": 8, "longitude": 1.1667 };
        latlong["TH"] = { "latitude": 15, "longitude": 100 };
        latlong["TJ"] = { "latitude": 39, "longitude": 71 };
        latlong["TK"] = { "latitude": -9, "longitude": -172 };
        latlong["TM"] = { "latitude": 40, "longitude": 60 };
        latlong["TN"] = { "latitude": 34, "longitude": 9 };
        latlong["TO"] = { "latitude": -20, "longitude": -175 };
        latlong["TR"] = { "latitude": 39, "longitude": 35 };
        latlong["TT"] = { "latitude": 11, "longitude": -61 };
        latlong["TV"] = { "latitude": -8, "longitude": 178 };
        latlong["TW"] = { "latitude": 23.5, "longitude": 121 };
        latlong["TZ"] = { "latitude": -6, "longitude": 35 };
        latlong["UA"] = { "latitude": 49, "longitude": 32 };
        latlong["UG"] = { "latitude": 1, "longitude": 32 };
        latlong["UM"] = { "latitude": 19.2833, "longitude": 166.6 };
        latlong["US"] = { "latitude": 38, "longitude": -97 };
        latlong["UY"] = { "latitude": -33, "longitude": -56 };
        latlong["UZ"] = { "latitude": 41, "longitude": 64 };
        latlong["VA"] = { "latitude": 41.9, "longitude": 12.45 };
        latlong["VC"] = { "latitude": 13.25, "longitude": -61.2 };
        latlong["VE"] = { "latitude": 8, "longitude": -66 };
        latlong["VG"] = { "latitude": 18.5, "longitude": -64.5 };
        latlong["VI"] = { "latitude": 18.3333, "longitude": -64.8333 };
        latlong["VN"] = { "latitude": 16, "longitude": 106 };
        latlong["VU"] = { "latitude": -16, "longitude": 167 };
        latlong["WF"] = { "latitude": -13.3, "longitude": -176.2 };
        latlong["WS"] = { "latitude": -13.5833, "longitude": -172.3333 };
        latlong["YE"] = { "latitude": 15, "longitude": 48 };
        latlong["YT"] = { "latitude": -12.8333, "longitude": 45.1667 };
        latlong["ZA"] = { "latitude": -29, "longitude": 24 };
        latlong["ZM"] = { "latitude": -15, "longitude": 30 };
        latlong["ZW"] = { "latitude": -20, "longitude": 30 };
        this.datas = function () {
            var tmp = null;
            $.ajax({
                'async': false,
                'type': "POST",
                'global': false,
                'dataType': 'html',
                'url': "assets/webservices/datacenters.php",
                'data': {},
                'success': function (data) {
                    tmp = data;
                }
            });
            return tmp;
        }();
        var details = JSON.parse(this.datas);
        var mapData = [];
        for (var data in details) {
            var code = details[data].country_code;
            var name = details[data].city + ', ' + details[data].state + ', ' + details[data].country;
            if (details[data].status == 'Good') {
                var color = 'green';
            }
            else if (details[data].status == 'Bad') {
                var color = 'red';
            }
            else {
                var color = '#f1c40f';
            }
            var unit = {
                code: code,
                name: name,
                value: 34349561,
                color: color
            };
            mapData.push(unit);
        }
        // get min and max values
        var minBulletSize = 3;
        var maxBulletSize = 70;
        var min = Infinity;
        var max = -Infinity;
        for (var i = 0; i < mapData.length; i++) {
            var value = mapData[i].value;
            if (value < min) {
                min = value;
            }
            if (value > max) {
                max = value;
            }
        }
        // it's better to use circle square to show difference between values, not a radius
        var maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
        var minSquare = minBulletSize * minBulletSize * 2 * Math.PI;
        // create circle for each country
        var images = [];
        for (var i = 0; i < mapData.length; i++) {
            var dataItem = mapData[i];
            var value = dataItem.value;
            // calculate size of a bubble
            var square = (value - min) / (max - min) * (maxSquare - minSquare) + minSquare;
            if (square < minSquare) {
                square = minSquare;
            }
            var size = Math.sqrt(square / (Math.PI * 2));
            var id = dataItem.code;
            var pinIcon = "M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16.125c-3.383 0-6.125-2.742-6.125-6.125s2.742-6.125 6.125-6.125 6.125 2.742 6.125 6.125-2.742 6.125-6.125 6.125zM12.125 10c0-2.14 1.735-3.875 3.875-3.875s3.875 1.735 3.875 3.875c0 2.14-1.735 3.875-3.875 3.875s-3.875-1.735-3.875-3.875z";
            images.push({
                "svgPath": pinIcon,
                "theme": "light",
                "width": 10,
                "height": 10,
                "color": dataItem.color,
                "longitude": latlong[id].longitude,
                "latitude": latlong[id].latitude,
                "title": dataItem.name,
                "value": value
            });
        }
        // build map
        this.map = this.AmCharts.makeChart("chartdiv", {
            "type": "map",
            "addClassNames": true,
            "projection": "",
            "hideCredits": true,
            "titles": [{
                    "text": "",
                    "id": "main",
                    "size": 14,
                    "bold": true
                }, {
                    "text": "",
                    "size": 11
                }],
            "areasSettings": {},
            "dataProvider": {
                "map": "worldLow",
                "images": images
            },
            "export": {
                "enabled": true
            },
            "balloon": {
                "adjustBorderColor": true,
                "color": "#33B86C",
                "cornerRadius": 5,
                "fillColor": "#FFFFFF",
                "fontSize": 16.667,
                "fontWeight": "bold"
            }
        });
        this.map.addListener("drawn", function () {
            $(".amcharts-title-main").css("font-family", "Open Sans");
        });
    };
    return WorldMapComponent;
}());
WorldMapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-world-map',
        template: __webpack_require__("../../../../../src/app/dashboard/world-map/world-map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/world-map/world-map.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__amcharts_amcharts3_angular__["b" /* AmChartsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__amcharts_amcharts3_angular__["b" /* AmChartsService */]) === "function" && _a || Object])
], WorldMapComponent);

var _a;
//# sourceMappingURL=world-map.component.js.map

/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map