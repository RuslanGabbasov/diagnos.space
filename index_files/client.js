webpackHotUpdate("client",{

/***/ "./src/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "history", function() { return history; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "models", function() { return models; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var _rematch_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@rematch/core/dist/umd/rematch.js");
/* harmony import */ var _rematch_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rematch_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/connected-react-router/esm/index.js");
/* harmony import */ var history_createHashHistory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/history/createHashHistory.js");
/* harmony import */ var history_createHashHistory__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(history_createHashHistory__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/models/user.ts");


// tslint:disable-next-line:no-implicit-dependencies


const history = history_createHashHistory__WEBPACK_IMPORTED_MODULE_2___default()();
const reducers = { router: Object(connected_react_router__WEBPACK_IMPORTED_MODULE_1__["connectRouter"])(history) };
const models = { user: _user__WEBPACK_IMPORTED_MODULE_3__["user"] };
// tslint:disable-next-line:no-shadowed-variable
const initStore = (models) => Object(_rematch_core__WEBPACK_IMPORTED_MODULE_0__["init"])({
    redux: {
        reducers,
        middlewares: [
            Object(connected_react_router__WEBPACK_IMPORTED_MODULE_1__["routerMiddleware"])(history)
        ],
        devtoolOptions: {}
    },
    models
});


/***/ })

})
//# sourceMappingURL=client.3f7edf367bfd9e2804c0.hot-update.js.map