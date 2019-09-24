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
exports.push([module.i, "/*\nIn NativeScript, the app.css file is where you place CSS rules that\nyou would like to apply to your entire application. Check out\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\nselectors and properties you can use to style UI components.\n\n/*\nIn many cases you may want to use the NativeScript core theme instead\nof writing your own CSS rules. For a full list of class names in the theme\nrefer to http://docs.nativescript.org/ui/theme.\n*/\n\n.btn {\n  background: #7c015d;\n  border-width: 1;\n  border-color: #7c015d;\n  color: white;\n  width: 100%;\n  padding: 5 10;\n  border-radius: 30%;\n  margin: 5 0;\n}\n\n.form-control {\n  border-bottom-color: #7c015d;\n  border-bottom-width: 2;\n  margin: 5 0;\n  font-size: 20;\n  padding: 8 4;\n}\n", ""]);

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/auth/auth.component.ts");
/* harmony import */ var _challenges_today_today_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/challenges/today/today.component.ts");




var routes = [
    { path: '', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"] },
    { path: 'today', component: _challenges_today_today_component__WEBPACK_IMPORTED_MODULE_3__["TodayComponent"] }
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

module.exports = "<!-- <FlexboxLayout flexDirection=\"column\">\n  <ns-challenge-edit (input)=\"onChallengeInput($event)\"></ns-challenge-edit>\n  <ns-current-challenge [challenges]=\"activeChallenges\"></ns-current-challenge>\n</FlexboxLayout>\n -->\n\n<StackLayout>\n  <router-outlet></router-outlet>\n</StackLayout>\n"

/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/nativescript.module.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/forms/index.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/app.component.ts");
/* harmony import */ var _challenges_current_challenge_current_challenge_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/challenges/current-challenge/current-challenge.component.ts");
/* harmony import */ var _challenges_challenge_edit_challenge_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/challenges/challenge-edit/challenge-edit.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/auth/auth.component.ts");
/* harmony import */ var _challenges_today_today_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/challenges/today/today.component.ts");







// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";


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
                _challenges_today_today_component__WEBPACK_IMPORTED_MODULE_8__["TodayComponent"]
            ],
            providers: [],
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

module.exports = "<Button text=\"auth works\" class=\"btn btn-primary\"></Button>"

/***/ }),

/***/ "./app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-auth',
            template: __webpack_require__("./app/auth/auth.component.html"),
            styles: [__webpack_require__("./app/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<!-- <FlexboxLayout jusityContent=\"space-between\">\n  <TextField\n    class=\"form-control\"\n    hint=\"Challenge title\"\n    [(ngModel)]=\"challengeDescription\"\n  ></TextField>\n  <Button class=\"btn\" (tap)=\"onSetChallenge()\" text=\"Set Challenge\"></Button>\n</FlexboxLayout>\n -->\n\n <FlexboxLayout jusityContent=\"space-between\">\n  <Label text=\"edit page\"></Label>\n</FlexboxLayout>\n"

/***/ }),

/***/ "./app/challenges/challenge-edit/challenge-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeEditComponent", function() { return ChallengeEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

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

/***/ "./app/challenges/current-challenge/current-challenge.component.css":
/***/ (function(module, exports) {

module.exports = ".title {\n  font-size: 26;\n  text-align: center;\n  color: #7c015d;\n  font-weight: bold;\n  margin-top: 10;\n}\n"

/***/ }),

/***/ "./app/challenges/current-challenge/current-challenge.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <ListView\n  [items]=\"challenges\"\n  (itemTap)=\"onItemTap($event)\"\n  iosEstimatedRowHeight=\"65\"\n>\n  <ng-template let-challenge=\"item\" let-i=\"index\">\n    <GirdLayout rows=\"40,20\" colums=\"50,*\">\n      <Label [text]=\"i\" row=\"0\" col=\"0\" rowSpan=\"2\"></Label>\n      <Label [text]=\"challenge\" row=\"0\" col=\"1\"></Label>\n      <Label text=\"Item content row 2\" row=\"1\" col=\"1\"></Label>\n    </GirdLayout>\n  </ng-template>\n</ListView> -->\n\n<!-- <ScrollView>\n    <StackLayout>\n      <Label\n        class=\"title\"\n        [text]=\"currentChallenge\"\n        horizontalAlignment=\"center\"\n        *ngFor=\"let currentChallenge of challenges\"\n      ></Label>\n    </StackLayout>\n  </ScrollView> -->\n\n<StackLayout>\n  <Label\n    class=\"title\"\n    text=\"the current challenge\"\n    horizontalAlignment=\"center\"\n  ></Label>\n</StackLayout>\n"

/***/ }),

/***/ "./app/challenges/current-challenge/current-challenge.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentChallengeComponent", function() { return CurrentChallengeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var CurrentChallengeComponent = /** @class */ (function () {
    function CurrentChallengeComponent() {
    }
    CurrentChallengeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-current-challenge",
            template: __webpack_require__("./app/challenges/current-challenge/current-challenge.component.html"),
            styles: [__webpack_require__("./app/challenges/current-challenge/current-challenge.component.css")]
        })
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

module.exports = "<StackLayout>\n  today works!\n</StackLayout>\n"

/***/ }),

/***/ "./app/challenges/today/today.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodayComponent", function() { return TodayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

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
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-angular/platform.js");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.ts");

        let applicationCheckPlatform = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/tns-core-modules/ui/frame/frame.js");
__webpack_require__("../node_modules/tns-core-modules/ui/frame/activity.js");
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
        
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        

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

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"main.js","android":{"v8Flags":"--expose_gc"}};

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2UtZWRpdC9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS1lZGl0L2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS1lZGl0L2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jdXJyZW50LWNoYWxsZW5nZS9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2N1cnJlbnQtY2hhbGxlbmdlL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2N1cnJlbnQtY2hhbGxlbmdlL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy90b2RheS90b2RheS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL3RvZGF5L3RvZGF5LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL3RvZGF5L3RvZGF5LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLHlFOzs7Ozs7O0FDWkEseUVBQTJCLG1CQUFPLENBQUMsZ0RBQWdEO0FBQ25GO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLG9HQUErRjs7QUFFakg7QUFDQSxjQUFjLFFBQVMsbWVBQW1lLHdCQUF3QixvQkFBb0IsMEJBQTBCLGlCQUFpQixnQkFBZ0Isa0JBQWtCLHVCQUF1QixnQkFBZ0IsR0FBRyxtQkFBbUIsaUNBQWlDLDJCQUEyQixnQkFBZ0Isa0JBQWtCLGlCQUFpQixHQUFHOztBQUVseUI7QUFDQSxRQUFRLElBQVU7QUFDbEI7QUFDQTtBQUNBLCtCQUErQixtQ0FBbUM7QUFDbEUsU0FBUztBQUNUOzs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFDOEI7QUFHakI7QUFDYztBQUVwRSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGtFQUFhLEVBQUU7SUFDdEMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnRkFBYyxFQUFFO0NBQy9DLENBQUM7QUFNRjtJQUFBO0lBQStCLENBQUM7SUFBbkIsZ0JBQWdCO1FBSjVCLDhEQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUM7U0FDcEMsQ0FBQztPQUNXLGdCQUFnQixDQUFHO0lBQUQsdUJBQUM7Q0FBQTtBQUFIOzs7Ozs7OztBQ2hCN0IsaVU7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQTBDO0FBTTFDO0lBQUE7SUFDQSxDQUFDO0lBRFksWUFBWTtRQUp4QiwrREFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIseURBQW1DO1NBQ3BDLENBQUM7T0FDVyxZQUFZLENBQ3hCO0lBQUQsbUJBQUM7Q0FBQTtBQUR3Qjs7Ozs7Ozs7O0FDTnpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJEO0FBQ21CO0FBQ1Q7QUFFYjtBQUNUO0FBQ3dEO0FBQ1Q7QUFFOUYsMkVBQTJFO0FBQzNFLHdFQUF3RTtBQUV4RSxrRkFBa0Y7QUFDbEYsbUZBQW1GO0FBQzdCO0FBQ2M7QUFrQnBFO0lBSEE7O01BRUU7SUFDRjtJQUF3QixDQUFDO0lBQVosU0FBUztRQWhCckIsOERBQVEsQ0FBQztZQUNSLFNBQVMsRUFBRSxDQUFDLDJEQUFZLENBQUM7WUFDekIsT0FBTyxFQUFFLENBQUMsMkZBQWtCLEVBQUUsa0ZBQXVCLEVBQUUsb0VBQWdCLENBQUM7WUFDeEUsWUFBWSxFQUFFO2dCQUNaLDJEQUFZO2dCQUNaLG1IQUF5QjtnQkFDekIsMEdBQXNCO2dCQUN0QixrRUFBYTtnQkFDYixnRkFBYzthQUNmO1lBQ0QsU0FBUyxFQUFFLEVBQUU7WUFDYixPQUFPLEVBQUUsQ0FBQyw4REFBZ0IsQ0FBQztTQUM1QixDQUFDO1FBQ0Y7O1VBRUU7T0FDVyxTQUFTLENBQUc7SUFBRCxnQkFBQztDQUFBO0FBQUg7Ozs7Ozs7O0FDakN0QixtQjs7Ozs7OztBQ0FBLGtGOzs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFrRDtBQU9sRDtJQUVFO0lBQWdCLENBQUM7SUFFakIsZ0NBQVEsR0FBUjtJQUNBLENBQUM7SUFMVSxhQUFhO1FBTHpCLCtEQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQiwrREFBb0M7O1NBRXJDLENBQUM7O09BQ1csYUFBYSxDQU96QjtJQUFELG9CQUFDO0NBQUE7QUFQeUI7Ozs7Ozs7O0FDUDFCLDZCQUE2QixpQkFBaUIsS0FBSyxnQkFBZ0IsaUJBQWlCLEtBQUssSzs7Ozs7OztBQ0F6RixxYTs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBMEM7QUFRMUM7SUFBQTtJQUFxQyxDQUFDO0lBQXpCLHNCQUFzQjtRQU5sQywrREFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3Qiw4RkFBOEM7O1NBRy9DLENBQUM7T0FDVyxzQkFBc0IsQ0FBRztJQUFELDZCQUFDO0NBQUE7QUFBSDs7Ozs7Ozs7QUNSbkMsMEJBQTBCLGtCQUFrQix1QkFBdUIsbUJBQW1CLHNCQUFzQixtQkFBbUIsR0FBRyxHOzs7Ozs7O0FDQWxJLGk1Qjs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBMEM7QUFRMUM7SUFBQTtJQUF3QyxDQUFDO0lBQTVCLHlCQUF5QjtRQU5yQywrREFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxvR0FBaUQ7O1NBR2xELENBQUM7T0FDVyx5QkFBeUIsQ0FBRztJQUFELGdDQUFDO0NBQUE7QUFBSDs7Ozs7Ozs7QUNSdEMsbUI7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBa0Q7QUFRbEQ7SUFFRTtJQUFnQixDQUFDO0lBRWpCLGlDQUFRLEdBQVI7SUFDQSxDQUFDO0lBTFUsY0FBYztRQU4xQiwrREFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsNEVBQXFDOztTQUd0QyxDQUFDOztPQUNXLGNBQWMsQ0FPMUI7SUFBRCxxQkFBQztDQUFBO0FBUDBCOzs7Ozs7Ozs7Ozs7OztBQ0wzQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0NBQW1COzs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxjQUF3SjtBQUMzQjtBQUM3SCwrREFBK0k7QUFDL0ksZ0RBQW1GO0FBQ25GLDJCQUF5RCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXVnaHQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSBcIi4uLyQkX2xhenlfcm91dGVfcmVzb3VyY2UgbGF6eSByZWN1cnNpdmVcIjsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0xIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSwgXCJcIik7XG5cbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG5JbiBOYXRpdmVTY3JpcHQsIHRoZSBhcHAuY3NzIGZpbGUgaXMgd2hlcmUgeW91IHBsYWNlIENTUyBydWxlcyB0aGF0XFxueW91IHdvdWxkIGxpa2UgdG8gYXBwbHkgdG8geW91ciBlbnRpcmUgYXBwbGljYXRpb24uIENoZWNrIG91dFxcbmh0dHA6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvc3R5bGluZyBmb3IgYSBmdWxsIGxpc3Qgb2YgdGhlIENTU1xcbnNlbGVjdG9ycyBhbmQgcHJvcGVydGllcyB5b3UgY2FuIHVzZSB0byBzdHlsZSBVSSBjb21wb25lbnRzLlxcblxcbi8qXFxuSW4gbWFueSBjYXNlcyB5b3UgbWF5IHdhbnQgdG8gdXNlIHRoZSBOYXRpdmVTY3JpcHQgY29yZSB0aGVtZSBpbnN0ZWFkXFxub2Ygd3JpdGluZyB5b3VyIG93biBDU1MgcnVsZXMuIEZvciBhIGZ1bGwgbGlzdCBvZiBjbGFzcyBuYW1lcyBpbiB0aGUgdGhlbWVcXG5yZWZlciB0byBodHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL3RoZW1lLlxcbiovXFxuXFxuLmJ0biB7XFxuICBiYWNrZ3JvdW5kOiAjN2MwMTVkO1xcbiAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgYm9yZGVyLWNvbG9yOiAjN2MwMTVkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA1IDEwO1xcbiAgYm9yZGVyLXJhZGl1czogMzAlO1xcbiAgbWFyZ2luOiA1IDA7XFxufVxcblxcbi5mb3JtLWNvbnRyb2wge1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzdjMDE1ZDtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDI7XFxuICBtYXJnaW46IDUgMDtcXG4gIGZvbnQtc2l6ZTogMjA7XFxuICBwYWRkaW5nOiA4IDQ7XFxufVxcblwiLCBcIlwiXSk7XG5cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9hcHAuY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgQXV0aENvbXBvbmVudCB9IGZyb20gJy4vYXV0aC9hdXRoLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvZGF5Q29tcG9uZW50IH0gZnJvbSAnLi9jaGFsbGVuZ2VzL3RvZGF5L3RvZGF5LmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDogQXV0aENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiAndG9kYXknLCBjb21wb25lbnQ6IFRvZGF5Q29tcG9uZW50IH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxyXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHt9XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIDxGbGV4Ym94TGF5b3V0IGZsZXhEaXJlY3Rpb249XFxcImNvbHVtblxcXCI+XFxuICA8bnMtY2hhbGxlbmdlLWVkaXQgKGlucHV0KT1cXFwib25DaGFsbGVuZ2VJbnB1dCgkZXZlbnQpXFxcIj48L25zLWNoYWxsZW5nZS1lZGl0PlxcbiAgPG5zLWN1cnJlbnQtY2hhbGxlbmdlIFtjaGFsbGVuZ2VzXT1cXFwiYWN0aXZlQ2hhbGxlbmdlc1xcXCI+PC9ucy1jdXJyZW50LWNoYWxsZW5nZT5cXG48L0ZsZXhib3hMYXlvdXQ+XFxuIC0tPlxcblxcbjxTdGFja0xheW91dD5cXG4gIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXG48L1N0YWNrTGF5b3V0PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2FwcC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ3VycmVudENoYWxsZW5nZUNvbXBvbmVudCB9IGZyb20gXCIuL2NoYWxsZW5nZXMvY3VycmVudC1jaGFsbGVuZ2UvY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDaGFsbGVuZ2VFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vY2hhbGxlbmdlcy9jaGFsbGVuZ2UtZWRpdC9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnRcIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSHR0cENsaWVudCB3cmFwcGVyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XG5pbXBvcnQgeyBBdXRoQ29tcG9uZW50IH0gZnJvbSBcIi4vYXV0aC9hdXRoLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVG9kYXlDb21wb25lbnQgfSBmcm9tIFwiLi9jaGFsbGVuZ2VzL3RvZGF5L3RvZGF5LmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0TW9kdWxlLCBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSwgQXBwUm91dGluZ01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50LFxuICAgIENoYWxsZW5nZUVkaXRDb21wb25lbnQsXG4gICAgQXV0aENvbXBvbmVudCxcbiAgICBUb2RheUNvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG4vKlxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiIsIm1vZHVsZS5leHBvcnRzID0gXCJcIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QnV0dG9uIHRleHQ9XFxcImF1dGggd29ya3NcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPjwvQnV0dG9uPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtYXV0aCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXV0aC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQXV0aENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiVGV4dEZpZWxkIHtcXHJcXG4gIHdpZHRoOiA2NiU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMzMlO1xcclxcbn1cXHJcXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIDxGbGV4Ym94TGF5b3V0IGp1c2l0eUNvbnRlbnQ9XFxcInNwYWNlLWJldHdlZW5cXFwiPlxcbiAgPFRleHRGaWVsZFxcbiAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcbiAgICBoaW50PVxcXCJDaGFsbGVuZ2UgdGl0bGVcXFwiXFxuICAgIFsobmdNb2RlbCldPVxcXCJjaGFsbGVuZ2VEZXNjcmlwdGlvblxcXCJcXG4gID48L1RleHRGaWVsZD5cXG4gIDxCdXR0b24gY2xhc3M9XFxcImJ0blxcXCIgKHRhcCk9XFxcIm9uU2V0Q2hhbGxlbmdlKClcXFwiIHRleHQ9XFxcIlNldCBDaGFsbGVuZ2VcXFwiPjwvQnV0dG9uPlxcbjwvRmxleGJveExheW91dD5cXG4gLS0+XFxuXFxuIDxGbGV4Ym94TGF5b3V0IGp1c2l0eUNvbnRlbnQ9XFxcInNwYWNlLWJldHdlZW5cXFwiPlxcbiAgPExhYmVsIHRleHQ9XFxcImVkaXQgcGFnZVxcXCI+PC9MYWJlbD5cXG48L0ZsZXhib3hMYXlvdXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibnMtY2hhbGxlbmdlLWVkaXRcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50LmNzc1wiXSxcbiAgXG59KVxuZXhwb3J0IGNsYXNzIENoYWxsZW5nZUVkaXRDb21wb25lbnQge31cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIudGl0bGUge1xcbiAgZm9udC1zaXplOiAyNjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjN2MwMTVkO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tdG9wOiAxMDtcXG59XFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSA8TGlzdFZpZXdcXG4gIFtpdGVtc109XFxcImNoYWxsZW5nZXNcXFwiXFxuICAoaXRlbVRhcCk9XFxcIm9uSXRlbVRhcCgkZXZlbnQpXFxcIlxcbiAgaW9zRXN0aW1hdGVkUm93SGVpZ2h0PVxcXCI2NVxcXCJcXG4+XFxuICA8bmctdGVtcGxhdGUgbGV0LWNoYWxsZW5nZT1cXFwiaXRlbVxcXCIgbGV0LWk9XFxcImluZGV4XFxcIj5cXG4gICAgPEdpcmRMYXlvdXQgcm93cz1cXFwiNDAsMjBcXFwiIGNvbHVtcz1cXFwiNTAsKlxcXCI+XFxuICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiaVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIHJvd1NwYW49XFxcIjJcXFwiPjwvTGFiZWw+XFxuICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiY2hhbGxlbmdlXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCI+PC9MYWJlbD5cXG4gICAgICA8TGFiZWwgdGV4dD1cXFwiSXRlbSBjb250ZW50IHJvdyAyXFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCI+PC9MYWJlbD5cXG4gICAgPC9HaXJkTGF5b3V0PlxcbiAgPC9uZy10ZW1wbGF0ZT5cXG48L0xpc3RWaWV3PiAtLT5cXG5cXG48IS0tIDxTY3JvbGxWaWV3PlxcbiAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgPExhYmVsXFxuICAgICAgICBjbGFzcz1cXFwidGl0bGVcXFwiXFxuICAgICAgICBbdGV4dF09XFxcImN1cnJlbnRDaGFsbGVuZ2VcXFwiXFxuICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiXFxuICAgICAgICAqbmdGb3I9XFxcImxldCBjdXJyZW50Q2hhbGxlbmdlIG9mIGNoYWxsZW5nZXNcXFwiXFxuICAgICAgPjwvTGFiZWw+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuICA8L1Njcm9sbFZpZXc+IC0tPlxcblxcbjxTdGFja0xheW91dD5cXG4gIDxMYWJlbFxcbiAgICBjbGFzcz1cXFwidGl0bGVcXFwiXFxuICAgIHRleHQ9XFxcInRoZSBjdXJyZW50IGNoYWxsZW5nZVxcXCJcXG4gICAgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIlxcbiAgPjwvTGFiZWw+XFxuPC9TdGFja0xheW91dD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJucy1jdXJyZW50LWNoYWxsZW5nZVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQuY3NzXCJdLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIEN1cnJlbnRDaGFsbGVuZ2VDb21wb25lbnQge31cbiIsIm1vZHVsZS5leHBvcnRzID0gXCJcIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8U3RhY2tMYXlvdXQ+XFxuICB0b2RheSB3b3JrcyFcXG48L1N0YWNrTGF5b3V0PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtdG9kYXknLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9kYXkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b2RheS5jb21wb25lbnQuY3NzJ10sXG4gIFxufSlcbmV4cG9ydCBjbGFzcyBUb2RheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCIvLyB0aGlzIGltcG9ydCBzaG91bGQgYmUgZmlyc3QgaW4gb3JkZXIgdG8gbG9hZCBzb21lIHJlcXVpcmVkIHNldHRpbmdzIChsaWtlIGdsb2JhbHMgYW5kIHJlZmxlY3QtbWV0YWRhdGEpXG5pbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwL2FwcC5tb2R1bGVcIjtcblxuLy8gQSB0cmFkaXRpb25hbCBOYXRpdmVTY3JpcHQgYXBwbGljYXRpb24gc3RhcnRzIGJ5IGluaXRpYWxpemluZyBnbG9iYWwgb2JqZWN0cywgc2V0dGluZyB1cCBnbG9iYWwgQ1NTIHJ1bGVzLCBjcmVhdGluZywgYW5kIG5hdmlnYXRpbmcgdG8gdGhlIG1haW4gcGFnZS5cbi8vIEFuZ3VsYXIgYXBwbGljYXRpb25zIG5lZWQgdG8gdGFrZSBjYXJlIG9mIHRoZWlyIG93biBpbml0aWFsaXphdGlvbjogbW9kdWxlcywgY29tcG9uZW50cywgZGlyZWN0aXZlcywgcm91dGVzLCBESSBwcm92aWRlcnMuXG4vLyBBIE5hdGl2ZVNjcmlwdCBBbmd1bGFyIGFwcCBuZWVkcyB0byBtYWtlIGJvdGggcGFyYWRpZ21zIHdvcmsgdG9nZXRoZXIsIHNvIHdlIHByb3ZpZGUgYSB3cmFwcGVyIHBsYXRmb3JtIG9iamVjdCwgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljLFxuLy8gdGhhdCBzZXRzIHVwIGEgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIGFuZCBjYW4gYm9vdHN0cmFwIHRoZSBBbmd1bGFyIGZyYW1ld29yay5cbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==