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
                path: 'datacenter',
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

/***/ "../../../../../src/app/components/data/datacenter/datacenter.component.html":
/***/ (function(module, exports) {

module.exports = "<p>data center</p>"

/***/ }),

/***/ "../../../../../src/app/components/data/datacenter/datacenter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatacenterComponent; });
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

var DatacenterComponent = (function () {
    function DatacenterComponent() {
    }
    DatacenterComponent.prototype.ngOnInit = function () {
    };
    return DatacenterComponent;
}());
DatacenterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-datacenter',
        template: __webpack_require__("../../../../../src/app/components/data/datacenter/datacenter.component.html")
    }),
    __metadata("design:paramtypes", [])
], DatacenterComponent);

//# sourceMappingURL=datacenter.component.js.map

/***/ })

});
//# sourceMappingURL=data.module.chunk.js.map