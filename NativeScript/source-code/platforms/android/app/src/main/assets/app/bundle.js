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

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout>\n  <ns-current-challenge></ns-current-challenge>\n</GridLayout>\n<!-- <StackLayout>\n   <ns-stack></ns-stack> \n    <ns-flexbox></ns-flexbox>\n</StackLayout>-->\n"

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
            template: __webpack_require__("./app/app.component.html"),
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/app.component.ts");
/* harmony import */ var _challenges_current_challenge_current_challenge_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/challenges/current-challenge/current-challenge.component.ts");
/* harmony import */ var _layouts_stack_stack_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/layouts/stack/stack.component.ts");
/* harmony import */ var _layouts_flexbox_flexbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/layouts/flexbox/flexbox.component.ts");







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
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            imports: [nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"], nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NativeScriptFormsModule"]],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _challenges_current_challenge_current_challenge_component__WEBPACK_IMPORTED_MODULE_4__["CurrentChallengeComponent"], _layouts_stack_stack_component__WEBPACK_IMPORTED_MODULE_5__["StackComponent"], _layouts_flexbox_flexbox_component__WEBPACK_IMPORTED_MODULE_6__["FlexboxComponent"]],
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

/***/ "./app/challenges/current-challenge/current-challenge.component.css":
/***/ (function(module, exports) {

module.exports = ".title {\n  font-size: 26;\n  text-align: center;\n  color: #7c015d;\n  font-weight: bold;\n  margin-top: 10;\n}\n"

/***/ }),

/***/ "./app/challenges/current-challenge/current-challenge.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout rows=\"auto,*\" columns=\"2*,*\">\n  <TextField\n    row=\"0\"\n    col=\"0\"\n    class=\"form-control\"\n    hint=\"Challenge title\"\n    [(ngModel)]=\"challengeDescription\"\n  ></TextField>\n  <Button\n    class=\"btn\"\n    row=\"0\"\n    col=\"1\"\n    (tap)=\"onSetChallenge()\"\n    text=\"Set Challenge\"\n  ></Button>\n  <Label\n    row=\"1\"\n    col=\"0\"\n    colSpan=\"2\"\n    class=\"title\"\n    [text]=\"currentChallenge\"\n  ></Label>\n</GridLayout>\n"

/***/ }),

/***/ "./app/challenges/current-challenge/current-challenge.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentChallengeComponent", function() { return CurrentChallengeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var CurrentChallengeComponent = /** @class */ (function () {
    function CurrentChallengeComponent() {
        this.challengeDescription = '';
        this.currentChallenge = '';
    }
    CurrentChallengeComponent.prototype.onSetChallenge = function () {
        this.currentChallenge = this.challengeDescription;
    };
    CurrentChallengeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-current-challenge',
            template: __webpack_require__("./app/challenges/current-challenge/current-challenge.component.html"),
            styles: [__webpack_require__("./app/challenges/current-challenge/current-challenge.component.css")]
        })
    ], CurrentChallengeComponent);
    return CurrentChallengeComponent;
}());



/***/ }),

/***/ "./app/layouts/flexbox/flexbox.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\nFlexboxLayout {\n  border-color: green;\n  border-width: 5;\n  height: 300;\n}\n\nLabel {\n  width: 50;\n  height: 50;\n}\n\n#i1 {\n  background: red;\n}\n\n#i2 {\n  background: blue;\n}\n\n#i3 {\n  background: orange;\n}\n"

/***/ }),

/***/ "./app/layouts/flexbox/flexbox.component.html":
/***/ (function(module, exports) {

module.exports = "<FlexboxLayout\n  flexDirection=\"row\"\n  justifyContent=\"space-around\"\n  alignItems=\"flex-start\"\n>\n  <Label id=\"i1\" text=\"Item 1\" horizontalAlignment=\"right\"></Label>\n  <Label id=\"i2\" text=\"Item 2\" verticalAlignment=\"top\"></Label>\n  <Label id=\"i3\" text=\"Item 3\" alignSelf=\"flex-end\"></Label>\n</FlexboxLayout>\n"

/***/ }),

/***/ "./app/layouts/flexbox/flexbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexboxComponent", function() { return FlexboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var FlexboxComponent = /** @class */ (function () {
    function FlexboxComponent() {
    }
    FlexboxComponent.prototype.ngOnInit = function () {
    };
    FlexboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-flexbox',
            template: __webpack_require__("./app/layouts/flexbox/flexbox.component.html"),
            styles: [__webpack_require__("./app/layouts/flexbox/flexbox.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FlexboxComponent);
    return FlexboxComponent;
}());



/***/ }),

/***/ "./app/layouts/stack/stack.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\nStackLayout {\n  border-color: green;\n  border-width: 5;\n  padding: 10;\n  height: 300;\n}\n\nlabel {\n  width: 50;\n  height: 50;\n}\n\n#i1 {\n  background: red;\n}\n\n#i2 {\n  background: blue;\n}\n\n#i3 {\n  background: orange;\n}\n"

/***/ }),

/***/ "./app/layouts/stack/stack.component.html":
/***/ (function(module, exports) {

module.exports = "<StackLayout>\n  <Label id=\"i1\" text=\"Item 1\" horizontalAlignment=\"right\"></Label>\n  <Label id=\"i2\" text=\"Item 2\" verticalAlignment=\"top\"></Label>\n  <Label id=\"i3\" text=\"Item 3\"></Label>\n</StackLayout>\n"

/***/ }),

/***/ "./app/layouts/stack/stack.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StackComponent", function() { return StackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var StackComponent = /** @class */ (function () {
    function StackComponent() {
    }
    StackComponent.prototype.ngOnInit = function () {
    };
    StackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-stack',
            template: __webpack_require__("./app/layouts/stack/stack.component.html"),
            styles: [__webpack_require__("./app/layouts/stack/stack.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StackComponent);
    return StackComponent;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY3VycmVudC1jaGFsbGVuZ2UvY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jdXJyZW50LWNoYWxsZW5nZS9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jdXJyZW50LWNoYWxsZW5nZS9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xheW91dHMvZmxleGJveC9mbGV4Ym94LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xheW91dHMvZmxleGJveC9mbGV4Ym94LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9sYXlvdXRzL2ZsZXhib3gvZmxleGJveC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xheW91dHMvc3RhY2svc3RhY2suY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvbGF5b3V0cy9zdGFjay9zdGFjay5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvbGF5b3V0cy9zdGFjay9zdGFjay5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLDRDQUE0QyxX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QTtBQUFBO0FBQWtEO0FBUWxEO0lBRUU7SUFBZ0IsQ0FBQztJQUVqQixpQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUxVLGNBQWM7UUFOMUIsK0RBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLHlFQUFxQzs7U0FHdEMsQ0FBQzs7T0FDVyxjQUFjLENBTzFCO0lBQUQscUJBQUM7Q0FBQTtBQVAwQjs7Ozs7Ozs7Ozs7Ozs7QUNMM0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdDQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsY0FBd0o7QUFDM0I7QUFDN0gsK0RBQStJO0FBQy9JLGdEQUFtRjtBQUNuRiwyQkFBeUQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gXCIuLi8kJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgcmVjdXJzaXZlXCI7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSFuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiksIFwiXCIpO1xuXG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuSW4gTmF0aXZlU2NyaXB0LCB0aGUgYXBwLmNzcyBmaWxlIGlzIHdoZXJlIHlvdSBwbGFjZSBDU1MgcnVsZXMgdGhhdFxcbnlvdSB3b3VsZCBsaWtlIHRvIGFwcGx5IHRvIHlvdXIgZW50aXJlIGFwcGxpY2F0aW9uLiBDaGVjayBvdXRcXG5odHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL3N0eWxpbmcgZm9yIGEgZnVsbCBsaXN0IG9mIHRoZSBDU1NcXG5zZWxlY3RvcnMgYW5kIHByb3BlcnRpZXMgeW91IGNhbiB1c2UgdG8gc3R5bGUgVUkgY29tcG9uZW50cy5cXG5cXG4vKlxcbkluIG1hbnkgY2FzZXMgeW91IG1heSB3YW50IHRvIHVzZSB0aGUgTmF0aXZlU2NyaXB0IGNvcmUgdGhlbWUgaW5zdGVhZFxcbm9mIHdyaXRpbmcgeW91ciBvd24gQ1NTIHJ1bGVzLiBGb3IgYSBmdWxsIGxpc3Qgb2YgY2xhc3MgbmFtZXMgaW4gdGhlIHRoZW1lXFxucmVmZXIgdG8gaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS90aGVtZS5cXG4qL1xcblxcbi5idG4ge1xcbiAgYmFja2dyb3VuZDogIzdjMDE1ZDtcXG4gIGJvcmRlci13aWR0aDogMTtcXG4gIGJvcmRlci1jb2xvcjogIzdjMDE1ZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNSAxMDtcXG4gIGJvcmRlci1yYWRpdXM6IDMwJTtcXG4gIG1hcmdpbjogNSAwO1xcbn1cXG5cXG4uZm9ybS1jb250cm9sIHtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM3YzAxNWQ7XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAyO1xcbiAgbWFyZ2luOiA1IDA7XFxuICBmb250LXNpemU6IDIwO1xcbiAgcGFkZGluZzogOCA0O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxHcmlkTGF5b3V0PlxcbiAgPG5zLWN1cnJlbnQtY2hhbGxlbmdlPjwvbnMtY3VycmVudC1jaGFsbGVuZ2U+XFxuPC9HcmlkTGF5b3V0PlxcbjwhLS0gPFN0YWNrTGF5b3V0PlxcbiAgIDxucy1zdGFjaz48L25zLXN0YWNrPiBcXG4gICAgPG5zLWZsZXhib3g+PC9ucy1mbGV4Ym94PlxcbjwvU3RhY2tMYXlvdXQ+LS0+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYXBwLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7IH1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VycmVudENoYWxsZW5nZUNvbXBvbmVudCB9IGZyb20gJy4vY2hhbGxlbmdlcy9jdXJyZW50LWNoYWxsZW5nZS9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RhY2tDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvc3RhY2svc3RhY2suY29tcG9uZW50JztcbmltcG9ydCB7IEZsZXhib3hDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvZmxleGJveC9mbGV4Ym94LmNvbXBvbmVudCc7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEh0dHBDbGllbnQgd3JhcHBlclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0TW9kdWxlLCBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0FwcENvbXBvbmVudCwgQ3VycmVudENoYWxsZW5nZUNvbXBvbmVudCwgU3RhY2tDb21wb25lbnQsIEZsZXhib3hDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG4vKlxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIudGl0bGUge1xcbiAgZm9udC1zaXplOiAyNjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjN2MwMTVkO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tdG9wOiAxMDtcXG59XFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEdyaWRMYXlvdXQgcm93cz1cXFwiYXV0bywqXFxcIiBjb2x1bW5zPVxcXCIyKiwqXFxcIj5cXG4gIDxUZXh0RmllbGRcXG4gICAgcm93PVxcXCIwXFxcIlxcbiAgICBjb2w9XFxcIjBcXFwiXFxuICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxuICAgIGhpbnQ9XFxcIkNoYWxsZW5nZSB0aXRsZVxcXCJcXG4gICAgWyhuZ01vZGVsKV09XFxcImNoYWxsZW5nZURlc2NyaXB0aW9uXFxcIlxcbiAgPjwvVGV4dEZpZWxkPlxcbiAgPEJ1dHRvblxcbiAgICBjbGFzcz1cXFwiYnRuXFxcIlxcbiAgICByb3c9XFxcIjBcXFwiXFxuICAgIGNvbD1cXFwiMVxcXCJcXG4gICAgKHRhcCk9XFxcIm9uU2V0Q2hhbGxlbmdlKClcXFwiXFxuICAgIHRleHQ9XFxcIlNldCBDaGFsbGVuZ2VcXFwiXFxuICA+PC9CdXR0b24+XFxuICA8TGFiZWxcXG4gICAgcm93PVxcXCIxXFxcIlxcbiAgICBjb2w9XFxcIjBcXFwiXFxuICAgIGNvbFNwYW49XFxcIjJcXFwiXFxuICAgIGNsYXNzPVxcXCJ0aXRsZVxcXCJcXG4gICAgW3RleHRdPVxcXCJjdXJyZW50Q2hhbGxlbmdlXFxcIlxcbiAgPjwvTGFiZWw+XFxuPC9HcmlkTGF5b3V0PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWN1cnJlbnQtY2hhbGxlbmdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIEN1cnJlbnRDaGFsbGVuZ2VDb21wb25lbnQge1xuICBjaGFsbGVuZ2VEZXNjcmlwdGlvbiA9ICcnO1xuICBjdXJyZW50Q2hhbGxlbmdlID0gJyc7XG5cbiAgb25TZXRDaGFsbGVuZ2UoKSB7XG4gICAgdGhpcy5jdXJyZW50Q2hhbGxlbmdlID0gdGhpcy5jaGFsbGVuZ2VEZXNjcmlwdGlvbjtcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcbkZsZXhib3hMYXlvdXQge1xcbiAgYm9yZGVyLWNvbG9yOiBncmVlbjtcXG4gIGJvcmRlci13aWR0aDogNTtcXG4gIGhlaWdodDogMzAwO1xcbn1cXG5cXG5MYWJlbCB7XFxuICB3aWR0aDogNTA7XFxuICBoZWlnaHQ6IDUwO1xcbn1cXG5cXG4jaTEge1xcbiAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG4jaTIge1xcbiAgYmFja2dyb3VuZDogYmx1ZTtcXG59XFxuXFxuI2kzIHtcXG4gIGJhY2tncm91bmQ6IG9yYW5nZTtcXG59XFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEZsZXhib3hMYXlvdXRcXG4gIGZsZXhEaXJlY3Rpb249XFxcInJvd1xcXCJcXG4gIGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1hcm91bmRcXFwiXFxuICBhbGlnbkl0ZW1zPVxcXCJmbGV4LXN0YXJ0XFxcIlxcbj5cXG4gIDxMYWJlbCBpZD1cXFwiaTFcXFwiIHRleHQ9XFxcIkl0ZW0gMVxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwicmlnaHRcXFwiPjwvTGFiZWw+XFxuICA8TGFiZWwgaWQ9XFxcImkyXFxcIiB0ZXh0PVxcXCJJdGVtIDJcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJ0b3BcXFwiPjwvTGFiZWw+XFxuICA8TGFiZWwgaWQ9XFxcImkzXFxcIiB0ZXh0PVxcXCJJdGVtIDNcXFwiIGFsaWduU2VsZj1cXFwiZmxleC1lbmRcXFwiPjwvTGFiZWw+XFxuPC9GbGV4Ym94TGF5b3V0PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtZmxleGJveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9mbGV4Ym94LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmxleGJveC5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIEZsZXhib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcblN0YWNrTGF5b3V0IHtcXG4gIGJvcmRlci1jb2xvcjogZ3JlZW47XFxuICBib3JkZXItd2lkdGg6IDU7XFxuICBwYWRkaW5nOiAxMDtcXG4gIGhlaWdodDogMzAwO1xcbn1cXG5cXG5sYWJlbCB7XFxuICB3aWR0aDogNTA7XFxuICBoZWlnaHQ6IDUwO1xcbn1cXG5cXG4jaTEge1xcbiAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG4jaTIge1xcbiAgYmFja2dyb3VuZDogYmx1ZTtcXG59XFxuXFxuI2kzIHtcXG4gIGJhY2tncm91bmQ6IG9yYW5nZTtcXG59XFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrTGF5b3V0PlxcbiAgPExhYmVsIGlkPVxcXCJpMVxcXCIgdGV4dD1cXFwiSXRlbSAxXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJyaWdodFxcXCI+PC9MYWJlbD5cXG4gIDxMYWJlbCBpZD1cXFwiaTJcXFwiIHRleHQ9XFxcIkl0ZW0gMlxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcInRvcFxcXCI+PC9MYWJlbD5cXG4gIDxMYWJlbCBpZD1cXFwiaTNcXFwiIHRleHQ9XFxcIkl0ZW0gM1xcXCI+PC9MYWJlbD5cXG48L1N0YWNrTGF5b3V0PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtc3RhY2snLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RhY2suY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdGFjay5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIFN0YWNrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsIi8vIHRoaXMgaW1wb3J0IHNob3VsZCBiZSBmaXJzdCBpbiBvcmRlciB0byBsb2FkIHNvbWUgcmVxdWlyZWQgc2V0dGluZ3MgKGxpa2UgZ2xvYmFscyBhbmQgcmVmbGVjdC1tZXRhZGF0YSlcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xuXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tIFwiLi9hcHAvYXBwLm1vZHVsZVwiO1xuXG4vLyBBIHRyYWRpdGlvbmFsIE5hdGl2ZVNjcmlwdCBhcHBsaWNhdGlvbiBzdGFydHMgYnkgaW5pdGlhbGl6aW5nIGdsb2JhbCBvYmplY3RzLCBzZXR0aW5nIHVwIGdsb2JhbCBDU1MgcnVsZXMsIGNyZWF0aW5nLCBhbmQgbmF2aWdhdGluZyB0byB0aGUgbWFpbiBwYWdlLlxuLy8gQW5ndWxhciBhcHBsaWNhdGlvbnMgbmVlZCB0byB0YWtlIGNhcmUgb2YgdGhlaXIgb3duIGluaXRpYWxpemF0aW9uOiBtb2R1bGVzLCBjb21wb25lbnRzLCBkaXJlY3RpdmVzLCByb3V0ZXMsIERJIHByb3ZpZGVycy5cbi8vIEEgTmF0aXZlU2NyaXB0IEFuZ3VsYXIgYXBwIG5lZWRzIHRvIG1ha2UgYm90aCBwYXJhZGlnbXMgd29yayB0b2dldGhlciwgc28gd2UgcHJvdmlkZSBhIHdyYXBwZXIgcGxhdGZvcm0gb2JqZWN0LCBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMsXG4vLyB0aGF0IHNldHMgdXAgYSBOYXRpdmVTY3JpcHQgYXBwbGljYXRpb24gYW5kIGNhbiBib290c3RyYXAgdGhlIEFuZ3VsYXIgZnJhbWV3b3JrLlxucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9