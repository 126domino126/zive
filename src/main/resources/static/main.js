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
		var e = new Error("Cannot find module '" + req + "'");
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_create_issue_create_issue_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/create-issue/create-issue.component */ "./src/app/components/create-issue/create-issue.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'create-issue', component: _components_create_issue_create_issue_component__WEBPACK_IMPORTED_MODULE_5__["CreateIssueComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"Background\">\r\n  <app-navbar>\r\n  </app-navbar>\r\n  <div class=\"MobileWidth\">\r\n    <router-outlet>\r\n    </router-outlet>\r\n  </div>\r\n</div>\r\n<footer>\r\n  <div class=\"Footer__menu\">\r\n    <!-- <div class=\"Footer__nav\">\r\n        <a class=\"Footer__link Footer__link--primary\">Homepage</a>\r\n        <a class=\"Footer__link Footer__link--primary\">About</a>\r\n        <a class=\"Footer__link Footer__link--primary\">Gift Inspiration</a>\r\n        <a class=\"Footer__link Footer__link--primary\">Blog</a>\r\n    </div> -->\r\n    <div class=\"Footer__nav\">\r\n      <a class=\"Footer__link Footer__link--social\" href=\"#\" target=\"_blank\">\r\n        <i class=\"fa fa-facebook\"></i>\r\n      </a>\r\n      <a class=\"Footer__link Footer__link--social\" href=\"#\" target=\"_blank\">\r\n        <i class=\"fa fa-instagram\"></i>\r\n      </a>\r\n    </div>\r\n    <div class=\"Footer__nav\"><app-language></app-language></div>\r\n  </div>\r\n  <div class=\"Footer__copyright\">\r\n    <img class=\"Footer__logo\" src=\"\" alt=\"FiveStars logo\" height=\"40px\">\r\n    <p class=\"no-margin\">{{'footer.created' | translate}} FiveStars 2018 {{'footer.rights' | translate}}.</p>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".MobileWidth {\n  align-items: left;\n  width: 480px;\n  margin: 0px auto 0px auto;\n  padding: 10px 0px; }\n  @media screen and (max-width: 500px) {\n    .MobileWidth {\n      width: initial;\n      padding: 10px 10px; } }\n  footer {\n  background: #212121;\n  color: white;\n  justify-content: space-between;\n  padding: 30px 20px;\n  display: flex;\n  position: fixed;\n  width: 100%;\n  bottom: 0; }\n  @media screen and (max-width: 700px) {\n    footer {\n      display: block;\n      text-align: center; } }\n  .Footer__copyright {\n  align-items: flex-end; }\n  @media screen and (max-width: 700px) {\n  .Footer__logo {\n    margin: 10px 0px 10px 0px; } }\n  .Footer__menu {\n  align-items: flex-start; }\n  .Footer__nav {\n  margin: 0px 0px 15px 0px; }\n  .Footer__link {\n  font-family: Source Sans Pro;\n  font-size: 1em;\n  font-weight: 400;\n  font-style: normal;\n  letter-spacing: 0em;\n  color: #FFF;\n  padding: 0px 16px 0px 0px; }\n  .Footer__link:hover {\n  text-decoration: none;\n  color: rgba(255, 255, 255, 0.5); }\n  .Footer__link--primary {\n  font-weight: 700; }\n  .Footer__link--social {\n  font-size: 1.6em;\n  padding: 0px 24px 0px 0px; }\n  .Footer__link--secondary {\n  text-decoration: underline;\n  font-size: 0.8em; }\n  .no-margin {\n  margin: 0px; }\n  .wrapper {\n  min-height: 100%;\n  /* Equal to height of footer */\n  /* But also accounting for potential margin-bottom of last child */\n  margin-bottom: -50px; }\n"

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
        this.title = 'frontend';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_create_issue_create_issue_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/create-issue/create-issue.component */ "./src/app/components/create-issue/create-issue.component.ts");
/* harmony import */ var _auth_jwt_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/jwt.interceptor */ "./src/app/auth/jwt.interceptor.ts");
/* harmony import */ var _auth_error_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/error.interceptor */ "./src/app/auth/error.interceptor.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _components_language_language_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/language/language.component */ "./src/app/components/language/language.component.ts");
/* harmony import */ var _entities_language_constants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./entities/language.constants */ "./src/app/entities/language.constants.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_create_issue_user_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/create-issue/user.pipe */ "./src/app/components/create-issue/user.pipe.ts");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _components_create_issue_user_input_user_input_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/create-issue/user-input/user-input.component */ "./src/app/components/create-issue/user-input/user-input.component.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















//import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
//import { TimepickerModule } from 'ngx-bootstrap/timepicker';






var AppModule = /** @class */ (function () {
    function AppModule(translateService) {
        this.translateService = translateService;
        this.translateService.setDefaultLang('en');
        var browserLang = this.translateService.getBrowserLang();
        if (_entities_language_constants__WEBPACK_IMPORTED_MODULE_18__["Languages"][browserLang]) {
            this.translateService.use(browserLang);
        }
        else {
            this.translateService.use('en');
        }
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _components_create_issue_create_issue_component__WEBPACK_IMPORTED_MODULE_10__["CreateIssueComponent"],
                _components_create_issue_user_input_user_input_component__WEBPACK_IMPORTED_MODULE_23__["UserInputComponent"],
                _components_language_language_component__WEBPACK_IMPORTED_MODULE_17__["LanguageComponent"],
                _components_create_issue_user_pipe__WEBPACK_IMPORTED_MODULE_21__["UserPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].production }),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                }),
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MatAutocompleteModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"],
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _auth_jwt_interceptor__WEBPACK_IMPORTED_MODULE_11__["JwtInterceptor"],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _auth_error_interceptor__WEBPACK_IMPORTED_MODULE_12__["ErrorInterceptor"],
                    multi: true
                },
            ],
            exports: [_components_create_issue_user_pipe__WEBPACK_IMPORTED_MODULE_21__["UserPipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"]])
    ], AppModule);
    return AppModule;
}());

function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__["TranslateHttpLoader"](http);
}


/***/ }),

/***/ "./src/app/auth/error.interceptor.ts":
/*!*******************************************!*\
  !*** ./src/app/auth/error.interceptor.ts ***!
  \*******************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/auth/jwt.interceptor.ts":
/*!*****************************************!*\
  !*** ./src/app/auth/jwt.interceptor.ts ***!
  \*****************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authService) {
        this.authService = authService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var token = this.authService.getToken();
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "JWT " + token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/components/create-issue/create-issue.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/create-issue/create-issue.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<form [formGroup]=\"headerForm\" class=\"Form\">-->\r\n  <!--<div class=\"form-group\">-->\r\n    <!--<label for=\"project\">Project: </label>-->\r\n    <!--<select class=\"form-control\" id=\"project\" formControlName=\"project\">-->\r\n      <!--<option *ngFor=\"let p of projects\" [ngValue]=\"p\">{{ p.key }}</option>-->\r\n    <!--</select>-->\r\n    <!--<br>-->\r\n    <!--<label for=\"issuetype\">Issue Type: </label>-->\r\n    <!--<select class=\"form-control\" id=\"issuetype\" formControlName=\"issuetype\">-->\r\n      <!--<option *ngFor=\"let t of issueTypes\" [ngValue]=\"t\">{{ t.name }}</option>-->\r\n    <!--</select>-->\r\n  <!--</div>-->\r\n<!--</form>-->\r\n<!--<br>-->\r\n\r\n\r\n<mat-form-field [formGroup]=\"headerForm\" style=\"width: 100%;\">\r\n  <label for=\"project\">Project: </label>\r\n  <mat-select id=\"project\" formControlName=\"project\" class=\"form-control\" style=\"width: 100%\">\r\n    <mat-option *ngFor=\"let p of projects\" [value]=\"p\" >{{ p.key }}</mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n\r\n<br>\r\n<mat-form-field [formGroup]=\"headerForm\" style=\"width: 100%\">\r\n  <label for=\"issuetype\">Issue Type: </label>\r\n  <mat-select id=\"issuetype\" formControlName=\"issuetype\" class=\"form-control\">\r\n    <mat-option *ngFor=\"let t of issueTypes\" [value]=\"t\" >{{ t.name }}</mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n\r\n<br>\r\n\r\n\r\n<div *ngIf=\"fields !== undefined && fields.length !== 0\">\r\n  <div *ngFor=\"let field of fields\" class=\"form-row align-items-center\">\r\n    <label *ngIf=\"field.field.type === 'string' || field.field.type === 'date' || field.field.type === 'attachment'\r\n                  || field.field.type === 'user' || field.field.type === 'number' || field.field.type === 'datetime'\r\n                  || field.field.type === 'option'\">\r\n      {{field.field.id}}</label>\r\n\r\n    <input *ngIf=\"field.field.type === 'string'\" [(ngModel)]=\"field.field.value\" type=\"text\" class=\"form-control\">\r\n    <input *ngIf=\"field.field.type === 'attachment'\" (change)=\"selectFile($event)\" type=\"file\" class=\"form-control\">\r\n    <div *ngIf=\"field.field.type === 'attachment'\">\r\n      <button *ngFor=\"let file of attachments; let i = index\"\r\n              style=\"margin: 3px; padding: 3px; ; color: white; background: #000066; border-radius: 10px\"\r\n              (click)=\"removeFile(i)\">\r\n        {{file.name}}\r\n      </button>\r\n    </div>\r\n    <div *ngIf=\"field.field.type === 'option'\" style=\"width: 100%\">\r\n      <select [(ngModel)]=\"field.field.value\" class=\"form-control\">\r\n        <option *ngFor=\"let val of field.field.allowedValues\" [ngValue]=\"val\">{{ val }}</option>\r\n      </select>\r\n    </div>\r\n\r\n    <input *ngIf=\"field.field.type === 'number'\" [(ngModel)]=\"field.field.value\" type=\"number\" class=\"form-control\">\r\n    <input *ngIf=\"field.field.type === 'date'\" [(ngModel)]=\"field.field.value\" type=\"date\" class=\"form-control\">\r\n    <input *ngIf=\"field.field.type === 'datetime'\" [(ngModel)]=\"field.field.value\" type=\"datetime-local\" class=\"form-control\">\r\n\r\n    <app-user-input style=\"width: 100%\" *ngIf=\"field.field.type === 'user'\" [field]=\"field\" [users]=\"users\">\r\n      Loading component\r\n    </app-user-input>\r\n\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<br>\r\n\r\n<button *ngIf=\"fields !== undefined && fields.length !== 0\" type=\"button\" (click)=\"OnSubmit()\" class=\"btn btn-primary\"\r\n        data-toggle=\"button\" aria-pressed=\"false\"> Submit\r\n</button>\r\n<br>\r\n<div style=\"margin-bottom: 175px\"></div>\r\n"

/***/ }),

/***/ "./src/app/components/create-issue/create-issue.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/create-issue/create-issue.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/create-issue/create-issue.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/create-issue/create-issue.component.ts ***!
  \*******************************************************************/
/*! exports provided: CreateIssueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateIssueComponent", function() { return CreateIssueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _create_issue_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../create-issue.service */ "./src/app/create-issue.service.ts");
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



var CreateIssueComponent = /** @class */ (function () {
    function CreateIssueComponent(formBuilder, jiraService) {
        this.formBuilder = formBuilder;
        this.jiraService = jiraService;
        this.attachments = [];
        this.headerForm = this.formBuilder.group({
            project: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            issuetype: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    CreateIssueComponent.prototype.OnSubmit = function () {
        var _this = this;
        console.log(this.headerForm);
        console.log(this.fields);
        this.jiraService.postFields(this.fields).subscribe(function (res) {
            console.log('Fields-post: ', res);
            _this.attachments.forEach(function (x) {
                return _this.jiraService.postFile(x, res).subscribe(function (respond) {
                    return console.log("File res: ", respond);
                });
            });
        });
    };
    CreateIssueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jiraService.getUsers().subscribe(function (res) {
            console.log('Users: ', res);
            _this.users = res;
        });
        this.jiraService.getProjects().subscribe(function (res) {
            console.log('Projects: ', res);
            _this.projects = res;
        });
        this.jiraService.getIssueTypes().subscribe(function (res) {
            console.log('Issues: ', res);
            _this.issueTypes = res;
        });
        this.onChanges();
    };
    CreateIssueComponent.prototype.onChanges = function () {
        var _this = this;
        this.headerForm.get('project').valueChanges.subscribe(function (val) {
            if (_this.headerForm.value.issuetype.id === undefined) {
                console.log("first call");
                _this.jiraService.getIssueTypesForProject(val.key).subscribe(function (res) {
                    _this.issueTypes = res;
                    console.log("issueTypes:  ", _this.issueTypes);
                    console.log("issueType:  ", _this.headerForm.value.issuetype);
                });
            }
            else if (_this.fields === undefined) {
                console.log("second call");
                console.log(val.key);
                _this.jiraService.getFields(_this.headerForm.value.issuetype.id, val.key).subscribe(function (res) {
                    _this.fields = res;
                    console.log("res", res);
                    console.log("fields:  ", _this.fields);
                });
            }
            else {
                console.log("Nulling call");
                _this.headerForm.value.issuetype = undefined;
                _this.fields = undefined;
                _this.jiraService.getIssueTypesForProject(val.key).subscribe(function (res) {
                    _this.issueTypes = res;
                    console.log("issueTypes:  ", _this.issueTypes);
                });
            }
        });
        this.headerForm.get('issuetype').valueChanges.subscribe(function (val) {
            if (_this.headerForm.value.project.id === undefined) {
                console.log("first call");
                _this.jiraService.getProjectsForIssueType(val.id).subscribe(function (res) {
                    _this.projects = res;
                    console.log("projects:  ", _this.projects);
                });
            }
            else if (_this.fields === undefined) {
                console.log("second call");
                _this.jiraService.getFields(val.id, _this.headerForm.value.project.key).subscribe(function (res) {
                    _this.fields = res;
                    console.log("res", res);
                    console.log("fields:  ", _this.fields);
                });
            }
            else {
                console.log("Nulling call");
                _this.headerForm.value.project = undefined;
                _this.fields = undefined;
                _this.jiraService.getProjectsForIssueType(val.id).subscribe(function (res) {
                    _this.projects = res;
                    console.log("projects:  ", _this.projects);
                });
            }
        });
    };
    CreateIssueComponent.prototype.removeFile = function (index) {
        this.attachments.splice(index, 1);
    };
    CreateIssueComponent.prototype.selectFile = function (event) {
        this.attachments.push(event.target.files[0]);
        console.log("files", this.attachments);
    };
    CreateIssueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-issue',
            template: __webpack_require__(/*! ./create-issue.component.html */ "./src/app/components/create-issue/create-issue.component.html"),
            styles: [__webpack_require__(/*! ./create-issue.component.scss */ "./src/app/components/create-issue/create-issue.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _create_issue_service__WEBPACK_IMPORTED_MODULE_1__["JiraService"]])
    ], CreateIssueComponent);
    return CreateIssueComponent;
}());



/***/ }),

/***/ "./src/app/components/create-issue/user-input/user-input.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/create-issue/user-input/user-input.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\">\r\n  <div class=\"input-group\">\r\n    <input class=\"form-control\" matInput [matAutocomplete]=\"auto\"\r\n           name=\"joke\" #jokeField=\"ngModel\"\r\n           [(ngModel)]=\"field.field.value\">\r\n  </div>\r\n  <mat-autocomplete #auto=\"matAutocomplete\">\r\n    <mat-option *ngFor=\"let user of users | userPipe: field.field.value\" [value]=\"user.name\">\r\n      <img [src]=\"user.avatar\" style=\"border-radius: 50%; max-width: 24px\"> {{user.name}} | {{user.emailAddress}}\r\n    </mat-option>\r\n  </mat-autocomplete>\r\n</form>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/create-issue/user-input/user-input.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/create-issue/user-input/user-input.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/create-issue/user-input/user-input.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/create-issue/user-input/user-input.component.ts ***!
  \****************************************************************************/
/*! exports provided: UserInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInputComponent", function() { return UserInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entities_create_issue_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../entities/create.issue.model */ "./src/app/entities/create.issue.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserInputComponent = /** @class */ (function () {
    function UserInputComponent() {
    }
    UserInputComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _entities_create_issue_model__WEBPACK_IMPORTED_MODULE_1__["Wrapper"])
    ], UserInputComponent.prototype, "field", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], UserInputComponent.prototype, "users", void 0);
    UserInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-input',
            template: __webpack_require__(/*! ./user-input.component.html */ "./src/app/components/create-issue/user-input/user-input.component.html"),
            styles: [__webpack_require__(/*! ./user-input.component.scss */ "./src/app/components/create-issue/user-input/user-input.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserInputComponent);
    return UserInputComponent;
}());



/***/ }),

/***/ "./src/app/components/create-issue/user.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/components/create-issue/user.pipe.ts ***!
  \******************************************************/
/*! exports provided: UserPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPipe", function() { return UserPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserPipe = /** @class */ (function () {
    function UserPipe() {
    }
    UserPipe.prototype.transform = function (value, userInput) {
        if (value === undefined || userInput === '' || userInput === undefined || userInput == null)
            return value;
        return value.filter(function (x) { return x.name.includes(userInput.toLowerCase()); });
    };
    UserPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'userPipe'
        })
    ], UserPipe);
    return UserPipe;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"head\">\r\n  <h2><b>Dashboard</b></h2>\r\n  </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"card shadow\">\r\n            <div class=\"card-header Border\">\r\n              <h4 class=\"card-title float-left\" title=\"Introduction\">Introduction</h4>\r\n              <span class=\"float-right\">\r\n                <a href=\"\" class=\"fa fa-caret-down mr-2\"></a>\r\n                <a href=\"\" class=\"fa fa-times\"></a>\r\n              </span>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"card-subtitle\">\r\n                <h3>Welcome to Jira</h3>\r\n              </div>\r\n              <p>Not sure where to start? Check out the <a id=\"jira101\" alt=\"Get help!\"\r\n                                                           href=\"https://confluence.atlassian.com/display/JIRASOFTWARECLOUD/Getting+started\">\r\n                Jira 101 guide</a> and <a id=\"jiraTraining\" href=\"http://www.atlassian.com/training/\">Atlassian training\r\n                course</a>.</p>\r\n              <p>You can <a id=\"edit-introduction\" href=\"/secure/admin/jira/EditApplicationProperties!default.jspa\">customize\r\n                this text</a> in the Administration section.</p>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <br>\r\n        <br>\r\n<div class=\"Card\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"card shadow\">\r\n            <div class=\"card-header Border\">\r\n              <h4 class=\"card-title float-left\" title=\"Assigned to Me\">Assigned to Me</h4>\r\n              <span class=\"float-right\">\r\n                <a href=\"\" class=\"fa fa-caret-down mr-2\"></a>\r\n                <a href=\"\" class=\"fa fa-times\"></a>\r\n              </span>\r\n            </div>\r\n            <div class=\"card-body \">\r\n              <div class=\"Issue_Name\"><b>Issue name:</b> {{issue.issuename}}</div>\r\n\r\n              <div class=\"Time\"><b>Created: </b> {{issue.created_date}} </div>\r\n\r\n              <div> <span class=\"Name\"><b> Creator:</b> {{issue.creator_name}}</span></div>\r\n\r\n\r\n              <div> <b>Description:</b> {{issue.description}}</div>\r\n\r\n              <div class=\"Creator\"> <b>Contact:</b> {{issue.creator_email}}</div>\r\n\r\n              <!-- <div class=\"gadget-inline\" style=\"height: 40px;\">\r\n                <div class=\"empty-results\">You currently have no <a href=\"#\">issues</a> assigned to you. Enjoy your day!</div>\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n</div>\r\n\r\n        <!--<div class=\"col-sm-12\">-->\r\n          <!--<div class=\"card shadow\">-->\r\n            <!--<div class=\"card-header Border\">-->\r\n              <!--<h4 class=\"card-title float-left\" title=\"Activity Stream\">Activity Stream</h4>-->\r\n              <!--<span class=\"float-right\">-->\r\n                <!--<a href=\"\" class=\"fa fa-caret-down mr-2\"></a>-->\r\n                <!--<a href=\"\" class=\"fa fa-times\"></a>-->\r\n              <!--</span>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"card-body\">-->\r\n\r\n              <!--<div class=\"Time\"> {{issue.created_date}} </div>-->\r\n\r\n              <!--<div> <span class=\"Name\">{{issue.creator_name}}</span> create {{issue.issuename}}</div>-->\r\n\r\n              <!--<div class=\"Description\"> Description: {{issue.description}}</div>-->\r\n\r\n              <!--<div class=\"Creator\"> Created by {{issue.creator_name}} contact {{issue.creator_email}}</div>-->\r\n\r\n            <!--</div>-->\r\n          <!--</div>-->\r\n        <!--</div>-->\r\n      </div>\r\n</div>\r\n\r\n<div style=\"margin-bottom: 175px\"></div>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Border {\n  border-top: 3px solid #0071ff; }\n\n.Time {\n  border-top: 1px solid #eaeaea;\n  border-bottom: 1px solid #eaeaea;\n  font-size: 15px; }\n\n.Name {\n  font-size: 15px; }\n\n.Card {\n  margin-top: 30px; }\n\n.head {\n  text-align: center; }\n\n.Issue_Name {\n  font-size: 20px;\n  margin-bottom: 5px; }\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dashboard.service */ "./src/app/services/dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(http, dashboardService) {
        var _this = this;
        this.http = http;
        this.dashboardService = dashboardService;
        this.dashboardService.getDashboardIssue()
            .subscribe(function (issues) {
            _this.issue = issues;
            console.log(issues);
            console.log(issues.asignee);
        });
    }
    // test() {
    //   return this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(a => console.log(a));
    // }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/components/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/language/language.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/language/language.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"LanguageSwitcher\">\r\n  <select class=\"btn btn-dark\" (change)=\"changeLanguage($event)\">\r\n    <option value=\"\" selected disabled>{{currentLang}}</option>\r\n    <option *ngFor=\"let lang of languages\" [value]=\"lang.value\" class=\"Text--white\">\r\n      {{lang.viewValue}}\r\n    </option>\r\n  </select>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/language/language.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/language/language.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".LanguageSwitcher {\n  float: left;\n  width: 150px; }\n\nselect {\n  background-color: transparent;\n  border: 0px;\n  border-radius: 8px; }\n\n/* Hidden placeholder */\n\nselect option[disabled]:first-child {\n  display: none; }\n\nselect option {\n  background-color: transparent; }\n\n.Text--white {\n  color: white; }\n"

/***/ }),

/***/ "./src/app/components/language/language.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/language/language.component.ts ***!
  \***********************************************************/
/*! exports provided: LanguageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageComponent", function() { return LanguageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _entities_language_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../entities/language.constants */ "./src/app/entities/language.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LanguageComponent = /** @class */ (function () {
    function LanguageComponent(translateService) {
        this.translateService = translateService;
        this.currentLang = _entities_language_constants__WEBPACK_IMPORTED_MODULE_2__["Languages"][this.translateService.currentLang];
        this.languages = [
            { value: 'en', viewValue: 'English' },
            { value: 'sk', viewValue: 'Slovak' },
        ];
    }
    LanguageComponent.prototype.ngOnInit = function () {
    };
    LanguageComponent.prototype.changeLanguage = function (event) {
        this.translateService.use(event.target.value);
    };
    LanguageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-language',
            template: __webpack_require__(/*! ./language.component.html */ "./src/app/components/language/language.component.html"),
            styles: [__webpack_require__(/*! ./language.component.scss */ "./src/app/components/language/language.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], LanguageComponent);
    return LanguageComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"loginForm\" class=\"Form\" (ngSubmit)=\"onSubmit()\">\r\n  <h2>{{'login.loginTitle' | translate}}</h2>\r\n  <div class=\"form-group\">\r\n    <label>{{'login.loginUsername' | translate}}</label>\r\n    <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\r\n    <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n      <div *ngIf=\"f.username.errors.required\">{{'login.usernameRequired' | translate}}</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>{{'login.loginPassword' | translate}}</label>\r\n    <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n      <div *ngIf=\"f.password.errors.required\">{{'login.passwordRequired' | translate}}</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <button [disabled]=\"loading\" class=\"btn btn-primary btn-lg btn-block\">{{\"button.loginButton\" | translate}}</button>\r\n    <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n  </div>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Form {\n  align-items: left;\n  width: 480px;\n  margin: 0px auto 0px auto;\n  padding: 10px 40px; }\n  @media screen and (max-width: 500px) {\n    .Form {\n      width: initial;\n      padding: 10px 20px; } }\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = 'dashboard';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            // this.alertService.error(error);
            _this.loading = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["empty"])();
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
            _this.loading = false;
            console.log("FINALIZE", _this.loading);
        }))
            .subscribe(function (data) {
            console.log("SUBSCRIBE", _this.returnUrl, data);
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.error = error;
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-primary\">\r\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" (click)=\"navbarCollapsed = !navbarCollapsed\" [attr.aria-expanded]=\"!navbarCollapsed\"\r\n          aria-controls=\"navbarContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <a class=\"navbar-brand\" href=\"#\">JiraApp</a>\r\n  <div [ngbCollapse]=\"navbarCollapsed\" class=\"navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/login']\" (click)=\"navbarCollapsed = true\">{{'login.loginTitle' | translate}}</a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard']\" (click)=\"navbarCollapsed = true\">{{'navbar.dashboard' | translate}}</a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/create-issue']\" (click)=\"navbarCollapsed = true\">{{'navbar.issue' | translate}}</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Navbar {\n  align-items: left;\n  width: 480px;\n  margin: 0px auto 0px auto;\n  padding: 10px 0px; }\n  @media screen and (max-width: 500px) {\n    .Navbar {\n      width: initial;\n      padding: 10px 10px; } }\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.navbarCollapsed = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/create-issue.service.ts":
/*!*****************************************!*\
  !*** ./src/app/create-issue.service.ts ***!
  \*****************************************/
/*! exports provided: JiraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JiraService", function() { return JiraService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var JiraService = /** @class */ (function () {
    function JiraService(http) {
        this.http = http;
        this.url = 'http://localhost:8081/rest'; //local domino 81
    }
    JiraService.prototype.postFile = function (file, issueId) {
        if (file === undefined)
            file = null;
        var formdata = new FormData();
        formdata.append('file', file);
        return this.http.post('http://localhost:8081/rest/file/' + issueId, formdata, {
            reportProgress: true,
            responseType: 'text'
        });
    };
    JiraService.prototype.postFields = function (data) {
        return this.http.post('http://127.0.0.1:8081/rest/create', data, httpOptions);
    };
    JiraService.prototype.getUsers = function () {
        console.log('getUsers');
        return this.http.get(this.url + '/users');
    };
    JiraService.prototype.getProjects = function () {
        console.log('getProjects:');
        return this.http.get(this.url + '/projects');
    };
    JiraService.prototype.getUser = function () {
        console.log('getUser:');
        return this.http.get(this.url + '/user/peter.domonkos/issues');
    };
    JiraService.prototype.getProjectsForIssueType = function (issueID) {
        console.log('getProjectsForIssueType:', issueID);
        return this.http.get(this.url + "/projects/" + issueID);
    };
    JiraService.prototype.getIssueTypes = function () {
        console.log('getIssueTypes:');
        return this.http.get(this.url + '/issuetypes');
    };
    JiraService.prototype.getIssueTypesForProject = function (projectKey) {
        console.log('getIssueTypesForProject:', projectKey);
        return this.http.get(this.url + "/issuetypes/" + projectKey);
    };
    JiraService.prototype.getFields = function (issueID, projectKey) {
        console.log('getFields:', issueID, projectKey);
        return this.http.get("http://127.0.0.1:8081/rest/metadatalist/" + issueID + "/" + projectKey);
        // return this.http.get<Wrapper[]>(`${this.url}/Metadatalist/10004/${projectKey}`);
    };
    JiraService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], JiraService);
    return JiraService;
}());



/***/ }),

/***/ "./src/app/entities/create.issue.model.ts":
/*!************************************************!*\
  !*** ./src/app/entities/create.issue.model.ts ***!
  \************************************************/
/*! exports provided: Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
var Wrapper = /** @class */ (function () {
    function Wrapper(key, field) {
        this.key = key;
        this.field = field;
    }
    return Wrapper;
}());



/***/ }),

/***/ "./src/app/entities/issue.ts":
/*!***********************************!*\
  !*** ./src/app/entities/issue.ts ***!
  \***********************************/
/*! exports provided: mapResponseToIssue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapResponseToIssue", function() { return mapResponseToIssue; });
/* harmony import */ var morphism__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! morphism */ "./node_modules/morphism/dist/morphism.js");
/* harmony import */ var morphism__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(morphism__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helper */ "./src/app/helpers/helper.ts");


var mapResponseToIssue = morphism__WEBPACK_IMPORTED_MODULE_0___default()({
    issuename: function (source) { return source.issuetype.name; },
    asignee: function (source) { return source.assignee.name; },
    asignee_email: function (source) { return source.assignee.emailAddress; },
    projectName: function (source) { return source.project.name; },
    customfield_10033: function (source) { return source.customfield_10033; },
    customfield_10034: function (source) { return source.customfield_10034; },
    customfield_10014: function (source) { return source.customfield_10014; },
    created_date: function (source) { return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_1__["mapStringToDate"])(source.created); },
    description: function (source) { return source.description; },
    summary: function (source) { return source.summary; },
    creator_name: function (source) { return source.creator.name; },
    creator_email: function (source) { return source.creator.emailAddress; },
    reporter_name: function (source) { return source.reporter.name; },
    reporter_email: function (source) { return source.reporter.emailAddress; },
    duedate: function (source) { return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_1__["mapStringToDate"])(source.duedate); },
});


/***/ }),

/***/ "./src/app/entities/language.constants.ts":
/*!************************************************!*\
  !*** ./src/app/entities/language.constants.ts ***!
  \************************************************/
/*! exports provided: Languages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Languages", function() { return Languages; });
var Languages;
(function (Languages) {
    Languages["sk"] = "Slovak";
    Languages["en"] = "English";
})(Languages || (Languages = {}));


/***/ }),

/***/ "./src/app/helpers/helper.ts":
/*!***********************************!*\
  !*** ./src/app/helpers/helper.ts ***!
  \***********************************/
/*! exports provided: mapStringToDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStringToDate", function() { return mapStringToDate; });
function mapStringToDate(date) {
    if (date !== null && date !== undefined) {
        return new Date(date);
    }
    return null;
}


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthService_1 = AuthService;
    AuthService.prototype.getToken = function () {
        return localStorage.getItem(AuthService_1.TOKEN_KEY);
    };
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post('http://localhost:8081/login', { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            if (user && user.token) {
                localStorage.setItem(AuthService_1.TOKEN_KEY, user.token);
                _this.router.navigate(['/dashboard']);
            }
            return user;
        }));
        // return of({
        //   token: 'hello',
        //   username: 'Peto'
        // } as User).pipe(
        //   map((user: User) => {
        //     if (user && user.token) {
        //       localStorage.setItem(AuthService.TOKEN_KEY, user.token);
        //     }
        //     return user;
        //   })
        // );
    };
    AuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    };
    var AuthService_1;
    AuthService.TOKEN_KEY = 'token';
    AuthService = AuthService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/config.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/config.service.ts ***!
  \********************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
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

var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.REST_API_URL = 'http://localhost:8081/rest/user/peter.domonkos/firstissue';
    }
    ConfigService.prototype.getRestApiUrl = function () {
        return this.REST_API_URL;
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/services/dashboard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/dashboard.service.ts ***!
  \***********************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _entities_issue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entities/issue */ "./src/app/entities/issue.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('peter.domonkos@student.tuke.sk:2910Pepek1995')
    })
};
var DashboardService = /** @class */ (function () {
    function DashboardService(httpClient, configService) {
        this.httpClient = httpClient;
        this.configService = configService;
        this.issue_id = 'issue/ZI-3';
    }
    DashboardService.prototype.getDashboardIssue = function () {
        return this.httpClient.get(this.configService.getRestApiUrl(), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return Object(_entities_issue__WEBPACK_IMPORTED_MODULE_3__["mapResponseToIssue"])(response); }));
    };
    DashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], DashboardService);
    return DashboardService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Domin\Desktop\timovy_projekt\timovy_projekt\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map