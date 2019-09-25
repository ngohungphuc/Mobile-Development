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
/* harmony import */ var _challenges_current_challenge_current_challenge_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/challenges/current-challenge/current-challenge.component.ts");
/* harmony import */ var _challenges_challenge_edit_challenge_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/challenges/challenge-edit/challenge-edit.component.ts");
/* harmony import */ var _challenges_challenge_tabs_challenge_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/challenges/challenge-tabs/challenge-tabs.component.ts");







var routes = [
    { path: "", component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"] },
    { path: "edit-challenge", component: _challenges_challenge_edit_challenge_edit_component__WEBPACK_IMPORTED_MODULE_5__["ChallengeEditComponent"] },
    {
        path: "challenges",
        component: _challenges_challenge_tabs_challenge_tabs_component__WEBPACK_IMPORTED_MODULE_6__["ChallengeTabsComponent"],
        children: [
            { path: "today", component: _challenges_today_today_component__WEBPACK_IMPORTED_MODULE_3__["TodayComponent"], outlet: "today" },
            {
                path: "current-challenge",
                component: _challenges_current_challenge_current_challenge_component__WEBPACK_IMPORTED_MODULE_4__["CurrentChallengeComponent"],
                outlet: "currentChallenge"
            }
        ]
    }
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

module.exports = "<!-- <FlexboxLayout flexDirection=\"column\">\n  <ns-challenge-edit (input)=\"onChallengeInput($event)\"></ns-challenge-edit>\n  <ns-current-challenge [challenges]=\"activeChallenges\"></ns-current-challenge>\n</FlexboxLayout>\n -->\n\n<StackLayout>\n<!--   <router-outlet></router-outlet> -->\n<page-router-outlet></page-router-outlet>\n</StackLayout>\n"

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
/* harmony import */ var _challenges_challenge_tabs_challenge_tabs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./app/challenges/challenge-tabs/challenge-tabs.component.ts");







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
                _challenges_today_today_component__WEBPACK_IMPORTED_MODULE_8__["TodayComponent"],
                _challenges_challenge_tabs_challenge_tabs_component__WEBPACK_IMPORTED_MODULE_9__["ChallengeTabsComponent"]
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

module.exports = "<Button\r\n  text=\"auth works\"\r\n  class=\"btn btn-primary\"\r\n  nsRouterLink=\"/challenges\"\r\n  [clearHistory]=\"true\"\r\n></Button>\r\n"

/***/ }),

/***/ "./app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
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

/***/ "./app/challenges/challenge-tabs/challenge-tabs.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/challenges/challenge-tabs/challenge-tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<TabView androidTabsPosition=\"bottom\">\r\n  <StackLayout *tabItem=\"{ title: 'Today' }\">\r\n    <router-outlet name=\"today\"> </router-outlet>\r\n  </StackLayout>\r\n  <StackLayout *tabItem=\"{ title: 'Current Challenge' }\">\r\n    <router-outlet name=\"currentChallenge\"> </router-outlet>\r\n  </StackLayout>\r\n</TabView>\r\n"

/***/ }),

/***/ "./app/challenges/challenge-tabs/challenge-tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeTabsComponent", function() { return ChallengeTabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/tns-core-modules/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_3__);




var ChallengeTabsComponent = /** @class */ (function () {
    function ChallengeTabsComponent(router, active, page) {
        this.router = router;
        this.active = active;
        this.page = page;
    }
    ChallengeTabsComponent.prototype.ngOnInit = function () {
        this.router.navigate([
            {
                outlets: { currentChallenge: ["current-challenge"], today: ["today"] }
            }
        ], { relativeTo: this.active });
        this.page.actionBarHidden = true;
    };
    ChallengeTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-challenge-tabs",
            template: __webpack_require__("./app/challenges/challenge-tabs/challenge-tabs.component.html"),
            styles: [__webpack_require__("./app/challenges/challenge-tabs/challenge-tabs.component.css")]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_3__["Page"]])
    ], ChallengeTabsComponent);
    return ChallengeTabsComponent;
}());



/***/ }),

/***/ "./app/challenges/current-challenge/current-challenge.component.css":
/***/ (function(module, exports) {

module.exports = ".title {\n  font-size: 26;\n  text-align: center;\n  color: #7c015d;\n  font-weight: bold;\n  margin-top: 10;\n}\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2UtZWRpdC9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS1lZGl0L2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS1lZGl0L2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2UtdGFicy9jaGFsbGVuZ2UtdGFicy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS10YWJzL2NoYWxsZW5nZS10YWJzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS10YWJzL2NoYWxsZW5nZS10YWJzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jdXJyZW50LWNoYWxsZW5nZS9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2N1cnJlbnQtY2hhbGxlbmdlL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2N1cnJlbnQtY2hhbGxlbmdlL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy90b2RheS90b2RheS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL3RvZGF5L3RvZGF5LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL3RvZGF5L3RvZGF5LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLHlFOzs7Ozs7O0FDWkEseUVBQTJCLG1CQUFPLENBQUMsZ0RBQWdEO0FBQ25GO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLG9HQUErRjs7QUFFakg7QUFDQSxjQUFjLFFBQVMsbWVBQW1lLHdCQUF3QixvQkFBb0IsMEJBQTBCLGlCQUFpQixnQkFBZ0Isa0JBQWtCLHVCQUF1QixnQkFBZ0IsR0FBRyxtQkFBbUIsaUNBQWlDLDJCQUEyQixnQkFBZ0Isa0JBQWtCLGlCQUFpQixHQUFHOztBQUVseUI7QUFDQSxRQUFRLElBQVU7QUFDbEI7QUFDQTtBQUNBLCtCQUErQixtQ0FBbUM7QUFDbEUsU0FBUztBQUNUOzs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFDOEI7QUFHakI7QUFDYztBQUNtQztBQUNUO0FBQ0E7QUFFOUYsSUFBTSxNQUFNLEdBQVc7SUFDckIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFF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QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUFHLENBQUM7SUFFaEQsMENBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsaUJBQWlCLENBQUMsRUFBRTtZQUN4QyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO1NBQ2xDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFQVSx5QkFBeUI7UUFMckMsK0RBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsb0dBQWlEOztTQUVsRCxDQUFDO3lDQUU0Qiw0RUFBZ0I7T0FEakMseUJBQXlCLENBUXJDO0lBQUQsZ0NBQUM7Q0FBQTtBQVJxQzs7Ozs7Ozs7QUNSdEMsbUI7Ozs7Ozs7QUNBQSw0Vzs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBa0Q7QUFRbEQ7SUFFRTtJQUFnQixDQUFDO0lBRWpCLGlDQUFRLEdBQVI7SUFDQSxDQUFDO0lBTFUsY0FBYztRQU4xQiwrREFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsNEVBQXFDOztTQUd0QyxDQUFDOztPQUNXLGNBQWMsQ0FPMUI7SUFBRCxxQkFBQztDQUFBO0FBUDBCOzs7Ozs7Ozs7Ozs7OztBQ0wzQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0NBQW1COzs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxjQUF3SjtBQUMzQjtBQUM3SCwrREFBK0k7QUFDL0ksZ0RBQW1GO0FBQ25GLDJCQUF5RCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXVnaHQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSBcIi4uLyQkX2xhenlfcm91dGVfcmVzb3VyY2UgbGF6eSByZWN1cnNpdmVcIjsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0xIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSwgXCJcIik7XG5cbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG5JbiBOYXRpdmVTY3JpcHQsIHRoZSBhcHAuY3NzIGZpbGUgaXMgd2hlcmUgeW91IHBsYWNlIENTUyBydWxlcyB0aGF0XFxueW91IHdvdWxkIGxpa2UgdG8gYXBwbHkgdG8geW91ciBlbnRpcmUgYXBwbGljYXRpb24uIENoZWNrIG91dFxcbmh0dHA6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvc3R5bGluZyBmb3IgYSBmdWxsIGxpc3Qgb2YgdGhlIENTU1xcbnNlbGVjdG9ycyBhbmQgcHJvcGVydGllcyB5b3UgY2FuIHVzZSB0byBzdHlsZSBVSSBjb21wb25lbnRzLlxcblxcbi8qXFxuSW4gbWFueSBjYXNlcyB5b3UgbWF5IHdhbnQgdG8gdXNlIHRoZSBOYXRpdmVTY3JpcHQgY29yZSB0aGVtZSBpbnN0ZWFkXFxub2Ygd3JpdGluZyB5b3VyIG93biBDU1MgcnVsZXMuIEZvciBhIGZ1bGwgbGlzdCBvZiBjbGFzcyBuYW1lcyBpbiB0aGUgdGhlbWVcXG5yZWZlciB0byBodHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL3RoZW1lLlxcbiovXFxuXFxuLmJ0biB7XFxuICBiYWNrZ3JvdW5kOiAjN2MwMTVkO1xcbiAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgYm9yZGVyLWNvbG9yOiAjN2MwMTVkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA1IDEwO1xcbiAgYm9yZGVyLXJhZGl1czogMzAlO1xcbiAgbWFyZ2luOiA1IDA7XFxufVxcblxcbi5mb3JtLWNvbnRyb2wge1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzdjMDE1ZDtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDI7XFxuICBtYXJnaW46IDUgMDtcXG4gIGZvbnQtc2l6ZTogMjA7XFxuICBwYWRkaW5nOiA4IDQ7XFxufVxcblwiLCBcIlwiXSk7XG5cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9hcHAuY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgQXV0aENvbXBvbmVudCB9IGZyb20gXCIuL2F1dGgvYXV0aC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVG9kYXlDb21wb25lbnQgfSBmcm9tIFwiLi9jaGFsbGVuZ2VzL3RvZGF5L3RvZGF5LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50IH0gZnJvbSBcIi4vY2hhbGxlbmdlcy9jdXJyZW50LWNoYWxsZW5nZS9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ2hhbGxlbmdlRWRpdENvbXBvbmVudCB9IGZyb20gXCIuL2NoYWxsZW5nZXMvY2hhbGxlbmdlLWVkaXQvY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENoYWxsZW5nZVRhYnNDb21wb25lbnQgfSBmcm9tIFwiLi9jaGFsbGVuZ2VzL2NoYWxsZW5nZS10YWJzL2NoYWxsZW5nZS10YWJzLmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IEF1dGhDb21wb25lbnQgfSxcclxuICB7IHBhdGg6IFwiZWRpdC1jaGFsbGVuZ2VcIiwgY29tcG9uZW50OiBDaGFsbGVuZ2VFZGl0Q29tcG9uZW50IH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCJjaGFsbGVuZ2VzXCIsXHJcbiAgICBjb21wb25lbnQ6IENoYWxsZW5nZVRhYnNDb21wb25lbnQsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7IHBhdGg6IFwidG9kYXlcIiwgY29tcG9uZW50OiBUb2RheUNvbXBvbmVudCwgb3V0bGV0OiBcInRvZGF5XCIgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6IFwiY3VycmVudC1jaGFsbGVuZ2VcIixcclxuICAgICAgICBjb21wb25lbnQ6IEN1cnJlbnRDaGFsbGVuZ2VDb21wb25lbnQsXHJcbiAgICAgICAgb3V0bGV0OiBcImN1cnJlbnRDaGFsbGVuZ2VcIlxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUge31cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0gPEZsZXhib3hMYXlvdXQgZmxleERpcmVjdGlvbj1cXFwiY29sdW1uXFxcIj5cXG4gIDxucy1jaGFsbGVuZ2UtZWRpdCAoaW5wdXQpPVxcXCJvbkNoYWxsZW5nZUlucHV0KCRldmVudClcXFwiPjwvbnMtY2hhbGxlbmdlLWVkaXQ+XFxuICA8bnMtY3VycmVudC1jaGFsbGVuZ2UgW2NoYWxsZW5nZXNdPVxcXCJhY3RpdmVDaGFsbGVuZ2VzXFxcIj48L25zLWN1cnJlbnQtY2hhbGxlbmdlPlxcbjwvRmxleGJveExheW91dD5cXG4gLS0+XFxuXFxuPFN0YWNrTGF5b3V0PlxcbjwhLS0gICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+IC0tPlxcbjxwYWdlLXJvdXRlci1vdXRsZXQ+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XFxuPC9TdGFja0xheW91dD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9hcHAuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEN1cnJlbnRDaGFsbGVuZ2VDb21wb25lbnQgfSBmcm9tIFwiLi9jaGFsbGVuZ2VzL2N1cnJlbnQtY2hhbGxlbmdlL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vY2hhbGxlbmdlcy9jaGFsbGVuZ2UtZWRpdC9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnRcIjtcclxuXHJcbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEh0dHBDbGllbnQgd3JhcHBlclxyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XHJcbmltcG9ydCB7IEF1dGhDb21wb25lbnQgfSBmcm9tIFwiLi9hdXRoL2F1dGguY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRvZGF5Q29tcG9uZW50IH0gZnJvbSBcIi4vY2hhbGxlbmdlcy90b2RheS90b2RheS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ2hhbGxlbmdlVGFic0NvbXBvbmVudCB9IGZyb20gXCIuL2NoYWxsZW5nZXMvY2hhbGxlbmdlLXRhYnMvY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdE1vZHVsZSwgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsIEFwcFJvdXRpbmdNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQXBwQ29tcG9uZW50LFxyXG4gICAgQ3VycmVudENoYWxsZW5nZUNvbXBvbmVudCxcclxuICAgIENoYWxsZW5nZUVkaXRDb21wb25lbnQsXHJcbiAgICBBdXRoQ29tcG9uZW50LFxyXG4gICAgVG9kYXlDb21wb25lbnQsXHJcbiAgICBDaGFsbGVuZ2VUYWJzQ29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtdLFxyXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxyXG59KVxyXG4vKlxyXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXHJcbiovXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxCdXR0b25cXHJcXG4gIHRleHQ9XFxcImF1dGggd29ya3NcXFwiXFxyXFxuICBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIlxcclxcbiAgbnNSb3V0ZXJMaW5rPVxcXCIvY2hhbGxlbmdlc1xcXCJcXHJcXG4gIFtjbGVhckhpc3RvcnldPVxcXCJ0cnVlXFxcIlxcclxcbj48L0J1dHRvbj5cXHJcXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJucy1hdXRoXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vYXV0aC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vYXV0aC5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykge31cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgZ29TaWduaW4oKSB7XG4gICAgLy8gY2xlYXIgaGlzdG9yeSB0byByZW1vdmUgY2FjaGluZyBvZiBwcmV2aW91cyBwYWdlIGluIHRoZSBzdGFja1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi90b2RheVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCJUZXh0RmllbGQge1xcclxcbiAgd2lkdGg6IDY2JTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAzMyU7XFxyXFxufVxcclxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0gPEZsZXhib3hMYXlvdXQganVzaXR5Q29udGVudD1cXFwic3BhY2UtYmV0d2VlblxcXCI+XFxyXFxuICA8VGV4dEZpZWxkXFxyXFxuICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxyXFxuICAgIGhpbnQ9XFxcIkNoYWxsZW5nZSB0aXRsZVxcXCJcXHJcXG4gICAgWyhuZ01vZGVsKV09XFxcImNoYWxsZW5nZURlc2NyaXB0aW9uXFxcIlxcclxcbiAgPjwvVGV4dEZpZWxkPlxcclxcbiAgPEJ1dHRvbiBjbGFzcz1cXFwiYnRuXFxcIiAodGFwKT1cXFwib25TZXRDaGFsbGVuZ2UoKVxcXCIgdGV4dD1cXFwiU2V0IENoYWxsZW5nZVxcXCI+PC9CdXR0b24+XFxyXFxuPC9GbGV4Ym94TGF5b3V0PlxcclxcbiAtLT5cXHJcXG48bnMtYWN0aW9uLWJhciBbdGl0bGVdPVxcXCInQ2hhbGxlbmdlIGVkaXQnXFxcIj48L25zLWFjdGlvbi1iYXI+XFxyXFxuIDxGbGV4Ym94TGF5b3V0IGp1c2l0eUNvbnRlbnQ9XFxcInNwYWNlLWJldHdlZW5cXFwiPlxcclxcbiAgPExhYmVsIHRleHQ9XFxcImVkaXQgcGFnZVxcXCI+PC9MYWJlbD5cXHJcXG48L0ZsZXhib3hMYXlvdXQ+XFxyXFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibnMtY2hhbGxlbmdlLWVkaXRcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50LmNzc1wiXSxcbiAgXG59KVxuZXhwb3J0IGNsYXNzIENoYWxsZW5nZUVkaXRDb21wb25lbnQge31cbiIsIm1vZHVsZS5leHBvcnRzID0gXCJcIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8VGFiVmlldyBhbmRyb2lkVGFic1Bvc2l0aW9uPVxcXCJib3R0b21cXFwiPlxcclxcbiAgPFN0YWNrTGF5b3V0ICp0YWJJdGVtPVxcXCJ7IHRpdGxlOiAnVG9kYXknIH1cXFwiPlxcclxcbiAgICA8cm91dGVyLW91dGxldCBuYW1lPVxcXCJ0b2RheVxcXCI+IDwvcm91dGVyLW91dGxldD5cXHJcXG4gIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICA8U3RhY2tMYXlvdXQgKnRhYkl0ZW09XFxcInsgdGl0bGU6ICdDdXJyZW50IENoYWxsZW5nZScgfVxcXCI+XFxyXFxuICAgIDxyb3V0ZXItb3V0bGV0IG5hbWU9XFxcImN1cnJlbnRDaGFsbGVuZ2VcXFwiPiA8L3JvdXRlci1vdXRsZXQ+XFxyXFxuICA8L1N0YWNrTGF5b3V0PlxcclxcbjwvVGFiVmlldz5cXHJcXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm5zLWNoYWxsZW5nZS10YWJzXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9jaGFsbGVuZ2UtdGFicy5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9jaGFsbGVuZ2UtdGFicy5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGFsbGVuZ2VUYWJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgcHJpdmF0ZSBhY3RpdmU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFxyXG4gICAgICBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgb3V0bGV0czogeyBjdXJyZW50Q2hhbGxlbmdlOiBbXCJjdXJyZW50LWNoYWxsZW5nZVwiXSwgdG9kYXk6IFtcInRvZGF5XCJdIH1cclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIHsgcmVsYXRpdmVUbzogdGhpcy5hY3RpdmUgfVxyXG4gICAgKTtcclxuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzdjMDE1ZDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLXRvcDogMTA7XFxufVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0gPExpc3RWaWV3XFxyXFxuICBbaXRlbXNdPVxcXCJjaGFsbGVuZ2VzXFxcIlxcclxcbiAgKGl0ZW1UYXApPVxcXCJvbkl0ZW1UYXAoJGV2ZW50KVxcXCJcXHJcXG4gIGlvc0VzdGltYXRlZFJvd0hlaWdodD1cXFwiNjVcXFwiXFxyXFxuPlxcclxcbiAgPG5nLXRlbXBsYXRlIGxldC1jaGFsbGVuZ2U9XFxcIml0ZW1cXFwiIGxldC1pPVxcXCJpbmRleFxcXCI+XFxyXFxuICAgIDxHaXJkTGF5b3V0IHJvd3M9XFxcIjQwLDIwXFxcIiBjb2x1bXM9XFxcIjUwLCpcXFwiPlxcclxcbiAgICAgIDxMYWJlbCBbdGV4dF09XFxcImlcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiByb3dTcGFuPVxcXCIyXFxcIj48L0xhYmVsPlxcclxcbiAgICAgIDxMYWJlbCBbdGV4dF09XFxcImNoYWxsZW5nZVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgPExhYmVsIHRleHQ9XFxcIkl0ZW0gY29udGVudCByb3cgMlxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiPjwvTGFiZWw+XFxyXFxuICAgIDwvR2lyZExheW91dD5cXHJcXG4gIDwvbmctdGVtcGxhdGU+XFxyXFxuPC9MaXN0Vmlldz4gLS0+XFxyXFxuXFxyXFxuPCEtLSA8U2Nyb2xsVmlldz5cXHJcXG4gICAgPFN0YWNrTGF5b3V0PlxcclxcbiAgICAgIDxMYWJlbFxcclxcbiAgICAgICAgY2xhc3M9XFxcInRpdGxlXFxcIlxcclxcbiAgICAgICAgW3RleHRdPVxcXCJjdXJyZW50Q2hhbGxlbmdlXFxcIlxcclxcbiAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIlxcclxcbiAgICAgICAgKm5nRm9yPVxcXCJsZXQgY3VycmVudENoYWxsZW5nZSBvZiBjaGFsbGVuZ2VzXFxcIlxcclxcbiAgICAgID48L0xhYmVsPlxcclxcbiAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgPC9TY3JvbGxWaWV3PiAtLT5cXHJcXG48bnMtYWN0aW9uLWJhciBbdGl0bGVdPVxcXCInQ3VycmVudCBjaGFsbGVuZ2UnXFxcIj48L25zLWFjdGlvbi1iYXI+XFxyXFxuPFN0YWNrTGF5b3V0PlxcclxcbiAgPExhYmVsXFxyXFxuICAgIGNsYXNzPVxcXCJ0aXRsZVxcXCJcXHJcXG4gICAgdGV4dD1cXFwiVGhlIGN1cnJlbnQgY2hhbGxlbmdlXFxcIlxcclxcbiAgICBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiXFxyXFxuICA+PC9MYWJlbD5cXHJcXG4gIDxCdXR0b24gdGV4dD1cXFwiRWRpdFxcXCIgKHRhcCk9XFxcIm9uRWRpdCgpXFxcIj48L0J1dHRvbj5cXHJcXG48L1N0YWNrTGF5b3V0PlxcclxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm5zLWN1cnJlbnQtY2hhbGxlbmdlXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykge31cclxuXHJcbiAgb25FZGl0KCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZWRpdC1jaGFsbGVuZ2UnXSwge1xyXG4gICAgICB0cmFuc2l0aW9uOiB7IG5hbWU6ICdzbGlkZUxlZnQnIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5zLWFjdGlvbi1iYXJcXHJcXG4gIHRpdGxlPVxcXCJUb2RheSdzIENoYWxsZW5nZVxcXCJcXHJcXG4gIFtzaG93QmFja0J1dHRvbl09XFxcImZhbHNlXFxcIlxcclxcbj48L25zLWFjdGlvbi1iYXI+XFxyXFxuPFN0YWNrTGF5b3V0PlxcclxcbiAgPExhYmVsIHRleHQ9XFxcIlRvZGF5XFxcIj48L0xhYmVsPlxcclxcbiAgPEJ1dHRvblxcclxcbiAgICB0ZXh0PVxcXCJ0b2RheSB3b3JrZHNcXFwiXFxyXFxuICAgIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiXFxyXFxuICAgIG5zUm91dGVyTGluaz1cXFwiL2N1cnJlbnQtY2hhbGxlbmdlXFxcIlxcclxcbiAgICBwYWdlVHJhbnNpdGlvbj1cXFwic2xpZGVMZWZ0XFxcIlxcclxcbiAgPjwvQnV0dG9uPlxcclxcbjwvU3RhY2tMYXlvdXQ+XFxyXFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy10b2RheScsXG4gIHRlbXBsYXRlVXJsOiAnLi90b2RheS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RvZGF5LmNvbXBvbmVudC5jc3MnXSxcbiAgXG59KVxuZXhwb3J0IGNsYXNzIFRvZGF5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsIi8vIHRoaXMgaW1wb3J0IHNob3VsZCBiZSBmaXJzdCBpbiBvcmRlciB0byBsb2FkIHNvbWUgcmVxdWlyZWQgc2V0dGluZ3MgKGxpa2UgZ2xvYmFscyBhbmQgcmVmbGVjdC1tZXRhZGF0YSlcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xuXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tIFwiLi9hcHAvYXBwLm1vZHVsZVwiO1xuXG4vLyBBIHRyYWRpdGlvbmFsIE5hdGl2ZVNjcmlwdCBhcHBsaWNhdGlvbiBzdGFydHMgYnkgaW5pdGlhbGl6aW5nIGdsb2JhbCBvYmplY3RzLCBzZXR0aW5nIHVwIGdsb2JhbCBDU1MgcnVsZXMsIGNyZWF0aW5nLCBhbmQgbmF2aWdhdGluZyB0byB0aGUgbWFpbiBwYWdlLlxuLy8gQW5ndWxhciBhcHBsaWNhdGlvbnMgbmVlZCB0byB0YWtlIGNhcmUgb2YgdGhlaXIgb3duIGluaXRpYWxpemF0aW9uOiBtb2R1bGVzLCBjb21wb25lbnRzLCBkaXJlY3RpdmVzLCByb3V0ZXMsIERJIHByb3ZpZGVycy5cbi8vIEEgTmF0aXZlU2NyaXB0IEFuZ3VsYXIgYXBwIG5lZWRzIHRvIG1ha2UgYm90aCBwYXJhZGlnbXMgd29yayB0b2dldGhlciwgc28gd2UgcHJvdmlkZSBhIHdyYXBwZXIgcGxhdGZvcm0gb2JqZWN0LCBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMsXG4vLyB0aGF0IHNldHMgdXAgYSBOYXRpdmVTY3JpcHQgYXBwbGljYXRpb24gYW5kIGNhbiBib290c3RyYXAgdGhlIEFuZ3VsYXIgZnJhbWV3b3JrLlxucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9