webpackJsonp(["map.module"],{

/***/ "../../../../../src/app/map/google/google.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <app-card [title]=\"'Basic Map'\" [classHeader]=\"true\">\n      <span class=\"code-header\">use property <code>latitude, longitude</code> with <code>agm-map</code> element</span>\n      <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\"></agm-map>\n    </app-card>\n  </div>\n  <div class=\"col-sm-6\">\n    <app-card [title]=\"'Markers Map'\" [classHeader]=\"true\">\n      <span class=\"code-header\">use element <code>agm-marker</code> with <code>agm-map</code> element</span>\n      <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"6\">\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n        <agm-marker [latitude]=\"latA\" [longitude]=\"lngA\"></agm-marker>\n        <agm-marker [latitude]=\"21.6776887\" [longitude]=\"71.566261\"></agm-marker>\n        <agm-marker [latitude]=\"22.3220876\" [longitude]=\"73.1030464\"></agm-marker>\n        <agm-marker [latitude]=\"23.0201818\" [longitude]=\"72.4396587\"></agm-marker>\n        <agm-marker [latitude]=\"22.2734719\" [longitude]=\"70.7512565\"></agm-marker>\n      </agm-map>\n    </app-card>\n  </div>\n  <div class=\"col-sm-6\">\n    <app-card [title]=\"'Styled Map'\" [classHeader]=\"true\">\n      <span class=\"code-header\">use property <code>styles</code> with <code>agm-map</code> element</span>\n      <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [styles]=\"styles\"></agm-map>\n    </app-card>\n  </div>\n  <div class=\"col-sm-6\">\n    <app-card [title]=\"'Polylines'\" [classHeader]=\"true\">\n      <span class=\"code-header\">use property <code>styles</code> with <code>agm-map</code> element</span>\n      <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n        <agm-marker [latitude]=\"latA\" [longitude]=\"lngA\"></agm-marker>\n        <agm-polyline>\n          <agm-polyline-point [latitude]=\"lat\" [longitude]=\"lng\">\n          </agm-polyline-point>\n          <agm-polyline-point [latitude]=\"latA\" [longitude]=\"lngA\">\n          </agm-polyline-point>\n        </agm-polyline>\n      </agm-map>\n    </app-card>\n  </div>\n  <div class=\"col-sm-6\">\n    <app-card [title]=\"'Info Window'\" [classHeader]=\"true\">\n      <span class=\"code-header\">use property <code>styles</code> with <code>agm-map</code> element</span>\n      <agm-map [latitude]=\"21.6776887\" [longitude]=\"71.566261\" [zoom]=\"zoom\" [disableDefaultUI]=\"false\" [zoomControl]=\"false\">\n        <agm-marker [latitude]=\"21.6776887\" [longitude]=\"71.566261\">\n          <agm-info-window>Nice Place</agm-info-window>\n        </agm-marker>\n      </agm-map>\n    </app-card>\n  </div>\n  <div class=\"col-sm-6\">\n    <app-card [title]=\"'Circle'\" [classHeader]=\"true\">\n      <span class=\"code-header\">use property <code>styles</code> with <code>agm-map</code> element</span>\n      <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n        <agm-circle\n                [latitude]=\"lat + 0.3\"\n                [longitude]=\"lng\"\n                [radius]=\"50000\"\n                [fillColor]=\"'red'\"\n                [circleDraggable]=\"true\"\n                [editable]=\"true\"\n        >\n\n        </agm-circle>\n      </agm-map>\n    </app-card>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/map/google/google.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleComponent; });
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

var GoogleComponent = (function () {
    function GoogleComponent() {
        this.lat = 21.1591857;
        this.lng = 72.7522563;
        this.latA = 21.7613308;
        this.lngA = 71.6753074;
        this.zoom = 8;
        this.styles = [{
                featureType: 'all',
                stylers: [{
                        saturation: -80
                    }]
            }, {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{
                        hue: '#00ffee'
                    }, {
                        saturation: 50
                    }]
            }, {
                featureType: 'poi.business',
                elementType: 'labels',
                stylers: [{
                        visibility: 'off'
                    }]
            }];
    }
    GoogleComponent.prototype.ngOnInit = function () {
    };
    return GoogleComponent;
}());
GoogleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-google',
        template: __webpack_require__("../../../../../src/app/map/google/google.component.html")
    }),
    __metadata("design:paramtypes", [])
], GoogleComponent);

//# sourceMappingURL=google.component.js.map

/***/ }),

/***/ "../../../../../src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
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

var MapComponent = (function () {
    function MapComponent() {
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    return MapComponent;
}());
MapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-map',
        template: '<router-outlet><spinner></spinner></router-outlet>'
    }),
    __metadata("design:paramtypes", [])
], MapComponent);

//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/map/map.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModule", function() { return MapModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_component__ = __webpack_require__("../../../../../src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__google_google_component__ = __webpack_require__("../../../../../src/app/map/google/google.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__map_routing__ = __webpack_require__("../../../../../src/app/map/map.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MapModule = (function () {
    function MapModule() {
    }
    return MapModule;
}());
MapModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__map_routing__["a" /* MapRoutes */]),
            __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__map_component__["a" /* MapComponent */], __WEBPACK_IMPORTED_MODULE_3__google_google_component__["a" /* GoogleComponent */]]
    })
], MapModule);

//# sourceMappingURL=map.module.js.map

/***/ }),

/***/ "../../../../../src/app/map/map.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__google_google_component__ = __webpack_require__("../../../../../src/app/map/google/google.component.ts");

var MapRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__google_google_component__["a" /* GoogleComponent */],
        data: {
            breadcrumb: 'Map',
            status: false
        }
    }
];
//# sourceMappingURL=map.routing.js.map

/***/ })

});
//# sourceMappingURL=map.module.chunk.js.map