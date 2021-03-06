webpackJsonp(["advance.module"],{

/***/ "../../../../../src/app/components/advance/advance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvanceComponent; });
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

var AdvanceComponent = (function () {
    function AdvanceComponent() {
    }
    AdvanceComponent.prototype.ngOnInit = function () {
    };
    return AdvanceComponent;
}());
AdvanceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-advance',
        template: '<router-outlet><spinner></spinner></router-outlet>'
    }),
    __metadata("design:paramtypes", [])
], AdvanceComponent);

//# sourceMappingURL=advance.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/advance/advance.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceModule", function() { return AdvanceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__advance_component__ = __webpack_require__("../../../../../src/app/components/advance/advance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__advance_routing__ = __webpack_require__("../../../../../src/app/components/advance/advance.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notifications_notifications_component__ = __webpack_require__("../../../../../src/app/components/advance/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AdvanceModule = (function () {
    function AdvanceModule() {
    }
    return AdvanceModule;
}());
AdvanceModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__advance_routing__["a" /* AdvanceRoutes */]),
            __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__advance_component__["a" /* AdvanceComponent */],
            __WEBPACK_IMPORTED_MODULE_5__notifications_notifications_component__["a" /* NotificationsComponent */]
        ]
    })
], AdvanceModule);

//# sourceMappingURL=advance.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/advance/advance.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvanceRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_notifications_component__ = __webpack_require__("../../../../../src/app/components/advance/notifications/notifications.component.ts");

var AdvanceRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__notifications_notifications_component__["a" /* NotificationsComponent */],
        data: {
            breadcrumb: 'Notifications',
            status: true
        }
    }
];
//# sourceMappingURL=advance.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/advance/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"button-page\">\n    <div class=\"row\">\n        <!-- bootstrap modal start -->\n        <div class=\"col-sm-12\">\n            <!-- Notification card start -->\n            <app-card [title]=\"'Notifications'\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"sub-title\">Notification Position</div>\n                        <p>This plugin has layout options where you can display it in any corner of the screen, simply click one layout corners and press the buttons on the other section to see the magic</p>\n                        <div class=\"location-selector\">\n                            <div class=\"bit top left\" data-position=\"top left\"></div>\n                            <div class=\"bit top right\" data-position=\"top right\"></div>\n                            <div class=\"bit top\" data-position=\"top\"></div>\n                            <div class=\"bit bottom left\" data-position=\"bottom left\"></div>\n                            <div class=\"bit bottom right\" data-position=\"bottom right\"></div>\n                            <div class=\"bit bottom\" data-position=\"bottom\"></div>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <div class=\"sub-title\">Notification Position</div>\n                        <p>Notification All Options : <code> (click) with option, title, msg, showClose, timeout, position, theme, type</code></p>\n                        <ul class=\"notifications\">\n                            <li>\n                                <button class=\"btn btn-primary waves-effect\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', showClose: true, timeout: 5000, theme:'bootstrap', type:'wait', position:'top-left', closeOther:true})\">Top Left</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-primary waves-effect\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', showClose: true, timeout: 5000, theme:'bootstrap', type:'wait', position:'top-right', closeOther:true})\">Top Right</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-primary waves-effect\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', showClose: true, timeout: 5000, theme:'bootstrap', type:'wait', position:'top-center', closeOther:true})\">Top Center</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-primary waves-effect\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', showClose: true, timeout: 5000, theme:'bootstrap', type:'wait', position:'bottom-left', closeOther:true})\">Bottom Left</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-primary waves-effect\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', showClose: true, timeout: 5000, theme:'bootstrap', type:'wait', position:'bottom-right', closeOther:true})\">Bottom Right</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-primary waves-effect\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', showClose: true, timeout: 5000, theme:'bootstrap', type:'wait', position:'bottom-center', closeOther:true})\">Bottom Center</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-primary waves-effect\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', showClose: true, timeout: 5000, theme:'bootstrap', type:'wait', position:'center-center', closeOther:true})\">Center Center</button>\n                            </li>\n                        </ul>\n                        <div class=\"sub-title\">Notification Default</div>\n                        <p>Change data-type : <code> theme=\"default\"</code> to change notification color</p>\n                        <ul class=\"notifications\">\n                            <li>\n                                <button class=\"btn btn-inverse waves-effect\" (click)=\"addToast({title:'Default Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'default', position:'bottom-right', type:'default'})\">Default</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-info waves-effect\" (click)=\"addToast({title:'Default Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'default', position:'bottom-right', type:'info'})\">Info</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-success waves-effect\" (click)=\"addToast({title:'Default Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'default', position:'bottom-right', type:'success'})\">Success</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-primary waves-effect\" (click)=\"addToast({title:'Default Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'default', position:'bottom-right', type:'wait'})\">Primary/Wait</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-warning waves-effect\" (click)=\"addToast({title:'Default Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'default', position:'bottom-right', type:'warning'})\">Warning</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-danger waves-effect\" (click)=\"addToast({title:'Default Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'default', position:'bottom-right', type:'error'})\">Danger/Error</button>\n                            </li>\n                        </ul>\n                        <div class=\"sub-title\">Notification Bootstrap</div>\n                        <p>Change data-type : <code> theme=\"bootstrap\"</code> to change notification color</p>\n                        <ul class=\"notifications\">\n                            <li>\n                                <button class=\"btn btn-inverse waves-effect\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'bootstrap', position:'bottom-right', type:'default'})\">Default</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-info waves-effect\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'bootstrap', position:'bottom-right', type:'info'})\">Info</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-success waves-effect\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'bootstrap', position:'bottom-right', type:'success'})\">Success</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-primary waves-effect\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'bootstrap', position:'bottom-right', type:'wait'})\">Primary/Wait</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-warning waves-effect\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'bootstrap', position:'bottom-right', type:'warning'})\">Warning</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-danger waves-effect\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'bootstrap', position:'bottom-right', type:'error'})\">Danger/Error</button>\n                            </li>\n                        </ul>\n                        <div class=\"sub-title\">Notification Material</div>\n                        <p>Change data-type : <code> theme=\"bootstrap\"</code> to change notification color</p>\n                        <ul class=\"notifications\">\n                            <li>\n                                <button class=\"btn btn-inverse waves-effect\" (click)=\"addToast({title:'Material Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'material', position:'bottom-right', type:'default'})\">Default</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-info waves-effect\" (click)=\"addToast({title:'Material Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'material', position:'bottom-right', type:'info'})\">Info</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-success waves-effect\" (click)=\"addToast({title:'Material Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'material', position:'bottom-right', type:'success'})\">Success</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-primary waves-effect\" (click)=\"addToast({title:'Material Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'material', position:'bottom-right', type:'wait'})\">Primary/Wait</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-warning waves-effect\" (click)=\"addToast({title:'Material Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'material', position:'bottom-right', type:'warning'})\">Warning</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-danger waves-effect\" (click)=\"addToast({title:'Material Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'material', position:'bottom-right', type:'error'})\">Danger/Error</button>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </app-card>\n            <!-- Notification card end -->\n        </div>\n        <!-- Bootstrap modal end -->\n    </div>\n</div>\n<ng2-toasty [position]=\"position\"></ng2-toasty>"

/***/ }),

/***/ "../../../../../src/app/components/advance/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsComponent = (function () {
    function NotificationsComponent(toastyService) {
        this.toastyService = toastyService;
        this.position = 'bottom-right';
        this.showClose = true;
        this.timeout = 5000;
        this.theme = 'bootstrap';
        this.type = 'default';
        this.closeOther = false;
    }
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent.prototype.addToast = function (options) {
        if (options.closeOther) {
            this.toastyService.clearAll();
        }
        this.position = options.position ? options.position : this.position;
        var toastOptions = {
            title: options.title,
            msg: options.msg,
            showClose: options.showClose,
            timeout: options.timeout,
            theme: options.theme,
            onAdd: function (toast) {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function (toast) {
                console.log('Toast ' + toast.id + ' has been added removed!');
            }
        };
        switch (options.type) {
            case 'default':
                this.toastyService.default(toastOptions);
                break;
            case 'info':
                this.toastyService.info(toastOptions);
                break;
            case 'success':
                this.toastyService.success(toastOptions);
                break;
            case 'wait':
                this.toastyService.wait(toastOptions);
                break;
            case 'error':
                this.toastyService.error(toastOptions);
                break;
            case 'warning':
                this.toastyService.warning(toastOptions);
                break;
        }
    };
    return NotificationsComponent;
}());
NotificationsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-notifications',
        template: __webpack_require__("../../../../../src/app/components/advance/notifications/notifications.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__["b" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__["b" /* ToastyService */]) === "function" && _a || Object])
], NotificationsComponent);

var _a;
//# sourceMappingURL=notifications.component.js.map

/***/ })

});
//# sourceMappingURL=advance.module.chunk.js.map