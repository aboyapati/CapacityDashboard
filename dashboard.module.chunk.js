webpackJsonp(["dashboard.module"],{

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (min-width: 992px) {\r\n\t#map_part1 {\r\n\t\tpadding-right: 0px;\r\n\t}\r\n\t#map_part2 {\r\n\t\tpadding-left: 0px;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: 991px) {\r\n\t.part1_div {\r\n\t\tmargin-bottom:0px;\r\n\t}\r\n}\r\n.tile-head {\r\n  color: #000;\r\n  font-weight:bold;\r\n  font-size: 15px;\r\n  margin-bottom: 0px;\r\n}\r\n.tile-count {\r\n  float: right;\r\n  font-size: 30px;\r\n}\r\n.tile-footer-p {\r\n  text-align: right;\r\n  margin-bottom: 0px;\r\n}\r\n.card-block-pd {\r\n  padding: .80rem;\r\n}\r\n.round-block {\r\n  display: inline-block;\r\n  box-shadow: -1px 3px 5px #5f5a5a66;\r\n}\r\n.rb-1 {\r\n  padding: 10px 22px;\r\n  background: #2dd2ef;\r\n}\r\n.rb-2 {\r\n  padding: 10px 22px;\r\n  background: #a327d1;\r\n}\r\n.rb-3 {\r\n  padding: 10px 14px;\r\n  background: #33b86c;\r\n}\r\n.rb-4 {\r\n  padding: 10px 14px;\r\n  background: #ffae00;\r\n}\r\n.round-text {\r\n  color: #ffff;\r\n  font-size: 23px;\r\n}\r\n@media screen and (max-width: 1251px) {\r\n\t.block {\r\n\t\t-webkit-box-flex: 0;\r\n\t\t    -ms-flex: 0 0 50%;\r\n\t\t        flex: 0 0 50%;\r\n\t\tmax-width: 50%;\r\n\t}\r\n}\r\n@media screen and (max-width: 595px) {\r\n\t.block {\r\n\t\t-webkit-box-flex: 0;\r\n\t\t    -ms-flex: 0 0 100%;\r\n\t\t        flex: 0 0 100%;\r\n\t\tmax-width: 100%;\r\n\t}\r\n\t.blk1 {\r\n\t\twidth: 41%;\r\n\t}\r\n\t.blk2 {\r\n\t\twidth: 59%;\r\n\t}\r\n}\r\n.rsddropbtn {\r\n  background-color: #fff;\r\n  color: white;\r\n  padding: 7px;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n \r\n.rsddropdown {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.rsddropdown-content {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #fff;\r\n  overflow: auto;\r\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n  z-index: 1;\r\n  right: 10%;\r\n  border-radius: 6px;\r\n  border: 1px solid aliceblue;\r\n  cursor: pointer;\r\n  text-align: left;\r\n}\r\n\r\n.rsddropdown-content a {\r\n  color: #08070799;\r\n  padding: 5px 12px;\r\n  text-decoration: none;\r\n  display: block;\r\n  font-size: 12px;\r\n}\r\n\r\n.rsddropdown a:hover {background-color: #ddd}\r\n\r\n.rsdshow {display:block;}\r\n#chartdiv[_ngcontent-c4] {\r\n    width: 100%;\r\n    height: 494px;\r\n}\r\n.card-block\r\n{\r\n   padding:0px;\r\n}\r\n.table td, .table th {\r\n    padding: .30rem;\r\n    border-top: 1px solid #e9ecef;\r\n}\r\n.table2 td, .table2 th {\r\n  padding: .50rem;\r\n    border-top: 1px solid #e9ecef;\r\n}\r\n.card{\r\n  margin-bottom: 15px;\r\n}\r\n.main-body .page-wrapper{\r\n   margin-bottom:5px !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\" style=\"font-weight:600; font-size:20px; color:#4a6076; padding-bottom:15px;\">\r\n    onPOINT HCS.Capacity\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-3 col-sm-6 block\">\r\n    <div class=\"card table-card\" style=\"border: unset; background-color: #8a89891f;\">\r\n      <div class=\"row-table\" style=\"padding-bottom: 3px;\">\r\n        <div class=\"col-md-12 card-block-big card-block-pd\" placement=\"top\" ngbTooltip=\"Inventory - End of Life / End of Sale\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-5 blk1\">\r\n              <span class=\"round-block rb-1 img-circle pull-left\" style=\"float:right;background: #2dd2ef5e;\">\r\n                <span class=\"round-text\" style=\"font-size: 23px\"> 4 </span>\r\n              </span>\r\n            </div>\r\n            <div class=\"col-sm-7 blk2\" style=\"text-align:right;padding-right:13%;\">\r\n              <div class=\"tile-head\" style=\"color: #00000073;\">\r\n                Inventory - EOL/EOS\r\n                <br />\r\n                <span class=\"tile-count\" style=\"font-size:30px;font-weight:normal;min-height:45px;\"></span>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"col-md-12\" style=\"padding-right:13%;\">\r\n              <p class=\"tile-footer-p\" style=\"margin-top:7px;\">\r\n                <span style=\"color: green;\">\r\n                  <i class=\"fa fa-arrow-up\" style=\"font-size:15px;\"></i> 2</span> more than last month</p>\r\n            </div> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-md-3 col-sm-6 block\">\r\n    <div class=\"card table-card\">\r\n      <div class=\"row-table\" style=\"padding-bottom: 3px;\">\r\n        <div class=\"col-md-12 card-block-big card-block-pd\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-5 blk1\">\r\n              <span class=\"round-block rb-2 img-circle pull-left\" style=\"float:right;\">\r\n                <span class=\"round-text\" style=\"font-size: 23px\"> 8 </span>\r\n              </span>\r\n            </div>\r\n            <div class=\"col-sm-7 blk2\" style=\"text-align:right;padding-right:13%;\">\r\n              <div class=\"tile-head\">\r\n                Data Center Reports\r\n                <br />\r\n                <span class=\"tile-count\" style=\"font-size:30px;font-weight:normal;min-height:45px;\"></span>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"col-md-12\" style=\"padding-right:13%;\">\r\n              <p class=\"tile-footer-p\" style=\"margin-top:7px;\">\r\n                <span style=\"color: green;\">\r\n                  <i class=\"fa fa-arrow-up\" style=\"font-size:15px;\"></i> 1</span> more than last month</p>\r\n            </div> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-md-3 col-sm-6 block\">\r\n    <div class=\"card table-card\">\r\n      <div class=\"row-table\">\r\n        <div class=\"col-md-12 card-block-big card-block-pd\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-5 blk1\">\r\n              <span class=\"round-block rb-3 img-circle pull-left\" style=\"float:right;\">\r\n                <span class=\"round-text\" style=\"font-size: 23px\">\r\n                  <i class=\"fa fa-users\"></i>\r\n                </span>\r\n              </span>\r\n            </div>\r\n            <div class=\"col-sm-7 blk2\" style=\"text-align:right;padding-right:13%;\">\r\n              <div class=\"tile-head\">\r\n                Active Users\r\n                <br />\r\n                <span class=\"tile-count\" style=\"font-size:30px;font-weight:normal;\">6381</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-12\" style=\"padding-right:13%;\">\r\n              <p class=\"tile-footer-p\" style=\"margin-top:7px;\">\r\n                <span style=\"color: red;\">\r\n                  <i class=\"fa fa-arrow-down\" style=\"font-size:15px;\"></i> 534</span> more than last month</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-md-3 col-sm-6 block\">\r\n    <div class=\"card table-card\">\r\n      <div class=\"row-table\">\r\n        <div class=\"col-md-12 card-block-big card-block-pd\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-5 blk1\">\r\n              <span class=\"round-block rb-4 img-circle pull-left\" style=\"float:right;\">\r\n                <span class=\"round-text\" style=\"font-size: 23px\">\r\n                  <i class=\"fa fa-user-circle\"></i>\r\n                </span>\r\n              </span>\r\n            </div>\r\n            <div class=\"col-sm-7 blk2\" style=\"text-align:right;padding-right:13%;\">\r\n              <div class=\"tile-head\">\r\n                Customers\r\n                <br />\r\n                <span class=\"tile-count\" style=\"font-size:30px;font-weight:normal;\">132</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-12\" style=\"padding-right:13%;\">\r\n              <p class=\"tile-footer-p\" style=\"margin-top:7px;\">\r\n                <span style=\"color: green;\">\r\n                  <i class=\"fa fa-arrow-up\" style=\"font-size:15px;\"></i> 47</span> more than last month</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"map_part1\" class=\"col-lg-7\">\r\n    <div class=\"card part1_div\" style=\"max-height:300px;\">\r\n      <div class=\"card-block\">\r\n        <app-world-map></app-world-map>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"map_part2\" class=\"col-lg-5\">\r\n    <div class=\"card\" style=\"height: 300px;overflow: auto;\">\r\n      <div class=\"card-block\">\r\n        <div class=\"\" style=\"opacity: 1;\">\r\n          <div class=\"\" style=\"\">\r\n            <div class=\"card-body table-border-style\">\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th style=\"border-bottom: 0;border-top: 0;\">Call Metrics</th>\r\n                      <th style=\"border-bottom: 0;border-top: 0;font-size: 13px;color: #C0BEBE;\">Last 24 hrs</th>\r\n                      <th style=\"border-bottom: 0;border-top: 0;text-align:right;\">\r\n                        <div class=\"rsddropdown\">\r\n                          <span (click)=\"callMatricsClick()\" style=\"cursor:pointer;color:#b0bec5;font-size:20px;\">...</span>\r\n                          <div id=\"callMatricsDropdown\" class=\"rsddropdown-content\">\r\n                            <a (click)=\"getCallMatrics('today')\" style=\"text-align:center;font-size:14px;\">Today</a>\r\n                            <a (click)=\"getCallMatrics('yesterday')\" style=\"text-align:center;font-size:14px;\">Yesterday</a>\r\n                            <a (click)=\"getCallMatrics('week')\" style=\"text-align:center;font-size:14px;\">1 Week</a>\r\n                          </div>\r\n                        </div>\r\n                      </th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let data of datas\">\r\n                      <th style=\"vertical-align: middle;\" scope=\"row\">\r\n                        <span style=\"margin-left: 10px;color: #2cd2ef;font-size: 18px;\">{{data.name}}</span>\r\n                      </th>\r\n                      <td>\r\n                        <span style=\"display: block;\">Total Calls</span>\r\n                        <span style=\"color: #2cd2ef; font-size: 20px;\">{{data.total}}</span>\r\n                      </td>\r\n                      <td>\r\n                        <span style=\"display: block;\">Concurrent Calls</span>\r\n                        <span style=\"color: #2cd2ef; font-size: 20px;\">{{data.concurrent}}</span>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-lg-12\">\r\n    <div class=\"card\">\r\n      <div class=\"table-responsive\">\r\n            <table class=\"table2\">\r\n              <thead>\r\n                <tr>\r\n                  <th style=\"width: 150px;border-bottom: 0;\">Notifications</th>\r\n                  <th style=\"width: 800px;border-bottom: 0;font-size: 13px;color: #C0BEBE;\">Today</th>\r\n                  <th style=\"text-align:right;border-bottom: 0;\">\r\n                    <div class=\"rsddropdown\">\r\n                        <span (click)=\"notificationClick()\" style=\"cursor:pointer;color:#b0bec5;font-size:20px;\">...</span>\r\n                        <div id=\"notificationDropDown\" class=\"rsddropdown-content\">\r\n                          <a (click)=\"getNotification('today')\" style=\"text-align:center;font-size:14px;\">Today</a>\r\n                          <a (click)=\"getNotification('yesterday')\" style=\"text-align:center;font-size:14px;\">Yesterday</a>\r\n                          <a (click)=\"getNotification('week')\" style=\"text-align:center;font-size:14px;\">1 Week</a>\r\n                        </div>\r\n                      </div>\r\n                  </th>\r\n                </tr>\r\n        <tr>\r\n                  <th style=\"width: 150px;border-top: 0;border-bottom:1px;\">Data Center</th>\r\n                  <th style=\"width: 800px;border-top: 0;border-bottom:1px;\">Alert</th>\r\n                  <th style=\"border-top: 0;border-bottom:1px;\">Time</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <th scope=\"row\"><input type=\"checkbox\"><span style=\"margin-left: 10px;color: red;\">DC 4</span></th>\r\n                  <td>CPU utilization high on host-01</td>\r\n                  <td>12:12 PM</td>\r\n                </tr>\r\n                <tr style=\"background-color:#fafafa;\">\r\n                  <th scope=\"row\"><input type=\"checkbox\"><span style=\"margin-left: 10px;color:#ec7a07;\">DC 2</span></th>\r\n                  <td>Datastore threshold crossed SAN-01</td>\r\n                  <td>2:17 AM</td>\r\n                </tr>\r\n                <tr>\r\n                  <th scope=\"row\"><input type=\"checkbox\"><span style=\"margin-left: 10px;color:#ec7a07;\">DC 2</span></th>\r\n                  <td>CPU count on the VMs exceed the total cores on host-02</td>\r\n                  <td>12:12 PM</td>\r\n                </tr>\r\n                <tr style=\"background-color:#fafafa;\">\r\n                  <th scope=\"row\"><input type=\"checkbox\"><span style=\"margin-left: 10px;color: red;\">DC 4</span></th>\r\n                  <td>CPU utilization high on host-01</td>\r\n                  <td>2:17 PM</td>\r\n                </tr>\r\n                <tr>\r\n                  <th scope=\"row\"><input type=\"checkbox\"><span style=\"margin-left: 10px;color: red;\">DC 4</span></th>\r\n                  <td>Datastore threshold crossed SAN-01</td>\r\n                  <td>12:12 PM</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_service__ = __webpack_require__("../../../../../src/app/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function DashboardComponent(config, router) {
        this.config = config;
        this.router = router;
        this.callMatricsFilter = false;
        this.notificationFilter = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!sessionStorage.username || !sessionStorage.id || typeof sessionStorage.username == 'undefined' || typeof sessionStorage.id == 'undefined') {
            this.router.navigate(['login']);
        }
        setTimeout(function () {
            _this.config.getDashboardData()
                .subscribe(function (res) {
                var dataset = [];
                for (var data in res) {
                    var name = res[data].name;
                    var total = res[data].total_calls;
                    var concurrent = res[data].concurrent_calls;
                    var unit = {
                        name: name,
                        total: total,
                        concurrent: concurrent
                    };
                    dataset.push(unit);
                }
                _this.datas = dataset;
            });
        }, 100);
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
    };
    DashboardComponent.prototype.getNotification = function (id) {
        $('#notificationDropDown').hide();
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
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
exports.push([module.i, "#chartdiv {\r\n    width: 100%;\r\n    height: 300px;\r\n  }", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__("../../../../../src/app/config.service.ts");
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
    function WorldMapComponent(AmCharts, config) {
        this.AmCharts = AmCharts;
        this.config = config;
    }
    WorldMapComponent.prototype.ngOnDestroy = function () {
        if (this.map) {
            this.AmCharts.destroyChart(this.map);
        }
    };
    WorldMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.config.getMap().subscribe(function (res) {
                var details = res;
                var mapData = [];
                for (var data in details) {
                    var dc_id = details[data].id;
                    var latitude = details[data].latitude;
                    var longitude = details[data].longitude;
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
                        id: dc_id,
                        name: name,
                        value: 34349561,
                        color: color,
                        latitude: latitude,
                        longitude: longitude
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
                        "longitude": dataItem.longitude,
                        "latitude": dataItem.latitude,
                        "title": dataItem.name,
                        "value": value,
                        "id": dataItem.id,
                        "zoomLevel": 1,
                        "dcUrl": "#/data/datacenter/" + dataItem.id
                    });
                }
                // build map
                _this.map = _this.AmCharts.makeChart("chartdiv", {
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
                    },
                    "listeners": [{
                            "event": "clickMapObject",
                            "method": function (event) {
                                window.location.href = event.mapObject.dcUrl;
                            }
                        }]
                });
                _this.map.addListener("drawn", function () {
                    $(".amcharts-title-main").css("font-family", "Open Sans");
                });
            });
        }, 100);
    };
    return WorldMapComponent;
}());
WorldMapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-world-map',
        template: __webpack_require__("../../../../../src/app/dashboard/world-map/world-map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/world-map/world-map.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__amcharts_amcharts3_angular__["b" /* AmChartsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__amcharts_amcharts3_angular__["b" /* AmChartsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]) === "function" && _b || Object])
], WorldMapComponent);

var _a, _b;
//# sourceMappingURL=world-map.component.js.map

/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map