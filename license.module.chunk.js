webpackJsonp(["license.module"],{

/***/ "../../../../../src/app/license/license.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tab-tile-table {\r\n    background-color: #fff;\r\n    padding: 30px;\r\n}\r\n/* Form Elements Select Box */\r\n.form-modal {\r\n    /* padding-top: 10px; */\r\n    padding-right: 45px;\r\n    /* padding-left: 45px; */\r\n    /* padding-bottom: 10px; */\r\n}\r\n.form-group {\r\n    position: relative;\r\n    /* margin-top: 2.25rem; */\r\n    /* margin-bottom: 2.25rem; */\r\n}\r\n.form-group select {\r\n  width: 100%;\r\n  font-size: 1rem;\r\n  height: 1.6rem;\r\n  padding: 0.125rem 0.125rem 0.0625rem;\r\n  background: none;\r\n  border: none;\r\n  line-height: 1.6;\r\n  box-shadow: none;\r\n}\r\n.form-group .control-label {\r\n  position: absolute;\r\n  top: 0.25rem;\r\n  pointer-events: none;\r\n  padding-left: 0.125rem;\r\n  z-index: 1;\r\n  color: #b3b3b3;\r\n  font-size: 1rem;\r\n  font-weight: normal;\r\n  transition: all 0.28s ease;\r\n}\r\n.form-group .bar {\r\n  position: relative;\r\n  border-bottom: 0.0625rem solid #999;\r\n  display: block;\r\n}\r\n.form-group .bar::before {\r\n  content: '';\r\n  height: 0.125rem;\r\n  width: 0;\r\n  left: 50%;\r\n  bottom: -0.0625rem;\r\n  position: absolute;\r\n  background: #337ab7;\r\n  transition: left 0.28s ease, width 0.28s ease;\r\n  z-index: 2;\r\n}\r\n.form-group select,\r\n.form-group input:focus,\r\n.form-group input:valid,\r\n.form-group input.form-file,\r\n.form-group input.has-value,\r\n.form-group textarea:focus,\r\n.form-group textarea:valid,\r\n.form-group textarea.form-file,\r\n.form-group textarea.has-value {\r\n  color: #7b879e;\r\n}\r\n.form-group select ~ .control-label,\r\n.form-group input:focus ~ .control-label,\r\n.form-group input:valid ~ .control-label,\r\n.form-group input.form-file ~ .control-label,\r\n.form-group input.has-value ~ .control-label,\r\n.form-group textarea:focus ~ .control-label,\r\n.form-group textarea:valid ~ .control-label,\r\n.form-group textarea.form-file ~ .control-label,\r\n.form-group textarea.has-value ~ .control-label {\r\n  font-size: 0.8rem;\r\n  color: gray;\r\n  top: -1rem;\r\n  left: 0;\r\n}\r\n.form-group select:focus,\r\n.form-group input:focus,\r\n.form-group textarea:focus {\r\n  outline: none;\r\n}\r\n.form-group select:focus ~ .control-label,\r\n.form-group input:focus ~ .control-label,\r\n.form-group textarea:focus ~ .control-label {\r\n  color: #337ab7;\r\n}\r\n.form-group select:focus ~ .bar::before,\r\n.form-group input:focus ~ .bar::before,\r\n.form-group textarea:focus ~ .bar::before {\r\n  width: 100%;\r\n  left: 0;\r\n}\r\n.has-error .legend.legend, .has-error.form-group .control-label.control-label {\r\n    color: #d9534f;\r\n}\r\n.has-error.form-group .form-help,\r\n.has-error.form-group .helper, .has-error.checkbox .form-help,\r\n.has-error.checkbox .helper, .has-error.radio .form-help,\r\n.has-error.radio .helper, .has-error.form-radio .form-help,\r\n.has-error.form-radio .helper {\r\n  color: #d9534f;\r\n}\r\n.has-error .bar::before {\r\n  background: #d9534f;\r\n  left: 0;\r\n  width: 100%;\r\n}\r\n.modal_placeholder {\r\n\tfont-family: \"Open Sans\", Bold;\r\n\tcolor: #7b879e;\r\n}\r\nth {\r\n    color: #3b4147;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/license/license.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\" style=\"font-weight:600; font-size:20px; color:#4a6076; padding-bottom:15px;\">\r\n        onPOINT HCS.Capacity\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-md-12 tab-tile-table table-responsive\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <h3><b style=\"color: #3b4147;\">Customer License</b></h3>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"(customerFlagMessage); then thenDiv;else elseDiv\">\r\n        </div>\r\n        <ng-template #thenDiv>\r\n            <div class=\"row\" style=\"margin-top:40px;\">\r\n                <div class=\"col-md-12\">\r\n                    <span>\r\n                        <b>THERE ARE CURRENTLY NO CUSTOMERS AVAILABLE\r\n                        </b>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template #elseDiv>\r\n            <div class=\"row\" style=\"margin-top: 15px;\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-modal\">\r\n                        <div class=\"form-group\">\r\n                            <label id=\"customer_placeholder\" class=\"control-label\" for=\"select\">Select Customer</label>\r\n                            <select class=\"form-control\" (change)=\"customeOnChange(customer)\" [(ngModel)]=\"customer\" name=\"customer\">\r\n                                <option *ngFor=\"let customer of customersList\" value=\"{{customer.id}}\">{{customer.name}}</option>\r\n                            </select>\r\n                            <i class=\"bar\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!--<div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <span>\r\n                        <b>License Status</b>\r\n                    </span>\r\n                </div>\r\n            </div>-->\r\n            <br>\r\n            <div class=\"row\">\r\n                <table class=\"table table-striped\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th scope=\"col\">License Type</th>\r\n\t\t\t\t\t\t\t<th scope=\"col\" style=\"text-align:center;\">Product Type</th>\r\n                            <th scope=\"col\" style=\"text-align:center;\">Consumed</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngIf=\"licenseFlagMessage\">\r\n                            <td align=\"center\" colspan=\"3\">\r\n                                <b>THERE ARE CURRENTLY NO LICENSE FOUND</b>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngFor=\"let data of licenseList , let j = index\">\r\n                            <td>{{ data.type }}</td>\r\n\t\t\t\t\t\t\t<td style=\"text-align:center;\">{{ data.prod_type }}</td>\r\n                            <td style=\"text-align:center;\">{{ data.consumed }}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </ng-template>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/license/license.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LicenseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_service__ = __webpack_require__("../../../../../src/app/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LicenseComponent = (function () {
    function LicenseComponent(config) {
        this.config = config;
        this.customer = 'Customers';
        this.customerFlagMessage = false;
        this.licenseFlagMessage = false;
    }
    LicenseComponent.prototype.ngOnInit = function () {
        this.getCustomersList();
    };
    LicenseComponent.prototype.customeOnChange = function (id) {
        var _this = this;
        $("#customer_placeholder").hide();
        this.config.getCustomerLicense(id).subscribe(function (res) {
            _this.licenseList = res;
            if (_this.licenseList.length < 1) {
                _this.licenseFlagMessage = true;
            }
            else {
                _this.licenseFlagMessage = false;
            }
        });
    };
    LicenseComponent.prototype.getCustomersList = function () {
        var _this = this;
        setTimeout(function () {
            _this.config.getCustomer().subscribe(function (res) {
                _this.customersList = res;
                if (_this.customersList.length < 1) {
                    _this.customerFlagMessage = true;
                }
                else {
                    _this.customerFlagMessage = false;
                }
            });
        }, 100);
    };
    return LicenseComponent;
}());
LicenseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-simple-page',
        template: __webpack_require__("../../../../../src/app/license/license.component.html"),
        styles: [__webpack_require__("../../../../../src/app/license/license.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */]) === "function" && _a || Object])
], LicenseComponent);

var _a;
//# sourceMappingURL=license.component.js.map

/***/ }),

/***/ "../../../../../src/app/license/license.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicenseModule", function() { return LicenseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__license_component__ = __webpack_require__("../../../../../src/app/license/license.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__license_routing__ = __webpack_require__("../../../../../src/app/license/license.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LicenseModule = (function () {
    function LicenseModule() {
    }
    return LicenseModule;
}());
LicenseModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__license_routing__["a" /* LicenseRoutes */]),
            __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__license_component__["a" /* LicenseComponent */]]
    })
], LicenseModule);

//# sourceMappingURL=license.module.js.map

/***/ }),

/***/ "../../../../../src/app/license/license.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LicenseRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__license_component__ = __webpack_require__("../../../../../src/app/license/license.component.ts");

var LicenseRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__license_component__["a" /* LicenseComponent */],
        data: {
            breadcrumb: 'Blank Page'
        }
    }];
//# sourceMappingURL=license.routing.js.map

/***/ })

});
//# sourceMappingURL=license.module.chunk.js.map