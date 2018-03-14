webpackJsonp(["simple-page.module"],{

/***/ "../../../../../src/app/simple-page/simple-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimplePageComponent; });
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

var SimplePageComponent = (function () {
    function SimplePageComponent() {
    }
    SimplePageComponent.prototype.ngOnInit = function () {
    };
    return SimplePageComponent;
}());
SimplePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-simple-page',
        template: '<router-outlet><spinner></spinner></router-outlet>'
    }),
    __metadata("design:paramtypes", [])
], SimplePageComponent);

//# sourceMappingURL=simple-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/simple-page/simple-page.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePageModule", function() { return SimplePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__simple_page_component__ = __webpack_require__("../../../../../src/app/simple-page/simple-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__simple_page_routing__ = __webpack_require__("../../../../../src/app/simple-page/simple-page.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SimplePageModule = (function () {
    function SimplePageModule() {
    }
    return SimplePageModule;
}());
SimplePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__simple_page_routing__["a" /* SimplePageRoutes */]),
            __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__simple_page_component__["a" /* SimplePageComponent */]]
    })
], SimplePageModule);

//# sourceMappingURL=simple-page.module.js.map

/***/ }),

/***/ "../../../../../src/app/simple-page/simple-page.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimplePageRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__simple_page_component__ = __webpack_require__("../../../../../src/app/simple-page/simple-page.component.ts");

var SimplePageRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__simple_page_component__["a" /* SimplePageComponent */],
        data: {
            breadcrumb: 'Blank Page'
        }
    }];
//# sourceMappingURL=simple-page.routing.js.map

/***/ })

});
//# sourceMappingURL=simple-page.module.chunk.js.map