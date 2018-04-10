webpackJsonp(["customerview.module"],{

/***/ "../../../../../src/app/customerview/customerview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tab-tile:hover {\r\n    cursor: pointer;\r\n    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);\r\n}\r\n.tab-tile {\r\n    padding: 15px 0px 15px;\r\n}\r\n.tab-tile-active {\r\n    padding: 15px 0px 31px;\r\n    background-color: #fff; \r\n}\r\n.img-thumbnail {\r\n    width: 100px;\r\n    height: 100px;\r\n    background-color: unset;\r\n    border: 0px;\r\n}\r\n.data-center {\r\n    color: #3b4147;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    padding: 6px 0 4px;\r\n}\r\n.data-center-body {\r\n    color: #73787d;\r\n    font-size: 13px;\r\n    text-align: center;\r\n    margin-bottom: 1px;\r\n    font-weight: 600;\r\n}\r\n.comp-p-head {\r\n    color: #415166;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    margin-bottom: 1px;\r\n    font-weight: 600;\r\n}\r\n.comp-p-body {\r\n    color: #415166;\r\n    font-size: 15px;\r\n    text-align: center;\r\n    margin-bottom: 1px;\r\n    font-weight: 600;\r\n}\r\n.component-main {\r\n    background-color: #ebebeb;\r\n    padding: 0px;\r\n    min-height: 450px;\r\n}\r\n.tab-row {\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n}\r\n.component-tab {\r\n    background-color: #233853;\r\n    border-radius: 4px;\r\n    border-right: 1px solid #ebebeb;\r\n    border-left: 1px solid #ebebeb;\r\n    text-align: center;\r\n    font-weight: 400 !important;\r\n}\r\n.component-tab:hover {\r\n    cursor: pointer;\r\n    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);\r\n}\r\n.tab-active:hover {\r\n    cursor: default;\r\n    box-shadow: unset;\r\n}\r\n.component-tab h3 {\r\n   color: #ebebeb;\r\n   padding-top: 5px;\r\n}\r\n.tab-active {\r\n    background-color: #ebebeb;\r\n}\r\n.tab-active h3 {\r\n    color: #233853;\r\n    padding-top: 5px;\r\n}\r\n.tab-content {\r\n    background-color: #d9dde0;\r\n    margin-top: 50px;\r\n    padding: 0px;\r\n}\r\n.tab-content-details {\r\n    background-color: #d9dde0;\r\n    margin-top: 70px;\r\n    margin-bottom: 45px;\r\n    padding: 0px;\r\n}\r\n.comp-body {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    border-right: 40px solid #ebebeb;\r\n    border-left: 40px solid #ebebeb;\r\n    background-color: #ebebeb;\r\n}\r\n.comp-tile {\r\n    padding: 0px;\r\n    background-color: #fafafa;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n.comp-active {\r\n    background-color: #c7cacf;\r\n}\r\n.comp-data {\r\n    padding: 0px;\r\n    background-color: #c7cacf;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    border-right: 50px solid #ebebeb;\r\n    border-left: 50px solid #ebebeb;\r\n}\r\n.component-tab-row {\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n    background-color: #ebebeb;\r\n}\r\n.comp-tile:hover {\r\n    cursor: pointer;\r\n    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);\r\n}\r\n.comp-active:hover {\r\n    cursor: default;\r\n    box-shadow: unset;\r\n}\r\n.data-content {\r\n    padding-left: 40px;\r\n    padding-top: 15px;\r\n}\r\n.data-head {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n}\r\n.data-sub-head {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n}\r\n.table thead th, .table td, .table th {\r\n    border: unset;\r\n    padding: .35rem;\r\n}\r\n.table thead th {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customerview/customerview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-3 col-sm-3\" style=\"font-weight:600; font-size:20px; color:#4a6076; padding-bottom:15px;\">\r\n        onPOINT HCS.Capacity\r\n    </div>\r\n    <div class=\"col-md-6 col-sm-6\" style=\"padding-top:6px;text-align: center;\">\r\n        <span>\r\n            <span *ngFor=\"let dC of dataCenters\">\r\n                <span class=\"icon-name\">&nbsp;</span>\r\n                <div *ngIf=\"dC.id == selectedDataCenter;then bubble1; else bubble2\"></div>\r\n                <ng-template #bubble1>\r\n                    <span style=\"cursor: pointer;font-size:15px;\" (click)=\"dataCenterClick(dC.id)\" class=\"fa fa-circle\"></span>\r\n                </ng-template>\r\n                <ng-template #bubble2>\r\n                    <span style=\"cursor: pointer;\" (click)=\"dataCenterClick(dC.id)\" class=\"ti-control-record\"></span>\r\n                </ng-template>\r\n            </span>\r\n        </span>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div *ngFor=\"let dataCenter of dataCenters\" id=\"dataCenter{{dataCenter.id}}\" class=\"col-md-3 col-sm-6 tab-tile {{ dataCenter.id == selectedDataCenter ? 'tab-tile-active' : ''}}\" (click)=\"dataCenterClick(dataCenter.id)\">\r\n        <div class=\"d-flex justify-content-center\">\r\n            <img bind-src=\"imgUrl\" class=\"img-thumbnail\">\r\n        </div>\r\n        <p class=\"data-center\">{{dataCenter.name}}</p>\r\n        <p class=\"data-center-body\">{{dataCenter.city}}, {{dataCenter.state}}</p>\r\n        <p class=\"data-center-body\">{{dataCenter.country}}</p>\r\n        <p class=\"data-center-body\">{{dataCenter.time_zone}}</p>\r\n    </div>\r\n    <div class=\"col-md-12 component-main\">\r\n        <div class=\"row tab-row\">\r\n            <div *ngFor=\"let compTabItem of compTabItems\" id=\"compTab{{compTabItem.id}}\" class=\"col-md-3 col-sm-6 component-tab {{ compTabItem.id == 1 ? 'tab-active' : ''}}\"\r\n                (click)=\"compTabClick(compTabItem.id)\">\r\n                <h3>{{compTabItem.name}}</h3>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"offset-md-3 offset-sm-3 col-md-6 col-sm-6\" style=\"padding-top:25px;text-align: center;\">\r\n                <span>\r\n                    <span *ngFor=\"let currentCompItem of currentCompItems\">\r\n                        <span class=\"icon-name\">&nbsp;</span>\r\n                        <div *ngIf=\"currentCompItem.id == selectedComp;then bubble3; else bubble4\"></div>\r\n                        <ng-template #bubble3>\r\n                            <span style=\"cursor: pointer;font-size:15px;\" (click)=\"subCompTabClick(currentCompItem.id)\" class=\"fa fa-circle\"></span>\r\n                        </ng-template>\r\n                        <ng-template #bubble4>\r\n                            <span style=\"cursor: pointer;\" (click)=\"subCompTabClick(currentCompItem.id)\" class=\"ti-control-record\"></span>\r\n                        </ng-template>\r\n                    </span>\r\n                </span>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"offset-md-1 col-md-10 offset-md-1 tab-content\">\r\n                <div class=\"row component-tab-row\">\r\n                    <div *ngFor=\"let currentCompItem of currentCompItems\" class=\"col-md-3 col-sm-6 comp-body\" (click)=\"subCompTabClick(currentCompItem.id)\">\r\n                        <div class=\"comp-tile {{ currentCompItem.id == selectedComp ? 'comp-active' : ''}}\" id=\"subCompTab{{currentCompItem.id}}\">\r\n                            <div class=\"d-flex justify-content-center\">\r\n                                <img bind-src=\"imgUrl\" class=\"img-thumbnail\">\r\n                            </div>\r\n                            <p class=\"comp-p-head\">{{currentCompItem.name}}</p>\r\n                            <p class=\"comp-p-body\">{{currentCompItem.version}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"offset-md-1 col-md-10 offset-md-1 tab-content-details\" id=\"subCompDetails\">\r\n                <div class=\"row tab-row\">\r\n                    <div class=\"col-md-12 col-sm-12 comp-data\">\r\n                        <div class=\"data-content\">\r\n                            <p class=\"data-head\">VRF CONTENTS:</p>\r\n                            <div class=\"table-responsive\">\r\n                                <table class=\"table\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>Vrf name:</th>\r\n                                            <th>ID status:</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td>lorem ipsum</td>\r\n                                            <td>Lorem, ipsum dolor sit amet </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>DDP Peers : 4</td>\r\n                                            <td></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>Total peers: </td>\r\n                                            <td>Established peers: </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>Lorem ipsum dolor Labore , laborum et </td>\r\n                                            <td> sit amet consectetur adipisicing elit.</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>sed voluptatibus dolores quis maiores accusamus.</td>\r\n                                            <td>Nam quia necessitatibus,</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>consequuntur delectus consectetur facilis qui sit</td>\r\n                                            <td>dignissimos placeat ab officiis!</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>Lorem ipsum dolor sit amet consectetur</td>\r\n                                            <td>temporibus deleniti nostrum minus magnam perspiciatis iure</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/customerview/customerview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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



var CustomerviewComponent = (function () {
    function CustomerviewComponent(route, config) {
        var _this = this;
        this.route = route;
        this.config = config;
        this.imgUrl = 'assets/images/icon-cube.png';
        this.observeRef = route.params.subscribe(function (params) {
            _this.userId = params['userId'];
        });
    }
    CustomerviewComponent.prototype.ngOnInit = function () {
        this.getDataCenterList(this.userId);
        this.compTabItems = [{ "id": 1, "name": "NEXUS" }, { "id": 2, "name": "VCENTER" }, { "id": 3, "name": "SBC" }, { "id": 4, "name": "ASA" }];
    };
    CustomerviewComponent.prototype.dataCenterClick = function (id) {
        if (this.selectedDataCenter != id) {
            var selDataTabId = $('.tab-tile-active').attr('id');
            $('#' + selDataTabId).attr('class', 'col-md-3 col-sm-6 tab-tile');
        }
        this.selectedDataCenter = id;
        var selCompTabId = $('.tab-active').attr('id');
        $('#' + selCompTabId).attr('class', 'col-md-3 col-sm-6 component-tab');
        $('#compTab1').attr('class', 'col-md-3 col-sm-6 component-tab tab-active');
        this.currentCompItems = this.ComponentItems['nexus'];
        this.selectedComp = '';
        $("#subCompDetails").hide();
    };
    CustomerviewComponent.prototype.compTabClick = function (id) {
        var selCompTabId = $('.tab-active').attr('id');
        $('#' + selCompTabId).attr('class', 'col-md-3 col-sm-6 component-tab');
        $('#compTab' + id).attr('class', 'col-md-3 col-sm-6 component-tab tab-active');
        if (id == 1) {
            this.currentCompItems = this.ComponentItems['nexus'];
        }
        else if (id == 2) {
            this.currentCompItems = this.ComponentItems['vcenter'];
        }
        else if (id == 3) {
            this.currentCompItems = this.ComponentItems['sbc'];
        }
        else if (id == 4) {
            this.currentCompItems = this.ComponentItems['asa'];
        }
        $("#subCompDetails").hide();
        this.selectedComp = '';
    };
    CustomerviewComponent.prototype.subCompTabClick = function (id) {
        if (this.selectedComp != id) {
            var selSubCompTabId = $('.comp-active').attr('id');
            $('#' + selSubCompTabId).attr('class', 'comp-tile');
        }
        this.selectedComp = id;
        $("#subCompDetails").show();
    };
    CustomerviewComponent.prototype.getDataCenterList = function (id) {
        var _this = this;
        setTimeout(function () {
            _this.config.getDataCenterListCusView(id).subscribe(function (res) {
                _this.dataCenters = res;
                _this.selectedDataCenter = _this.dataCenters[0].id;
                setTimeout(function () {
                    _this.getComponentList(_this.selectedDataCenter);
                    _this.setConponent('nexus');
                }, 100);
            });
        }, 100);
    };
    CustomerviewComponent.prototype.getComponentList = function (id) {
        var _this = this;
        this.config.getComponetCusView(id).subscribe(function (res) {
            _this.ComponentItems = res;
        });
    };
    CustomerviewComponent.prototype.setConponent = function (type) {
        var _this = this;
        setTimeout(function () {
            _this.currentCompItems = _this.ComponentItems[type];
            $("#subCompDetails").hide();
        }, 100);
    };
    return CustomerviewComponent;
}());
CustomerviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-customerview',
        template: __webpack_require__("../../../../../src/app/customerview/customerview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/customerview/customerview.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]) === "function" && _b || Object])
], CustomerviewComponent);

var _a, _b;
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
            breadcrumb: ''
        }
    }];
//# sourceMappingURL=customerview.routing.js.map

/***/ })

});
//# sourceMappingURL=customerview.module.chunk.js.map