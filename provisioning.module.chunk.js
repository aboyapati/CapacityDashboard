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
exports.push([module.i, ".data-center {\r\n    color: #3b4147;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    padding: 6px 0 4px;\r\n}\r\n.tab-tile:hover {\r\n    cursor: pointer;\r\n    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);\r\n}\r\n.data-center-body {\r\n    color: #73787d;\r\n    font-size: 13px;\r\n    text-align: center;\r\n    margin-bottom: 1px;\r\n    font-weight: 600;\r\n}\r\n.tab-tile {\r\n    padding: 15px 0px 15px;\r\n}\r\n.tab-tile-active {\r\n    padding: 0px 0px 31px;\r\n    background-color: #fff; \r\n}\r\n.tab-tile-table {\r\n    background-color: #fff;\r\n    padding: 30px;\r\n}\r\nth {\r\n    color: #3b4147;\r\n}\r\ntd {\r\n    color: #73787d;\r\n}\r\n.img-thumbnail {\r\n    width: 100px;\r\n    height: 100px;\r\n    background-color: unset;\r\n    border: 0px;\r\n}\r\n.rsddropdown {\r\n    text-align: right;\r\n    padding-right: 15px;\r\n    height: 15px;\r\n}\r\n.rsddropdown-span {\r\n    cursor:pointer;\r\n    color:#b0bec5;\r\n    font-size:20px;\r\n    padding-left: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n.rsddropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #fff;\r\n    overflow: auto;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n    right: 10%;\r\n    border-radius: 6px;\r\n    border: 1px solid aliceblue;\r\n    cursor: pointer;\r\n    text-align: left;\r\n} \r\n.rsddropdown-content a {\r\n    color: #08070799;\r\n    padding: 5px 12px;\r\n    text-decoration: none;\r\n    display: block;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n} \r\n.rsddropdown a:hover {\r\n    background-color: #ddd;\r\n}\r\n.btn-primary {\r\n    background-color: #203c66;\r\n    border-color: #203c66;\r\n    font-weight: 600;\r\n}\r\n.btn-primary:hover {\r\n  background-color: #203c66bf;\r\n  border-color: #203c66bf !important;\r\n}\r\n.btn-default {\r\n\tpadding-right: 40px;\r\n\tpadding-left: 40px;\r\n\tborder-radius: 5px;\r\n}\r\n.save_btn, .btn-edit {\r\n\tpadding-right: 40px;\r\n\tpadding-left: 40px;\r\n\tborder-radius: 5px;\r\n}\r\n.custom_modal {\r\n\ttop :40px !important;\r\n}\r\n.btn-left {\r\n    background-color: #203c6661;\r\n    border-color: #203c6661;border: 0px solid transparent;\r\n    position: absolute;\r\n    top: 155px;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n    height: 40px;\r\n    width: 50px;\r\n    font-size: 26px;\r\n}\r\n.btn-right {\r\n    background-color: #203c6661;\r\n    border-color: #203c6661;border: 0px solid transparent;\r\n    position: absolute;\r\n    top: 155px;\r\n    bottom: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n    height: 40px;\r\n    width: 50px;\r\n    font-size: 26px;\r\n}\r\n.header_title {\r\n   text-align:left;\r\n   font-size: 38px;\r\n   font-weight: bold;\r\n   color: #3d4657;\r\n}\r\n.modal_description {\r\n\tfont-family: \"Open Sans\", Bold;\r\n\tcolor: #7b879e;\r\n\tfont-size: 15px;\r\n\tpadding-top: 12px;\r\n}\r\n.modal_placeholder {\r\n\tfont-family: \"Open Sans\", Bold;\r\n\tcolor: #7b879e;\r\n}\r\n.form-modal {\r\n    padding-top: 10px;\r\n    padding-right: 45px;\r\n    padding-left: 45px;\r\n    padding-bottom: 10px;\r\n}\r\n.control-label {\r\n\tcolor: #7b879e !important;\r\n\tfont-family: \"Open Sans\", Bold;\r\n}\r\n\r\n@media only screen \r\nand (max-device-width : 767px) {\r\n  .modal-buttons {\r\n    text-align: center !important;\r\n    padding-top: 5px;\r\n  }\r\n  .save_btn {\r\n    padding-left: 50px !important;\r\n    padding-right: 50px !important;\r\n  }\r\n  .btn-edit-cancel {\r\n    padding-left: 100px !important;\r\n    padding-right: 100px !important;\r\n  }\r\n  .btn-edit-back {\r\n    padding-left: 107px !important;\r\n    padding-right: 107px !important;\r\n  }\r\n  .btn-edit-save {\r\n    padding-left: 109px !important;\r\n    padding-right: 109px !important;\r\n  }\r\n  .btn-edit-view-component{\r\n  \tpadding-left: 69px !important;\r\n\tpadding-right: 69px !important;\r\n  }\r\n  .btn-delete {\r\n  \tpadding-left: 40px !important;\r\n\tpadding-right: 40px !important;\r\n  }\r\n}\r\n.btn-top-bar {\r\n  text-align: right;\r\n  padding-right: 0px;\r\n}\r\n@media only screen \r\nand (min-device-width : 320px) \r\nand (max-device-width : 568px) { \r\n  .btn-edit-cancel {\r\n    padding-left: 80px !important;\r\n    padding-right: 80px !important;\r\n  }\r\n  .btn-edit-save {\r\n    padding-left: 87px !important;\r\n    padding-right: 87px !important;\r\n  }\r\n}\r\n@media only screen \r\nand (max-device-width : 575px) { \r\n  .btn-top-bar {\r\n    padding-bottom: 5px;\r\n  }\r\n}\r\n\r\n/* Modal popup Add Component */\r\n.header_title {\r\n    text-align:left;\r\n    font-size: 38px;\r\n    font-weight: bold;\r\n    color: #3d4657;\r\n}\r\n.top-content {\r\n    padding-bottom: 0px !important;\r\n    padding-top: 0px !important;\r\n}\r\n.container {\r\n    margin-top: 0px !important;\r\n    margin-bottom: 0px !important;\r\n    padding-left: 0px !important;\r\n    padding-right: 0px !important;\r\n    padding-top: 0px !important;\r\n}\r\n.form-box {\r\n  padding-top: 0px !important;\r\n}\r\n.modal-text-p {\r\n  color: #808080;\r\n  text-align: center;\r\n\tfont-family: \"Open Sans\", Bold;\r\n\tfont-size: 15px;\r\n  padding-top: 12px;\r\n}\r\n.modal-text-h3 {\r\n  color: #808080;\r\n  text-align: center;\r\n  font-weight: 400;\r\n  text-transform: unset !important;\r\n  padding-bottom: 75px;\r\n  padding-top: 75px;\r\n}\r\n.form-group-small {\r\n  margin-top: 0px !important;\r\n  margin-bottom: 0px !important;\r\n  width: 50px !important;\r\n}\r\n.modal-table tr td {\r\n  color: #808080;\r\n\tfont-family: \"Open Sans\", Bold;\r\n  font-size: 12px;\r\n  font-weight: 400;\r\n  padding-top: 0px;\r\n  padding-bottom: 0px;\r\n  vertical-align: bottom;\r\n  border-top: unset;\r\n}\r\n.modal-table-responsive {\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n}\r\n.btn-add-data {\r\n  height: 34px !important;\r\n  border-radius: 2px !important;\r\n  font-weight: 600 !important;\r\n  border: 1px solid transparent !important;\r\n  padding: 8px 14px !important;\r\n  line-height: 16px !important;\r\n  font-size: 11px !important;\r\n  font-family: 'Open Sans' !important;\r\n}\r\n.activated .f1-step-icon {\r\n  cursor: pointer;\r\n}\r\n.f1-step .f1-step-icon .fa {\r\n  display: none;\r\n}\r\n.activated .f1-step-icon .fa {\r\n  display: inline-block !important;\r\n}\r\n.active .f1-step-icon .fa {\r\n  display: inline-block !important;\r\n}\r\n/* Modal popup Add Component Ednd */\r\nbody,\r\ninput,\r\nselect,\r\ntextarea,\r\nbody * {\r\n  font-family: 'Roboto', sans-serif;\r\n  box-sizing: border-box;\r\n}\r\nbody::after, body::before,\r\ninput::after,\r\ninput::before,\r\nselect::after,\r\nselect::before,\r\ntextarea::after,\r\ntextarea::before,\r\nbody *::after,\r\nbody *::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-image: linear-gradient(to bottom, #f2f2f2, #e6e6e6);\r\n}\r\n\r\nh1 {\r\n  font-size: 2rem;\r\n  text-align: center;\r\n  margin: 0 0 2em;\r\n}\r\nh1 small {\r\n  font-size: 50%;\r\n  color: #666;\r\n  display: block;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  max-width: 40rem;\r\n  margin: 5rem auto;\r\n  background: #fff;\r\n  width: 100%;\r\n  padding: 3rem 5rem 0;\r\n  border-radius: 1px;\r\n}\r\n.container::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);\r\n  -webkit-transform: scale(0.98);\r\n          transform: scale(0.98);\r\n  transition: -webkit-transform 0.28s ease-in-out;\r\n  transition: transform 0.28s ease-in-out;\r\n  transition: transform 0.28s ease-in-out, -webkit-transform 0.28s ease-in-out;\r\n  z-index: -1;\r\n}\r\n.container:hover::before {\r\n  -webkit-transform: scale(1);\r\n          transform: scale(1);\r\n}\r\n\r\n.button-container {\r\n  text-align: center;\r\n}\r\n\r\nfieldset {\r\n  margin: 0 0 3rem;\r\n  padding: 0;\r\n  border: none;\r\n}\r\n\r\n.form-radio,\r\n.form-group {\r\n  position: relative;\r\n  margin-top: 2.25rem;\r\n  margin-bottom: 2.25rem;\r\n}\r\n\r\n.form-inline > .form-group,\r\n.form-inline > .btn {\r\n  display: inline-block;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.form-help {\r\n  margin-top: 0.125rem;\r\n  margin-left: 0.125rem;\r\n  color: #b3b3b3;\r\n  font-size: 0.8rem;\r\n}\r\n.checkbox .form-help, .form-radio .form-help, .form-group .form-help {\r\n  position: absolute;\r\n  width: 100%;\r\n}\r\n.checkbox .form-help {\r\n  position: relative;\r\n  margin-bottom: 1rem;\r\n}\r\n.form-radio .form-help {\r\n  padding-top: 0.25rem;\r\n  margin-top: -1rem;\r\n}\r\n\r\n.form-group input {\r\n  height: 1.9rem;\r\n}\r\n.form-group textarea {\r\n  resize: none;\r\n}\r\n.form-group select {\r\n  width: 100%;\r\n  font-size: 1rem;\r\n  height: 1.6rem;\r\n  padding: 0.125rem 0.125rem 0.0625rem;\r\n  background: none;\r\n  border: none;\r\n  line-height: 1.6;\r\n  box-shadow: none;\r\n}\r\n.form-group .control-label {\r\n  position: absolute;\r\n  top: 0.25rem;\r\n  pointer-events: none;\r\n  padding-left: 0.125rem;\r\n  z-index: 1;\r\n  color: #b3b3b3;\r\n  font-size: 1rem;\r\n  font-weight: normal;\r\n  transition: all 0.28s ease;\r\n}\r\n.form-group .bar {\r\n  position: relative;\r\n  border-bottom: 0.0625rem solid #999;\r\n  display: block;\r\n}\r\n.form-group .bar::before {\r\n  content: '';\r\n  height: 0.125rem;\r\n  width: 0;\r\n  left: 50%;\r\n  bottom: -0.0625rem;\r\n  position: absolute;\r\n  background: #337ab7;\r\n  transition: left 0.28s ease, width 0.28s ease;\r\n  z-index: 2;\r\n}\r\n.form-group input,\r\n.form-group textarea {\r\n  display: block;\r\n  background: none;\r\n  padding: 0.125rem 0.125rem 0.0625rem;\r\n  font-size: 1rem;\r\n  border-width: 0;\r\n  border-color: transparent;\r\n  line-height: 1.9;\r\n  width: 100%;\r\n  color: transparent;\r\n  transition: all 0.28s ease;\r\n  box-shadow: none;\r\n}\r\n.form-group input[type=\"file\"] {\r\n  line-height: 1;\r\n}\r\n.form-group input[type=\"file\"] ~ .bar {\r\n  display: none;\r\n}\r\n.form-group select,\r\n.form-group input:focus,\r\n.form-group input:valid,\r\n.form-group input.form-file,\r\n.form-group input.has-value,\r\n.form-group textarea:focus,\r\n.form-group textarea:valid,\r\n.form-group textarea.form-file,\r\n.form-group textarea.has-value {\r\n  color: #7b879e;\r\n}\r\n.form-group select ~ .control-label,\r\n.form-group input:focus ~ .control-label,\r\n.form-group input:valid ~ .control-label,\r\n.form-group input.form-file ~ .control-label,\r\n.form-group input.has-value ~ .control-label,\r\n.form-group textarea:focus ~ .control-label,\r\n.form-group textarea:valid ~ .control-label,\r\n.form-group textarea.form-file ~ .control-label,\r\n.form-group textarea.has-value ~ .control-label {\r\n  font-size: 0.8rem;\r\n  color: gray;\r\n  top: -1rem;\r\n  left: 0;\r\n}\r\n.form-group select:focus,\r\n.form-group input:focus,\r\n.form-group textarea:focus {\r\n  outline: none;\r\n}\r\n.form-group select:focus ~ .control-label,\r\n.form-group input:focus ~ .control-label,\r\n.form-group textarea:focus ~ .control-label {\r\n  color: #337ab7;\r\n}\r\n.form-group select:focus ~ .bar::before,\r\n.form-group input:focus ~ .bar::before,\r\n.form-group textarea:focus ~ .bar::before {\r\n  width: 100%;\r\n  left: 0;\r\n}\r\n\r\n.checkbox label,\r\n.form-radio label {\r\n  position: relative;\r\n  cursor: pointer;\r\n  padding-left: 2rem;\r\n  text-align: left;\r\n  color: #333;\r\n  display: block;\r\n}\r\n.checkbox input,\r\n.form-radio input {\r\n  width: auto;\r\n  opacity: 0.00000001;\r\n  position: absolute;\r\n  left: 0;\r\n}\r\n\r\n.radio {\r\n  margin-bottom: 1rem;\r\n}\r\n.radio .helper {\r\n  position: absolute;\r\n  top: -0.25rem;\r\n  left: -0.25rem;\r\n  cursor: pointer;\r\n  display: block;\r\n  font-size: 1rem;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  color: #999;\r\n}\r\n.radio .helper::before, .radio .helper::after {\r\n  content: '';\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  margin: 0.25rem;\r\n  width: 1rem;\r\n  height: 1rem;\r\n  transition: -webkit-transform 0.28s ease;\r\n  transition: transform 0.28s ease;\r\n  transition: transform 0.28s ease, -webkit-transform 0.28s ease;\r\n  border-radius: 50%;\r\n  border: 0.125rem solid currentColor;\r\n}\r\n.radio .helper::after {\r\n  -webkit-transform: scale(0);\r\n          transform: scale(0);\r\n  background-color: #337ab7;\r\n  border-color: #337ab7;\r\n}\r\n.radio label:hover .helper {\r\n  color: #337ab7;\r\n}\r\n.radio input:checked ~ .helper::after {\r\n  -webkit-transform: scale(0.5);\r\n          transform: scale(0.5);\r\n}\r\n.radio input:checked ~ .helper::before {\r\n  color: #337ab7;\r\n}\r\n\r\n.checkbox {\r\n  margin-top: 3rem;\r\n  margin-bottom: 1rem;\r\n}\r\n.checkbox .helper {\r\n  color: #999;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 1rem;\r\n  height: 1rem;\r\n  z-index: 0;\r\n  border: 0.125rem solid currentColor;\r\n  border-radius: 0.0625rem;\r\n  transition: border-color 0.28s ease;\r\n}\r\n.checkbox .helper::before, .checkbox .helper::after {\r\n  position: absolute;\r\n  height: 0;\r\n  width: 0.2rem;\r\n  background-color: #337ab7;\r\n  display: block;\r\n  -webkit-transform-origin: left top;\r\n          transform-origin: left top;\r\n  border-radius: 0.25rem;\r\n  content: '';\r\n  transition: opacity 0.28s ease, height 0s linear 0.28s;\r\n  opacity: 0;\r\n}\r\n.checkbox .helper::before {\r\n  top: 0.65rem;\r\n  left: 0.38rem;\r\n  -webkit-transform: rotate(-135deg);\r\n          transform: rotate(-135deg);\r\n  box-shadow: 0 0 0 0.0625rem #fff;\r\n}\r\n.checkbox .helper::after {\r\n  top: 0.3rem;\r\n  left: 0;\r\n  -webkit-transform: rotate(-45deg);\r\n          transform: rotate(-45deg);\r\n}\r\n.checkbox label:hover .helper {\r\n  color: #337ab7;\r\n}\r\n.checkbox input:checked ~ .helper {\r\n  color: #337ab7;\r\n}\r\n.checkbox input:checked ~ .helper::after, .checkbox input:checked ~ .helper::before {\r\n  opacity: 1;\r\n  transition: height 0.28s ease;\r\n}\r\n.checkbox input:checked ~ .helper::after {\r\n  height: 0.5rem;\r\n}\r\n.checkbox input:checked ~ .helper::before {\r\n  height: 1.2rem;\r\n  transition-delay: 0.28s;\r\n}\r\n\r\n.radio + .radio,\r\n.checkbox + .checkbox {\r\n  margin-top: 1rem;\r\n}\r\n\r\n.has-error .legend.legend, .has-error.form-group .control-label.control-label {\r\n  color: #d9534f;\r\n}\r\n.has-error.form-group .form-help,\r\n.has-error.form-group .helper, .has-error.checkbox .form-help,\r\n.has-error.checkbox .helper, .has-error.radio .form-help,\r\n.has-error.radio .helper, .has-error.form-radio .form-help,\r\n.has-error.form-radio .helper {\r\n  color: #d9534f;\r\n}\r\n.has-error .bar::before {\r\n  background: #d9534f;\r\n  left: 0;\r\n  width: 100%;\r\n}\r\n\r\n.button {\r\n  position: relative;\r\n  background: currentColor;\r\n  border: 1px solid currentColor;\r\n  font-size: 1.1rem;\r\n  color: #4f93ce;\r\n  margin: 3rem 0;\r\n  padding: 0.75rem 3rem;\r\n  cursor: pointer;\r\n  transition: background-color 0.28s ease, color 0.28s ease, box-shadow 0.28s ease;\r\n  overflow: hidden;\r\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\r\n}\r\n.button span {\r\n  color: #fff;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n.button::before {\r\n  content: '';\r\n  position: absolute;\r\n  background: #071017;\r\n  border: 50vh solid #1d4567;\r\n  width: 30vh;\r\n  height: 30vh;\r\n  border-radius: 50%;\r\n  display: block;\r\n  top: 50%;\r\n  left: 50%;\r\n  z-index: 0;\r\n  opacity: 1;\r\n  -webkit-transform: translate(-50%, -50%) scale(0);\r\n          transform: translate(-50%, -50%) scale(0);\r\n}\r\n.button:hover {\r\n  color: #337ab7;\r\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);\r\n}\r\n.button:active::before, .button:focus::before {\r\n  transition: opacity 0.28s ease 0.364s, -webkit-transform 1.12s ease;\r\n  transition: transform 1.12s ease, opacity 0.28s ease 0.364s;\r\n  transition: transform 1.12s ease, opacity 0.28s ease 0.364s, -webkit-transform 1.12s ease;\r\n  -webkit-transform: translate(-50%, -50%) scale(1);\r\n          transform: translate(-50%, -50%) scale(1);\r\n  opacity: 0;\r\n}\r\n.button:focus {\r\n  outline: none;\r\n}\r\n.apiMsg {\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n}\r\n\r\n.table td {\r\n  border-top: unset;\r\n}\r\n\r\n.form-box {\r\n  padding-top: 0px !important;\r\n}\r\n.modal-text-p {\r\n  color: #808080;\r\n  text-align: center;\r\n\tfont-family: \"Open Sans\", Bold;\r\n\tfont-size: 15px;\r\n  padding-top: 12px;\r\n}\r\n.modal-text-h3 {\r\n  color: #808080;\r\n  text-align: center;\r\n  font-weight: 400;\r\n  text-transform: unset !important;\r\n  padding-bottom: 75px;\r\n  padding-top: 75px;\r\n}\r\n.form-group-small {\r\n  margin-top: 0px !important;\r\n  margin-bottom: 0px !important;\r\n  width: 50px !important;\r\n  /* margin-right: 50px !important; */\r\n}\r\n.modal-table tr td {\r\n  color: #808080;\r\n\tfont-family: \"Open Sans\", Bold;\r\n  font-size: 12px;\r\n  font-weight: 400;\r\n  padding-top: 0px;\r\n  padding-bottom: 0px;\r\n  vertical-align: bottom;\r\n}\r\n\r\n.frmGrpInput{\r\n  text-align: center;\r\n}\r\n.cred{\r\n  display:none;\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n\t.btn_step1 {\r\n\t\tpadding-left:0px;\r\n\t\tpadding-right:0px;\r\n\t}\r\n\t.btn_step2 {\r\n\t\tpadding-left:0px;\r\n\t\tpadding-right:0px;\r\n\t}\r\n\t.outer_step2 {\r\n\t\tmargin-left:0px;\r\n\t\t-webkit-box-flex: 0;\r\n\t\t    -ms-flex: 0 0 100%;\r\n\t\t        flex: 0 0 100%;\r\n\t\tmax-width: 100%;\r\n\t}\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/provisioning/provisioning.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-3 col-sm-3\" style=\"font-weight:600; font-size:20px; color:#4a6076; padding-bottom:15px;\">\r\n        onPOINT HCS.Capacity\r\n    </div>\r\n    <div class=\"col-md-6 col-sm-6\" style=\"padding-top:6px;text-align: center;\">\r\n        <span>\r\n            <span *ngFor=\"let dC of dataCenters; let i = index\">\r\n                <span class=\"icon-name\">&nbsp;</span>\r\n                <div *ngIf=\"i==selectedDataCenter;then bubble1; else bubble2\"></div>\r\n                <ng-template #bubble1>\r\n                    <span style=\"cursor: pointer;font-size:15px;\" (click)=\"dataCenterScrollClick(i)\" id=\"dataCenterScroll{{i}}\" class=\"fa fa-circle\"></span>\r\n                </ng-template>\r\n                <ng-template #bubble2>\r\n                    <span style=\"cursor: pointer;\" (click)=\"dataCenterScrollClick(i)\" id=\"dataCenterScroll{{i}}\" class=\"ti-control-record\"></span>\r\n                </ng-template>\r\n            </span>\r\n        </span>\r\n    </div>\r\n    <div class=\"col-md-3 col-sm-3 btn-top-bar\">\r\n        <button class=\"btn btn-primary btn-sm btn-add-data\" (click)=\"open(content, '', 'add')\">\r\n            <i class=\"fa fa-plus\"></i> Add Data Center</button>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <button (click)=\"moveLeft()\" class=\"btn btn-primary btn-sm btn-left\" style=\"display: none;\">\r\n        <i class=\"fa fa-arrow-left\"></i>\r\n    </button>\r\n    <button (click)=\"moveRight()\" class=\"btn btn-primary btn-sm btn-right\" style=\"display: none;\">\r\n        <i class=\"fa fa-arrow-right\"></i>\r\n    </button>\r\n    <ng-container *ngFor=\"let dataCenter of dataCenters, let i = index\">\r\n        <div [style.display]=\"i>=scrollLimitMin && i<=scrollLimitMax ? 'block' : 'none'\" class=\"col-md-3 col-sm-6 tab-tile {{ (i == selectedDataCenter) ? 'tab-tile-active' : ''}}\"\r\n            id=\"{{i}}\" (click)=\"dataCenterScrollClick(i,'direct')\">\r\n            <div *ngIf=\"i== selectedDataCenter; then thenDiv;else elseDiv\">\r\n            </div>\r\n            <ng-template #thenDiv>\r\n                <div class=\"rsddropdown\" id=\"rsddropdown{{i}}\">\r\n                    <span class=\"rsddropdown-span\" (click)=\"callMatricsClick(i)\">...</span>\r\n                    <div id=\"callMatricsDropdown{{i}}\" class=\"rsddropdown-content\">\r\n                        <a (click)=\"open(editDataCenter,i,'edit')\">Edit</a>\r\n                        <a (click)=\"open(deleteDataCenter,i,'delete')\">Delete</a>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n            <ng-template #elseDiv>\r\n                <div class=\"rsddropdown\" id=\"rsddropdown{{i}}\" style=\"display: none;\">\r\n                    <span class=\"rsddropdown-span\" (click)=\"callMatricsClick(i)\">...</span>\r\n                    <div id=\"callMatricsDropdown{{i}}\" class=\"rsddropdown-content\">\r\n                        <a (click)=\"open(editDataCenter,i,'edit')\">Edit</a>\r\n                        <a (click)=\"open(deleteDataCenter,i,'delete')\">Delete</a>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n            <div class=\"data-center-image d-flex justify-content-center\">\r\n                <img bind-src=\"imgUrl\" class=\"img-thumbnail\">\r\n            </div>\r\n            <p class=\"data-center\">{{dataCenter.name}}</p>\r\n            <p class=\"data-center-body\">{{dataCenter.city}}, {{dataCenter.state}}</p>\r\n            <p class=\"data-center-body\">{{dataCenter.country}}</p>\r\n            <p class=\"data-center-body\">{{dataCenter.time_zone}}</p>\r\n        </div>\r\n    </ng-container>\r\n    <div class=\"col-md-12 tab-tile-table table-responsive\">\r\n        <div (click)=\"openComponentModal(rsdcontent)\" title=\"Click to add component\" style=\"float: right;padding: 0px 0px 20px 0px;cursor: pointer;\">\r\n            <div class=\"col-md-4 col-sm-4 btn-top-bar\">\r\n                <button class=\"btn btn-primary btn-sm btn-add-data\">\r\n                    <i class=\"fa fa-plus\"></i> Add Component</button>\r\n            </div>\r\n        </div>\r\n        <ng-template #rsdcontent let-c=\"close\" let-d=\"dismiss\">\r\n            <div class=\"rsdModal\">\r\n                <div class=\"modal-body\">\r\n\r\n                    <div class=\"top-content\">\r\n                        <div class=\"container\">\r\n                            <div class=\"row\">\r\n                                <!-- <div class=\"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 form-box\"> -->\r\n                                <div class=\"col-sm-12 col-md-12 col-lg-12  form-box\">\r\n                                    <form class=\"f1\" (submit)=\"addComponent()\">\r\n                                        <div class=\"form-modal\">\r\n                                            <div class=\"header_title\" style=\"text-align: center;\">Add new component</div>\r\n                                        </div>\r\n                                        <div class=\"f1-steps\" style=\"text-align: center;\">\r\n                                            <div class=\"f1-progress\">\r\n                                                <div class=\"f1-progress-line\" style=\"width: 25%;\"></div>\r\n                                            </div>\r\n                                            <div class=\"f1-step active\" id='f1-step_1'>\r\n                                                <div class=\"f1-step-icon\" (click)=\"tabClick($event, 1)\">\r\n                                                    <i class=\"fa fa-check\"></i>\r\n                                                </div>\r\n                                                <p>Name</p>\r\n                                            </div>\r\n                                            <div class=\"f1-step next\" id=\"f1-step_2\">\r\n                                                <div class=\"f1-step-icon\" (click)=\"tabClick($event, 2)\">\r\n                                                    <i class=\"fa fa-check\"></i>\r\n                                                </div>\r\n                                                <p>Component Type</p>\r\n                                            </div>\r\n                                            <div class=\"f1-step\">\r\n                                                <div class=\"f1-step-icon\" (click)=\"tabClick($event, 3)\">\r\n                                                    <i class=\"fa fa-check\"></i>\r\n                                                </div>\r\n                                                <p>Configuration</p>\r\n                                            </div>\r\n                                            <div class=\"f1-step\" id=\"complete\">\r\n                                                <div class=\"f1-step-icon\" (click)=\"tabClick($event, 4)\">\r\n                                                    <i class=\"fa fa-check\"></i>\r\n                                                </div>\r\n                                                <p>Complete</p>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <fieldset id=\"fieldset_1\">\r\n                                            <p class=\"modal-text-p\">Please enter component name.</p>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"offset-md-2 col-md-8\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" required=\"required\" [(ngModel)]=\"comName\" name=\"comName\" id=\"addComponentName\" />\r\n                                                        <label class=\"control-label\" for=\"input\">Name*</label>\r\n                                                        <i class=\"bar\" id=\"NameBar\"></i>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-12 form-modal btn_step1\">\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-6 col-sm-12 pull-left modal-buttons\">\r\n                                                                <button type=\"button\" class=\"btn btn-danger btn-edit-cancel\" (click)=\"c('Close click')\">Cancel</button>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-6 col-sm-12 pull-right modal-buttons\" style=\"text-align: right;\">\r\n                                                                <button type=\"button\" class=\"btn btn-primary save_btn btn-edit-save\" (click)=\"next($event, 1)\">Next</button>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </fieldset>\r\n\r\n                                        <fieldset id=\"fieldset_2\">\r\n                                            <p class=\"modal-text-p\">Please enter component type, version, and IP address.</p>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"offset-md-2 col-md-8\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <select [(ngModel)]=\"ComVersion\" name=\"ComVersion\" (change)=\"onVersionChange(ComVersion)\" id=\"addComponentType\">\r\n                                                            <option class=\"modal_placeholder\">Type*</option>\r\n                                                            <option value=\"{{ver.name}}\" *ngFor='let ver of version'>{{ver.name}}</option>\r\n                                                        </select>\r\n                                                        <label class=\"control-label\" for=\"select\"></label>\r\n                                                        <i id=\"Typebar\" class=\"bar\"></i>\r\n                                                    </div>\r\n                                                    <div class=\"form-group\">\r\n                                                        <select [(ngModel)]=\"ComSubVersion\" name=\"ComSubVersion\" [disabled]=\"!subTypes\" id=\"addComponentSubType\">\r\n                                                            <option class=\"modal_placeholder\">Sub Type</option>\r\n                                                            <option value=\"{{subType.name}}\" *ngFor='let subType of subTypes'>{{subType.name}}</option>\r\n                                                        </select>\r\n                                                        <label class=\"control-label\" for=\"select\"></label>\r\n                                                        <i class=\"bar\"></i>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <p class=\"modal-text-p toggleThreshold\" style=\"display:none\">Thresholds</p>\r\n                                            <div class=\"table-responsive modal-table-responsive toggleThreshold\" style=\"display:none\">\r\n                                                <table class=\"table modal-table\">\r\n                                                    <tr>\r\n                                                        <td></td>\r\n                                                        <td>WARNING</td>\r\n                                                        <td>ALERT</td>\r\n                                                        <td>MAX</td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td>VRF *</td>\r\n                                                        <td>\r\n                                                            <div class=\"form-group form-group-small\">\r\n                                                                <input type=\"text\" required=\"required\" [(ngModel)]=\"vrfWarnStart\" name=\"vrfWarnStart\" />\r\n                                                                <i class=\"bar\"></i>\r\n                                                            </div>\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <div class=\"form-group form-group-small\">\r\n                                                                <input type=\"text\" required=\"required\" [(ngModel)]=\"vrfWarnEnd\" name=\"vrfWarnEnd\" />\r\n                                                                <i class=\"bar\"></i>\r\n                                                            </div>\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <div class=\"form-group form-group-small\">\r\n                                                                <input type=\"text\" required=\"required\" [(ngModel)]=\"vrfMax\" name=\"vrfMax\" />\r\n                                                                <i class=\"bar\"></i>\r\n                                                            </div>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td>BGP *</td>\r\n                                                        <td>\r\n                                                            <div class=\"form-group form-group-small\">\r\n                                                                <input type=\"text\" required=\"required\" [(ngModel)]=\"bgpPeersWarnStart\" name=\"bgpPeersWarnStart\" />\r\n                                                                <i class=\"bar\"></i>\r\n                                                            </div>\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <div class=\"form-group form-group-small\">\r\n                                                                <input type=\"text\" required=\"required\" [(ngModel)]=\"bgpPeersWarnEnd\" name=\"bgpPeersWarnEnd\" />\r\n                                                                <i class=\"bar\"></i>\r\n                                                            </div>\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <div class=\"form-group form-group-small\">\r\n                                                                <input type=\"text\" required=\"required\" [(ngModel)]=\"bgpPeersMax\" name=\"bgpPeersMax\" />\r\n                                                                <i class=\"bar\"></i>\r\n                                                            </div>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td>Vlan *</td>\r\n                                                        <td>\r\n                                                            <div class=\"form-group form-group-small\">\r\n                                                                <input type=\"text\" required=\"required\" [(ngModel)]=\"vlanWarnStart\" name=\"vlanWarnStart\" />\r\n                                                                <i class=\"bar\"></i>\r\n                                                            </div>\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <div class=\"form-group form-group-small\">\r\n                                                                <input type=\"text\" required=\"required\" [(ngModel)]=\"vlanWarnEnd\" name=\"vlanWarnEnd\" />\r\n                                                                <i class=\"bar\"></i>\r\n                                                            </div>\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <div class=\"form-group form-group-small\">\r\n                                                                <input type=\"text\" required=\"required\" [(ngModel)]=\"vlanMax\" name=\"vlanMax\" />\r\n                                                                <i class=\"bar\"></i>\r\n                                                            </div>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td>Harp *</td>\r\n                                                        <td>\r\n                                                            <div class=\"form-group form-group-small\">\r\n                                                                <input type=\"text\" required=\"required\" [(ngModel)]=\"hsrpWarnStart\" name=\"hsrpWarnStart\" />\r\n                                                                <i class=\"bar\"></i>\r\n                                                            </div>\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <div class=\"form-group form-group-small\">\r\n                                                                <input type=\"text\" required=\"required\" [(ngModel)]=\"hsrpWarnEnd\" name=\"hsrpWarnEnd\" />\r\n                                                                <i class=\"bar\"></i>\r\n                                                            </div>\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <div class=\"form-group form-group-small\">\r\n                                                                <input type=\"text\" required=\"required\" [(ngModel)]=\"hsrpMax\" name=\"hsrpMax\" />\r\n                                                                <i class=\"bar\"></i>\r\n                                                            </div>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td>Static Router *</td>\r\n                                                        <td>\r\n                                                            <div class=\"form-group form-group-small\">\r\n                                                                <input type=\"text\" required=\"required\" [(ngModel)]=\"staticRoutesWarnStart\" name=\"staticRoutesWarnStart\" />\r\n                                                                <i class=\"bar\"></i>\r\n                                                            </div>\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <div class=\"form-group form-group-small\">\r\n                                                                <input type=\"text\" required=\"required\" [(ngModel)]=\"staticRoutesWarnEnd\" name=\"staticRoutesWarnEnd\" />\r\n                                                                <i class=\"bar\"></i>\r\n                                                            </div>\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <div class=\"form-group form-group-small\">\r\n                                                                <input type=\"text\" required=\"required\" [(ngModel)]=\"staticRoutesMax\" name=\"staticRoutesMax\" />\r\n                                                                <i class=\"bar\"></i>\r\n                                                            </div>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                </table>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"offset-md-2 col-md-8 outer_step2\">\r\n                                                    <div class=\"col-md-12 form-modal btn_step2\">\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-4 pull-left modal-buttons\">\r\n                                                                <button type=\"button\" class=\"btn btn-default btn-edit-back\" (click)=\"previous($event)\"> Back </button>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-4 col-sm-12 pull-left modal-buttons\">\r\n                                                                <button type=\"button\" class=\"btn btn-danger btn-edit-cancel\" (click)=\"c('Close click')\">Cancel</button>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-4 pull-left modal-buttons\" style=\"text-align: right;\">\r\n                                                                <button type=\"button\" class=\"btn btn-primary save_btn btn-edit-save\" (click)=\"next($event, 2)\">Next</button>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </fieldset>\r\n\r\n                                        <fieldset id=\"fieldset_3\">\r\n                                            <p class=\"modal-text-p\">Please enter component username and password</p>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"offset-md-2 col-md-8\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" required=\"required\" [(ngModel)]=\"ipAddress\" id=\"addIpAddress\" name=\"ipAddress\" />\r\n                                                        <label class=\"control-label\" for=\"input\">IP Address*</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"bar\" id=\"ipAddressBar\"></i>\r\n                                                    </div>\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" required=\"required\" [(ngModel)]=\"componentUser\" id=\"addComponentUser\" name=\"componentUser\" readonly onfocus=\"this.removeAttribute('readonly');\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\" for=\"input\">Username*</label>\r\n                                                        <i class=\"bar\" id=\"UserBar\"></i>\r\n                                                    </div>\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"password\" required=\"required\" [(ngModel)]=\"password\" id=\"addComponentPassword\" name=\"password\" readonly onfocus=\"this.removeAttribute('readonly');\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\" for=\"input\">Password*</label>\r\n                                                        <i class=\"bar\" id=\"PasswordBar\"></i>\r\n                                                    </div>\r\n                                                    <div class=\"form-group toggleEnablePassword\" style=\"display:none;\">\r\n                                                        <div class=\"checkbox\">\r\n                                                            <input type=\"checkbox\" value=\"enablePassword\" style=\"z-index:9 !important; cursor:pointer;\" [(ngModel)]=\"enablePassword\" name=\"enablePassword\" />\r\n                                                            <label for=\"check2\">Enable Password</label>\r\n                                                            <i class=\"helper\" style=\"margin-top:2px;\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"offset-md-2 col-md-8 outer_step2\">\r\n                                                    <div class=\"col-md-12 form-modal btn_step2\">\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-4 pull-left modal-buttons\">\r\n                                                                <button type=\"button\" class=\"btn btn-default btn-edit-back\" (click)=\"previous($event)\">Back</button>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-4 col-sm-12 pull-left modal-buttons\">\r\n                                                                <button type=\"button\" class=\"btn btn-danger btn-edit-cancel\" (click)=\"c('Close click')\">Cancel</button>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-4 pull-left modal-buttons\" style=\"text-align: right;\">\r\n                                                                <input type=\"submit\" class=\"btn btn-primary save_btn btn-edit-save\" value=\"Next\" (click)=\"next($event, 3)\" />\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </fieldset>\r\n\r\n                                        <fieldset id=\"fieldset_4\">\r\n                                            <!-- <h3 *ngIf=\"apiError\" class=\"modal-text-h3\">Congratulations. Your new component has been succesfully added!</h3>\r\n                                      <h3 *ngIf=\"!apiError\" class=\"modal-text-h3\">Error Occured!</h3> -->\r\n                                            <h3 class=\"modal-text-h3\">{{ apiError==1 ? 'Congratulations. Your new component has been succesfully added!'\r\n                                                : 'Error Occured!' }}</h3>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"offset-md-2 col-md-8\">\r\n                                                    <div class=\"col-md-12 form-modal\">\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-6 pull-left modal-buttons\">\r\n                                                                <button type=\"button\" class=\"btn btn-default btn-edit-view-component\" (click)=\"getComponentDetails(viewComponent,currentDataCenterComponentId)\">View Component</button>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-6 pull-left modal-buttons\" style=\"text-align: right;\">\r\n                                                                <button type=\"button\" id=\"addComponentSuccessClose\" (click)=\"c('Close click')\" class=\"btn btn-primary save_btn  btn-edit-save\">Finish</button>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </fieldset>\r\n\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n                <tr>\r\n                    <th scope=\"col\">Component Name</th>\r\n                    <th scope=\"col\">Type</th>\r\n                    <th scope=\"col\">Version</th>\r\n                    <th scope=\"col\">IP Address</th>\r\n                    <th scope=\"col\">Credentials</th>\r\n                    <th scope=\"col\"></th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <input type=\"hidden\" id=\"comp_filter\" name=\"comp_filter\" value=\"\" />\r\n\t\t\t\t<tr *ngFor=\"let data of dataCentersDetails, let j = index\">\r\n                    <td>{{ data.name }}</td>\r\n                    <td>{{ data.version }}</td>\r\n                    <td>{{ data.subVersion }}</td>\r\n                    <td>{{ data.ipAddress }}</td>\r\n                    <td class=\"text-center\">\r\n                        <span (click)=\"hide(j)\" class=\"span{{j}}\" style=\"color: #0056b3;cursor: pointer;\">View</span>\r\n\t\t\t\t\t\t<p class=\"cred cred{{j}}\">Username : {{data.componentUser}}<br>\r\n\t\t\t\t\t\tPassword : {{data.password}}</p>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"rsddropdown-span\" (click)=\"editComponentClick(j)\">...</span>\r\n                        <div id=\"editComponentDropdown{{j}}\" class=\"rsddropdown-content componentDropDownDiv\">\r\n                            <a (click)=\"openComponentModalNew(viewComponent,j,'view', currentDC)\">View</a>\r\n                            <a (click)=\"openComponentModalNew(editComponent,j,'edit', currentDC)\">Edit</a>\r\n                            <a (click)=\"openComponentModalNew(deleteComponent,j,'delete', currentDC)\">Delete</a>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"modalForm\">\r\n            <div class=\"form-modal\">\r\n                <div class=\"header_title\">Add a data center</div>\r\n                <!--<p class=\"modal_description\">Add a data center to your network. It's quick and easy. If you need any assistance please\r\n                    <a style=\"color:#007bff;\">contact us</a>.</p>-->\r\n            </div>\r\n            <form (submit)=\"onSubmit()\">\r\n                <div class=\"form-modal\" style=\"padding-top: 0;\">\r\n                    <div class=\"form-group\" style=\"margin-top: 0;\">\r\n                        <input id=\"addDataCenterName\" type=\"text\" required=\"required\" [(ngModel)]=\"name\" name=\"name\" />\r\n                        <label class=\"control-label\" for=\"input\">Data center name*</label>\r\n                        <i id=\"addnameBar\" class=\"bar\"></i>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <select [(ngModel)]=\"country\" name=\"country\" id=\"addDataCenterCountry\">\r\n                            <option class=\"modal_placeholder\">Country*</option>\r\n                            <option *ngFor='let element of country_list' [value]=\"element.value\">{{element.name}}</option>\r\n                        </select>\r\n                        <label class=\"control-label\" for=\"select\"></label>\r\n                        <i id=\"addcountryBar\" class=\"bar\"></i>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input id=\"addDataCenterState\" type=\"text\" required=\"required\" [(ngModel)]=\"state\" name=\"state\" />\r\n                        <label class=\"control-label\" for=\"input\">State*</label>\r\n                        <i id=\"addstateBar\" class=\"bar\"></i>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input id=\"addDataCenterCity\" type=\"text\" required=\"required\" [(ngModel)]=\"city\" name=\"city\" />\r\n                        <label class=\"control-label\" for=\"input\">City*</label>\r\n                        <i id=\"addcityBar\" class=\"bar\"></i>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <!-- <select [(ngModel)]=\"timezone\" name=\"timezone\" id=\"addDataCenterTimezone\"> -->\r\n                        <select [(ngModel)]=\"timezone\" name=\"timezone\" id=\"addDataCenterTimezone\">\r\n                            <option class=\"modal_placeholder\">Time zone*</option>\r\n                            <option *ngFor='let element of time_zone_list' [value]=\"element.value\">{{element.name}}</option>\r\n                        </select>\r\n                        <label class=\"control-label\" for=\"select\"></label>\r\n                        <i id=\"addtimezoneBar\" class=\"bar\"></i>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12 form-modal\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 pull-left modal-buttons\">\r\n                            <button type=\"button\" class=\"btn btn-default btn-edit-cancel\" (click)=\"c('Close click')\">Cancel</button>\r\n                        </div>\r\n                        <div class=\"col-md-6 pull-left modal-buttons\" style=\"text-align: right;\">\r\n                            <input type=\"submit\" class=\"btn btn-primary save_btn btn-edit-save\" value=\"Save\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div style=\"display: none;\" class=\"apiResponseDiv\">\r\n            <div class=\"apiSuccess\">\r\n                <div class=\"form-modal\" style=\"padding-bottom: 40px;\">\r\n                    <div class=\"header_title\"> Add a data center</div>\r\n                    <!--<p class=\"modal_description\">Add a data center to your network. It's quick and easy. If you need any assistance please\r\n                        <a style=\"color:#007bff;\">contact us</a>.</p>-->\r\n                    <div style=\"color: green;\" class=\"apiMsg\">Data center added successfully !</div>\r\n                </div>\r\n                <div class=\"col-md-12 form-modal\" style=\"padding-bottom: 30px;\">\r\n                    <div style=\" position: absolute; top:13%; left:50%; transform: translate(-50%,-50%);\" class=\"clearfix\">\r\n                        <button type=\"button\" class=\"btn btn-primary save_btn btn-edit-save\" (click)=\"c('Close click')\">Close</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"apiFailed\" style=\"display: none\">\r\n                <div class=\"form-modal\" style=\"padding-bottom: 40px;\">\r\n                    <div class=\"header_title\"> Add a data center</div>\r\n                    <!--<p class=\"modal_description\">Add a data center to your network. It's quick and easy. If you need any assistance please\r\n                        <a style=\"color:#007bff;\">contact us</a>.</p>-->\r\n                    <div style=\"color: red;\" class=\"apiMsg\">Something went wrong !</div>\r\n                    <p id=\"apiErrorMsg\" style=\"color: red;\"></p>\r\n                </div>\r\n                <div class=\"col-md-12 form-modal\" style=\"padding-bottom: 30px;\">\r\n                    <div style=\"position: absolute; top:13%; left:50%; transform: translate(-50%,-50%);\" class=\"\">\r\n                        <button type=\"button\" class=\"btn btn-primary save_btn btn-edit-save\" (click)=\"c('Close click')\">Close</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #editDataCenter let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"modalForm\">\r\n            <div class=\"form-modal\">\r\n                <div class=\"header_title\">Edit data center</div>\r\n                <!--<p class=\"modal_description\">Edit data center 1 of your network. It's quick and easy. If you need any assistance please\r\n                    <a style=\"color:#007bff;\">contact us</a>.</p>-->\r\n            </div>\r\n            <form>\r\n                <div class=\"form-modal\" style=\"padding-top: 0;\">\r\n                    <input id=\"editDataCenterId\" type=\"hidden\" value=\"{{editData.id}}\" />\r\n                    <div class=\"form-group\" style=\"margin-top: 0;\">\r\n                        <input id=\"editDataCenterName\" type=\"text\" required=\"required\" value=\"{{editData.name}}\" />\r\n                        <label class=\"control-label\" for=\"input\">Data center name*</label>\r\n                        <i id='nameBar' class=\"bar\"></i>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <select id=\"editDataCenterCountry\">\r\n                            <option class=\"modal_placeholder\" value=\"Country*\">Country*</option>\r\n                            <option *ngFor='let element of country_list' [selected]=\"element.name === editData.country\" [value]=\"element.value\">{{element.name}}</option>\r\n                        </select>\r\n                        <label class=\"control-label\" for=\"select\"></label>\r\n                        <i id=\"countryBar\" class=\"bar\"></i>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input id=\"editDataCenterState\" type=\"text\" required=\"required\" value=\"{{editData.state}}\" />\r\n                        <label class=\"control-label\" for=\"input\">State*</label>\r\n                        <i id=\"stateBar\" class=\"bar\"></i>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input id=\"editDataCenterCity\" type=\"text\" required=\"required\" value=\"{{editData.city}}\" />\r\n                        <label class=\"control-label\" for=\"input\">City*</label>\r\n                        <i id=\"cityBar\" class=\"bar\"></i>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <select id=\"editDataCenterTimezone\">\r\n                            <option class=\"modal_placeholder\" value=\"Time zone*\">Time zone*</option>\r\n                            <option *ngFor='let element of time_zone_list' [selected]=\"element.name === editData.time_zone\" [value]=\"element.value\">{{element.name}}</option>\r\n                        </select>\r\n                        <label class=\"control-label\" for=\"select\"></label>\r\n                        <i id=\"timezoneBar\" class=\"bar\"></i>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12 form-modal\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 pull-left modal-buttons\">\r\n                            <button type=\"button\" class=\"btn btn-default btn-edit btn-edit-cancel\" (click)=\"c('Close click')\">Cancel</button>\r\n                        </div>\r\n                        <div class=\"col-md-6 pull-left modal-buttons\" style=\"text-align: right;\">\r\n                            <button type=\"button\" class=\"btn btn-primary btn-edit btn-edit-save\" (click)=\"validateEdit($event)\">Save</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div style=\"display: none;\" class=\"apiResponseDiv\">\r\n            <div class=\"apiSuccess\">\r\n                <div class=\"form-modal\" style=\"padding-bottom: 40px;\">\r\n                    <div class=\"header_title\">Edit data center</div>\r\n                    <!--<p class=\"modal_description\">Edit data center 1 of your network. It's quick and easy. If you need any assistance please\r\n                        <a style=\"color:#007bff;\">contact us</a>.</p>-->\r\n                    <div style=\"color: green;\" class=\"apiMsg\">Data center edited successfully !</div>\r\n                </div>\r\n                <div class=\"col-md-12 form-modal\" style=\"padding-bottom: 30px;\">\r\n                    <div style=\" position: absolute; top:13%; left:50%; transform: translate(-50%,-50%);\" class=\"clearfix\">\r\n                        <button type=\"button\" class=\"btn btn-primary save_btn btn-edit-save\" (click)=\"c('Close click')\">Close</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"apiFailed\" style=\"display: none\">\r\n                <div class=\"form-modal\" style=\"padding-bottom: 40px;\">\r\n                    <div class=\"header_title\">Edit data center</div>\r\n                    <!--<p class=\"modal_description\">Edit data center 1 of your network. It's quick and easy. If you need any assistance please\r\n                        <a style=\"color:#007bff;\">contact us</a>.</p>-->\r\n                    <div style=\"color: red;\" class=\"apiMsg\">Something went wrong !</div>\r\n                    <p id=\"editApiErrorMsg\" style=\"color: red;\"></p>\r\n                </div>\r\n                <div class=\"col-md-12 form-modal\" style=\"padding-bottom: 30px;\">\r\n                    <div style=\"position: absolute; top:13%; left:50%; transform: translate(-50%,-50%);\" class=\"\">\r\n                        <button type=\"button\" class=\"btn btn-primary save_btn btn-edit-save\" (click)=\"c('Close click')\">Close</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #deleteDataCenter let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"modalForm\">\r\n            <div class=\"form-modal\">\r\n                <div class=\"header_title\" style=\"font-weight: 400;font-size: 30px; \">Are you sure you want to delete {{editData.name}} ?</div>\r\n            </div>\r\n            <div class=\"col-md-12 form-modal\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6 col-sm-12 modal-buttons\">\r\n                        <button type=\"button\" class=\"btn btn-default btn-delete\" (click)=\"c('Close click')\">Do not delete</button>\r\n                    </div>\r\n                    <div class=\"col-md-6 col-sm-12 modal-buttons\" style=\"text-align: right;\">\r\n                        <button (click)=\"deleteDC()\" type=\"button\" class=\"btn btn-primary save_btn\">Yes, delete</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div style=\"display: none;\" class=\"apiResponseDiv\">\r\n            <div class=\"apiSuccess\">\r\n                <div class=\"form-modal\" style=\"padding-bottom: 40px;\">\r\n                    <div class=\"header_title\"> Delete data center</div>\r\n                    <div style=\"color: green;\" class=\"apiMsg\">Data center deleted successfully !</div>\r\n                </div>\r\n                <div class=\"col-md-12 form-modal\" style=\"padding-bottom: 30px;\">\r\n                    <div style=\" position: absolute; top:13%; left:50%; transform: translate(-50%,-50%);\" class=\"clearfix\">\r\n                        <button type=\"button\" class=\"btn btn-primary save_btn btn-edit-save\" (click)=\"c('Close click')\">Close</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"apiFailed\" style=\"display: none\">\r\n                <div class=\"form-modal\" style=\"padding-bottom: 40px;\">\r\n                    <div class=\"header_title\"> Delete data center</div>\r\n                    <div style=\"color: red;\" class=\"apiMsg\">Something went wrong !</div>\r\n                    <p id=\"deleteApiErrorMsg\" style=\"color: red;\"></p>\r\n                </div>\r\n                <div class=\"col-md-12 form-modal\" style=\"padding-bottom: 30px;\">\r\n                    <div style=\"position: absolute; top:13%; left:50%; transform: translate(-50%,-50%);\" class=\"\">\r\n                        <button type=\"button\" class=\"btn btn-primary save_btn btn-edit-save\" (click)=\"c('Close click')\">Close</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #deleteComponent let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-body componentDeleteModal\">\r\n        <div class=\"form-modal\">\r\n            <div class=\"header_title\" style=\"font-weight: 400;font-size: 30px; \">Are you sure you want to delete the component {{deleteData.name}}?</div>\r\n        </div>\r\n        <div class=\"col-md-12 form-modal\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 col-sm-12 modal-buttons\">\r\n                    <button type=\"button\" class=\"btn btn-default btn-delete\" (click)=\"c('Close click')\">Do not delete</button>\r\n                </div>\r\n                <div class=\"col-md-6 col-sm-12 modal-buttons\" style=\"text-align: right;\">\r\n                    <button type=\"button\" class=\"btn btn-primary save_btn\" (click)=\"deleteComponentData(deleteData.id)\">Yes, delete</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div style=\"display: none;\" class=\"apiResponseDivComponent\">\r\n        <div class=\"apiSuccess\">\r\n            <div class=\"form-modal\">\r\n                <div style=\"color: green;\" class=\"apiMsg\">Component Deleted successfully !</div>\r\n            </div>\r\n            <div class=\"col-md-12 form-modal\">\r\n                <div style=\"margin: 0 auto;\" class=\"row\">\r\n                    <button type=\"button\" class=\"btn btn-primary btn-edit-cancel\" (click)=\"c('Close click')\">Close</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"apiFailed\" style=\"display: none\">\r\n            <div class=\"form-modal\">\r\n                <div style=\"color: red;\" class=\"apiMsg\">Something went wrong !</div>\r\n                <p id=\"apiErrorMsgComponent\"></p>\r\n            </div>\r\n            <div class=\"col-md-12 form-modal\">\r\n                <div style=\"margin: 0 auto;\" class=\"row\">\r\n                    <button type=\"button\" class=\"btn btn-primary btn-edit-cancel\" (click)=\"c('Close click')\">Close</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #editComponent let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"modalForm\">\r\n            <div class=\"form-modal\">\r\n                <div class=\"header_title\" style=\"text-align: center;\">Edit Component</div>\r\n            </div>\r\n            <form>\r\n                <div class=\"form-modal\" style=\"padding-top: 0;\">\r\n                    <div class=\"form-group\" style=\"margin-top: 0;\">\r\n                        <input id=\"editComponentName\" type=\"text\" required=\"required\" value=\"{{componentRecords.name}}\" />\r\n                        <label class=\"control-label\" for=\"input\">Component Name*</label>\r\n                        <i id='editComponentBar1' class=\"bar\"></i>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <select id=\"editComponentNameType\" [(ngModel)]=\"editComponentNameType\" name=\"editComponentNameType\" (change)=\"onVersionChangeEdit(editComponentNameType)\">\r\n                            <option class=\"modal_placeholder\" value=\"Type*\">Type*</option>\r\n                            <option *ngFor='let ver of version' [selected]=\"ver.name === componentRecords.version\" [value]=\"ver.name\">{{ver.name}}</option>\r\n                        </select>\r\n                        <label class=\"control-label\" for=\"select\"></label>\r\n                        <i id=\"editComponentBar2\" class=\"bar\"></i>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n\t\t\t\t\t\t<select [(ngModel)]=\"editComponentVersion\" name=\"editComponentVersion\" id=\"editComponentVersion\">\r\n\t\t\t\t\t\t\t<option class=\"modal_placeholder\">Sub Type</option>\r\n\t\t\t\t\t\t\t<option value=\"{{subTypeEdit.name}}\" *ngFor='let subTypeEdit of subTypesEdit'>{{subTypeEdit.name}}</option>\r\n\t\t\t\t\t\t</select>\r\n                        <i id=\"editComponentBar3\" class=\"bar\"></i>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input id=\"editComponentIpAddress\" type=\"text\" required=\"required\" value=\"{{componentRecords.ipAddress}}\" />\r\n                        <label class=\"control-label\" for=\"input\">IP Address*</label>\r\n                        <i id=\"editComponentBar4\" class=\"bar\"></i>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input id=\"editComponentComponentUser\" type=\"text\" required=\"required\" value=\"{{componentRecords.componentUser}}\" />\r\n                        <label class=\"control-label\" for=\"input\">Username*</label>\r\n                        <i id=\"editComponentBar5\" class=\"bar\"></i>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input id=\"editComponentPassword\" type=\"password\" required=\"required\" value=\"{{componentRecords.password}}\" />\r\n                        <label class=\"control-label\" for=\"input\">Password*</label>\r\n                        <i id=\"editComponentBar6\" class=\"bar\"></i>\r\n                    </div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div *ngIf=\"componentRecords.version == 'NEXUS';then threshold_edit\"></div>\r\n                    <ng-template #threshold_edit>\r\n\t\t\t\t\t\t<p class=\"modal-text-p\">Threshold Value</p>\r\n\t\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t\t<table class=\"table modal-table\">\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t\t\t<td>WARNING</td>\r\n\t\t\t\t\t\t\t\t\t<td>ALERT</td>\r\n\t\t\t\t\t\t\t\t\t<td>MAX</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td>VRF</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group form-group-small\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"frmGrpInput\" id=\"editComponentvrfWarnStart\" type=\"text\" required=\"required\" value=\"{{componentRecords.vrfWarnStart}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t\t<i id=\"editComponentBar7\" class=\"bar\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group form-group-small\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"frmGrpInput\" id=\"editComponentvrfWarnEnd\" type=\"text\" required=\"required\" value=\"{{componentRecords.vrfWarnEnd}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t\t<i id=\"editComponentBar8\" class=\"bar\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group form-group-small\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"frmGrpInput\" id=\"editComponentvrfMax\" type=\"text\" required=\"required\" value=\"{{componentRecords.vrfMax}}\" />\r\n\t\t\t\t\t\t\t\t\t\t\t<i id=\"editComponentBar9\" class=\"bar\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td>BGP</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group form-group-small\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"frmGrpInput\" id=\"editComponentbgpPeersWarnStart\" type=\"text\" required=\"required\" value=\"{{componentRecords.bgpPeersWarnStart}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t\t<i id=\"editComponentBar10\" class=\"bar\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group form-group-small\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"frmGrpInput\" id=\"editComponentbgpPeersWarnEnd\" type=\"text\" required=\"required\" value=\"{{componentRecords.bgpPeersWarnEnd}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t\t<i id=\"editComponentBar11\" class=\"bar\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group form-group-small\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"frmGrpInput\" id=\"editComponentbgpPeersMax\" type=\"text\" required=\"required\" value=\"{{componentRecords.bgpPeersMax}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t\t<i id=\"editComponentBar12\" class=\"bar\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td>Vlan</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group form-group-small\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"frmGrpInput\" id=\"editComponentvlanWarnStart\" type=\"text\" required=\"required\" value=\"{{componentRecords.vlanWarnStart}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t\t<i id=\"editComponentBar13\" class=\"bar\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group form-group-small\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"frmGrpInput\" id=\"editComponentvlanWarnEnd\" type=\"text\" required=\"required\" value=\"{{componentRecords.vlanWarnEnd}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t\t<i id=\"editComponentBar14\" class=\"bar\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group form-group-small\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"frmGrpInput\" id=\"editComponentvlanMax\" type=\"text\" required=\"required\" value=\"{{componentRecords.vlanMax}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t\t<i id=\"editComponentBar15\" class=\"bar\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td>Harp</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group form-group-small\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"frmGrpInput\" id=\"editComponenthsrpWarnStart\" type=\"text\" required=\"required\" value=\"{{componentRecords.hsrpWarnStart}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t\t<i id=\"editComponentBar16\" class=\"bar\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group form-group-small\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"frmGrpInput\" id=\"editComponenthsrpWarnEnd\" type=\"text\" required=\"required\" value=\"{{componentRecords.hsrpWarnEnd}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t\t<i id=\"editComponentBar17\" class=\"bar\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group form-group-small\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"frmGrpInput\" id=\"editComponenthsrpMax\" type=\"text\" required=\"required\" value=\"{{componentRecords.hsrpMax}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t\t<i id=\"editComponentBar18\" class=\"bar\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td>Static Router</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group form-group-small\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"frmGrpInput\" id=\"editComponentstaticRoutesWarnStart\" type=\"text\" required=\"required\" value=\"{{componentRecords.staticRoutesWarnStart}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t\t<i id=\"editComponentBar19\" class=\"bar\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group form-group-small\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"frmGrpInput\" id=\"editComponentstaticRoutesWarnEnd\" type=\"text\" required=\"required\" value=\"{{componentRecords.staticRoutesWarnEnd}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t\t<i id=\"editComponentBar20\" class=\"bar\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group form-group-small\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"frmGrpInput\" id=\"editComponentstaticRoutesMax\" type=\"text\" required=\"required\" value=\"{{componentRecords.staticRoutesMax}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t\t<i id=\"editComponentBar21\" class=\"bar\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n                </div>\r\n                <div class=\"col-md-12 form-modal\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 pull-left modal-buttons\">\r\n                            <button type=\"button\" class=\"btn btn-default btn-edit btn-edit-cancel\" (click)=\"c('Close click')\">Cancel</button>\r\n                        </div>\r\n                        <div class=\"col-md-6 pull-left modal-buttons\" style=\"text-align: right;\">\r\n                            <button type=\"button\" class=\"btn btn-primary btn-edit btn-edit-save\" (click)=\"validateEditComponent($event)\">Finish</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div style=\"display: none;\" class=\"apiResponseDiv\">\r\n            <div class=\"apiSuccess\">\r\n                <div class=\"form-modal\" style=\"padding-bottom: 40px;\">\r\n                    <div class=\"header_title\" style=\"font-size: 30px;font-weight: normal;text-align: center;\">Congratulations. Your component has been successfully edited.</div>\r\n                </div>\r\n                <div class=\"col-md-12 form-modal\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 pull-left modal-buttons\">\r\n                            <button id=\"editComponentSuccessClose\" type=\"button\" class=\"btn btn-default btn-edit btn-edit-cancel\" (click)=\"c('Close click')\">Close</button>\r\n                        </div>\r\n                        <div class=\"col-md-6 pull-left modal-buttons\" style=\"text-align: right;\">\r\n                            <button type=\"button\" class=\"btn btn-primary btn-edit btn-edit-save\" (click)=\"openComponentModalNew(viewComponent,newDeleteDataIndex,'view', currentDC)\">View Component</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"apiFailed\" style=\"display: none\">\r\n                <div class=\"form-modal\" style=\"padding-bottom: 40px;\">\r\n                    <div class=\"header_title\" style=\"font-size: 30px;font-weight: normal;text-align: center;\">Something went wrong !</div>\r\n                    <p id=\"editComponentApiErrorMsg\" style=\"color: red;\"></p>\r\n                </div>\r\n                <div class=\"col-md-12 form-modal\" style=\"padding-bottom: 30px;\">\r\n                    <div style=\"position: absolute; top:13%; left:50%; transform: translate(-50%,-50%);\" class=\"\">\r\n                        <button type=\"button\" class=\"btn btn-primary save_btn btn-edit-save\" (click)=\"c('Close click')\">Close</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #viewComponent let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"modalForm\">\r\n            <div class=\"form-modal\">\r\n                <div class=\"header_title text-center\">{{componentRecords.name}}</div>\r\n                <h2 class=\"text-center\">{{componentRecords.version}}</h2>\r\n                <h3 class=\"text-center\">{{componentRecords.subVersion}}</h3>\r\n                <br>\r\n            </div>\r\n\t\t\t\r\n\t\t\t<div *ngIf=\"componentRecords.version == 'NEXUS';then threshold_view\"></div>\r\n\t\t\t<ng-template #threshold_view>\r\n\t\t\t\t<div class=\"form-modal\">\r\n\t\t\t\t\t<h4 class=\"text-center\">Threshold Value</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t<td>WARNING</td>\r\n\t\t\t\t\t\t\t<td>ALERT</td>\r\n\t\t\t\t\t\t\t<td>MAX</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td>VRF</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<span>{{componentRecords.vrfWarnStart}}</span>\r\n\t\t\t\t\t\t\t\t<i class=\"bar\"></i>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<span>{{componentRecords.vrfWarnEnd}}</span>\r\n\t\t\t\t\t\t\t\t<i class=\"bar\"></i>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<span>{{componentRecords.vrfMax}}</span>\r\n\t\t\t\t\t\t\t\t<i class=\"bar\"></i>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td>BGP</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<span>{{componentRecords.bgpPeersWarnStart}}</span>\r\n\t\t\t\t\t\t\t\t<i class=\"bar\"></i>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<span>{{componentRecords.bgpPeersWarnEnd}}</span>\r\n\t\t\t\t\t\t\t\t<i class=\"bar\"></i>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<span>{{componentRecords.bgpPeersMax}}</span>\r\n\t\t\t\t\t\t\t\t<i class=\"bar\"></i>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td>Vlan</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<span>{{componentRecords.vlanWarnStart}}</span>\r\n\t\t\t\t\t\t\t\t<i class=\"bar\"></i>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<span>{{componentRecords.vlanWarnEnd}}</span>\r\n\t\t\t\t\t\t\t\t<i class=\"bar\"></i>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<span>{{componentRecords.vlanMax}}</span>\r\n\t\t\t\t\t\t\t\t<i class=\"bar\"></i>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td>Harp</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<span>{{componentRecords.hsrpWarnStart}}</span>\r\n\t\t\t\t\t\t\t\t<i class=\"bar\"></i>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<span>{{componentRecords.hsrpWarnEnd}}</span>\r\n\t\t\t\t\t\t\t\t<i class=\"bar\"></i>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<span>{{componentRecords.hsrpMax}}</span>\r\n\t\t\t\t\t\t\t\t<i class=\"bar\"></i>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td>Static Router</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<span>{{componentRecords.staticRoutesWarnStart}}</span>\r\n\t\t\t\t\t\t\t\t<i class=\"bar\"></i>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<span>{{componentRecords.staticRoutesWarnEnd}}</span>\r\n\t\t\t\t\t\t\t\t<i class=\"bar\"></i>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<span>{{componentRecords.staticRoutesMax}}</span>\r\n\t\t\t\t\t\t\t\t<i class=\"bar\"></i>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-template>\r\n            <div class=\"col-md-12 form-modal\">\r\n                <div class=\"row\">\r\n                    <div class=\"offset-md-1 col-md-5 pull-left modal-buttons\">\r\n                        <button id='closeViewComponentModal' type=\"button\" class=\"btn btn-default btn-edit btn-edit-cancel\" (click)=\"c('Close click')\">Cancel</button>\r\n                    </div>\r\n                    <div class=\"col-md-5 pull-left modal-buttons\" style=\"text-align: right;\">\r\n                        <button type=\"button\" class=\"btn btn-primary btn-edit btn-edit-save\" (click)=\"openComponentModalNew(editComponent,currentRow,'edit', currentDC, true)\">Edit</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/provisioning/provisioning.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvisioningComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
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



var ProvisioningComponent = (function () {
    function ProvisioningComponent(modalService, config) {
        this.modalService = modalService;
        this.config = config;
        this.imgUrl = "assets/images/icon-cube.png";
        this.callMatricsFilter = false;
        this.editComponentFilter = false;
        this.apiStatus = false;
        this.apiStatusMsg = false;
        this.name = '';
        this.country = 'Country*';
        this.state = '';
        this.city = '';
        this.timezone = 'Time zone*';
        this.apiError = 1;
        this.ComVersion = 'Type*';
        this.ComSubVersion = 'Sub Type';
        this.editFromView = false;
        this.scrollLimit = 4;
        this.scrollLimitMin = 0;
        this.scrollLimitMax = 3;
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
        }
        this.modalService.open(content, { windowClass: 'custom_modal', backdrop: 'static' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
            if (type == 'add' && _this.closeResult == 'Closed with: Close click') {
                _this.name = '';
                _this.country = 'Country*';
                _this.state = '';
                _this.city = '';
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
        this.config.deleteDataCenter('1', this.editId).subscribe(function (res) {
            $('.modalForm').hide();
            $('.apiResponseDiv').show();
            if (res.status == 'success') {
                _this.provisioningList();
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
                var type_id = _this.componentRecords.version;
                var Subtype_id = _this.componentRecords.subVersion;
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
            this.config.componentAdd(1, this.comName, this.currentDC, '', this.ipAddress, this.ComVersion, this.ComSubVersion, this.componentUser, this.password, this.enablePassword, this.vrfWarnStart, this.vrfWarnEnd, this.vrfMax, this.bgpPeersWarnStart, this.bgpPeersWarnEnd, this.bgpPeersMax, this.vlanWarnStart, this.vlanWarnEnd, this.vlanMax, this.hsrpWarnStart, this.hsrpWarnEnd, this.hsrpMax, this.staticRoutesWarnStart, this.staticRoutesWarnEnd, this.staticRoutesMax, '', '', '').subscribe(function (res) {
                if (res.status == 'success') {
                    _this.provisioningList();
                    _this.apiError = 1;
                    _this.currentDataCenterComponentId = res.component_id;
                }
                else {
                    _this.apiError = 0;
                }
            });
        }
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
        if (this.next_step) {
            this.progressPerc = (($(".f1-progress-line").css('width').slice(0, -2) * 100) / $(".f1-progress").css('width').slice(0, -2));
            var fieldSet = event.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
            $(fieldSet).fadeOut(500, function () { });
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
            $(fieldSet).next().fadeIn(500, function () { });
        }
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
        $(fieldSet).fadeOut(500, function () { });
        $(".f1-step.active").removeClass('active').addClass('activated').prev().addClass('active');
        $(fieldSet).prev().fadeIn(500, function () { });
    };
    ProvisioningComponent.prototype.tabClick = function (event, id) {
        var flag_id = true;
        if ($(".f1-step.active").attr('id') == "f1-step_1") {
            if ($('#addComponentName').val() == '') {
                $('#NameBar').css('border-bottom', '0.0625rem solid red');
                var flag_id = false;
            }
            else {
                $('#NameBar').css('border-bottom', '0.0625rem solid #999');
            }
        }
        else if ($(".f1-step.active").attr('id') == "f1-step_2") {
            if ($('#addComponentType').val() == 'Type*') {
                $('#Typebar').css('border-bottom', '0.0625rem solid red');
                var flag_id = false;
            }
            else {
                $('#Typebar').css('border-bottom', '0.0625rem solid #999');
            }
        }
        if (flag_id) {
            if ($(".f1-step.active").attr('id') != 'complete') {
                var fieldSet = event.currentTarget.parentElement;
                if ($(fieldSet).attr("class") == 'f1-step activated' || $(fieldSet).attr("class") == 'f1-step activated next') {
                    $(".f1-step.active").removeClass('active').addClass('activated');
                    $(fieldSet).removeClass('activated').addClass('active');
                    $('fieldSet').fadeOut(500, function () { });
                    $("#fieldset_" + id).fadeIn(500, function () { });
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
        if ($('#editDataCenterState').val() == '') {
            $('#stateBar').css('border-bottom', '0.0625rem solid red');
            var flag = true;
        }
        else {
            $('#stateBar').css('border-bottom', '0.0625rem solid #999');
        }
        if ($('#editDataCenterCity').val() == '') {
            $('#cityBar').css('border-bottom', '0.0625rem solid red');
            var flag = true;
        }
        else {
            $('#cityBar').css('border-bottom', '0.0625rem solid #999');
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
                _this.config.editDataCenter('1', editId_1, editName_1, editCountry_1, editState_1, editCity_1, editTimezone_1).subscribe(function (res) {
                    $('.modalForm').hide();
                    $('.apiResponseDiv').show();
                    if (res.status == 'success') {
                        $('#callMatricsDropdown' + _this.editIdIndex).hide();
                        _this.editData.name = editName_1;
                        _this.editData.country = editCountry_1;
                        _this.editData.state = editState_1;
                        _this.editData.city = editCity_1;
                        _this.editData.time_zone = editTimezone_1;
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
            var flag = true;
        }
        else {
            $('#editComponentBar1').css('border-bottom', '0.0625rem solid #999');
        }
        if ($('#editComponentNameType').val() == 'Type*') {
            $('#editComponentBar2').css('border-bottom', '0.0625rem solid red');
            var flag = true;
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
            var flag = true;
        }
        else {
            var ip_val = this.ipValidation($('#editComponentIpAddress').val());
            if (ip_val == 'success') {
                $('#editComponentBar4').css('border-bottom', '0.0625rem solid #999');
            }
            else {
                $('#editComponentBar4').css('border-bottom', '0.0625rem solid red');
                var flag = true;
            }
        }
        if ($('#editComponentComponentUser').val() == '') {
            $('#editComponentBar5').css('border-bottom', '0.0625rem solid red');
            var flag = true;
        }
        else {
            $('#editComponentBar5').css('border-bottom', '0.0625rem solid #999');
        }
        if ($('#editComponentPassword').val() == '') {
            $('#editComponentBar6').css('border-bottom', '0.0625rem solid red');
            var flag = true;
        }
        else {
            $('#editComponentBar6').css('border-bottom', '0.0625rem solid #999');
        }
        /*if ($('#editComponentvrfWarnStart').val() == '') {
          $('#editComponentBar7').css('border-bottom', '0.0625rem solid red');
          var flag = true;
        } else {
          $('#editComponentBar7').css('border-bottom', '0.0625rem solid #999');
        }
        if ($('#editComponentvrfWarnEnd').val() == '') {
          $('#editComponentBar8').css('border-bottom', '0.0625rem solid red');
          var flag = true;
        } else {
          $('#editComponentBar8').css('border-bottom', '0.0625rem solid #999');
        }
        if ($('#editComponentvrfMax').val() == '') {
          $('#editComponentBar9').css('border-bottom', '0.0625rem solid red');
          var flag = true;
        } else {
          $('#editComponentBar9').css('border-bottom', '0.0625rem solid #999');
        }
    
        if ($('#editComponentbgpPeersWarnStart').val() == '') {
          $('#editComponentBar10').css('border-bottom', '0.0625rem solid red');
          var flag = true;
        } else {
          $('#editComponentBar10').css('border-bottom', '0.0625rem solid #999');
        }
        if ($('#editComponentbgpPeersWarnEnd').val() == '') {
          $('#editComponentBar11').css('border-bottom', '0.0625rem solid red');
          var flag = true;
        } else {
          $('#editComponentBar11').css('border-bottom', '0.0625rem solid #999');
        }
        if ($('#editComponentbgpPeersMax').val() == '') {
          $('#editComponentBar12').css('border-bottom', '0.0625rem solid red');
          var flag = true;
        } else {
          $('#editComponentBar12').css('border-bottom', '0.0625rem solid #999');
        }
    
        if ($('#editComponentvlanWarnStart').val() == '') {
          $('#editComponentBar13').css('border-bottom', '0.0625rem solid red');
          var flag = true;
        } else {
          $('#editComponentBar13').css('border-bottom', '0.0625rem solid #999');
        }
        if ($('#editComponentvlanWarnEnd').val() == '') {
          $('#editComponentBar14').css('border-bottom', '0.0625rem solid red');
          var flag = true;
        } else {
          $('#editComponentBar14').css('border-bottom', '0.0625rem solid #999');
        }
        if ($('#editComponentvlanMax').val() == '') {
          $('#editComponentBar15').css('border-bottom', '0.0625rem solid red');
          var flag = true;
        } else {
          $('#editComponentBar15').css('border-bottom', '0.0625rem solid #999');
        }
    
        if ($('#editComponenthsrpWarnStart').val() == '') {
          $('#editComponentBar16').css('border-bottom', '0.0625rem solid red');
          var flag = true;
        } else {
          $('#editComponentBar16').css('border-bottom', '0.0625rem solid #999');
        }
        if ($('#editComponenthsrpWarnEnd').val() == '') {
          $('#editComponentBar17').css('border-bottom', '0.0625rem solid red');
          var flag = true;
        } else {
          $('#editComponentBar17').css('border-bottom', '0.0625rem solid #999');
        }
        if ($('#editComponenthsrpMax').val() == '') {
          $('#editComponentBar18').css('border-bottom', '0.0625rem solid red');
          var flag = true;
        } else {
          $('#editComponentBar18').css('border-bottom', '0.0625rem solid #999');
        }
    
        if ($('#editComponentstaticRoutesWarnStart').val() == '') {
          $('#editComponentBar19').css('border-bottom', '0.0625rem solid red');
          var flag = true;
        } else {
          $('#editComponentBar19').css('border-bottom', '0.0625rem solid #999');
        }
        if ($('#editComponentstaticRoutesWarnEnd').val() == '') {
          $('#editComponentBar20').css('border-bottom', '0.0625rem solid red');
          var flag = true;
        } else {
          $('#editComponentBar20').css('border-bottom', '0.0625rem solid #999');
        }
        if ($('#editComponentstaticRoutesMax').val() == '') {
          $('#editComponentBar21').css('border-bottom', '0.0625rem solid red');
          var flag = true;
        } else {
          $('#editComponentBar21').css('border-bottom', '0.0625rem solid #999');
        }*/
        if (flag != true) {
            var editComponentName_1 = $('#editComponentName').val();
            var editComponentNameType_1 = $('#editComponentNameType').val();
            var editComponentVersion_1 = $('#editComponentVersion').val();
            var editComponentIpAddress_1 = $('#editComponentIpAddress').val();
            var editComponentComponentUser_1 = $('#editComponentComponentUser').val();
            var editComponentPassword_1 = $('#editComponentPassword').val();
            var editComponentvrfWarnStart_1 = $('#editComponentvrfWarnStart').val();
            var editComponentvrfWarnEnd_1 = $('#editComponentvrfWarnEnd').val();
            var editComponentvrfMax_1 = $('#editComponentvrfMax').val();
            var editComponentbgpPeersWarnStart_1 = $('#editComponentbgpPeersWarnStart').val();
            var editComponentbgpPeersWarnEnd_1 = $('#editComponentbgpPeersWarnEnd').val();
            var editComponentbgpPeersMax_1 = $('#editComponentbgpPeersMax').val();
            var editComponentvlanWarnStart_1 = $('#editComponentvlanWarnStart').val();
            var editComponentvlanWarnEnd_1 = $('#editComponentvlanWarnEnd').val();
            var editComponentvlanMax_1 = $('#editComponentvlanMax').val();
            var editComponenthsrpWarnStart_1 = $('#editComponenthsrpWarnStart').val();
            var editComponenthsrpWarnEnd_1 = $('#editComponenthsrpWarnEnd').val();
            var editComponenthsrpMax_1 = $('#editComponenthsrpMax').val();
            var editComponentstaticRoutesWarnStart_1 = $('#editComponentstaticRoutesWarnStart').val();
            var editComponentstaticRoutesWarnEnd_1 = $('#editComponentstaticRoutesWarnEnd').val();
            var editComponentstaticRoutesMax_1 = $('#editComponentstaticRoutesMax').val();
            setTimeout(function () {
                _this.config.editComponent('1', _this.currentDataCenterComponentId, editComponentName_1, editComponentNameType_1, editComponentVersion_1, editComponentIpAddress_1, editComponentComponentUser_1, editComponentPassword_1, editComponentvrfWarnStart_1, editComponentvrfWarnEnd_1, editComponentvrfMax_1, editComponentbgpPeersWarnStart_1, editComponentbgpPeersWarnEnd_1, editComponentbgpPeersMax_1, editComponentvlanWarnStart_1, editComponentvlanWarnEnd_1, editComponentvlanMax_1, editComponenthsrpWarnStart_1, editComponenthsrpWarnEnd_1, editComponenthsrpMax_1, editComponentstaticRoutesWarnStart_1, editComponentstaticRoutesWarnEnd_1, editComponentstaticRoutesMax_1).subscribe(function (res) {
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
    // moveRight() {
    //   this.deactivateCard();
    //   this.dataCenters.push({
    //     name: 'Data Center 5',
    //     country: 'United States',
    //     state: 'Texas',
    //     city: 'Plano',
    //     timezone: 'IST',
    //     components: ''
    //   });
    //   this.dataCenters.splice(0, 1);
    // }
    // moveLeft() {
    //   this.deactivateCard();
    //   this.dataCenters.push({
    //     name: 'Data Center 2',
    //     country: 'United States',
    //     state: 'Texas',
    //     city: 'Plano',
    //     timezone: 'IST',
    //     components: ''
    //   });
    //   this.dataCenters.splice(3, 1);
    // }
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
        if ($('#addDataCenterState').val() == '') {
            $('#addstateBar').css('border-bottom', '0.0625rem solid red');
            var flag = true;
        }
        else {
            $('#addstateBar').css('border-bottom', '0.0625rem solid #999');
        }
        if ($('#addDataCenterCity').val() == '') {
            $('#addcityBar').css('border-bottom', '0.0625rem solid red');
            var flag = true;
        }
        else {
            $('#addcityBar').css('border-bottom', '0.0625rem solid #999');
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
                _this.config.addDataCenter('1', _this.name, _this.country, _this.state, _this.city, _this.timezone).subscribe(function (res) {
                    $('.modalForm').hide();
                    $('.apiResponseDiv').show();
                    var sucflag = false;
                    if (res.status == 'success') {
                        _this.name = '';
                        _this.country = 'Country*';
                        _this.state = '';
                        _this.city = '';
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
                        var lastInsertedDataCenterId = res.id;
                        _this.provisioningList(lastInsertedDataCenterId, true);
                    }
                });
            }, 100);
        }
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
                this.scrollLimitMax = 3;
            }
            else {
                this.scrollLimitMin = id - 3;
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
        this.config.getDataCenterComponents(id).subscribe(function (res) {
            if (res.length > 0) {
                _this.dataCentersDetails = res;
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
            });
            this.ComSubVersion = "Sub Type";
            $("#addComponentSubType").prop("disabled", false);
        }
    };
    ProvisioningComponent.prototype.onVersionChangeEdit = function (name) {
        var _this = this;
        /*if(name == 'NEXUS'){
          $('.toggleThreshold').show();
        }else{
          $('.toggleThreshold').hide();
        }
        if(name == 'ASA'){
          $('.toggleEnablePassword').show();
        }else{
          $('.toggleEnablePassword').hide();
        }*/
        if (name == 'Type*') {
            this.editComponentVersion = "Sub Type";
            $("#editComponentVersion").prop("disabled", true);
        }
        else {
            this.config.getSubtypes(name).subscribe(function (res) {
                _this.subTypesEdit = res;
            });
            this.editComponentVersion = "Sub Type";
            $("#editComponentVersion").prop("disabled", false);
        }
    };
    ProvisioningComponent.prototype.deleteComponentData = function (componentId) {
        var _this = this;
        this.config.componentDelete(1, componentId).subscribe(function (res) {
            var componentFlag = false;
            $('.componentDeleteModal').hide();
            $('.apiResponseDivComponent').show();
            if (res.status == 'success') {
                componentFlag = true;
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
    return ProvisioningComponent;
}());
ProvisioningComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-provisioning',
        template: __webpack_require__("../../../../../src/app/provisioning/provisioning.component.html"),
        styles: [__webpack_require__("../../../../../src/app/provisioning/provisioning.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]) === "function" && _b || Object])
], ProvisioningComponent);

var _a, _b;
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

/***/ }),

/***/ "../../../../../src/assets/bootzard/img/logo.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../../../../src/assets/bootzard/img/logo@2x.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/assets/bootzard/css/form-elements.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\ninput[type=\"text\"], \r\ninput[type=\"password\"], \r\ntextarea, \r\ntextarea.form-control {\r\n\theight: 44px;\r\n    margin: 0;\r\n    padding: 0 20px;\r\n    vertical-align: middle;\r\n    background: #fff;\r\n    border: 1px solid #ddd;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 16px;\r\n    font-weight: 300;\r\n    line-height: 44px;\r\n    color: #888; border-radius: 4px; box-shadow: none; transition: all .3s;\r\n}\r\n\r\ntextarea, \r\ntextarea.form-control {\r\n\theight: 90px;\r\n\tpadding-top: 8px;\r\n\tpadding-bottom: 8px;\r\n\tline-height: 30px;\r\n}\r\n\r\ninput[type=\"text\"]:focus, \r\ninput[type=\"password\"]:focus, \r\ntextarea:focus, \r\ntextarea.form-control:focus {\r\n\toutline: 0;\r\n\tbackground: #fff;\r\n    border: 1px solid #ccc; box-shadow: none;\r\n}\r\n\r\ninput[type=\"text\"]:-moz-placeholder, input[type=\"password\"]:-moz-placeholder, \r\ntextarea:-moz-placeholder, textarea.form-control:-moz-placeholder { color: #888; }\r\n\r\ninput[type=\"text\"]:-ms-input-placeholder, input[type=\"password\"]:-ms-input-placeholder, \r\ntextarea:-ms-input-placeholder, textarea.form-control:-ms-input-placeholder { color: #888; }\r\n\r\ninput[type=\"text\"]::-webkit-input-placeholder, input[type=\"password\"]::-webkit-input-placeholder, \r\ntextarea::-webkit-input-placeholder, textarea.form-control::-webkit-input-placeholder { color: #888; }\r\n\r\nlabel { font-weight: 300; }\r\n\r\n\r\nbutton.btn {\r\n\tmin-width: 105px;\r\n\theight: 40px;\r\n    margin: 0;\r\n    padding: 0 20px;\r\n    vertical-align: middle;\r\n    border: 0;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 16px;\r\n    font-weight: 300;\r\n    line-height: 40px;\r\n    color: #fff; border-radius: 4px;\r\n    text-shadow: none; box-shadow: none; transition: all .3s;\r\n}\r\n\r\nbutton.btn:hover { opacity: 0.6; color: #fff; }\r\nbutton.btn:active { outline: 0; opacity: 0.6; color: #fff; box-shadow: none; }\r\nbutton.btn:focus,\r\nbutton.btn:active:focus,\r\nbutton.btn.active:focus { outline: 0; opacity: 0.6; color: #fff; }\r\n\r\nbutton.btn.btn-next,\r\nbutton.btn.btn-next:focus,\r\nbutton.btn.btn-next:active:focus, button.btn.btn-next.active:focus { background: #f35b3f; }\r\n\r\nbutton.btn.btn-submit,\r\nbutton.btn.btn-submit:focus,\r\nbutton.btn.btn-submit:active:focus, button.btn.btn-submit.active:focus { background: #f35b3f; }\r\n\r\nbutton.btn.btn-previous,\r\nbutton.btn.btn-previous:focus,\r\nbutton.btn.btn-previous:active:focus, button.btn.btn-previous.active:focus { background: #bbb; }\r\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/assets/bootzard/css/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nbody {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 16px;\r\n    font-weight: 300;\r\n    color: #888;\r\n    line-height: 30px;\r\n    text-align: center;\r\n}\r\n\r\nstrong { font-weight: 500; }\r\n\r\na, a:hover, a:focus {\r\n\tcolor: #f35b3f;\r\n\ttext-decoration: none; transition: all .3s;\r\n}\r\n\r\nh1, h2 {\r\n\tmargin-top: 10px;\r\n\tfont-size: 38px;\r\n    font-weight: 100;\r\n    color: #555;\r\n    line-height: 50px;\r\n}\r\n\r\nh3 {\r\n\tfont-size: 22px;\r\n    font-weight: 300;\r\n    color: #555;\r\n    line-height: 30px;\r\n}\r\n\r\nh4 {\r\n\tfont-size: 18px;\r\n    font-weight: 300;\r\n    color: #555;\r\n    line-height: 26px;\r\n}\r\n\r\nimg { max-width: 100%; }\r\n\r\n::-moz-selection { background: #f35b3f; color: #fff; text-shadow: none; }\r\n::selection { background: #f35b3f; color: #fff; text-shadow: none; }\r\n\r\n\r\n/***** Top menu *****/\r\n\r\n.navbar {\r\n\tpadding-top: 10px;\r\n\tbackground: #333;\r\n\tbackground: rgba(51, 51, 51, 0.3);\r\n\tborder: 0; transition: all .3s;\r\n}\r\n.navbar.navbar-no-bg { background: none; }\r\n\r\nul.navbar-nav {\r\n\tfont-size: 16px;\r\n\tcolor: #fff;\r\n}\r\n\r\n.navbar-inverse ul.navbar-nav li { padding-top: 8px; padding-bottom: 8px; }\r\n\r\n.navbar-inverse ul.navbar-nav li .li-text { opacity: 0.8; }\r\n\r\n.navbar-inverse ul.navbar-nav li a { display: inline; padding: 0; color: #fff; }\r\n.navbar-inverse ul.navbar-nav li a:hover { color: #fff; opacity: 1; border-bottom: 1px dotted #fff; }\r\n.navbar-inverse ul.navbar-nav li a:focus { color: #fff; outline: 0; opacity: 1; border-bottom: 1px dotted #fff; }\r\n\r\n.navbar-inverse ul.navbar-nav li .li-social a {\r\n\tmargin: 0 5px;\r\n\tfont-size: 28px;\r\n\tvertical-align: middle;\r\n}\r\n.navbar-inverse ul.navbar-nav li .li-social a:hover, \r\n.navbar-inverse ul.navbar-nav li .li-social a:focus { border: 0; color: #f35b3f; }\r\n\r\n.navbar-brand {\r\n\twidth: 162px;\r\n\tbackground: url(" + __webpack_require__("../../../../../src/assets/bootzard/img/logo.png") + ") left center no-repeat;\r\n\ttext-indent: -99999px;\r\n}\r\n\r\n\r\n/***** Top content *****/\r\n\r\n.top-content { padding: 40px 0 170px 0; }\r\n\r\n.top-content .text { color: #fff; }\r\n.top-content .text h1 { color: #fff; }\r\n.top-content .description { margin: 20px 0 10px 0; }\r\n.top-content .description p { opacity: 0.8; }\r\n.top-content .description a { color: #fff; }\r\n.top-content .description a:hover, \r\n.top-content .description a:focus { border-bottom: 1px dotted #fff; }\r\n\r\n.form-box { padding-top: 40px; }\r\n\r\n.f1 {\r\n\tpadding: 25px; background: #fff; border-radius: 4px;\r\n}\r\n.f1 h3 { margin-top: 0; margin-bottom: 5px; text-transform: uppercase; }\r\n\r\n.f1-steps { overflow: hidden; position: relative; margin-top: 20px; }\r\n\r\n.f1-progress { position: absolute; top: 24px; left: 0; width: 100%; height: 5px; background: #ddd; }\r\n.f1-progress-line { position: absolute; top: 0; left: 0; height: 1px; background: #7bbf6a; height: 5px; }\r\n\r\n.f1-step { position: relative; float: left; width: 24.333333%; padding: 0 5px; }\r\n\r\n.f1-step-icon {\r\n\tdisplay: inline-block; width: 40px; height: 40px; margin-top: 4px; background: #808080;\r\n\tfont-size: 16px; color: #fff; line-height: 40px; border-radius: 50%;\r\n}\r\n.f1-step.activated .f1-step-icon {\r\n\tbackground: #7bbf6a !important; border: 1px solid #7bbf6a !important; color: #fff; line-height: 38px;\r\n}\r\n.f1-step.active .f1-step-icon {\r\n\twidth: 48px; height: 48px; margin-top: 0; background: #7bbf6a !important; border: 1px solid #7bbf6a !important; font-size: 22px; line-height: 48px;\r\n}\r\n.f1-step.next .f1-step-icon {\r\n\twidth: 48px; height: 48px; margin-top: 0; background: #8ebcff; border: 1px solid #8ebcff; font-size: 22px; line-height: 48px;\r\n}\r\n\r\n.f1-step p { color: #808080; }\r\n.f1-step.activated p { color: #7bbf6a !important; }\r\n.f1-step.active p { color: #7bbf6a !important; }\r\n.f1-step.next p { color: #8ebcff; }\r\n\r\n.f1 fieldset { display: none; text-align: left; }\r\n\r\n.f1-buttons { text-align: right; }\r\n\r\n.f1 .input-error { border-color: #f35b3f; }\r\n\r\n\r\n\r\n/***** Media queries *****/\r\n\r\n@media (min-width: 992px) and (max-width: 1199px) {}\r\n\r\n@media (min-width: 768px) and (max-width: 991px) {}\r\n\r\n@media (max-width: 767px) {\r\n\t\r\n\t.navbar { padding-top: 0; }\r\n\t.navbar.navbar-no-bg { background: #333; background: rgba(51, 51, 51, 0.9); }\r\n\t.navbar-brand { height: 60px; margin-left: 15px; }\r\n\t.navbar-collapse { border: 0; }\r\n\t.navbar-toggle { margin-top: 12px; }\r\n\t\r\n\t.top-content { padding: 40px 0 110px 0; }\r\n\r\n}\r\n\r\n@media (max-width: 415px) {\r\n\t\r\n\th1, h2 { font-size: 32px; }\r\n\t\r\n\t.f1 { padding-bottom: 20px; }\r\n\t.f1-buttons button { margin-bottom: 5px; }\r\n\r\n}\r\n\r\n\r\n/* Retina-ize images/icons */\r\n\r\n@media\r\nonly screen and (-webkit-min-device-pixel-ratio: 2),\r\nonly screen and (   min--moz-device-pixel-ratio: 2),\r\nonly screen and (        min-device-pixel-ratio: 2),\r\nonly screen and (                -webkit-min-device-pixel-ratio: 2),\r\nonly screen and (                min-resolution: 192dpi),\r\nonly screen and (                min-resolution: 2dppx) {\r\n\t\r\n\t/* logo */\r\n    .navbar-brand {\r\n    \tbackground-image: url(" + __webpack_require__("../../../../../src/assets/bootzard/img/logo@2x.png") + ") !important; background-repeat: no-repeat !important; background-size: 162px 36px !important;\r\n    }\r\n\t\r\n}\r\n", ""]);

// exports


/***/ })

});
//# sourceMappingURL=provisioning.module.chunk.js.map