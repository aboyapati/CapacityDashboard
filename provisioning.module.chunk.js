webpackJsonp(["provisioning.module"],{

/***/ "../../../../../src/app/provisioning/addnewcomponent/addnewcomponent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/assets/bootzard/css/form-elements.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/assets/bootzard/css/style.css"), "");

// module
exports.push([module.i, ".header_title {\r\n    text-align:left;\r\n    font-size: 38px;\r\n    font-weight: bold;\r\n    color: #3d4657;\r\n}\r\n.top-content {\r\n    padding-bottom: 0px !important;\r\n    padding-top: 0px !important;\r\n}\r\n.container {\r\n    margin-top: 0px !important;\r\n    margin-bottom: 0px !important;\r\n    padding-left: 0px !important;\r\n    padding-right: 0px !important;\r\n    padding-top: 0px !important;\r\n}\r\n.save_btn, .btn-edit {\r\n\tpadding-right: 40px;\r\n\tpadding-left: 40px;\r\n\tborder-radius: 5px;\r\n}\r\n.btn-primary {\r\n  background-color: #203c66;\r\n  border-color: #203c66;\r\n  font-weight: 600;\r\n}\r\n.btn-primary:hover {\r\nbackground-color: #203c66bf;\r\nborder-color: #203c66bf !important;\r\n}\r\n.form-box {\r\n  padding-top: 0px !important;\r\n}\r\n.modal-text-p {\r\n  color: #808080;\r\n  text-align: center;\r\n\tfont-family: \"Open Sans\", Bold;\r\n\tfont-size: 15px;\r\n  padding-top: 12px;\r\n}\r\n.modal-text-h3 {\r\n  color: #808080;\r\n  text-align: center;\r\n  font-weight: 400;\r\n  text-transform: unset !important;\r\n  padding-bottom: 75px;\r\n  padding-top: 75px;\r\n}\r\n.form-group-small {\r\n  margin-top: 0px !important;\r\n  margin-bottom: 0px !important;\r\n  width: 50px !important;\r\n  /* margin-right: 50px !important; */\r\n}\r\ntable tr td {\r\n  color: #808080;\r\n\tfont-family: \"Open Sans\", Bold;\r\n  font-size: 12px;\r\n  font-weight: 400;\r\n  padding-top: 0px;\r\n  padding-bottom: 0px;\r\n  vertical-align: bottom;\r\n}\r\n\r\n@media only screen \r\nand (max-device-width : 767px) {\r\n  .modal-buttons {\r\n    text-align: center !important;\r\n    padding-top: 5px;\r\n  }\r\n  .save_btn {\r\n    padding-left: 50px !important;\r\n    padding-right: 50px !important;\r\n  }\r\n  .btn-edit-cancel {\r\n    padding-left: 100px !important;\r\n    padding-right: 100px !important;\r\n  }\r\n  .btn-edit-save {\r\n    padding-left: 107px !important;\r\n    padding-right: 107px !important;\r\n  }\r\n}\r\n@media only screen \r\nand (min-device-width : 320px) \r\nand (max-device-width : 568px) { \r\n  .btn-edit-cancel {\r\n    padding-left: 80px !important;\r\n    padding-right: 80px !important;\r\n  }\r\n  .btn-edit-save {\r\n    padding-left: 87px !important;\r\n    padding-right: 87px !important;\r\n  }\r\n}\r\n.table-responsive {\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n}\r\n.btn-add-data{\r\n  height: 34px !important;\r\n  border-radius: 2px !important;\r\n  font-weight: 600 !important;\r\n  border: 1px solid transparent !important;\r\n  padding: 8px 14px !important;\r\n  line-height: 16px !important;\r\n  font-size: 11px !important;\r\n  font-family: 'Open Sans' !important;\r\n}\r\n\r\n\r\n\r\n\r\n \r\nbody {\r\n    background-image: linear-gradient(to bottom, #f2f2f2, #e6e6e6);\r\n  }\r\n  \r\n  h1 {\r\n    font-size: 2rem;\r\n    text-align: center;\r\n    margin: 0 0 2em;\r\n  }\r\n  h1 small {\r\n    font-size: 50%;\r\n    color: #666;\r\n    display: block;\r\n  }\r\n  \r\n  .container {\r\n    position: relative;\r\n    max-width: 40rem;\r\n    margin: 5rem auto;\r\n    background: #fff;\r\n    width: 100%;\r\n    padding: 3rem 5rem 0;\r\n    border-radius: 1px;\r\n  }\r\n  .container::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);\r\n    -webkit-transform: scale(0.98);\r\n            transform: scale(0.98);\r\n    transition: -webkit-transform 0.28s ease-in-out;\r\n    transition: transform 0.28s ease-in-out;\r\n    transition: transform 0.28s ease-in-out, -webkit-transform 0.28s ease-in-out;\r\n    z-index: -1;\r\n  }\r\n  .container:hover::before {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n  }\r\n  \r\n  .button-container {\r\n    text-align: center;\r\n  }\r\n  \r\n  fieldset {\r\n    margin: 0 0 3rem;\r\n    padding: 0;\r\n    border: none;\r\n  }\r\n  \r\n  .form-radio,\r\n  .form-group {\r\n    position: relative;\r\n    margin-top: 2.25rem;\r\n    margin-bottom: 2.25rem;\r\n  }\r\n  \r\n  .form-inline > .form-group,\r\n  .form-inline > .btn {\r\n    display: inline-block;\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  .form-help {\r\n    margin-top: 0.125rem;\r\n    margin-left: 0.125rem;\r\n    color: #b3b3b3;\r\n    font-size: 0.8rem;\r\n  }\r\n  .checkbox .form-help, .form-radio .form-help, .form-group .form-help {\r\n    position: absolute;\r\n    width: 100%;\r\n  }\r\n  .checkbox .form-help {\r\n    position: relative;\r\n    margin-bottom: 1rem;\r\n  }\r\n  .form-radio .form-help {\r\n    padding-top: 0.25rem;\r\n    margin-top: -1rem;\r\n  }\r\n  \r\n  .form-group input {\r\n    height: 1.9rem;\r\n  }\r\n  .form-group textarea {\r\n    resize: none;\r\n  }\r\n  .form-group select {\r\n    width: 100%;\r\n    font-size: 1rem;\r\n    height: 1.6rem;\r\n    padding: 0.125rem 0.125rem 0.0625rem;\r\n    background: none;\r\n    border: none;\r\n    line-height: 1.6;\r\n    box-shadow: none;\r\n  }\r\n  .form-group .control-label {\r\n    position: absolute;\r\n    top: 0.25rem;\r\n    pointer-events: none;\r\n    padding-left: 0.125rem;\r\n    z-index: 1;\r\n    color: #b3b3b3;\r\n    font-size: 1rem;\r\n    font-weight: normal;\r\n    transition: all 0.28s ease;\r\n  }\r\n  .form-group .bar {\r\n    position: relative;\r\n    border-bottom: 0.0625rem solid #999;\r\n    display: block;\r\n  }\r\n  .form-group .bar::before {\r\n    content: '';\r\n    height: 0.125rem;\r\n    width: 0;\r\n    left: 50%;\r\n    bottom: -0.0625rem;\r\n    position: absolute;\r\n    background: #337ab7;\r\n    transition: left 0.28s ease, width 0.28s ease;\r\n    z-index: 2;\r\n  }\r\n  .form-group input,\r\n  .form-group textarea {\r\n    display: block;\r\n    background: none;\r\n    padding: 0.125rem 0.125rem 0.0625rem;\r\n    font-size: 1rem;\r\n    border-width: 0;\r\n    border-color: transparent;\r\n    line-height: 1.9;\r\n    width: 100%;\r\n    color: transparent;\r\n    transition: all 0.28s ease;\r\n    box-shadow: none;\r\n  }\r\n  .form-group input[type=\"file\"] {\r\n    line-height: 1;\r\n  }\r\n  .form-group input[type=\"file\"] ~ .bar {\r\n    display: none;\r\n  }\r\n  .form-group select,\r\n  .form-group input:focus,\r\n  .form-group input:valid,\r\n  .form-group input.form-file,\r\n  .form-group input.has-value,\r\n  .form-group textarea:focus,\r\n  .form-group textarea:valid,\r\n  .form-group textarea.form-file,\r\n  .form-group textarea.has-value {\r\n    color: #7b879e;\r\n  }\r\n  .form-group select ~ .control-label,\r\n  .form-group input:focus ~ .control-label,\r\n  .form-group input:valid ~ .control-label,\r\n  .form-group input.form-file ~ .control-label,\r\n  .form-group input.has-value ~ .control-label,\r\n  .form-group textarea:focus ~ .control-label,\r\n  .form-group textarea:valid ~ .control-label,\r\n  .form-group textarea.form-file ~ .control-label,\r\n  .form-group textarea.has-value ~ .control-label {\r\n    font-size: 0.8rem;\r\n    color: gray;\r\n    top: -1rem;\r\n    left: 0;\r\n  }\r\n  .form-group select:focus,\r\n  .form-group input:focus,\r\n  .form-group textarea:focus {\r\n    outline: none;\r\n  }\r\n  .form-group select:focus ~ .control-label,\r\n  .form-group input:focus ~ .control-label,\r\n  .form-group textarea:focus ~ .control-label {\r\n    color: #337ab7;\r\n  }\r\n  .form-group select:focus ~ .bar::before,\r\n  .form-group input:focus ~ .bar::before,\r\n  .form-group textarea:focus ~ .bar::before {\r\n    width: 100%;\r\n    left: 0;\r\n  }\r\n  \r\n  .checkbox label,\r\n  .form-radio label {\r\n    position: relative;\r\n    cursor: pointer;\r\n    padding-left: 2rem;\r\n    text-align: left;\r\n    color: #333;\r\n    display: block;\r\n  }\r\n  .checkbox input,\r\n  .form-radio input {\r\n    width: auto;\r\n    opacity: 0.00000001;\r\n    position: absolute;\r\n    left: 0;\r\n  }\r\n  \r\n  .radio {\r\n    margin-bottom: 1rem;\r\n  }\r\n  .radio .helper {\r\n    position: absolute;\r\n    top: -0.25rem;\r\n    left: -0.25rem;\r\n    cursor: pointer;\r\n    display: block;\r\n    font-size: 1rem;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    color: #999;\r\n  }\r\n  .radio .helper::before, .radio .helper::after {\r\n    content: '';\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    margin: 0.25rem;\r\n    width: 1rem;\r\n    height: 1rem;\r\n    transition: -webkit-transform 0.28s ease;\r\n    transition: transform 0.28s ease;\r\n    transition: transform 0.28s ease, -webkit-transform 0.28s ease;\r\n    border-radius: 50%;\r\n    border: 0.125rem solid currentColor;\r\n  }\r\n  .radio .helper::after {\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n    background-color: #337ab7;\r\n    border-color: #337ab7;\r\n  }\r\n  .radio label:hover .helper {\r\n    color: #337ab7;\r\n  }\r\n  .radio input:checked ~ .helper::after {\r\n    -webkit-transform: scale(0.5);\r\n            transform: scale(0.5);\r\n  }\r\n  .radio input:checked ~ .helper::before {\r\n    color: #337ab7;\r\n  }\r\n  \r\n  .checkbox {\r\n    margin-top: 3rem;\r\n    margin-bottom: 1rem;\r\n  }\r\n  .checkbox .helper {\r\n    color: #999;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 1rem;\r\n    height: 1rem;\r\n    z-index: 0;\r\n    border: 0.125rem solid currentColor;\r\n    border-radius: 0.0625rem;\r\n    transition: border-color 0.28s ease;\r\n  }\r\n  .checkbox .helper::before, .checkbox .helper::after {\r\n    position: absolute;\r\n    height: 0;\r\n    width: 0.2rem;\r\n    background-color: #337ab7;\r\n    display: block;\r\n    -webkit-transform-origin: left top;\r\n            transform-origin: left top;\r\n    border-radius: 0.25rem;\r\n    content: '';\r\n    transition: opacity 0.28s ease, height 0s linear 0.28s;\r\n    opacity: 0;\r\n  }\r\n  .checkbox .helper::before {\r\n    top: 0.65rem;\r\n    left: 0.38rem;\r\n    -webkit-transform: rotate(-135deg);\r\n            transform: rotate(-135deg);\r\n    box-shadow: 0 0 0 0.0625rem #fff;\r\n  }\r\n  .checkbox .helper::after {\r\n    top: 0.3rem;\r\n    left: 0;\r\n    -webkit-transform: rotate(-45deg);\r\n            transform: rotate(-45deg);\r\n  }\r\n  .checkbox label:hover .helper {\r\n    color: #337ab7;\r\n  }\r\n  .checkbox input:checked ~ .helper {\r\n    color: #337ab7;\r\n  }\r\n  .checkbox input:checked ~ .helper::after, .checkbox input:checked ~ .helper::before {\r\n    opacity: 1;\r\n    transition: height 0.28s ease;\r\n  }\r\n  .checkbox input:checked ~ .helper::after {\r\n    height: 0.5rem;\r\n  }\r\n  .checkbox input:checked ~ .helper::before {\r\n    height: 1.2rem;\r\n    transition-delay: 0.28s;\r\n  }\r\n  \r\n  .radio + .radio,\r\n  .checkbox + .checkbox {\r\n    margin-top: 1rem;\r\n  }\r\n  \r\n  .has-error .legend.legend, .has-error.form-group .control-label.control-label {\r\n    color: #d9534f;\r\n  }\r\n  .has-error.form-group .form-help,\r\n  .has-error.form-group .helper, .has-error.checkbox .form-help,\r\n  .has-error.checkbox .helper, .has-error.radio .form-help,\r\n  .has-error.radio .helper, .has-error.form-radio .form-help,\r\n  .has-error.form-radio .helper {\r\n    color: #d9534f;\r\n  }\r\n  .has-error .bar::before {\r\n    background: #d9534f;\r\n    left: 0;\r\n    width: 100%;\r\n  }\r\n  \r\n  .button {\r\n    position: relative;\r\n    background: currentColor;\r\n    border: 1px solid currentColor;\r\n    font-size: 1.1rem;\r\n    color: #4f93ce;\r\n    margin: 3rem 0;\r\n    padding: 0.75rem 3rem;\r\n    cursor: pointer;\r\n    transition: background-color 0.28s ease, color 0.28s ease, box-shadow 0.28s ease;\r\n    overflow: hidden;\r\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\r\n  }\r\n  .button span {\r\n    color: #fff;\r\n    position: relative;\r\n    z-index: 1;\r\n  }\r\n  .button::before {\r\n    content: '';\r\n    position: absolute;\r\n    background: #071017;\r\n    border: 50vh solid #1d4567;\r\n    width: 30vh;\r\n    height: 30vh;\r\n    border-radius: 50%;\r\n    display: block;\r\n    top: 50%;\r\n    left: 50%;\r\n    z-index: 0;\r\n    opacity: 1;\r\n    -webkit-transform: translate(-50%, -50%) scale(0);\r\n            transform: translate(-50%, -50%) scale(0);\r\n  }\r\n  .button:hover {\r\n    color: #337ab7;\r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  .button:active::before, .button:focus::before {\r\n    transition: opacity 0.28s ease 0.364s, -webkit-transform 1.12s ease;\r\n    transition: transform 1.12s ease, opacity 0.28s ease 0.364s;\r\n    transition: transform 1.12s ease, opacity 0.28s ease 0.364s, -webkit-transform 1.12s ease;\r\n    -webkit-transform: translate(-50%, -50%) scale(1);\r\n            transform: translate(-50%, -50%) scale(1);\r\n    opacity: 0;\r\n  }\r\n  .button:focus {\r\n    outline: none;\r\n  }\r\n  \r\n  .apiMsg {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n  }\r\n  .table td {\r\n  \tborder-top: unset;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/provisioning/addnewcomponent/addnewcomponent.component.html":
/***/ (function(module, exports) {

module.exports = "<div (click)=\"open(rsdcontent)\" title=\"Click to add component\" style=\"float: right;padding: 0px 0px 20px 0px;cursor: pointer;\">\r\n    <div class=\"col-md-4 col-sm-4 btn-top-bar\">\r\n        <button class=\"btn btn-primary btn-sm btn-add-data\">\r\n            <i class=\"fa fa-plus\"></i> Add Component</button>\r\n    </div>\r\n</div>\r\n<ng-template #rsdcontent let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"rsdModal\">\r\n    <div class=\"modal-body\">\r\n\r\n      <div class=\"top-content\">\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <!-- <div class=\"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 form-box\"> -->\r\n            <div class=\"col-sm-12 col-md-12 col-lg-12  form-box\">\r\n              <form class=\"f1\" (submit)=\"addComponent()\">\r\n                <div class=\"form-modal\">\r\n                  <div class=\"header_title\" style=\"text-align: center;\">Add new component</div>\r\n                </div>\r\n                <div class=\"f1-steps\" style=\"text-align: center;\">\r\n                  <div class=\"f1-progress\">\r\n                    <div class=\"f1-progress-line\" data-now-value=\"16.66\" data-number-of-steps=\"3\"></div>\r\n                  </div>\r\n                  <div class=\"f1-step active\">\r\n                    <div class=\"f1-step-icon\">\r\n                      <i class=\"fa fa-check\"></i>\r\n                    </div>\r\n                    <p>Name</p>\r\n                  </div>\r\n                  <div class=\"f1-step\">\r\n                    <div class=\"f1-step-icon\">\r\n                      <i class=\"fa fa-check\"></i>\r\n                    </div>\r\n                    <p>Component Type</p>\r\n                  </div>\r\n                  <div class=\"f1-step\">\r\n                    <div class=\"f1-step-icon\">\r\n                      <i class=\"fa fa-check\"></i>\r\n                    </div>\r\n                    <p>Configuration</p>\r\n                  </div>\r\n                  <div class=\"f1-step\">\r\n                    <div class=\"f1-step-icon\">\r\n                      <i class=\"fa fa-check\"></i>\r\n                    </div>\r\n                    <p>Complete</p>\r\n                  </div>\r\n                </div>\r\n\r\n                <fieldset>\r\n                  <p class=\"modal-text-p\">Please enter component name.</p>\r\n                  <div class=\"row\">\r\n                    <div class=\"offset-md-2 col-md-8\">\r\n                      <div class=\"form-group\">\r\n                        <input type=\"text\" required=\"required\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Name *\" />\r\n                        <i class=\"bar\"></i>\r\n                      </div>\r\n                      <div class=\"col-md-12 form-modal\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-md-6 pull-left modal-buttons\">\r\n                            <button type=\"button\" class=\"btn btn-default btn-edit-cancel\" (click)=\"c('Close click')\">Cancel</button>\r\n                          </div>\r\n                          <div class=\"col-md-6 pull-left modal-buttons\" style=\"text-align: right;\">\r\n                            <button type=\"button\" class=\"btn btn-primary save_btn btn-edit-save\" (click)=\"next($event)\">Next</button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </fieldset>\r\n\r\n                <fieldset>\r\n                  <p class=\"modal-text-p\">Please enter component type, version, and IP address.</p>\r\n                  <div class=\"row\">\r\n                    <div class=\"offset-md-2 col-md-8\">\r\n                      <div class=\"form-group\">\r\n                        <select [(ngModel)]=\"version\" name=\"version\">\r\n                          <option class=\"modal_placeholder\">Type*</option>\r\n                          <option>NEXUS</option>\r\n                          <option>ASA</option>\r\n                          <option>VCENTER</option>\r\n                        </select>\r\n                        <label class=\"control-label\" for=\"select\"></label>\r\n                        <i class=\"bar\"></i>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <select [(ngModel)]=\"subVersion\" name=\"subVersion\">\r\n                          <option class=\"modal_placeholder\">Sub Type*</option>\r\n                          <option>75-K</option>\r\n                          <option>5-1.0</option>\r\n                          <option>5-5.0.0</option>\r\n                        </select>\r\n                        <label class=\"control-label\" for=\"select\"></label>\r\n                        <i class=\"bar\"></i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <p class=\"modal-text-p\">Thresholds</p>\r\n                  <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                      <tr>\r\n                        <td></td>\r\n                        <td>WARNING</td>\r\n                        <td>ALERT</td>\r\n                        <td>MAX</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>VRF *</td>\r\n                        <td>\r\n                          <div class=\"form-group form-group-small\">\r\n                            <input type=\"text\" required=\"required\" [(ngModel)]=\"vrfWarnStart\" name=\"vrfWarnStart\" />\r\n                            <i class=\"bar\"></i>\r\n                          </div>\r\n                        </td>\r\n                        <td>\r\n                          <div class=\"form-group form-group-small\">\r\n                            <input type=\"text\" required=\"required\" [(ngModel)]=\"vrfWarnEnd\" name=\"vrfWarnEnd\" />\r\n                            <i class=\"bar\"></i>\r\n                          </div>\r\n                        </td>\r\n                        <td>\r\n                          <div class=\"form-group form-group-small\">\r\n                            <input type=\"text\" required=\"required\" [(ngModel)]=\"vrfMax\" name=\"vrfMax\" />\r\n                            <i class=\"bar\"></i>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>BGP *</td>\r\n                        <td>\r\n                          <div class=\"form-group form-group-small\">\r\n                            <input type=\"text\" required=\"required\" [(ngModel)]=\"bgpPeersWarnStart\" name=\"bgpPeersWarnStart\" />\r\n                            <i class=\"bar\"></i>\r\n                          </div>\r\n                        </td>\r\n                        <td>\r\n                          <div class=\"form-group form-group-small\">\r\n                            <input type=\"text\" required=\"required\" [(ngModel)]=\"bgpPeersWarnEnd\" name=\"bgpPeersWarnEnd\" />\r\n                            <i class=\"bar\"></i>\r\n                          </div>\r\n                        </td>\r\n                        <td>\r\n                          <div class=\"form-group form-group-small\">\r\n                            <input type=\"text\" required=\"required\" [(ngModel)]=\"bgpPeersMax\" name=\"bgpPeersMax\" />\r\n                            <i class=\"bar\"></i>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Vlan *</td>\r\n                        <td>\r\n                          <div class=\"form-group form-group-small\">\r\n                            <input type=\"text\" required=\"required\" [(ngModel)]=\"vlanWarnStart\" name=\"vlanWarnStart\" />\r\n                            <i class=\"bar\"></i>\r\n                          </div>\r\n                        </td>\r\n                        <td>\r\n                          <div class=\"form-group form-group-small\">\r\n                            <input type=\"text\" required=\"required\" [(ngModel)]=\"vlanWarnEnd\" name=\"vlanWarnEnd\" />\r\n                            <i class=\"bar\"></i>\r\n                          </div>\r\n                        </td>\r\n                        <td>\r\n                          <div class=\"form-group form-group-small\">\r\n                            <input type=\"text\" required=\"required\" [(ngModel)]=\"vlanMax\" name=\"vlanMax\" />\r\n                            <i class=\"bar\"></i>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Harp *</td>\r\n                        <td>\r\n                          <div class=\"form-group form-group-small\">\r\n                            <input type=\"text\" required=\"required\" [(ngModel)]=\"hsrpWarnStart\" name=\"hsrpWarnStart\" />\r\n                            <i class=\"bar\"></i>\r\n                          </div>\r\n                        </td>\r\n                        <td>\r\n                          <div class=\"form-group form-group-small\">\r\n                            <input type=\"text\" required=\"required\" [(ngModel)]=\"hsrpWarnEnd\" name=\"hsrpWarnEnd\" />\r\n                            <i class=\"bar\"></i>\r\n                          </div>\r\n                        </td>\r\n                        <td>\r\n                          <div class=\"form-group form-group-small\">\r\n                            <input type=\"text\" required=\"required\" [(ngModel)]=\"hsrpMax\" name=\"hsrpMax\" />\r\n                            <i class=\"bar\"></i>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Static Router *</td>\r\n                        <td>\r\n                          <div class=\"form-group form-group-small\">\r\n                            <input type=\"text\" required=\"required\" [(ngModel)]=\"staticRoutesWarnStart\" name=\"staticRoutesWarnStart\" />\r\n                            <i class=\"bar\"></i>\r\n                          </div>\r\n                        </td>\r\n                        <td>\r\n                          <div class=\"form-group form-group-small\">\r\n                            <input type=\"text\" required=\"required\" [(ngModel)]=\"staticRoutesWarnEnd\" name=\"staticRoutesWarnEnd\" />\r\n                            <i class=\"bar\"></i>\r\n                          </div>\r\n                        </td>\r\n                        <td>\r\n                          <div class=\"form-group form-group-small\">\r\n                            <input type=\"text\" required=\"required\" [(ngModel)]=\"staticRoutesMax\" name=\"staticRoutesMax\" />\r\n                            <i class=\"bar\"></i>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                    </table>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"offset-md-2 col-md-8\">\r\n                      <div class=\"col-md-12 form-modal\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-md-6 pull-left modal-buttons\">\r\n                            <button type=\"button\" class=\"btn btn-default btn-edit-cancel\" (click)=\"previous($event)\"> Back </button>\r\n                          </div>\r\n                          <div class=\"col-md-6 pull-left modal-buttons\" style=\"text-align: right;\">\r\n                            <button type=\"button\" class=\"btn btn-primary save_btn btn-edit-save\" (click)=\"next($event)\">Next</button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </fieldset>\r\n\r\n                <fieldset>\r\n                  <p class=\"modal-text-p\">Please enter component username and password</p>\r\n                  <div class=\"row\">\r\n                    <div class=\"offset-md-2 col-md-8\">\r\n                      <div class=\"form-group\">\r\n                        <input type=\"text\" required=\"required\" [(ngModel)]=\"componentUser\" name=\"componentUser\" placeholder=\"Username *\" />\r\n                        <i class=\"bar\"></i>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <input type=\"password\" required=\"required\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password *\" />\r\n                        <i class=\"bar\"></i>\r\n                      </div>\r\n                      <div class=\"col-md-12 form-modal\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-md-6 pull-left modal-buttons\">\r\n                            <button type=\"button\" class=\"btn btn-default btn-edit-cancel\" (click)=\"previous($event)\">Back</button>\r\n                          </div>\r\n                          <div class=\"col-md-6 pull-left modal-buttons\" style=\"text-align: right;\">\r\n                            <input type=\"submit\" class=\"btn btn-primary save_btn btn-edit-save\" value=\"Next\" (click)=\"next($event)\" />\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </fieldset>\r\n\r\n                <fieldset>\r\n                  <!-- <h3 *ngIf=\"apiError\" class=\"modal-text-h3\">Congratulations. Your new component has been succesfully added!</h3>\r\n                  <h3 *ngIf=\"!apiError\" class=\"modal-text-h3\">Error Occured!</h3> -->\r\n                  <h3 class=\"modal-text-h3\">{{ apiError==1 ? 'Congratulations. Your new component has been succesfully added!' : 'Error Occured!' }}</h3>\r\n                  <div class=\"row\">\r\n                    <div class=\"offset-md-2 col-md-8\">\r\n                      <div class=\"col-md-12 form-modal\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-md-6 pull-left modal-buttons\">\r\n                            <button type=\"button\" class=\"btn btn-default btn-edit-cancel\">View Component</button>\r\n                          </div>\r\n                          <div class=\"col-md-6 pull-left modal-buttons\" style=\"text-align: right;\">\r\n                              <button type=\"button\" class=\"btn btn-primary save_btn btn-edit-save\" (click)=\"c('Close click')\">Finish</button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </fieldset>\r\n\r\n              </form>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/provisioning/addnewcomponent/addnewcomponent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddnewcomponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddnewcomponentComponent = (function () {
    function AddnewcomponentComponent(modalService) {
        this.modalService = modalService;
        this.apiError = 1;
    }
    AddnewcomponentComponent.prototype.ngOnInit = function () {
    };
    AddnewcomponentComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { windowClass: 'custom_modal', size: 'lg' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
        this.fadeModalContent();
    };
    AddnewcomponentComponent.prototype.fadeModalContent = function () {
        $('.f1 fieldset:first').fadeIn('slow');
    };
    AddnewcomponentComponent.prototype.next = function (event) {
        var next_step = true;
        if (next_step) {
            var fieldSet = event.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
            console.log(fieldSet);
            $(fieldSet).fadeOut(400, function () { });
            $(".f1-step.active").removeClass('active').addClass('activated').next().addClass('active');
            $(fieldSet).next().fadeIn(400, function () { });
        }
    };
    AddnewcomponentComponent.prototype.previous = function (event) {
        var next_step = true;
        if (next_step) {
            var fieldSet = event.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
            console.log(fieldSet);
            $(fieldSet).fadeOut(400, function () { });
            $(fieldSet).prev().fadeIn(400, function () { });
        }
    };
    AddnewcomponentComponent.prototype.addComponent = function () {
        $.ajax({
            url: 'assets/webservices/addComponent.php',
            type: 'post',
            data: {
                userId: 1,
                name: this.name,
                dataCenterId: 1,
                type: '',
                ipAddress: '',
                version: this.version,
                subVersion: this.subVersion,
                componentUser: this.componentUser,
                password: this.password,
                enablePassword: '',
                vrfWarnStart: this.vrfWarnStart,
                vrfWarnEnd: this.vrfWarnEnd,
                vrfMax: this.vrfMax,
                bgpPeersWarnStart: this.bgpPeersWarnStart,
                bgpPeersWarnEnd: this.bgpPeersWarnEnd,
                bgpPeersMax: this.bgpPeersMax,
                vlanWarnStart: this.vlanWarnStart,
                vlanWarnEnd: this.vlanWarnEnd,
                vlanMax: this.vlanMax,
                hsrpWarnStart: this.hsrpWarnStart,
                hsrpWarnEnd: this.hsrpWarnEnd,
                hsrpMax: this.hsrpMax,
                staticRoutesWarnStart: this.staticRoutesWarnStart,
                staticRoutesWarnEnd: this.staticRoutesWarnEnd,
                staticRoutesMax: this.staticRoutesMax,
                vrrpWarnStart: '',
                vrrpWarnEnd: '',
                vrrpMax: '',
            },
            success: function (data) {
                this.apiError = 1;
            },
            error: function () {
                this.apiError = 1;
            }
        });
    };
    AddnewcomponentComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    return AddnewcomponentComponent;
}());
AddnewcomponentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-addnewcomponent',
        template: __webpack_require__("../../../../../src/app/provisioning/addnewcomponent/addnewcomponent.component.html"),
        styles: [__webpack_require__("../../../../../src/app/provisioning/addnewcomponent/addnewcomponent.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object])
], AddnewcomponentComponent);

var _a;
//# sourceMappingURL=addnewcomponent.component.js.map

/***/ }),

/***/ "../../../../../src/app/provisioning/provisioning.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/assets/bootzard/css/form-elements.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/assets/bootzard/css/style.css"), "");
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]);

// module
exports.push([module.i, ".data-center {\r\n    color: #3b4147;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    padding: 6px 0 4px;\r\n}\r\n.tab-tile:hover {\r\n    cursor: pointer;\r\n    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);\r\n}\r\n.data-center-body {\r\n    color: #73787d;\r\n    font-size: 13px;\r\n    text-align: center;\r\n    margin-bottom: 1px;\r\n    font-weight: 600;\r\n}\r\n.tab-tile {\r\n    padding: 15px 0px 15px;\r\n}\r\n.tab-tile-active {\r\n    padding: 0px 0px 31px;\r\n    background-color: #fff; \r\n}\r\n.tab-tile-table {\r\n    background-color: #fff;\r\n    padding: 30px;\r\n}\r\nth {\r\n    color: #3b4147;\r\n}\r\ntd {\r\n    color: #73787d;\r\n}\r\n.img-thumbnail {\r\n    width: 100px;\r\n    height: 100px;\r\n    background-color: unset;\r\n    border: 0px;\r\n}\r\n.rsddropdown {\r\n    text-align: right;\r\n    padding-right: 15px;\r\n    height: 15px;\r\n}\r\n.rsddropdown-span {\r\n    cursor:pointer;\r\n    color:#b0bec5;\r\n    font-size:20px;\r\n    padding-left: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n.rsddropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #fff;\r\n    overflow: auto;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n    right: 10%;\r\n    border-radius: 6px;\r\n    border: 1px solid aliceblue;\r\n    cursor: pointer;\r\n    text-align: left;\r\n} \r\n.rsddropdown-content a {\r\n    color: #08070799;\r\n    padding: 5px 12px;\r\n    text-decoration: none;\r\n    display: block;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n} \r\n.rsddropdown a:hover {\r\n    background-color: #ddd;\r\n}\r\n.btn-primary {\r\n    background-color: #203c66;\r\n    border-color: #203c66;\r\n    font-weight: 600;\r\n}\r\n.btn-primary:hover {\r\n  background-color: #203c66bf;\r\n  border-color: #203c66bf !important;\r\n}\r\n.btn-default {\r\n\tpadding-right: 40px;\r\n\tpadding-left: 40px;\r\n\tborder-radius: 5px;\r\n}\r\n.save_btn, .btn-edit {\r\n\tpadding-right: 40px;\r\n\tpadding-left: 40px;\r\n\tborder-radius: 5px;\r\n}\r\n.custom_modal {\r\n\ttop :40px !important;\r\n}\r\n.btn-left {\r\n    background-color: #203c6661;\r\n    border-color: #203c6661;border: 0px solid transparent;\r\n    position: absolute;\r\n    top: 155px;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n    height: 40px;\r\n    width: 50px;\r\n    font-size: 26px;\r\n}\r\n.btn-right {\r\n    background-color: #203c6661;\r\n    border-color: #203c6661;border: 0px solid transparent;\r\n    position: absolute;\r\n    top: 155px;\r\n    bottom: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n    height: 40px;\r\n    width: 50px;\r\n    font-size: 26px;\r\n}\r\n.header_title {\r\n   text-align:left;\r\n   font-size: 38px;\r\n   font-weight: bold;\r\n   color: #3d4657;\r\n}\r\n.modal_description {\r\n\tfont-family: \"Open Sans\", Bold;\r\n\tcolor: #7b879e;\r\n\tfont-size: 15px;\r\n\tpadding-top: 12px;\r\n}\r\n.modal_placeholder {\r\n\tfont-family: \"Open Sans\", Bold;\r\n\tcolor: #7b879e;\r\n}\r\n.form-modal {\r\n    padding-top: 10px;\r\n    padding-right: 45px;\r\n    padding-left: 45px;\r\n    padding-bottom: 10px;\r\n}\r\n.control-label {\r\n\tcolor: #7b879e !important;\r\n\tfont-family: \"Open Sans\", Bold;\r\n}\r\n\r\n@media only screen \r\nand (max-device-width : 767px) {\r\n  .modal-buttons {\r\n    text-align: center !important;\r\n    padding-top: 5px;\r\n  }\r\n  .save_btn {\r\n    padding-left: 50px !important;\r\n    padding-right: 50px !important;\r\n  }\r\n  .btn-edit-cancel {\r\n    padding-left: 100px !important;\r\n    padding-right: 100px !important;\r\n  }\r\n  .btn-edit-back {\r\n    padding-left: 107px !important;\r\n    padding-right: 107px !important;\r\n  }\r\n  .btn-edit-save {\r\n    padding-left: 106px !important;\r\n    padding-right: 106px !important;\r\n  }\r\n  .btn-edit-view-component{\r\n  \tpadding-left: 69px !important;\r\n\tpadding-right: 69px !important;\r\n  }\r\n  .btn-delete {\r\n  \tpadding-left: 42px !important;\r\n\tpadding-right: 42px !important;\r\n  }\r\n  .btn-retry {\r\n  \tpadding-left: 114px !important;\r\n\tpadding-right: 114px !important;\r\n  }\r\n  .btn-edit-finish {\r\n  \tpadding-left: 101px !important;\r\n\tpadding-right: 101px !important;\r\n  }\r\n  .btn-edit-close {\r\n  \tpadding-left: 97px !important;\r\n\tpadding-right: 97px !important;\r\n  }\r\n  .btn-edit-next {\r\n  \tpadding-left: 108px !important;\r\n\tpadding-right: 108px !important;\r\n  }\r\n  .btn-edit-edit {\r\n  \tpadding-left: 110px !important;\r\n\tpadding-right: 110px !important;\r\n  }\r\n}\r\n.btn-top-bar {\r\n  text-align: right;\r\n  padding-right: 0px;\r\n}\r\n@media only screen \r\nand (min-device-width : 320px) \r\nand (max-device-width : 568px) { \r\n  /*.btn-edit-cancel {\r\n    padding-left: 80px !important;\r\n    padding-right: 80px !important;\r\n  }*/\r\n  /*.btn-edit-save {\r\n    padding-left: 87px !important;\r\n    padding-right: 87px !important;\r\n  }*/\r\n}\r\n@media only screen \r\nand (max-device-width : 575px) { \r\n  .btn-top-bar {\r\n    padding-bottom: 5px;\r\n  }\r\n}\r\n\r\n/* Modal popup Add Component */\r\n.header_title {\r\n    text-align:left;\r\n    font-size: 38px;\r\n    font-weight: bold;\r\n    color: #3d4657;\r\n}\r\n.top-content {\r\n    padding-bottom: 0px !important;\r\n    padding-top: 0px !important;\r\n}\r\n.container {\r\n    margin-top: 0px !important;\r\n    margin-bottom: 0px !important;\r\n    padding-left: 0px !important;\r\n    padding-right: 0px !important;\r\n    padding-top: 0px !important;\r\n}\r\n.form-box {\r\n  padding-top: 0px !important;\r\n}\r\n.modal-text-p {\r\n  color: #808080;\r\n  text-align: center;\r\n\tfont-family: \"Open Sans\", Bold;\r\n\tfont-size: 15px;\r\n  padding-top: 12px;\r\n}\r\n.modal-text-h3 {\r\n  color: #808080;\r\n  text-align: center;\r\n  font-weight: 400;\r\n  text-transform: unset !important;\r\n  padding-bottom: 75px;\r\n  padding-top: 75px;\r\n}\r\n.form-group-small {\r\n  margin-top: 0px !important;\r\n  margin-bottom: 0px !important;\r\n  width: 50px !important;\r\n}\r\n.modal-table tr td {\r\n  color: #808080;\r\n\tfont-family: \"Open Sans\", Bold;\r\n  font-size: 12px;\r\n  font-weight: 400;\r\n  padding-top: 0px;\r\n  padding-bottom: 0px;\r\n  vertical-align: bottom;\r\n  border-top: unset;\r\n}\r\n.modal-table-responsive {\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n}\r\n.btn-add-data {\r\n  height: 34px !important;\r\n  border-radius: 2px !important;\r\n  font-weight: 600 !important;\r\n  border: 1px solid transparent !important;\r\n  padding: 8px 14px !important;\r\n  line-height: 16px !important;\r\n  font-size: 11px !important;\r\n  font-family: 'Open Sans' !important;\r\n}\r\n.activated .f1-step-icon {\r\n  cursor: pointer;\r\n}\r\n.f1-step .f1-step-icon .fa {\r\n  display: none;\r\n}\r\n.activated .f1-step-icon .fa {\r\n  display: inline-block !important;\r\n}\r\n.active .f1-step-icon .fa {\r\n  display: inline-block !important;\r\n}\r\n/* Modal popup Add Component Ednd */\r\nbody,\r\ninput,\r\nselect,\r\ntextarea,\r\nbody * {\r\n  font-family: 'Roboto', sans-serif;\r\n  box-sizing: border-box;\r\n}\r\nbody::after, body::before,\r\ninput::after,\r\ninput::before,\r\nselect::after,\r\nselect::before,\r\ntextarea::after,\r\ntextarea::before,\r\nbody *::after,\r\nbody *::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-image: linear-gradient(to bottom, #f2f2f2, #e6e6e6);\r\n}\r\n\r\nh1 {\r\n  font-size: 2rem;\r\n  text-align: center;\r\n  margin: 0 0 2em;\r\n}\r\nh1 small {\r\n  font-size: 50%;\r\n  color: #666;\r\n  display: block;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  max-width: 40rem;\r\n  margin: 5rem auto;\r\n  background: #fff;\r\n  width: 100%;\r\n  padding: 3rem 5rem 0;\r\n  border-radius: 1px;\r\n}\r\n.container::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);\r\n  -webkit-transform: scale(0.98);\r\n          transform: scale(0.98);\r\n  transition: -webkit-transform 0.28s ease-in-out;\r\n  transition: transform 0.28s ease-in-out;\r\n  transition: transform 0.28s ease-in-out, -webkit-transform 0.28s ease-in-out;\r\n  z-index: -1;\r\n}\r\n.container:hover::before {\r\n  -webkit-transform: scale(1);\r\n          transform: scale(1);\r\n}\r\n\r\n.button-container {\r\n  text-align: center;\r\n}\r\n\r\nfieldset {\r\n  margin: 0 0 3rem;\r\n  padding: 0;\r\n  border: none;\r\n}\r\n\r\n.form-radio,\r\n.form-group {\r\n  position: relative;\r\n  margin-top: 2.25rem;\r\n  margin-bottom: 2.25rem;\r\n}\r\n\r\n.form-inline > .form-group,\r\n.form-inline > .btn {\r\n  display: inline-block;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.form-help {\r\n  margin-top: 0.125rem;\r\n  margin-left: 0.125rem;\r\n  color: #b3b3b3;\r\n  font-size: 0.8rem;\r\n}\r\n.checkbox .form-help, .form-radio .form-help, .form-group .form-help {\r\n  position: absolute;\r\n  width: 100%;\r\n}\r\n.checkbox .form-help {\r\n  position: relative;\r\n  margin-bottom: 1rem;\r\n}\r\n.form-radio .form-help {\r\n  padding-top: 0.25rem;\r\n  margin-top: -1rem;\r\n}\r\n\r\n.form-group input {\r\n  height: 1.9rem;\r\n}\r\n.form-group textarea {\r\n  resize: none;\r\n}\r\n.form-group select {\r\n  width: 100%;\r\n  font-size: 1rem;\r\n  height: 1.6rem;\r\n  padding: 0.125rem 0.125rem 0.0625rem;\r\n  background: none;\r\n  border: none;\r\n  line-height: 1.6;\r\n  box-shadow: none;\r\n}\r\n.form-group .control-label {\r\n  position: absolute;\r\n  top: 0.25rem;\r\n  pointer-events: none;\r\n  padding-left: 0.125rem;\r\n  z-index: 1;\r\n  color: #b3b3b3;\r\n  font-size: 1rem;\r\n  font-weight: normal;\r\n  transition: all 0.28s ease;\r\n}\r\n.form-group .bar {\r\n  position: relative;\r\n  border-bottom: 0.0625rem solid #999;\r\n  display: block;\r\n}\r\n.form-group .bar::before {\r\n  content: '';\r\n  height: 0.125rem;\r\n  width: 0;\r\n  left: 50%;\r\n  bottom: -0.0625rem;\r\n  position: absolute;\r\n  background: #337ab7;\r\n  transition: left 0.28s ease, width 0.28s ease;\r\n  z-index: 2;\r\n}\r\n.form-group input,\r\n.form-group textarea {\r\n  display: block;\r\n  background: none;\r\n  padding: 0.125rem 0.125rem 0.0625rem;\r\n  font-size: 1rem;\r\n  border-width: 0;\r\n  border-color: transparent;\r\n  line-height: 1.9;\r\n  width: 100%;\r\n  color: transparent;\r\n  transition: all 0.28s ease;\r\n  box-shadow: none;\r\n}\r\n.form-group input[type=\"file\"] {\r\n  line-height: 1;\r\n}\r\n.form-group input[type=\"file\"] ~ .bar {\r\n  display: none;\r\n}\r\n.form-group select,\r\n.form-group input:focus,\r\n.form-group input:valid,\r\n.form-group input.form-file,\r\n.form-group input.has-value,\r\n.form-group textarea:focus,\r\n.form-group textarea:valid,\r\n.form-group textarea.form-file,\r\n.form-group textarea.has-value {\r\n  color: #7b879e;\r\n}\r\n.form-group select ~ .control-label,\r\n.form-group input:focus ~ .control-label,\r\n.form-group input:valid ~ .control-label,\r\n.form-group input.form-file ~ .control-label,\r\n.form-group input.has-value ~ .control-label,\r\n.form-group textarea:focus ~ .control-label,\r\n.form-group textarea:valid ~ .control-label,\r\n.form-group textarea.form-file ~ .control-label,\r\n.form-group textarea.has-value ~ .control-label {\r\n  font-size: 0.8rem;\r\n  color: gray;\r\n  top: -1rem;\r\n  left: 0;\r\n}\r\n.form-group select:focus,\r\n.form-group input:focus,\r\n.form-group textarea:focus {\r\n  outline: none;\r\n}\r\n.form-group select:focus ~ .control-label,\r\n.form-group input:focus ~ .control-label,\r\n.form-group textarea:focus ~ .control-label {\r\n  color: #337ab7;\r\n}\r\n.form-group select:focus ~ .bar::before,\r\n.form-group input:focus ~ .bar::before,\r\n.form-group textarea:focus ~ .bar::before {\r\n  width: 100%;\r\n  left: 0;\r\n}\r\n\r\n.checkbox label,\r\n.form-radio label {\r\n  position: relative;\r\n  cursor: pointer;\r\n  padding-left: 2rem;\r\n  text-align: left;\r\n  color: #333;\r\n  display: block;\r\n}\r\n.checkbox input,\r\n.form-radio input {\r\n  width: auto;\r\n  opacity: 0.00000001;\r\n  position: absolute;\r\n  left: 0;\r\n}\r\n\r\n.radio {\r\n  margin-bottom: 1rem;\r\n}\r\n.radio .helper {\r\n  position: absolute;\r\n  top: -0.25rem;\r\n  left: -0.25rem;\r\n  cursor: pointer;\r\n  display: block;\r\n  font-size: 1rem;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  color: #999;\r\n}\r\n.radio .helper::before, .radio .helper::after {\r\n  content: '';\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  margin: 0.25rem;\r\n  width: 1rem;\r\n  height: 1rem;\r\n  transition: -webkit-transform 0.28s ease;\r\n  transition: transform 0.28s ease;\r\n  transition: transform 0.28s ease, -webkit-transform 0.28s ease;\r\n  border-radius: 50%;\r\n  border: 0.125rem solid currentColor;\r\n}\r\n.radio .helper::after {\r\n  -webkit-transform: scale(0);\r\n          transform: scale(0);\r\n  background-color: #337ab7;\r\n  border-color: #337ab7;\r\n}\r\n.radio label:hover .helper {\r\n  color: #337ab7;\r\n}\r\n.radio input:checked ~ .helper::after {\r\n  -webkit-transform: scale(0.5);\r\n          transform: scale(0.5);\r\n}\r\n.radio input:checked ~ .helper::before {\r\n  color: #337ab7;\r\n}\r\n\r\n.checkbox {\r\n  margin-top: 3rem;\r\n  margin-bottom: 1rem;\r\n}\r\n.checkbox .helper {\r\n  color: #999;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 1rem;\r\n  height: 1rem;\r\n  z-index: 0;\r\n  border: 0.125rem solid currentColor;\r\n  border-radius: 0.0625rem;\r\n  transition: border-color 0.28s ease;\r\n}\r\n.checkbox .helper::before, .checkbox .helper::after {\r\n  position: absolute;\r\n  height: 0;\r\n  width: 0.2rem;\r\n  background-color: #337ab7;\r\n  display: block;\r\n  -webkit-transform-origin: left top;\r\n          transform-origin: left top;\r\n  border-radius: 0.25rem;\r\n  content: '';\r\n  transition: opacity 0.28s ease, height 0s linear 0.28s;\r\n  opacity: 0;\r\n}\r\n.checkbox .helper::before {\r\n  top: 0.65rem;\r\n  left: 0.38rem;\r\n  -webkit-transform: rotate(-135deg);\r\n          transform: rotate(-135deg);\r\n  box-shadow: 0 0 0 0.0625rem #fff;\r\n}\r\n.checkbox .helper::after {\r\n  top: 0.3rem;\r\n  left: 0;\r\n  -webkit-transform: rotate(-45deg);\r\n          transform: rotate(-45deg);\r\n}\r\n.checkbox label:hover .helper {\r\n  color: #337ab7;\r\n}\r\n.checkbox input:checked ~ .helper {\r\n  color: #337ab7;\r\n}\r\n.checkbox input:checked ~ .helper::after, .checkbox input:checked ~ .helper::before {\r\n  opacity: 1;\r\n  transition: height 0.28s ease;\r\n}\r\n.checkbox input:checked ~ .helper::after {\r\n  height: 0.5rem;\r\n}\r\n.checkbox input:checked ~ .helper::before {\r\n  height: 1.2rem;\r\n  transition-delay: 0.28s;\r\n}\r\n\r\n.radio + .radio,\r\n.checkbox + .checkbox {\r\n  margin-top: 1rem;\r\n}\r\n\r\n.has-error .legend.legend, .has-error.form-group .control-label.control-label {\r\n  color: #d9534f;\r\n}\r\n.has-error.form-group .form-help,\r\n.has-error.form-group .helper, .has-error.checkbox .form-help,\r\n.has-error.checkbox .helper, .has-error.radio .form-help,\r\n.has-error.radio .helper, .has-error.form-radio .form-help,\r\n.has-error.form-radio .helper {\r\n  color: #d9534f;\r\n}\r\n.has-error .bar::before {\r\n  background: #d9534f;\r\n  left: 0;\r\n  width: 100%;\r\n}\r\n\r\n.button {\r\n  position: relative;\r\n  background: currentColor;\r\n  border: 1px solid currentColor;\r\n  font-size: 1.1rem;\r\n  color: #4f93ce;\r\n  margin: 3rem 0;\r\n  padding: 0.75rem 3rem;\r\n  cursor: pointer;\r\n  transition: background-color 0.28s ease, color 0.28s ease, box-shadow 0.28s ease;\r\n  overflow: hidden;\r\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\r\n}\r\n.button span {\r\n  color: #fff;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n.button::before {\r\n  content: '';\r\n  position: absolute;\r\n  background: #071017;\r\n  border: 50vh solid #1d4567;\r\n  width: 30vh;\r\n  height: 30vh;\r\n  border-radius: 50%;\r\n  display: block;\r\n  top: 50%;\r\n  left: 50%;\r\n  z-index: 0;\r\n  opacity: 1;\r\n  -webkit-transform: translate(-50%, -50%) scale(0);\r\n          transform: translate(-50%, -50%) scale(0);\r\n}\r\n.button:hover {\r\n  color: #337ab7;\r\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);\r\n}\r\n.button:active::before, .button:focus::before {\r\n  transition: opacity 0.28s ease 0.364s, -webkit-transform 1.12s ease;\r\n  transition: transform 1.12s ease, opacity 0.28s ease 0.364s;\r\n  transition: transform 1.12s ease, opacity 0.28s ease 0.364s, -webkit-transform 1.12s ease;\r\n  -webkit-transform: translate(-50%, -50%) scale(1);\r\n          transform: translate(-50%, -50%) scale(1);\r\n  opacity: 0;\r\n}\r\n.button:focus {\r\n  outline: none;\r\n}\r\n.apiMsg {\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n}\r\n\r\n.table td {\r\n  border-top: unset;\r\n}\r\n\r\n.form-box {\r\n  padding-top: 0px !important;\r\n}\r\n.modal-text-p {\r\n  color: #808080;\r\n  text-align: center;\r\n\tfont-family: \"Open Sans\", Bold;\r\n\tfont-size: 15px;\r\n  padding-top: 12px;\r\n}\r\n.modal-text-h3 {\r\n  color: #808080;\r\n  text-align: center;\r\n  font-weight: 400;\r\n  text-transform: unset !important;\r\n  padding-bottom: 75px;\r\n  padding-top: 75px;\r\n}\r\n.form-group-small {\r\n  margin-top: 0px !important;\r\n  margin-bottom: 0px !important;\r\n  width: 50px !important;\r\n  /* margin-right: 50px !important; */\r\n}\r\n.modal-table tr td {\r\n  color: #808080;\r\n\tfont-family: \"Open Sans\", Bold;\r\n  font-size: 12px;\r\n  font-weight: 400;\r\n  padding-top: 0px;\r\n  padding-bottom: 0px;\r\n  vertical-align: bottom;\r\n}\r\n\r\n.frmGrpInput{\r\n  text-align: center;\r\n}\r\n.cred{\r\n  display:none;\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n\t.btn_step1 {\r\n\t\tpadding-left:0px;\r\n\t\tpadding-right:0px;\r\n\t}\r\n\t.btn_step2 {\r\n\t\tpadding-left:0px;\r\n\t\tpadding-right:0px;\r\n\t}\r\n\t.outer_step2 {\r\n\t\tmargin-left:0px;\r\n\t\t-webkit-box-flex: 0;\r\n\t\t    -ms-flex: 0 0 100%;\r\n\t\t        flex: 0 0 100%;\r\n\t\tmax-width: 100%;\r\n\t}\r\n\t.btn_step4 {\r\n\t\tpadding-left:0px;\r\n\t\tpadding-right:0px;\r\n\t}\r\n}\r\n@media only screen and (max-width: 568px) {\r\n\r\n}\r\n\r\n#withoutdcBlock {\r\n  min-height: 200px;\r\n  padding: 80px 15px;\r\n}\r\n.f1-progress-error { position: absolute; top: 0; left: 0; height: 1px; background: red; height: 5px; width: 100%; display: none;}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/provisioning/provisioning.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-3 col-sm-3\" style=\"font-weight:600; font-size:20px; color:#4a6076; padding-bottom:15px;\">\r\n        onPOINT HCS.Capacity\r\n    </div>\r\n    <div class=\"col-md-6 col-sm-6\" style=\"padding-top:6px;text-align: center;\">\r\n        <span>\r\n            <span *ngFor=\"let dC of dataCenters; let i = index\">\r\n                <span class=\"icon-name\">&nbsp;</span>\r\n                <div *ngIf=\"i==selectedDataCenter;then bubble1; else bubble2\"></div>\r\n                <ng-template #bubble1>\r\n                    <span style=\"cursor: pointer;font-size:15px;\" (click)=\"dataCenterScrollClick(i)\" id=\"dataCenterScroll{{i}}\" class=\"fa fa-circle\"></span>\r\n                </ng-template>\r\n                <ng-template #bubble2>\r\n                    <span style=\"cursor: pointer;\" (click)=\"dataCenterScrollClick(i)\" id=\"dataCenterScroll{{i}}\" class=\"ti-control-record\"></span>\r\n                </ng-template>\r\n            </span>\r\n        </span>\r\n    </div>\r\n    <div class=\"col-md-3 col-sm-3 btn-top-bar\">\r\n        <button class=\"btn btn-primary btn-sm btn-add-data\" (click)=\"open(content, 0, 'add')\">\r\n            <i class=\"fa fa-plus\"></i> Add Data Center</button>\r\n    </div>\r\n</div>\r\n<div class=\"row\" id=\"withdcBlock\" style=\"display:none\">\r\n    <ng-container *ngFor=\"let dataCenter of dataCenters, let i = index\">\r\n        <div [style.display]=\"i>=scrollLimitMin && i<=scrollLimitMax ? 'block' : 'none'\" class=\"col-md-3 col-sm-6 tab-tile {{ (i == selectedDataCenter) ? 'tab-tile-active' : ''}}\"\r\n            id=\"{{i}}\" (click)=\"dataCenterScrollClick(i,'direct')\">\r\n            <div *ngIf=\"i== selectedDataCenter; then thenDiv;else elseDiv\">\r\n            </div>\r\n            <ng-template #thenDiv>\r\n                <div class=\"rsddropdown\" id=\"rsddropdown{{i}}\">\r\n                    <span class=\"rsddropdown-span\" (click)=\"callMatricsClick(i)\">...</span>\r\n                    <div id=\"callMatricsDropdown{{i}}\" class=\"rsddropdown-content\">\r\n                        <a (click)=\"open(editDataCenter,i,'edit')\">Edit</a>\r\n                        <a (click)=\"open(deleteDataCenter,i,'delete')\">Delete</a>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n            <ng-template #elseDiv>\r\n                <div class=\"rsddropdown\" id=\"rsddropdown{{i}}\" style=\"display: none;\">\r\n                    <span class=\"rsddropdown-span\" (click)=\"callMatricsClick(i)\">...</span>\r\n                    <div id=\"callMatricsDropdown{{i}}\" class=\"rsddropdown-content\">\r\n                        <a (click)=\"open(editDataCenter,i,'edit')\">Edit</a>\r\n                        <a (click)=\"open(deleteDataCenter,i,'delete')\">Delete</a>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n            <div class=\"data-center-image d-flex justify-content-center\">\r\n                <img bind-src=\"imgUrl\" class=\"img-thumbnail\">\r\n            </div>\r\n            <p class=\"data-center\">{{dataCenter.name}}</p>\r\n            <p class=\"data-center-body\">{{dataCenter.city}}, {{dataCenter.state}}</p>\r\n            <p class=\"data-center-body\">{{dataCenter.country}}</p>\r\n            <p class=\"data-center-body\">{{dataCenter.time_zone}}</p>\r\n        </div>\r\n    </ng-container>\r\n    <div class=\"col-md-12 tab-tile-table table-responsive\">\r\n        <div (click)=\"openComponentModal(rsdcontent)\" title=\"Click to add component\" style=\"float: right;padding: 0px 0px 20px 0px;cursor: pointer;\">\r\n            <div class=\"col-md-4 col-sm-4 btn-top-bar\">\r\n                <button class=\"btn btn-primary btn-sm btn-add-data\">\r\n                    <i class=\"fa fa-plus\"></i> Add Component</button>\r\n            </div>\r\n        </div>\r\n        <ng-template #rsdcontent let-c=\"close\" let-d=\"dismiss\">\r\n            <div class=\"rsdModal\">\r\n                <div class=\"modal-body\">\r\n\r\n                    <div class=\"top-content\">\r\n                        <div class=\"container\">\r\n                            <div class=\"row\">\r\n                                <!-- <div class=\"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 form-box\"> -->\r\n                                <div class=\"col-sm-12 col-md-12 col-lg-12  form-box\">\r\n                                    <form class=\"f1\" (submit)=\"addComponent()\">\r\n                                        <div class=\"form-modal\">\r\n                                            <div class=\"header_title\" style=\"text-align: center;\">Add new component</div>\r\n                                        </div>\r\n                                        <div class=\"f1-steps\" style=\"text-align: center;\">\r\n                                            <div class=\"f1-progress\">\r\n                                                <div class=\"f1-progress-error\"></div>\r\n                                                <div class=\"f1-progress-line\" style=\"width: 25%;\"></div>\r\n                                            </div>\r\n                                            <div class=\"f1-step active\" id='f1-step_1'>\r\n                                                <div class=\"f1-step-icon\" (click)=\"tabClick($event, 1)\">\r\n                                                    <i class=\"fa fa-check\"></i>\r\n                                                </div>\r\n                                                <p>Name</p>\r\n                                            </div>\r\n                                            <div class=\"f1-step next\" id=\"f1-step_2\">\r\n                                                <div class=\"f1-step-icon\" (click)=\"tabClick($event, 2)\">\r\n                                                    <i class=\"fa fa-check\"></i>\r\n                                                </div>\r\n                                                <p>Component Type</p>\r\n                                            </div>\r\n                                            <div class=\"f1-step\">\r\n                                                <div class=\"f1-step-icon\" (click)=\"tabClick($event, 3)\">\r\n                                                    <i class=\"fa fa-check\"></i>\r\n                                                </div>\r\n                                                <p>Configuration</p>\r\n                                            </div>\r\n                                            <div class=\"f1-step\" id=\"complete\">\r\n                                                <div id=\"complete-step\" class=\"f1-step-icon\">\r\n                                                    <i id=\"complete-icon\" class=\"fa fa-check\"></i>\r\n                                                </div>\r\n                                                <p id=\"complete-title\">Complete</p>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <fieldset id=\"fieldset_1\">\r\n                                            <p class=\"modal-text-p\">Please enter component name.</p>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"offset-md-2 col-md-8\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" required=\"required\" [(ngModel)]=\"comName\" name=\"comName\" id=\"addComponentName\" />\r\n                                                        <label class=\"control-label\" for=\"input\">Name*</label>\r\n                                                        <i class=\"bar\" id=\"NameBar\"></i>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-12 form-modal btn_step1\">\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-6 col-sm-12 pull-left modal-buttons\">\r\n                                                                <button type=\"button\" class=\"btn btn-danger btn-edit-cancel\" (click)=\"c('Close click')\">Cancel</button>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-6 col-sm-12 pull-right modal-buttons\" style=\"text-align: right;\">\r\n                                                                <button type=\"button\" class=\"btn btn-primary save_btn btn-edit-next\" (click)=\"next($event, 1)\">Next</button>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </fieldset>\r\n\r\n                                        <fieldset id=\"fieldset_2\">\r\n                                            <p class=\"modal-text-p\">Please enter component type, version.</p>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"offset-md-2 col-md-8\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <select [(ngModel)]=\"ComVersion\" name=\"ComVersion\" (change)=\"onVersionChange(ComVersion)\" id=\"addComponentType\">\r\n                                                            <option class=\"modal_placeholder\">Type*</option>\r\n                                                            <option value=\"{{ver.name}}\" *ngFor='let ver of version'>{{ver.name}}</option>\r\n                                                        </select>\r\n                                                        <label class=\"control-label\" for=\"select\"></label>\r\n                                                        <i id=\"Typebar\" class=\"bar\"></i>\r\n                                                    </div>\r\n                                                    <div class=\"form-group\">\r\n                                                        <select [(ngModel)]=\"ComSubVersion\" name=\"ComSubVersion\" id=\"addComponentSubType\" disabled=\"disabled\">\r\n                                                            <option class=\"modal_placeholder\">Sub Type</option>\r\n                                                            <option value=\"{{subType.name}}\" *ngFor='let subType of subTypes'>{{subType.name}}</option>\r\n                                                        </select>\r\n                                                        <label class=\"control-label\" for=\"select\"></label>\r\n                                                        <i id=\"add-ComSubVersion\" class=\"bar\"></i>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <p class=\"modal-text-p toggleThreshold\" style=\"display:none\">Thresholds</p>\r\n                                            <div class=\"table-responsive modal-table-responsive toggleThreshold\" style=\"display:none\">\r\n                                                <table class=\"table modal-table\">\r\n                                                    <tr>\r\n                                                        <td></td>\r\n                                                        <td>WARNING</td>\r\n                                                        <td>ALERT</td>\r\n                                                        <td>MAX</td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td>VRF *</td>\r\n                                                        <td>\r\n                                                            <div class=\"form-group form-group-small\">\r\n                                                                <input type=\"text\" required=\"required\" [(ngModel)]=\"vrfWarnStart\" name=\"vrfWarnStart\" />\r\n                                                                <i id=\"add-vrfWarnStart\" class=\"bar\"></i>\r\n                                                            </div>\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <div class=\"form-group form-group-small\">\r\n                                                                <input type=\"text\" required=\"required\" [(ngModel)]=\"vrfWarnEnd\" name=\"vrfWarnEnd\" />\r\n                                                                <i id=\"add-vrfWarnEnd\" class=\"bar\"></i>\r\n                                                            </div>\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <div class=\"form-group form-group-small\">\r\n                                                                <input type=\"text\" required=\"required\" [(ngModel)]=\"vrfMax\" name=\"vrfMax\" />\r\n                                                                <i id=\"add-vrfMax\" class=\"bar\"></i>\r\n                                                            </div>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td>BGP *</td>\r\n                                                        <td>\r\n                                                            <div class=\"form-group form-group-small\">\r\n                                                                <input type=\"text\" required=\"required\" [(ngModel)]=\"bgpPeersWarnStart\" name=\"bgpPeersWarnStart\" />\r\n                                                                <i id=\"add-bgpPeersWarnStart\" class=\"bar\"></i>\r\n                                                            </div>\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <div class=\"form-group form-group-small\">\r\n                                                                <input type=\"text\" required=\"required\" [(ngModel)]=\"bgpPeersWarnEnd\" name=\"bgpPeersWarnEnd\" />\r\n                                                                <i id=\"add-bgpPeersWarnEnd\" class=\"bar\"></i>\r\n                                                            </div>\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <div class=\"form-group form-group-small\">\r\n                                                                <input type=\"text\" required=\"required\" [(ngModel)]=\"bgpPeersMax\" name=\"bgpPeersMax\" />\r\n                                                                <i id=\"add-bgpPeersMax\" class=\"bar\"></i>\r\n                                                            </div>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td>Vlan *</td>\r\n                                                        <td>\r\n                                                            <div class=\"form-group form-group-small\">\r\n                                                                <input type=\"text\" required=\"required\" [(ngModel)]=\"vlanWarnStart\" name=\"vlanWarnStart\" />\r\n                                                                <i id=\"add-vlanWarnStart\" class=\"bar\"></i>\r\n                                                            </div>\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <div class=\"form-group form-group-small\">\r\n                                                                <input type=\"text\" required=\"required\" [(ngModel)]=\"vlanWarnEnd\" name=\"vlanWarnEnd\" />\r\n                                                                <i id=\"add-vlanWarnEnd\" class=\"bar\"></i>\r\n                                                            </div>\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <div class=\"form-group form-group-small\">\r\n                                                                <input type=\"text\" required=\"required\" [(ngModel)]=\"vlanMax\" name=\"vlanMax\" />\r\n                                                                <i id=\"add-vlanMax\" class=\"bar\"></i>\r\n                                                            </div>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td>Harp *</td>\r\n                                                        <td>\r\n                                                            <div class=\"form-group form-group-small\">\r\n                                                                <input type=\"text\" required=\"required\" [(ngModel)]=\"hsrpWarnStart\" name=\"hsrpWarnStart\" />\r\n                                                                <i id=\"add-hsrpWarnStart\" class=\"bar\"></i>\r\n                                                            </div>\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <div class=\"form-group form-group-small\">\r\n                                                                <input type=\"text\" required=\"required\" [(ngModel)]=\"hsrpWarnEnd\" name=\"hsrpWarnEnd\" />\r\n                                                                <i id=\"add-hsrpWarnEnd\" class=\"bar\"></i>\r\n                                                            </div>\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <div class=\"form-group form-group-small\">\r\n                                                                <input type=\"text\" required=\"required\" [(ngModel)]=\"hsrpMax\" name=\"hsrpMax\" />\r\n                                                                <i id=\"add-hsrpMax\" class=\"bar\"></i>\r\n                                                            </div>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td>Static Router *</td>\r\n                                                        <td>\r\n                                                            <div class=\"form-group form-group-small\">\r\n                                                                <input type=\"text\" required=\"required\" [(ngModel)]=\"staticRoutesWarnStart\" name=\"staticRoutesWarnStart\" />\r\n                                                                <i id=\"add-staticRoutesWarnStart\" class=\"bar\"></i>\r\n                                                            </div>\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <div class=\"form-group form-group-small\">\r\n                                                                <input type=\"text\" required=\"required\" [(ngModel)]=\"staticRoutesWarnEnd\" name=\"staticRoutesWarnEnd\" />\r\n                                                                <i id=\"add-staticRoutesWarnEnd\" class=\"bar\"></i>\r\n                                                            </div>\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <div class=\"form-group form-group-small\">\r\n                                                                <input type=\"text\" required=\"required\" [(ngModel)]=\"staticRoutesMax\" name=\"staticRoutesMax\" />\r\n                                                                <i id=\"add-staticRoutesMax\" class=\"bar\"></i>\r\n                                                            </div>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                </table>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"offset-md-2 col-md-8 outer_step2\">\r\n                                                    <div class=\"col-md-12 form-modal btn_step2\">\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-4 pull-left modal-buttons\">\r\n                                                                <button type=\"button\" class=\"btn btn-default btn-edit-back\" (click)=\"previous($event)\"> Back </button>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-4 col-sm-12 pull-left modal-buttons\">\r\n                                                                <button type=\"button\" class=\"btn btn-danger btn-edit-cancel\" (click)=\"c('Close click')\">Cancel</button>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-4 pull-left modal-buttons\" style=\"text-align: right;\">\r\n                                                                <button type=\"button\" class=\"btn btn-primary save_btn btn-edit-next\" (click)=\"next($event, 2)\">Next</button>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </fieldset>\r\n\r\n                                        <fieldset id=\"fieldset_3\">\r\n                                            <p class=\"modal-text-p\">Please enter component IP address, username and password</p>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"offset-md-2 col-md-8\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" required=\"required\" [(ngModel)]=\"ipAddress\" id=\"addIpAddress\" name=\"ipAddress\" />\r\n                                                        <label class=\"control-label\" for=\"input\">IP Address*</label>\r\n                                                        <i class=\"bar\" id=\"ipAddressBar\"></i>\r\n                                                    </div>\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" required=\"required\" [(ngModel)]=\"componentUser\" id=\"addComponentUser\" name=\"componentUser\" readonly onfocus=\"this.removeAttribute('readonly');\"\r\n                                                        />\r\n                                                        <label class=\"control-label\" for=\"input\">Username*</label>\r\n                                                        <i class=\"bar\" id=\"UserBar\"></i>\r\n                                                    </div>\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" required=\"required\" [(ngModel)]=\"password\" id=\"addComponentPassword\" name=\"password\" readonly onfocus=\"this.removeAttribute('readonly');\"\r\n                                                        />\r\n                                                        <label class=\"control-label\" for=\"input\">Password*</label>\r\n                                                        <i class=\"bar\" id=\"PasswordBar\"></i>\r\n                                                    </div>\r\n                                                    <div class=\"form-group toggleEnablePassword\" style=\"display:none;\">\r\n                                                        <input type=\"text\" required=\"required\" [(ngModel)]=\"enablePassword\" name=\"enablePassword\" />\r\n                                                        <label class=\"control-label\" for=\"input\">Enable Password</label>\r\n                                                        <i class=\"bar\"></i>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"offset-md-2 col-md-8 outer_step2\">\r\n                                                    <div class=\"col-md-12 form-modal btn_step2\">\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-4 pull-left modal-buttons\">\r\n                                                                <button type=\"button\" class=\"btn btn-default btn-edit-back\" (click)=\"previous($event)\">Back</button>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-4 col-sm-12 pull-left modal-buttons\">\r\n                                                                <button type=\"button\" class=\"btn btn-danger btn-edit-cancel\" (click)=\"c('Close click')\">Cancel</button>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-4 pull-left modal-buttons\" style=\"text-align: right;\">\r\n                                                                <input type=\"submit\" class=\"btn btn-primary save_btn btn-edit-save\" value=\"Next\" (click)=\"next($event, 3)\" />\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </fieldset>\r\n\r\n                                        <fieldset id=\"fieldset_4\">\r\n                                            <!-- <h3 *ngIf=\"apiError\" class=\"modal-text-h3\">Congratulations. Your new component has been succesfully added!</h3>\r\n                                      <h3 *ngIf=\"!apiError\" class=\"modal-text-h3\">Error Occured!</h3> -->\r\n                                            <h3 class=\"modal-text-h3\" style=\"color: green;\" *ngIf=\"apiError\">Congratulations. Your new component has been succesfully added!</h3>\r\n                                            <h3 class=\"modal-text-h3\" style=\"color: red; padding-bottom: 10px;\" *ngIf=\"!apiError\">Something went wrong !</h3>\r\n                                            <p id=\"apiErrorMsg\" style=\"color: red; text-align: center; padding-bottom: 65px; display: none;\"></p>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"offset-md-2 col-md-8\">\r\n                                                    <div class=\"col-md-12 form-modal btn_step4\">\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-6 pull-left modal-buttons\" *ngIf=\"!apiError\">\r\n                                                                <button type=\"button\" class=\"btn btn-default btn-retry\" (click)=\"addComTryAgain()\">Retry</button>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-6 pull-left modal-buttons\" *ngIf=\"apiError\">\r\n                                                                <button type=\"button\" class=\"btn btn-default btn-edit-view-component\" (click)=\"getComponentDetails(viewComponent,currentDataCenterComponentId)\">View Component</button>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-6 pull-left modal-buttons\" style=\"text-align: right;\">\r\n                                                                <button type=\"button\" id=\"addComponentSuccessClose\" (click)=\"c('Close click')\" class=\"btn btn-primary save_btn  btn-edit-finish\">Finish</button>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </fieldset>\r\n\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n                <tr>\r\n                    <th scope=\"col\">Component Name</th>\r\n                    <th scope=\"col\">Type</th>\r\n                    <th scope=\"col\">Version</th>\r\n                    <th scope=\"col\">IP Address</th>\r\n                    <th scope=\"col\">Credentials</th>\r\n                    <th scope=\"col\"></th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <input type=\"hidden\" id=\"comp_filter\" name=\"comp_filter\" value=\"\" />\r\n                <tr *ngIf=\"showNullRowMessage\">\r\n                    <td align=\"center\" colspan=\"6\">\r\n                        <b>THERE ARE CURRENTLY NO COMPONENTS AVAILABLE FOR THIS DATA CENTER. <br />TO ADD A COMPONENT PLEASE USE THE <span style=\"color:#79A3BA; cursor:pointer;\" (click)=\"openComponentModal(rsdcontent)\">ADD COMPONENT WIZARD</span></b>\r\n                    </td>\r\n                </tr>\r\n                <tr *ngFor=\"let data of dataCentersDetails, let j = index\">\r\n                    <td>{{ data.name }}</td>\r\n                    <td>{{ data.type }}</td>\r\n                    <td>{{ data.version }}</td>\r\n                    <td>{{ data.ipAddress }}</td>\r\n                    <td class=\"text-center\">\r\n                        <span (click)=\"hide(j)\" class=\"span{{j}}\" style=\"color: #0056b3;cursor: pointer;\">View</span>\r\n                        <p class=\"cred cred{{j}}\">Username : {{data.componentUser}}\r\n                            <br> Password : {{data.password}}</p>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"rsddropdown-span\" (click)=\"editComponentClick(j)\">...</span>\r\n                        <div id=\"editComponentDropdown{{j}}\" class=\"rsddropdown-content componentDropDownDiv\">\r\n                            <a (click)=\"openComponentModalNew(viewComponent,j,'view', currentDC)\">View</a>\r\n                            <a (click)=\"openComponentModalNew(editComponent,j,'edit', currentDC)\">Edit</a>\r\n                            <a (click)=\"openComponentModalNew(deleteComponent,j,'delete', currentDC)\">Delete</a>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\" style=\"clear:both;\">\r\n    <div id=\"withoutdcBlock\" class=\"col-md-12 tab-tile-table table-responsive text-center\" style=\"display:none\">\r\n        <span style=\"font-weight:bold;\"><b>THERE ARE CURRENTLY NO DATA CENTERS AVAILABLE. TO ADD DATA CENTER PLEASE USE THE <span style=\"color:#79A3BA; cursor:pointer;\" (click)=\"open(content, 0, 'add')\">ADD DATA CENTER WIZARD</span></b></span>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"modalForm\">\r\n            <div class=\"form-modal\">\r\n                <div class=\"header_title\">Add a data center</div>\r\n                <!--<p class=\"modal_description\">Add a data center to your network. It's quick and easy. If you need any assistance please\r\n                    <a style=\"color:#007bff;\">contact us</a>.</p>-->\r\n            </div>\r\n            <form (submit)=\"onSubmit()\">\r\n                <div class=\"form-modal\" style=\"padding-top: 0;\">\r\n                    <div class=\"form-group\" style=\"margin-top: 0;\">\r\n                        <input id=\"addDataCenterName\" type=\"text\" required=\"required\" [(ngModel)]=\"name\" name=\"name\" />\r\n                        <label class=\"control-label\" for=\"input\">Data center name*</label>\r\n                        <i id=\"addnameBar\" class=\"bar\"></i>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <select [(ngModel)]=\"country\" name=\"country\" id=\"addDataCenterCountry\" (change)=\"loadStates(country, 'add')\">\r\n                            <option class=\"modal_placeholder\">Country*</option>\r\n                            <option *ngFor='let element of country_list' [value]=\"element.value\">{{element.name}}</option>\r\n                        </select>\r\n                        <label class=\"control-label\" for=\"select\"></label>\r\n                        <i id=\"addcountryBar\" class=\"bar\"></i>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <select [(ngModel)]=\"state\" name=\"state\" id=\"addDataCenterState\" [disabled]=\"!statesList\" (change)=\"loadCities(state, 'add')\">\r\n                            <option class=\"modal_placeholder\">State*</option>\r\n                            <option *ngFor='let state of statesList' [value]=\"state.value\">{{state.name}}</option>\r\n                        </select>\r\n                        <label class=\"control-label\" for=\"select\"></label>\r\n                        <i id=\"addstateBar\" class=\"bar\"></i>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <select [(ngModel)]=\"city\" name=\"city\" id=\"addDataCenterCity\" [disabled]=\"!citiesList\">\r\n                            <option class=\"modal_placeholder\">City*</option>\r\n                            <option *ngFor='let city of citiesList' [value]=\"city.value\">{{city.name}}</option>\r\n                        </select>\r\n                        <label class=\"control-label\" for=\"select\"></label>\r\n                        <i id=\"addcityBar\" class=\"bar\"></i>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <!-- <select [(ngModel)]=\"timezone\" name=\"timezone\" id=\"addDataCenterTimezone\"> -->\r\n                        <select [(ngModel)]=\"timezone\" name=\"timezone\" id=\"addDataCenterTimezone\">\r\n                            <option class=\"modal_placeholder\">Time zone*</option>\r\n                            <option *ngFor='let element of time_zone_list' [value]=\"element.value\">{{element.name}}</option>\r\n                        </select>\r\n                        <label class=\"control-label\" for=\"select\"></label>\r\n                        <i id=\"addtimezoneBar\" class=\"bar\"></i>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12 form-modal\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 pull-left modal-buttons\">\r\n                            <button type=\"button\" class=\"btn btn-default btn-edit-cancel\" (click)=\"c('Close click')\">Cancel</button>\r\n                        </div>\r\n                        <div class=\"col-md-6 pull-left modal-buttons\" style=\"text-align: right;\">\r\n                            <input type=\"submit\" class=\"btn btn-primary save_btn btn-edit-save\" value=\"Save\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div style=\"display: none;\" class=\"apiResponseDiv\">\r\n            <div class=\"apiSuccess\">\r\n                <div class=\"form-modal\" style=\"padding-bottom: 40px;\">\r\n                    <div class=\"header_title\"> Add a data center</div>\r\n                    <!--<p class=\"modal_description\">Add a data center to your network. It's quick and easy. If you need any assistance please\r\n                        <a style=\"color:#007bff;\">contact us</a>.</p>-->\r\n                    <div style=\"color: green;\" class=\"apiMsg\">Data center added successfully !</div>\r\n                </div>\r\n                <div class=\"col-md-12 form-modal\" style=\"padding-bottom: 30px;\">\r\n                    <div style=\" position: absolute; top:13%; left:50%; transform: translate(-50%,-50%);\" class=\"clearfix\">\r\n                        <button type=\"button\" class=\"btn btn-primary save_btn btn-edit-close\" (click)=\"c('Close click')\">Close</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"apiFailed\" style=\"display: none\">\r\n                <div class=\"form-modal\" style=\"padding-bottom: 40px;\">\r\n                    <div class=\"header_title\"> Add a data center</div>\r\n                    <!--<p class=\"modal_description\">Add a data center to your network. It's quick and easy. If you need any assistance please\r\n                        <a style=\"color:#007bff;\">contact us</a>.</p>-->\r\n                    <div style=\"color: red;\" class=\"apiMsg\">Something went wrong !</div>\r\n                    <p id=\"apiErrorMsg\" style=\"color: red;\"></p>\r\n                </div>\r\n                <div class=\"col-md-12 form-modal\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 pull-left modal-buttons\">\r\n                            <button type=\"button\" class=\"btn btn-default btn-edit-cancel\" (click)=\"addDataAgain()\">Retry</button>\r\n                        </div>\r\n                        <div class=\"col-md-6 pull-left modal-buttons\" style=\"text-align: right;\">\r\n                            <button type=\"button\" class=\"btn btn-primary save_btn btn-edit-close\" (click)=\"c('Close click')\">Close</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #editDataCenter let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"modalForm\">\r\n            <div class=\"form-modal\">\r\n                <div class=\"header_title\">Edit data center</div>\r\n                <!--<p class=\"modal_description\">Edit data center 1 of your network. It's quick and easy. If you need any assistance please\r\n                    <a style=\"color:#007bff;\">contact us</a>.</p>-->\r\n            </div>\r\n            <form>\r\n                <div class=\"form-modal\" style=\"padding-top: 0;\">\r\n                    <input id=\"editDataCenterId\" type=\"hidden\" value=\"{{editData.id}}\" />\r\n                    <div class=\"form-group\" style=\"margin-top: 0;\">\r\n                        <input id=\"editDataCenterName\" type=\"text\" required=\"required\" value=\"{{editData.name}}\" />\r\n                        <label class=\"control-label\" for=\"input\">Data center name*</label>\r\n                        <i id='nameBar' class=\"bar\"></i>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <select id=\"editDataCenterCountry\" (change)=\"loadStates('country', 'edit')\">\r\n                            <option class=\"modal_placeholder\" value=\"Country*\">Country*</option>\r\n                            <option *ngFor='let element of country_list' [selected]=\"element.name === editData.country\" [value]=\"element.value\">{{element.name}}</option>\r\n                        </select>\r\n                        <label class=\"control-label\" for=\"select\"></label>\r\n                        <i id=\"countryBar\" class=\"bar\"></i>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <select id=\"editDataCenterState\" (change)=\"loadCities('state', 'edit')\">\r\n                            <option class=\"modal_placeholder\" value=\"State*\">State*</option>\r\n                            <option *ngFor='let state of statesList' [selected]=\"state.name === editData.state\" [value]=\"state.value\">{{state.name}}</option>\r\n                        </select>\r\n                        <label class=\"control-label\" for=\"select\"></label>\r\n                        <i id=\"stateBar\" class=\"bar\"></i>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <select id=\"editDataCenterCity\">\r\n                            <option class=\"modal_placeholder\" value=\"City*\">City*</option>\r\n                            <option *ngFor='let city of citiesList' [selected]=\"city.name === editData.city\" [value]=\"city.value\">{{city.name}}</option>\r\n                        </select>\r\n                        <label class=\"control-label\" for=\"select\"></label>\r\n                        <i id=\"cityBar\" class=\"bar\"></i>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <select id=\"editDataCenterTimezone\">\r\n                            <option class=\"modal_placeholder\" value=\"Time zone*\">Time zone*</option>\r\n                            <option *ngFor='let element of time_zone_list' [selected]=\"element.value === editData.timezoneid\" [value]=\"element.value\">{{element.name}}</option>\r\n                        </select>\r\n                        <label class=\"control-label\" for=\"select\"></label>\r\n                        <i id=\"timezoneBar\" class=\"bar\"></i>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12 form-modal\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 pull-left modal-buttons\">\r\n                            <button type=\"button\" class=\"btn btn-default btn-edit btn-edit-cancel\" (click)=\"c('Close click')\">Cancel</button>\r\n                        </div>\r\n                        <div class=\"col-md-6 pull-left modal-buttons\" style=\"text-align: right;\">\r\n                            <button type=\"button\" class=\"btn btn-primary btn-edit btn-edit-save\" (click)=\"validateEdit($event)\">Save</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div style=\"display: none;\" class=\"apiResponseDiv\">\r\n            <div class=\"apiSuccess\">\r\n                <div class=\"form-modal\" style=\"padding-bottom: 40px;\">\r\n                    <div class=\"header_title\">Edit data center</div>\r\n                    <!--<p class=\"modal_description\">Edit data center 1 of your network. It's quick and easy. If you need any assistance please\r\n                        <a style=\"color:#007bff;\">contact us</a>.</p>-->\r\n                    <div style=\"color: green;\" class=\"apiMsg\">Data center edited successfully !</div>\r\n                </div>\r\n                <div class=\"col-md-12 form-modal\" style=\"padding-bottom: 30px;\">\r\n                    <div style=\" position: absolute; top:13%; left:50%; transform: translate(-50%,-50%);\" class=\"clearfix\">\r\n                        <button type=\"button\" class=\"btn btn-primary save_btn btn-edit-close\" (click)=\"c('Close click')\">Close</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"apiFailed\" style=\"display: none\">\r\n                <div class=\"form-modal\" style=\"padding-bottom: 40px;\">\r\n                    <div class=\"header_title\">Edit data center</div>\r\n                    <!--<p class=\"modal_description\">Edit data center 1 of your network. It's quick and easy. If you need any assistance please\r\n                        <a style=\"color:#007bff;\">contact us</a>.</p>-->\r\n                    <div style=\"color: red;\" class=\"apiMsg\">Something went wrong !</div>\r\n                    <p id=\"editApiErrorMsg\" style=\"color: red;\"></p>\r\n                </div>\r\n                <div class=\"col-md-12 form-modal edit_dc\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 pull-left modal-buttons\">\r\n                            <button type=\"button\" class=\"btn btn-default btn-edit-cancel\" (click)=\"addDataAgain()\">Retry</button>\r\n                        </div>\r\n                        <div class=\"col-md-6 pull-left modal-buttons\" style=\"text-align: right;\">\r\n                            <button type=\"button\" class=\"btn btn-primary save_btn btn-edit-close\" (click)=\"c('Close click')\">Close</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #deleteDataCenter let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"modalForm\">\r\n            <div class=\"form-modal\">\r\n                <div class=\"header_title\" style=\"font-weight: 400;font-size: 30px; \">Are you sure you want to delete {{editData.name}} ?</div>\r\n            </div>\r\n            <div class=\"col-md-12 form-modal\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6 col-sm-12 modal-buttons\">\r\n                        <button type=\"button\" class=\"btn btn-default btn-delete\" (click)=\"c('Close click')\">Do not delete</button>\r\n                    </div>\r\n                    <div class=\"col-md-6 col-sm-12 modal-buttons\" style=\"text-align: right;\">\r\n                        <button (click)=\"deleteDC()\" type=\"button\" class=\"btn btn-primary save_btn\">Yes, delete</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div style=\"display: none;\" class=\"apiResponseDiv\">\r\n            <div class=\"apiSuccess\">\r\n                <div class=\"form-modal\" style=\"padding-bottom: 40px;\">\r\n                    <div class=\"header_title\"> Delete data center</div>\r\n                    <div style=\"color: green;\" class=\"apiMsg\">Data center deleted successfully !</div>\r\n                </div>\r\n                <div class=\"col-md-12 form-modal\" style=\"padding-bottom: 30px;\">\r\n                    <div style=\" position: absolute; top:13%; left:50%; transform: translate(-50%,-50%);\" class=\"clearfix\">\r\n                        <button type=\"button\" class=\"btn btn-primary save_btn btn-edit-close\" (click)=\"c('Close click')\">Close</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"apiFailed\" style=\"display: none\">\r\n                <div class=\"form-modal\" style=\"padding-bottom: 40px;\">\r\n                    <div class=\"header_title\"> Delete data center</div>\r\n                    <div style=\"color: red;\" class=\"apiMsg\">Something went wrong !</div>\r\n                    <p id=\"deleteApiErrorMsg\" style=\"color: red;\"></p>\r\n                </div>\r\n                <div class=\"col-md-12 form-modal\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-sm-12 modal-buttons\">\r\n                            <button type=\"button\" class=\"btn btn-default btn-delete\" (click)=\"deleteDC()\">Retry</button>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-sm-12 modal-buttons\" style=\"text-align: right;\">\r\n                            <button (click)=\"c('Close click')\" type=\"button\" class=\"btn btn-primary btn-edit-close\">Close</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #deleteComponent let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-body componentDeleteModal\">\r\n        <div class=\"form-modal\">\r\n            <div class=\"header_title\" style=\"font-weight: 400;font-size: 30px; \">Are you sure you want to delete the component {{deleteData.name}}?</div>\r\n        </div>\r\n        <div class=\"col-md-12 form-modal\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 col-sm-12 modal-buttons\">\r\n                    <button type=\"button\" class=\"btn btn-default btn-delete\" (click)=\"c('Close click')\">Do not delete</button>\r\n                </div>\r\n                <div class=\"col-md-6 col-sm-12 modal-buttons\" style=\"text-align: right;\">\r\n                    <button type=\"button\" class=\"btn btn-primary save_btn\" (click)=\"deleteComponentData(deleteData.id)\">Yes, delete</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div style=\"display: none;\" class=\"apiResponseDivComponent\">\r\n        <div class=\"apiSuccess\">\r\n            <div class=\"form-modal\" style=\"padding-bottom: 40px;\">\r\n                <div class=\"header_title\" style=\"text-align: center;\"> Delete Component</div>\r\n                <div style=\"color: green; text-align: center;\" class=\"apiMsg\">Component Deleted successfully !</div>\r\n            </div>\r\n            <div class=\"col-md-12 form-modal\" style=\"padding-bottom: 30px;\">\r\n                <div style=\" position: absolute; top:13%; left:50%; transform: translate(-50%,-50%);\" class=\"clearfix\">\r\n                    <button type=\"button\" class=\"btn btn-primary save_btn btn-edit-close\" (click)=\"c('Close click')\">Close</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"apiFailed\" style=\"display: none\">\r\n            <div class=\"form-modal\" style=\"padding-bottom: 40px;\">\r\n                    <div class=\"header_title\" style=\"text-align: center;\"> Delete Component</div>\r\n                    <div style=\"color: red;\" class=\"apiMsg\">Something went wrong !</div>\r\n                    <p id=\"apiErrorMsgComponent\" style=\"color: red;\"></p>\r\n            </div>\r\n            <div class=\"col-md-12 form-modal\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6 col-sm-12 modal-buttons\">\r\n                        <button type=\"button\" class=\"btn btn-default btn-delete\" (click)=\"deleteComponentData(deleteData.id)\">Retry</button>\r\n                    </div>\r\n                    <div class=\"col-md-6 col-sm-12 modal-buttons\" style=\"text-align: right;\">\r\n                        <button type=\"button\" class=\"btn btn-primary btn-edit-close\" (click)=\"c('Close click')\">Close</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #editComponent let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"modalForm\">\r\n            <div class=\"form-modal\">\r\n                <div class=\"header_title\" style=\"text-align: center;\">Edit Component</div>\r\n            </div>\r\n            <form>\r\n                <div class=\"form-modal\" style=\"padding-top: 0;\">\r\n                    <div class=\"form-group\" style=\"margin-top: 0;\">\r\n                        <input id=\"editComponentName\" type=\"text\" required=\"required\" value=\"{{componentRecords.name}}\" />\r\n                        <label class=\"control-label\" for=\"input\">Component Name*</label>\r\n                        <i id='editComponentBar1' class=\"bar\"></i>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <select id=\"editComponentNameType\" [(ngModel)]=\"editComponentNameType\" name=\"editComponentNameType\" (change)=\"onVersionChangeEdit(editComponentNameType)\">\r\n                            <option class=\"modal_placeholder\" value=\"Type*\">Type*</option>\r\n                            <option *ngFor='let ver of version' [selected]=\"ver.name === componentRecords.type\" [value]=\"ver.name\">{{ver.name}}</option>\r\n                        </select>\r\n                        <label class=\"control-label\" for=\"select\"></label>\r\n                        <i id=\"editComponentBar2\" class=\"bar\"></i>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <select [(ngModel)]=\"editComponentVersion\" name=\"editComponentVersion\" id=\"editComponentVersion\">\r\n                            <option class=\"modal_placeholder\">Sub Type</option>\r\n                            <option value=\"{{subTypeEdit.name}}\" *ngFor='let subTypeEdit of subTypesEdit'>{{subTypeEdit.name}}</option>\r\n                        </select>\r\n                        <i id=\"editComponentBar3\" class=\"bar\"></i>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input id=\"editComponentIpAddress\" type=\"text\" required=\"required\" value=\"{{componentRecords.ipAddress}}\" />\r\n                        <label class=\"control-label\" for=\"input\">IP Address*</label>\r\n                        <i id=\"editComponentBar4\" class=\"bar\"></i>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input id=\"editComponentComponentUser\" type=\"text\" required=\"required\" value=\"{{componentRecords.componentUser}}\" />\r\n                        <label class=\"control-label\" for=\"input\">Username*</label>\r\n                        <i id=\"editComponentBar5\" class=\"bar\"></i>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input id=\"editComponentPassword\" type=\"text\" required=\"required\" value=\"{{componentRecords.password}}\" />\r\n                        <label class=\"control-label\" for=\"input\">Password*</label>\r\n                        <i id=\"editComponentBar6\" class=\"bar\"></i>\r\n                    </div>\r\n                    <div class=\"form-group\" [hidden]='componentRecords.type != \"ASA\"' id=\"edit-enable-password\">\r\n                        <input id=\"editComponentEnablePassword\" type=\"text\" required=\"required\" value=\"{{componentRecords.enablePassword}}\" />\r\n                        <label class=\"control-label\" for=\"input\">Enable Password</label>\r\n                        <i id=\"editComponentBar7\" class=\"bar\"></i>\r\n                    </div>\r\n\r\n                    <!-- <div *ngIf=\"componentRecords.type == 'NEXUS';then threshold_edit\"></div> -->\r\n                    <div id=\"edit-componet-thresholds\" [hidden]='componentRecords.type != \"NEXUS\"'>\r\n                    <!-- <ng-template #threshold_edit> -->\r\n                        <p class=\"modal-text-p\">Threshold Value</p>\r\n                        <div class=\"table-responsive\">\r\n                            <table class=\"table modal-table\">\r\n                                <tr>\r\n                                    <td></td>\r\n                                    <td>WARNING</td>\r\n                                    <td>ALERT</td>\r\n                                    <td>MAX</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>VRF</td>\r\n                                    <td>\r\n                                        <div class=\"form-group form-group-small\">\r\n                                            <input class=\"frmGrpInput\" id=\"editComponentvrfWarnStart\" type=\"text\" required=\"required\" value=\"{{componentRecords.vrfWarnStart}}\"\r\n                                            />\r\n                                            <i id=\"editComponentBar7\" class=\"bar\"></i>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"form-group form-group-small\">\r\n                                            <input class=\"frmGrpInput\" id=\"editComponentvrfWarnEnd\" type=\"text\" required=\"required\" value=\"{{componentRecords.vrfWarnEnd}}\"\r\n                                            />\r\n                                            <i id=\"editComponentBar8\" class=\"bar\"></i>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"form-group form-group-small\">\r\n                                            <input class=\"frmGrpInput\" id=\"editComponentvrfMax\" type=\"text\" required=\"required\" value=\"{{componentRecords.vrfMax}}\" />\r\n                                            <i id=\"editComponentBar9\" class=\"bar\"></i>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>BGP</td>\r\n                                    <td>\r\n                                        <div class=\"form-group form-group-small\">\r\n                                            <input class=\"frmGrpInput\" id=\"editComponentbgpPeersWarnStart\" type=\"text\" required=\"required\" value=\"{{componentRecords.bgpPeersWarnStart}}\"\r\n                                            />\r\n                                            <i id=\"editComponentBar10\" class=\"bar\"></i>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"form-group form-group-small\">\r\n                                            <input class=\"frmGrpInput\" id=\"editComponentbgpPeersWarnEnd\" type=\"text\" required=\"required\" value=\"{{componentRecords.bgpPeersWarnEnd}}\"\r\n                                            />\r\n                                            <i id=\"editComponentBar11\" class=\"bar\"></i>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"form-group form-group-small\">\r\n                                            <input class=\"frmGrpInput\" id=\"editComponentbgpPeersMax\" type=\"text\" required=\"required\" value=\"{{componentRecords.bgpPeersMax}}\"\r\n                                            />\r\n                                            <i id=\"editComponentBar12\" class=\"bar\"></i>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Vlan</td>\r\n                                    <td>\r\n                                        <div class=\"form-group form-group-small\">\r\n                                            <input class=\"frmGrpInput\" id=\"editComponentvlanWarnStart\" type=\"text\" required=\"required\" value=\"{{componentRecords.vlanWarnStart}}\"\r\n                                            />\r\n                                            <i id=\"editComponentBar13\" class=\"bar\"></i>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"form-group form-group-small\">\r\n                                            <input class=\"frmGrpInput\" id=\"editComponentvlanWarnEnd\" type=\"text\" required=\"required\" value=\"{{componentRecords.vlanWarnEnd}}\"\r\n                                            />\r\n                                            <i id=\"editComponentBar14\" class=\"bar\"></i>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"form-group form-group-small\">\r\n                                            <input class=\"frmGrpInput\" id=\"editComponentvlanMax\" type=\"text\" required=\"required\" value=\"{{componentRecords.vlanMax}}\"\r\n                                            />\r\n                                            <i id=\"editComponentBar15\" class=\"bar\"></i>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Harp</td>\r\n                                    <td>\r\n                                        <div class=\"form-group form-group-small\">\r\n                                            <input class=\"frmGrpInput\" id=\"editComponenthsrpWarnStart\" type=\"text\" required=\"required\" value=\"{{componentRecords.hsrpWarnStart}}\"\r\n                                            />\r\n                                            <i id=\"editComponentBar16\" class=\"bar\"></i>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"form-group form-group-small\">\r\n                                            <input class=\"frmGrpInput\" id=\"editComponenthsrpWarnEnd\" type=\"text\" required=\"required\" value=\"{{componentRecords.hsrpWarnEnd}}\"\r\n                                            />\r\n                                            <i id=\"editComponentBar17\" class=\"bar\"></i>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"form-group form-group-small\">\r\n                                            <input class=\"frmGrpInput\" id=\"editComponenthsrpMax\" type=\"text\" required=\"required\" value=\"{{componentRecords.hsrpMax}}\"\r\n                                            />\r\n                                            <i id=\"editComponentBar18\" class=\"bar\"></i>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Static Router</td>\r\n                                    <td>\r\n                                        <div class=\"form-group form-group-small\">\r\n                                            <input class=\"frmGrpInput\" id=\"editComponentstaticRoutesWarnStart\" type=\"text\" required=\"required\" value=\"{{componentRecords.staticRoutesWarnStart}}\"\r\n                                            />\r\n                                            <i id=\"editComponentBar19\" class=\"bar\"></i>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"form-group form-group-small\">\r\n                                            <input class=\"frmGrpInput\" id=\"editComponentstaticRoutesWarnEnd\" type=\"text\" required=\"required\" value=\"{{componentRecords.staticRoutesWarnEnd}}\"\r\n                                            />\r\n                                            <i id=\"editComponentBar20\" class=\"bar\"></i>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"form-group form-group-small\">\r\n                                            <input class=\"frmGrpInput\" id=\"editComponentstaticRoutesMax\" type=\"text\" required=\"required\" value=\"{{componentRecords.staticRoutesMax}}\"\r\n                                            />\r\n                                            <i id=\"editComponentBar21\" class=\"bar\"></i>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                        </div>\r\n                    <!-- </ng-template> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12 form-modal\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 pull-left modal-buttons\">\r\n                            <button type=\"button\" class=\"btn btn-default btn-edit btn-edit-cancel\" (click)=\"c('Close click')\">Cancel</button>\r\n                        </div>\r\n                        <div class=\"col-md-6 pull-left modal-buttons\" style=\"text-align: right;\">\r\n                            <button type=\"button\" class=\"btn btn-primary btn-edit btn-edit-finish\" (click)=\"validateEditComponent($event)\">Finish</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div style=\"display: none;\" class=\"apiResponseDiv\">\r\n            <div class=\"apiSuccess\">\r\n                <div class=\"form-modal\" style=\"padding-bottom: 40px;\">\r\n                    <div class=\"header_title\" style=\"text-align: center;\">Edit Component</div>\r\n                    <div style=\"color: green; text-align: center;\" class=\"apiMsg\">Component edited successfully !</div>\r\n                </div>\r\n                <div class=\"col-md-12 form-modal\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 pull-left modal-buttons\">\r\n                            <button id=\"editComponentSuccessClose\" type=\"button\" class=\"btn btn-default btn-edit btn-edit-close\" (click)=\"c('Close click')\">Close</button>\r\n                        </div>\r\n                        <div class=\"col-md-6 pull-left modal-buttons\" style=\"text-align: right;\">\r\n                            <button type=\"button\" class=\"btn btn-primary btn-edit btn-edit-save\" (click)=\"openComponentModalNew(viewComponent,newDeleteDataIndex,'view', currentDC)\">View Component</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"apiFailed\" style=\"display: none\">\r\n                <div class=\"form-modal\" style=\"padding-bottom: 40px;\">\r\n                    <div class=\"header_title\" style=\"text-align: center;\">Edit Component</div>\r\n                    <div style=\"color: red;\" class=\"apiMsg\">Something went wrong !</div>\r\n                    <p id=\"editComponentApiErrorMsg\" style=\"color: red;\"></p>\r\n                </div>\r\n                <div class=\"col-md-12 form-modal\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 pull-left modal-buttons\">\r\n                            <button type=\"button\" class=\"btn btn-default btn-edit-cancel\" (click)=\"addDataAgain()\">Retry</button>\r\n                        </div>\r\n                        <div class=\"col-md-6 pull-left modal-buttons\" style=\"text-align: right;\">\r\n                            <button type=\"button\" class=\"btn btn-primary save_btn btn-edit-close\" (click)=\"c('Close click')\">Close</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #viewComponent let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"modalForm\">\r\n            <div class=\"form-modal\">\r\n                <div class=\"header_title text-center\">{{componentRecords.name}}</div>\r\n                <h2 class=\"text-center\">{{componentRecords.type}}</h2>\r\n                <h3 class=\"text-center\">{{componentRecords.version}}</h3>\r\n                <br>\r\n            </div>\r\n\r\n            <div *ngIf=\"componentRecords.type == 'NEXUS';then threshold_view\"></div>\r\n            <ng-template #threshold_view>\r\n                <div class=\"form-modal\">\r\n                    <h4 class=\"text-center\">Threshold Value</h4>\r\n                </div>\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                        <tr>\r\n                            <td></td>\r\n                            <td>WARNING</td>\r\n                            <td>ALERT</td>\r\n                            <td>MAX</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>VRF</td>\r\n                            <td>\r\n                                <span>{{componentRecords.vrfWarnStart}}</span>\r\n                                <i class=\"bar\"></i>\r\n                            </td>\r\n                            <td>\r\n                                <span>{{componentRecords.vrfWarnEnd}}</span>\r\n                                <i class=\"bar\"></i>\r\n                            </td>\r\n                            <td>\r\n                                <span>{{componentRecords.vrfMax}}</span>\r\n                                <i class=\"bar\"></i>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>BGP</td>\r\n                            <td>\r\n                                <span>{{componentRecords.bgpPeersWarnStart}}</span>\r\n                                <i class=\"bar\"></i>\r\n                            </td>\r\n                            <td>\r\n                                <span>{{componentRecords.bgpPeersWarnEnd}}</span>\r\n                                <i class=\"bar\"></i>\r\n                            </td>\r\n                            <td>\r\n                                <span>{{componentRecords.bgpPeersMax}}</span>\r\n                                <i class=\"bar\"></i>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Vlan</td>\r\n                            <td>\r\n                                <span>{{componentRecords.vlanWarnStart}}</span>\r\n                                <i class=\"bar\"></i>\r\n                            </td>\r\n                            <td>\r\n                                <span>{{componentRecords.vlanWarnEnd}}</span>\r\n                                <i class=\"bar\"></i>\r\n                            </td>\r\n                            <td>\r\n                                <span>{{componentRecords.vlanMax}}</span>\r\n                                <i class=\"bar\"></i>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Harp</td>\r\n                            <td>\r\n                                <span>{{componentRecords.hsrpWarnStart}}</span>\r\n                                <i class=\"bar\"></i>\r\n                            </td>\r\n                            <td>\r\n                                <span>{{componentRecords.hsrpWarnEnd}}</span>\r\n                                <i class=\"bar\"></i>\r\n                            </td>\r\n                            <td>\r\n                                <span>{{componentRecords.hsrpMax}}</span>\r\n                                <i class=\"bar\"></i>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Static Router</td>\r\n                            <td>\r\n                                <span>{{componentRecords.staticRoutesWarnStart}}</span>\r\n                                <i class=\"bar\"></i>\r\n                            </td>\r\n                            <td>\r\n                                <span>{{componentRecords.staticRoutesWarnEnd}}</span>\r\n                                <i class=\"bar\"></i>\r\n                            </td>\r\n                            <td>\r\n                                <span>{{componentRecords.staticRoutesMax}}</span>\r\n                                <i class=\"bar\"></i>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n            </ng-template>\r\n            <div class=\"col-md-12 form-modal\">\r\n                <div class=\"row\">\r\n                    <div class=\"offset-md-1 col-md-5 pull-left modal-buttons\">\r\n                        <button id='closeViewComponentModal' type=\"button\" class=\"btn btn-default btn-edit btn-edit-cancel\" (click)=\"c('Close click')\">Cancel</button>\r\n                    </div>\r\n                    <div class=\"col-md-5 pull-left modal-buttons\" style=\"text-align: right;\">\r\n                        <button type=\"button\" class=\"btn btn-primary btn-edit btn-edit-edit\" (click)=\"openComponentModalNew(editComponent,currentRow,'edit', currentDC, true)\">Edit</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/provisioning/provisioning.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvisioningComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__("../../../../../src/app/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_menu_items_menu_items__ = __webpack_require__("../../../../../src/app/shared/menu-items/menu-items.ts");
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
    function ProvisioningComponent(modalService, config, router, menuItems) {
        this.modalService = modalService;
        this.config = config;
        this.router = router;
        this.menuItems = menuItems;
        this.imgUrl = "assets/images/icon-cube.png";
        this.callMatricsFilter = false;
        this.editComponentFilter = false;
        this.apiStatus = false;
        this.apiStatusMsg = false;
        this.name = '';
        this.country = 'Country*';
        this.state = 'State*';
        this.city = 'City*';
        this.timezone = 'Time zone*';
        this.apiError = 1;
        this.userId = sessionStorage.id;
        this.ComVersion = 'Type*';
        this.ComSubVersion = 'Sub Type';
        this.enablePassword = '';
        //Thresholds
        this.vrfWarnStart = '';
        this.vrfWarnEnd = '';
        this.vrfMax = '';
        this.bgpPeersWarnStart = '';
        this.bgpPeersWarnEnd = '';
        this.bgpPeersMax = '';
        this.vlanWarnStart = '';
        this.vlanWarnEnd = '';
        this.vlanMax = '';
        this.hsrpWarnStart = '';
        this.hsrpWarnEnd = '';
        this.hsrpMax = '';
        this.staticRoutesWarnStart = '';
        this.staticRoutesWarnEnd = '';
        this.staticRoutesMax = '';
        this.vrrpWarnStart = '';
        this.vrrpWarnEnd = '';
        this.vrrpMax = '';
        this.showNullRowMessage = false;
        this.editFromView = false;
        sessionStorage.setItem('previousUrl', this.router.url);
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
    }
    ProvisioningComponent.prototype.open = function (content, id, type) {
        var _this = this;
        if (id === void 0) { id = 0; }
        if (type == 'delete' || type == 'edit') {
            this.editIdIndex = id;
            this.editId = this.dataCenters[this.editIdIndex].id;
            this.editData = this.dataCenters[id];
            this.callMatricsFilter = false;
            $('#callMatricsDropdown' + id).hide();
            if (type == 'edit') {
                this.config.getStates(this.editData.countryid).subscribe(function (res) {
                    _this.statesList = res;
                });
                this.config.getCities(this.editData.stateid).subscribe(function (res) {
                    _this.citiesList = res;
                });
            }
        }
        this.modalService.open(content, { windowClass: 'custom_modal', backdrop: 'static' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
            if (type == 'add' && _this.closeResult == 'Closed with: Close click') {
                _this.name = '';
                _this.country = 'Country*';
                _this.state = 'State*';
                _this.city = 'City*';
                _this.timezone = 'Time zone*';
            }
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ProvisioningComponent.prototype.hide = function (id) {
        $('.cred' + id).show();
        $('.span' + id).hide();
    };
    ProvisioningComponent.prototype.deleteDC = function () {
        var _this = this;
        this.config.deleteDataCenter(this.userId, this.editId).subscribe(function (res) {
            $('.modalForm').hide();
            $('.apiResponseDiv').show();
            if (res.status == 'success') {
                _this.provisioningList();
                sessionStorage.setItem('reloadLeftNav', 'yes');
                _this.menuItems.getAll();
                $('.apiFailed').hide();
                $('.apiSuccess').show();
            }
            else {
                $('#deleteApiErrorMsg').html(res.message);
                $('.apiSuccess').hide();
                $('.apiFailed').show();
            }
        });
    };
    ProvisioningComponent.prototype.openComponentModal = function (content) {
        var _this = this;
        this.modalService.open(content, { windowClass: 'custom_modal', size: 'lg', backdrop: 'static' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
            if (_this.closeResult == 'Closed with: Close click') {
                _this.comName = '';
                _this.ComVersion = 'Type*';
                _this.ComSubVersion = 'Sub Type';
                _this.componentUser = '';
                _this.password = '';
                _this.ipAddress = '';
                _this.enablePassword = '';
                _this.vrfWarnStart = '';
                _this.vrfWarnEnd = '';
                _this.vrfMax = '';
                _this.bgpPeersWarnStart = '';
                _this.bgpPeersWarnEnd = '';
                _this.bgpPeersMax = '';
                _this.vlanWarnStart = '';
                _this.vlanWarnEnd = '';
                _this.vlanMax = '';
                _this.hsrpWarnStart = '';
                _this.hsrpWarnEnd = '';
                _this.hsrpMax = '';
                _this.staticRoutesWarnStart = '';
                _this.staticRoutesWarnEnd = '';
                _this.staticRoutesMax = '';
            }
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
        this.fadeModalContent();
    };
    ProvisioningComponent.prototype.fadeModalContent = function () {
        $('.f1 fieldset:first').fadeIn('slow');
    };
    ProvisioningComponent.prototype.openComponentModalNew = function (content, id, type, currentdatacenter, editFromView) {
        var _this = this;
        if (id === void 0) { id = 0; }
        if (editFromView === void 0) { editFromView = false; }
        $('#editComponentDropdown' + id).hide();
        this.newDeleteDataIndex = id;
        if (type == 'delete' || type == 'edit' || 'view') {
            this.deleteData = this.dataCentersDetails[id];
            this.currentDataCenterComponentId = this.dataCentersDetails[id].id;
            this.componentRecords = [];
            this.config.getDataCenterComponentRecords(this.currentDataCenterComponentId).subscribe(function (res) {
                _this.componentRecords = res;
                var type_id = _this.componentRecords.type;
                var Subtype_id = _this.componentRecords.version;
                if (type == 'edit') {
                    _this.config.getSubtypes(type_id).subscribe(function (res) {
                        _this.subTypesEdit = res;
                    });
                    _this.editComponentVersion = Subtype_id;
                }
            });
            this.currentRow = id;
            if (editFromView == true) {
                $('#closeViewComponentModal').trigger('click');
            }
        }
        if (type == 'view') {
            $('#editComponentSuccessClose').trigger('click');
        }
        this.modalService.open(content, { windowClass: 'custom_modal', size: 'lg', backdrop: 'static' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ProvisioningComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return 'with: ${reason}';
        }
    };
    ProvisioningComponent.prototype.callMatricsClick = function (i) {
        this.callMatricsFilter = !this.callMatricsFilter;
        if (this.callMatricsFilter) {
            $('#callMatricsDropdown' + i).show();
        }
        else {
            $('#callMatricsDropdown' + i).hide();
        }
    };
    ProvisioningComponent.prototype.addComponent = function () {
        var _this = this;
        if (this.next_step) {
            if (this.ComSubVersion == 'Sub Type') {
                this.ComSubVersion = '';
            }
            if (this.ComVersion != 'NEXUS') {
                this.vrfWarnStart = '';
                this.vrfWarnEnd = '';
                this.vrfMax = '';
                this.bgpPeersWarnStart = '';
                this.bgpPeersWarnEnd = '';
                this.bgpPeersMax = '';
                this.vlanWarnStart = '';
                this.vlanWarnEnd = '';
                this.vlanMax = '';
                this.hsrpWarnStart = '';
                this.hsrpWarnEnd = '';
                this.hsrpMax = '';
                this.staticRoutesWarnStart = '';
                this.staticRoutesWarnEnd = '';
                this.staticRoutesMax = '';
            }
            if (this.ComVersion != 'ASA') {
                this.enablePassword = '';
            }
            this.config.componentAdd(this.userId, this.comName, this.currentDC, this.ComVersion, this.ipAddress, this.ComSubVersion, '', this.componentUser, this.password, this.enablePassword, this.vrfWarnStart, this.vrfWarnEnd, this.vrfMax, this.bgpPeersWarnStart, this.bgpPeersWarnEnd, this.bgpPeersMax, this.vlanWarnStart, this.vlanWarnEnd, this.vlanMax, this.hsrpWarnStart, this.hsrpWarnEnd, this.hsrpMax, this.staticRoutesWarnStart, this.staticRoutesWarnEnd, this.staticRoutesMax, this.vrrpWarnStart, this.vrrpWarnEnd, this.vrrpMax).subscribe(function (res) {
                if (res.status == 'success') {
                    _this.provisioningList();
                    _this.apiError = 1;
                    _this.currentDataCenterComponentId = res.component_id;
                    sessionStorage.setItem('reloadLeftNav', 'yes');
                    _this.menuItems.getAll();
                    $('#apiErrorMsg').hide();
                    $('#complete-title').html("Complete");
                    $('#complete-title').attr('style', 'color: #7bbf6a !important');
                    $('#complete-icon').attr('class', 'fa fa-check');
                    $('#complete-step').attr('style', 'background-color: #7bbf6a !important; border: unset !important;');
                    $('.f1-progress-error').hide();
                }
                else {
                    _this.apiError = 0;
                    $('#apiErrorMsg').show();
                    $('#apiErrorMsg').html(res.message);
                    $('#complete-step').attr('style', 'background-color: red !important; border: unset !important;');
                    $('#complete-icon').attr('class', 'fa fa-close');
                    $('#complete-title').html("Error");
                    $('#complete-title').attr('style', 'color: red !important');
                    $('.f1-progress-line').attr('style', 'width: 75%;');
                    $('.f1-progress-error').show();
                }
            });
        }
    };
    ProvisioningComponent.prototype.addComTryAgain = function () {
        $("#complete").removeClass('active').addClass('activated');
        $("#f1-step_1").removeClass('activated').addClass('active');
        if (this.ComSubVersion == '') {
            this.ComSubVersion = 'Sub Type';
        }
        $("#fieldset_4").fadeOut(500, function () { });
        $("#fieldset_1").fadeIn(500, function () { });
    };
    ProvisioningComponent.prototype.getComponentDetails = function (content, componentId) {
        var _this = this;
        $('#addComponentSuccessClose').trigger('click');
        this.componentRecords = [];
        this.config.getDataCenterComponentRecords(componentId).subscribe(function (res) {
            _this.componentRecords = res;
        });
        this.modalService.open(content, { windowClass: 'custom_modal', backdrop: 'static', size: 'lg' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ProvisioningComponent.prototype.next = function (event, value) {
        this.next_step = true;
        if (value == 1) {
            if ($('#addComponentName').val() == '') {
                $('#NameBar').css('border-bottom', '0.0625rem solid red');
                this.next_step = false;
            }
            else {
                $('#NameBar').css('border-bottom', '0.0625rem solid #999');
            }
        }
        else if (value == 2) {
            if ($('#addComponentType').val() == 'Type*') {
                $('#Typebar').css('border-bottom', '0.0625rem solid red');
                this.next_step = false;
            }
            else {
                $('#Typebar').css('border-bottom', '0.0625rem solid #999');
            }
        }
        else if (value == 3) {
            if ($('#addIpAddress').val() == '') {
                $('#ipAddressBar').css('border-bottom', '0.0625rem solid red');
                this.next_step = false;
            }
            else {
                var ip_val = this.ipValidation($('#addIpAddress').val());
                if (ip_val == 'success') {
                    $('#ipAddressBar').css('border-bottom', '0.0625rem solid #999');
                }
                else {
                    $('#ipAddressBar').css('border-bottom', '0.0625rem solid red');
                    this.next_step = false;
                }
            }
            if ($('#addComponentUser').val() == '') {
                $('#UserBar').css('border-bottom', '0.0625rem solid red');
                this.next_step = false;
            }
            else {
                $('#UserBar').css('border-bottom', '0.0625rem solid #999');
            }
            if ($('#addComponentPassword').val() == '') {
                $('#PasswordBar').css('border-bottom', '0.0625rem solid red');
                this.next_step = false;
            }
            else {
                $('#PasswordBar').css('border-bottom', '0.0625rem solid #999');
            }
        }
        //Thresholds Validation
        if (value == 2) {
            if (!this.thresholdsValidate()) {
                this.next_step = false;
            }
        }
        if (this.next_step) {
            this.progressPerc = (($(".f1-progress-line").css('width').slice(0, -2) * 100) / $(".f1-progress").css('width').slice(0, -2));
            var fieldSet = event.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
            $(fieldSet).fadeOut(1, function () { });
            $(".f1-step.active").removeClass('active').addClass('activated').next().removeClass('next').addClass('active').next().addClass('next');
            if (value == 1 && this.progressPerc == '25') {
                $(".f1-progress-line").css('width', '50%');
            }
            else if (value == 2 && this.progressPerc == '50') {
                $(".f1-progress-line").css('width', '75%');
            }
            else if (value == 3 && this.progressPerc == '75') {
                $(".f1-progress-line").css('width', '100%');
            }
            if ($(".f1-step.active").attr('id') == 'complete') {
                $(".f1-step-icon").css('cursor', 'default');
            }
            $(fieldSet).next().fadeIn(1, function () { });
        }
    };
    ProvisioningComponent.prototype.thresholdsValidate = function () {
        var thrFlag = true;
        if (this.ComVersion == 'NEXUS') {
            if (this.vrfWarnStart == '') {
                $('#add-vrfWarnStart').css('border-bottom', '0.0625rem solid red');
                thrFlag = false;
            }
            else {
                $('#add-vrfWarnStart').css('border-bottom', '0.0625rem solid #999');
            }
            if (this.vrfWarnEnd == '') {
                $('#add-vrfWarnEnd').css('border-bottom', '0.0625rem solid red');
                thrFlag = false;
            }
            else {
                $('#add-vrfWarnEnd').css('border-bottom', '0.0625rem solid #999');
            }
            if (this.vrfMax == '') {
                $('#add-vrfMax').css('border-bottom', '0.0625rem solid red');
                thrFlag = false;
            }
            else {
                $('#add-vrfMax').css('border-bottom', '0.0625rem solid #999');
            }
            if (this.bgpPeersWarnStart == '') {
                $('#add-bgpPeersWarnStart').css('border-bottom', '0.0625rem solid red');
                thrFlag = false;
            }
            else {
                $('#add-bgpPeersWarnStart').css('border-bottom', '0.0625rem solid #999');
            }
            if (this.bgpPeersWarnEnd == '') {
                $('#add-bgpPeersWarnEnd').css('border-bottom', '0.0625rem solid red');
                thrFlag = false;
            }
            else {
                $('#add-bgpPeersWarnEnd').css('border-bottom', '0.0625rem solid #999');
            }
            if (this.bgpPeersMax == '') {
                $('#add-bgpPeersMax').css('border-bottom', '0.0625rem solid red');
                thrFlag = false;
            }
            else {
                $('#add-bgpPeersMax').css('border-bottom', '0.0625rem solid #999');
            }
            if (this.vlanWarnStart == '') {
                $('#add-vlanWarnStart').css('border-bottom', '0.0625rem solid red');
                thrFlag = false;
            }
            else {
                $('#add-vlanWarnStart').css('border-bottom', '0.0625rem solid #999');
            }
            if (this.vlanWarnEnd == '') {
                $('#add-vlanWarnEnd').css('border-bottom', '0.0625rem solid red');
                thrFlag = false;
            }
            else {
                $('#add-vlanWarnEnd').css('border-bottom', '0.0625rem solid #999');
            }
            if (this.vlanMax == '') {
                $('#add-vlanMax').css('border-bottom', '0.0625rem solid red');
                thrFlag = false;
            }
            else {
                $('#add-vlanMax').css('border-bottom', '0.0625rem solid #999');
            }
            if (this.hsrpWarnStart == '') {
                $('#add-hsrpWarnStart').css('border-bottom', '0.0625rem solid red');
                thrFlag = false;
            }
            else {
                $('#add-hsrpWarnStart').css('border-bottom', '0.0625rem solid #999');
            }
            if (this.hsrpWarnEnd == '') {
                $('#add-hsrpWarnEnd').css('border-bottom', '0.0625rem solid red');
                thrFlag = false;
            }
            else {
                $('#add-hsrpWarnEnd').css('border-bottom', '0.0625rem solid #999');
            }
            if (this.hsrpMax == '') {
                $('#add-hsrpMax').css('border-bottom', '0.0625rem solid red');
                thrFlag = false;
            }
            else {
                $('#add-hsrpMax').css('border-bottom', '0.0625rem solid #999');
            }
            if (this.staticRoutesWarnStart == '') {
                $('#add-staticRoutesWarnStart').css('border-bottom', '0.0625rem solid red');
                thrFlag = false;
            }
            else {
                $('#add-staticRoutesWarnStart').css('border-bottom', '0.0625rem solid #999');
            }
            if (this.staticRoutesWarnEnd == '') {
                $('#add-staticRoutesWarnEnd').css('border-bottom', '0.0625rem solid red');
                thrFlag = false;
            }
            else {
                $('#add-staticRoutesWarnEnd').css('border-bottom', '0.0625rem solid #999');
            }
            if (this.staticRoutesMax == '') {
                $('#add-staticRoutesMax').css('border-bottom', '0.0625rem solid red');
                thrFlag = false;
            }
            else {
                $('#add-staticRoutesMax').css('border-bottom', '0.0625rem solid #999');
            }
        }
        //Thresholds Validation Ends
        if (this.subTypes) {
            if (this.ComVersion == 'Type*') {
                $('#add-ComSubVersion').css('border-bottom', '0.0625rem solid #999');
            }
            else if (this.ComSubVersion == 'Sub Type' && this.subTypes.length > 0) {
                $('#add-ComSubVersion').css('border-bottom', '0.0625rem solid red');
                thrFlag = false;
            }
            else {
                $('#add-ComSubVersion').css('border-bottom', '0.0625rem solid #999');
            }
        }
        else {
            $('#add-ComSubVersion').css('border-bottom', '0.0625rem solid #999');
        }
        return thrFlag;
    };
    ProvisioningComponent.prototype.ipValidation = function (ipAddr) {
        var ipformat = "/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/";
        if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAddr)) {
            return 'success';
        }
        else {
            return 'failed';
        }
    };
    ProvisioningComponent.prototype.previous = function (event) {
        var fieldSet = event.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
        $(fieldSet).fadeOut(1, function () { });
        $(".f1-step.active").removeClass('active').addClass('activated').prev().addClass('active');
        $(fieldSet).prev().fadeIn(1, function () { });
    };
    ProvisioningComponent.prototype.tabClick = function (event, id) {
        var flag_id = true;
        if (id == 2 || id == 3) {
            if ($(".f1-step.active").attr('id') == "f1-step_1") {
                if ($('#addComponentName').val() == '') {
                    $('#NameBar').css('border-bottom', '0.0625rem solid red');
                    flag_id = false;
                }
                else {
                    $('#NameBar').css('border-bottom', '0.0625rem solid #999');
                }
            }
        }
        if (id == 3) {
            if ($('#addComponentType').val() == 'Type*') {
                $('#Typebar').css('border-bottom', '0.0625rem solid red');
                flag_id = false;
            }
            else {
                $('#Typebar').css('border-bottom', '0.0625rem solid #999');
            }
            if (!this.thresholdsValidate()) {
                flag_id = false;
            }
        }
        if (flag_id) {
            if ($(".f1-step.active").attr('id') != 'complete') {
                var fieldSet = event.currentTarget.parentElement;
                if ($(fieldSet).attr("class") == 'f1-step activated' || $(fieldSet).attr("class") == 'f1-step activated next') {
                    $(".f1-step.active").removeClass('active').addClass('activated');
                    $(fieldSet).removeClass('activated').addClass('active');
                    $('fieldSet').fadeOut(1, function () { });
                    $("#fieldset_" + id).fadeIn(1, function () { });
                }
            }
        }
    };
    ProvisioningComponent.prototype.editComponentClick = function (i) {
        for (var j = 0; j < this.dataCentersDetails.length; j++) {
            if (j == i) {
                if ($('#comp_filter').val() - 1 == i) {
                    $('#editComponentDropdown' + i).hide();
                    $('#comp_filter').val("");
                }
                else {
                    $('#editComponentDropdown' + i).show();
                    $('#comp_filter').val(i + 1);
                }
            }
            else {
                $('#editComponentDropdown' + j).hide();
            }
        }
    };
    ProvisioningComponent.prototype.validateEdit = function (e) {
        var _this = this;
        var flag = false;
        if ($('#editDataCenterName').val() == '') {
            $('#nameBar').css('border-bottom', '0.0625rem solid red');
            var flag = true;
        }
        else {
            $('#nameBar').css('border-bottom', '0.0625rem solid #999');
        }
        if ($('#editDataCenterCountry').val() == 'Country*') {
            $('#countryBar').css('border-bottom', '0.0625rem solid red');
            var flag = true;
        }
        else {
            $('#countryBar').css('border-bottom', '0.0625rem solid #999');
        }
        if ($('#editDataCenterCountry').val() != 'Country*') {
            if ($('#editDataCenterState').val() == 'State*') {
                $('#stateBar').css('border-bottom', '0.0625rem solid red');
                var flag = true;
            }
            else {
                $('#stateBar').css('border-bottom', '0.0625rem solid #999');
            }
            if ($('#editDataCenterState').val() != 'State*') {
                if ($('#editDataCenterCity').val() == 'City*') {
                    $('#cityBar').css('border-bottom', '0.0625rem solid red');
                    var flag = true;
                }
                else {
                    $('#cityBar').css('border-bottom', '0.0625rem solid #999');
                }
            }
        }
        if ($('#editDataCenterTimezone').val() == 'Time zone*') {
            $('#timezoneBar').css('border-bottom', '0.0625rem solid red');
            var flag = true;
        }
        else {
            $('#timezoneBar').css('border-bottom', '0.0625rem solid #999');
        }
        if (flag != true) {
            var editName_1 = $('#editDataCenterName').val();
            var editId_1 = $('#editDataCenterId').val();
            var editCountry_1 = $('#editDataCenterCountry').val();
            var editState_1 = $('#editDataCenterState').val();
            var editCity_1 = $('#editDataCenterCity').val();
            var editTimezone_1 = $('#editDataCenterTimezone').val();
            setTimeout(function () {
                _this.config.editDataCenter(_this.userId, editId_1, editName_1, editCountry_1, editState_1, editCity_1, editTimezone_1).subscribe(function (res) {
                    $('.modalForm').hide();
                    $('.apiResponseDiv').show();
                    if (res.status == 'success') {
                        $('#callMatricsDropdown' + _this.editIdIndex).hide();
                        _this.provisioningList(_this.editData.id, true);
                        $('.apiFailed').hide();
                        $('.apiSuccess').show();
                    }
                    else {
                        $('#editApiErrorMsg').html(res.message);
                        $('.apiSuccess').hide();
                        $('.apiFailed').show();
                    }
                });
            }, 100);
        }
    };
    ProvisioningComponent.prototype.validateEditComponent = function (e) {
        var _this = this;
        var flag = false;
        if ($('#editComponentName').val() == '') {
            $('#editComponentBar1').css('border-bottom', '0.0625rem solid red');
            flag = true;
        }
        else {
            $('#editComponentBar1').css('border-bottom', '0.0625rem solid #999');
        }
        if ($('#editComponentNameType').val() == 'Type*') {
            $('#editComponentBar2').css('border-bottom', '0.0625rem solid red');
            flag = true;
        }
        else {
            $('#editComponentBar2').css('border-bottom', '0.0625rem solid #999');
        }
        /*if ($('#editComponentVersion').val() == 'Sub Type') {
          $('#editComponentBar3').css('border-bottom', '0.0625rem solid red');
          var flag = true;
        } else {
          $('#editComponentBar3').css('border-bottom', '0.0625rem solid #999');
        }*/
        if ($('#editComponentIpAddress').val() == '') {
            $('#editComponentBar4').css('border-bottom', '0.0625rem solid red');
            flag = true;
        }
        else {
            var ip_val = this.ipValidation($('#editComponentIpAddress').val());
            if (ip_val == 'success') {
                $('#editComponentBar4').css('border-bottom', '0.0625rem solid #999');
            }
            else {
                $('#editComponentBar4').css('border-bottom', '0.0625rem solid red');
                flag = true;
            }
        }
        if ($('#editComponentComponentUser').val() == '') {
            $('#editComponentBar5').css('border-bottom', '0.0625rem solid red');
            flag = true;
        }
        else {
            $('#editComponentBar5').css('border-bottom', '0.0625rem solid #999');
        }
        if ($('#editComponentPassword').val() == '') {
            $('#editComponentBar6').css('border-bottom', '0.0625rem solid red');
            flag = true;
        }
        else {
            $('#editComponentBar6').css('border-bottom', '0.0625rem solid #999');
        }
        if ($('#editComponentNameType').val() == 'NEXUS') {
            if ($('#editComponentvrfWarnStart').val() == '') {
                $('#editComponentBar7').css('border-bottom', '0.0625rem solid red');
                flag = true;
            }
            else {
                $('#editComponentBar7').css('border-bottom', '0.0625rem solid #999');
            }
            if ($('#editComponentvrfWarnEnd').val() == '') {
                $('#editComponentBar8').css('border-bottom', '0.0625rem solid red');
                flag = true;
            }
            else {
                $('#editComponentBar8').css('border-bottom', '0.0625rem solid #999');
            }
            if ($('#editComponentvrfMax').val() == '') {
                $('#editComponentBar9').css('border-bottom', '0.0625rem solid red');
                flag = true;
            }
            else {
                $('#editComponentBar9').css('border-bottom', '0.0625rem solid #999');
            }
            if ($('#editComponentbgpPeersWarnStart').val() == '') {
                $('#editComponentBar10').css('border-bottom', '0.0625rem solid red');
                flag = true;
            }
            else {
                $('#editComponentBar10').css('border-bottom', '0.0625rem solid #999');
            }
            if ($('#editComponentbgpPeersWarnEnd').val() == '') {
                $('#editComponentBar11').css('border-bottom', '0.0625rem solid red');
                flag = true;
            }
            else {
                $('#editComponentBar11').css('border-bottom', '0.0625rem solid #999');
            }
            if ($('#editComponentbgpPeersMax').val() == '') {
                $('#editComponentBar12').css('border-bottom', '0.0625rem solid red');
                flag = true;
            }
            else {
                $('#editComponentBar12').css('border-bottom', '0.0625rem solid #999');
            }
            if ($('#editComponentvlanWarnStart').val() == '') {
                $('#editComponentBar13').css('border-bottom', '0.0625rem solid red');
                flag = true;
            }
            else {
                $('#editComponentBar13').css('border-bottom', '0.0625rem solid #999');
            }
            if ($('#editComponentvlanWarnEnd').val() == '') {
                $('#editComponentBar14').css('border-bottom', '0.0625rem solid red');
                flag = true;
            }
            else {
                $('#editComponentBar14').css('border-bottom', '0.0625rem solid #999');
            }
            if ($('#editComponentvlanMax').val() == '') {
                $('#editComponentBar15').css('border-bottom', '0.0625rem solid red');
                flag = true;
            }
            else {
                $('#editComponentBar15').css('border-bottom', '0.0625rem solid #999');
            }
            if ($('#editComponenthsrpWarnStart').val() == '') {
                $('#editComponentBar16').css('border-bottom', '0.0625rem solid red');
                flag = true;
            }
            else {
                $('#editComponentBar16').css('border-bottom', '0.0625rem solid #999');
            }
            if ($('#editComponenthsrpWarnEnd').val() == '') {
                $('#editComponentBar17').css('border-bottom', '0.0625rem solid red');
                flag = true;
            }
            else {
                $('#editComponentBar17').css('border-bottom', '0.0625rem solid #999');
            }
            if ($('#editComponenthsrpMax').val() == '') {
                $('#editComponentBar18').css('border-bottom', '0.0625rem solid red');
                flag = true;
            }
            else {
                $('#editComponentBar18').css('border-bottom', '0.0625rem solid #999');
            }
            if ($('#editComponentstaticRoutesWarnStart').val() == '') {
                $('#editComponentBar19').css('border-bottom', '0.0625rem solid red');
                flag = true;
            }
            else {
                $('#editComponentBar19').css('border-bottom', '0.0625rem solid #999');
            }
            if ($('#editComponentstaticRoutesWarnEnd').val() == '') {
                $('#editComponentBar20').css('border-bottom', '0.0625rem solid red');
                flag = true;
            }
            else {
                $('#editComponentBar20').css('border-bottom', '0.0625rem solid #999');
            }
            if ($('#editComponentstaticRoutesMax').val() == '') {
                $('#editComponentBar21').css('border-bottom', '0.0625rem solid red');
                flag = true;
            }
            else {
                $('#editComponentBar21').css('border-bottom', '0.0625rem solid #999');
            }
        }
        if (this.subTypesEdit) {
            if ($('#editComponentNameType').val() == 'Type*') {
                $('#editComponentBar3').css('border-bottom', '0.0625rem solid #999');
            }
            else if ($('#editComponentVersion').val() == 'Sub Type' && this.subTypesEdit.length > 0) {
                $('#editComponentBar3').css('border-bottom', '0.0625rem solid red');
                flag = true;
            }
            else {
                $('#editComponentBar3').css('border-bottom', '0.0625rem solid #999');
            }
        }
        else {
            $('#editComponentBar3').css('border-bottom', '0.0625rem solid #999');
        }
        if (flag != true) {
            var editComponentName_1 = $('#editComponentName').val();
            var editComponentNameType_1 = $('#editComponentNameType').val();
            var editComponentVersion_1 = $('#editComponentVersion').val();
            var editComponentIpAddress_1 = $('#editComponentIpAddress').val();
            var editComponentComponentUser_1 = $('#editComponentComponentUser').val();
            var editComponentPassword_1 = $('#editComponentPassword').val();
            var editComponentEnablePassword_1 = editComponentNameType_1 == 'ASA' ? $('#editComponentEnablePassword').val() : '';
            var editComponentvrfWarnStart_1 = editComponentNameType_1 == 'NEXUS' ? $('#editComponentvrfWarnStart').val() : '';
            var editComponentvrfWarnEnd_1 = editComponentNameType_1 == 'NEXUS' ? $('#editComponentvrfWarnEnd').val() : '';
            var editComponentvrfMax_1 = editComponentNameType_1 == 'NEXUS' ? $('#editComponentvrfMax').val() : '';
            var editComponentbgpPeersWarnStart_1 = editComponentNameType_1 == 'NEXUS' ? $('#editComponentbgpPeersWarnStart').val() : '';
            var editComponentbgpPeersWarnEnd_1 = editComponentNameType_1 == 'NEXUS' ? $('#editComponentbgpPeersWarnEnd').val() : '';
            var editComponentbgpPeersMax_1 = editComponentNameType_1 == 'NEXUS' ? $('#editComponentbgpPeersMax').val() : '';
            var editComponentvlanWarnStart_1 = editComponentNameType_1 == 'NEXUS' ? $('#editComponentvlanWarnStart').val() : '';
            var editComponentvlanWarnEnd_1 = editComponentNameType_1 == 'NEXUS' ? $('#editComponentvlanWarnEnd').val() : '';
            var editComponentvlanMax_1 = editComponentNameType_1 == 'NEXUS' ? $('#editComponentvlanMax').val() : '';
            var editComponenthsrpWarnStart_1 = editComponentNameType_1 == 'NEXUS' ? $('#editComponenthsrpWarnStart').val() : '';
            var editComponenthsrpWarnEnd_1 = editComponentNameType_1 == 'NEXUS' ? $('#editComponenthsrpWarnEnd').val() : '';
            var editComponenthsrpMax_1 = editComponentNameType_1 == 'NEXUS' ? $('#editComponenthsrpMax').val() : '';
            var editComponentstaticRoutesWarnStart_1 = editComponentNameType_1 == 'NEXUS' ? $('#editComponentstaticRoutesWarnStart').val() : '';
            var editComponentstaticRoutesWarnEnd_1 = editComponentNameType_1 == 'NEXUS' ? $('#editComponentstaticRoutesWarnEnd').val() : '';
            var editComponentstaticRoutesMax_1 = editComponentNameType_1 == 'NEXUS' ? $('#editComponentstaticRoutesMax').val() : '';
            setTimeout(function () {
                _this.config.editComponent(_this.userId, _this.currentDataCenterComponentId, editComponentName_1, editComponentNameType_1, editComponentVersion_1, editComponentIpAddress_1, editComponentComponentUser_1, editComponentPassword_1, editComponentEnablePassword_1, editComponentvrfWarnStart_1, editComponentvrfWarnEnd_1, editComponentvrfMax_1, editComponentbgpPeersWarnStart_1, editComponentbgpPeersWarnEnd_1, editComponentbgpPeersMax_1, editComponentvlanWarnStart_1, editComponentvlanWarnEnd_1, editComponentvlanMax_1, editComponenthsrpWarnStart_1, editComponenthsrpWarnEnd_1, editComponenthsrpMax_1, editComponentstaticRoutesWarnStart_1, editComponentstaticRoutesWarnEnd_1, editComponentstaticRoutesMax_1).subscribe(function (res) {
                    $('.modalForm').hide();
                    $('.apiResponseDiv').show();
                    if (res.status == 'success') {
                        $('#editComponentDropdown' + _this.currentRow).hide();
                        _this.setDataCenterComponnets(_this.currentDC);
                        $('.apiFailed').hide();
                        $('.apiSuccess').show();
                    }
                    else {
                        $('#editComponentApiErrorMsg').html(res.message);
                        $('.apiSuccess').hide();
                        $('.apiFailed').show();
                    }
                });
            }, 100);
        }
    };
    ProvisioningComponent.prototype.ngOnInit = function () {
        if (!sessionStorage.username || !sessionStorage.id || typeof sessionStorage.username == 'undefined' || typeof sessionStorage.id == 'undefined') {
            this.router.navigate(['login']);
        }
        this.CountryTimezoneList();
        this.ComponentTypeList();
        this.provisioningList();
    };
    ProvisioningComponent.prototype.onClickedOutside = function (e) {
        //dosomething
    };
    ProvisioningComponent.prototype.CountryTimezoneList = function () {
        var _this = this;
        setTimeout(function () {
            _this.config.getCountryList().subscribe(function (res) {
                _this.country_list = res.country;
                _this.time_zone_list = res.timezone;
            });
        }, 100);
    };
    ProvisioningComponent.prototype.ComponentTypeList = function () {
        var _this = this;
        setTimeout(function () {
            _this.config.getTypes().subscribe(function (res) {
                _this.version = res;
            });
        }, 100);
    };
    ProvisioningComponent.prototype.provisioningList = function (id, loop_status) {
        var _this = this;
        if (id === void 0) { id = 0; }
        if (loop_status === void 0) { loop_status = false; }
        setTimeout(function () {
            _this.config.getProvisioningList().subscribe(function (res) {
                _this.dataCenters = res;
                if (_this.dataCenters.length >= 1) {
                    $('#withdcBlock').show();
                }
                else {
                    $('#withoutdcBlock').show();
                }
                if (loop_status) {
                    id = _this.findDataCenterIndex(id);
                }
                _this.selectedDataCenter = id;
                _this.dataCenterScrollClick(id, 'auto');
            });
        }, 100);
    };
    ProvisioningComponent.prototype.findDataCenterIndex = function (responseId) {
        for (var i = 0; i < this.dataCenters.length; i++) {
            if (this.dataCenters[i].id == responseId) {
                return i;
            }
        }
    };
    ProvisioningComponent.prototype.onSubmit = function () {
        var _this = this;
        var flag = false;
        if ($('#addDataCenterName').val() == '') {
            $('#addnameBar').css('border-bottom', '0.0625rem solid red');
            var flag = true;
        }
        else {
            $('#addnameBar').css('border-bottom', '0.0625rem solid #999');
        }
        if ($('#addDataCenterCountry').val() == 'Country*') {
            $('#addcountryBar').css('border-bottom', '0.0625rem solid red');
            var flag = true;
        }
        else {
            $('#addcountryBar').css('border-bottom', '0.0625rem solid #999');
        }
        if ($('#addDataCenterCountry').val() != 'Country*') {
            if ($('#addDataCenterState').val() == 'State*') {
                $('#addstateBar').css('border-bottom', '0.0625rem solid red');
                var flag = true;
            }
            else {
                $('#addstateBar').css('border-bottom', '0.0625rem solid #999');
            }
            if ($('#addDataCenterState').val() != 'State*') {
                if ($('#addDataCenterCity').val() == 'City*') {
                    $('#addcityBar').css('border-bottom', '0.0625rem solid red');
                    var flag = true;
                }
                else {
                    $('#addcityBar').css('border-bottom', '0.0625rem solid #999');
                }
            }
        }
        if ($('#addDataCenterTimezone').val() == 'Time zone*') {
            $('#addtimezoneBar').css('border-bottom', '0.0625rem solid red');
            var flag = true;
        }
        else {
            $('#addtimezoneBar').css('border-bottom', '0.0625rem solid #999');
        }
        if (flag != true) {
            setTimeout(function () {
                _this.config.addDataCenter(_this.userId, _this.name, _this.country, _this.state, _this.city, _this.timezone).subscribe(function (res) {
                    $('.modalForm').hide();
                    $('.apiResponseDiv').show();
                    var sucflag = false;
                    if (res.status == 'success') {
                        _this.name = '';
                        _this.country = 'Country*';
                        _this.state = 'State*';
                        _this.city = 'City*';
                        _this.timezone = 'Time zone*';
                        $('.apiFailed').hide();
                        $('.apiSuccess').show();
                        sucflag = true;
                    }
                    else {
                        $('#apiErrorMsg').html(res.message);
                        $('.apiSuccess').hide();
                        $('.apiFailed').show();
                    }
                    if (sucflag != false) {
                        sessionStorage.setItem('reloadLeftNav', 'yes');
                        _this.menuItems.getAll();
                        var lastInsertedDataCenterId = res.id;
                        _this.provisioningList(lastInsertedDataCenterId, true);
                    }
                });
            }, 100);
        }
    };
    ProvisioningComponent.prototype.addDataAgain = function () {
        $('.modalForm').show();
        $('.apiFailed').hide();
    };
    ProvisioningComponent.prototype.activateCard = function (id) {
        var preId = $('.tab-tile-active').attr('id');
        $('#' + preId).attr('class', 'col-md-3 col-sm-6 tab-tile');
        $('#rsddropdown' + preId).hide();
        $('#rsddropdown' + id).show();
    };
    ProvisioningComponent.prototype.deactivateCard = function () {
        var preId = $('.tab-tile-active').attr('id');
        $('#' + preId).attr('class', 'col-md-3 col-sm-6 tab-tile');
        $('#rsddropdown' + preId).hide();
    };
    ProvisioningComponent.prototype.dataCenterScrollClick = function (id, clickType) {
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
        $('#dataCenterScroll' + id).removeClass("ti-control-record").addClass("fa fa-circle").css('font-size', '15px');
        this.dataCenterClick(id);
    };
    ProvisioningComponent.prototype.dataCenterClick = function (id) {
        this.currentDC = this.dataCenters[id].id;
        this.dataCentersDetails = [];
        this.activateCard(id);
        $('#' + id).attr('class', 'col-md-3 col-sm-6 tab-tile tab-tile-active');
        this.setDataCenterComponnets(this.currentDC);
    };
    ProvisioningComponent.prototype.setDataCenterComponnets = function (id) {
        var _this = this;
        this.config.getComponentList(id).subscribe(function (res) {
            if (res.length > 0) {
                _this.showNullRowMessage = false;
                _this.dataCentersDetails = res;
            }
            else {
                _this.showNullRowMessage = true;
            }
        });
    };
    ProvisioningComponent.prototype.onVersionChange = function (name) {
        var _this = this;
        if (name == 'NEXUS') {
            $('.toggleThreshold').show();
        }
        else {
            $('.toggleThreshold').hide();
        }
        if (name == 'ASA') {
            $('.toggleEnablePassword').show();
        }
        else {
            $('.toggleEnablePassword').hide();
        }
        if (name == 'Type*') {
            this.ComSubVersion = "Sub Type";
            $("#addComponentSubType").prop("disabled", true);
        }
        else {
            this.config.getSubtypes(name).subscribe(function (res) {
                _this.subTypes = res;
                _this.ComSubVersion = "Sub Type";
                if (_this.subTypes.length == 0) {
                    $("#addComponentSubType").prop("disabled", true);
                }
                else {
                    $("#addComponentSubType").prop("disabled", false);
                }
            });
        }
    };
    ProvisioningComponent.prototype.onVersionChangeEdit = function (name) {
        var _this = this;
        if (name == 'Type*') {
            this.editComponentVersion = "Sub Type";
            $("#editComponentVersion").prop("disabled", true);
        }
        else {
            this.config.getSubtypes(name).subscribe(function (res) {
                _this.subTypesEdit = res;
                _this.editComponentVersion = "Sub Type";
                if (_this.subTypesEdit.length == 0) {
                    $("#editComponentVersion").prop("disabled", true);
                }
                else {
                    $("#editComponentVersion").prop("disabled", false);
                }
            });
        }
        if (name == 'NEXUS') {
            $('#edit-componet-thresholds').removeAttr('hidden');
        }
        else {
            $('#edit-componet-thresholds').attr("hidden", "true");
        }
        if (name == 'ASA') {
            $('#edit-enable-password').removeAttr('hidden');
        }
        else {
            $('#edit-enable-password').attr("hidden", "true");
        }
    };
    ProvisioningComponent.prototype.deleteComponentData = function (componentId) {
        var _this = this;
        this.config.componentDelete(this.userId, componentId).subscribe(function (res) {
            var componentFlag = false;
            $('.componentDeleteModal').hide();
            $('.apiResponseDivComponent').show();
            if (res.status == 'success') {
                componentFlag = true;
                sessionStorage.setItem('reloadLeftNav', 'yes');
                _this.menuItems.getAll();
                $('.apiFailed').hide();
                $('.apiSuccess').show();
            }
            else {
                $('#apiErrorMsgComponent').html(res.message);
                $('.apiSuccess').hide();
                $('.apiFailed').show();
            }
            if (componentFlag = true) {
                _this.dataCentersDetails.splice(_this.newDeleteDataIndex, 1);
            }
        });
    };
    ProvisioningComponent.prototype.loadStates = function (country, type) {
        var _this = this;
        if (type == 'edit') {
            if ($('#editDataCenterCountry').val() == 'Country*') {
                $("#editDataCenterState").prop("disabled", true);
                $("#editDataCenterCity").prop("disabled", true);
                this.statesList = [];
                this.citiesList = [];
            }
            else {
                this.config.getStates($('#editDataCenterCountry').val()).subscribe(function (res) {
                    _this.statesList = res;
                });
                $("#editDataCenterState").prop("disabled", false);
            }
        }
        else {
            this.state = 'State*';
            this.city = 'City*';
            if (country == 'Country*') {
                $("#addDataCenterState").prop("disabled", true);
                $("#addDataCenterCity").prop("disabled", true);
                this.statesList = [];
            }
            else {
                this.config.getStates(country).subscribe(function (res) {
                    _this.statesList = res;
                });
                $("#addDataCenterState").prop("disabled", false);
                $("#addDataCenterCity").prop("disabled", true);
            }
        }
    };
    ProvisioningComponent.prototype.loadCities = function (state, type) {
        var _this = this;
        if (type == 'edit') {
            if ($('#editDataCenterState').val() == 'State*') {
                $("#editDataCenterCity").prop("disabled", true);
                this.citiesList = [];
            }
            else {
                this.config.getCities($('#editDataCenterState').val()).subscribe(function (res) {
                    _this.citiesList = res;
                });
                $("#editDataCenterCity").prop("disabled", false);
            }
        }
        else {
            this.city = 'City*';
            if (state == 'State*') {
                $("#addDataCenterCity").prop("disabled", true);
                this.citiesList = [];
            }
            else {
                this.config.getCities(state).subscribe(function (res) {
                    _this.citiesList = res;
                });
                $("#addDataCenterCity").prop("disabled", false);
            }
        }
    };
    return ProvisioningComponent;
}());
ProvisioningComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-provisioning',
        template: __webpack_require__("../../../../../src/app/provisioning/provisioning.component.html"),
        styles: [__webpack_require__("../../../../../src/app/provisioning/provisioning.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_menu_items_menu_items__["a" /* MenuItems */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_menu_items_menu_items__["a" /* MenuItems */]) === "function" && _d || Object])
], ProvisioningComponent);

var _a, _b, _c, _d;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__addnewcomponent_addnewcomponent_component__ = __webpack_require__("../../../../../src/app/provisioning/addnewcomponent/addnewcomponent.component.ts");
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
        declarations: [__WEBPACK_IMPORTED_MODULE_3__provisioning_component__["a" /* ProvisioningComponent */], __WEBPACK_IMPORTED_MODULE_6__addnewcomponent_addnewcomponent_component__["a" /* AddnewcomponentComponent */]]
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