webpackJsonp(["customerview.module"],{

/***/ "../../../../../src/app/customerview/customerview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tab-tile:hover {\r\n    cursor: pointer;\r\n    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);\r\n}\r\n.tab-tile {\r\n    padding: 15px 0px 15px;\r\n}\r\n.tab-tile-active {\r\n    padding: 15px 0px 31px;\r\n    background-color: #fff; \r\n}\r\n.img-thumbnail {\r\n    width: 100px;\r\n    height: 100px;\r\n    background-color: unset;\r\n    border: 0px;\r\n}\r\n.data-center {\r\n    color: #3b4147;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    padding: 6px 0 4px;\r\n}\r\n.data-center-body {\r\n    color: #73787d;\r\n    font-size: 13px;\r\n    text-align: center;\r\n    margin-bottom: 1px;\r\n    font-weight: 600;\r\n}\r\n.comp-p-head {\r\n    color: #415166;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    margin-bottom: 1px;\r\n    font-weight: 600;\r\n}\r\n.comp-p-body {\r\n    color: #415166;\r\n    font-size: 15px;\r\n    text-align: center;\r\n    margin-bottom: 1px;\r\n    font-weight: 600;\r\n}\r\n.component-main {\r\n    background-color: #ffffff;\r\n    padding: 0px;\r\n    min-height: 450px;\r\n}\r\n.tab-row {\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n}\r\n.component-tab, .component-tab-small {\r\n    background-color: #233853;\r\n    border-radius: 4px;\r\n    border-right: 1px solid #ffffff;\r\n    border-left: 1px solid #ffffff;\r\n    text-align: center;\r\n    font-weight: 400 !important;\r\n    margin-top: 1px;\r\n}\r\n.component-tab:hover, .component-tab-small:hover {\r\n    cursor: pointer;\r\n    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);\r\n}\r\n.tab-active:hover, .sub-tab-active:hover {\r\n    cursor: default;\r\n    box-shadow: unset;\r\n}\r\n.component-tab h3, .component-tab-small h4 {\r\n   color: #ffffff;\r\n   padding-top: 5px;\r\n}\r\n.component-tab-small h4 {\r\n    font-size: 15px;\r\n}\r\n.component-tab h3 {\r\n    font-size: 19px;\r\n}\r\n.tab-active, .sub-tab-active {\r\n    background-color: #ffffff;\r\n    border: 1px solid #233853;\r\n}\r\n.tab-active h3, .sub-tab-active h4 {\r\n    color: #233853;\r\n    padding-top: 5px;\r\n    font-weight: bold;\r\n}\r\n.tab-content {\r\n    background-color: #d9dde0;\r\n    margin-top: 50px;\r\n    padding: 0px;\r\n}\r\n#subCompTab {\r\n    margin-top: 70px;\r\n}\r\n.tab-content-details {\r\n    background-color: #d9dde0;\r\n    margin-top: 0px;\r\n    margin-bottom: 45px;\r\n    padding: 0px;\r\n}\r\n.comp-body {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    border-right: 35px solid #ffffff;\r\n    border-left: 35px solid #ffffff;\r\n    background-color: #ffffff;\r\n}\r\n.comp-tile {\r\n    padding: 0px;\r\n    background-color: #ebebeb;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n.comp-active {\r\n    background-color: #c7cacf;\r\n}\r\n.comp-data {\r\n    padding: 0px;\r\n    background-color: #c7cacf;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    border-right: 14px solid #ffffff;\r\n    border-left: 15px solid #ffffff;\r\n}\r\n.component-tab-row {\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n    background-color: #ffffff;\r\n}\r\n.comp-tile:hover {\r\n    cursor: pointer;\r\n    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);\r\n}\r\n.comp-active:hover {\r\n    cursor: default;\r\n    box-shadow: unset;\r\n}\r\n.data-content {\r\n    padding-left: 40px;\r\n    padding-top: 15px;\r\n\tpadding-right: 25px;\r\n}\r\n.data-head {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n}\r\n.data-sub-head {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n}\r\n.table thead th, .table td, .table th {\r\n    border: unset;\r\n    padding: .35rem;\r\n    white-space: inherit;\r\n}\r\n.table thead th {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n}\r\n\r\n@media only screen \r\n  and (max-device-width: 767px) {\r\n    .component-tab-row {\r\n        margin-left: 15px;\r\n        margin-right: 15px;\r\n    }\r\n}\r\n\r\n@media only screen \r\nand (max-device-width: 1330px)\r\nand (min-device-width: 900px) {\r\n    .comp-body {\r\n        border-right: 10px solid #ffffff;\r\n        border-left: 10px solid #ffffff;\r\n    }\r\n}\r\n\r\n@media only screen \r\nand (max-device-width: 900px)\r\nand (min-device-width: 768px) {\r\n    .comp-body {\r\n        border-right: 0px solid #ffffff;\r\n        border-left: 0px solid #ffffff;\r\n    }\r\n}\r\n\r\n@media only screen \r\nand (max-device-width: 767px){\r\n    .tab-content-details {\r\n        padding-right: 15px;\r\n        padding-left: 15px;\r\n    }\r\n    .comp-data {\r\n        border-right: unset;\r\n        border-left: unset;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customerview/customerview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-3 col-sm-3\" style=\"font-weight:600; font-size:20px; color:#4a6076; padding-bottom:15px;\">\r\n        onPOINT HCS.Capacity\r\n    </div>\r\n    <div class=\"col-md-6 col-sm-6\" style=\"padding-top:6px;text-align: center;\">\r\n        <span>\r\n            <span *ngFor=\"let dC of dataCenters, let i = index\">\r\n                <span class=\"icon-name\">&nbsp;</span>\r\n                <div *ngIf=\"dC.id == selectedDataCenter;then bubble1; else bubble2\"></div>\r\n                <ng-template #bubble1>\r\n                    <span style=\"cursor: pointer;font-size:15px;\" (click)=\"dataCenterClick(dC.id,i)\" class=\"fa fa-circle\"></span>\r\n                </ng-template>\r\n                <ng-template #bubble2>\r\n                    <span style=\"cursor: pointer;\" (click)=\"dataCenterClick(dC.id,i)\" class=\"ti-control-record\"></span>\r\n                </ng-template>\r\n            </span>\r\n        </span>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div *ngFor=\"let dataCenter of dataCenters, let i = index\" id=\"dataCenter{{dataCenter.id}}\" class=\"col-md-3 col-sm-6 tab-tile {{ dataCenter.id == selectedDataCenter ? 'tab-tile-active' : ''}}\"\r\n        (click)=\"dataCenterClick(dataCenter.id,i,'direct')\" [style.display]=\"i>=scrollLimitMin && i<=scrollLimitMax ? 'block' : 'none'\">\r\n        <div class=\"d-flex justify-content-center\">\r\n            <img bind-src=\"imgUrl\" class=\"img-thumbnail\">\r\n        </div>\r\n        <p class=\"data-center\">{{dataCenter.name}}</p>\r\n        <p class=\"data-center-body\">{{dataCenter.city}}, {{dataCenter.state}}</p>\r\n        <p class=\"data-center-body\">{{dataCenter.country}}</p>\r\n        <p class=\"data-center-body\">{{dataCenter.time_zone}}</p>\r\n    </div>\r\n    <div class=\"col-md-12 component-main\">\r\n        <div class=\"row tab-row\">\r\n            <div *ngFor=\"let compTabItem of compTabItems\" id=\"compTab{{compTabItem.id}}\" class=\"col-md-2 col-sm-3 component-tab {{ compTabItem.id == selectedCompTab ? 'tab-active' : ''}}\"\r\n                (click)=\"compTabClick(compTabItem.id)\">\r\n                <h3>{{compTabItem.name}}</h3>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"offset-md-3 offset-sm-3 col-md-6 col-sm-6\" style=\"padding-top:25px;text-align: center;\">\r\n                <span>\r\n                    <span *ngFor=\"let currentCompItem of currentCompItems, let y = index\">\r\n                        <span class=\"icon-name\">&nbsp;</span>\r\n                        <div *ngIf=\"currentCompItem.id == selectedComp;then bubble3; else bubble4\"></div>\r\n                        <ng-template #bubble3>\r\n                            <span style=\"cursor: pointer;font-size:15px;\" (click)=\"ComponentClick(currentCompItem.id, currentCompItem.type, y)\" class=\"fa fa-circle\"></span>\r\n                        </ng-template>\r\n                        <ng-template #bubble4>\r\n                            <span style=\"cursor: pointer;\" (click)=\"ComponentClick(currentCompItem.id, currentCompItem.type, y)\" class=\"ti-control-record\"></span>\r\n                        </ng-template>\r\n                    </span>\r\n                </span>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" id=tabContent>\r\n            <div class=\"offset-md-1 col-md-10 offset-md-1 tab-content\">\r\n                <div class=\"row component-tab-row\">\r\n                    <div *ngFor=\"let currentCompItem of currentCompItems, let x = index\" class=\"col-md-3 col-sm-6 comp-body\" (click)=\"ComponentClick(currentCompItem.id, currentCompItem.type,x,'direct')\" [style.display]=\"x>=scrollLimitMin1 && x<=scrollLimitMax1 ? 'block' : 'none'\">\r\n                        <div class=\"comp-tile {{ currentCompItem.id == selectedComp ? 'comp-active' : ''}}\" id=\"subComponent{{currentCompItem.id}}\">\r\n                            <div class=\"d-flex justify-content-center\">\r\n                                <img bind-src=\"imgUrl\" class=\"img-thumbnail\">\r\n                            </div>\r\n                            <p class=\"comp-p-head\">{{currentCompItem.name}}</p>\r\n                            <p class=\"comp-p-body\">{{currentCompItem.version}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row tab-row\" id=\"subCompTab\">\r\n            <div *ngFor=\"let subCompTabItem of subCompTabItems,let j=index\" class=\"{{ j%5 == 0 ? 'offset-md-1' : '' }} col-md-2 col-sm-6 component-tab-small {{subCompTabItem.name == selectedSubCompName ? 'sub-tab-active' : ''}}\"\r\n                id=\"subCompTabItem_{{subCompTabItem.name}}\" (click)=\"subCompTabClick(subCompTabItem.type_id, subCompTabItem.name)\">\r\n                <h4>{{subCompTabItem.name}}</h4>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" id=\"subCompDetails\">\r\n            <div class=\"offset-md-1 col-md-10 offset-md-1 tab-content-details\">\r\n                <div class=\"row tab-row\">\r\n                    <div class=\"col-md-12 col-sm-12 comp-data\">\r\n                        <div class=\"data-content\">\r\n                            <p class=\"data-head\">{{selectedSubCompName}} CONTENTS:</p>\r\n                            <div class=\"table-responsive\">\r\n                                <p>{{customerContent.content}}</p>\r\n                                <!-- <table class=\"table\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>Vrf name:</th>\r\n                                            <th>ID status:</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td>{{customerContent.content}}</td>\r\n                                            <td>{{customerContent.content}}</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table> -->\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"compNotFound\" style=\"padding-top: 50px;\">\r\n            <div class=\"col-md-12\" style=\"text-align: center\">\r\n                <b>THERE ARE NO COMPONENTS FOUND FOR THIS DATA CENTER.</b>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

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
    function CustomerviewComponent(route, config, router) {
        var _this = this;
        this.route = route;
        this.config = config;
        this.router = router;
        this.imgUrl = 'assets/images/icon-cube.png';
        this.customerContent = '';
        this.compNotFound = false;
        sessionStorage.setItem('previousUrl', this.router.url);
        this.deviceHeight = (window.innerHeight);
        this.deviceWidth = (window.innerWidth);
        if (this.deviceWidth >= 768) {
            this.scrollLimit = 4;
            this.scrollLimitMin = 0;
            this.scrollLimitMax = 3;
            this.sliderLimit = 3;
            this.scrollLimit1 = 4;
            this.scrollLimitMin1 = 0;
            this.scrollLimitMax1 = 3;
            this.sliderLimit1 = 3;
        }
        else if (this.deviceWidth >= 576) {
            this.scrollLimit = 2;
            this.scrollLimitMin = 0;
            this.scrollLimitMax = 1;
            this.sliderLimit = 1;
            this.scrollLimit1 = 2;
            this.scrollLimitMin1 = 0;
            this.scrollLimitMax1 = 1;
            this.sliderLimit1 = 1;
        }
        else {
            this.scrollLimit = 1;
            this.scrollLimitMin = 0;
            this.scrollLimitMax = 0;
            this.sliderLimit = 0;
            this.scrollLimit1 = 1;
            this.scrollLimitMin1 = 0;
            this.scrollLimitMax1 = 0;
            this.sliderLimit1 = 0;
        }
        this.observeRef = route.params.subscribe(function (params) {
            _this.userId = params['userId'];
        });
    }
    CustomerviewComponent.prototype.ngOnInit = function () {
        if (!sessionStorage.username || !sessionStorage.id || typeof sessionStorage.username == 'undefined' || typeof sessionStorage.id == 'undefined') {
            this.router.navigate(['login']);
        }
        this.getDataCenterList(this.userId);
        this.compTabItems = [{ "id": 1, "name": "NEXUS" }, { "id": 2, "name": "VCENTER" }, { "id": 3, "name": "SBC" }, { "id": 4, "name": "ASA" }];
    };
    CustomerviewComponent.prototype.resetSlider = function () {
        if (this.deviceWidth >= 768) {
            this.scrollLimit1 = 4;
            this.scrollLimitMin1 = 0;
            this.scrollLimitMax1 = 3;
            this.sliderLimit1 = 3;
        }
        else if (this.deviceWidth >= 576) {
            this.scrollLimit1 = 2;
            this.scrollLimitMin1 = 0;
            this.scrollLimitMax1 = 1;
            this.sliderLimit1 = 1;
        }
        else {
            this.scrollLimit1 = 1;
            this.scrollLimitMin1 = 0;
            this.scrollLimitMax1 = 0;
            this.sliderLimit1 = 0;
        }
    };
    CustomerviewComponent.prototype.dataCenterClick = function (id, scrollIndex, clickType) {
        var _this = this;
        if (clickType === void 0) { clickType = 'scroll'; }
        this.resetSlider();
        if (clickType == 'scroll') {
            if (scrollIndex < this.scrollLimit) {
                this.scrollLimitMin = 0;
                this.scrollLimitMax = this.sliderLimit;
            }
            else {
                this.scrollLimitMin = scrollIndex - this.sliderLimit;
                this.scrollLimitMax = scrollIndex;
            }
        }
        this.compTabItems = [{ "id": 1, "name": "NEXUS" }, { "id": 2, "name": "VCENTER" }, { "id": 3, "name": "SBC" }, { "id": 4, "name": "ASA" }];
        this.config.getComponetCusView(id).subscribe(function (res) {
            _this.ComponentItems = res;
            _this.hideEmptyCompTab();
            _this.selectDefSelectedCompTab();
        });
        if (this.selectedDataCenter != id) {
            var selDataTabId = $('.tab-tile-active').attr('id');
            $('#' + selDataTabId).attr('class', 'col-md-3 col-sm-6 tab-tile');
        }
        this.selectedDataCenter = id;
        this.selectedComp = '';
        var selCompTabId = $('.tab-active').attr('id');
        $('#' + selCompTabId).attr('class', 'col-md-2 col-sm-6 component-tab');
        $('#compTab1').attr('class', 'col-md-2 col-sm-6 component-tab tab-active');
        $("#subCompDetails").hide();
        $("#subCompTab").hide();
    };
    CustomerviewComponent.prototype.compTabClick = function (id) {
        var selCompTabId = $('.tab-active').attr('id');
        $('#' + selCompTabId).attr('class', 'col-md-2 col-sm-6 component-tab');
        $('#compTab' + id).attr('class', 'col-md-2 col-sm-6 component-tab tab-active');
        if (id == 1) {
            this.setConponent('nexus');
        }
        else if (id == 2) {
            this.setConponent('vcenter');
        }
        else if (id == 3) {
            this.setConponent('sbc');
        }
        else if (id == 4) {
            this.setConponent('asa');
        }
        this.selectedComp = '';
    };
    CustomerviewComponent.prototype.ComponentClick = function (id, type, scrollIndex, clickType) {
        var _this = this;
        if (clickType === void 0) { clickType = 'scroll'; }
        if (clickType == 'scroll') {
            if (scrollIndex < this.scrollLimit1) {
                this.scrollLimitMin1 = 0;
                this.scrollLimitMax1 = this.sliderLimit1;
            }
            else {
                this.scrollLimitMin1 = scrollIndex - this.sliderLimit1;
                this.scrollLimitMax1 = scrollIndex;
            }
        }
        this.config.getSubComponetCusView(id, type).subscribe(function (res) {
            _this.subCompTabItems = res;
            _this.selectedSubCompTypeId = _this.subCompTabItems[0].type_id;
            _this.selectedSubCompName = _this.subCompTabItems[0].name;
        });
        if (this.selectedComp != id) {
            var selSubCompTabId = $('.comp-active').attr('id');
            $('#' + selSubCompTabId).attr('class', 'comp-tile');
        }
        this.selectedComp = id;
        setTimeout(function () {
            _this.config.getCustomerContentCusView(_this.selectedSubCompTypeId, _this.selectedSubCompName).subscribe(function (res) {
                _this.customerContent = res;
            });
        }, 100);
        $("#subCompDetails").show();
        $("#subCompTab").show();
    };
    CustomerviewComponent.prototype.getDataCenterList = function (id) {
        var _this = this;
        setTimeout(function () {
            _this.config.getDataCenterListCusView(id).subscribe(function (res) {
                _this.dataCenters = res;
                _this.selectedDataCenter = _this.dataCenters[0].id;
                setTimeout(function () {
                    _this.getComponentList(_this.selectedDataCenter);
                }, 100);
            });
        }, 100);
    };
    CustomerviewComponent.prototype.getComponentList = function (id) {
        var _this = this;
        this.config.getComponetCusView(id).subscribe(function (res) {
            _this.ComponentItems = res;
            _this.hideEmptyCompTab();
            _this.selectDefSelectedCompTab();
        });
    };
    CustomerviewComponent.prototype.setConponent = function (type) {
        var _this = this;
        setTimeout(function () {
            _this.currentCompItems = _this.ComponentItems[type];
            $("#subCompDetails").hide();
            $("#subCompTab").hide();
        }, 100);
    };
    CustomerviewComponent.prototype.subCompTabClick = function (type_id, name) {
        var _this = this;
        this.config.getCustomerContentCusView(type_id, name).subscribe(function (res) {
            _this.customerContent = res;
        });
        if (this.selectedSubCompName != name) {
            var selSubCompTabId = $('.sub-tab-active').attr('id');
            $('#' + selSubCompTabId).attr('class', 'col-md-2 col-sm-6 component-tab-small');
        }
        this.selectedSubCompTypeId = type_id;
        this.selectedSubCompName = name;
    };
    CustomerviewComponent.prototype.hideEmptyCompTab = function () {
        if (typeof this.ComponentItems['nexus'] != 'undefined') {
            if (this.ComponentItems['nexus'].length == 0) {
                $("#compTab1").hide();
            }
            else {
                $("#compTab1").show();
            }
        }
        else {
            $("#compTab1").hide();
        }
        if (typeof this.ComponentItems['vcenter'] != 'undefined') {
            if (this.ComponentItems['vcenter'].length == 0) {
                $("#compTab2").hide();
            }
            else {
                $("#compTab2").show();
            }
        }
        else {
            $("#compTab2").hide();
        }
        if (typeof this.ComponentItems['sbc'] != 'undefined') {
            if (this.ComponentItems['sbc'].length == 0) {
                $("#compTab3").hide();
            }
            else {
                $("#compTab3").show();
            }
        }
        else {
            $("#compTab3").hide();
        }
        if (typeof this.ComponentItems['asa'] != 'undefined') {
            if (this.ComponentItems['asa'].length == 0) {
                $("#compTab4").hide();
            }
            else {
                $("#compTab4").show();
            }
        }
        else {
            $("#compTab4").hide();
        }
    };
    CustomerviewComponent.prototype.selectDefSelectedCompTab = function () {
        var nexus_exists = 1;
        var vcenter_exists = 1;
        var sbc_exists = 1;
        var asa_exists = 1;
        if (typeof this.ComponentItems['nexus'] != 'undefined') {
            if (this.ComponentItems['nexus'].length > 0) {
                this.setConponent('nexus');
                this.selectedCompTab = 1;
                this.compNotFound = false;
                $("#tabContent").show();
            }
            else {
                nexus_exists = 0;
            }
        }
        else {
            nexus_exists = 0;
        }
        if (nexus_exists == 0) {
            if (typeof this.ComponentItems['vcenter'] != 'undefined') {
                if (this.ComponentItems['vcenter'].length > 0) {
                    this.setConponent('vcenter');
                    this.selectedCompTab = 2;
                    this.compNotFound = false;
                    $("#tabContent").show();
                }
                else {
                    vcenter_exists = 0;
                }
            }
            else {
                vcenter_exists = 0;
            }
        }
        if (vcenter_exists == 0) {
            if (typeof this.ComponentItems['sbc'] != 'undefined') {
                if (this.ComponentItems['sbc'].length > 0) {
                    this.setConponent('sbc');
                    this.selectedCompTab = 3;
                    this.compNotFound = false;
                    $("#tabContent").show();
                }
                else {
                    sbc_exists = 0;
                }
            }
            else {
                sbc_exists = 0;
            }
        }
        if (sbc_exists == 0) {
            if (typeof this.ComponentItems['asa'] != 'undefined') {
                if (this.ComponentItems['asa'].length > 0) {
                    this.setConponent('asa');
                    this.selectedCompTab = 4;
                    this.compNotFound = false;
                    $("#tabContent").show();
                }
                else {
                    asa_exists = 0;
                }
            }
            else {
                asa_exists = 0;
            }
        }
        if (asa_exists == 0) {
            $("#subCompDetails").hide();
            $("#subCompTab").hide();
            $("#tabContent").hide();
            this.compNotFound = true;
        }
    };
    return CustomerviewComponent;
}());
CustomerviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-customerview',
        template: __webpack_require__("../../../../../src/app/customerview/customerview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/customerview/customerview.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]) === "function" && _c || Object])
], CustomerviewComponent);

var _a, _b, _c;
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