webpackJsonp(["report.module"],{

/***/ "../../../../../src/app/report/report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/assets/bootzard/css/form-elements.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/assets/bootzard/css/style.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/assets/css/new/Roboto.css"), "");

// module
exports.push([module.i, ".data-center {\r\n    color: #3b4147;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    padding: 6px 0 4px;\r\n    margin-bottom: 10px;\r\n}\r\n.tab-tile:hover {\r\n    cursor: pointer;\r\n    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);\r\n}\r\n.data-center-body {\r\n    color: #73787d;\r\n    font-size: 13px;\r\n    text-align: center;\r\n    margin-bottom: 1px;\r\n    font-weight: 600;\r\n}\r\n.tab-tile {\r\n    padding: 15px 0px 15px;\r\n}\r\n.tab-tile-active {\r\n    padding: 0px 0px 15px;\r\n    background-color: #fff; \r\n}\r\n.tab-tile-table {\r\n    background-color: #fff;\r\n    padding: 30px;\r\n    padding-top: 15px;\r\n}\r\nth {\r\n    color: #3b4147;\r\n}\r\ntd {\r\n    color: #73787d;\r\n}\r\n.img-thumbnail {\r\n    width: 100px;\r\n    height: 100px;\r\n    background-color: unset;\r\n    border: 0px;\r\n}\r\n.rsddropdown {\r\n    text-align: right;\r\n    padding-right: 15px;\r\n    height: 15px;\r\n}\r\n.rsddropdown-span {\r\n    cursor:pointer;\r\n    color:#b0bec5;\r\n    font-size:20px;\r\n    padding-left: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n.rsddropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #fff;\r\n    overflow: auto;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n    right: 10%;\r\n    border-radius: 6px;\r\n    border: 1px solid aliceblue;\r\n    cursor: pointer;\r\n    text-align: left;\r\n} \r\n.rsddropdown-content a {\r\n    color: #08070799;\r\n    padding: 5px 12px;\r\n    text-decoration: none;\r\n    display: block;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n} \r\n.rsddropdown a:hover {\r\n    background-color: #ddd;\r\n}\r\n.btn-primary {\r\n    background-color: #203c66;\r\n    border-color: #203c66;\r\n    font-weight: 600;\r\n}\r\n.btn-primary:hover {\r\n  background-color: #203c66bf;\r\n  border-color: #203c66bf !important;\r\n}\r\n.btn-default {\r\n\tpadding-right: 40px;\r\n\tpadding-left: 40px;\r\n\tborder-radius: 5px;\r\n}\r\n.save_btn, .btn-edit {\r\n\tpadding-right: 40px;\r\n\tpadding-left: 40px;\r\n\tborder-radius: 5px;\r\n}\r\n.custom_modal {\r\n\ttop :40px !important;\r\n}\r\n.btn-left {\r\n    background-color: #203c6661;\r\n    border-color: #203c6661;border: 0px solid transparent;\r\n    position: absolute;\r\n    top: 155px;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n    height: 40px;\r\n    width: 50px;\r\n    font-size: 26px;\r\n}\r\n.btn-right {\r\n    background-color: #203c6661;\r\n    border-color: #203c6661;border: 0px solid transparent;\r\n    position: absolute;\r\n    top: 155px;\r\n    bottom: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n    height: 40px;\r\n    width: 50px;\r\n    font-size: 26px;\r\n}\r\n.header_title {\r\n   text-align:left;\r\n   font-size: 38px;\r\n   font-weight: bold;\r\n   color: #3d4657;\r\n}\r\n.modal_description {\r\n\tfont-family: \"Open Sans\", Bold;\r\n\tcolor: #7b879e;\r\n\tfont-size: 15px;\r\n\tpadding-top: 12px;\r\n}\r\n.modal_placeholder {\r\n\tfont-family: \"Open Sans\", Bold;\r\n\tcolor: #7b879e;\r\n}\r\n.form-modal {\r\n    padding-top: 10px;\r\n    padding-right: 45px;\r\n    padding-left: 45px;\r\n    padding-bottom: 10px;\r\n}\r\n.control-label {\r\n\tcolor: #7b879e !important;\r\n\tfont-family: \"Open Sans\", Bold;\r\n}\r\n\r\n@media only screen \r\nand (max-device-width : 767px) {\r\n  .modal-buttons {\r\n    text-align: center !important;\r\n    padding-top: 5px;\r\n  }\r\n  .save_btn {\r\n    padding-left: 50px !important;\r\n    padding-right: 50px !important;\r\n  }\r\n  .btn-edit-cancel {\r\n    padding-left: 100px !important;\r\n    padding-right: 100px !important;\r\n  }\r\n  .btn-edit-back {\r\n    padding-left: 107px !important;\r\n    padding-right: 107px !important;\r\n  }\r\n  .btn-edit-save {\r\n    padding-left: 106px !important;\r\n    padding-right: 106px !important;\r\n  }\r\n  .btn-edit-view-component{\r\n  \tpadding-left: 69px !important;\r\n\tpadding-right: 69px !important;\r\n  }\r\n  .btn-delete {\r\n  \tpadding-left: 42px !important;\r\n\tpadding-right: 42px !important;\r\n  }\r\n  .btn-retry {\r\n  \tpadding-left: 114px !important;\r\n\tpadding-right: 114px !important;\r\n  }\r\n  .btn-edit-finish {\r\n  \tpadding-left: 101px !important;\r\n\tpadding-right: 101px !important;\r\n  }\r\n  .btn-edit-close {\r\n  \tpadding-left: 97px !important;\r\n\tpadding-right: 97px !important;\r\n  }\r\n  .btn-edit-next {\r\n  \tpadding-left: 108px !important;\r\n\tpadding-right: 108px !important;\r\n  }\r\n  .btn-edit-edit {\r\n  \tpadding-left: 110px !important;\r\n\tpadding-right: 110px !important;\r\n  }\r\n}\r\n.btn-top-bar {\r\n  text-align: right;\r\n  padding-right: 0px;\r\n}\r\n@media only screen \r\nand (min-device-width : 320px) \r\nand (max-device-width : 568px) { \r\n  /*.btn-edit-cancel {\r\n    padding-left: 80px !important;\r\n    padding-right: 80px !important;\r\n  }*/\r\n  /*.btn-edit-save {\r\n    padding-left: 87px !important;\r\n    padding-right: 87px !important;\r\n  }*/\r\n}\r\n@media only screen \r\nand (max-device-width : 575px) { \r\n  .btn-top-bar {\r\n    padding-bottom: 5px;\r\n  }\r\n}\r\n\r\n/* Modal popup Add Component */\r\n.header_title {\r\n    text-align:left;\r\n    font-size: 38px;\r\n    font-weight: bold;\r\n    color: #3d4657;\r\n}\r\n.top-content {\r\n    padding-bottom: 0px !important;\r\n    padding-top: 0px !important;\r\n}\r\n.container {\r\n    margin-top: 0px !important;\r\n    margin-bottom: 0px !important;\r\n    padding-left: 0px !important;\r\n    padding-right: 0px !important;\r\n    padding-top: 0px !important;\r\n}\r\n.form-box {\r\n  padding-top: 0px !important;\r\n}\r\n.modal-text-p {\r\n  color: #808080;\r\n  text-align: center;\r\n\tfont-family: \"Open Sans\", Bold;\r\n\tfont-size: 15px;\r\n  padding-top: 12px;\r\n}\r\n.modal-text-h3 {\r\n  color: #808080;\r\n  text-align: center;\r\n  font-weight: 400;\r\n  text-transform: unset !important;\r\n  padding-bottom: 75px;\r\n  padding-top: 75px;\r\n}\r\n.form-group-small {\r\n  margin-top: 0px !important;\r\n  margin-bottom: 0px !important;\r\n  width: 50px !important;\r\n}\r\n.modal-table tr td {\r\n  color: #808080;\r\n\tfont-family: \"Open Sans\", Bold;\r\n  font-size: 12px;\r\n  font-weight: 400;\r\n  padding-top: 0px;\r\n  padding-bottom: 0px;\r\n  vertical-align: bottom;\r\n  border-top: unset;\r\n}\r\n.modal-table-responsive {\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n}\r\n.btn-add-data {\r\n  height: 34px !important;\r\n  border-radius: 2px !important;\r\n  font-weight: 600 !important;\r\n  border: 1px solid transparent !important;\r\n  padding: 8px 14px !important;\r\n  line-height: 16px !important;\r\n  font-size: 11px !important;\r\n  font-family: 'Open Sans' !important;\r\n}\r\n.activated .f1-step-icon {\r\n  cursor: pointer;\r\n}\r\n.f1-step .f1-step-icon .fa {\r\n  display: none;\r\n}\r\n.activated .f1-step-icon .fa {\r\n  display: inline-block !important;\r\n}\r\n.active .f1-step-icon .fa {\r\n  display: inline-block !important;\r\n}\r\n/* Modal popup Add Component Ednd */\r\nbody,\r\ninput,\r\nselect,\r\ntextarea,\r\nbody * {\r\n  font-family: 'Roboto', sans-serif;\r\n  box-sizing: border-box;\r\n}\r\nbody::after, body::before,\r\ninput::after,\r\ninput::before,\r\nselect::after,\r\nselect::before,\r\ntextarea::after,\r\ntextarea::before,\r\nbody *::after,\r\nbody *::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-image: linear-gradient(to bottom, #f2f2f2, #e6e6e6);\r\n}\r\n\r\nh1 {\r\n  font-size: 2rem;\r\n  text-align: center;\r\n  margin: 0 0 2em;\r\n}\r\nh1 small {\r\n  font-size: 50%;\r\n  color: #666;\r\n  display: block;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  max-width: 40rem;\r\n  margin: 5rem auto;\r\n  background: #fff;\r\n  width: 100%;\r\n  padding: 3rem 5rem 0;\r\n  border-radius: 1px;\r\n}\r\n.container::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);\r\n  -webkit-transform: scale(0.98);\r\n          transform: scale(0.98);\r\n  transition: -webkit-transform 0.28s ease-in-out;\r\n  transition: transform 0.28s ease-in-out;\r\n  transition: transform 0.28s ease-in-out, -webkit-transform 0.28s ease-in-out;\r\n  z-index: -1;\r\n}\r\n.container:hover::before {\r\n  -webkit-transform: scale(1);\r\n          transform: scale(1);\r\n}\r\n\r\n.button-container {\r\n  text-align: center;\r\n}\r\n\r\nfieldset {\r\n  margin: 0 0 3rem;\r\n  padding: 0;\r\n  border: none;\r\n}\r\n\r\n.form-radio,\r\n.form-group {\r\n  position: relative;\r\n  margin-top: 2.25rem;\r\n  margin-bottom: 2.25rem;\r\n}\r\n\r\n.form-inline > .form-group,\r\n.form-inline > .btn {\r\n  display: inline-block;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.form-help {\r\n  margin-top: 0.125rem;\r\n  margin-left: 0.125rem;\r\n  color: #b3b3b3;\r\n  font-size: 0.8rem;\r\n}\r\n.checkbox .form-help, .form-radio .form-help, .form-group .form-help {\r\n  position: absolute;\r\n  width: 100%;\r\n}\r\n.checkbox .form-help {\r\n  position: relative;\r\n  margin-bottom: 1rem;\r\n}\r\n.form-radio .form-help {\r\n  padding-top: 0.25rem;\r\n  margin-top: -1rem;\r\n}\r\n\r\n.form-group input {\r\n  height: 1.9rem;\r\n}\r\n.form-group textarea {\r\n  resize: none;\r\n}\r\n.form-group select {\r\n  width: 100%;\r\n  font-size: 1rem;\r\n  height: 1.6rem;\r\n  padding: 0.125rem 0.125rem 0.0625rem;\r\n  background: none;\r\n  border: none;\r\n  line-height: 1.6;\r\n  box-shadow: none;\r\n}\r\n.form-group .control-label {\r\n  position: absolute;\r\n  top: 0.25rem;\r\n  pointer-events: none;\r\n  padding-left: 0.125rem;\r\n  z-index: 1;\r\n  color: #b3b3b3;\r\n  font-size: 1rem;\r\n  font-weight: normal;\r\n  transition: all 0.28s ease;\r\n}\r\n.form-group .bar {\r\n  position: relative;\r\n  border-bottom: 0.0625rem solid #999;\r\n  display: block;\r\n}\r\n.form-group .bar::before {\r\n  content: '';\r\n  height: 0.125rem;\r\n  width: 0;\r\n  left: 50%;\r\n  bottom: -0.0625rem;\r\n  position: absolute;\r\n  background: #337ab7;\r\n  transition: left 0.28s ease, width 0.28s ease;\r\n  z-index: 2;\r\n}\r\n.form-group input,\r\n.form-group textarea {\r\n  display: block;\r\n  background: none;\r\n  padding: 0.125rem 0.125rem 0.0625rem;\r\n  font-size: 1rem;\r\n  border-width: 0;\r\n  border-color: transparent;\r\n  line-height: 1.9;\r\n  width: 100%;\r\n  color: transparent;\r\n  transition: all 0.28s ease;\r\n  box-shadow: none;\r\n}\r\n.form-group input[type=\"file\"] {\r\n  line-height: 1;\r\n}\r\n.form-group input[type=\"file\"] ~ .bar {\r\n  display: none;\r\n}\r\n.form-group select,\r\n.form-group input:focus,\r\n.form-group input:valid,\r\n.form-group input.form-file,\r\n.form-group input.has-value,\r\n.form-group textarea:focus,\r\n.form-group textarea:valid,\r\n.form-group textarea.form-file,\r\n.form-group textarea.has-value {\r\n  color: #7b879e;\r\n}\r\n.form-group select ~ .control-label,\r\n.form-group input:focus ~ .control-label,\r\n.form-group input:valid ~ .control-label,\r\n.form-group input.form-file ~ .control-label,\r\n.form-group input.has-value ~ .control-label,\r\n.form-group textarea:focus ~ .control-label,\r\n.form-group textarea:valid ~ .control-label,\r\n.form-group textarea.form-file ~ .control-label,\r\n.form-group textarea.has-value ~ .control-label {\r\n  font-size: 0.8rem;\r\n  color: gray;\r\n  top: -1rem;\r\n  left: 0;\r\n}\r\n.form-group select:focus,\r\n.form-group input:focus,\r\n.form-group textarea:focus {\r\n  outline: none;\r\n}\r\n.form-group select:focus ~ .control-label,\r\n.form-group input:focus ~ .control-label,\r\n.form-group textarea:focus ~ .control-label {\r\n  color: #337ab7;\r\n}\r\n.form-group select:focus ~ .bar::before,\r\n.form-group input:focus ~ .bar::before,\r\n.form-group textarea:focus ~ .bar::before {\r\n  width: 100%;\r\n  left: 0;\r\n}\r\n\r\n.checkbox label,\r\n.form-radio label {\r\n  position: relative;\r\n  cursor: pointer;\r\n  padding-left: 2rem;\r\n  text-align: left;\r\n  color: #333;\r\n  display: block;\r\n}\r\n.checkbox input,\r\n.form-radio input {\r\n  width: auto;\r\n  opacity: 0.00000001;\r\n  position: absolute;\r\n  left: 0;\r\n}\r\n\r\n.radio {\r\n  margin-bottom: 1rem;\r\n}\r\n.radio .helper {\r\n  position: absolute;\r\n  top: -0.25rem;\r\n  left: -0.25rem;\r\n  cursor: pointer;\r\n  display: block;\r\n  font-size: 1rem;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  color: #999;\r\n}\r\n.radio .helper::before, .radio .helper::after {\r\n  content: '';\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  margin: 0.25rem;\r\n  width: 1rem;\r\n  height: 1rem;\r\n  transition: -webkit-transform 0.28s ease;\r\n  transition: transform 0.28s ease;\r\n  transition: transform 0.28s ease, -webkit-transform 0.28s ease;\r\n  border-radius: 50%;\r\n  border: 0.125rem solid currentColor;\r\n}\r\n.radio .helper::after {\r\n  -webkit-transform: scale(0);\r\n          transform: scale(0);\r\n  background-color: #337ab7;\r\n  border-color: #337ab7;\r\n}\r\n.radio label:hover .helper {\r\n  color: #337ab7;\r\n}\r\n.radio input:checked ~ .helper::after {\r\n  -webkit-transform: scale(0.5);\r\n          transform: scale(0.5);\r\n}\r\n.radio input:checked ~ .helper::before {\r\n  color: #337ab7;\r\n}\r\n\r\n.checkbox {\r\n  margin-top: 3rem;\r\n  margin-bottom: 1rem;\r\n}\r\n.checkbox .helper {\r\n  color: #999;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 1rem;\r\n  height: 1rem;\r\n  z-index: 0;\r\n  border: 0.125rem solid currentColor;\r\n  border-radius: 0.0625rem;\r\n  transition: border-color 0.28s ease;\r\n}\r\n.checkbox .helper::before, .checkbox .helper::after {\r\n  position: absolute;\r\n  height: 0;\r\n  width: 0.2rem;\r\n  background-color: #337ab7;\r\n  display: block;\r\n  -webkit-transform-origin: left top;\r\n          transform-origin: left top;\r\n  border-radius: 0.25rem;\r\n  content: '';\r\n  transition: opacity 0.28s ease, height 0s linear 0.28s;\r\n  opacity: 0;\r\n}\r\n.checkbox .helper::before {\r\n  top: 0.65rem;\r\n  left: 0.38rem;\r\n  -webkit-transform: rotate(-135deg);\r\n          transform: rotate(-135deg);\r\n  box-shadow: 0 0 0 0.0625rem #fff;\r\n}\r\n.checkbox .helper::after {\r\n  top: 0.3rem;\r\n  left: 0;\r\n  -webkit-transform: rotate(-45deg);\r\n          transform: rotate(-45deg);\r\n}\r\n.checkbox label:hover .helper {\r\n  color: #337ab7;\r\n}\r\n.checkbox input:checked ~ .helper {\r\n  color: #337ab7;\r\n}\r\n.checkbox input:checked ~ .helper::after, .checkbox input:checked ~ .helper::before {\r\n  opacity: 1;\r\n  transition: height 0.28s ease;\r\n}\r\n.checkbox input:checked ~ .helper::after {\r\n  height: 0.5rem;\r\n}\r\n.checkbox input:checked ~ .helper::before {\r\n  height: 1.2rem;\r\n  transition-delay: 0.28s;\r\n}\r\n\r\n.radio + .radio,\r\n.checkbox + .checkbox {\r\n  margin-top: 1rem;\r\n}\r\n\r\n.has-error .legend.legend, .has-error.form-group .control-label.control-label {\r\n  color: #d9534f;\r\n}\r\n.has-error.form-group .form-help,\r\n.has-error.form-group .helper, .has-error.checkbox .form-help,\r\n.has-error.checkbox .helper, .has-error.radio .form-help,\r\n.has-error.radio .helper, .has-error.form-radio .form-help,\r\n.has-error.form-radio .helper {\r\n  color: #d9534f;\r\n}\r\n.has-error .bar::before {\r\n  background: #d9534f;\r\n  left: 0;\r\n  width: 100%;\r\n}\r\n\r\n.button {\r\n  position: relative;\r\n  background: currentColor;\r\n  border: 1px solid currentColor;\r\n  font-size: 1.1rem;\r\n  color: #4f93ce;\r\n  margin: 3rem 0;\r\n  padding: 0.75rem 3rem;\r\n  cursor: pointer;\r\n  transition: background-color 0.28s ease, color 0.28s ease, box-shadow 0.28s ease;\r\n  overflow: hidden;\r\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\r\n}\r\n.button span {\r\n  color: #fff;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n.button::before {\r\n  content: '';\r\n  position: absolute;\r\n  background: #071017;\r\n  border: 50vh solid #1d4567;\r\n  width: 30vh;\r\n  height: 30vh;\r\n  border-radius: 50%;\r\n  display: block;\r\n  top: 50%;\r\n  left: 50%;\r\n  z-index: 0;\r\n  opacity: 1;\r\n  -webkit-transform: translate(-50%, -50%) scale(0);\r\n          transform: translate(-50%, -50%) scale(0);\r\n}\r\n.button:hover {\r\n  color: #337ab7;\r\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);\r\n}\r\n.button:active::before, .button:focus::before {\r\n  transition: opacity 0.28s ease 0.364s, -webkit-transform 1.12s ease;\r\n  transition: transform 1.12s ease, opacity 0.28s ease 0.364s;\r\n  transition: transform 1.12s ease, opacity 0.28s ease 0.364s, -webkit-transform 1.12s ease;\r\n  -webkit-transform: translate(-50%, -50%) scale(1);\r\n          transform: translate(-50%, -50%) scale(1);\r\n  opacity: 0;\r\n}\r\n.button:focus {\r\n  outline: none;\r\n}\r\n.apiMsg {\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n}\r\n\r\n.table td {\r\n  border-top: unset;\r\n}\r\n\r\n.form-box {\r\n  padding-top: 0px !important;\r\n}\r\n.modal-text-p {\r\n  color: #808080;\r\n  text-align: center;\r\n\tfont-family: \"Open Sans\", Bold;\r\n\tfont-size: 15px;\r\n  padding-top: 12px;\r\n}\r\n.modal-text-h3 {\r\n  color: #808080;\r\n  text-align: center;\r\n  font-weight: 400;\r\n  text-transform: unset !important;\r\n  padding-bottom: 75px;\r\n  padding-top: 75px;\r\n}\r\n.form-group-small {\r\n  margin-top: 0px !important;\r\n  margin-bottom: 0px !important;\r\n  width: 50px !important;\r\n  /* margin-right: 50px !important; */\r\n}\r\n.modal-table tr td {\r\n  color: #808080;\r\n\tfont-family: \"Open Sans\", Bold;\r\n  font-size: 12px;\r\n  font-weight: 400;\r\n  padding-top: 0px;\r\n  padding-bottom: 0px;\r\n  vertical-align: bottom;\r\n}\r\n\r\n.frmGrpInput{\r\n  text-align: center;\r\n}\r\n.cred{\r\n  display:none;\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n\t.btn_step1 {\r\n\t\tpadding-left:0px;\r\n\t\tpadding-right:0px;\r\n\t}\r\n\t.btn_step2 {\r\n\t\tpadding-left:0px;\r\n\t\tpadding-right:0px;\r\n\t}\r\n\t.outer_step2 {\r\n\t\tmargin-left:0px;\r\n\t\t-webkit-box-flex: 0;\r\n\t\t    -ms-flex: 0 0 100%;\r\n\t\t        flex: 0 0 100%;\r\n\t\tmax-width: 100%;\r\n\t}\r\n\t.btn_step4 {\r\n\t\tpadding-left:0px;\r\n\t\tpadding-right:0px;\r\n\t}\r\n}\r\n@media only screen and (max-width: 568px) {\r\n\r\n}\r\n\r\n#withoutdcBlock {\r\n  min-height: 200px;\r\n  padding: 80px 15px;\r\n}\r\n.f1-progress-error {\r\n  position: absolute; \r\n  top: 0; left: 0; \r\n  height: 1px; \r\n  background: red; \r\n  height: 5px; \r\n  width: 100%; \r\n  display: none;\r\n}\r\ntr {\r\n  height: 41px;\r\n}\r\ntd, th {\r\n  padding: 5px 12px 5px 12px;\r\n  vertical-align: middle;\r\n}\r\n#withdcBlock {\r\n  /* min-height: 645px; */\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/report/report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-3 col-sm-3\" style=\"font-weight:600; font-size:20px; color:#4a6076; padding-bottom:15px;\">\r\n        Data Center Reports\r\n    </div>\r\n    <div class=\"col-md-6 col-sm-6\" style=\"padding-top:6px;text-align: center;\">\r\n        <span>\r\n            <span (click)=\"scrollLeftClick()\" style=\"cursor: pointer;\" *ngIf=\"dataCenters != ''\" class=\"ti-arrow-circle-left\"></span>\r\n            <span *ngFor=\"let dC of dataCenters; let i = index\">\r\n                <span class=\"icon-name\">&nbsp;</span>\r\n                <div *ngIf=\"i==selectedDataCenter;then bubble1; else bubble2\"></div>\r\n                <ng-template #bubble1>\r\n                    <span style=\"cursor: pointer;font-size:15px;\" (click)=\"dataCenterScrollClick(i)\" id=\"dataCenterScroll{{i}}\" class=\"fa fa-circle\"></span>\r\n                </ng-template>\r\n                <ng-template #bubble2>\r\n                    <span style=\"cursor: pointer;\" (click)=\"dataCenterScrollClick(i)\" id=\"dataCenterScroll{{i}}\" class=\"ti-control-record\"></span>\r\n                </ng-template>\r\n            </span>\r\n            <span class=\"icon-name\">&nbsp;</span>\r\n            <span (click)=\"scrollRightClick()\" style=\"cursor: pointer;\" *ngIf=\"dataCenters != ''\" class=\"ti-arrow-circle-right\"></span>\r\n        </span>\r\n    </div>\r\n</div>\r\n<div class=\"row\" id=\"withdcBlock\" style=\"display:none\">\r\n    <ng-container *ngFor=\"let dataCenter of dataCenters, let i = index\">\r\n        <div [style.display]=\"i>=scrollLimitMin && i<=scrollLimitMax ? 'block' : 'none'\" class=\"col-md-3 col-sm-6 tab-tile {{ (i == selectedDataCenter) ? 'tab-tile-active' : ''}}\"\r\n            id=\"{{i}}\" (click)=\"dataCenterScrollClick(i,'direct')\">\r\n            <div *ngIf=\"i== selectedDataCenter; then thenDiv;else elseDiv\">\r\n            </div>\r\n            <ng-template #thenDiv>\r\n                <div class=\"rsddropdown\" id=\"rsddropdown{{i}}\"></div>\r\n            </ng-template>\r\n            <ng-template #elseDiv>\r\n                <div class=\"rsddropdown\" id=\"rsddropdown{{i}}\" style=\"display: none;\"></div>\r\n            </ng-template>\r\n            <div class=\"data-center-image d-flex justify-content-center\">\r\n                <img src=\"assets/images/icon-cube.png\" class=\"img-thumbnail\">\r\n            </div>\r\n            <p class=\"data-center\">{{dataCenter.name}}</p>\r\n            <p class=\"data-center-body\">{{dataCenter.city}}, {{dataCenter.state}}</p>\r\n            <p class=\"data-center-body\">{{dataCenter.country}}</p>\r\n            <p class=\"data-center-body\">{{dataCenter.time_zone}}</p>\r\n        </div>\r\n    </ng-container>\r\n    <div class=\"col-md-12 tab-tile-table table-responsive\">\r\n        <div *ngIf=\"!showNullRowMessage\" style=\"float: right;padding: 0px 0px 10px 0px;cursor: pointer;\">\r\n            <select (change)=\"changeSelectComponent()\" name=\"selectedComponents\" id=\"selectedComponents\" class=\"form-control\">\r\n                <option value=\"\">Select All</option>\r\n                <option *ngFor='let components of dataCentersDetails' [value]=\"components.id\">{{components.name}}</option>\r\n            </select>\r\n        </div>\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n                <tr>\r\n                    <th scope=\"col\"></th>\r\n                    <th scope=\"col\">Report Name</th>\r\n                    <th scope=\"col\"></th>\r\n                    <th scope=\"col\"></th>\r\n                    <th scope=\"col\"></th>\r\n                    <th scope=\"col\"></th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <input type=\"hidden\" id=\"comp_filter\" name=\"comp_filter\" value=\"\" />\r\n                <tr *ngIf=\"!reportStatus || showNullRowMessage; else showReportList\">\r\n                    <td align=\"center\" colspan=\"6\">\r\n                        <b>THERE ARE CURRENTLY NO REPORTS AVAILABLE FOR THIS DATA CENTER.\r\n                        </b>\r\n                    </td>\r\n                </tr>\r\n                <ng-template #showReportList>\r\n                    <tr *ngFor=\"let report of reportList, let j = index\">\r\n                        <td></td>\r\n                        <td>{{ report.name }}</td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td (click)=\"downloadReport(j)\" style=\"text-decoration: underline;color: blue;cursor: pointer;\">Download</td>\r\n                        <td></td>\r\n                    </tr>\r\n                </ng-template>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\" style=\"clear:both;\">\r\n    <div id=\"withoutdcBlock\" class=\"col-md-12 tab-tile-table table-responsive text-center\" style=\"display:none\">\r\n        <span style=\"font-weight:bold;\">\r\n            <b>THERE ARE CURRENTLY NO DATA CENTERS AVAILABLE.\r\n            </b>\r\n        </span>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/report/report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__("../../../../../src/app/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__excel_service__ = __webpack_require__("../../../../../src/app/excel.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReportComponent = (function () {
    function ReportComponent(modalService, config, router, excelService) {
        this.modalService = modalService;
        this.config = config;
        this.router = router;
        this.excelService = excelService;
        this.userId = sessionStorage.id;
        this.showNullRowMessage = false;
        this.reportStatus = false;
        sessionStorage.setItem('previousUrl', this.router.url);
        this.deviceHeight = (window.innerHeight);
        this.deviceWidth = (window.innerWidth);
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
    ReportComponent.prototype.ngOnInit = function () {
        if (!sessionStorage.username || !sessionStorage.id || typeof sessionStorage.username == 'undefined' || typeof sessionStorage.id == 'undefined') {
            this.router.navigate(['login']);
        }
        this.setDataCenterReportList();
        this.selectedComponents = '';
        this.toDate = '';
        this.fromDate = '';
        setTimeout(function () {
            $('#report').removeClass('pcoded-trigger');
        }, 1000);
    };
    ReportComponent.prototype.setDataCenterReportList = function (id) {
        var _this = this;
        if (id === void 0) { id = 0; }
        this.config.getProvisioningList().subscribe(function (res) {
            _this.dataCenters = res;
            if (_this.dataCenters.length >= 1) {
                $('#withdcBlock').show();
            }
            else {
                $('#withoutdcBlock').show();
            }
            _this.selectedDataCenter = id;
            if (_this.dataCenters.length > 0) {
                _this.dataCenterScrollClick(id, 'scroll');
            }
        });
    };
    ReportComponent.prototype.dataCenterScrollClick = function (id, clickType) {
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
        this.selectedDcViewId = id;
    };
    ReportComponent.prototype.dataCenterClick = function (id) {
        this.currentDC = this.dataCenters[id].id;
        this.dataCentersDetails = [];
        this.activateCard(id);
        $('#' + id).attr('class', 'col-md-3 col-sm-6 tab-tile tab-tile-active');
        this.setDataCenterComponnets(this.currentDC);
        this.selectedComponents = '';
        this.setReportNames();
    };
    ReportComponent.prototype.activateCard = function (id) {
        var preId = $('.tab-tile-active').attr('id');
        $('#' + preId).attr('class', 'col-md-3 col-sm-6 tab-tile');
        $('#rsddropdown' + preId).hide();
        $('#rsddropdown' + id).show();
    };
    ReportComponent.prototype.setDataCenterComponnets = function (id) {
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
    ReportComponent.prototype.setReportNames = function () {
        var _this = this;
        this.reportList = [];
        this.config.getReportNames(this.currentDC, this.selectedComponents).subscribe(function (res) {
            if (!$.isEmptyObject(res)) {
                _this.reportStatus = true;
                _this.reportList = res;
            }
            else {
                _this.reportStatus = false;
            }
        });
    };
    ReportComponent.prototype.changeSelectComponent = function () {
        this.selectedComponents = $('#selectedComponents').val();
        this.setReportNames();
    };
    ReportComponent.prototype.downloadReport = function (id) {
        this.config.getDownloadReport(this.reportList[id].componentId, this.fromDate, this.toDate, this.reportList[id].id, this.reportList[id].name);
    };
    ReportComponent.prototype.scrollRightClick = function () {
        var nextClick = this.selectedDcViewId + 1;
        if (nextClick >= this.dataCenters.length) {
            nextClick = 0;
        }
        this.dataCenterScrollClick(nextClick);
    };
    ReportComponent.prototype.scrollLeftClick = function () {
        var nextClick = this.selectedDcViewId - 1;
        if (nextClick < 0) {
            nextClick = this.dataCenters.length - 1;
        }
        this.dataCenterScrollClick(nextClick);
    };
    return ReportComponent;
}());
ReportComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-report',
        template: __webpack_require__("../../../../../src/app/report/report.component.html"),
        styles: [__webpack_require__("../../../../../src/app/report/report.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__excel_service__["a" /* ExcelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__excel_service__["a" /* ExcelService */]) === "function" && _d || Object])
], ReportComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=report.component.js.map

/***/ }),

/***/ "../../../../../src/app/report/report.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportModule", function() { return ReportModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_component__ = __webpack_require__("../../../../../src/app/report/report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__report_routing__ = __webpack_require__("../../../../../src/app/report/report.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ReportModule = (function () {
    function ReportModule() {
    }
    return ReportModule;
}());
ReportModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__report_routing__["a" /* ReportRoutes */]),
            __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__report_component__["a" /* ReportComponent */]]
    })
], ReportModule);

//# sourceMappingURL=report.module.js.map

/***/ }),

/***/ "../../../../../src/app/report/report.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_component__ = __webpack_require__("../../../../../src/app/report/report.component.ts");

var ReportRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__report_component__["a" /* ReportComponent */],
        data: {
            breadcrumb: 'Report'
        }
    }];
//# sourceMappingURL=report.routing.js.map

/***/ })

});
//# sourceMappingURL=report.module.chunk.js.map