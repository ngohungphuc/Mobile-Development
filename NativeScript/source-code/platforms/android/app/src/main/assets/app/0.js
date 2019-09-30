(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./app/challenges/challegens-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChalengesRoutingModule", function() { return ChalengesRoutingModule; });
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _challenge_tabs_challenge_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/challenges/challenge-tabs/challenge-tabs.component.ts");
/* harmony import */ var _today_today_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/challenges/today/today.component.ts");
/* harmony import */ var _current_challenge_current_challenge_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/challenges/current-challenge/current-challenge.component.ts");





//import { ChallengeEditComponent } from "./challenge-edit/challenge-edit.component";
var routes = [
    {
        path: "tabs",
        component: _challenge_tabs_challenge_tabs_component__WEBPACK_IMPORTED_MODULE_2__["ChallengeTabsComponent"],
        children: [
            { path: "today", component: _today_today_component__WEBPACK_IMPORTED_MODULE_3__["TodayComponent"], outlet: "today" },
            {
                path: "current-challenge",
                component: _current_challenge_current_challenge_component__WEBPACK_IMPORTED_MODULE_4__["CurrentChallengeComponent"],
                outlet: "currentChallenge"
            }
        ]
    },
    {
        path: ":mode",
        //loadChildren: "./challenge-edit/challenge-edit.module#ChallengeEditModule"
        loadChildren: function () {
            return __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, "./app/challenges/challenge-edit/challenge-edit.module.ts")).then(function (ce) { return ce.ChallengeEditModule; });
        }
        //component: ChallengeEditComponent
    },
    { path: "", redirectTo: "/challenges/tabs", pathMatch: "full" }
];
var ChalengesRoutingModule = /** @class */ (function () {
    function ChalengesRoutingModule() {
    }
    ChalengesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_0__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_0__["NativeScriptRouterModule"]]
        })
    ], ChalengesRoutingModule);
    return ChalengesRoutingModule;
}());



/***/ }),

/***/ "./app/challenges/challenge-tabs/challenge-tabs.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/challenges/challenge-tabs/challenge-tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<TabView\r\n  androidTabsPosition=\"bottom\"\r\n  androidSelectedTabHighlightColor=\"#7c015d\"\r\n  selectedTabTextColor=\"#7c015d\"\r\n>\r\n  <StackLayout *tabItem=\"{ title: 'Today' }\">\r\n    <page-router-outlet name=\"today\"> </page-router-outlet>\r\n  </StackLayout>\r\n  <StackLayout *tabItem=\"{ title: 'Current Challenge' }\">\r\n    <page-router-outlet name=\"currentChallenge\"> </page-router-outlet>\r\n  </StackLayout>\r\n</TabView>\r\n"

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



var ChallengeTabsComponent = /** @class */ (function () {
    function ChallengeTabsComponent(router, active) {
        this.router = router;
        this.active = active;
    }
    ChallengeTabsComponent.prototype.ngOnInit = function () {
        this.router.navigate([
            {
                outlets: { currentChallenge: ["current-challenge"], today: ["today"] }
            }
        ], { relativeTo: this.active });
    };
    ChallengeTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-challenge-tabs",
            template: __webpack_require__("./app/challenges/challenge-tabs/challenge-tabs.component.html"),
            styles: [__webpack_require__("./app/challenges/challenge-tabs/challenge-tabs.component.css")]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ChallengeTabsComponent);
    return ChallengeTabsComponent;
}());



/***/ }),

/***/ "./app/challenges/challenges.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChanllengesModule", function() { return ChanllengesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/shared/shared.module.ts");
/* harmony import */ var _challegens_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/challenges/challegens-routing.module.ts");
/* harmony import */ var _current_challenge_current_challenge_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/challenges/current-challenge/current-challenge.component.ts");
/* harmony import */ var _challenge_tabs_challenge_tabs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/challenges/challenge-tabs/challenge-tabs.component.ts");
/* harmony import */ var _today_today_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/challenges/today/today.component.ts");







//import { ChallengeEditComponent } from "./challenge-edit/challenge-edit.component";
var ChanllengesModule = /** @class */ (function () {
    function ChanllengesModule() {
    }
    ChanllengesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_challegens_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChalengesRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"]],
            declarations: [
                _current_challenge_current_challenge_component__WEBPACK_IMPORTED_MODULE_4__["CurrentChallengeComponent"],
                _challenge_tabs_challenge_tabs_component__WEBPACK_IMPORTED_MODULE_5__["ChallengeTabsComponent"],
                _today_today_component__WEBPACK_IMPORTED_MODULE_6__["TodayComponent"],
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]],
        })
    ], ChanllengesModule);
    return ChanllengesModule;
}());



/***/ }),

/***/ "./app/challenges/current-challenge/current-challenge.component.css":
/***/ (function(module, exports) {

module.exports = ".title {\n  font-size: 26;\n  text-align: center;\n  color: #7c015d;\n  font-weight: bold;\n  margin-top: 10;\n}\n"

/***/ }),

/***/ "./app/challenges/current-challenge/current-challenge.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <ListView\r\n  [items]=\"challenges\"\r\n  (itemTap)=\"onItemTap($event)\"\r\n  iosEstimatedRowHeight=\"65\"\r\n>\r\n  <ng-template let-challenge=\"item\" let-i=\"index\">\r\n    <GirdLayout rows=\"40,20\" colums=\"50,*\">\r\n      <Label [text]=\"i\" row=\"0\" col=\"0\" rowSpan=\"2\"></Label>\r\n      <Label [text]=\"challenge\" row=\"0\" col=\"1\"></Label>\r\n      <Label text=\"Item content row 2\" row=\"1\" col=\"1\"></Label>\r\n    </GirdLayout>\r\n  </ng-template>\r\n</ListView> -->\r\n\r\n<!-- <ScrollView>\r\n    <StackLayout>\r\n      <Label\r\n        class=\"title\"\r\n        [text]=\"currentChallenge\"\r\n        horizontalAlignment=\"center\"\r\n        *ngFor=\"let currentChallenge of challenges\"\r\n      ></Label>\r\n    </StackLayout>\r\n  </ScrollView> -->\r\n<ns-action-bar [title]=\"'Current challenge'\" [showBackButton]=\"false\">\r\n  <ActionItem\r\n    ios.position=\"right\"\r\n    android.position=\"actionBar\"\r\n    nsRouterLink=\"/challenges/replace\"\r\n    ><Label text=\"Replace\"></Label\r\n  ></ActionItem>\r\n  <ActionItem\r\n    ios.position=\"right\"\r\n    android.position=\"actionBar\"\r\n    nsRouterLink=\"/challenges/edit\"\r\n    pageTransition=\"slideLeft\"\r\n    ><Label text=\"Edit\"></Label\r\n  ></ActionItem>\r\n</ns-action-bar>\r\n<StackLayout>\r\n  <Label\r\n    class=\"title\"\r\n    text=\"The current challenge\"\r\n    horizontalAlignment=\"center\"\r\n  ></Label>\r\n  <!--   <Button text=\"Edit\" (tap)=\"onEdit()\"></Button>\r\n  <Button text=\"Replace\" nsRouterLink=\"/challenges/replace\"></Button> -->\r\n  <Button text=\"Change status\" (tap)=\"onChangeStatus()\"></Button>\r\n</StackLayout>\r\n"

/***/ }),

/***/ "./app/challenges/current-challenge/current-challenge.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentChallengeComponent", function() { return CurrentChallengeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/modal-dialog.js");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _day_modal_day_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/challenges/day-modal/day-modal.component.ts");
/* harmony import */ var _shared_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/shared/ui.service.ts");





var CurrentChallengeComponent = /** @class */ (function () {
    function CurrentChallengeComponent(router, modelDialog, vcRef, uIService) {
        this.router = router;
        this.modelDialog = modelDialog;
        this.vcRef = vcRef;
        this.uIService = uIService;
    }
    CurrentChallengeComponent.prototype.onEdit = function () {
        this.router.navigate(["/challenges/edit"], {
            transition: { name: "slideLeft" }
        });
    };
    CurrentChallengeComponent.prototype.onChangeStatus = function () {
        this.modelDialog.showModal(_day_modal_day_modal_component__WEBPACK_IMPORTED_MODULE_3__["DayModalComponent"], {
            fullscreen: true,
            viewContainerRef: this.uIService.getRootVCRef()
                ? this.uIService.getRootVCRef()
                : this.vcRef,
            context: {
                date: new Date()
            }
        }).then(function (action) {
            console.log(action);
        });
    };
    CurrentChallengeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-current-challenge",
            template: __webpack_require__("./app/challenges/current-challenge/current-challenge.component.html"),
            styles: [__webpack_require__("./app/challenges/current-challenge/current-challenge.component.css")]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"],
            nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_2__["ModalDialogService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _shared_ui_service__WEBPACK_IMPORTED_MODULE_4__["UIService"]])
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



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVnZW5zLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS10YWJzL2NoYWxsZW5nZS10YWJzLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlLXRhYnMvY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlLXRhYnMvY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZXMubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2N1cnJlbnQtY2hhbGxlbmdlL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY3VycmVudC1jaGFsbGVuZ2UvY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY3VycmVudC1jaGFsbGVuZ2UvY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL3RvZGF5L3RvZGF5LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvdG9kYXkvdG9kYXkuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvdG9kYXkvdG9kYXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUU7QUFDOUI7QUFHMEM7QUFDMUI7QUFDbUM7QUFDNUYscUZBQXFGO0FBRXJGLElBQU0sTUFBTSxHQUFXO0lB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Q0EsQ0FBQztJQUxVLGNBQWM7UUFOMUIsK0RBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLDRFQUFxQzs7U0FHdEMsQ0FBQzs7T0FDVyxjQUFjLENBTzFCO0lBQUQscUJBQUM7Q0FBQTtBQVAwQiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IENoYWxsZW5nZVRhYnNDb21wb25lbnQgfSBmcm9tIFwiLi9jaGFsbGVuZ2UtdGFicy9jaGFsbGVuZ2UtdGFicy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVG9kYXlDb21wb25lbnQgfSBmcm9tIFwiLi90b2RheS90b2RheS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ3VycmVudENoYWxsZW5nZUNvbXBvbmVudCB9IGZyb20gXCIuL2N1cnJlbnQtY2hhbGxlbmdlL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudFwiO1xyXG4vL2ltcG9ydCB7IENoYWxsZW5nZUVkaXRDb21wb25lbnQgfSBmcm9tIFwiLi9jaGFsbGVuZ2UtZWRpdC9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6IFwidGFic1wiLFxyXG4gICAgY29tcG9uZW50OiBDaGFsbGVuZ2VUYWJzQ29tcG9uZW50LFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAgeyBwYXRoOiBcInRvZGF5XCIsIGNvbXBvbmVudDogVG9kYXlDb21wb25lbnQsIG91dGxldDogXCJ0b2RheVwiIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBcImN1cnJlbnQtY2hhbGxlbmdlXCIsXHJcbiAgICAgICAgY29tcG9uZW50OiBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50LFxyXG4gICAgICAgIG91dGxldDogXCJjdXJyZW50Q2hhbGxlbmdlXCJcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCI6bW9kZVwiLFxyXG4gICAgLy9sb2FkQ2hpbGRyZW46IFwiLi9jaGFsbGVuZ2UtZWRpdC9jaGFsbGVuZ2UtZWRpdC5tb2R1bGUjQ2hhbGxlbmdlRWRpdE1vZHVsZVwiXHJcbiAgICBsb2FkQ2hpbGRyZW46ICgpID0+XHJcbiAgICAgIGltcG9ydChcIi4vY2hhbGxlbmdlLWVkaXQvY2hhbGxlbmdlLWVkaXQubW9kdWxlXCIpLnRoZW4oXHJcbiAgICAgICAgY2UgPT4gY2UuQ2hhbGxlbmdlRWRpdE1vZHVsZVxyXG4gICAgICApXHJcbiAgICAvL2NvbXBvbmVudDogQ2hhbGxlbmdlRWRpdENvbXBvbmVudFxyXG4gIH0sXHJcbiAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9jaGFsbGVuZ2VzL3RhYnNcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENoYWxlbmdlc1JvdXRpbmdNb2R1bGUge31cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxUYWJWaWV3XFxyXFxuICBhbmRyb2lkVGFic1Bvc2l0aW9uPVxcXCJib3R0b21cXFwiXFxyXFxuICBhbmRyb2lkU2VsZWN0ZWRUYWJIaWdobGlnaHRDb2xvcj1cXFwiIzdjMDE1ZFxcXCJcXHJcXG4gIHNlbGVjdGVkVGFiVGV4dENvbG9yPVxcXCIjN2MwMTVkXFxcIlxcclxcbj5cXHJcXG4gIDxTdGFja0xheW91dCAqdGFiSXRlbT1cXFwieyB0aXRsZTogJ1RvZGF5JyB9XFxcIj5cXHJcXG4gICAgPHBhZ2Utcm91dGVyLW91dGxldCBuYW1lPVxcXCJ0b2RheVxcXCI+IDwvcGFnZS1yb3V0ZXItb3V0bGV0PlxcclxcbiAgPC9TdGFja0xheW91dD5cXHJcXG4gIDxTdGFja0xheW91dCAqdGFiSXRlbT1cXFwieyB0aXRsZTogJ0N1cnJlbnQgQ2hhbGxlbmdlJyB9XFxcIj5cXHJcXG4gICAgPHBhZ2Utcm91dGVyLW91dGxldCBuYW1lPVxcXCJjdXJyZW50Q2hhbGxlbmdlXFxcIj4gPC9wYWdlLXJvdXRlci1vdXRsZXQ+XFxyXFxuICA8L1N0YWNrTGF5b3V0PlxcclxcbjwvVGFiVmlldz5cXHJcXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJucy1jaGFsbGVuZ2UtdGFic1wiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhbGxlbmdlVGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgIHByaXZhdGUgYWN0aXZlOiBBY3RpdmF0ZWRSb3V0ZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShcclxuICAgICAgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG91dGxldHM6IHsgY3VycmVudENoYWxsZW5nZTogW1wiY3VycmVudC1jaGFsbGVuZ2VcIl0sIHRvZGF5OiBbXCJ0b2RheVwiXSB9XHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICB7IHJlbGF0aXZlVG86IHRoaXMuYWN0aXZlIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuXHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xyXG5cclxuaW1wb3J0IHsgQ2hhbGVuZ2VzUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2NoYWxsZWdlbnMtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgQ3VycmVudENoYWxsZW5nZUNvbXBvbmVudCB9IGZyb20gXCIuL2N1cnJlbnQtY2hhbGxlbmdlL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VUYWJzQ29tcG9uZW50IH0gZnJvbSBcIi4vY2hhbGxlbmdlLXRhYnMvY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRvZGF5Q29tcG9uZW50IH0gZnJvbSBcIi4vdG9kYXkvdG9kYXkuY29tcG9uZW50XCI7XHJcbi8vaW1wb3J0IHsgQ2hhbGxlbmdlRWRpdENvbXBvbmVudCB9IGZyb20gXCIuL2NoYWxsZW5nZS1lZGl0L2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ2hhbGVuZ2VzUm91dGluZ01vZHVsZSwgU2hhcmVkTW9kdWxlLCBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQ3VycmVudENoYWxsZW5nZUNvbXBvbmVudCxcclxuICAgIENoYWxsZW5nZVRhYnNDb21wb25lbnQsXHJcbiAgICBUb2RheUNvbXBvbmVudCxcclxuICAgIC8vQ2hhbGxlbmdlRWRpdENvbXBvbmVudFxyXG4gIF0sXHJcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhbmxsZW5nZXNNb2R1bGUge31cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi50aXRsZSB7XFxuICBmb250LXNpemU6IDI2O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICM3YzAxNWQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi10b3A6IDEwO1xcbn1cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIDxMaXN0Vmlld1xcclxcbiAgW2l0ZW1zXT1cXFwiY2hhbGxlbmdlc1xcXCJcXHJcXG4gIChpdGVtVGFwKT1cXFwib25JdGVtVGFwKCRldmVudClcXFwiXFxyXFxuICBpb3NFc3RpbWF0ZWRSb3dIZWlnaHQ9XFxcIjY1XFxcIlxcclxcbj5cXHJcXG4gIDxuZy10ZW1wbGF0ZSBsZXQtY2hhbGxlbmdlPVxcXCJpdGVtXFxcIiBsZXQtaT1cXFwiaW5kZXhcXFwiPlxcclxcbiAgICA8R2lyZExheW91dCByb3dzPVxcXCI0MCwyMFxcXCIgY29sdW1zPVxcXCI1MCwqXFxcIj5cXHJcXG4gICAgICA8TGFiZWwgW3RleHRdPVxcXCJpXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgcm93U3Bhbj1cXFwiMlxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICA8TGFiZWwgW3RleHRdPVxcXCJjaGFsbGVuZ2VcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIj48L0xhYmVsPlxcclxcbiAgICAgIDxMYWJlbCB0ZXh0PVxcXCJJdGVtIGNvbnRlbnQgcm93IDJcXFwiIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIxXFxcIj48L0xhYmVsPlxcclxcbiAgICA8L0dpcmRMYXlvdXQ+XFxyXFxuICA8L25nLXRlbXBsYXRlPlxcclxcbjwvTGlzdFZpZXc+IC0tPlxcclxcblxcclxcbjwhLS0gPFNjcm9sbFZpZXc+XFxyXFxuICAgIDxTdGFja0xheW91dD5cXHJcXG4gICAgICA8TGFiZWxcXHJcXG4gICAgICAgIGNsYXNzPVxcXCJ0aXRsZVxcXCJcXHJcXG4gICAgICAgIFt0ZXh0XT1cXFwiY3VycmVudENoYWxsZW5nZVxcXCJcXHJcXG4gICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCJcXHJcXG4gICAgICAgICpuZ0Zvcj1cXFwibGV0IGN1cnJlbnRDaGFsbGVuZ2Ugb2YgY2hhbGxlbmdlc1xcXCJcXHJcXG4gICAgICA+PC9MYWJlbD5cXHJcXG4gICAgPC9TdGFja0xheW91dD5cXHJcXG4gIDwvU2Nyb2xsVmlldz4gLS0+XFxyXFxuPG5zLWFjdGlvbi1iYXIgW3RpdGxlXT1cXFwiJ0N1cnJlbnQgY2hhbGxlbmdlJ1xcXCIgW3Nob3dCYWNrQnV0dG9uXT1cXFwiZmFsc2VcXFwiPlxcclxcbiAgPEFjdGlvbkl0ZW1cXHJcXG4gICAgaW9zLnBvc2l0aW9uPVxcXCJyaWdodFxcXCJcXHJcXG4gICAgYW5kcm9pZC5wb3NpdGlvbj1cXFwiYWN0aW9uQmFyXFxcIlxcclxcbiAgICBuc1JvdXRlckxpbms9XFxcIi9jaGFsbGVuZ2VzL3JlcGxhY2VcXFwiXFxyXFxuICAgID48TGFiZWwgdGV4dD1cXFwiUmVwbGFjZVxcXCI+PC9MYWJlbFxcclxcbiAgPjwvQWN0aW9uSXRlbT5cXHJcXG4gIDxBY3Rpb25JdGVtXFxyXFxuICAgIGlvcy5wb3NpdGlvbj1cXFwicmlnaHRcXFwiXFxyXFxuICAgIGFuZHJvaWQucG9zaXRpb249XFxcImFjdGlvbkJhclxcXCJcXHJcXG4gICAgbnNSb3V0ZXJMaW5rPVxcXCIvY2hhbGxlbmdlcy9lZGl0XFxcIlxcclxcbiAgICBwYWdlVHJhbnNpdGlvbj1cXFwic2xpZGVMZWZ0XFxcIlxcclxcbiAgICA+PExhYmVsIHRleHQ9XFxcIkVkaXRcXFwiPjwvTGFiZWxcXHJcXG4gID48L0FjdGlvbkl0ZW0+XFxyXFxuPC9ucy1hY3Rpb24tYmFyPlxcclxcbjxTdGFja0xheW91dD5cXHJcXG4gIDxMYWJlbFxcclxcbiAgICBjbGFzcz1cXFwidGl0bGVcXFwiXFxyXFxuICAgIHRleHQ9XFxcIlRoZSBjdXJyZW50IGNoYWxsZW5nZVxcXCJcXHJcXG4gICAgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIlxcclxcbiAgPjwvTGFiZWw+XFxyXFxuICA8IS0tICAgPEJ1dHRvbiB0ZXh0PVxcXCJFZGl0XFxcIiAodGFwKT1cXFwib25FZGl0KClcXFwiPjwvQnV0dG9uPlxcclxcbiAgPEJ1dHRvbiB0ZXh0PVxcXCJSZXBsYWNlXFxcIiBuc1JvdXRlckxpbms9XFxcIi9jaGFsbGVuZ2VzL3JlcGxhY2VcXFwiPjwvQnV0dG9uPiAtLT5cXHJcXG4gIDxCdXR0b24gdGV4dD1cXFwiQ2hhbmdlIHN0YXR1c1xcXCIgKHRhcCk9XFxcIm9uQ2hhbmdlU3RhdHVzKClcXFwiPjwvQnV0dG9uPlxcclxcbjwvU3RhY2tMYXlvdXQ+XFxyXFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XHJcblxyXG5pbXBvcnQgeyBEYXlNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuLi9kYXktbW9kYWwvZGF5LW1vZGFsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBVSVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VpLnNlcnZpY2VcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibnMtY3VycmVudC1jaGFsbGVuZ2VcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEN1cnJlbnRDaGFsbGVuZ2VDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICBwcml2YXRlIG1vZGVsRGlhbG9nOiBNb2RhbERpYWxvZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSB1SVNlcnZpY2U6IFVJU2VydmljZVxyXG4gICkge31cclxuXHJcbiAgb25FZGl0KCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2NoYWxsZW5nZXMvZWRpdFwiXSwge1xyXG4gICAgICB0cmFuc2l0aW9uOiB7IG5hbWU6IFwic2xpZGVMZWZ0XCIgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZVN0YXR1cygpIHtcclxuICAgIHRoaXMubW9kZWxEaWFsb2cuc2hvd01vZGFsKERheU1vZGFsQ29tcG9uZW50LCB7XHJcbiAgICAgIGZ1bGxzY3JlZW46IHRydWUsXHJcbiAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudUlTZXJ2aWNlLmdldFJvb3RWQ1JlZigpXHJcbiAgICAgICAgPyB0aGlzLnVJU2VydmljZS5nZXRSb290VkNSZWYoKVxyXG4gICAgICAgIDogdGhpcy52Y1JlZixcclxuICAgICAgY29udGV4dDoge1xyXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKClcclxuICAgICAgfVxyXG4gICAgfSkudGhlbigoYWN0aW9uOnN0cmluZykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJcIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8bnMtYWN0aW9uLWJhclxcclxcbiAgdGl0bGU9XFxcIlRvZGF5J3MgQ2hhbGxlbmdlXFxcIlxcclxcbiAgW3Nob3dCYWNrQnV0dG9uXT1cXFwiZmFsc2VcXFwiXFxyXFxuPjwvbnMtYWN0aW9uLWJhcj5cXHJcXG48U3RhY2tMYXlvdXQ+XFxyXFxuICA8TGFiZWwgdGV4dD1cXFwiVG9kYXlcXFwiPjwvTGFiZWw+XFxyXFxuPC9TdGFja0xheW91dD5cXHJcXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLXRvZGF5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RvZGF5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9kYXkuY29tcG9uZW50LmNzcyddLFxuICBcbn0pXG5leHBvcnQgY2xhc3MgVG9kYXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==