(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./app/challenges/challegens-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChalengesRoutingModule", function() { return ChalengesRoutingModule; });
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _challenge_edit_challenge_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/challenges/challenge-edit/challenge-edit.component.ts");
/* harmony import */ var _challenge_tabs_challenge_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/challenges/challenge-tabs/challenge-tabs.component.ts");
/* harmony import */ var _today_today_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/challenges/today/today.component.ts");
/* harmony import */ var _current_challenge_current_challenge_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/challenges/current-challenge/current-challenge.component.ts");






var routes = [
    {
        path: "tabs",
        component: _challenge_tabs_challenge_tabs_component__WEBPACK_IMPORTED_MODULE_3__["ChallengeTabsComponent"],
        children: [
            { path: "today", component: _today_today_component__WEBPACK_IMPORTED_MODULE_4__["TodayComponent"], outlet: "today" },
            {
                path: "current-challenge",
                component: _current_challenge_current_challenge_component__WEBPACK_IMPORTED_MODULE_5__["CurrentChallengeComponent"],
                outlet: "currentChallenge"
            }
        ]
    },
    { path: ":mode", component: _challenge_edit_challenge_edit_component__WEBPACK_IMPORTED_MODULE_2__["ChallengeEditComponent"] },
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
/* harmony import */ var _challenge_edit_challenge_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/challenges/challenge-edit/challenge-edit.component.ts");
/* harmony import */ var _current_challenge_current_challenge_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/challenges/current-challenge/current-challenge.component.ts");
/* harmony import */ var _challenge_tabs_challenge_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/challenges/challenge-tabs/challenge-tabs.component.ts");
/* harmony import */ var _today_today_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/challenges/today/today.component.ts");








var ChanllengesModule = /** @class */ (function () {
    function ChanllengesModule() {
    }
    ChanllengesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_challegens_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChalengesRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"]],
            declarations: [
                _challenge_edit_challenge_edit_component__WEBPACK_IMPORTED_MODULE_4__["ChallengeEditComponent"],
                _current_challenge_current_challenge_component__WEBPACK_IMPORTED_MODULE_5__["CurrentChallengeComponent"],
                _challenge_tabs_challenge_tabs_component__WEBPACK_IMPORTED_MODULE_6__["ChallengeTabsComponent"],
                _today_today_component__WEBPACK_IMPORTED_MODULE_7__["TodayComponent"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVnZW5zLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS1lZGl0L2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlLWVkaXQvY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlLWVkaXQvY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS10YWJzL2NoYWxsZW5nZS10YWJzLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlLXRhYnMvY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlLXRhYnMvY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZXMubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2N1cnJlbnQtY2hhbGxlbmdlL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY3VycmVudC1jaGFsbGVuZ2UvY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY3VycmVudC1jaGFsbGVuZ2UvY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL3RvZGF5L3RvZGF5LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvdG9kYXkvdG9kYXkuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvdG9kYXkvdG9kYXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1RTtBQUM5QjtBQUcwQztBQUNBO0FBQzFCO0FBQ21DO0FBRTVGLElBQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLE1BQU07UUFDWixTQUFTLEVBQUUsK0ZBQXNCO1FBQ2pDLFFBQVEsRUFBRTtZQUNSLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUscUVBQWMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFO1lBQzdEO2dCQUNFLElBQUksRUFBRSxtQkFBbUI7Z0JBQ3pCLFNBQVMsRUFBRSx3R0FBeUI7Z0JBQ3BDLE1BQU0sRUFBRSxrQkFBa0I7YUFDM0I7U0FDRjtLQUNGO0lBQ0QsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSwrRkFBc0IsRUFBRTtJQUNwRCxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7Q0FDaEUsQ0FBQztBQU1GO0lBQUE7SUFBcUMsQ0FBQztJQUF6QixzQkFBc0I7UUFKbEMsOERBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQztTQUNwQyxDQUFDO09BQ1csc0JBQXNCLENBQUc7SUFBRCw2QkFBQztDQUFBO0FBQUg7Ozs7Ozs7O0FDOUJuQyw2QkFBNkIsaUJBQWlCLEtBQUssZ0JBQWdCLGlCQUFpQixLQUFLLEs7Ozs7Ozs7QUNBekYsK2pCOzs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNEO0FBQ087QUFPeEQ7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QUVqQixpQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUxVLGNBQWM7UUFOMUIsK0RBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLDRFQUFxQzs7U0FHdEMsQ0FBQzs7T0FDVyxjQUFjLENBTzFCO0lBQUQscUJBQUM7Q0FBQTtBQVAwQiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IENoYWxsZW5nZUVkaXRDb21wb25lbnQgfSBmcm9tIFwiLi9jaGFsbGVuZ2UtZWRpdC9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ2hhbGxlbmdlVGFic0NvbXBvbmVudCB9IGZyb20gXCIuL2NoYWxsZW5nZS10YWJzL2NoYWxsZW5nZS10YWJzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUb2RheUNvbXBvbmVudCB9IGZyb20gXCIuL3RvZGF5L3RvZGF5LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50IH0gZnJvbSBcIi4vY3VycmVudC1jaGFsbGVuZ2UvY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiBcInRhYnNcIixcclxuICAgIGNvbXBvbmVudDogQ2hhbGxlbmdlVGFic0NvbXBvbmVudCxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHsgcGF0aDogXCJ0b2RheVwiLCBjb21wb25lbnQ6IFRvZGF5Q29tcG9uZW50LCBvdXRsZXQ6IFwidG9kYXlcIiB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogXCJjdXJyZW50LWNoYWxsZW5nZVwiLFxyXG4gICAgICAgIGNvbXBvbmVudDogQ3VycmVudENoYWxsZW5nZUNvbXBvbmVudCxcclxuICAgICAgICBvdXRsZXQ6IFwiY3VycmVudENoYWxsZW5nZVwiXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHsgcGF0aDogXCI6bW9kZVwiLCBjb21wb25lbnQ6IENoYWxsZW5nZUVkaXRDb21wb25lbnQgfSxcclxuICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2NoYWxsZW5nZXMvdGFic1wiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhbGVuZ2VzUm91dGluZ01vZHVsZSB7fVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiVGV4dEZpZWxkIHtcXHJcXG4gIHdpZHRoOiA2NiU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMzMlO1xcclxcbn1cXHJcXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIDxGbGV4Ym94TGF5b3V0IGp1c2l0eUNvbnRlbnQ9XFxcInNwYWNlLWJldHdlZW5cXFwiPlxcclxcbiAgPFRleHRGaWVsZFxcclxcbiAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcclxcbiAgICBoaW50PVxcXCJDaGFsbGVuZ2UgdGl0bGVcXFwiXFxyXFxuICAgIFsobmdNb2RlbCldPVxcXCJjaGFsbGVuZ2VEZXNjcmlwdGlvblxcXCJcXHJcXG4gID48L1RleHRGaWVsZD5cXHJcXG4gIDxCdXR0b24gY2xhc3M9XFxcImJ0blxcXCIgKHRhcCk9XFxcIm9uU2V0Q2hhbGxlbmdlKClcXFwiIHRleHQ9XFxcIlNldCBDaGFsbGVuZ2VcXFwiPjwvQnV0dG9uPlxcclxcbjwvRmxleGJveExheW91dD5cXHJcXG4gLS0+XFxyXFxuPG5zLWFjdGlvbi1iYXJcXHJcXG4gIFt0aXRsZV09XFxcImlzQ3JlYXRpbmcgPyAnUmVwbGFjZSBDaGFsbGVuZ2UnIDogJ0VkaXQgQ2hhbGxlbmdlJ1xcXCJcXHJcXG4gIFtoYXNNZW51XT1cXFwiZmFsc2VcXFwiXFxyXFxuPjwvbnMtYWN0aW9uLWJhcj5cXHJcXG48RmxleGJveExheW91dCBqdXNpdHlDb250ZW50PVxcXCJzcGFjZS1iZXR3ZWVuXFxcIj5cXHJcXG4gIDxMYWJlbCB0ZXh0PVxcXCJlZGl0IHBhZ2VcXFwiPjwvTGFiZWw+XFxyXFxuPC9GbGV4Ym94TGF5b3V0PlxcclxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZVJvdXRlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibnMtY2hhbGxlbmdlLWVkaXRcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIENoYWxsZW5nZUVkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGlzQ3JlYXRpbmcgPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAvKiB0aGlzLmFjdGl2YXRlZFJvdXRlLnBhcmFtTWFwLnN1YnNjcmliZShwYXJhbU1hcCA9PiB7fSk7ICovXHJcbiAgICB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZS5zdWJzY3JpYmUoYWN0aXZhdGVkUm91dGUgPT4ge1xyXG4gICAgICBhY3RpdmF0ZWRSb3V0ZS5wYXJhbU1hcC5zdWJzY3JpYmUocGFyYW1NYXAgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBhcmFtTWFwLmdldChcIm1vZGVcIikpO1xyXG4gICAgICAgIGlmICghcGFyYW1NYXAuaGFzKFwibW9kZVwiKSkge1xyXG4gICAgICAgICAgdGhpcy5pc0NyZWF0aW5nID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5pc0NyZWF0aW5nID0gcGFyYW1NYXAuZ2V0KFwibW9kZVwiKSAhPT0gXCJlZGl0XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFRhYlZpZXdcXHJcXG4gIGFuZHJvaWRUYWJzUG9zaXRpb249XFxcImJvdHRvbVxcXCJcXHJcXG4gIGFuZHJvaWRTZWxlY3RlZFRhYkhpZ2hsaWdodENvbG9yPVxcXCIjN2MwMTVkXFxcIlxcclxcbiAgc2VsZWN0ZWRUYWJUZXh0Q29sb3I9XFxcIiM3YzAxNWRcXFwiXFxyXFxuPlxcclxcbiAgPFN0YWNrTGF5b3V0ICp0YWJJdGVtPVxcXCJ7IHRpdGxlOiAnVG9kYXknIH1cXFwiPlxcclxcbiAgICA8cGFnZS1yb3V0ZXItb3V0bGV0IG5hbWU9XFxcInRvZGF5XFxcIj4gPC9wYWdlLXJvdXRlci1vdXRsZXQ+XFxyXFxuICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgPFN0YWNrTGF5b3V0ICp0YWJJdGVtPVxcXCJ7IHRpdGxlOiAnQ3VycmVudCBDaGFsbGVuZ2UnIH1cXFwiPlxcclxcbiAgICA8cGFnZS1yb3V0ZXItb3V0bGV0IG5hbWU9XFxcImN1cnJlbnRDaGFsbGVuZ2VcXFwiPiA8L3BhZ2Utcm91dGVyLW91dGxldD5cXHJcXG4gIDwvU3RhY2tMYXlvdXQ+XFxyXFxuPC9UYWJWaWV3PlxcclxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm5zLWNoYWxsZW5nZS10YWJzXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9jaGFsbGVuZ2UtdGFicy5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9jaGFsbGVuZ2UtdGFicy5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGFsbGVuZ2VUYWJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgcHJpdmF0ZSBhY3RpdmU6IEFjdGl2YXRlZFJvdXRlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFxyXG4gICAgICBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgb3V0bGV0czogeyBjdXJyZW50Q2hhbGxlbmdlOiBbXCJjdXJyZW50LWNoYWxsZW5nZVwiXSwgdG9kYXk6IFtcInRvZGF5XCJdIH1cclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIHsgcmVsYXRpdmVUbzogdGhpcy5hY3RpdmUgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwiLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcblxuaW1wb3J0IHsgQ2hhbGVuZ2VzUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2NoYWxsZWdlbnMtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IENoYWxsZW5nZUVkaXRDb21wb25lbnQgfSBmcm9tIFwiLi9jaGFsbGVuZ2UtZWRpdC9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEN1cnJlbnRDaGFsbGVuZ2VDb21wb25lbnQgfSBmcm9tIFwiLi9jdXJyZW50LWNoYWxsZW5nZS9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IENoYWxsZW5nZVRhYnNDb21wb25lbnQgfSBmcm9tIFwiLi9jaGFsbGVuZ2UtdGFicy9jaGFsbGVuZ2UtdGFicy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRvZGF5Q29tcG9uZW50IH0gZnJvbSBcIi4vdG9kYXkvdG9kYXkuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDaGFsZW5nZXNSb3V0aW5nTW9kdWxlLCBTaGFyZWRNb2R1bGUsIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENoYWxsZW5nZUVkaXRDb21wb25lbnQsXG4gICAgQ3VycmVudENoYWxsZW5nZUNvbXBvbmVudCxcbiAgICBDaGFsbGVuZ2VUYWJzQ29tcG9uZW50LFxuICAgIFRvZGF5Q29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhbmxsZW5nZXNNb2R1bGUge31cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIudGl0bGUge1xcbiAgZm9udC1zaXplOiAyNjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjN2MwMTVkO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tdG9wOiAxMDtcXG59XFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSA8TGlzdFZpZXdcXHJcXG4gIFtpdGVtc109XFxcImNoYWxsZW5nZXNcXFwiXFxyXFxuICAoaXRlbVRhcCk9XFxcIm9uSXRlbVRhcCgkZXZlbnQpXFxcIlxcclxcbiAgaW9zRXN0aW1hdGVkUm93SGVpZ2h0PVxcXCI2NVxcXCJcXHJcXG4+XFxyXFxuICA8bmctdGVtcGxhdGUgbGV0LWNoYWxsZW5nZT1cXFwiaXRlbVxcXCIgbGV0LWk9XFxcImluZGV4XFxcIj5cXHJcXG4gICAgPEdpcmRMYXlvdXQgcm93cz1cXFwiNDAsMjBcXFwiIGNvbHVtcz1cXFwiNTAsKlxcXCI+XFxyXFxuICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiaVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIHJvd1NwYW49XFxcIjJcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiY2hhbGxlbmdlXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICA8TGFiZWwgdGV4dD1cXFwiSXRlbSBjb250ZW50IHJvdyAyXFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgPC9HaXJkTGF5b3V0PlxcclxcbiAgPC9uZy10ZW1wbGF0ZT5cXHJcXG48L0xpc3RWaWV3PiAtLT5cXHJcXG5cXHJcXG48IS0tIDxTY3JvbGxWaWV3PlxcclxcbiAgICA8U3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgPExhYmVsXFxyXFxuICAgICAgICBjbGFzcz1cXFwidGl0bGVcXFwiXFxyXFxuICAgICAgICBbdGV4dF09XFxcImN1cnJlbnRDaGFsbGVuZ2VcXFwiXFxyXFxuICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiXFxyXFxuICAgICAgICAqbmdGb3I9XFxcImxldCBjdXJyZW50Q2hhbGxlbmdlIG9mIGNoYWxsZW5nZXNcXFwiXFxyXFxuICAgICAgPjwvTGFiZWw+XFxyXFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICA8L1Njcm9sbFZpZXc+IC0tPlxcclxcbjxucy1hY3Rpb24tYmFyIFt0aXRsZV09XFxcIidDdXJyZW50IGNoYWxsZW5nZSdcXFwiIFtzaG93QmFja0J1dHRvbl09XFxcImZhbHNlXFxcIj5cXHJcXG4gIDxBY3Rpb25JdGVtXFxyXFxuICAgIGlvcy5wb3NpdGlvbj1cXFwicmlnaHRcXFwiXFxyXFxuICAgIGFuZHJvaWQucG9zaXRpb249XFxcImFjdGlvbkJhclxcXCJcXHJcXG4gICAgbnNSb3V0ZXJMaW5rPVxcXCIvY2hhbGxlbmdlcy9yZXBsYWNlXFxcIlxcclxcbiAgICA+PExhYmVsIHRleHQ9XFxcIlJlcGxhY2VcXFwiPjwvTGFiZWxcXHJcXG4gID48L0FjdGlvbkl0ZW0+XFxyXFxuICA8QWN0aW9uSXRlbVxcclxcbiAgICBpb3MucG9zaXRpb249XFxcInJpZ2h0XFxcIlxcclxcbiAgICBhbmRyb2lkLnBvc2l0aW9uPVxcXCJhY3Rpb25CYXJcXFwiXFxyXFxuICAgIG5zUm91dGVyTGluaz1cXFwiL2NoYWxsZW5nZXMvZWRpdFxcXCJcXHJcXG4gICAgcGFnZVRyYW5zaXRpb249XFxcInNsaWRlTGVmdFxcXCJcXHJcXG4gICAgPjxMYWJlbCB0ZXh0PVxcXCJFZGl0XFxcIj48L0xhYmVsXFxyXFxuICA+PC9BY3Rpb25JdGVtPlxcclxcbjwvbnMtYWN0aW9uLWJhcj5cXHJcXG48U3RhY2tMYXlvdXQ+XFxyXFxuICA8TGFiZWxcXHJcXG4gICAgY2xhc3M9XFxcInRpdGxlXFxcIlxcclxcbiAgICB0ZXh0PVxcXCJUaGUgY3VycmVudCBjaGFsbGVuZ2VcXFwiXFxyXFxuICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCJcXHJcXG4gID48L0xhYmVsPlxcclxcbiAgPCEtLSAgIDxCdXR0b24gdGV4dD1cXFwiRWRpdFxcXCIgKHRhcCk9XFxcIm9uRWRpdCgpXFxcIj48L0J1dHRvbj5cXHJcXG4gIDxCdXR0b24gdGV4dD1cXFwiUmVwbGFjZVxcXCIgbnNSb3V0ZXJMaW5rPVxcXCIvY2hhbGxlbmdlcy9yZXBsYWNlXFxcIj48L0J1dHRvbj4gLS0+XFxyXFxuICA8QnV0dG9uIHRleHQ9XFxcIkNoYW5nZSBzdGF0dXNcXFwiICh0YXApPVxcXCJvbkNoYW5nZVN0YXR1cygpXFxcIj48L0J1dHRvbj5cXHJcXG48L1N0YWNrTGF5b3V0PlxcclxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xyXG5cclxuaW1wb3J0IHsgRGF5TW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi4vZGF5LW1vZGFsL2RheS1tb2RhbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVUlTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91aS5zZXJ2aWNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm5zLWN1cnJlbnQtY2hhbGxlbmdlXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgcHJpdmF0ZSBtb2RlbERpYWxvZzogTW9kYWxEaWFsb2dTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHByaXZhdGUgdUlTZXJ2aWNlOiBVSVNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG9uRWRpdCgpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jaGFsbGVuZ2VzL2VkaXRcIl0sIHtcclxuICAgICAgdHJhbnNpdGlvbjogeyBuYW1lOiBcInNsaWRlTGVmdFwiIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VTdGF0dXMoKSB7XHJcbiAgICB0aGlzLm1vZGVsRGlhbG9nLnNob3dNb2RhbChEYXlNb2RhbENvbXBvbmVudCwge1xyXG4gICAgICBmdWxsc2NyZWVuOiB0cnVlLFxyXG4gICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnVJU2VydmljZS5nZXRSb290VkNSZWYoKVxyXG4gICAgICAgID8gdGhpcy51SVNlcnZpY2UuZ2V0Um9vdFZDUmVmKClcclxuICAgICAgICA6IHRoaXMudmNSZWYsXHJcbiAgICAgIGNvbnRleHQ6IHtcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpXHJcbiAgICAgIH1cclxuICAgIH0pLnRoZW4oKGFjdGlvbjpzdHJpbmcpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5zLWFjdGlvbi1iYXJcXHJcXG4gIHRpdGxlPVxcXCJUb2RheSdzIENoYWxsZW5nZVxcXCJcXHJcXG4gIFtzaG93QmFja0J1dHRvbl09XFxcImZhbHNlXFxcIlxcclxcbj48L25zLWFjdGlvbi1iYXI+XFxyXFxuPFN0YWNrTGF5b3V0PlxcclxcbiAgPExhYmVsIHRleHQ9XFxcIlRvZGF5XFxcIj48L0xhYmVsPlxcclxcbjwvU3RhY2tMYXlvdXQ+XFxyXFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy10b2RheScsXG4gIHRlbXBsYXRlVXJsOiAnLi90b2RheS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RvZGF5LmNvbXBvbmVudC5jc3MnXSxcbiAgXG59KVxuZXhwb3J0IGNsYXNzIFRvZGF5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=