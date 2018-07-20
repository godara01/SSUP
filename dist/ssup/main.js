(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update/update.component */ "./src/app/update/update.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");
/* harmony import */ var _updatestatus_updatestatus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updatestatus/updatestatus.component */ "./src/app/updatestatus/updatestatus.component.ts");
/* harmony import */ var _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./instructions/instructions.component */ "./src/app/instructions/instructions.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'home', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"] },
    { path: 'updateportal', component: _update_update_component__WEBPACK_IMPORTED_MODULE_3__["UpdateComponent"] },
    { path: 'faq', component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_4__["FaqComponent"] },
    { path: 'updatestatus', component: _updatestatus_updatestatus_component__WEBPACK_IMPORTED_MODULE_5__["UpdatestatusComponent"] },
    { path: 'instructions', component: _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_6__["InstructionsComponent"] },
    { path: 'contactus', component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_7__["ContactusComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-headers></app-headers>\r\n<!-- <a router-link='home'>home</a> -->\r\n<router-outlet></router-outlet>\r\n<footer>\r\n    Copyright © 2012 UIDAI All Rights Reserved.This website is best viewed in 1024x768 screen resolution.\r\n</footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'SSUP';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./update/update.component */ "./src/app/update/update.component.ts");
/* harmony import */ var _headers_headers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./headers/headers.component */ "./src/app/headers/headers.component.ts");
/* harmony import */ var _step_one_step_one_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./step-one/step-one.component */ "./src/app/step-one/step-one.component.ts");
/* harmony import */ var _step_two_step_two_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./step-two/step-two.component */ "./src/app/step-two/step-two.component.ts");
/* harmony import */ var _step_three_step_three_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./step-three/step-three.component */ "./src/app/step-three/step-three.component.ts");
/* harmony import */ var _step_four_step_four_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./step-four/step-four.component */ "./src/app/step-four/step-four.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./instructions/instructions.component */ "./src/app/instructions/instructions.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _updatestatus_updatestatus_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./updatestatus/updatestatus.component */ "./src/app/updatestatus/updatestatus.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _update_update_component__WEBPACK_IMPORTED_MODULE_9__["UpdateComponent"],
                _headers_headers_component__WEBPACK_IMPORTED_MODULE_10__["HeadersComponent"],
                _step_one_step_one_component__WEBPACK_IMPORTED_MODULE_11__["StepOneComponent"],
                _step_two_step_two_component__WEBPACK_IMPORTED_MODULE_12__["StepTwoComponent"],
                _step_three_step_three_component__WEBPACK_IMPORTED_MODULE_13__["StepThreeComponent"],
                _step_four_step_four_component__WEBPACK_IMPORTED_MODULE_14__["StepFourComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_16__["HomepageComponent"],
                _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_17__["InstructionsComponent"],
                _faq_faq_component__WEBPACK_IMPORTED_MODULE_18__["FaqComponent"],
                _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_19__["ContactusComponent"],
                _updatestatus_updatestatus_component__WEBPACK_IMPORTED_MODULE_20__["UpdatestatusComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contactus/contactus.component.css":
/*!***************************************************!*\
  !*** ./src/app/contactus/contactus.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    line-height: 2;\r\n    margin: 10px;\r\n}"

/***/ }),

/***/ "./src/app/contactus/contactus.component.html":
/*!****************************************************!*\
  !*** ./src/app/contactus/contactus.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-headline\"> Contact Center Details</div>\n<p>\nThe UIDAI has set up a Contact Center. Resident can make queries about her/his update requests through any communication channel of the contact center.\nVoice - 1947\n<br/>\nFax - 080-2353 1947\n<br/>\nLetters - PO Box 1947, GPO Bangalore - 560001\n<br/>\nEmail - help@uidai.gov.in\n\n</p>"

/***/ }),

/***/ "./src/app/contactus/contactus.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactus/contactus.component.ts ***!
  \**************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactusComponent = /** @class */ (function () {
    function ContactusComponent() {
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    ContactusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.component.html */ "./src/app/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.css */ "./src/app/contactus/contactus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/faq/faq.component.css":
/*!***************************************!*\
  !*** ./src/app/faq/faq.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/faq/faq.component.html":
/*!****************************************!*\
  !*** ./src/app/faq/faq.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"mat-headline\">FAQ on Updation </h2>\n<div>\n  <b>What fields can I update through Self Service Update Portal (SSUP)?</b>\n  <p>Using the online SSUP portal (https://ssup.uidai.gov.in/web/guest/ssup-home) Name, gender, DoB, address, mobile number\n    and email can be updated.</p>\n  <b>Can I request to update fields by sending request through Post? </b>\n  <p>Yes, you can submit request for Name, gender, DoB, address and email update through Post mode. </p>\n  <b>Where can I send the update request by post</b>\n  <p>You can send the update requests by India post to one of the following addresses: Address 1: UIDAI Post Box No. 10, Chhindwara,\n    Madhya Pradesh - 480001, India\n    <br/> Address2: UIDAI Post Box No. 99, Banjara Hills, Hyderabad - 500034, India</p>\n  <b>My mobile number is not registered in Aadhaar, how can I get my mobile number updated in Aadhaar</b>\n  <p>You need to visit the nearest enrollment centre to update your mobile number. No additional documents are required.</p>\n  <b>How can I know if my update request has been processed ?</b>\n  <p>Once the updates have been processed, you will receive an SMS saying that your update has been processed successfully.\n    You can check the update status from https://ssup.uidai.gov.in/web/guest/check-status by providing your update details.</p>\n  <b>Do I also need to give update request in local language</b>\n  <p>For demographic update through online SSUP portal, you need to provide the requested update data in English as well as\n    local language in which Aadhaar is generated. For update through postal mode, the update data in the correction form\n    needs to be provided in English as well as local language used in Aadhaar.</p>\n  <b>Can I update if I have wrongly entered demographic details at the time of online update</b>\n  <p>While using the online SSUP portal for update, you are requested to review the data before completing the online request.</p>\n  <b>Do I get the updated Aadhaar letter</b>\n  <p>Updated Aadhaar letter is sent to you if you have requested for update of Name, Address, Date of Birth and Gender.</p>\n  <b>What do I do in case I do not receive my updated Aadhaar letter</b>\n  <p>While you may await receipt of updated Aadhaar letter, you are requested to visit the https://eaadhaar.uidai.gov.in/ to\n    download e-Aadhaar by providing your respective EID/UID.</p>\n  <b>How do I get the address of my child updated in Aadhaar</b>\n  <p>Address of the child can be updated by visiting the nearest enrollment centre with the parent whose Aadhaar is linked to\n    the child. The supporting documents that needs to be provided are parent’s POA, proof of relationship and biometric authentication\n    of linked parent. The documents can be found at https://ssup.uidai.gov.in/web/guest/ssup-instructions</p>\n  <b>How can I get my name or address updated if I do not have any of the support POI/POA provided in the list</b>\n  <p>UIDAI has provided 23 POI and 34 POA list of valid documents (https://ssup.uidai.gov.in/web/guest/ssup-instructions) which\n    also includes Certificate of Address having photo issued by MP or MLA or Gazetted Officer or Tehsildar on letterhead\n    as acceptable proof of address</p>\n  <b>How do I get my email and mobile updated</b>\n  <p>If your mobile number is registered in Aadhaar, you can update your mobile and email through online SSUP portal otherwise\n    you need to visit the nearest enrollement centre to update your mobile and email </p>\n  <b> Can I get the information in my Aadhaar letter corrected using Update process?</b>\n  <p>Yes, Update modes can be used for corrections as well as changes in information.\n  </p>\n  <b>I have lost my mobile number/ do not possess the number that I enrolled with in Aadhaar. How should I submit my Update request? </b>\n  <p>In case you have lost/do not possess anymore the mobile that you have declared at the time of enrolment, you will have\n    to visit the nearest Update Centre to personally update the information. </p>\n  <b>What are the valid documents for submission of Update request through Portal /Post?</b>\n  <p> Depending on the field to be updated through postal mode, attach self-attested supporting documents as per the Valid Documents\n    List(https://ssup.uidai.gov.in/web/guest/ssupinstructions ). - Name Correction/Update – Requires PoI listed in “Supported\n    Proof of Identity(PoI) Documents Containing Name and Photo for Name Corrections/Update” - Date of Birth Correction –\n    Requires DoB listed in “Supported Proof of Date of Birth (DoB) Documents” Address Corrections/Change – Requires PoA listed\n    in “Supported Proof of Address (PoA) Documents Containing Name and Address” - Email and Mobile – No supporting documents\n    are required Depending on the field to be updated through online SSUP mode, attach original scan copies of the supporting\n    documents as per the Valid Documents List(https://ssup.uidai.gov.in/web/guest/ssup-instructions ) - Name Correction/Update\n    – Requires PoI listed in “Supported Proof of Identity(PoI) Documents Containing Name and Photo for Name Corrections/Update”\n    - Date of Birth Correction – Requires DoB listed in “Supported Proof of Date of Birth (DoB) Documents” Address Corrections/Change\n    – Requires PoA listed in “Supported Proof of Address (PoA) Documents Containing Name and Address” - Email and Mobile\n    – No supporting documents are required </p>\n  <b>Is it mandatory to provide Mobile number details when submitting Update Request through Post/online portal?</b>\n  <p>Yes, it is mandatory to provide mobile number as it may be used for Verification by calling the Applicant. Status of application\n    will be intimated to the resident by sending a SMS on this mobile number. Applications without mobile number and Aadhaar\n    for update through post will be rejected. </p>\n  <b>Is affidavit accepted as a PoI?</b>\n  <p> No it is not accepted. Refer list of valid documents for acceptable PoI/PoA (https://ssup.uidai.gov.in/web/guest/ssup-instructions). </p>\n  <b>Is a certificate from local MP/MLA/local body official accepted as a proof document?</b>\n  <p>Certificate of Address having photo issued by MP or MLA or Gazetted Officer or Tehsildar on letterhead is acceptable as\n    a Proof of Address.</p>\n  <b>Explain why my Update request was rejected?</b>\n  <p> The update request can be rejected due to one of the following reasons; - Wrong PoA/PoI document uploaded - PoA/PoI document\n    is not self-attested - Transliteration error - Supporting documents not self attested by the resident - Document uploaded\n    through online SSUP portal are not found to be scanned copies of original documents - Mobile and Aadhaar shared in the\n    form is incorrect - Supporting documents are not in the name of the resident</p>\n  <b> Is it mandatory to provide C/o Details in Address?</b>\n  <p> No, it is not mandatory to provide c/o details with address. C/o details in address is used for letter delivery purposes\n    and is a part of address.</p>\n  <b> My Aadhaar is suspended and has been asked to update. How do I know, what to update and how”</b>\n  <p>If an Aadhaar is suspended, the normal mode of update is through a physical visit by the resident to the enrollment centers.\n    You will need to do the required update as informed to you in the communication sent by UIDAI.</p>\n  <b>My relative has died and I want to update their death in the Aadhaar system, what should I do?</b>\n  <p>Currently UIDAI does not have a provision of recording of the death of a person as it is a means of providing for identification\n    of a living person. Hence, there is no need to inform UIDAI in such cases.</p>\n</div>\n"

/***/ }),

/***/ "./src/app/faq/faq.component.ts":
/*!**************************************!*\
  !*** ./src/app/faq/faq.component.ts ***!
  \**************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.css */ "./src/app/faq/faq.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/headers/headers.component.css":
/*!***********************************************!*\
  !*** ./src/app/headers/headers.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill-remaining-space {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.end-to-end {\r\n  display: flex;\r\n  margin-bottom: 2px;\r\n}\r\n\r\n.no-padding>p {\r\n  padding: 0%;\r\n  margin: 5px 0px 0px 5px;\r\n}\r\n\r\na {\r\n  -webkit-text-decoration-style: none;\r\n          text-decoration-style: none;\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/headers/headers.component.html":
/*!************************************************!*\
  !*** ./src/app/headers/headers.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <div id=\"logos\" class=\"end-to-end\">\r\n    <div id=\"uidai\" class=\"end-to-end\">\r\n    <img src=\"../../assets/images/Emblem_of_India.png\" alt=\"Indian emblem\" height=\"50\" />\r\n    <div class=\"no-padding\">\r\n    <p>Unique Identification Authority of India</p>\r\n    <p>Government of India</p>\r\n  </div>\r\n  </div>\r\n  <span class=\"fill-remaining-space\"></span>\r\n\r\n  <img src=\"../../assets/images/aadhaar-logo.png\" alt=\"aadhaar logo\" height=\"50\" />\r\n\r\n  </div>\r\n  <div id=\"toolbar\">\r\n    <mat-toolbar color=\"primary\">\r\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\" *ngIf=\"isMobile\"><mat-icon>menu</mat-icon></button>\r\n        <mat-menu #menu=\"matMenu\">\r\n          <a routerLink=\"/home\"><button mat-menu-item>SSUP Home</button></a>\r\n          <a routerLink=\"/instructions\"><button mat-menu-item>Instructions</button></a>\r\n          <a routerLink=\"/updatestatus\"><button mat-menu-item>Update Status</button></a>\r\n          <a routerLink=\"/faq\"><button mat-menu-item>FAQ</button></a>\r\n          <a routerLink=\"/contactus\"><button mat-menu-item>Contact Us</button></a>\r\n        </mat-menu>\r\n      <span>Aadhaar Self Service Update Portal</span>\r\n      <span class=\"fill-remaining-space\"></span>\r\n\r\n\r\n      \r\n      <div class=\"equally-spaced\" *ngIf=\"!isMobile\">\r\n        <a routerLink=\"/home\"><button mat-button>SSUP Home</button></a>\r\n        <a routerLink=\"/instructions\"><button mat-button>Instructions</button></a>\r\n        <a routerLink=\"/updatestatus\"><button mat-button>Update Status</button></a>\r\n        <a routerLink=\"/faq\"><button mat-button>FAQ</button></a>\r\n        <a routerLink=\"/contactus\"><button mat-button>Contact Us</button></a>\r\n      </div>\r\n\r\n    </mat-toolbar>\r\n  </div>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/headers/headers.component.ts":
/*!**********************************************!*\
  !*** ./src/app/headers/headers.component.ts ***!
  \**********************************************/
/*! exports provided: HeadersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadersComponent", function() { return HeadersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeadersComponent = /** @class */ (function () {
    function HeadersComponent(_formBuilder, breakpointObserver) {
        var _this = this;
        this._formBuilder = _formBuilder;
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
        this.isMobile = false;
        var isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');
        console.log("isSmallScreen");
        console.log(isSmallScreen);
        console.log("over");
        breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].HandsetPortrait
        ]).subscribe(function (result) {
            if (isSmallScreen) {
                _this.activateHandsetLayout();
            }
            else {
                _this.activateWebLayout();
            }
        });
    }
    HeadersComponent.prototype.activateHandsetLayout = function () {
        this.isMobile = true;
        console.log(this.isMobile);
    };
    ;
    HeadersComponent.prototype.activateWebLayout = function () {
        this.isMobile = false;
        console.log(this.isMobile);
    };
    ;
    HeadersComponent.prototype.ngOnInit = function () {
    };
    HeadersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-headers',
            template: __webpack_require__(/*! ./headers.component.html */ "./src/app/headers/headers.component.html"),
            styles: [__webpack_require__(/*! ./headers.component.css */ "./src/app/headers/headers.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], HeadersComponent);
    return HeadersComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p>* {\r\n  line-height: 5ch;\r\n}\r\n\r\nh1 {\r\n  margin: 10px;\r\n}\r\n\r\np {\r\n  margin: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.center {\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"mat-display-1\">Dear Resident,</h1>\n<p class=\"mat-body-1\">\n  Welcome to Aadhaar Self Service Update Portal. UIDAI is committed to provide resident friendly eco-system and self-service\n  update portal is one of the various touch points to update their Address in Aadhaar in 4 easy steps:\n  <br/>\n  <b>STEP 1: Login with Aadhaar,\n    <br/> STEP 2: Address Update Request\n    <br/> STEP 3: Upload Documents and\n    <br/> STEP 4: Select BPO Service Provider and submit request.\n    <br/> </b>\n  Note that Update here refers to any changes as well as corrections, if required, in resident´s original Aadhaar letter.\n  <br />\n  <b>Who can use this portal?</b>\n  <br/> Any resident with a registered mobile number can update address using this portal. Registered Mobile number is mandatory\n  to receive password for login.\n  <br/>\n  <b>What all information can be updated through this portal?</b>\n  <br/> Residents can update Address through this portal. For other updates, please visit Aadhaar Enrollment / Update Center.\n  View detailed instructions on submitting Aadhaar Update/ Correction requests through this portal.\n  <br/>\n  <b>What are the documents required to be submitted along with address update request?</b>\n  <br/> Residents are required to upload scanned image of original Proof of Address(PoA)/self signed (self attested) copy of PoA\n  documents for update/ correction. View the valid list of documents.\n  <br/>\n  <b>Will resident information be updated immediately after submission of request?</b>\n  <br/> Submission of information for update does not guarantee update of Aadhaar data. The information submitted is subject to\n  verification and validation.\n  <br/>\n</p>\n<h2 class=\"center\">\n  To submit your address update/ correction request please\n  <a routerLink=\"/updateportal\">\n    <button mat-raised-button color=\"accent\">Proceed</button>\n  </a>\n</h2>\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/instructions/instructions.component.css":
/*!*********************************************************!*\
  !*** ./src/app/instructions/instructions.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ol, ul {\r\n    line-height: 2;\r\n}"

/***/ }),

/***/ "./src/app/instructions/instructions.component.html":
/*!**********************************************************!*\
  !*** ./src/app/instructions/instructions.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-display-1\">Using this portal you can update Address in your Aadhaar.</div>\n<div class=\"mat-headline\">Currently SSUP portal is supporting update request for following languages</div>\n<!-- TODO: table implemented -->\n<div>\n    <mat-grid-list cols=\"4\" rowHeight=\"5:1\">\n        <mat-grid-tile>Assamesse</mat-grid-tile>\n        <mat-grid-tile>Hindi</mat-grid-tile>\n        <mat-grid-tile>Oriya</mat-grid-tile>\n        <mat-grid-tile>Urdu</mat-grid-tile>\n        <mat-grid-tile>Bengali</mat-grid-tile>\n        <mat-grid-tile>Kannada</mat-grid-tile>\n        <mat-grid-tile>Punjabi</mat-grid-tile>\n        <mat-grid-tile>English</mat-grid-tile>\n        <mat-grid-tile>Malayalam</mat-grid-tile>\n        <mat-grid-tile>Tamil</mat-grid-tile>\n        <mat-grid-tile>Gujrati</mat-grid-tile>\n        <mat-grid-tile>Marathi</mat-grid-tile>\n        <mat-grid-tile>Telugu</mat-grid-tile>\n      </mat-grid-list>\n</div>\n\n<div class=\"mat-headline\">Instruction for Online Update Request</div>\n<ol>\n  \n\n  <li>You must have registered mobile number to update address in your Aadhaar using this update portal.</li>\n\n  Note: Registered mobile number is the number provided at the time of enrolment or updated subsequently.\n  <li>If you have registered mobile number with Aadhaar, enter your Aadhaar Number to get an OTP (One Time Pin) at that mobile.</li>\n\n  If you have not registered your mobile with Aadhaar or you have lost/do not possess anymore, you will have to visit nearest\n  Update Centre.\n  <li>Enter OTP and Captcha to login to the Update Portal.</li>\n\n  <li>Select/Click the Address Update checkbox.</li>\n\n  <li>Fill the fields with the details to be updated in English as well as in Local Language.While correcting Address. Write\n    complete address. The Aadhaar letter with updated address will be delivered at the given address only.\n    <ul>\n      <li>In case you face any issues with the Pin Code and related data (State/District/Village/Town/City/Post office), contact\n        UIDAI contact centre at help@uidai.gov.in.\n\n      </li>\n      <li>To include Guardian/ Parent/Spouse Name as part of the address, select the Address correction option. Then select appropriate\n        box in C/o details and enter the name of the person in the subsequent field. C/o details can be updated as a part\n        of Address update. It is not mandatory to provide C/O details while correcting you address in Aadhaar.\n\n      </li>\n      <li>You are required to fill the complete address and upload supporting PoA even if you want to update/correct only C/o\n        details. It is ok if C/o details are not mentioned in your PoA document.\n      </li>\n    </ul>\n  </li>\n  <li> Upload original scanned (with color scanner) copies of PoA document as per the Valid Documents List. Refer Link for valid\n    documents.</li>\n\n  <li> Review the data entered for correctness and completeness in English as well as in local language.UIDAI will not make any\n    corrections to the information in your request.</li>\n\n  <li>Submit the request. For future reference and tracking note down your Update Request Number (URN) carefully.</li>\n\n  You can also download /Print your Acknowledgement copy.\n</ol>\n"

/***/ }),

/***/ "./src/app/instructions/instructions.component.ts":
/*!********************************************************!*\
  !*** ./src/app/instructions/instructions.component.ts ***!
  \********************************************************/
/*! exports provided: InstructionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionsComponent", function() { return InstructionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InstructionsComponent = /** @class */ (function () {
    function InstructionsComponent() {
    }
    InstructionsComponent.prototype.ngOnInit = function () {
    };
    InstructionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-instructions',
            template: __webpack_require__(/*! ./instructions.component.html */ "./src/app/instructions/instructions.component.html"),
            styles: [__webpack_require__(/*! ./instructions.component.css */ "./src/app/instructions/instructions.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InstructionsComponent);
    return InstructionsComponent;
}());



/***/ }),

/***/ "./src/app/step-four/step-four.component.css":
/*!***************************************************!*\
  !*** ./src/app/step-four/step-four.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/step-four/step-four.component.html":
/*!****************************************************!*\
  !*** ./src/app/step-four/step-four.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  You have successfully updated your aadhaar\r\n"

/***/ }),

/***/ "./src/app/step-four/step-four.component.ts":
/*!**************************************************!*\
  !*** ./src/app/step-four/step-four.component.ts ***!
  \**************************************************/
/*! exports provided: StepFourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepFourComponent", function() { return StepFourComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StepFourComponent = /** @class */ (function () {
    function StepFourComponent() {
    }
    StepFourComponent.prototype.ngOnInit = function () {
    };
    StepFourComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-step-four',
            template: __webpack_require__(/*! ./step-four.component.html */ "./src/app/step-four/step-four.component.html"),
            styles: [__webpack_require__(/*! ./step-four.component.css */ "./src/app/step-four/step-four.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StepFourComponent);
    return StepFourComponent;
}());



/***/ }),

/***/ "./src/app/step-one/step-one.component.css":
/*!*************************************************!*\
  !*** ./src/app/step-one/step-one.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/step-one/step-one.component.html":
/*!**************************************************!*\
  !*** ./src/app/step-one/step-one.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Dear Resident</h2><br/>\r\n        <p>To start the process, please enter your Aadhaar number or VID below.</p>\r\n        <div>\r\n          <mat-form-field >\r\n            <input matInput type=\"number\" name=\"Adhaar/VID\" placeholder=\"Aadhaar/VID\" formControlName=\"firstCtrl\" required><br>\r\n            </mat-form-field>\r\n            <br>\r\n            <mat-form-field>\r\n            <input matInput type=\"number\" name=\"verify text\" placeholder=\"verification text\" formControlName=\"firstCtrl\" required><br>\r\n          </mat-form-field>\r\n        </div>\r\n        <button mat-stroked-button matStepperNext color=\"primary\">Send OTP</button> or <button mat-stroked-button color=\"accent\">Enter TOTP</button>\r\n        <div class=\"enterOTP\">\r\n            <mat-form-field>\r\n              <input matInput type=\"number\" name=\"verify text\" placeholder=\"verification text\" formControlName=\"firstCtrl\" required><br>\r\n            </mat-form-field>\r\n        <button mat-stroked-button  color=\"primary\">Submit</button>\r\n        </div>"

/***/ }),

/***/ "./src/app/step-one/step-one.component.ts":
/*!************************************************!*\
  !*** ./src/app/step-one/step-one.component.ts ***!
  \************************************************/
/*! exports provided: StepOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepOneComponent", function() { return StepOneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StepOneComponent = /** @class */ (function () {
    function StepOneComponent(_formBuilder) {
        // console.log("fff");
        this._formBuilder = _formBuilder;
    }
    StepOneComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({ firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] });
        this.secondFormGroup = this._formBuilder.group({ secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] });
    };
    StepOneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-step-one',
            template: __webpack_require__(/*! ./step-one.component.html */ "./src/app/step-one/step-one.component.html"),
            styles: [__webpack_require__(/*! ./step-one.component.css */ "./src/app/step-one/step-one.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], StepOneComponent);
    return StepOneComponent;
}());



/***/ }),

/***/ "./src/app/step-three/step-three.component.css":
/*!*****************************************************!*\
  !*** ./src/app/step-three/step-three.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n    margin: 1px;\r\n}"

/***/ }),

/***/ "./src/app/step-three/step-three.component.html":
/*!******************************************************!*\
  !*** ./src/app/step-three/step-three.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"docUpload\">\r\n    <input type=\"number\" matInput placeholder=\"Upload Document\" value=\"document\">\r\n</div>\r\n<div>\r\n  <button mat-raised-button color=\"primary\">Back</button>\r\n  <button mat-flat-button color=\"accent\" >Reset</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/step-three/step-three.component.ts":
/*!****************************************************!*\
  !*** ./src/app/step-three/step-three.component.ts ***!
  \****************************************************/
/*! exports provided: StepThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepThreeComponent", function() { return StepThreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StepThreeComponent = /** @class */ (function () {
    function StepThreeComponent() {
    }
    StepThreeComponent.prototype.ngOnInit = function () {
    };
    StepThreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-step-three',
            template: __webpack_require__(/*! ./step-three.component.html */ "./src/app/step-three/step-three.component.html"),
            styles: [__webpack_require__(/*! ./step-three.component.css */ "./src/app/step-three/step-three.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StepThreeComponent);
    return StepThreeComponent;
}());



/***/ }),

/***/ "./src/app/step-two/step-two.component.css":
/*!*************************************************!*\
  !*** ./src/app/step-two/step-two.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 10px;\r\n}\r\nbutton {\r\n    margin-top: 5px;\r\n}"

/***/ }),

/***/ "./src/app/step-two/step-two.component.html":
/*!**************************************************!*\
  !*** ./src/app/step-two/step-two.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Select the fields to be updated</h2>\r\n<p>Local Language: Hindi</p>\r\n<div class=\"col\">\r\n<mat-checkbox>Address</mat-checkbox>\r\n<mat-checkbox>Address via PIN code</mat-checkbox>\r\n</div>\r\n<button mat-stroked-button matStepperNext color=\"accent\">Submit</button>\r\n"

/***/ }),

/***/ "./src/app/step-two/step-two.component.ts":
/*!************************************************!*\
  !*** ./src/app/step-two/step-two.component.ts ***!
  \************************************************/
/*! exports provided: StepTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepTwoComponent", function() { return StepTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StepTwoComponent = /** @class */ (function () {
    function StepTwoComponent() {
    }
    StepTwoComponent.prototype.ngOnInit = function () {
    };
    StepTwoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-step-two',
            template: __webpack_require__(/*! ./step-two.component.html */ "./src/app/step-two/step-two.component.html"),
            styles: [__webpack_require__(/*! ./step-two.component.css */ "./src/app/step-two/step-two.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StepTwoComponent);
    return StepTwoComponent;
}());



/***/ }),

/***/ "./src/app/update/update.component.css":
/*!*********************************************!*\
  !*** ./src/app/update/update.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 10px;\r\n}\r\n\r\n.uploadform {\r\n    display: -webkit-inline-box;\r\n    /* margin: 5px; */\r\n}\r\n\r\n.uploadform > * {\r\n    margin: 5px;\r\n}\r\n\r\n.uploadDoc {\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.uploadDoc input.upload {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n    opacity: 0;\r\n    filter: alpha(opacity=0);\r\n}"

/***/ }),

/***/ "./src/app/update/update.component.html":
/*!**********************************************!*\
  !*** ./src/app/update/update.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isMobile\">\r\n  <mat-horizontal-stepper #stepper>\r\n    <mat-step [stepControl]=\"firstFormGroup\">\r\n      <form [formGroup]=\"firstFormGroup\">\r\n        <ng-template matStepLabel>Login with Aadhaar/VID</ng-template>\r\n        <!-- <app-step-one></app-step-one> -->\r\n        <h2>Dear Resident</h2>\r\n        <br/>\r\n        <p>To start the process, please enter your Aadhaar number or VID below.</p>\r\n        <div>\r\n          <mat-form-field>\r\n            <input matInput type=\"number\" name=\"Adhaar/VID\" placeholder=\"Aadhaar/VID\" formControlName=\"firstCtrl\" required>\r\n            <br>\r\n          </mat-form-field>\r\n          <br>\r\n          <mat-form-field>\r\n            <input matInput type=\"number\" name=\"verify text\" placeholder=\"verification text\" formControlName=\"firstCtrl\" required>\r\n            <br>\r\n          </mat-form-field>\r\n        </div>\r\n        <button mat-stroked-button matStepperNext color=\"primary\">Send OTP</button> or\r\n        <button mat-stroked-button color=\"accent\">Enter TOTP</button>\r\n      </form>\r\n    </mat-step>\r\n    <mat-step [stepControl]=\"secondFormGroup\">\r\n      <form [formGroup]=\"secondFormGroup\">\r\n        <ng-template matStepLabel>Request Data Update</ng-template>\r\n        <!-- <app-step-two></app-step-two> -->\r\n        <h2>Select the fields to be updated</h2>\r\n        <p>Local Language: Hindi</p>\r\n        <div class=\"col\">\r\n          <mat-checkbox required>Address</mat-checkbox>\r\n          <mat-checkbox>Address via PIN code</mat-checkbox>\r\n        </div>\r\n        <button mat-stroked-button matStepperNext color=\"accent\">Submit</button>\r\n      </form>\r\n    </mat-step>\r\n    <mat-step>\r\n      <ng-template matStepLabel>Documents Upload</ng-template>\r\n      <!-- <app-step-three></app-step-three> -->\r\n      <h1>Update Request Confirmation and Document Upload</h1>\r\n      <p>Your request requires upload of a valid and self attested document proof. Maximum size: 2 MB. File type supported:\r\n        .jpg, .pdf, .tiff, .png.</p>\r\n      <p>Please Upload and submit</p>\r\n      <div class=\"uploadform\">\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Document Type\">\r\n            <mat-option *ngFor=\"let document of documents\" [value]=\"document.value\">\r\n              {{document.viewValue}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <div>\r\n          <button mat-raised-button color=\"primary\">\r\n            <div class=\"uploadDoc\">\r\n              <span>Choose file</span>\r\n              <input type=\"file\" class=\"upload\">\r\n            </div>\r\n          </button>\r\n        </div>\r\n        <div>\r\n          <button mat-stroked-button>Submit</button>\r\n        </div>\r\n      </div>\r\n    </mat-step>\r\n    <mat-step>\r\n      <ng-template matStepLabel>BPO Servide Provider Selection</ng-template>\r\n      <app-step-four></app-step-four>\r\n    </mat-step>\r\n  </mat-horizontal-stepper>\r\n</div>\r\n\r\n<div *ngIf=\"isMobile\">\r\n  <mat-vertical-stepper>\r\n      <mat-step [stepControl]=\"firstFormGroup\">\r\n          <form [formGroup]=\"firstFormGroup\">\r\n            <ng-template matStepLabel>Login with Aadhaar/VID</ng-template>\r\n            <!-- <app-step-one></app-step-one> -->\r\n            <h2>Dear Resident</h2>\r\n            <br/>\r\n            <p>To start the process, please enter your Aadhaar number or VID below.</p>\r\n            <div>\r\n              <mat-form-field>\r\n                <input matInput type=\"number\" name=\"Adhaar/VID\" placeholder=\"Aadhaar/VID\" formControlName=\"firstCtrl\" required>\r\n                <br>\r\n              </mat-form-field>\r\n              <br>\r\n              <mat-form-field>\r\n                <input matInput type=\"number\" name=\"verify text\" placeholder=\"verification text\" formControlName=\"firstCtrl\" required>\r\n                <br>\r\n              </mat-form-field>\r\n            </div>\r\n            <button mat-stroked-button matStepperNext color=\"primary\">Send OTP</button> or\r\n            <button mat-stroked-button color=\"accent\">Enter TOTP</button>\r\n          </form>\r\n        </mat-step>\r\n        <mat-step [stepControl]=\"secondFormGroup\">\r\n          <form [formGroup]=\"secondFormGroup\">\r\n            <ng-template matStepLabel>Request Data Update</ng-template>\r\n            <!-- <app-step-two></app-step-two> -->\r\n            <h2>Select the fields to be updated</h2>\r\n            <p>Local Language: Hindi</p>\r\n            <div class=\"col\">\r\n              <mat-checkbox required>Address</mat-checkbox>\r\n              <mat-checkbox>Address via PIN code</mat-checkbox>\r\n            </div>\r\n            <button mat-stroked-button matStepperNext color=\"accent\">Submit</button>\r\n          </form>\r\n        </mat-step>\r\n        <mat-step>\r\n          <ng-template matStepLabel>Documents Upload</ng-template>\r\n          <!-- <app-step-three></app-step-three> -->\r\n          <h1>Update Request Confirmation and Document Upload</h1>\r\n          <p>Your request requires upload of a valid and self attested document proof. Maximum size: 2 MB. File type supported:\r\n            .jpg, .pdf, .tiff, .png.</p>\r\n          <p>Please Upload and submit</p>\r\n          <div class=\"uploadform\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Document Type\">\r\n                <mat-option *ngFor=\"let document of documents\" [value]=\"document.value\">\r\n                  {{document.viewValue}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <div>\r\n              <button mat-raised-button color=\"primary\">\r\n                <div class=\"uploadDoc\">\r\n                  <span>Choose file</span>\r\n                  <input type=\"file\" class=\"upload\">\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div>\r\n              <button mat-stroked-button>Submit</button>\r\n            </div>\r\n          </div>\r\n        </mat-step>\r\n        <mat-step>\r\n          <ng-template matStepLabel>BPO Servide Provider Selection</ng-template>\r\n          <app-step-four></app-step-four>\r\n        </mat-step>\r\n  </mat-vertical-stepper>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/update/update.component.ts":
/*!********************************************!*\
  !*** ./src/app/update/update.component.ts ***!
  \********************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(_formBuilder, breakpointObserver) {
        var _this = this;
        this._formBuilder = _formBuilder;
        this.isMobile = false;
        this.documents = [
            { value: '0', viewValue: 'Passport' },
            { value: '1', viewValue: 'Bank Statement' },
            { value: '2', viewValue: 'Voter ID' },
            { value: '3', viewValue: 'Ration Card' },
            { value: '4', viewValue: 'Driving License' },
            { value: '5', viewValue: 'NREGS Job Card' },
            { value: '6', viewValue: 'Arms License' },
            { value: '7', viewValue: 'Photo Credit Card' },
            { value: '8', viewValue: 'Kissan Photo Passbook' },
            { value: '9', viewValue: 'Pensioner Photo Card' },
            { value: '10', viewValue: 'ECHS/ CGHS Photo Card' }
        ];
        var isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');
        console.log("isSmallScreen");
        console.log(isSmallScreen);
        console.log("over");
        breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].HandsetPortrait
        ]).subscribe(function (result) {
            if (isSmallScreen) {
                _this.activateHandsetLayout();
            }
            else {
                _this.activateWebLayout();
            }
        });
    }
    UpdateComponent.prototype.activateHandsetLayout = function () {
        this.isMobile = true;
        console.log(this.isMobile);
    };
    ;
    UpdateComponent.prototype.activateWebLayout = function () {
        this.isMobile = false;
        console.log(this.isMobile);
    };
    ;
    UpdateComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({ firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] });
        this.secondFormGroup = this._formBuilder.group({ secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] });
    };
    UpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(/*! ./update.component.html */ "./src/app/update/update.component.html"),
            styles: [__webpack_require__(/*! ./update.component.css */ "./src/app/update/update.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], UpdateComponent);
    return UpdateComponent;
}());



/***/ }),

/***/ "./src/app/updatestatus/updatestatus.component.css":
/*!*********************************************************!*\
  !*** ./src/app/updatestatus/updatestatus.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    line-height: 2;\r\n    margin: 10px;\r\n}"

/***/ }),

/***/ "./src/app/updatestatus/updatestatus.component.html":
/*!**********************************************************!*\
  !*** ./src/app/updatestatus/updatestatus.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Update Status</h2>\n<br/>\n<p>Please enter your Aadhaar and URN / SRN to check status</p>\n<div>\n  <mat-form-field>\n    <input matInput type=\"number\" name=\"Adhaar/VID\" placeholder=\"Aadhaar/VID Number\" required>\n  </mat-form-field>\n  <br>\n  <mat-form-field>\n    <input matInput type=\"number\" name=\"verify text\" placeholder=\"URN\" formControlName=\"firstCtrl\" required>\n  </mat-form-field>\n  <br>\n  <mat-form-field>\n    <input matInput type=\"number\" name=\"verify text\" placeholder=\"SRN\" formControlName=\"firstCtrl\" required>\n  </mat-form-field>\n  <br>\n  <mat-form-field>\n    <input matInput type=\"number\" name=\"verify text\" placeholder=\"Verificatoin Text\" formControlName=\"firstCtrl\" required>\n    <br>\n  </mat-form-field>\n</div>\n<button mat-raised-button color=\"primary\">Get Status</button>\n"

/***/ }),

/***/ "./src/app/updatestatus/updatestatus.component.ts":
/*!********************************************************!*\
  !*** ./src/app/updatestatus/updatestatus.component.ts ***!
  \********************************************************/
/*! exports provided: UpdatestatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatestatusComponent", function() { return UpdatestatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpdatestatusComponent = /** @class */ (function () {
    function UpdatestatusComponent() {
    }
    UpdatestatusComponent.prototype.ngOnInit = function () {
    };
    UpdatestatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-updatestatus',
            template: __webpack_require__(/*! ./updatestatus.component.html */ "./src/app/updatestatus/updatestatus.component.html"),
            styles: [__webpack_require__(/*! ./updatestatus.component.css */ "./src/app/updatestatus/updatestatus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UpdatestatusComponent);
    return UpdatestatusComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sanket.chaudhary\Downloads\Work\UI-UX-SEO\SSUP\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map