(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[1],{

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

/***/ "./app/challenges/challenge-edit/challenge-edit.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeEditModule", function() { return ChallengeEditModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _challenge_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/challenges/challenge-edit/challenge-edit.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/shared/shared.module.ts");




var ChallengeEditModule = /** @class */ (function () {
    function ChallengeEditModule() {
    }
    ChallengeEditModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_challenge_edit_component__WEBPACK_IMPORTED_MODULE_2__["ChallengeEditComponent"]],
            imports: [
                nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild([
                    { path: "", component: _challenge_edit_component__WEBPACK_IMPORTED_MODULE_2__["ChallengeEditComponent"] }
                ]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            exports: [],
            providers: []
        })
    ], ChallengeEditModule);
    return ChallengeEditModule;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2UtZWRpdC9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS1lZGl0L2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS1lZGl0L2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2UtZWRpdC9jaGFsbGVuZ2UtZWRpdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw2QkFBNkIsaUJBQWlCLEtBQUssZ0JBQWdCLGlCQUFpQixLQUFLLEs7Ozs7Ozs7QUNBekYsK2pCOzs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNEO0FBQ087QUFPeEQ7SUFHRSxnQ0FDVSxjQUE4QixFQUM5QixTQUFvQjtRQURwQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUo5QixlQUFVLEdBQUcsSUFBSSxDQUFDO0lBS2YsQ0FBQztJQUVKLHlDQUFRLEdBQVI7UUFBQSxpQkFZQztRQVhDLDZEQUE2RDtRQUM3RCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsd0JBQWM7WUFDcEQsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsa0JBQVE7Z0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDekIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7aUJBQ3hCO3FCQUFNO29CQUNMLEtBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxNQUFNLENBQUM7aUJBQ25EO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFwQlUsc0JBQXNCO1FBTGxDLCtEQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLDhGQUE4Qzs7U0FFL0MsQ0FBQzt5Q0FLMEIsOERBQWM7WUFDbkIscUVBQVM7T0FMbkIsc0JBQXNCLENBcUJsQztJQUFELDZCQUFDO0NBQUE7QUFyQmtDOzs7Ozs7Ozs7QUNUbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFDOEI7QUFDSDtBQUNWO0FBYTFEO0lBQUE7SUFBa0MsQ0FBQztJQUF0QixtQkFBbUI7UUFYL0IsOERBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLGdGQUFzQixDQUFDO1lBQ3RDLE9BQU8sRUFBRTtnQkFDUCxvRkFBd0IsQ0FBQyxRQUFRLENBQUM7b0JBQ2hDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsZ0ZBQXNCLEVBQUU7aUJBQ2hELENBQUM7Z0JBQ0Ysa0VBQVk7YUFDYjtZQUNELE9BQU8sRUFBRSxFQUFFO1lBQ1gsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO09BQ1csbUJBQW1CLENBQUc7SUFBRCwwQkFBQztDQUFBO0FBQUgiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCJUZXh0RmllbGQge1xcclxcbiAgd2lkdGg6IDY2JTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAzMyU7XFxyXFxufVxcclxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0gPEZsZXhib3hMYXlvdXQganVzaXR5Q29udGVudD1cXFwic3BhY2UtYmV0d2VlblxcXCI+XFxyXFxuICA8VGV4dEZpZWxkXFxyXFxuICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxyXFxuICAgIGhpbnQ9XFxcIkNoYWxsZW5nZSB0aXRsZVxcXCJcXHJcXG4gICAgWyhuZ01vZGVsKV09XFxcImNoYWxsZW5nZURlc2NyaXB0aW9uXFxcIlxcclxcbiAgPjwvVGV4dEZpZWxkPlxcclxcbiAgPEJ1dHRvbiBjbGFzcz1cXFwiYnRuXFxcIiAodGFwKT1cXFwib25TZXRDaGFsbGVuZ2UoKVxcXCIgdGV4dD1cXFwiU2V0IENoYWxsZW5nZVxcXCI+PC9CdXR0b24+XFxyXFxuPC9GbGV4Ym94TGF5b3V0PlxcclxcbiAtLT5cXHJcXG48bnMtYWN0aW9uLWJhclxcclxcbiAgW3RpdGxlXT1cXFwiaXNDcmVhdGluZyA/ICdSZXBsYWNlIENoYWxsZW5nZScgOiAnRWRpdCBDaGFsbGVuZ2UnXFxcIlxcclxcbiAgW2hhc01lbnVdPVxcXCJmYWxzZVxcXCJcXHJcXG4+PC9ucy1hY3Rpb24tYmFyPlxcclxcbjxGbGV4Ym94TGF5b3V0IGp1c2l0eUNvbnRlbnQ9XFxcInNwYWNlLWJldHdlZW5cXFwiPlxcclxcbiAgPExhYmVsIHRleHQ9XFxcImVkaXQgcGFnZVxcXCI+PC9MYWJlbD5cXHJcXG48L0ZsZXhib3hMYXlvdXQ+XFxyXFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlUm91dGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJucy1jaGFsbGVuZ2UtZWRpdFwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhbGxlbmdlRWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaXNDcmVhdGluZyA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8qIHRoaXMuYWN0aXZhdGVkUm91dGUucGFyYW1NYXAuc3Vic2NyaWJlKHBhcmFtTWFwID0+IHt9KTsgKi9cclxuICAgIHRoaXMucGFnZVJvdXRlLmFjdGl2YXRlZFJvdXRlLnN1YnNjcmliZShhY3RpdmF0ZWRSb3V0ZSA9PiB7XHJcbiAgICAgIGFjdGl2YXRlZFJvdXRlLnBhcmFtTWFwLnN1YnNjcmliZShwYXJhbU1hcCA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGFyYW1NYXAuZ2V0KFwibW9kZVwiKSk7XHJcbiAgICAgICAgaWYgKCFwYXJhbU1hcC5oYXMoXCJtb2RlXCIpKSB7XHJcbiAgICAgICAgICB0aGlzLmlzQ3JlYXRpbmcgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmlzQ3JlYXRpbmcgPSBwYXJhbU1hcC5nZXQoXCJtb2RlXCIpICE9PSBcImVkaXRcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtDaGFsbGVuZ2VFZGl0Q29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xyXG4gICAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogQ2hhbGxlbmdlRWRpdENvbXBvbmVudCB9XHJcbiAgICBdKSxcclxuICAgIFNoYXJlZE1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW10sXHJcbiAgcHJvdmlkZXJzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhbGxlbmdlRWRpdE1vZHVsZSB7fVxyXG4iXSwic291cmNlUm9vdCI6IiJ9