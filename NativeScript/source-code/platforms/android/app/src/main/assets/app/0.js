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
/* harmony import */ var _challenge_edit_challenge_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/challenges/challenge-edit/challenge-edit.component.ts");






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
        /* loadChildren: () =>
          import("./challenge-edit/challenge-edit.module").then(
            c => c.ChallengeEditModule
          ) */
        component: _challenge_edit_challenge_edit_component__WEBPACK_IMPORTED_MODULE_5__["ChallengeEditComponent"]
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

/***/ "./app/challenges/challenge-edit/challenge-edit.component.css":
/***/ (function(module, exports) {

module.exports = "TextField {\r\n  width: 66%;\r\n}\r\n\r\nbutton {\r\n  width: 33%;\r\n}\r\n"

/***/ }),

/***/ "./app/challenges/challenge-edit/challenge-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <FlexboxLayout jusityContent=\"space-between\">\r\n  <TextField\r\n    class=\"form-control\"\r\n    hint=\"Challenge title\"\r\n    [(ngModel)]=\"challengeDescription\"\r\n  ></TextField>\r\n  <Button class=\"btn\" (tap)=\"onSetChallenge()\" text=\"Set Challenge\"></Button>\r\n</FlexboxLayout>\r\n -->\r\n<ns-action-bar\r\n  [title]=\"isCreating ? 'Replace Challenge' : 'Edit Challenge'\"\r\n  [hasMenu]=\"false\"\r\n></ns-action-bar>\r\n<FlexboxLayout jusityContent=\"space-between\">\r\n  <Label text=\"edit page\"></Label>\r\n</FlexboxLayout>\r\n"

/***/ }),

/***/ "./app/challenges/challenge-edit/challenge-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeEditComponent", function() { return ChallengeEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);



var ChallengeEditComponent = /** @class */ (function () {
    function ChallengeEditComponent(activatedRoute, pageRoute) {
        this.activatedRoute = activatedRoute;
        this.pageRoute = pageRoute;
        this.isCreating = true;
    }
    ChallengeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        /* this.activatedRoute.paramMap.subscribe(paramMap => {}); */
        this.pageRoute.activatedRoute.subscribe(function (activatedRoute) {
            activatedRoute.paramMap.subscribe(function (paramMap) {
                console.log(paramMap.get("mode"));
                if (!paramMap.has("mode")) {
                    _this.isCreating = true;
                }
                else {
                    _this.isCreating = paramMap.get("mode") !== "edit";
                }
            });
        });
    };
    ChallengeEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-challenge-edit",
            template: __webpack_require__("./app/challenges/challenge-edit/challenge-edit.component.html"),
            styles: [__webpack_require__("./app/challenges/challenge-edit/challenge-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["PageRoute"]])
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
/* harmony import */ var _challenge_edit_challenge_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/challenges/challenge-edit/challenge-edit.component.ts");








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
                _challenge_edit_challenge_edit_component__WEBPACK_IMPORTED_MODULE_7__["ChallengeEditComponent"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVnZW5zLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS1lZGl0L2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlLWVkaXQvY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlLWVkaXQvY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS10YWJzL2NoYWxsZW5nZS10YWJzLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlLXRhYnMvY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlLXRhYnMvY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZXMubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2N1cnJlbnQtY2hhbGxlbmdlL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY3VycmVudC1jaGFsbGVuZ2UvY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY3VycmVudC1jaGFsbGVuZ2UvY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL3RvZGF5L3RvZGF5LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvdG9kYXkvdG9kYXkuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvdG9kYXkvdG9kYXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1RTtBQUM5QjtBQUcwQztBQUMxQjtBQUNtQztBQUNUO0FBRW5GLElBQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLE1BQU07UUFDWixTQUFTLEVBQUUsK0ZBQXNCO1FBQ2pDLFFBQVEsRUFBRTtZQUNSLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUscUVBQWMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFO1lBQzdEO2dCQUNFLElBQUksRUFBRSxtQkFBbUI7Z0JBQ3pCLFNBQVMsRUFBRSx3R0FBeUI7Z0JBQ3BDLE1BQU0sRUFBRSxrQkFBa0I7YUFDM0I7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsT0FBTztRQUNiOzs7Y0FHTTtRQUNOLFNBQVMsRUFBRSwrRkFBc0I7S0FDbEM7SUFDRCxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7Q0FDaEUsQ0FBQztBQU1GO0lBQUE7SUFBcUMsQ0FBQztJQUF6QixzQkFBc0I7UUFKbEMsOERBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQztTQUNwQyxDQUFDO09BQ1csc0JBQXNCLENBQUc7SUFBRCw2QkFBQztDQUFBO0FBQUg7Ozs7Ozs7O0FDckNuQyw2QkFBNkIsaUJBQWlCLEtBQUssZ0JBQWdCLGlCQUFpQixLQUFLLEs7Ozs7Ozs7QUNBekYsK2pCOzs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNEO0FBQ087QUFPeEQ7SUFHRSxnQ0FDVSxjQUE4QixFQUM5QixTQUFvQjtRQURwQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUo5QixlQUFVLEdBQUcsSUFBSSxDQUFDO0lBS2YsQ0FBQztJQUVKLHlDQUFRLEdBQVI7UUFBQSxpQkFZQztRQVhDLDZEQUE2RDtRQUM3RCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsd0JBQWM7WUFDcEQsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsa0JBQVE7Z0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDekIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7aUJBQ3hCO3FCQUFNO29CQUNMLEtBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxNQUFNLENBQUM7aUJBQ25EO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFwQlUsc0JBQXNCO1FBTGxDLCtEQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLDhGQUE4Qzs7U0FFL0MsQ0FBQzt5Q0FLMEIsOERBQWM7WUFDbkIscUVBQVM7T0FMbkIsc0JBQXNCLENBcUJsQztJQUFELDZCQUFDO0NBQUE7QUFyQmtDOzs7Ozs7OztBQ1RuQyxtQjs7Ozs7OztBQ0FBLDBMQUEwTCxpQkFBaUIsdUhBQXVILDZCQUE2QixzSDs7Ozs7Ozs7QUNBL1Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBQ2E7QUFDZDtBQU9qRDtJQUNFLGdDQUNVLE1BQXdCLEVBQ3hCLE1BQXNCO1FBRHRCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQWdCO0lBQzdCLENBQUM7SUFFSix5Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQ2xCO1lBQ0U7Z0JBQ0UsT0FBTyxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2FBQ3ZFO1NBQ0YsRUFDRCxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQzVCLENBQUM7SUFDSixDQUFDO0lBZlUsc0JBQXNCO1FBTGxDLCtEQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLDhGQUE4Qzs7U0FFL0MsQ0FBQzt5Q0FHa0IsNEVBQWdCO1lBQ2hCLDhEQUFjO09BSHJCLHNCQUFzQixDQWdCbEM7SUFBRCw2QkFBQztDQUFBO0FBaEJrQzs7Ozs7Ozs7O0FDVG5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFDOEI7QUFFaEI7QUFFYztBQUN1QjtBQUNUO0FBQzFCO0FBQzBCO0FBV25GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixpQkFBaUI7UUFUN0IsOERBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLGlGQUFzQixFQUFFLGtFQUFZLEVBQUUsb0ZBQXdCLENBQUM7WUFDekUsWUFBWSxFQUFFO2dCQUNaLHdHQUF5QjtnQkFDekIsK0ZBQXNCO2dCQUN0QixxRUFBYztnQkFDZCwrRkFBc0I7YUFDdkI7U0FDRixDQUFDO09BQ1csaUJBQWlCLENBQUc7SUFBRCx3QkFBQztDQUFBO0FBQUg7Ozs7Ozs7O0FDcEI5QiwwQkFBMEIsa0JBQWtCLHVCQUF1QixtQkFBbUIsc0JBQXNCLG1CQUFtQixHQUFHLEc7Ozs7Ozs7QUNBbEksZ3FEOzs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE0RDtBQUNHO0FBQ1E7QUFFRjtBQUNqQjtBQU1wRDtJQUNFLG1DQUNVLE1BQXdCLEVBQ3hCLFdBQStCLEVBQy9CLEtBQXVCLEVBQ3ZCLFNBQW9CO1FBSHBCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMvQixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFXO0lBQzNCLENBQUM7SUFFSiwwQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO1lBQ3pDLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7U0FDbEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGtEQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxnRkFBaUIsRUFBRTtZQUM1QyxVQUFVLEVBQUUsSUFBSTtZQUNoQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRTtnQkFDN0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFO2dCQUMvQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDZCxPQUFPLEVBQUU7Z0JBQ1AsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO2FBQ2pCO1NBQ0YsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQWE7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUExQlUseUJBQXlCO1FBTHJDLCtEQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLG9HQUFpRDs7U0FFbEQsQ0FBQzt5Q0FHa0IsNEVBQWdCO1lBQ1gsb0ZBQWtCO1lBQ3hCLDhEQUFnQjtZQUNaLDREQUFTO09BTG5CLHlCQUF5QixDQTJCckM7SUFBRCxnQ0FBQztDQUFBO0FBM0JxQzs7Ozs7Ozs7QUNYdEMsbUI7Ozs7Ozs7QUNBQSxrTTs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBa0Q7QUFRbEQ7SUFFRTtJQUFnQixDQUFDO0lBRWpCLGlDQUFRLEdBQVI7SUFDQSxDQUFDO0lBTFUsY0FBYztRQU4xQiwrREFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsNEVBQXFDOztTQUd0QyxDQUFDOztPQUNXLGNBQWMsQ0FPMUI7SUFBRCxxQkFBQztDQUFBO0FBUDBCIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgQ2hhbGxlbmdlVGFic0NvbXBvbmVudCB9IGZyb20gXCIuL2NoYWxsZW5nZS10YWJzL2NoYWxsZW5nZS10YWJzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUb2RheUNvbXBvbmVudCB9IGZyb20gXCIuL3RvZGF5L3RvZGF5LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50IH0gZnJvbSBcIi4vY3VycmVudC1jaGFsbGVuZ2UvY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENoYWxsZW5nZUVkaXRDb21wb25lbnQgfSBmcm9tIFwiLi9jaGFsbGVuZ2UtZWRpdC9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6IFwidGFic1wiLFxyXG4gICAgY29tcG9uZW50OiBDaGFsbGVuZ2VUYWJzQ29tcG9uZW50LFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAgeyBwYXRoOiBcInRvZGF5XCIsIGNvbXBvbmVudDogVG9kYXlDb21wb25lbnQsIG91dGxldDogXCJ0b2RheVwiIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBcImN1cnJlbnQtY2hhbGxlbmdlXCIsXHJcbiAgICAgICAgY29tcG9uZW50OiBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50LFxyXG4gICAgICAgIG91dGxldDogXCJjdXJyZW50Q2hhbGxlbmdlXCJcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCI6bW9kZVwiLFxyXG4gICAgLyogbG9hZENoaWxkcmVuOiAoKSA9PlxyXG4gICAgICBpbXBvcnQoXCIuL2NoYWxsZW5nZS1lZGl0L2NoYWxsZW5nZS1lZGl0Lm1vZHVsZVwiKS50aGVuKFxyXG4gICAgICAgIGMgPT4gYy5DaGFsbGVuZ2VFZGl0TW9kdWxlXHJcbiAgICAgICkgKi9cclxuICAgIGNvbXBvbmVudDogQ2hhbGxlbmdlRWRpdENvbXBvbmVudFxyXG4gIH0sXHJcbiAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9jaGFsbGVuZ2VzL3RhYnNcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENoYWxlbmdlc1JvdXRpbmdNb2R1bGUge31cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIlRleHRGaWVsZCB7XFxyXFxuICB3aWR0aDogNjYlO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgd2lkdGg6IDMzJTtcXHJcXG59XFxyXFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSA8RmxleGJveExheW91dCBqdXNpdHlDb250ZW50PVxcXCJzcGFjZS1iZXR3ZWVuXFxcIj5cXHJcXG4gIDxUZXh0RmllbGRcXHJcXG4gICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXHJcXG4gICAgaGludD1cXFwiQ2hhbGxlbmdlIHRpdGxlXFxcIlxcclxcbiAgICBbKG5nTW9kZWwpXT1cXFwiY2hhbGxlbmdlRGVzY3JpcHRpb25cXFwiXFxyXFxuICA+PC9UZXh0RmllbGQ+XFxyXFxuICA8QnV0dG9uIGNsYXNzPVxcXCJidG5cXFwiICh0YXApPVxcXCJvblNldENoYWxsZW5nZSgpXFxcIiB0ZXh0PVxcXCJTZXQgQ2hhbGxlbmdlXFxcIj48L0J1dHRvbj5cXHJcXG48L0ZsZXhib3hMYXlvdXQ+XFxyXFxuIC0tPlxcclxcbjxucy1hY3Rpb24tYmFyXFxyXFxuICBbdGl0bGVdPVxcXCJpc0NyZWF0aW5nID8gJ1JlcGxhY2UgQ2hhbGxlbmdlJyA6ICdFZGl0IENoYWxsZW5nZSdcXFwiXFxyXFxuICBbaGFzTWVudV09XFxcImZhbHNlXFxcIlxcclxcbj48L25zLWFjdGlvbi1iYXI+XFxyXFxuPEZsZXhib3hMYXlvdXQganVzaXR5Q29udGVudD1cXFwic3BhY2UtYmV0d2VlblxcXCI+XFxyXFxuICA8TGFiZWwgdGV4dD1cXFwiZWRpdCBwYWdlXFxcIj48L0xhYmVsPlxcclxcbjwvRmxleGJveExheW91dD5cXHJcXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBhZ2VSb3V0ZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm5zLWNoYWxsZW5nZS1lZGl0XCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGFsbGVuZ2VFZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBpc0NyZWF0aW5nID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGVcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgLyogdGhpcy5hY3RpdmF0ZWRSb3V0ZS5wYXJhbU1hcC5zdWJzY3JpYmUocGFyYW1NYXAgPT4ge30pOyAqL1xyXG4gICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGUuc3Vic2NyaWJlKGFjdGl2YXRlZFJvdXRlID0+IHtcclxuICAgICAgYWN0aXZhdGVkUm91dGUucGFyYW1NYXAuc3Vic2NyaWJlKHBhcmFtTWFwID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhwYXJhbU1hcC5nZXQoXCJtb2RlXCIpKTtcclxuICAgICAgICBpZiAoIXBhcmFtTWFwLmhhcyhcIm1vZGVcIikpIHtcclxuICAgICAgICAgIHRoaXMuaXNDcmVhdGluZyA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuaXNDcmVhdGluZyA9IHBhcmFtTWFwLmdldChcIm1vZGVcIikgIT09IFwiZWRpdFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxUYWJWaWV3XFxyXFxuICBhbmRyb2lkVGFic1Bvc2l0aW9uPVxcXCJib3R0b21cXFwiXFxyXFxuICBhbmRyb2lkU2VsZWN0ZWRUYWJIaWdobGlnaHRDb2xvcj1cXFwiIzdjMDE1ZFxcXCJcXHJcXG4gIHNlbGVjdGVkVGFiVGV4dENvbG9yPVxcXCIjN2MwMTVkXFxcIlxcclxcbj5cXHJcXG4gIDxTdGFja0xheW91dCAqdGFiSXRlbT1cXFwieyB0aXRsZTogJ1RvZGF5JyB9XFxcIj5cXHJcXG4gICAgPHBhZ2Utcm91dGVyLW91dGxldCBuYW1lPVxcXCJ0b2RheVxcXCI+IDwvcGFnZS1yb3V0ZXItb3V0bGV0PlxcclxcbiAgPC9TdGFja0xheW91dD5cXHJcXG4gIDxTdGFja0xheW91dCAqdGFiSXRlbT1cXFwieyB0aXRsZTogJ0N1cnJlbnQgQ2hhbGxlbmdlJyB9XFxcIj5cXHJcXG4gICAgPHBhZ2Utcm91dGVyLW91dGxldCBuYW1lPVxcXCJjdXJyZW50Q2hhbGxlbmdlXFxcIj4gPC9wYWdlLXJvdXRlci1vdXRsZXQ+XFxyXFxuICA8L1N0YWNrTGF5b3V0PlxcclxcbjwvVGFiVmlldz5cXHJcXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJucy1jaGFsbGVuZ2UtdGFic1wiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhbGxlbmdlVGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgIHByaXZhdGUgYWN0aXZlOiBBY3RpdmF0ZWRSb3V0ZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShcclxuICAgICAgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG91dGxldHM6IHsgY3VycmVudENoYWxsZW5nZTogW1wiY3VycmVudC1jaGFsbGVuZ2VcIl0sIHRvZGF5OiBbXCJ0b2RheVwiXSB9XHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICB7IHJlbGF0aXZlVG86IHRoaXMuYWN0aXZlIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcblxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIi4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XG5cbmltcG9ydCB7IENoYWxlbmdlc1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9jaGFsbGVnZW5zLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50IH0gZnJvbSBcIi4vY3VycmVudC1jaGFsbGVuZ2UvY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDaGFsbGVuZ2VUYWJzQ29tcG9uZW50IH0gZnJvbSBcIi4vY2hhbGxlbmdlLXRhYnMvY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUb2RheUNvbXBvbmVudCB9IGZyb20gXCIuL3RvZGF5L3RvZGF5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2hhbGxlbmdlRWRpdENvbXBvbmVudCB9IGZyb20gXCIuL2NoYWxsZW5nZS1lZGl0L2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ2hhbGVuZ2VzUm91dGluZ01vZHVsZSwgU2hhcmVkTW9kdWxlLCBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50LFxuICAgIENoYWxsZW5nZVRhYnNDb21wb25lbnQsXG4gICAgVG9kYXlDb21wb25lbnQsXG4gICAgQ2hhbGxlbmdlRWRpdENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENoYW5sbGVuZ2VzTW9kdWxlIHt9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzdjMDE1ZDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLXRvcDogMTA7XFxufVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0gPExpc3RWaWV3XFxyXFxuICBbaXRlbXNdPVxcXCJjaGFsbGVuZ2VzXFxcIlxcclxcbiAgKGl0ZW1UYXApPVxcXCJvbkl0ZW1UYXAoJGV2ZW50KVxcXCJcXHJcXG4gIGlvc0VzdGltYXRlZFJvd0hlaWdodD1cXFwiNjVcXFwiXFxyXFxuPlxcclxcbiAgPG5nLXRlbXBsYXRlIGxldC1jaGFsbGVuZ2U9XFxcIml0ZW1cXFwiIGxldC1pPVxcXCJpbmRleFxcXCI+XFxyXFxuICAgIDxHaXJkTGF5b3V0IHJvd3M9XFxcIjQwLDIwXFxcIiBjb2x1bXM9XFxcIjUwLCpcXFwiPlxcclxcbiAgICAgIDxMYWJlbCBbdGV4dF09XFxcImlcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiByb3dTcGFuPVxcXCIyXFxcIj48L0xhYmVsPlxcclxcbiAgICAgIDxMYWJlbCBbdGV4dF09XFxcImNoYWxsZW5nZVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgPExhYmVsIHRleHQ9XFxcIkl0ZW0gY29udGVudCByb3cgMlxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiPjwvTGFiZWw+XFxyXFxuICAgIDwvR2lyZExheW91dD5cXHJcXG4gIDwvbmctdGVtcGxhdGU+XFxyXFxuPC9MaXN0Vmlldz4gLS0+XFxyXFxuXFxyXFxuPCEtLSA8U2Nyb2xsVmlldz5cXHJcXG4gICAgPFN0YWNrTGF5b3V0PlxcclxcbiAgICAgIDxMYWJlbFxcclxcbiAgICAgICAgY2xhc3M9XFxcInRpdGxlXFxcIlxcclxcbiAgICAgICAgW3RleHRdPVxcXCJjdXJyZW50Q2hhbGxlbmdlXFxcIlxcclxcbiAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIlxcclxcbiAgICAgICAgKm5nRm9yPVxcXCJsZXQgY3VycmVudENoYWxsZW5nZSBvZiBjaGFsbGVuZ2VzXFxcIlxcclxcbiAgICAgID48L0xhYmVsPlxcclxcbiAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgPC9TY3JvbGxWaWV3PiAtLT5cXHJcXG48bnMtYWN0aW9uLWJhciBbdGl0bGVdPVxcXCInQ3VycmVudCBjaGFsbGVuZ2UnXFxcIiBbc2hvd0JhY2tCdXR0b25dPVxcXCJmYWxzZVxcXCI+XFxyXFxuICA8QWN0aW9uSXRlbVxcclxcbiAgICBpb3MucG9zaXRpb249XFxcInJpZ2h0XFxcIlxcclxcbiAgICBhbmRyb2lkLnBvc2l0aW9uPVxcXCJhY3Rpb25CYXJcXFwiXFxyXFxuICAgIG5zUm91dGVyTGluaz1cXFwiL2NoYWxsZW5nZXMvcmVwbGFjZVxcXCJcXHJcXG4gICAgPjxMYWJlbCB0ZXh0PVxcXCJSZXBsYWNlXFxcIj48L0xhYmVsXFxyXFxuICA+PC9BY3Rpb25JdGVtPlxcclxcbiAgPEFjdGlvbkl0ZW1cXHJcXG4gICAgaW9zLnBvc2l0aW9uPVxcXCJyaWdodFxcXCJcXHJcXG4gICAgYW5kcm9pZC5wb3NpdGlvbj1cXFwiYWN0aW9uQmFyXFxcIlxcclxcbiAgICBuc1JvdXRlckxpbms9XFxcIi9jaGFsbGVuZ2VzL2VkaXRcXFwiXFxyXFxuICAgIHBhZ2VUcmFuc2l0aW9uPVxcXCJzbGlkZUxlZnRcXFwiXFxyXFxuICAgID48TGFiZWwgdGV4dD1cXFwiRWRpdFxcXCI+PC9MYWJlbFxcclxcbiAgPjwvQWN0aW9uSXRlbT5cXHJcXG48L25zLWFjdGlvbi1iYXI+XFxyXFxuPFN0YWNrTGF5b3V0PlxcclxcbiAgPExhYmVsXFxyXFxuICAgIGNsYXNzPVxcXCJ0aXRsZVxcXCJcXHJcXG4gICAgdGV4dD1cXFwiVGhlIGN1cnJlbnQgY2hhbGxlbmdlXFxcIlxcclxcbiAgICBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiXFxyXFxuICA+PC9MYWJlbD5cXHJcXG4gIDwhLS0gICA8QnV0dG9uIHRleHQ9XFxcIkVkaXRcXFwiICh0YXApPVxcXCJvbkVkaXQoKVxcXCI+PC9CdXR0b24+XFxyXFxuICA8QnV0dG9uIHRleHQ9XFxcIlJlcGxhY2VcXFwiIG5zUm91dGVyTGluaz1cXFwiL2NoYWxsZW5nZXMvcmVwbGFjZVxcXCI+PC9CdXR0b24+IC0tPlxcclxcbiAgPEJ1dHRvbiB0ZXh0PVxcXCJDaGFuZ2Ugc3RhdHVzXFxcIiAodGFwKT1cXFwib25DaGFuZ2VTdGF0dXMoKVxcXCI+PC9CdXR0b24+XFxyXFxuPC9TdGFja0xheW91dD5cXHJcXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcclxuXHJcbmltcG9ydCB7IERheU1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uL2RheS1tb2RhbC9kYXktbW9kYWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFVJU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdWkuc2VydmljZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJucy1jdXJyZW50LWNoYWxsZW5nZVwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3VycmVudENoYWxsZW5nZUNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgIHByaXZhdGUgbW9kZWxEaWFsb2c6IE1vZGFsRGlhbG9nU2VydmljZSxcclxuICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIHVJU2VydmljZTogVUlTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBvbkVkaXQoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvY2hhbGxlbmdlcy9lZGl0XCJdLCB7XHJcbiAgICAgIHRyYW5zaXRpb246IHsgbmFtZTogXCJzbGlkZUxlZnRcIiB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlU3RhdHVzKCkge1xyXG4gICAgdGhpcy5tb2RlbERpYWxvZy5zaG93TW9kYWwoRGF5TW9kYWxDb21wb25lbnQsIHtcclxuICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcclxuICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy51SVNlcnZpY2UuZ2V0Um9vdFZDUmVmKClcclxuICAgICAgICA/IHRoaXMudUlTZXJ2aWNlLmdldFJvb3RWQ1JlZigpXHJcbiAgICAgICAgOiB0aGlzLnZjUmVmLFxyXG4gICAgICBjb250ZXh0OiB7XHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKVxyXG4gICAgICB9XHJcbiAgICB9KS50aGVuKChhY3Rpb246c3RyaW5nKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbik7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxucy1hY3Rpb24tYmFyXFxyXFxuICB0aXRsZT1cXFwiVG9kYXkncyBDaGFsbGVuZ2VcXFwiXFxyXFxuICBbc2hvd0JhY2tCdXR0b25dPVxcXCJmYWxzZVxcXCJcXHJcXG4+PC9ucy1hY3Rpb24tYmFyPlxcclxcbjxTdGFja0xheW91dD5cXHJcXG4gIDxMYWJlbCB0ZXh0PVxcXCJUb2RheVxcXCI+PC9MYWJlbD5cXHJcXG48L1N0YWNrTGF5b3V0PlxcclxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtdG9kYXknLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9kYXkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b2RheS5jb21wb25lbnQuY3NzJ10sXG4gIFxufSlcbmV4cG9ydCBjbGFzcyBUb2RheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9