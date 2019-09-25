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

module.exports = "<!-- <FlexboxLayout flexDirection=\"column\">\n  <ns-challenge-edit (input)=\"onChallengeInput($event)\"></ns-challenge-edit>\n  <ns-current-challenge [challenges]=\"activeChallenges\"></ns-current-challenge>\n</FlexboxLayout>\n -->\n\n<RadSideDrawer>\n  <StackLayout tkDrawerContent>\n    <Button text=\"Logout\" class=\"btn\"></Button>\n  </StackLayout>\n  <StackLayout tkMainContent>\n    <page-router-outlet></page-router-outlet>\n  </StackLayout>\n</RadSideDrawer>\n"

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
/* harmony import */ var nativescript_ui_sidedrawer_angular_side_drawer_directives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-ui-sidedrawer/angular/side-drawer-directives.js");
/* harmony import */ var nativescript_ui_sidedrawer_angular_side_drawer_directives__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer_angular_side_drawer_directives__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/app.component.ts");
/* harmony import */ var _challenges_current_challenge_current_challenge_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/challenges/current-challenge/current-challenge.component.ts");
/* harmony import */ var _challenges_challenge_edit_challenge_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/challenges/challenge-edit/challenge-edit.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/auth/auth.component.ts");
/* harmony import */ var _challenges_today_today_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./app/challenges/today/today.component.ts");
/* harmony import */ var _challenges_challenge_tabs_challenge_tabs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./app/challenges/challenge-tabs/challenge-tabs.component.ts");
/* harmony import */ var _shared_ui_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./app/shared/ui/action-bar/action-bar.component.ts");








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
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            imports: [
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NativeScriptFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                nativescript_ui_sidedrawer_angular_side_drawer_directives__WEBPACK_IMPORTED_MODULE_3__["NativeScriptUISideDrawerModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _challenges_current_challenge_current_challenge_component__WEBPACK_IMPORTED_MODULE_6__["CurrentChallengeComponent"],
                _challenges_challenge_edit_challenge_edit_component__WEBPACK_IMPORTED_MODULE_7__["ChallengeEditComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_8__["AuthComponent"],
                _challenges_today_today_component__WEBPACK_IMPORTED_MODULE_9__["TodayComponent"],
                _shared_ui_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_11__["ActionBarComponent"],
                _challenges_challenge_tabs_challenge_tabs_component__WEBPACK_IMPORTED_MODULE_10__["ChallengeTabsComponent"]
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

module.exports = "<!-- <FlexboxLayout jusityContent=\"space-between\">\r\n  <TextField\r\n    class=\"form-control\"\r\n    hint=\"Challenge title\"\r\n    [(ngModel)]=\"challengeDescription\"\r\n  ></TextField>\r\n  <Button class=\"btn\" (tap)=\"onSetChallenge()\" text=\"Set Challenge\"></Button>\r\n</FlexboxLayout>\r\n -->\r\n<ns-action-bar title=\"Edit Challenge\"></ns-action-bar>\r\n<FlexboxLayout jusityContent=\"space-between\">\r\n  <Label text=\"edit page\"></Label>\r\n</FlexboxLayout>\r\n"

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

module.exports = "<TabView\r\n  androidTabsPosition=\"bottom\"\r\n  androidSelectedTabHighlightColor=\"#7c015d\"\r\n  selectedTabTextColor=\"#7c015d\"\r\n>\r\n  <StackLayout *tabItem=\"{ title: 'Today' }\">\r\n    <router-outlet name=\"today\"> </router-outlet>\r\n  </StackLayout>\r\n  <StackLayout *tabItem=\"{ title: 'Current Challenge' }\">\r\n    <router-outlet name=\"currentChallenge\"> </router-outlet>\r\n  </StackLayout>\r\n</TabView>\r\n"

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
        //this.page.actionBarHidden = true;
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

module.exports = "<ns-action-bar\r\n  title=\"Today's Challenge\"\r\n  [showBackButton]=\"false\"\r\n></ns-action-bar>\r\n<StackLayout>\r\n  <Label text=\"Today\"></Label>\r\n</StackLayout>\r\n"

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

/***/ "./app/shared/ui/action-bar/action-bar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/shared/ui/action-bar/action-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar [title]=\"title\" (loaded)=\"onLoaded()\">\r\n  <NavigationButton\r\n    text=\"Back\"\r\n    android.systemIcon=\"ic_menu_back\"\r\n    *ngIf=\"canGoBack\"\r\n    (tap)=\"onGoBack()\"\r\n  ></NavigationButton>\r\n  <NavigationButton *ngIf=\"android\" icon=\"res://menu_black\"></NavigationButton>\r\n  <!-- only for ios -->\r\n  <ActionItem *ngIf=\"!android\" ios.position=\"left\">\r\n    <Label text=\"Menu\"></Label>\r\n  </ActionItem>\r\n</ActionBar>\r\n"

/***/ }),

/***/ "./app/shared/ui/action-bar/action-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionBarComponent", function() { return ActionBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/platform/platform.js");
/* harmony import */ var platform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(platform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/tns-core-modules/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__);




var ActionBarComponent = /** @class */ (function () {
    function ActionBarComponent(page, router) {
        this.page = page;
        this.router = router;
        this.showBackButton = true;
    }
    Object.defineProperty(ActionBarComponent.prototype, "canGoBack", {
        get: function () {
            return this.router.canGoBack() && this.showBackButton;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionBarComponent.prototype, "android", {
        get: function () {
            return platform__WEBPACK_IMPORTED_MODULE_1__["isAndroid"];
        },
        enumerable: true,
        configurable: true
    });
    ActionBarComponent.prototype.ngOnInit = function () { };
    ActionBarComponent.prototype.onGoBack = function () {
        this.router.backToPreviousPage();
    };
    ActionBarComponent.prototype.onLoaded = function () {
        if (platform__WEBPACK_IMPORTED_MODULE_1__["isAndroid"]) {
            var androidToolbar = this.page.actionBar.nativeView;
            var backButton = androidToolbar.getNavigationIcon();
            if (backButton) {
                backButton.setColorFilter(android.graphics.Color.parseColor("#171717"), android.graphics.PorterDuff.Mode.SRC_ATOP);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ActionBarComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActionBarComponent.prototype, "showBackButton", void 0);
    ActionBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-action-bar",
            template: __webpack_require__("./app/shared/ui/action-bar/action-bar.component.html"),
            styles: [__webpack_require__("./app/shared/ui/action-bar/action-bar.component.css")]
        }),
        __metadata("design:paramtypes", [tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_2__["Page"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"]])
    ], ActionBarComponent);
    return ActionBarComponent;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2UtZWRpdC9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS1lZGl0L2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS1lZGl0L2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2UtdGFicy9jaGFsbGVuZ2UtdGFicy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS10YWJzL2NoYWxsZW5nZS10YWJzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS10YWJzL2NoYWxsZW5nZS10YWJzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jdXJyZW50LWNoYWxsZW5nZS9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2N1cnJlbnQtY2hhbGxlbmdlL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2N1cnJlbnQtY2hhbGxlbmdlL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy90b2RheS90b2RheS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL3RvZGF5L3RvZGF5LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL3RvZGF5L3RvZGF5LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2hhcmVkL3VpL2FjdGlvbi1iYXIvYWN0aW9uLWJhci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9zaGFyZWQvdWkvYWN0aW9uLWJhci9hY3Rpb24tYmFyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9zaGFyZWQvdWkvYWN0aW9uLWJhci9hY3Rpb24tYmFyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLHlFOzs7Ozs7O0FDWkEseUVBQTJCLG1CQUFPLENBQUMsZ0RBQWdEO0FBQ25GO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLG9HQUErRjs7QUFFakg7QUFDQSxjQUFjLFFBQVMsbWVBQW1lLHdCQUF3QixvQkFBb0IsMEJBQTBCLGlCQUFpQixnQkFBZ0Isa0JBQWtCLHVCQUF1QixnQkFBZ0IsR0FBRyxtQkFBbUIsaUNBQWlDLDJCQUEyQixnQkFBZ0Isa0JBQWtCLGlCQUFpQixHQUFHOztBQUVseUI7QUFDQSxRQUFRLElBQVU7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QVMsRUFBRSxNQUFNLGdDQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsY0FBd0o7QUFDM0I7QUFDN0gsK0RBQStJO0FBQy9JLGdEQUFtRjtBQUNuRiwyQkFBeUQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gXCIuLi8kJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgcmVjdXJzaXZlXCI7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSFuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiksIFwiXCIpO1xuXG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuSW4gTmF0aXZlU2NyaXB0LCB0aGUgYXBwLmNzcyBmaWxlIGlzIHdoZXJlIHlvdSBwbGFjZSBDU1MgcnVsZXMgdGhhdFxcbnlvdSB3b3VsZCBsaWtlIHRvIGFwcGx5IHRvIHlvdXIgZW50aXJlIGFwcGxpY2F0aW9uLiBDaGVjayBvdXRcXG5odHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL3N0eWxpbmcgZm9yIGEgZnVsbCBsaXN0IG9mIHRoZSBDU1NcXG5zZWxlY3RvcnMgYW5kIHByb3BlcnRpZXMgeW91IGNhbiB1c2UgdG8gc3R5bGUgVUkgY29tcG9uZW50cy5cXG5cXG4vKlxcbkluIG1hbnkgY2FzZXMgeW91IG1heSB3YW50IHRvIHVzZSB0aGUgTmF0aXZlU2NyaXB0IGNvcmUgdGhlbWUgaW5zdGVhZFxcbm9mIHdyaXRpbmcgeW91ciBvd24gQ1NTIHJ1bGVzLiBGb3IgYSBmdWxsIGxpc3Qgb2YgY2xhc3MgbmFtZXMgaW4gdGhlIHRoZW1lXFxucmVmZXIgdG8gaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS90aGVtZS5cXG4qL1xcblxcbi5idG4ge1xcbiAgYmFja2dyb3VuZDogIzdjMDE1ZDtcXG4gIGJvcmRlci13aWR0aDogMTtcXG4gIGJvcmRlci1jb2xvcjogIzdjMDE1ZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNSAxMDtcXG4gIGJvcmRlci1yYWRpdXM6IDMwJTtcXG4gIG1hcmdpbjogNSAwO1xcbn1cXG5cXG4uZm9ybS1jb250cm9sIHtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM3YzAxNWQ7XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAyO1xcbiAgbWFyZ2luOiA1IDA7XFxuICBmb250LXNpemU6IDIwO1xcbiAgcGFkZGluZzogOCA0O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IEF1dGhDb21wb25lbnQgfSBmcm9tIFwiLi9hdXRoL2F1dGguY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRvZGF5Q29tcG9uZW50IH0gZnJvbSBcIi4vY2hhbGxlbmdlcy90b2RheS90b2RheS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ3VycmVudENoYWxsZW5nZUNvbXBvbmVudCB9IGZyb20gXCIuL2NoYWxsZW5nZXMvY3VycmVudC1jaGFsbGVuZ2UvY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENoYWxsZW5nZUVkaXRDb21wb25lbnQgfSBmcm9tIFwiLi9jaGFsbGVuZ2VzL2NoYWxsZW5nZS1lZGl0L2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VUYWJzQ29tcG9uZW50IH0gZnJvbSBcIi4vY2hhbGxlbmdlcy9jaGFsbGVuZ2UtdGFicy9jaGFsbGVuZ2UtdGFicy5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBBdXRoQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiBcImVkaXQtY2hhbGxlbmdlXCIsIGNvbXBvbmVudDogQ2hhbGxlbmdlRWRpdENvbXBvbmVudCB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiY2hhbGxlbmdlc1wiLFxyXG4gICAgY29tcG9uZW50OiBDaGFsbGVuZ2VUYWJzQ29tcG9uZW50LFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAgeyBwYXRoOiBcInRvZGF5XCIsIGNvbXBvbmVudDogVG9kYXlDb21wb25lbnQsIG91dGxldDogXCJ0b2RheVwiIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBcImN1cnJlbnQtY2hhbGxlbmdlXCIsXHJcbiAgICAgICAgY29tcG9uZW50OiBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50LFxyXG4gICAgICAgIG91dGxldDogXCJjdXJyZW50Q2hhbGxlbmdlXCJcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxyXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHt9XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIDxGbGV4Ym94TGF5b3V0IGZsZXhEaXJlY3Rpb249XFxcImNvbHVtblxcXCI+XFxuICA8bnMtY2hhbGxlbmdlLWVkaXQgKGlucHV0KT1cXFwib25DaGFsbGVuZ2VJbnB1dCgkZXZlbnQpXFxcIj48L25zLWNoYWxsZW5nZS1lZGl0PlxcbiAgPG5zLWN1cnJlbnQtY2hhbGxlbmdlIFtjaGFsbGVuZ2VzXT1cXFwiYWN0aXZlQ2hhbGxlbmdlc1xcXCI+PC9ucy1jdXJyZW50LWNoYWxsZW5nZT5cXG48L0ZsZXhib3hMYXlvdXQ+XFxuIC0tPlxcblxcbjxSYWRTaWRlRHJhd2VyPlxcbiAgPFN0YWNrTGF5b3V0IHRrRHJhd2VyQ29udGVudD5cXG4gICAgPEJ1dHRvbiB0ZXh0PVxcXCJMb2dvdXRcXFwiIGNsYXNzPVxcXCJidG5cXFwiPjwvQnV0dG9uPlxcbiAgPC9TdGFja0xheW91dD5cXG4gIDxTdGFja0xheW91dCB0a01haW5Db250ZW50PlxcbiAgICA8cGFnZS1yb3V0ZXItb3V0bGV0PjwvcGFnZS1yb3V0ZXItb3V0bGV0PlxcbiAgPC9TdGFja0xheW91dD5cXG48L1JhZFNpZGVEcmF3ZXI+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXIvc2lkZS1kcmF3ZXItZGlyZWN0aXZlc1wiO1xyXG5cclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEN1cnJlbnRDaGFsbGVuZ2VDb21wb25lbnQgfSBmcm9tIFwiLi9jaGFsbGVuZ2VzL2N1cnJlbnQtY2hhbGxlbmdlL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vY2hhbGxlbmdlcy9jaGFsbGVuZ2UtZWRpdC9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnRcIjtcclxuXHJcbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEh0dHBDbGllbnQgd3JhcHBlclxyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XHJcbmltcG9ydCB7IEF1dGhDb21wb25lbnQgfSBmcm9tIFwiLi9hdXRoL2F1dGguY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRvZGF5Q29tcG9uZW50IH0gZnJvbSBcIi4vY2hhbGxlbmdlcy90b2RheS90b2RheS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ2hhbGxlbmdlVGFic0NvbXBvbmVudCB9IGZyb20gXCIuL2NoYWxsZW5nZXMvY2hhbGxlbmdlLXRhYnMvY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFjdGlvbkJhckNvbXBvbmVudCB9IGZyb20gXCIuL3NoYXJlZC91aS9hY3Rpb24tYmFyL2FjdGlvbi1iYXIuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICBBcHBSb3V0aW5nTW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEFwcENvbXBvbmVudCxcclxuICAgIEN1cnJlbnRDaGFsbGVuZ2VDb21wb25lbnQsXHJcbiAgICBDaGFsbGVuZ2VFZGl0Q29tcG9uZW50LFxyXG4gICAgQXV0aENvbXBvbmVudCxcclxuICAgIFRvZGF5Q29tcG9uZW50LFxyXG4gICAgQWN0aW9uQmFyQ29tcG9uZW50LFxyXG4gICAgQ2hhbGxlbmdlVGFic0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXSxcclxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cclxufSlcclxuLypcclxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxyXG4qL1xyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJcIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QnV0dG9uXFxyXFxuICB0ZXh0PVxcXCJhdXRoIHdvcmtzXFxcIlxcclxcbiAgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCJcXHJcXG4gIG5zUm91dGVyTGluaz1cXFwiL2NoYWxsZW5nZXNcXFwiXFxyXFxuICBbY2xlYXJIaXN0b3J5XT1cXFwidHJ1ZVxcXCJcXHJcXG4+PC9CdXR0b24+XFxyXFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibnMtYXV0aFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2F1dGguY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2F1dGguY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIGdvU2lnbmluKCkge1xuICAgIC8vIGNsZWFyIGhpc3RvcnkgdG8gcmVtb3ZlIGNhY2hpbmcgb2YgcHJldmlvdXMgcGFnZSBpbiB0aGUgc3RhY2tcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvdG9kYXlcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiVGV4dEZpZWxkIHtcXHJcXG4gIHdpZHRoOiA2NiU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMzMlO1xcclxcbn1cXHJcXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIDxGbGV4Ym94TGF5b3V0IGp1c2l0eUNvbnRlbnQ9XFxcInNwYWNlLWJldHdlZW5cXFwiPlxcclxcbiAgPFRleHRGaWVsZFxcclxcbiAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcclxcbiAgICBoaW50PVxcXCJDaGFsbGVuZ2UgdGl0bGVcXFwiXFxyXFxuICAgIFsobmdNb2RlbCldPVxcXCJjaGFsbGVuZ2VEZXNjcmlwdGlvblxcXCJcXHJcXG4gID48L1RleHRGaWVsZD5cXHJcXG4gIDxCdXR0b24gY2xhc3M9XFxcImJ0blxcXCIgKHRhcCk9XFxcIm9uU2V0Q2hhbGxlbmdlKClcXFwiIHRleHQ9XFxcIlNldCBDaGFsbGVuZ2VcXFwiPjwvQnV0dG9uPlxcclxcbjwvRmxleGJveExheW91dD5cXHJcXG4gLS0+XFxyXFxuPG5zLWFjdGlvbi1iYXIgdGl0bGU9XFxcIkVkaXQgQ2hhbGxlbmdlXFxcIj48L25zLWFjdGlvbi1iYXI+XFxyXFxuPEZsZXhib3hMYXlvdXQganVzaXR5Q29udGVudD1cXFwic3BhY2UtYmV0d2VlblxcXCI+XFxyXFxuICA8TGFiZWwgdGV4dD1cXFwiZWRpdCBwYWdlXFxcIj48L0xhYmVsPlxcclxcbjwvRmxleGJveExheW91dD5cXHJcXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJucy1jaGFsbGVuZ2UtZWRpdFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnQuY3NzXCJdLFxuICBcbn0pXG5leHBvcnQgY2xhc3MgQ2hhbGxlbmdlRWRpdENvbXBvbmVudCB7fVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxUYWJWaWV3XFxyXFxuICBhbmRyb2lkVGFic1Bvc2l0aW9uPVxcXCJib3R0b21cXFwiXFxyXFxuICBhbmRyb2lkU2VsZWN0ZWRUYWJIaWdobGlnaHRDb2xvcj1cXFwiIzdjMDE1ZFxcXCJcXHJcXG4gIHNlbGVjdGVkVGFiVGV4dENvbG9yPVxcXCIjN2MwMTVkXFxcIlxcclxcbj5cXHJcXG4gIDxTdGFja0xheW91dCAqdGFiSXRlbT1cXFwieyB0aXRsZTogJ1RvZGF5JyB9XFxcIj5cXHJcXG4gICAgPHJvdXRlci1vdXRsZXQgbmFtZT1cXFwidG9kYXlcXFwiPiA8L3JvdXRlci1vdXRsZXQ+XFxyXFxuICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgPFN0YWNrTGF5b3V0ICp0YWJJdGVtPVxcXCJ7IHRpdGxlOiAnQ3VycmVudCBDaGFsbGVuZ2UnIH1cXFwiPlxcclxcbiAgICA8cm91dGVyLW91dGxldCBuYW1lPVxcXCJjdXJyZW50Q2hhbGxlbmdlXFxcIj4gPC9yb3V0ZXItb3V0bGV0PlxcclxcbiAgPC9TdGFja0xheW91dD5cXHJcXG48L1RhYlZpZXc+XFxyXFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJucy1jaGFsbGVuZ2UtdGFic1wiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhbGxlbmdlVGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgIHByaXZhdGUgYWN0aXZlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgcGFnZTogUGFnZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShcclxuICAgICAgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG91dGxldHM6IHsgY3VycmVudENoYWxsZW5nZTogW1wiY3VycmVudC1jaGFsbGVuZ2VcIl0sIHRvZGF5OiBbXCJ0b2RheVwiXSB9XHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICB7IHJlbGF0aXZlVG86IHRoaXMuYWN0aXZlIH1cclxuICAgICk7XHJcbiAgICAvL3RoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzdjMDE1ZDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLXRvcDogMTA7XFxufVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0gPExpc3RWaWV3XFxyXFxuICBbaXRlbXNdPVxcXCJjaGFsbGVuZ2VzXFxcIlxcclxcbiAgKGl0ZW1UYXApPVxcXCJvbkl0ZW1UYXAoJGV2ZW50KVxcXCJcXHJcXG4gIGlvc0VzdGltYXRlZFJvd0hlaWdodD1cXFwiNjVcXFwiXFxyXFxuPlxcclxcbiAgPG5nLXRlbXBsYXRlIGxldC1jaGFsbGVuZ2U9XFxcIml0ZW1cXFwiIGxldC1pPVxcXCJpbmRleFxcXCI+XFxyXFxuICAgIDxHaXJkTGF5b3V0IHJvd3M9XFxcIjQwLDIwXFxcIiBjb2x1bXM9XFxcIjUwLCpcXFwiPlxcclxcbiAgICAgIDxMYWJlbCBbdGV4dF09XFxcImlcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiByb3dTcGFuPVxcXCIyXFxcIj48L0xhYmVsPlxcclxcbiAgICAgIDxMYWJlbCBbdGV4dF09XFxcImNoYWxsZW5nZVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgPExhYmVsIHRleHQ9XFxcIkl0ZW0gY29udGVudCByb3cgMlxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiPjwvTGFiZWw+XFxyXFxuICAgIDwvR2lyZExheW91dD5cXHJcXG4gIDwvbmctdGVtcGxhdGU+XFxyXFxuPC9MaXN0Vmlldz4gLS0+XFxyXFxuXFxyXFxuPCEtLSA8U2Nyb2xsVmlldz5cXHJcXG4gICAgPFN0YWNrTGF5b3V0PlxcclxcbiAgICAgIDxMYWJlbFxcclxcbiAgICAgICAgY2xhc3M9XFxcInRpdGxlXFxcIlxcclxcbiAgICAgICAgW3RleHRdPVxcXCJjdXJyZW50Q2hhbGxlbmdlXFxcIlxcclxcbiAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIlxcclxcbiAgICAgICAgKm5nRm9yPVxcXCJsZXQgY3VycmVudENoYWxsZW5nZSBvZiBjaGFsbGVuZ2VzXFxcIlxcclxcbiAgICAgID48L0xhYmVsPlxcclxcbiAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgPC9TY3JvbGxWaWV3PiAtLT5cXHJcXG48bnMtYWN0aW9uLWJhciBbdGl0bGVdPVxcXCInQ3VycmVudCBjaGFsbGVuZ2UnXFxcIj48L25zLWFjdGlvbi1iYXI+XFxyXFxuPFN0YWNrTGF5b3V0PlxcclxcbiAgPExhYmVsXFxyXFxuICAgIGNsYXNzPVxcXCJ0aXRsZVxcXCJcXHJcXG4gICAgdGV4dD1cXFwiVGhlIGN1cnJlbnQgY2hhbGxlbmdlXFxcIlxcclxcbiAgICBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiXFxyXFxuICA+PC9MYWJlbD5cXHJcXG4gIDxCdXR0b24gdGV4dD1cXFwiRWRpdFxcXCIgKHRhcCk9XFxcIm9uRWRpdCgpXFxcIj48L0J1dHRvbj5cXHJcXG48L1N0YWNrTGF5b3V0PlxcclxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm5zLWN1cnJlbnQtY2hhbGxlbmdlXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykge31cclxuXHJcbiAgb25FZGl0KCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZWRpdC1jaGFsbGVuZ2UnXSwge1xyXG4gICAgICB0cmFuc2l0aW9uOiB7IG5hbWU6ICdzbGlkZUxlZnQnIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5zLWFjdGlvbi1iYXJcXHJcXG4gIHRpdGxlPVxcXCJUb2RheSdzIENoYWxsZW5nZVxcXCJcXHJcXG4gIFtzaG93QmFja0J1dHRvbl09XFxcImZhbHNlXFxcIlxcclxcbj48L25zLWFjdGlvbi1iYXI+XFxyXFxuPFN0YWNrTGF5b3V0PlxcclxcbiAgPExhYmVsIHRleHQ9XFxcIlRvZGF5XFxcIj48L0xhYmVsPlxcclxcbjwvU3RhY2tMYXlvdXQ+XFxyXFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy10b2RheScsXG4gIHRlbXBsYXRlVXJsOiAnLi90b2RheS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RvZGF5LmNvbXBvbmVudC5jc3MnXSxcbiAgXG59KVxuZXhwb3J0IGNsYXNzIFRvZGF5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCJcIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIFt0aXRsZV09XFxcInRpdGxlXFxcIiAobG9hZGVkKT1cXFwib25Mb2FkZWQoKVxcXCI+XFxyXFxuICA8TmF2aWdhdGlvbkJ1dHRvblxcclxcbiAgICB0ZXh0PVxcXCJCYWNrXFxcIlxcclxcbiAgICBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCJcXHJcXG4gICAgKm5nSWY9XFxcImNhbkdvQmFja1xcXCJcXHJcXG4gICAgKHRhcCk9XFxcIm9uR29CYWNrKClcXFwiXFxyXFxuICA+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcclxcbiAgPE5hdmlnYXRpb25CdXR0b24gKm5nSWY9XFxcImFuZHJvaWRcXFwiIGljb249XFxcInJlczovL21lbnVfYmxhY2tcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXHJcXG4gIDwhLS0gb25seSBmb3IgaW9zIC0tPlxcclxcbiAgPEFjdGlvbkl0ZW0gKm5nSWY9XFxcIiFhbmRyb2lkXFxcIiBpb3MucG9zaXRpb249XFxcImxlZnRcXFwiPlxcclxcbiAgICA8TGFiZWwgdGV4dD1cXFwiTWVudVxcXCI+PC9MYWJlbD5cXHJcXG4gIDwvQWN0aW9uSXRlbT5cXHJcXG48L0FjdGlvbkJhcj5cXHJcXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gXCJwbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5kZWNsYXJlIHZhciBhbmRyb2lkOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJucy1hY3Rpb24tYmFyXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9hY3Rpb24tYmFyLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2FjdGlvbi1iYXIuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWN0aW9uQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNob3dCYWNrQnV0dG9uID0gdHJ1ZTtcclxuXHJcbiAgZ2V0IGNhbkdvQmFjaygpIHtcclxuICAgIHJldHVybiB0aGlzLnJvdXRlci5jYW5Hb0JhY2soKSAmJiB0aGlzLnNob3dCYWNrQnV0dG9uO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFuZHJvaWQoKSB7XHJcbiAgICByZXR1cm4gaXNBbmRyb2lkO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykge31cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICBvbkdvQmFjaygpIHtcclxuICAgIHRoaXMucm91dGVyLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xyXG4gIH1cclxuXHJcbiAgb25Mb2FkZWQoKSB7XHJcbiAgICBpZiAoaXNBbmRyb2lkKSB7XHJcbiAgICAgIGNvbnN0IGFuZHJvaWRUb29sYmFyID0gdGhpcy5wYWdlLmFjdGlvbkJhci5uYXRpdmVWaWV3O1xyXG4gICAgICBjb25zdCBiYWNrQnV0dG9uID0gYW5kcm9pZFRvb2xiYXIuZ2V0TmF2aWdhdGlvbkljb24oKTtcclxuXHJcbiAgICAgIGlmIChiYWNrQnV0dG9uKSB7XHJcbiAgICAgICAgYmFja0J1dHRvbi5zZXRDb2xvckZpbHRlcihcclxuICAgICAgICAgIGFuZHJvaWQuZ3JhcGhpY3MuQ29sb3IucGFyc2VDb2xvcihcIiMxNzE3MTdcIiksXHJcbiAgICAgICAgICAoPGFueT5hbmRyb2lkLmdyYXBoaWNzKS5Qb3J0ZXJEdWZmLk1vZGUuU1JDX0FUT1BcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIHRoaXMgaW1wb3J0IHNob3VsZCBiZSBmaXJzdCBpbiBvcmRlciB0byBsb2FkIHNvbWUgcmVxdWlyZWQgc2V0dGluZ3MgKGxpa2UgZ2xvYmFscyBhbmQgcmVmbGVjdC1tZXRhZGF0YSlcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xuXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tIFwiLi9hcHAvYXBwLm1vZHVsZVwiO1xuXG4vLyBBIHRyYWRpdGlvbmFsIE5hdGl2ZVNjcmlwdCBhcHBsaWNhdGlvbiBzdGFydHMgYnkgaW5pdGlhbGl6aW5nIGdsb2JhbCBvYmplY3RzLCBzZXR0aW5nIHVwIGdsb2JhbCBDU1MgcnVsZXMsIGNyZWF0aW5nLCBhbmQgbmF2aWdhdGluZyB0byB0aGUgbWFpbiBwYWdlLlxuLy8gQW5ndWxhciBhcHBsaWNhdGlvbnMgbmVlZCB0byB0YWtlIGNhcmUgb2YgdGhlaXIgb3duIGluaXRpYWxpemF0aW9uOiBtb2R1bGVzLCBjb21wb25lbnRzLCBkaXJlY3RpdmVzLCByb3V0ZXMsIERJIHByb3ZpZGVycy5cbi8vIEEgTmF0aXZlU2NyaXB0IEFuZ3VsYXIgYXBwIG5lZWRzIHRvIG1ha2UgYm90aCBwYXJhZGlnbXMgd29yayB0b2dldGhlciwgc28gd2UgcHJvdmlkZSBhIHdyYXBwZXIgcGxhdGZvcm0gb2JqZWN0LCBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMsXG4vLyB0aGF0IHNldHMgdXAgYSBOYXRpdmVTY3JpcHQgYXBwbGljYXRpb24gYW5kIGNhbiBib290c3RyYXAgdGhlIEFuZ3VsYXIgZnJhbWV3b3JrLlxucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9