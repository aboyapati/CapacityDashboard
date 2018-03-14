webpackJsonp(["provisioning.module"],{

/***/ "../../../../../src/app/provisioning/provisioning.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".data-center {\r\n    color: #3b4147;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    padding: 6px 0 4px;\r\n}\r\n.data-center-body {\r\n    color: #73787d;\r\n    font-size: 13px;\r\n    text-align: center;\r\n    margin-bottom: 1px;\r\n    font-weight: 600;\r\n}\r\n.tab-tile {\r\n    padding: 15px 0px 15px;\r\n}\r\n.tab-tile-active {\r\n    padding: 0px 0px 15px;\r\n    background-color: #fff; \r\n}\r\n.tab-tile-table {\r\n    background-color: #fff;\r\n    padding: 30px;\r\n}\r\nth {\r\n    color: #3b4147;\r\n}\r\ntd {\r\n    color: #73787d;\r\n}\r\n.img-thumbnail {\r\n    width: 100px;\r\n    height: 100px;\r\n    background-color: unset;\r\n    border: 0px;\r\n}\r\n.rsddropdown {\r\n    text-align: right;\r\n    padding-right: 15px;\r\n    height: 15px;\r\n}\r\n.rsddropdown-span {\r\n    cursor:pointer;\r\n    color:#b0bec5;\r\n    font-size:20px;\r\n}\r\n.rsddropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #fff;\r\n    overflow: auto;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n    right: 10%;\r\n    border-radius: 6px;\r\n    border: 1px solid aliceblue;\r\n    cursor: pointer;\r\n    text-align: left;\r\n} \r\n.rsddropdown-content a {\r\n    color: #08070799;\r\n    padding: 5px 12px;\r\n    text-decoration: none;\r\n    display: block;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n} \r\n.rsddropdown a:hover {\r\n    background-color: #ddd;\r\n}\r\n.btn-primary {\r\n    background-color: #203c66;\r\n    border-color: #203c66;\r\n    font-weight: 600;\r\n}\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/provisioning/provisioning.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-md-10\" style=\"font-weight:600; font-size:20px; color:#4a6076; padding-bottom:15px;\">\r\n\t\tonPOINT HCS.Capacity\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n        <button class=\"btn btn-primary btn-sm\"><i class=\"fa fa-plus\"></i> Add Data Center</button>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-md-3 col-sm-6 tab-tile tab-tile-active\">\r\n        <div class=\"rsddropdown\">\r\n            <span class=\"rsddropdown-span\" (click)=\"callMatricsClick()\">...</span>\r\n            <div id=\"callMatricsDropdown\" class=\"rsddropdown-content\">\r\n              <a>Edit</a>\r\n              <a>Delete</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"data-center-image d-flex justify-content-center\">\r\n            <img bind-src=\"imgUrl\" class=\"img-thumbnail\">\r\n        </div>\r\n        <p class=\"data-center\">Data Center 1</p>\r\n        <p class=\"data-center-body\">Plano, Texas</p>\r\n        <p class=\"data-center-body\">United States</p>\r\n        <p class=\"data-center-body\">IST</p>\r\n    </div>\r\n    <div class=\"col-md-3 col-sm-6 tab-tile\">\r\n        <div class=\"data-center-image d-flex justify-content-center\">\r\n            <img bind-src=\"imgUrl\" class=\"img-thumbnail\">\r\n        </div>\r\n        <p class=\"data-center\">Data Center 2</p>\r\n        <p class=\"data-center-body\">Melbourne, Victoria</p>\r\n        <p class=\"data-center-body\">Australia</p>\r\n        <p class=\"data-center-body\">ATC</p>\r\n    </div>\r\n    <div class=\"col-md-3 col-sm-6 tab-tile\">\r\n        <div class=\"data-center-image d-flex justify-content-center\">\r\n            <img bind-src=\"imgUrl\" class=\"img-thumbnail\">\r\n        </div>\r\n        <p class=\"data-center\">Data Center 3</p>\r\n        <p class=\"data-center-body\">Toronto, Ontario</p>\r\n        <p class=\"data-center-body\">Canada</p>\r\n        <p class=\"data-center-body\">CNT</p>\r\n    </div>\r\n    <div class=\"col-md-3 col-sm-6 tab-tile\">\r\n        <div class=\"data-center-image d-flex justify-content-center\">\r\n            <img bind-src=\"imgUrl\" class=\"img-thumbnail\">\r\n        </div>\r\n        <p class=\"data-center\">Data Center 4</p>\r\n        <p class=\"data-center-body\">Hyderabad, Telangana</p>\r\n        <p class=\"data-center-body\">India</p>\r\n        <p class=\"data-center-body\">IST</p>\r\n    </div>\r\n    <div class=\"col-md-12 tab-tile-table table-responsive\">\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n                <tr>\r\n                <th scope=\"col\">Component Name</th>\r\n                <th scope=\"col\">Type</th>\r\n                <th scope=\"col\">Version</th>\r\n                <th scope=\"col\">IP Address</th>\r\n                <th scope=\"col\">Credentials</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <td>NEXUS A</td>\r\n                    <td>NEXUS</td>\r\n                    <td>75-K</td>\r\n                    <td>10.201.124.11</td>\r\n                    <td class=\"text-center\"><a href=\"\">View</a></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>ASA-1</td>\r\n                    <td>ASA</td>\r\n                    <td>5-1.0</td>\r\n                    <td>10.201.124.14</td>\r\n                    <td class=\"text-center\"><a href=\"\">View</a></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>VCENTER-1</td>\r\n                    <td>VCENTER</td>\r\n                    <td>5-5.0.0</td>\r\n                    <td>10.201.124.100</td>\r\n                    <td class=\"text-center\"><a href=\"\">View</a></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>NEXUS B</td>\r\n                    <td>NEXUS</td>\r\n                    <td>75-K</td>\r\n                    <td>10.201.124.11</td>\r\n                    <td class=\"text-center\"><a href=\"\">View</a></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>ASA-2</td>\r\n                    <td>ASA</td>\r\n                    <td>5-1.0</td>\r\n                    <td>10.201.124.14</td>\r\n                    <td class=\"text-center\"><a href=\"\">View</a></td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/provisioning/provisioning.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvisioningComponent; });
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

var ProvisioningComponent = (function () {
    function ProvisioningComponent() {
        this.imgUrl = "assets/images/icon-cube.png";
        this.callMatricsFilter = false;
    }
    ProvisioningComponent.prototype.callMatricsClick = function () {
        this.callMatricsFilter = !this.callMatricsFilter;
        if (this.callMatricsFilter) {
            $('#callMatricsDropdown').show();
        }
        else {
            $('#callMatricsDropdown').hide();
        }
    };
    ProvisioningComponent.prototype.ngOnInit = function () {
    };
    return ProvisioningComponent;
}());
ProvisioningComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-provisioning',
        template: __webpack_require__("../../../../../src/app/provisioning/provisioning.component.html"),
        styles: [__webpack_require__("../../../../../src/app/provisioning/provisioning.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProvisioningComponent);

//# sourceMappingURL=provisioning.component.js.map

/***/ }),

/***/ "../../../../../src/app/provisioning/provisioning.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvisioningModule", function() { return ProvisioningModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provisioning_component__ = __webpack_require__("../../../../../src/app/provisioning/provisioning.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__provisioning_routing__ = __webpack_require__("../../../../../src/app/provisioning/provisioning.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ProvisioningModule = (function () {
    function ProvisioningModule() {
    }
    return ProvisioningModule;
}());
ProvisioningModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__provisioning_routing__["a" /* ProvisioningRoutes */]),
            __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__provisioning_component__["a" /* ProvisioningComponent */]]
    })
], ProvisioningModule);

//# sourceMappingURL=provisioning.module.js.map

/***/ }),

/***/ "../../../../../src/app/provisioning/provisioning.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvisioningRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__provisioning_component__ = __webpack_require__("../../../../../src/app/provisioning/provisioning.component.ts");

var ProvisioningRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__provisioning_component__["a" /* ProvisioningComponent */],
        data: {
            breadcrumb: 'Provisioning'
        }
    }];
//# sourceMappingURL=provisioning.routing.js.map

/***/ })

});
//# sourceMappingURL=provisioning.module.chunk.js.map