webpackJsonp(["customerview.module"],{

/***/ "../../../../../src/app/customerview/customerview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tab-tile:hover {\r\n    cursor: pointer;\r\n    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);\r\n}\r\n.tab-tile {\r\n    padding: 15px 0px 15px;\r\n}\r\n.tab-tile-active {\r\n    padding: 15px 0px 31px;\r\n    background-color: #fff; \r\n}\r\n.img-thumbnail {\r\n    width: 100px;\r\n    height: 100px;\r\n    background-color: unset;\r\n    border: 0px;\r\n}\r\n.data-center {\r\n    color: #3b4147;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    padding: 6px 0 4px;\r\n}\r\n.data-center-body {\r\n    color: #73787d;\r\n    font-size: 13px;\r\n    text-align: center;\r\n    margin-bottom: 1px;\r\n    font-weight: 600;\r\n}\r\n.sub-comp-p-head {\r\n    color: #415166;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    margin-bottom: 1px;\r\n    font-weight: 600;\r\n}\r\n.sub-comp-p-body {\r\n    color: #415166;\r\n    font-size: 15px;\r\n    text-align: center;\r\n    margin-bottom: 1px;\r\n    font-weight: 600;\r\n}\r\n.component-main {\r\n    background-color: #ebebeb;\r\n    padding: 0px;\r\n}\r\n.tab-row {\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n}\r\n.component-tab {\r\n    background-color: #233853;\r\n    border-radius: 4px;\r\n    border-right: 1px solid #ebebeb;\r\n    border-left: 1px solid #ebebeb;\r\n    text-align: center;\r\n    font-weight: 400 !important;\r\n}\r\n.component-tab:hover {\r\n    cursor: pointer;\r\n    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);\r\n}\r\n.tab-active:hover {\r\n    cursor: default;\r\n    box-shadow: unset;\r\n}\r\n.component-tab h3 {\r\n   color: #ebebeb;\r\n   padding-top: 5px;\r\n}\r\n.tab-active {\r\n    background-color: #ebebeb;\r\n}\r\n.tab-active h3 {\r\n    color: #233853;\r\n    padding-top: 5px;\r\n}\r\n.tab-content {\r\n    background-color: #d9dde0;\r\n    margin-top: 50px;\r\n    padding: 0px;\r\n}\r\n.tab-content-details {\r\n    background-color: #d9dde0;\r\n    margin-top: 70px;\r\n    margin-bottom: 45px;\r\n    padding: 0px;\r\n}\r\n.sub-comp-body {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    border-right: 40px solid #ebebeb;\r\n    border-left: 40px solid #ebebeb;\r\n    background-color: #ebebeb;\r\n}\r\n.sub-comp-tile {\r\n    padding: 0px;\r\n    background-color: #fafafa;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n.sub-comp-active {\r\n    background-color: #c7cacf;\r\n}\r\n.sub-comp-data {\r\n    padding: 0px;\r\n    background-color: #c7cacf;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    border-right: 50px solid #ebebeb;\r\n    border-left: 50px solid #ebebeb;\r\n}\r\n.component-tab-row {\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n    background-color: #ebebeb;\r\n}\r\n.sub-comp-tile:hover {\r\n    cursor: pointer;\r\n    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);\r\n}\r\n.sub-comp-active:hover {\r\n    cursor: default;\r\n    box-shadow: unset;\r\n}\r\n.data-content {\r\n    padding-left: 40px;\r\n    padding-top: 15px;\r\n}\r\n.data-head {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n}\r\n.data-sub-head {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n}\r\n.table thead th, .table td, .table th {\r\n    border: unset;\r\n    padding: .35rem;\r\n}\r\n.table thead th {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customerview/customerview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-3 col-sm-3\" style=\"font-weight:600; font-size:20px; color:#4a6076; padding-bottom:15px;\">\r\n        onPOINT HCS.Capacity\r\n    </div>\r\n    <div class=\"col-md-6 col-sm-6\" style=\"padding-top:6px;text-align: center;\">\r\n        <span>\r\n            <span>\r\n                <span class=\"icon-name\">&nbsp;</span>\r\n                <span style=\"cursor: pointer;font-size:15px;\" class=\"fa fa-circle\"></span>\r\n                <span style=\"cursor: pointer;\" class=\"ti-control-record\"></span>\r\n                <span style=\"cursor: pointer;\" class=\"ti-control-record\"></span>\r\n            </span>\r\n        </span>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-md-3 col-sm-6 tab-tile tab-tile-active\">\r\n        <div class=\"d-flex justify-content-center\">\r\n            <img bind-src=\"imgUrl\" class=\"img-thumbnail\">\r\n        </div>\r\n        <p class=\"data-center\">Data Center 1</p>\r\n        <p class=\"data-center-body\">Plano, Texas</p>\r\n        <p class=\"data-center-body\">United States</p>\r\n        <p class=\"data-center-body\">IST</p>\r\n    </div>\r\n    <div class=\"col-md-3 col-sm-6 tab-tile\">\r\n        <div class=\"d-flex justify-content-center\">\r\n            <img bind-src=\"imgUrl\" class=\"img-thumbnail\">\r\n        </div>\r\n        <p class=\"data-center\">Data Center 2</p>\r\n        <p class=\"data-center-body\">Melbourne, Victoria</p>\r\n        <p class=\"data-center-body\">Australia</p>\r\n        <p class=\"data-center-body\">ATC</p>\r\n    </div>\r\n    <div class=\"col-md-3 col-sm-6 tab-tile\">\r\n        <div class=\"d-flex justify-content-center\">\r\n            <img bind-src=\"imgUrl\" class=\"img-thumbnail\">\r\n        </div>\r\n        <p class=\"data-center\">Data Center 3</p>\r\n        <p class=\"data-center-body\">Toronto, Ontario</p>\r\n        <p class=\"data-center-body\">Canada</p>\r\n        <p class=\"data-center-body\">CNT</p>\r\n    </div>\r\n    <div class=\"col-md-12 component-main\">\r\n        <div class=\"row tab-row\">\r\n            <div class=\"col-md-3 col-sm-6 component-tab tab-active\">\r\n                <h3>NEXUS</h3>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-6 component-tab\">\r\n                <h3>VCENTER</h3>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-6 component-tab\">\r\n                <h3>SBC</h3>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-6 component-tab\">\r\n                <h3>ASA</h3>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"offset-md-3 offset-sm-3 col-md-6 col-sm-6\" style=\"padding-top:25px;text-align: center;\">\r\n                <span>\r\n                    <span>\r\n                        <span class=\"icon-name\">&nbsp;</span>\r\n                        <span style=\"cursor: pointer;font-size:15px;\" class=\"fa fa-circle\"></span>\r\n                        <span style=\"cursor: pointer;\" class=\"ti-control-record\"></span>\r\n                        <span style=\"cursor: pointer;\" class=\"ti-control-record\"></span>\r\n                        <span style=\"cursor: pointer;\" class=\"ti-control-record\"></span>\r\n                    </span>\r\n                </span>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"offset-md-1 col-md-10 offset-md-1 tab-content\">\r\n                <div class=\"row component-tab-row\">\r\n                    <div class=\"col-md-3 col-sm-6 sub-comp-body\">\r\n                        <div class=\"sub-comp-tile sub-comp-active\">\r\n                            <div class=\"d-flex justify-content-center\">\r\n                                <img bind-src=\"imgUrl\" class=\"img-thumbnail\">\r\n                            </div>\r\n                            <p class=\"sub-comp-p-head\">NEXUS 1</p>\r\n                            <p class=\"sub-comp-p-body\">75-K</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3 col-sm-6 sub-comp-body\">\r\n                        <div class=\"sub-comp-tile\">\r\n                            <div class=\"d-flex justify-content-center\">\r\n                                <img bind-src=\"imgUrl\" class=\"img-thumbnail\">\r\n                            </div>\r\n                            <p class=\"sub-comp-p-head\">NEXUS 2</p>\r\n                            <p class=\"sub-comp-p-body\">5-1.0</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3 col-sm-6 sub-comp-body\">\r\n                        <div class=\"sub-comp-tile\">\r\n                            <div class=\"d-flex justify-content-center\">\r\n                                <img bind-src=\"imgUrl\" class=\"img-thumbnail\">\r\n                            </div>\r\n                            <p class=\"sub-comp-p-head\">NEXUS 3</p>\r\n                            <p class=\"sub-comp-p-body\">5-5.0.0</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3 col-sm-6 sub-comp-body\">\r\n                        <div class=\"sub-comp-tile\">\r\n                            <div class=\"d-flex justify-content-center\">\r\n                                <img bind-src=\"imgUrl\" class=\"img-thumbnail\">\r\n                            </div>\r\n                            <p class=\"sub-comp-p-head\">NEXUS 4</p>\r\n                            <p class=\"sub-comp-p-body\">5-1.0</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"offset-md-1 col-md-10 offset-md-1 tab-content-details\">\r\n                <div class=\"row tab-row\">\r\n                    <div class=\"col-md-12 col-sm-12 sub-comp-data\">\r\n                        <div class=\"data-content\">\r\n                            <p class=\"data-head\">VRF CONTENTS:</p>\r\n                            <table class=\"table\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Vrf name:</th>\r\n                                        <th>ID status:</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td>lorem ipsum</td>\r\n                                        <td>Lorem, ipsum dolor sit amet </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>DDP Peers : 4</td>\r\n                                        <td></td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Total peers: </td>\r\n                                        <td>Established peers: </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Lorem ipsum dolor Labore , laborum et </td>\r\n                                        <td> sit amet consectetur adipisicing elit.</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>sed voluptatibus dolores quis maiores accusamus.</td>\r\n                                        <td>Nam quia necessitatibus,</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>consequuntur delectus consectetur facilis qui sit</td>\r\n                                        <td>dignissimos placeat ab officiis!</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Lorem ipsum dolor sit amet consectetur</td>\r\n                                        <td>temporibus deleniti nostrum minus magnam perspiciatis iure</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/customerview/customerview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerviewComponent; });
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

var CustomerviewComponent = (function () {
    function CustomerviewComponent() {
        this.imgUrl = 'assets/images/icon-cube.png';
    }
    CustomerviewComponent.prototype.ngOnInit = function () {
    };
    return CustomerviewComponent;
}());
CustomerviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-customerview',
        template: __webpack_require__("../../../../../src/app/customerview/customerview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/customerview/customerview.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CustomerviewComponent);

//# sourceMappingURL=customerview.component.js.map

/***/ }),

/***/ "../../../../../src/app/customerview/customerview.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerviewModule", function() { return CustomerviewModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customerview_component__ = __webpack_require__("../../../../../src/app/customerview/customerview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customerview_routing__ = __webpack_require__("../../../../../src/app/customerview/customerview.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CustomerviewModule = (function () {
    function CustomerviewModule() {
    }
    return CustomerviewModule;
}());
CustomerviewModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__customerview_routing__["a" /* CustomerviewRoutes */]),
            __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__customerview_component__["a" /* CustomerviewComponent */]]
    })
], CustomerviewModule);

//# sourceMappingURL=customerview.module.js.map

/***/ }),

/***/ "../../../../../src/app/customerview/customerview.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerviewRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__customerview_component__ = __webpack_require__("../../../../../src/app/customerview/customerview.component.ts");

var CustomerviewRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__customerview_component__["a" /* CustomerviewComponent */],
        data: {
            breadcrumb: 'Blank Page'
        }
    }];
//# sourceMappingURL=customerview.routing.js.map

/***/ })

});
//# sourceMappingURL=customerview.module.chunk.js.map