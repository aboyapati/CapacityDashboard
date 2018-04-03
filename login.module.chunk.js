webpackJsonp(["login.module"],{

/***/ "../../../../../src/app/authentication/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__with_social_with_social_component__ = __webpack_require__("../../../../../src/app/authentication/login/with-social/with-social.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_routing__ = __webpack_require__("../../../../../src/app/authentication/login/login.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__login_routing__["a" /* LoginRoutes */]),
            __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__with_social_with_social_component__["a" /* WithSocialComponent */]]
    })
], LoginModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/login/login.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__with_social_with_social_component__ = __webpack_require__("../../../../../src/app/authentication/login/with-social/with-social.component.ts");

var LoginRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__with_social_with_social_component__["a" /* WithSocialComponent */],
        data: {
            breadcrumb: 'Login'
        }
    }
];
//# sourceMappingURL=login.routing.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/login/with-social/with-social.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rsdLoginBg {\r\n    background-size: cover;\r\n  }\r\n\r\n  .rsdSignIn {\r\n    text-align: center;\r\n    color: #5e6977;\r\n    font-family: \"Open Sans\", Semibold;\r\n    padding-bottom: 3%;\r\n\tfont-size: 20px;\r\n  }\r\n\r\n  .rsdRememberMe {\r\n    font-family: \"Open Sans\", Regular;\r\n    color: #5e6977;\r\n    text-align: center;\r\n  }\r\n\r\n  .rsdForgotPassword {\r\n    font-family: \"Open Sans\", Regular;\r\n    color: #41a1df;\r\n    text-align: center;\r\n  }\r\n\r\n  .rsdCheckBox {\r\n    border-radius: 7px;\r\n    background-color: rgb(225, 232, 238);\r\n    position: absolute;\r\n    /*left: 3072px;\r\n    top: 1046px;*/\r\n    width: 25px;\r\n    height: 25px;\r\n    z-index: 93;\r\n\tcursor:pointer;\r\n  }\r\n  \r\n  .checkbox_container {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\tcursor: pointer;\r\n\tfont-size: 18px;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n  }\r\n  \r\n  .checkbox_container input {\r\n\tposition: absolute;\r\n\topacity: 0;\r\n\tcursor: pointer;\r\n  }\r\n  \r\n  .checkbox_container:hover input ~ .rsdCheckBox {\r\n    background-color: #ccc;\r\n  }\r\n  \r\n  .rsdCheckBox:after {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\tdisplay: none;\r\n  }\r\n  \r\n  .checkbox_container input:checked ~ .rsdCheckBox:after {\r\n    display: block;\r\n  }\r\n  \r\n  .checkbox_container .rsdCheckBox:after {\r\n\tleft: 10px;\r\n\ttop: 4px;\r\n\twidth: 5px;\r\n\theight: 15px;\r\n\tborder: solid #9f9d9d;\r\n\tborder-width: 0 3px 3px 0;\r\n\t-webkit-transform: rotate(45deg);\r\n\ttransform: rotate(45deg);\r\n  }\r\n\r\n  .rsdDisclaimer {\r\n    font-size: 12px;\r\n    font-family: \"Titillium Web\";\r\n    color: rgb(14, 35, 70);\r\n    line-height: 1.167;\r\n    text-align: left;\r\n  }\r\n\r\n  .rsdInputField {\r\n    border-top-right-radius: 6px !important;;\r\n    border-bottom-right-radius: 6px !important;;\r\n  }\r\n\r\n  .rsdLoginButton {\r\n    border-radius: 7px;\r\n    background-color: rgb(32, 60, 102);\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/login/with-social/with-social.component.html":
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"loading_status; else loading_div\" class=\"login p-fixed d-flex text-center bg-primary common-img-bg rsdLoginBg\">\r\n  <!-- starts -->\r\n  <div class=\"auth-fluid\">\r\n    <div class=\"row\" style=\"display:block;\">\r\n      <div class=\"col-sm-12\">\r\n        <!-- Authentication card start -->\r\n        <div class=\"login-card card-body auth-body\">\r\n          <form (submit)=\"verifyLogin($event)\" class=\"md-float-material\">\r\n            <div class=\"text-center\">\r\n              <img src=\"assets/images/logo_1.png\" alt=\"logo.png\">\r\n            </div>\r\n            <div class=\"auth-box\">\r\n              <div class=\"rsdSignIn\">SIGN IN</div>\r\n              <p class=\"text-inverse b-b-default text-left p-b-5\"></p>\r\n\r\n              <style>\r\n                  .rsdAlert {\r\n                      display: none;\r\n                      color: white;\r\n                      padding: 10px 10px;\r\n                      margin-bottom: 10px;\r\n                      text-align: center;\r\n                      font-size: 16px;\r\n                  }\r\n              </style>\r\n              <div class=\"rsdAlert\"></div>\r\n              <div style=\"color:#868e96;padding-bottom:4%;font-size:15px;\">\r\n                Welcome to\r\n                <span style=\"color:red;\">on</span><span style=\"color: black;\">POINT</span>\r\n              </div>\r\n\r\n\r\n              <div class=\"input-group\">\r\n                <span style=\"background-color: white;\" class=\"input-group-addon\">\r\n                  <img width=\"14\" height=\"16\" src=\"assets/images/icon_user.png\">\r\n                </span>\r\n                <input type=\"email\" class=\"form-control rsdInputField\" placeholder=\"Login ID\">\r\n                <span class=\"md-line\"></span>\r\n              </div>\r\n              <div class=\"input-group\">\r\n                <span style=\"background-color: white;\" class=\"input-group-addon\">\r\n                  <img width=\"14\" height=\"16\" src=\"assets/images/lock_user.png\">\r\n                </span>\r\n                <input type=\"password\" class=\"form-control rsdInputField\" placeholder=\"Password\">\r\n                <span class=\"md-line\"></span>\r\n              </div>\r\n              <div class=\"row m-t-25 text-left\">\r\n                <div class=\"col-sm-6 col-xs-12\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label class=\"checkbox_container\">\r\n\t\t\t\t\t  <input class=\"rsdCheckBox\" type=\"checkbox\" value=\"\">\r\n                      <span class=\"rsdCheckBox\"></span>\r\n                      <span class=\"rsdRememberMe\" style=\"font-size:15px;margin-left:35px;\">Remember me</span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-6 col-xs-12 forgot-phone text-right\">\r\n                  <a [routerLink]=\"['']\" class=\"rsdForgotPassword\"> I forgot my password</a>\r\n                </div>\r\n              </div>\r\n              <div class=\"row m-t-30\">\r\n                <div class=\"col-md-12\">\r\n                  <button type=\"submit\" class=\"rsdLoginButton btn btn-primary btn-md btn-block waves-effect text-center m-b-20\">Login</button>\r\n                </div>\r\n              </div>\r\n              <div class=\"rsdDisclaimer\">\r\n                By clicking Login, I agree to the\r\n                <b><i>Privacy and Acceptable Use Policy</i></b><br /> and\r\n                <b><i>Terms and Conditions.</i></b>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n\t  \r\n\t  <p class=\"\" style=\"color:#5d858d;text-align:center;clear:both;margin:0 auto;\">\r\n\t\t&#169; 2017 tekvizion PVS inc. All Rights Reserved\r\n\t  </p>\r\n    </div>\r\n  </div>\r\n</section>\r\n<ng-template #loading_div>\r\n  <style type=\"text/css\">\r\n    #content {\r\n      width: 100%;\r\n      height: 1px;\r\n      background: #283c41;\r\n    }\r\n  \r\n    .fullwidth .expand {\r\n      width: 100%;\r\n      height: 1px;\r\n      background: #2187e7;\r\n      position: absolute;\r\n      box-shadow: 0px 0px 10px 1px rgba(0, 198, 255, 0.7);\r\n      -moz-animation: fullexpand 5s;\r\n      -webkit-animation: fullexpand 5s;\r\n    }\r\n  \r\n    @-moz-keyframes fullexpand {\r\n      0% {\r\n        width: 0px;\r\n      }\r\n      100% {\r\n        width: 100%;\r\n      }\r\n    }\r\n  \r\n    @-webkit-keyframes fullexpand {\r\n      0% {\r\n        width: 0px;\r\n      }\r\n      100% {\r\n        width: 100%;\r\n      }\r\n    }\r\n  \r\n    .rsdLoginBg {\r\n      background-size: cover;\r\n    }\r\n  \r\n    .loadingLogo {\r\n      position: absolute;\r\n      top: 40%;\r\n      width: 100%;\r\n    }\r\n  \r\n    .loadingPercentage {\r\n      position: absolute;\r\n      top: 52%;\r\n      width: 100%;\r\n    }\r\n  \r\n    @media screen and (max-width: 400px) {\r\n      .content {\r\n        padding-top: 14px;\r\n      }\r\n    }\r\n  \r\n    #counter_percent {\r\n      font-family: \"Open Sans\", Light;\r\n    }\r\n  \r\n    #loading {\r\n      color: #5d858d;\r\n      font-size: 14px;\r\n      font-family: \"Open Sans\", Regular;\r\n    }\r\n  </style>\r\n  \r\n  <section class=\"login p-fixed d-flex bg-primary common-img-bg rsdLoginBg\">\r\n    <div class=\"text-center loadingLogo\">\r\n      <img src=\"assets/images/logo_1.png\" alt=\"Logo\">\r\n    </div>\r\n    <div id=\"content\" class=\"fullwidth\">\r\n      <div class=\"expand\"></div>\r\n    </div>\r\n    <div class=\"loadingPercentage text-center\" style=\"font-size:25px;\">\r\n      <span id=\"counter_percent\">0</span>%\r\n      <br>\r\n      <span id=\"loading\">Loading...</span>\r\n    </div>\r\n    <p class=\"\" style=\"color:#5d858d;text-align:center;clear:both;margin:0 auto;right:0%;top:80%;position:absolute;width:100%;\">\r\n      &#169; 2017 tekvizion PVS inc. All Rights Reserved\r\n    </p>\r\n  </section>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/authentication/login/with-social/with-social.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithSocialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_service__ = __webpack_require__("../../../../../src/app/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WithSocialComponent = (function () {
    function WithSocialComponent(router, cookieService, config) {
        this.router = router;
        this.cookieService = cookieService;
        this.config = config;
        this.login_status = false;
        this.loading_status = false;
    }
    WithSocialComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logout_clicked = this.cookieService.get('logout_clicked');
        if (this.logout_clicked == 'yes') {
            this.loading_status = true;
            this.cookieService.set('logout_clicked', 'no');
        }
        var i = 1;
        function myLoop() {
            if (i < 51) {
                setTimeout(function () {
                    $('#counter_percent').html(i);
                    i++;
                    if (i < 101) {
                        myLoop();
                    }
                }, 30);
            }
            if (i > 50) {
                setTimeout(function () {
                    $('#counter_percent').html(i);
                    i++;
                    if (i < 101) {
                        myLoop();
                    }
                }, 60);
            }
        }
        myLoop();
        setTimeout(function () {
            _this.loading_status = true;
        }, 9500);
        $('#content').removeClass('fullwidth').delay(9).queue(function (next) {
            $(this).addClass('fullwidth');
            next();
        });
    };
    WithSocialComponent.prototype.verifyLogin = function (e) {
        var _this = this;
        var username = e.target.elements[0].value;
        var password = e.target.elements[1].value;
        setTimeout(function () {
            _this.config.verifyLogin(username, password).subscribe(function (res) {
                if (res.status == 1) {
                    _this.login_status = true;
                    _this.router.navigate(['dashboard']);
                }
                else {
                    $('.rsdAlert').slideDown().text('Invalid Username or Password').css('background', 'red').slideUp(2000);
                }
            });
        }, 100);
    };
    return WithSocialComponent;
}());
WithSocialComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-with-social',
        template: __webpack_require__("../../../../../src/app/authentication/login/with-social/with-social.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authentication/login/with-social/with-social.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__config_service__["a" /* ConfigService */]) === "function" && _c || Object])
], WithSocialComponent);

var _a, _b, _c;
//# sourceMappingURL=with-social.component.js.map

/***/ })

});
//# sourceMappingURL=login.module.chunk.js.map