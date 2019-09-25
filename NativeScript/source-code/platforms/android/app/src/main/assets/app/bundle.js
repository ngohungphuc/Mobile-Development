require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__("../node_modules/css-loader/dist/cjs.js?!../node_modules/nativescript-theme-core/css/core.light.css"), "");

// Module
exports.push([module.i, "/*\r\nIn NativeScript, the app.css file is where you place CSS rules that\r\nyou would like to apply to your entire application. Check out\r\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\r\nselectors and properties you can use to style UI components.\r\n\r\n/*\r\nIn many cases you may want to use the NativeScript core theme instead\r\nof writing your own CSS rules. For a full list of class names in the theme\r\nrefer to http://docs.nativescript.org/ui/theme.\r\n*/\r\n\r\n.btn {\r\n  background: #7c015d;\r\n  border-width: 1;\r\n  border-color: #7c015d;\r\n  color: white;\r\n  width: 100%;\r\n  padding: 5 10;\r\n  border-radius: 30%;\r\n  margin: 5 0;\r\n}\r\n\r\n.form-control {\r\n  border-bottom-color: #7c015d;\r\n  border-bottom-width: 2;\r\n  margin: 5 0;\r\n  font-size: 20;\r\n  padding: 8 4;\r\n}\r\n", ""]);

;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/auth/auth.component.ts");
/* harmony import */ var _challenges_today_today_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/challenges/today/today.component.ts");
/* harmony import */ var _challenges_current_challenge_current_challenge_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/challenges/current-challenge/current-challenge.component.ts");
/* harmony import */ var _challenges_challenge_edit_challenge_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/challenges/challenge-edit/challenge-edit.component.ts");
/* harmony import */ var _challenges_challenge_tabs_challenge_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/challenges/challenge-tabs/challenge-tabs.component.ts");







var routes = [
    { path: "", component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"] },
    { path: "today", component: _challenges_today_today_component__WEBPACK_IMPORTED_MODULE_3__["TodayComponent"] },
    { path: "current-challenge", component: _challenges_current_challenge_current_challenge_component__WEBPACK_IMPORTED_MODULE_4__["CurrentChallengeComponent"] },
    { path: "edit-challenge", component: _challenges_challenge_edit_challenge_edit_component__WEBPACK_IMPORTED_MODULE_5__["ChallengeEditComponent"] },
    { path: "challenges", component: _challenges_challenge_tabs_challenge_tabs_component__WEBPACK_IMPORTED_MODULE_6__["ChallengeTabsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <FlexboxLayout flexDirection=\"column\">\r\n  <ns-challenge-edit (input)=\"onChallengeInput($event)\"></ns-challenge-edit>\r\n  <ns-current-challenge [challenges]=\"activeChallenges\"></ns-current-challenge>\r\n</FlexboxLayout>\r\n -->\r\n\r\n<StackLayout>\r\n<!--   <router-outlet></router-outlet> -->\r\n<page-router-outlet></page-router-outlet>\r\n</StackLayout>\r\n"

/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-app",
            template: __webpack_require__("./app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/nativescript.module");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/forms");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/app.component.ts");
/* harmony import */ var _challenges_current_challenge_current_challenge_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/challenges/current-challenge/current-challenge.component.ts");
/* harmony import */ var _challenges_challenge_edit_challenge_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/challenges/challenge-edit/challenge-edit.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/auth/auth.component.ts");
/* harmony import */ var _challenges_today_today_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/challenges/today/today.component.ts");
/* harmony import */ var _challenges_challenge_tabs_challenge_tabs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./app/challenges/challenge-tabs/challenge-tabs.component.ts");







// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";




var nsNgCoreImport_Generated = __webpack_require__("@angular/core");
var NSLazyModulesLoader_Generated = /** @class */ (function () {
    function NSLazyModulesLoader_Generated(_compiler, config) {
        this._compiler = _compiler;
        this._config = config || {
            factoryPathPrefix: '',
            factoryPathSuffix: '.ngfactory',
        };
    }
    NSLazyModulesLoader_Generated.prototype.load = function (path) {
        var offlineMode = this._compiler instanceof nsNgCoreImport_Generated.Compiler;
        return offlineMode ? this.loadFactory(path) : this.loadAndCompile(path);
    };
    NSLazyModulesLoader_Generated.prototype.loadAndCompile = function (path) {
        var _this = this;
        var _a = path.split('#'), module = _a[0], exportName = _a[1];
        if (exportName === undefined) {
            exportName = 'default';
        }
        return __webpack_require__("../$$_lazy_route_resource lazy recursive")(module)
            .then(function (module) { return module[exportName]; })
            .then(function (type) { return _this.checkNotEmpty(type, module, exportName); })
            .then(function (type) { return _this._compiler.compileModuleAsync(type); });
    };
    NSLazyModulesLoader_Generated.prototype.loadFactory = function (path) {
        var _this = this;
        var _a = path.split('#'), module = _a[0], exportName = _a[1];
        var factoryClassSuffix = 'NgFactory';
        if (exportName === undefined) {
            exportName = 'default';
            factoryClassSuffix = '';
        }
        return __webpack_require__("../$$_lazy_route_resource lazy recursive")(this._config.factoryPathPrefix + module + this._config.factoryPathSuffix)
            .then(function (module) { return module[exportName + factoryClassSuffix]; })
            .then(function (factory) { return _this.checkNotEmpty(factory, module, exportName); });
    };
    NSLazyModulesLoader_Generated.prototype.checkNotEmpty = function (value, modulePath, exportName) {
        if (!value) {
            throw new Error("Cannot find '" + exportName + "' in '" + modulePath + "'");
        }
        return value;
    };
    NSLazyModulesLoader_Generated = __decorate([
        nsNgCoreImport_Generated.Injectable(),
        __param(1, nsNgCoreImport_Generated.Optional()),
        __metadata("design:paramtypes", [nsNgCoreImport_Generated.Compiler, nsNgCoreImport_Generated.SystemJsNgModuleLoaderConfig])
    ], NSLazyModulesLoader_Generated);
    return NSLazyModulesLoader_Generated;
}());
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            imports: [nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"], nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NativeScriptFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _challenges_current_challenge_current_challenge_component__WEBPACK_IMPORTED_MODULE_5__["CurrentChallengeComponent"],
                _challenges_challenge_edit_challenge_edit_component__WEBPACK_IMPORTED_MODULE_6__["ChallengeEditComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"],
                _challenges_today_today_component__WEBPACK_IMPORTED_MODULE_8__["TodayComponent"],
                _challenges_challenge_tabs_challenge_tabs_component__WEBPACK_IMPORTED_MODULE_9__["ChallengeTabsComponent"]
            ],
            providers: [{ provide: nsNgCoreImport_Generated.NgModuleFactoryLoader, useClass: NSLazyModulesLoader_Generated }],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/auth/auth.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<Button\r\n  text=\"auth works\"\r\n  class=\"btn btn-primary\"\r\n  nsRouterLink=\"/challenges\"\r\n  [clearHistory]=\"true\"\r\n></Button>\r\n"

/***/ }),

/***/ "./app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);


var AuthComponent = /** @class */ (function () {
    function AuthComponent(router) {
        this.router = router;
    }
    AuthComponent.prototype.ngOnInit = function () { };
    AuthComponent.prototype.goSignin = function () {
        // clear history to remove caching of previous page in the stack
        this.router.navigate(["/today"], { clearHistory: true });
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-auth",
            template: __webpack_require__("./app/auth/auth.component.html"),
            styles: [__webpack_require__("./app/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./app/challenges/challenge-edit/challenge-edit.component.css":
/***/ (function(module, exports) {

module.exports = "TextField {\r\n  width: 66%;\r\n}\r\n\r\nbutton {\r\n  width: 33%;\r\n}\r\n"

/***/ }),

/***/ "./app/challenges/challenge-edit/challenge-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <FlexboxLayout jusityContent=\"space-between\">\r\n  <TextField\r\n    class=\"form-control\"\r\n    hint=\"Challenge title\"\r\n    [(ngModel)]=\"challengeDescription\"\r\n  ></TextField>\r\n  <Button class=\"btn\" (tap)=\"onSetChallenge()\" text=\"Set Challenge\"></Button>\r\n</FlexboxLayout>\r\n -->\r\n<ns-action-bar [title]=\"'Challenge edit'\"></ns-action-bar>\r\n <FlexboxLayout jusityContent=\"space-between\">\r\n  <Label text=\"edit page\"></Label>\r\n</FlexboxLayout>\r\n"

/***/ }),

/***/ "./app/challenges/challenge-edit/challenge-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeEditComponent", function() { return ChallengeEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var ChallengeEditComponent = /** @class */ (function () {
    function ChallengeEditComponent() {
    }
    ChallengeEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-challenge-edit",
            template: __webpack_require__("./app/challenges/challenge-edit/challenge-edit.component.html"),
            styles: [__webpack_require__("./app/challenges/challenge-edit/challenge-edit.component.css")]
        })
    ], ChallengeEditComponent);
    return ChallengeEditComponent;
}());



/***/ }),

/***/ "./app/challenges/challenge-tabs/challenge-tabs.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/challenges/challenge-tabs/challenge-tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<TabView>\n  <StackLayout *tabItem=\"{ title: 'Today' }\">\n    <Label text=\"Tab 1\"></Label>\n  </StackLayout>\n  <StackLayout *tabItem=\"{ title: 'Current Challenge' }\">\n    <Label text=\"Tab 2\"></Label>\n  </StackLayout>\n</TabView>\n"

/***/ }),

/***/ "./app/challenges/challenge-tabs/challenge-tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeTabsComponent", function() { return ChallengeTabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var ChallengeTabsComponent = /** @class */ (function () {
    function ChallengeTabsComponent() {
    }
    ChallengeTabsComponent.prototype.ngOnInit = function () {
    };
    ChallengeTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-challenge-tabs',
            template: __webpack_require__("./app/challenges/challenge-tabs/challenge-tabs.component.html"),
            styles: [__webpack_require__("./app/challenges/challenge-tabs/challenge-tabs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChallengeTabsComponent);
    return ChallengeTabsComponent;
}());



/***/ }),

/***/ "./app/challenges/current-challenge/current-challenge.component.css":
/***/ (function(module, exports) {

module.exports = ".title {\r\n  font-size: 26;\r\n  text-align: center;\r\n  color: #7c015d;\r\n  font-weight: bold;\r\n  margin-top: 10;\r\n}\r\n"

/***/ }),

/***/ "./app/challenges/current-challenge/current-challenge.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <ListView\r\n  [items]=\"challenges\"\r\n  (itemTap)=\"onItemTap($event)\"\r\n  iosEstimatedRowHeight=\"65\"\r\n>\r\n  <ng-template let-challenge=\"item\" let-i=\"index\">\r\n    <GirdLayout rows=\"40,20\" colums=\"50,*\">\r\n      <Label [text]=\"i\" row=\"0\" col=\"0\" rowSpan=\"2\"></Label>\r\n      <Label [text]=\"challenge\" row=\"0\" col=\"1\"></Label>\r\n      <Label text=\"Item content row 2\" row=\"1\" col=\"1\"></Label>\r\n    </GirdLayout>\r\n  </ng-template>\r\n</ListView> -->\r\n\r\n<!-- <ScrollView>\r\n    <StackLayout>\r\n      <Label\r\n        class=\"title\"\r\n        [text]=\"currentChallenge\"\r\n        horizontalAlignment=\"center\"\r\n        *ngFor=\"let currentChallenge of challenges\"\r\n      ></Label>\r\n    </StackLayout>\r\n  </ScrollView> -->\r\n<ns-action-bar [title]=\"'Current challenge'\"></ns-action-bar>\r\n<StackLayout>\r\n  <Label\r\n    class=\"title\"\r\n    text=\"The current challenge\"\r\n    horizontalAlignment=\"center\"\r\n  ></Label>\r\n  <Button text=\"Edit\" (tap)=\"onEdit()\"></Button>\r\n</StackLayout>\r\n"

/***/ }),

/***/ "./app/challenges/current-challenge/current-challenge.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentChallengeComponent", function() { return CurrentChallengeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);


var CurrentChallengeComponent = /** @class */ (function () {
    function CurrentChallengeComponent(router) {
        this.router = router;
    }
    CurrentChallengeComponent.prototype.onEdit = function () {
        this.router.navigate(['/edit-challenge'], {
            transition: { name: 'slideLeft' }
        });
    };
    CurrentChallengeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-current-challenge",
            template: __webpack_require__("./app/challenges/current-challenge/current-challenge.component.html"),
            styles: [__webpack_require__("./app/challenges/current-challenge/current-challenge.component.css")]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"]])
    ], CurrentChallengeComponent);
    return CurrentChallengeComponent;
}());



/***/ }),

/***/ "./app/challenges/today/today.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/challenges/today/today.component.html":
/***/ (function(module, exports) {

module.exports = "<ns-action-bar\r\n  title=\"Today's Challenge\"\r\n  [showBackButton]=\"false\"\r\n></ns-action-bar>\r\n<StackLayout>\r\n  <Label text=\"Today\"></Label>\r\n  <Button\r\n    text=\"today workds\"\r\n    class=\"btn btn-primary\"\r\n    nsRouterLink=\"/current-challenge\"\r\n    pageTransition=\"slideLeft\"\r\n  ></Button>\r\n</StackLayout>\r\n"

/***/ }),

/***/ "./app/challenges/today/today.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodayComponent", function() { return TodayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var TodayComponent = /** @class */ (function () {
    function TodayComponent() {
    }
    TodayComponent.prototype.ngOnInit = function () {
    };
    TodayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-today',
            template: __webpack_require__("./app/challenges/today/today.component.html"),
            styles: [__webpack_require__("./app/challenges/today/today.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TodayComponent);
    return TodayComponent;
}());



/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-angular/platform");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.ts");

        let applicationCheckPlatform = __webpack_require__("tns-core-modules/application");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("tns-core-modules/ui/frame");
__webpack_require__("tns-core-modules/ui/frame/activity");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__initialHmrUpdate = true;
            global.__hmrSyncBackup = global.__onLiveSync;

            global.__onLiveSync = function () {
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                if (global.__initialHmrUpdate) {
                    return;
                }

                setTimeout(() => {
                    global.__hmrSyncBackup({ type, path });
                });
            };

            hmrUpdate().then(() => {
                global.__initialHmrUpdate = false;
            })
        }
        
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        

var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app/app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app/app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}
// A traditional NativeScript application starts by initializing global objects, setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together, so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "nativescript-angular/forms":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/forms");

/***/ }),

/***/ "nativescript-angular/nativescript.module":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/nativescript.module");

/***/ }),

/***/ "nativescript-angular/platform":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/platform");

/***/ }),

/***/ "nativescript-angular/router":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/router");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system");

/***/ }),

/***/ "tns-core-modules/ui/frame":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame");

/***/ }),

/***/ "tns-core-modules/ui/frame/activity":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame/activity");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2UtZWRpdC9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS1lZGl0L2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS1lZGl0L2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2UtdGFicy9jaGFsbGVuZ2UtdGFicy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS10YWJzL2NoYWxsZW5nZS10YWJzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS10YWJzL2NoYWxsZW5nZS10YWJzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jdXJyZW50LWNoYWxsZW5nZS9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2N1cnJlbnQtY2hhbGxlbmdlL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2N1cnJlbnQtY2hhbGxlbmdlL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy90b2RheS90b2RheS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL3RvZGF5L3RvZGF5LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL3RvZGF5L3RvZGF5LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvYWN0aXZpdHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLDRDQUE0QyxXQUFXO0FBQ3ZEO0FBQ0E7QUFDQSx5RTs7Ozs7OztBQ1pBLHlFQUEyQixtQkFBTyxDQUFDLGdEQUFnRDtBQUNuRjtBQUNBLFVBQVUsbUJBQU8sQ0FBQyxvR0FBK0Y7O0FBRWpIO0FBQ0EsY0FBYyxRQUFTLDJmQUEyZiwwQkFBMEIsc0JBQXNCLDRCQUE0QixtQkFBbUIsa0JBQWtCLG9CQUFvQix5QkFBeUIsa0JBQWtCLEtBQUssdUJBQXVCLG1DQUFtQyw2QkFBNkIsa0JBQWtCLG9CQUFvQixtQkFBbUIsS0FBSzs7QUFFNTFCO0FBQ0EsUUFBUSxJQUFVO0FBQ2xCO0FBQ0E7QUFDQSwrQkFBK0IsbUNBQW1DO0FBQ2xFLFNBQVM7QUFDVDs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFDOEI7QUFHakI7QUFDYztBQUNtQztBQUNUO0FBQ0E7QUFFOUYsSUFBTSxNQUFNLEdBQVc7SUFDckIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxrRUFBYSxFQUFFO0lBQ3RDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0ZBQWMsRUFBRTtJQUM1QyxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsbUhBQXlCLEVBQUU7SUFDbkUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLDBHQUFzQixFQUFFO0lBQzdELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsMEdBQXNCLEVBQUU7Q0FDMUQsQ0FBQztBQU1GO0lBQUE7SUFBK0IsQ0FBQztJQUFu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Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHpELDBDOzs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7QUNBQSxxRTs7Ozs7OztBQ0FBLDBEOzs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLGlFOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSxzRDs7Ozs7OztBQ0FBLCtEOzs7Ozs7O0FDQUEsb0UiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gXCIuLi8kJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgcmVjdXJzaXZlXCI7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSFuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiksIFwiXCIpO1xuXG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxyXFxuSW4gTmF0aXZlU2NyaXB0LCB0aGUgYXBwLmNzcyBmaWxlIGlzIHdoZXJlIHlvdSBwbGFjZSBDU1MgcnVsZXMgdGhhdFxcclxcbnlvdSB3b3VsZCBsaWtlIHRvIGFwcGx5IHRvIHlvdXIgZW50aXJlIGFwcGxpY2F0aW9uLiBDaGVjayBvdXRcXHJcXG5odHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL3N0eWxpbmcgZm9yIGEgZnVsbCBsaXN0IG9mIHRoZSBDU1NcXHJcXG5zZWxlY3RvcnMgYW5kIHByb3BlcnRpZXMgeW91IGNhbiB1c2UgdG8gc3R5bGUgVUkgY29tcG9uZW50cy5cXHJcXG5cXHJcXG4vKlxcclxcbkluIG1hbnkgY2FzZXMgeW91IG1heSB3YW50IHRvIHVzZSB0aGUgTmF0aXZlU2NyaXB0IGNvcmUgdGhlbWUgaW5zdGVhZFxcclxcbm9mIHdyaXRpbmcgeW91ciBvd24gQ1NTIHJ1bGVzLiBGb3IgYSBmdWxsIGxpc3Qgb2YgY2xhc3MgbmFtZXMgaW4gdGhlIHRoZW1lXFxyXFxucmVmZXIgdG8gaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS90aGVtZS5cXHJcXG4qL1xcclxcblxcclxcbi5idG4ge1xcclxcbiAgYmFja2dyb3VuZDogIzdjMDE1ZDtcXHJcXG4gIGJvcmRlci13aWR0aDogMTtcXHJcXG4gIGJvcmRlci1jb2xvcjogIzdjMDE1ZDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogNSAxMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwJTtcXHJcXG4gIG1hcmdpbjogNSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1jb250cm9sIHtcXHJcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM3YzAxNWQ7XFxyXFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAyO1xcclxcbiAgbWFyZ2luOiA1IDA7XFxyXFxuICBmb250LXNpemU6IDIwO1xcclxcbiAgcGFkZGluZzogOCA0O1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IEF1dGhDb21wb25lbnQgfSBmcm9tIFwiLi9hdXRoL2F1dGguY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRvZGF5Q29tcG9uZW50IH0gZnJvbSBcIi4vY2hhbGxlbmdlcy90b2RheS90b2RheS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ3VycmVudENoYWxsZW5nZUNvbXBvbmVudCB9IGZyb20gXCIuL2NoYWxsZW5nZXMvY3VycmVudC1jaGFsbGVuZ2UvY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENoYWxsZW5nZUVkaXRDb21wb25lbnQgfSBmcm9tIFwiLi9jaGFsbGVuZ2VzL2NoYWxsZW5nZS1lZGl0L2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VUYWJzQ29tcG9uZW50IH0gZnJvbSBcIi4vY2hhbGxlbmdlcy9jaGFsbGVuZ2UtdGFicy9jaGFsbGVuZ2UtdGFicy5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBBdXRoQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiBcInRvZGF5XCIsIGNvbXBvbmVudDogVG9kYXlDb21wb25lbnQgfSxcclxuICB7IHBhdGg6IFwiY3VycmVudC1jaGFsbGVuZ2VcIiwgY29tcG9uZW50OiBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiBcImVkaXQtY2hhbGxlbmdlXCIsIGNvbXBvbmVudDogQ2hhbGxlbmdlRWRpdENvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogXCJjaGFsbGVuZ2VzXCIsIGNvbXBvbmVudDogQ2hhbGxlbmdlVGFic0NvbXBvbmVudCB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcclxuICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7fVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSA8RmxleGJveExheW91dCBmbGV4RGlyZWN0aW9uPVxcXCJjb2x1bW5cXFwiPlxcclxcbiAgPG5zLWNoYWxsZW5nZS1lZGl0IChpbnB1dCk9XFxcIm9uQ2hhbGxlbmdlSW5wdXQoJGV2ZW50KVxcXCI+PC9ucy1jaGFsbGVuZ2UtZWRpdD5cXHJcXG4gIDxucy1jdXJyZW50LWNoYWxsZW5nZSBbY2hhbGxlbmdlc109XFxcImFjdGl2ZUNoYWxsZW5nZXNcXFwiPjwvbnMtY3VycmVudC1jaGFsbGVuZ2U+XFxyXFxuPC9GbGV4Ym94TGF5b3V0PlxcclxcbiAtLT5cXHJcXG5cXHJcXG48U3RhY2tMYXlvdXQ+XFxyXFxuPCEtLSAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD4gLS0+XFxyXFxuPHBhZ2Utcm91dGVyLW91dGxldD48L3BhZ2Utcm91dGVyLW91dGxldD5cXHJcXG48L1N0YWNrTGF5b3V0PlxcclxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vYXBwLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEN1cnJlbnRDaGFsbGVuZ2VDb21wb25lbnQgfSBmcm9tIFwiLi9jaGFsbGVuZ2VzL2N1cnJlbnQtY2hhbGxlbmdlL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vY2hhbGxlbmdlcy9jaGFsbGVuZ2UtZWRpdC9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnRcIjtcclxuXHJcbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEh0dHBDbGllbnQgd3JhcHBlclxyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XHJcbmltcG9ydCB7IEF1dGhDb21wb25lbnQgfSBmcm9tIFwiLi9hdXRoL2F1dGguY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRvZGF5Q29tcG9uZW50IH0gZnJvbSBcIi4vY2hhbGxlbmdlcy90b2RheS90b2RheS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ2hhbGxlbmdlVGFic0NvbXBvbmVudCB9IGZyb20gXCIuL2NoYWxsZW5nZXMvY2hhbGxlbmdlLXRhYnMvY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdE1vZHVsZSwgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsIEFwcFJvdXRpbmdNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQXBwQ29tcG9uZW50LFxyXG4gICAgQ3VycmVudENoYWxsZW5nZUNvbXBvbmVudCxcclxuICAgIENoYWxsZW5nZUVkaXRDb21wb25lbnQsXHJcbiAgICBBdXRoQ29tcG9uZW50LFxyXG4gICAgVG9kYXlDb21wb25lbnQsXHJcbiAgICBDaGFsbGVuZ2VUYWJzQ29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtdLFxyXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxyXG59KVxyXG4vKlxyXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXHJcbiovXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxCdXR0b25cXHJcXG4gIHRleHQ9XFxcImF1dGggd29ya3NcXFwiXFxyXFxuICBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIlxcclxcbiAgbnNSb3V0ZXJMaW5rPVxcXCIvY2hhbGxlbmdlc1xcXCJcXHJcXG4gIFtjbGVhckhpc3RvcnldPVxcXCJ0cnVlXFxcIlxcclxcbj48L0J1dHRvbj5cXHJcXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm5zLWF1dGhcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2F1dGguY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vYXV0aC5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykge31cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICBnb1NpZ25pbigpIHtcclxuICAgIC8vIGNsZWFyIGhpc3RvcnkgdG8gcmVtb3ZlIGNhY2hpbmcgb2YgcHJldmlvdXMgcGFnZSBpbiB0aGUgc3RhY2tcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi90b2RheVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJUZXh0RmllbGQge1xcclxcbiAgd2lkdGg6IDY2JTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAzMyU7XFxyXFxufVxcclxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0gPEZsZXhib3hMYXlvdXQganVzaXR5Q29udGVudD1cXFwic3BhY2UtYmV0d2VlblxcXCI+XFxyXFxuICA8VGV4dEZpZWxkXFxyXFxuICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxyXFxuICAgIGhpbnQ9XFxcIkNoYWxsZW5nZSB0aXRsZVxcXCJcXHJcXG4gICAgWyhuZ01vZGVsKV09XFxcImNoYWxsZW5nZURlc2NyaXB0aW9uXFxcIlxcclxcbiAgPjwvVGV4dEZpZWxkPlxcclxcbiAgPEJ1dHRvbiBjbGFzcz1cXFwiYnRuXFxcIiAodGFwKT1cXFwib25TZXRDaGFsbGVuZ2UoKVxcXCIgdGV4dD1cXFwiU2V0IENoYWxsZW5nZVxcXCI+PC9CdXR0b24+XFxyXFxuPC9GbGV4Ym94TGF5b3V0PlxcclxcbiAtLT5cXHJcXG48bnMtYWN0aW9uLWJhciBbdGl0bGVdPVxcXCInQ2hhbGxlbmdlIGVkaXQnXFxcIj48L25zLWFjdGlvbi1iYXI+XFxyXFxuIDxGbGV4Ym94TGF5b3V0IGp1c2l0eUNvbnRlbnQ9XFxcInNwYWNlLWJldHdlZW5cXFwiPlxcclxcbiAgPExhYmVsIHRleHQ9XFxcImVkaXQgcGFnZVxcXCI+PC9MYWJlbD5cXHJcXG48L0ZsZXhib3hMYXlvdXQ+XFxyXFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibnMtY2hhbGxlbmdlLWVkaXRcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudC5jc3NcIl0sXHJcbiAgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGFsbGVuZ2VFZGl0Q29tcG9uZW50IHt9XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJcIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8VGFiVmlldz5cXG4gIDxTdGFja0xheW91dCAqdGFiSXRlbT1cXFwieyB0aXRsZTogJ1RvZGF5JyB9XFxcIj5cXG4gICAgPExhYmVsIHRleHQ9XFxcIlRhYiAxXFxcIj48L0xhYmVsPlxcbiAgPC9TdGFja0xheW91dD5cXG4gIDxTdGFja0xheW91dCAqdGFiSXRlbT1cXFwieyB0aXRsZTogJ0N1cnJlbnQgQ2hhbGxlbmdlJyB9XFxcIj5cXG4gICAgPExhYmVsIHRleHQ9XFxcIlRhYiAyXFxcIj48L0xhYmVsPlxcbiAgPC9TdGFja0xheW91dD5cXG48L1RhYlZpZXc+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1jaGFsbGVuZ2UtdGFicycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGFsbGVuZ2UtdGFicy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoYWxsZW5nZS10YWJzLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDaGFsbGVuZ2VUYWJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIudGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAyNjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjN2MwMTVkO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBtYXJnaW4tdG9wOiAxMDtcXHJcXG59XFxyXFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSA8TGlzdFZpZXdcXHJcXG4gIFtpdGVtc109XFxcImNoYWxsZW5nZXNcXFwiXFxyXFxuICAoaXRlbVRhcCk9XFxcIm9uSXRlbVRhcCgkZXZlbnQpXFxcIlxcclxcbiAgaW9zRXN0aW1hdGVkUm93SGVpZ2h0PVxcXCI2NVxcXCJcXHJcXG4+XFxyXFxuICA8bmctdGVtcGxhdGUgbGV0LWNoYWxsZW5nZT1cXFwiaXRlbVxcXCIgbGV0LWk9XFxcImluZGV4XFxcIj5cXHJcXG4gICAgPEdpcmRMYXlvdXQgcm93cz1cXFwiNDAsMjBcXFwiIGNvbHVtcz1cXFwiNTAsKlxcXCI+XFxyXFxuICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiaVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIHJvd1NwYW49XFxcIjJcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiY2hhbGxlbmdlXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICA8TGFiZWwgdGV4dD1cXFwiSXRlbSBjb250ZW50IHJvdyAyXFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgPC9HaXJkTGF5b3V0PlxcclxcbiAgPC9uZy10ZW1wbGF0ZT5cXHJcXG48L0xpc3RWaWV3PiAtLT5cXHJcXG5cXHJcXG48IS0tIDxTY3JvbGxWaWV3PlxcclxcbiAgICA8U3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgPExhYmVsXFxyXFxuICAgICAgICBjbGFzcz1cXFwidGl0bGVcXFwiXFxyXFxuICAgICAgICBbdGV4dF09XFxcImN1cnJlbnRDaGFsbGVuZ2VcXFwiXFxyXFxuICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiXFxyXFxuICAgICAgICAqbmdGb3I9XFxcImxldCBjdXJyZW50Q2hhbGxlbmdlIG9mIGNoYWxsZW5nZXNcXFwiXFxyXFxuICAgICAgPjwvTGFiZWw+XFxyXFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICA8L1Njcm9sbFZpZXc+IC0tPlxcclxcbjxucy1hY3Rpb24tYmFyIFt0aXRsZV09XFxcIidDdXJyZW50IGNoYWxsZW5nZSdcXFwiPjwvbnMtYWN0aW9uLWJhcj5cXHJcXG48U3RhY2tMYXlvdXQ+XFxyXFxuICA8TGFiZWxcXHJcXG4gICAgY2xhc3M9XFxcInRpdGxlXFxcIlxcclxcbiAgICB0ZXh0PVxcXCJUaGUgY3VycmVudCBjaGFsbGVuZ2VcXFwiXFxyXFxuICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCJcXHJcXG4gID48L0xhYmVsPlxcclxcbiAgPEJ1dHRvbiB0ZXh0PVxcXCJFZGl0XFxcIiAodGFwKT1cXFwib25FZGl0KClcXFwiPjwvQnV0dG9uPlxcclxcbjwvU3RhY2tMYXlvdXQ+XFxyXFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibnMtY3VycmVudC1jaGFsbGVuZ2VcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEN1cnJlbnRDaGFsbGVuZ2VDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7fVxyXG5cclxuICBvbkVkaXQoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lZGl0LWNoYWxsZW5nZSddLCB7XHJcbiAgICAgIHRyYW5zaXRpb246IHsgbmFtZTogJ3NsaWRlTGVmdCcgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJcIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8bnMtYWN0aW9uLWJhclxcclxcbiAgdGl0bGU9XFxcIlRvZGF5J3MgQ2hhbGxlbmdlXFxcIlxcclxcbiAgW3Nob3dCYWNrQnV0dG9uXT1cXFwiZmFsc2VcXFwiXFxyXFxuPjwvbnMtYWN0aW9uLWJhcj5cXHJcXG48U3RhY2tMYXlvdXQ+XFxyXFxuICA8TGFiZWwgdGV4dD1cXFwiVG9kYXlcXFwiPjwvTGFiZWw+XFxyXFxuICA8QnV0dG9uXFxyXFxuICAgIHRleHQ9XFxcInRvZGF5IHdvcmtkc1xcXCJcXHJcXG4gICAgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCJcXHJcXG4gICAgbnNSb3V0ZXJMaW5rPVxcXCIvY3VycmVudC1jaGFsbGVuZ2VcXFwiXFxyXFxuICAgIHBhZ2VUcmFuc2l0aW9uPVxcXCJzbGlkZUxlZnRcXFwiXFxyXFxuICA+PC9CdXR0b24+XFxyXFxuPC9TdGFja0xheW91dD5cXHJcXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25zLXRvZGF5JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdG9kYXkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RvZGF5LmNvbXBvbmVudC5jc3MnXSxcclxuICBcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvZGF5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iLCIvLyB0aGlzIGltcG9ydCBzaG91bGQgYmUgZmlyc3QgaW4gb3JkZXIgdG8gbG9hZCBzb21lIHJlcXVpcmVkIHNldHRpbmdzIChsaWtlIGdsb2JhbHMgYW5kIHJlZmxlY3QtbWV0YWRhdGEpXHJcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xyXG5cclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwL2FwcC5tb2R1bGVcIjtcclxuXHJcbi8vIEEgdHJhZGl0aW9uYWwgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIHN0YXJ0cyBieSBpbml0aWFsaXppbmcgZ2xvYmFsIG9iamVjdHMsIHNldHRpbmcgdXAgZ2xvYmFsIENTUyBydWxlcywgY3JlYXRpbmcsIGFuZCBuYXZpZ2F0aW5nIHRvIHRoZSBtYWluIHBhZ2UuXHJcbi8vIEFuZ3VsYXIgYXBwbGljYXRpb25zIG5lZWQgdG8gdGFrZSBjYXJlIG9mIHRoZWlyIG93biBpbml0aWFsaXphdGlvbjogbW9kdWxlcywgY29tcG9uZW50cywgZGlyZWN0aXZlcywgcm91dGVzLCBESSBwcm92aWRlcnMuXHJcbi8vIEEgTmF0aXZlU2NyaXB0IEFuZ3VsYXIgYXBwIG5lZWRzIHRvIG1ha2UgYm90aCBwYXJhZGlnbXMgd29yayB0b2dldGhlciwgc28gd2UgcHJvdmlkZSBhIHdyYXBwZXIgcGxhdGZvcm0gb2JqZWN0LCBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMsXHJcbi8vIHRoYXQgc2V0cyB1cCBhIE5hdGl2ZVNjcmlwdCBhcHBsaWNhdGlvbiBhbmQgY2FuIGJvb3RzdHJhcCB0aGUgQW5ndWxhciBmcmFtZXdvcmsuXHJcbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2FjdGl2aXR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9