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
            ]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVnZW5zLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS10YWJzL2NoYWxsZW5nZS10YWJzLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlLXRhYnMvY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlLXRhYnMvY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZXMubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2N1cnJlbnQtY2hhbGxlbmdlL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY3VycmVudC1jaGFsbGVuZ2UvY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY3VycmVudC1jaGFsbGVuZ2UvY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL3RvZGF5L3RvZGF5LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvdG9kYXkvdG9kYXkuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvdG9kYXkvdG9kYXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUU7QUFDOUI7QUFHMEM7QUFDMUI7QUFDbUM7QUFDNUYscUZBQXFGO0FBRXJGLElBQU0sTUFBTSxHQUFXO0lB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QUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQiw0RUFBcUM7O1NBR3RDLENBQUM7O09BQ1csY0FBYyxDQU8xQjtJQUFELHFCQUFDO0NBQUE7QUFQMEIiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBDaGFsbGVuZ2VUYWJzQ29tcG9uZW50IH0gZnJvbSBcIi4vY2hhbGxlbmdlLXRhYnMvY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRvZGF5Q29tcG9uZW50IH0gZnJvbSBcIi4vdG9kYXkvdG9kYXkuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEN1cnJlbnRDaGFsbGVuZ2VDb21wb25lbnQgfSBmcm9tIFwiLi9jdXJyZW50LWNoYWxsZW5nZS9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnRcIjtcclxuLy9pbXBvcnQgeyBDaGFsbGVuZ2VFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vY2hhbGxlbmdlLWVkaXQvY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiBcInRhYnNcIixcclxuICAgIGNvbXBvbmVudDogQ2hhbGxlbmdlVGFic0NvbXBvbmVudCxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHsgcGF0aDogXCJ0b2RheVwiLCBjb21wb25lbnQ6IFRvZGF5Q29tcG9uZW50LCBvdXRsZXQ6IFwidG9kYXlcIiB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogXCJjdXJyZW50LWNoYWxsZW5nZVwiLFxyXG4gICAgICAgIGNvbXBvbmVudDogQ3VycmVudENoYWxsZW5nZUNvbXBvbmVudCxcclxuICAgICAgICBvdXRsZXQ6IFwiY3VycmVudENoYWxsZW5nZVwiXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiOm1vZGVcIixcclxuICAgIC8vbG9hZENoaWxkcmVuOiBcIi4vY2hhbGxlbmdlLWVkaXQvY2hhbGxlbmdlLWVkaXQubW9kdWxlI0NoYWxsZW5nZUVkaXRNb2R1bGVcIlxyXG4gICAgbG9hZENoaWxkcmVuOiAoKSA9PlxyXG4gICAgICBpbXBvcnQoXCIuL2NoYWxsZW5nZS1lZGl0L2NoYWxsZW5nZS1lZGl0Lm1vZHVsZVwiKS50aGVuKFxyXG4gICAgICAgIGNlID0+IGNlLkNoYWxsZW5nZUVkaXRNb2R1bGVcclxuICAgICAgKVxyXG4gICAgLy9jb21wb25lbnQ6IENoYWxsZW5nZUVkaXRDb21wb25lbnRcclxuICB9LFxyXG4gIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvY2hhbGxlbmdlcy90YWJzXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGFsZW5nZXNSb3V0aW5nTW9kdWxlIHt9XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJcIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8VGFiVmlld1xcclxcbiAgYW5kcm9pZFRhYnNQb3NpdGlvbj1cXFwiYm90dG9tXFxcIlxcclxcbiAgYW5kcm9pZFNlbGVjdGVkVGFiSGlnaGxpZ2h0Q29sb3I9XFxcIiM3YzAxNWRcXFwiXFxyXFxuICBzZWxlY3RlZFRhYlRleHRDb2xvcj1cXFwiIzdjMDE1ZFxcXCJcXHJcXG4+XFxyXFxuICA8U3RhY2tMYXlvdXQgKnRhYkl0ZW09XFxcInsgdGl0bGU6ICdUb2RheScgfVxcXCI+XFxyXFxuICAgIDxwYWdlLXJvdXRlci1vdXRsZXQgbmFtZT1cXFwidG9kYXlcXFwiPiA8L3BhZ2Utcm91dGVyLW91dGxldD5cXHJcXG4gIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICA8U3RhY2tMYXlvdXQgKnRhYkl0ZW09XFxcInsgdGl0bGU6ICdDdXJyZW50IENoYWxsZW5nZScgfVxcXCI+XFxyXFxuICAgIDxwYWdlLXJvdXRlci1vdXRsZXQgbmFtZT1cXFwiY3VycmVudENoYWxsZW5nZVxcXCI+IDwvcGFnZS1yb3V0ZXItb3V0bGV0PlxcclxcbiAgPC9TdGFja0xheW91dD5cXHJcXG48L1RhYlZpZXc+XFxyXFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibnMtY2hhbGxlbmdlLXRhYnNcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2NoYWxsZW5nZS10YWJzLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2NoYWxsZW5nZS10YWJzLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIENoYWxsZW5nZVRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICBwcml2YXRlIGFjdGl2ZTogQWN0aXZhdGVkUm91dGVcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoXHJcbiAgICAgIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBvdXRsZXRzOiB7IGN1cnJlbnRDaGFsbGVuZ2U6IFtcImN1cnJlbnQtY2hhbGxlbmdlXCJdLCB0b2RheTogW1widG9kYXlcIl0gfVxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgeyByZWxhdGl2ZVRvOiB0aGlzLmFjdGl2ZSB9XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuXHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xyXG5cclxuaW1wb3J0IHsgQ2hhbGVuZ2VzUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2NoYWxsZWdlbnMtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgQ3VycmVudENoYWxsZW5nZUNvbXBvbmVudCB9IGZyb20gXCIuL2N1cnJlbnQtY2hhbGxlbmdlL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VUYWJzQ29tcG9uZW50IH0gZnJvbSBcIi4vY2hhbGxlbmdlLXRhYnMvY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRvZGF5Q29tcG9uZW50IH0gZnJvbSBcIi4vdG9kYXkvdG9kYXkuY29tcG9uZW50XCI7XHJcbi8vaW1wb3J0IHsgQ2hhbGxlbmdlRWRpdENvbXBvbmVudCB9IGZyb20gXCIuL2NoYWxsZW5nZS1lZGl0L2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ2hhbGVuZ2VzUm91dGluZ01vZHVsZSwgU2hhcmVkTW9kdWxlLCBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQ3VycmVudENoYWxsZW5nZUNvbXBvbmVudCxcclxuICAgIENoYWxsZW5nZVRhYnNDb21wb25lbnQsXHJcbiAgICBUb2RheUNvbXBvbmVudCxcclxuICAgIC8vQ2hhbGxlbmdlRWRpdENvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENoYW5sbGVuZ2VzTW9kdWxlIHt9XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIudGl0bGUge1xcbiAgZm9udC1zaXplOiAyNjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjN2MwMTVkO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tdG9wOiAxMDtcXG59XFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSA8TGlzdFZpZXdcXHJcXG4gIFtpdGVtc109XFxcImNoYWxsZW5nZXNcXFwiXFxyXFxuICAoaXRlbVRhcCk9XFxcIm9uSXRlbVRhcCgkZXZlbnQpXFxcIlxcclxcbiAgaW9zRXN0aW1hdGVkUm93SGVpZ2h0PVxcXCI2NVxcXCJcXHJcXG4+XFxyXFxuICA8bmctdGVtcGxhdGUgbGV0LWNoYWxsZW5nZT1cXFwiaXRlbVxcXCIgbGV0LWk9XFxcImluZGV4XFxcIj5cXHJcXG4gICAgPEdpcmRMYXlvdXQgcm93cz1cXFwiNDAsMjBcXFwiIGNvbHVtcz1cXFwiNTAsKlxcXCI+XFxyXFxuICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiaVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIHJvd1NwYW49XFxcIjJcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiY2hhbGxlbmdlXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICA8TGFiZWwgdGV4dD1cXFwiSXRlbSBjb250ZW50IHJvdyAyXFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgPC9HaXJkTGF5b3V0PlxcclxcbiAgPC9uZy10ZW1wbGF0ZT5cXHJcXG48L0xpc3RWaWV3PiAtLT5cXHJcXG5cXHJcXG48IS0tIDxTY3JvbGxWaWV3PlxcclxcbiAgICA8U3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgPExhYmVsXFxyXFxuICAgICAgICBjbGFzcz1cXFwidGl0bGVcXFwiXFxyXFxuICAgICAgICBbdGV4dF09XFxcImN1cnJlbnRDaGFsbGVuZ2VcXFwiXFxyXFxuICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiXFxyXFxuICAgICAgICAqbmdGb3I9XFxcImxldCBjdXJyZW50Q2hhbGxlbmdlIG9mIGNoYWxsZW5nZXNcXFwiXFxyXFxuICAgICAgPjwvTGFiZWw+XFxyXFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICA8L1Njcm9sbFZpZXc+IC0tPlxcclxcbjxucy1hY3Rpb24tYmFyIFt0aXRsZV09XFxcIidDdXJyZW50IGNoYWxsZW5nZSdcXFwiIFtzaG93QmFja0J1dHRvbl09XFxcImZhbHNlXFxcIj5cXHJcXG4gIDxBY3Rpb25JdGVtXFxyXFxuICAgIGlvcy5wb3NpdGlvbj1cXFwicmlnaHRcXFwiXFxyXFxuICAgIGFuZHJvaWQucG9zaXRpb249XFxcImFjdGlvbkJhclxcXCJcXHJcXG4gICAgbnNSb3V0ZXJMaW5rPVxcXCIvY2hhbGxlbmdlcy9yZXBsYWNlXFxcIlxcclxcbiAgICA+PExhYmVsIHRleHQ9XFxcIlJlcGxhY2VcXFwiPjwvTGFiZWxcXHJcXG4gID48L0FjdGlvbkl0ZW0+XFxyXFxuICA8QWN0aW9uSXRlbVxcclxcbiAgICBpb3MucG9zaXRpb249XFxcInJpZ2h0XFxcIlxcclxcbiAgICBhbmRyb2lkLnBvc2l0aW9uPVxcXCJhY3Rpb25CYXJcXFwiXFxyXFxuICAgIG5zUm91dGVyTGluaz1cXFwiL2NoYWxsZW5nZXMvZWRpdFxcXCJcXHJcXG4gICAgcGFnZVRyYW5zaXRpb249XFxcInNsaWRlTGVmdFxcXCJcXHJcXG4gICAgPjxMYWJlbCB0ZXh0PVxcXCJFZGl0XFxcIj48L0xhYmVsXFxyXFxuICA+PC9BY3Rpb25JdGVtPlxcclxcbjwvbnMtYWN0aW9uLWJhcj5cXHJcXG48U3RhY2tMYXlvdXQ+XFxyXFxuICA8TGFiZWxcXHJcXG4gICAgY2xhc3M9XFxcInRpdGxlXFxcIlxcclxcbiAgICB0ZXh0PVxcXCJUaGUgY3VycmVudCBjaGFsbGVuZ2VcXFwiXFxyXFxuICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCJcXHJcXG4gID48L0xhYmVsPlxcclxcbiAgPCEtLSAgIDxCdXR0b24gdGV4dD1cXFwiRWRpdFxcXCIgKHRhcCk9XFxcIm9uRWRpdCgpXFxcIj48L0J1dHRvbj5cXHJcXG4gIDxCdXR0b24gdGV4dD1cXFwiUmVwbGFjZVxcXCIgbnNSb3V0ZXJMaW5rPVxcXCIvY2hhbGxlbmdlcy9yZXBsYWNlXFxcIj48L0J1dHRvbj4gLS0+XFxyXFxuICA8QnV0dG9uIHRleHQ9XFxcIkNoYW5nZSBzdGF0dXNcXFwiICh0YXApPVxcXCJvbkNoYW5nZVN0YXR1cygpXFxcIj48L0J1dHRvbj5cXHJcXG48L1N0YWNrTGF5b3V0PlxcclxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xyXG5cclxuaW1wb3J0IHsgRGF5TW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi4vZGF5LW1vZGFsL2RheS1tb2RhbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVUlTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91aS5zZXJ2aWNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm5zLWN1cnJlbnQtY2hhbGxlbmdlXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgcHJpdmF0ZSBtb2RlbERpYWxvZzogTW9kYWxEaWFsb2dTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHByaXZhdGUgdUlTZXJ2aWNlOiBVSVNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG9uRWRpdCgpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jaGFsbGVuZ2VzL2VkaXRcIl0sIHtcclxuICAgICAgdHJhbnNpdGlvbjogeyBuYW1lOiBcInNsaWRlTGVmdFwiIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VTdGF0dXMoKSB7XHJcbiAgICB0aGlzLm1vZGVsRGlhbG9nLnNob3dNb2RhbChEYXlNb2RhbENvbXBvbmVudCwge1xyXG4gICAgICBmdWxsc2NyZWVuOiB0cnVlLFxyXG4gICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnVJU2VydmljZS5nZXRSb290VkNSZWYoKVxyXG4gICAgICAgID8gdGhpcy51SVNlcnZpY2UuZ2V0Um9vdFZDUmVmKClcclxuICAgICAgICA6IHRoaXMudmNSZWYsXHJcbiAgICAgIGNvbnRleHQ6IHtcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpXHJcbiAgICAgIH1cclxuICAgIH0pLnRoZW4oKGFjdGlvbjpzdHJpbmcpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5zLWFjdGlvbi1iYXJcXHJcXG4gIHRpdGxlPVxcXCJUb2RheSdzIENoYWxsZW5nZVxcXCJcXHJcXG4gIFtzaG93QmFja0J1dHRvbl09XFxcImZhbHNlXFxcIlxcclxcbj48L25zLWFjdGlvbi1iYXI+XFxyXFxuPFN0YWNrTGF5b3V0PlxcclxcbiAgPExhYmVsIHRleHQ9XFxcIlRvZGF5XFxcIj48L0xhYmVsPlxcclxcbjwvU3RhY2tMYXlvdXQ+XFxyXFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy10b2RheScsXG4gIHRlbXBsYXRlVXJsOiAnLi90b2RheS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RvZGF5LmNvbXBvbmVudC5jc3MnXSxcbiAgXG59KVxuZXhwb3J0IGNsYXNzIFRvZGF5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=