webpackJsonp(["alert.module"],{

/***/ "../../../../../src/app/alert/alert.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".notificationGood{\r\n    margin-left: 10px;\r\n    color: #008000;\r\n  }\r\n  .notificationAlert{\r\n    margin-left: 10px;\r\n    color: #f1c40f;\r\n  }\r\n  .notificationBad{\r\n    margin-left: 10px;\r\n    color: #f00;\r\n  }\r\n  .rsddropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n  .rsddropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #fff;\r\n    overflow: auto;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n    right: 10%;\r\n    border-radius: 6px;\r\n    border: 1px solid aliceblue;\r\n    cursor: pointer;\r\n    text-align: left;\r\n  }\r\n  .rsddropdown-content a {\r\n    color: #08070799;\r\n    padding: 5px 12px;\r\n    text-decoration: none;\r\n    display: block;\r\n    font-size: 12px;\r\n  }\r\n  .rsddropdown a:hover {background-color: #ddd}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-3 col-sm-3\" style=\"font-weight:600; font-size:20px; color:#4a6076; padding-bottom:15px;\">\r\n        onPOINT HCS.Capacity\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-block\">\r\n                <div class=\"table-responsive\" style=\"padding: 0px 10px 10px 10px !important;\">\r\n                    <table style=\"width: 100%;\" class=\"table2\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th style=\"width: 150px;border-bottom: 0;\">Notifications</th>\r\n                                <th style=\"width: 800px;border-bottom: 0;font-size: 13px;color: #C0BEBE;\">{{notificationFilterType}}</th>\r\n                                <th style=\"text-align:right;border-bottom: 0;\">\r\n                                    <div class=\"rsddropdown\">\r\n                                        <span (click)=\"notificationClick()\" style=\"cursor:pointer;color:#b0bec5;font-size:20px;\">...</span>\r\n                                        <div id=\"notificationDropDown\" class=\"rsddropdown-content\">\r\n                                            <a (click)=\"getNotificationWithFilter('today')\" style=\"text-align:center;font-size:14px;\">Today</a>\r\n                                            <a (click)=\"getNotificationWithFilter('Yesterday')\" style=\"text-align:center;font-size:14px;\">Yesterday</a>\r\n                                            <a (click)=\"getNotificationWithFilter('1 Week')\" style=\"text-align:center;font-size:14px;\">1 Week</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </th>\r\n                            </tr>\r\n                            <tr>\r\n                                <th style=\"width: 150px;border-top: 0;border-bottom:1px;\">Data Center</th>\r\n                                <th style=\"width: 800px;border-top: 0;border-bottom:1px;\">Alert</th>\r\n                                <th style=\"border-top: 0;border-bottom:1px;\">Time</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let notification of notifications\">\r\n                                <th scope=\"row\">\r\n                                    <input type=\"checkbox\">\r\n                                    <span class=\"notification{{notification.status}}\">{{notification.name}}</span>\r\n                                </th>\r\n                                <td>{{notification.alert}}</td>\r\n                                <td>{{notification.time}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
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



var AlertComponent = (function () {
    function AlertComponent(config, router) {
        this.config = config;
        this.router = router;
        this.notificationFilterType = 'Today';
        this.notificationFilter = false;
    }
    AlertComponent.prototype.ngOnInit = function () {
        if (!sessionStorage.username || !sessionStorage.id || typeof sessionStorage.username == 'undefined' || typeof sessionStorage.id == 'undefined') {
            this.router.navigate(['login']);
        }
        this.getNotificationWithFilter(this.notificationFilterType);
    };
    AlertComponent.prototype.notificationClick = function () {
        this.notificationFilter = !this.notificationFilter;
        if (this.notificationFilter) {
            $('#notificationDropDown').show();
        }
        else {
            $('#notificationDropDown').hide();
        }
    };
    AlertComponent.prototype.getNotificationWithFilter = function (type) {
        var _this = this;
        this.notificationFilterType = type;
        if (this.notificationFilterType == 'Today') {
            type = 'today';
        }
        else if (this.notificationFilterType == 'Yesterday') {
            type = 'yesterday';
        }
        else if (this.notificationFilterType == '1 Week') {
            type = 'week';
        }
        this.notificationFilter = false;
        $('#notificationDropDown').hide();
        this.config.getNotification(type).subscribe(function (res) {
            _this.notifications = res;
        });
    };
    return AlertComponent;
}());
AlertComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-alert',
        template: __webpack_require__("../../../../../src/app/alert/alert.component.html"),
        styles: [__webpack_require__("../../../../../src/app/alert/alert.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */]) === "function" && _b || Object])
], AlertComponent);

var _a, _b;
//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/alert/alert.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return AlertModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_component__ = __webpack_require__("../../../../../src/app/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alert_routing__ = __webpack_require__("../../../../../src/app/alert/alert.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AlertModule = (function () {
    function AlertModule() {
    }
    return AlertModule;
}());
AlertModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__alert_routing__["a" /* AlertRoutes */]),
            __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__alert_component__["a" /* AlertComponent */]]
    })
], AlertModule);

//# sourceMappingURL=alert.module.js.map

/***/ }),

/***/ "../../../../../src/app/alert/alert.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_component__ = __webpack_require__("../../../../../src/app/alert/alert.component.ts");

var AlertRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__alert_component__["a" /* AlertComponent */],
        data: {
            breadcrumb: 'Alert'
        }
    }];
//# sourceMappingURL=alert.routing.js.map

/***/ })

});
//# sourceMappingURL=alert.module.chunk.js.map