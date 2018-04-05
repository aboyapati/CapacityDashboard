webpackJsonp(["data.module"],{

/***/ "../../../../../src/app/components/data/data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataComponent; });
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

var DataComponent = (function () {
    function DataComponent() {
    }
    DataComponent.prototype.ngOnInit = function () {
    };
    return DataComponent;
}());
DataComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-basic',
        template: '<router-outlet><spinner></spinner></router-outlet>'
    }),
    __metadata("design:paramtypes", [])
], DataComponent);

//# sourceMappingURL=data.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/data/data.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataModule", function() { return DataModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_component__ = __webpack_require__("../../../../../src/app/components/data/data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_routing__ = __webpack_require__("../../../../../src/app/components/data/data.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__datacenter_datacenter_component__ = __webpack_require__("../../../../../src/app/components/data/datacenter/datacenter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DataModule = (function () {
    function DataModule() {
    }
    return DataModule;
}());
DataModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__data_routing__["a" /* DataRoutes */]),
            __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__data_component__["a" /* DataComponent */],
            __WEBPACK_IMPORTED_MODULE_5__datacenter_datacenter_component__["a" /* DatacenterComponent */]
        ]
    })
], DataModule);

//# sourceMappingURL=data.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/data/data.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__datacenter_datacenter_component__ = __webpack_require__("../../../../../src/app/components/data/datacenter/datacenter.component.ts");

var DataRoutes = [
    {
        path: '',
        data: {
            breadcrumb: 'Data Components',
            status: false
        },
        children: [
            {
                path: 'datacenter/:dataCenterId',
                component: __WEBPACK_IMPORTED_MODULE_0__datacenter_datacenter_component__["a" /* DatacenterComponent */],
                data: {
                    breadcrumb: 'Datacenter page',
                    status: true
                }
            }
        ]
    }
];
//# sourceMappingURL=data.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/data/datacenter/datacenter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.tab-tile:hover {\r\n    cursor: pointer;\r\n    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);\r\n}\r\n.tab-tile {\r\n    padding: 30px 0px 75px;\r\n}\r\n.tab-tile-active {\r\n    padding: 30px 0px 31px;\r\n    background-color: #fff; \r\n}\r\n.tab-tile-table {\r\n    background-color: #fff;\r\n    padding: 30px;\r\n}\r\n.data-center {\r\n    color: #3b4147;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    padding: 6px 0 4px;\r\n}\r\n.data-center-body {\r\n    color: #73787d;\r\n    font-size: 13px;\r\n    text-align: center;\r\n    margin-bottom: 1px;\r\n    font-weight: 600;\r\n}\r\n.comp-img-thumbnail {\r\n    width: 100px;\r\n    height: 100px;\r\n    background-color: unset;\r\n    border: 0px;\r\n}\r\n.sub-component {\r\n    text-align: center;\r\n    padding-right: 0px;\r\n    padding-left: 0px;\r\n}\r\n.sub-component-body {\r\n    border: 1px solid #e8e8e8;\r\n    border-radius: .25rem;\r\n    margin: 15px;\r\n\tcursor:pointer;\r\n}\r\n.sub-component-text {\r\n    color: #73787d;\r\n    font-size: 13px;\r\n    text-align: center;\r\n    font-weight: 600;\r\n    margin-top: 1rem;\r\n}\r\n.sub-component-title {\r\n\tcolor: #424242;\r\n}\r\n.sub-component-text span { \r\n    font-size: 22px;\r\n    color: #424242;\r\n}\r\n.ti-arrow-circle-right:before\r\n{\r\n    content: \"\\E65D\";\r\n    font-size: 24px;\r\n    font-weight: bold;\r\n}\r\n.ti-arrow-circle-left:before{\r\n    content: \"\\E65E\";\r\n    font-size: 24px;\r\n    font-weight: bold;\r\n}\r\n.ti-control-record:before{\r\n    content: \"\\E724\";\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n}\r\n.subComChartimg {\r\n    width: 100%;\r\n}\r\n.chartdiv {\r\n    width: 100%;\r\n    height: 250px;\r\n}\r\n#speedochartdiv {\r\n\twidth\t\t: 100%;\r\n\theight\t\t: 500px;\r\n\tfont-size\t: 11px;\r\n}\t\r\n#speedochartdiv1 {\r\n\twidth\t\t: 100%;\r\n\theight\t\t: 500px;\r\n\tfont-size\t: 11px;\r\n}\t\r\n#speedochartdiv2 {\r\n\twidth\t\t: 100%;\r\n\theight\t\t: 500px;\r\n\tfont-size\t: 11px;\r\n}\t\t\r\n#speedochartpopup {\r\n\twidth\t\t: 100%;\r\n\theight\t\t: 500px;\r\n\tfont-size\t: 11px;\r\n}\t\r\n.rsddropdown-span {\r\n    cursor:pointer;\r\n    color:#b0bec5;\r\n    font-size:20px;\r\n}\t\r\n.rsddropdown {\r\n    text-align: right;\r\n    padding-right: 15px;\r\n    height: 15px;\r\n}\r\n.rsddropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #fff;\r\n    overflow: auto;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n    right: 10%;\r\n    border-radius: 6px;\r\n    border: 1px solid aliceblue;\r\n    cursor: pointer;\r\n    text-align: left;\r\n} \r\n.rsddropdown-content a {\r\n    color: #08070799;\r\n    padding: 5px 12px;\r\n    text-decoration: none;\r\n    display: block;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n} \r\n@media screen and (max-width: 1094px) {\r\n\t.sub-component {\r\n\t\t-webkit-box-flex: 0;\r\n\t\t    -ms-flex: 0 0 50%;\r\n\t\t        flex: 0 0 50%;\r\n\t\tmax-width:50%;\r\n\t}\r\n}\r\n@media screen and (max-width: 602px) {\r\n\t.sub-component {\r\n\t\t-webkit-box-flex: 0;\r\n\t\t    -ms-flex: 0 0 100%;\r\n\t\t        flex: 0 0 100%;\r\n\t\tmax-width:100%;\r\n\t}\r\n}\r\n@media screen and (max-width: 575px) {\r\n\t.data_center_view {\r\n\t\ttext-align:center;\r\n\t\tmargin-bottom: 10px;\r\n\t}\r\n}\r\n\r\n#withoutComponentBlock {\r\n  min-height: 200px;\r\n  padding: 80px 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/data/datacenter/datacenter.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"components\" class=\"row data_center_view\">\r\n    <div class=\"col-md-4 col-sm-4\" style=\"font-weight:600; font-size:20px; color:#4a6076; padding-bottom:15px;\">\r\n        onPOINT HCS.Capacity\r\n    </div>\r\n    <div class=\"col-md-8 col-sm-8\" style=\"padding-top:9px;\">\r\n        <span>\r\n            <span *ngFor=\"let c of components; let i = index\">\r\n                <span class=\"icon-name\">&nbsp;</span>\r\n                <span style=\"cursor: pointer;\" (click)=\"componnetScrollClick(i)\" id=\"componentScroll{{i}}\" class=\"ti-control-record\"></span>\r\n            </span>\r\n        </span>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"components\" class=\"row\">\r\n    <ng-container *ngFor=\"let component of components; let j = index\">\r\n        <div [style.display]=\"j>=scrollLimitMin && j<=scrollLimitMax ? 'block' : 'none'\" class=\"col-md-3 col-sm-6 tab-tile\" id=\"cmp_div_{{component.id}}\"\r\n            (click)=\"componnetScrollClick(j,'direct')\">\r\n            <div class=\"data-center-image d-flex justify-content-center\">\r\n                <img bind-src=\"imgUrl\" class=\"comp-img-thumbnail img-thumbnail\">\r\n            </div>\r\n            <p class=\"data-center\">{{component.name}}</p>\r\n        </div>\r\n    </ng-container>\r\n    <div *ngIf=\"subComponents!=''\" class=\"col-md-12 tab-tile-table table-responsive\">\r\n        <div class=\"row\">\r\n            <div *ngFor=\"let subComponent of subComponents; let k = index\" class=\"col-md-4 col-sm-6 sub-component\" (click)=\"open(subComponentChart,k)\">\r\n                <div class=\"sub-component-body\">\r\n                    <p class=\"sub-component-text sub-component-title\">{{subComponent.name}}</p>\r\n                    <div id=\"chartdiv_{{k+1}}\" class=\"chartdiv\"></div>\r\n                    <!--<p class=\"sub-component-text\"><span>{{subComponent.consumed}}</span> / {{subComponent.total}}</p>-->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"(subCoFlag && !coFlag)\" class=\"col-md-12 tab-tile-table table-responsive\" style=\"padding: 3%;\r\n    min-height: 200px;\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 tab-tile-table table-responsive text-center\">\r\n                <span>\r\n                    <b>THERE ARE CURRENTLY NO SUB COMPONENTS AVAILABLE FOR THIS COMPONENT.\r\n                    </b>\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div id=\"withoutComponentBlock\" class=\"col-md-12 tab-tile-table table-responsive text-center\" style=\"display:none\">\r\n        <span>\r\n            <b>THERE ARE CURRENTLY NO COMPONENTS AVAILABLE FOR THIS DATA CENTER.\r\n            </b>\r\n        </span>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"subComponents!=''\" style=\"display: none;\" id='vcenetrDataDiv'>\r\n    <div class=\"row\" style=\"padding-top: 20px;\">\r\n        <div class=\"tab-tile-table col-md-12 col-sm-12\">\r\n            <div>\r\n                <span>\r\n                    <b>DATASTORE USAGE PERCENTAGE</b>\r\n                </span>\r\n            </div>\r\n            <div id=\"speedochartdiv\"></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" style=\"padding-top: 20px;\">\r\n        <div class=\"tab-tile-table col-md-12 col-sm-12\">\r\n            <div>\r\n                <span>\r\n                    <b>MONTHLY AVERAGE HOST MEMORY USAGE PERCENTAGE</b>\r\n                </span>\r\n            </div>\r\n            <div id=\"speedochartdiv2\"></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" style=\"padding-top: 20px;\">\r\n        <div class=\"tab-tile-table col-md-12 col-sm-12\">\r\n            <div>\r\n                <span>\r\n                    <b>MONTHLY AVERAGE HOST CPU USAGE PERCENTAGE</b>\r\n                </span>\r\n            </div>\r\n            <div id=\"speedochartdiv1\"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #subComponentChart let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-body image-responsive\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <p>\r\n                    <b style=\"font-size:18px;padding-left:5%;\">{{popupName}}</b>\r\n                </p>\r\n            </div>\r\n            <div class=\"col-md-8\" style=\"text-align: right;\">\r\n                <div class=\"rsddropdown\" id=\"rsddropdown\">\r\n                    <span class=\"rsddropdown-span\" (click)=\"subCoPopupFilter()\">...</span>\r\n                    <div id=\"callMatricsDropdown\" class=\"rsddropdown-content\">\r\n                        <a (click)=\"filterSubcoPopup(3)\">Last 3 months</a>\r\n                        <a (click)=\"filterSubcoPopup(6)\">Last 6 months</a>\r\n                        <a (click)=\"filterSubcoPopup(9)\">Last 9 months</a>\r\n                        <a (click)=\"filterSubcoPopup(12)\">Last 12 months</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div id=\"speedochartpopup\"></div>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/components/data/datacenter/datacenter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatacenterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_service__ = __webpack_require__("../../../../../src/app/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DatacenterComponent = (function () {
    function DatacenterComponent(modalService, config, route, AmCharts, router) {
        var _this = this;
        this.modalService = modalService;
        this.config = config;
        this.route = route;
        this.AmCharts = AmCharts;
        this.router = router;
        this.userId = sessionStorage.id;
        this.selectedComponentId = 0;
        this.selectedComponentType = 'default';
        this.subFilterFlag = false;
        this.subComponentCounter = 0;
        this.subCoFlag = false;
        this.coFlag = false;
        this.imgUrl = "assets/images/icon-cube.png";
        this.subComimgUrl = "assets/images/subcomponent.png";
        this.subComChartimgUrl = "assets/images/subcomponentChart.png";
        this.deviceHeight = (window.screen.height);
        this.deviceWidth = (window.screen.width);
        if (this.deviceWidth >= 768) {
            this.scrollLimit = 4;
            this.scrollLimitMin = 0;
            this.scrollLimitMax = 3;
            this.sliderLimit = 3;
        }
        else if (this.deviceWidth >= 576) {
            this.scrollLimit = 2;
            this.scrollLimitMin = 0;
            this.scrollLimitMax = 1;
            this.sliderLimit = 1;
        }
        else {
            this.scrollLimit = 1;
            this.scrollLimitMin = 0;
            this.scrollLimitMax = 0;
            this.sliderLimit = 0;
        }
        this.observeRef = route.params.subscribe(function (params) {
            _this.dataCenterId = params['dataCenterId'];
            setTimeout(function () {
                _this.config.getComponentList(_this.dataCenterId).subscribe(function (res_comp) {
                    _this.components = res_comp;
                    if (_this.components.length < 1) {
                        _this.coFlag = true;
                        $('#withoutComponentBlock').show();
                    }
                    else {
                        _this.coFlag = false;
                        $('#withoutComponentBlock').hide();
                    }
                    _this.subComponents = [];
                    if (_this.subComponentCounter == 0) {
                        _this.subComponentCounter = 1;
                    }
                    setTimeout(function () {
                        $('#componentScroll0').trigger('click');
                    }, 100);
                });
            }, 1000);
        });
    }
    DatacenterComponent.prototype.ngOnInit = function () {
        if (!sessionStorage.username || !sessionStorage.id || typeof sessionStorage.username == 'undefined' || typeof sessionStorage.id == 'undefined') {
            this.router.navigate(['login']);
        }
    };
    DatacenterComponent.prototype.componnetScrollClick = function (id, clickType) {
        if (clickType === void 0) { clickType = 'scroll'; }
        if (clickType == 'scroll') {
            if (id < this.scrollLimit) {
                this.scrollLimitMin = 0;
                this.scrollLimitMax = this.sliderLimit;
            }
            else {
                this.scrollLimitMin = id - this.sliderLimit;
                this.scrollLimitMax = id;
            }
        }
        $('.fa-circle').removeClass("fa fa-circle").addClass("ti-control-record");
        $('#componentScroll' + id).removeClass("ti-control-record").addClass("fa fa-circle").css('font-size', '15px');
        this.selectedComponentId = this.components[id].id;
        this.selectedComponentType = this.components[id].type;
        this.componentClick();
    };
    DatacenterComponent.prototype.subComponentPopUp = function () {
        var _this = this;
        this.config.getsubComponentPopUp(this.popUptypeId, this.popUpsubComponentName).subscribe(function (res_pop) {
            _this.subComponentPopUpdata = res_pop;
            _this.subComponentModal(res_pop);
        });
    };
    DatacenterComponent.prototype.componentClick = function () {
        this.deActivateCard();
        $('#cmp_div_' + this.selectedComponentId).attr('class', 'col-md-3 col-sm-6 tab-tile tab-tile-active');
        this.setSubComData();
    };
    DatacenterComponent.prototype.deActivateCard = function () {
        var preId = $('.tab-tile-active').attr('id');
        $('#' + preId).attr('class', 'col-md-3 col-sm-6 tab-tile');
    };
    DatacenterComponent.prototype.setSubComData = function () {
        var _this = this;
        this.config.getSubComponentList(this.selectedComponentId, this.selectedComponentType).subscribe(function (res_sub_co) {
            _this.subComponentList = res_sub_co;
            _this.subComponents = _this.subComponentList.subcomponents;
            var subCoId = 1;
            if (_this.subComponents && (_this.subComponents.length > 1)) {
                setTimeout(function () {
                    _this.subComponents.forEach(function (subCo) {
                        _this.makeDynamicChart(subCoId++, subCo.status, subCo.consumed, subCo.total, (subCo.consumed / subCo.total) * 100);
                    });
                }, 100);
            }
            else {
                _this.subCoFlag = true;
            }
        });
        if (this.selectedComponentType.toLowerCase() == 'vcenter') {
            this.config.getVcenterData(this.selectedComponentId).subscribe(function (res_v) {
                _this.dataUsagePercentageChart1(res_v.datastore);
                _this.dataUsagePercentageChart3(res_v.host_memory);
                _this.dataUsagePercentageChart2(res_v.host_cpu);
                $('#vcenetrDataDiv').show();
            });
        }
        else {
            $('#vcenetrDataDiv').hide();
        }
    };
    DatacenterComponent.prototype.filterSubcoPopup = function (months) {
        $('#callMatricsDropdown').hide();
        this.subComponentModal(this.subComponentPopUpdata, months);
    };
    DatacenterComponent.prototype.subCoPopupFilter = function () {
        $('#callMatricsDropdown').show();
    };
    DatacenterComponent.prototype.subComponentModal = function (details, months) {
        if (months === void 0) { months = 12; }
        this.popupName = details.name;
        this.chart4 = this.AmCharts.makeChart("speedochartpopup", {
            "type": "serial",
            "hideCredits": true,
            "theme": "light",
            "dataProvider": details.report.slice(details.report.length - months, details.report.length),
            "valueAxes": [{
                    "gridColor": "#000000",
                    "gridAlpha": 0.2,
                    "dashLength": 0,
                    "minimum": 0
                }],
            "gridAboveGraphs": true,
            "startDuration": 1,
            "graphs": [{
                    "balloonText": "[[category]]: <b>[[value]]</b>",
                    "fillAlphas": 1,
                    "lineAlpha": 1,
                    "type": "column",
                    "valueField": "value",
                    "fillColors": "#089A04",
                }],
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "month",
            "categoryAxis": {
                "gridPosition": "start",
                "gridAlpha": 0,
                "tickPosition": "start",
                "tickLength": 20
            }
        });
    };
    DatacenterComponent.prototype.dataUsagePercentageChart1 = function (details) {
        var graphData = [];
        for (var data in details) {
            var name = details[data].name;
            var percent = Math.round((details[data].capacity_gb / details[data].provisioned_gb) * 100);
            if (details[data].status == "Good") {
                var color = 'green';
            }
            else if (details[data].status == "Bad") {
                var color = 'red';
            }
            else {
                var color = '#f1c40f';
            }
            var unit = {
                name: name,
                percent: percent,
                color: color
            };
            graphData.push(unit);
        }
        this.chart1 = this.AmCharts.makeChart("speedochartdiv", {
            "type": "serial",
            "hideCredits": true,
            "theme": "light",
            "dataProvider": graphData,
            "valueAxes": [{
                    "gridColor": "#000000",
                    "gridAlpha": 0.2,
                    "dashLength": 0,
                    "minimum": 0,
                    "maximum": 100
                }],
            "gridAboveGraphs": true,
            "startDuration": 1,
            "graphs": [{
                    "balloonText": "[[category]]: <b>[[value]]</b> %",
                    "fillAlphas": 1,
                    "lineAlpha": 1,
                    "type": "column",
                    "valueField": "percent",
                    "fillColorsField": "color",
                    "fixedColumnWidth": 20
                }],
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "name",
            "categoryAxis": {
                "gridPosition": "start",
                "gridAlpha": 0,
                "tickLength": 10,
                "labelRotation": 45
            }
        });
    };
    DatacenterComponent.prototype.dataUsagePercentageChart2 = function (details) {
        var graphData = [];
        for (var data in details) {
            var name = details[data].name;
            var percent = Math.round((details[data].cpu_usage / details[data].cpu_total) * 100);
            if (details[data].status == "Good") {
                var color = 'green';
            }
            else if (details[data].status == "Bad") {
                var color = 'red';
            }
            else {
                var color = '#f1c40f';
            }
            var unit = {
                name: name,
                percent: percent,
                color: color
            };
            graphData.push(unit);
        }
        this.chart2 = this.AmCharts.makeChart("speedochartdiv1", {
            "type": "serial",
            "hideCredits": true,
            "theme": "light",
            "dataProvider": graphData,
            "valueAxes": [{
                    "gridColor": "#000000",
                    "gridAlpha": 0.2,
                    "dashLength": 0,
                    "minimum": 0,
                    "maximum": 100
                }],
            "gridAboveGraphs": true,
            "startDuration": 1,
            "graphs": [{
                    "balloonText": "[[category]]: <b>[[value]]</b> %",
                    "fillAlphas": 1,
                    "lineAlpha": 1,
                    "type": "column",
                    "valueField": "percent",
                    "fillColorsField": "color",
                    "fixedColumnWidth": 20
                }],
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "name",
            "categoryAxis": {
                "gridPosition": "start",
                "gridAlpha": 0,
                "tickLength": 10,
                "labelRotation": 45
            }
        });
    };
    DatacenterComponent.prototype.dataUsagePercentageChart3 = function (details) {
        var graphData = [];
        for (var data in details) {
            var name = details[data].name;
            var percent = Math.round((details[data].memory_usage / details[data].memory_total) * 100);
            if (details[data].status == "Good") {
                var color = 'green';
            }
            else if (details[data].status == "Bad") {
                var color = 'red';
            }
            else {
                var color = '#f1c40f';
            }
            var unit = {
                name: name,
                percent: percent,
                color: color
            };
            graphData.push(unit);
        }
        this.chart3 = this.AmCharts.makeChart("speedochartdiv2", {
            "type": "serial",
            "hideCredits": true,
            "theme": "light",
            "dataProvider": graphData,
            "valueAxes": [{
                    "gridColor": "#000000",
                    "gridAlpha": 0.2,
                    "dashLength": 0,
                    "minimum": 0,
                    "maximum": 100
                }],
            "gridAboveGraphs": true,
            "startDuration": 1,
            "graphs": [{
                    "balloonText": "[[category]]: <b>[[value]]</b> %",
                    "fillAlphas": 1,
                    "lineAlpha": 1,
                    "type": "column",
                    "valueField": "percent",
                    "fillColorsField": "color",
                    "fixedColumnWidth": 20
                }],
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "name",
            "categoryAxis": {
                "gridPosition": "start",
                "gridAlpha": 0,
                "tickLength": 10,
                "labelRotation": 45
            }
        });
    };
    DatacenterComponent.prototype.makeDynamicChart = function (id, status, consumed, total, value) {
        value = Math.round(value * 100) / 100;
        if (status == 'Good') {
            var color = '#00b300';
        }
        else if (status == 'Bad') {
            var color = '#ff0000';
        }
        else {
            var color = '#ff9900';
        }
        this.chart = this.AmCharts.makeChart("chartdiv_" + id, {
            "theme": "light",
            "hideCredits": true,
            "type": "gauge",
            "axes": [{
                    "topText": consumed + ' / ' + total + ' (' + value + '%' + ')',
                    "topTextFontSize": 14,
                    "bandOutlineThickness": 10,
                    "topTextYOffset": 70,
                    "axisColor": "#fff",
                    "axisThickness": 70,
                    "endValue": 100,
                    "gridInside": true,
                    "inside": true,
                    "radius": "50%",
                    "valueInterval": 100,
                    "tickColor": "#000000",
                    "startAngle": -90,
                    "endAngle": 90,
                    "unit": "%",
                    "bandOutlineAlpha": 0,
                    "bands": [{
                            "alphe": 1,
                            "color": "#e7e7e7",
                            "endValue": 100,
                            "innerRadius": "105%",
                            "radius": "170%",
                            "startValue": 0
                        }, {
                            "alphe": 1,
                            "color": color,
                            "balloonText": value + '%',
                            "endValue": value,
                            "innerRadius": "105%",
                            "radius": "170%",
                            "startValue": 0
                        }]
                }],
            "arrows": [{
                    "value": value,
                    "alpha": 10,
                    "color": color,
                    "innerRadius": "50%",
                    "nailRadius": 20,
                    "radius": "130%"
                }]
        });
    };
    DatacenterComponent.prototype.open = function (content, popup_id) {
        var _this = this;
        this.popUptypeId = this.subComponents[popup_id].type_id;
        this.popUpsubComponentName = this.subComponents[popup_id].name;
        this.subComponentPopUp();
        this.modalService.open(content, { windowClass: 'sub_component_modal', size: 'lg' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    DatacenterComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return 'with: ${reason}';
        }
    };
    return DatacenterComponent;
}());
DatacenterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-datacenter',
        template: __webpack_require__("../../../../../src/app/components/data/datacenter/datacenter.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/data/datacenter/datacenter.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__amcharts_amcharts3_angular__["b" /* AmChartsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__amcharts_amcharts3_angular__["b" /* AmChartsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */]) === "function" && _e || Object])
], DatacenterComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=datacenter.component.js.map

/***/ })

});
//# sourceMappingURL=data.module.chunk.js.map