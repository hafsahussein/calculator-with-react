(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{15:function(_,e,t){},5:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__),_home_hafsa_webdesign_react_js_calculator_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),_home_hafsa_webdesign_react_js_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),_components_keyboard__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6),_components_calculator__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(7),_App_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(15),_App_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__),App=function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)({result:"",history:""}),_useState2=Object(_home_hafsa_webdesign_react_js_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_useState,2),state=_useState2[0],stateSetter=_useState2[1],handleChange=function(_){var e=state.history,t=state.result,a=_.className;if("number"===a)stateSetter(Object(_home_hafsa_webdesign_react_js_calculator_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_home_hafsa_webdesign_react_js_calculator_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},state),{},{result:t+_.id}));else if("operator"===a){if(""===t&&""===e)return;""!==t&&""===e?stateSetter(Object(_home_hafsa_webdesign_react_js_calculator_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_home_hafsa_webdesign_react_js_calculator_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},state),{},{history:t+_.id,result:""})):""!==t||Number(e.charAt(e.length-1))?stateSetter(Object(_home_hafsa_webdesign_react_js_calculator_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_home_hafsa_webdesign_react_js_calculator_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},state),{},{history:e+t+_.id,result:""})):stateSetter(Object(_home_hafsa_webdesign_react_js_calculator_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_home_hafsa_webdesign_react_js_calculator_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},state),{},{history:e.replace(/.$/,_.id)}))}else"calculate"===a?calculate():"backspace"===a?backspace():"clear"===a?clear():"minus-symbol"===a?Minus():"dot"===a&&(t.toString().includes(".")||stateSetter(Object(_home_hafsa_webdesign_react_js_calculator_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_home_hafsa_webdesign_react_js_calculator_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},state),{},{result:t+"."})))},clear=function(){stateSetter({history:"",result:""})},backspace=function(){var _=state.result;stateSetter(Object(_home_hafsa_webdesign_react_js_calculator_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_home_hafsa_webdesign_react_js_calculator_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},state),{},{result:_.replace(/.$/,"")}))},Minus=function(){stateSetter(Object(_home_hafsa_webdesign_react_js_calculator_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_home_hafsa_webdesign_react_js_calculator_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},state),{},{result:-1*state.result}))},calculate=function calculate(){var result=state.result,history=state.history;(Number(history.charAt(history.length-1))||""!==result)&&stateSetter(Object(_home_hafsa_webdesign_react_js_calculator_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_home_hafsa_webdesign_react_js_calculator_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},state),{},{result:eval(history+result),history:""}))};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"app",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_calculator__WEBPACK_IMPORTED_MODULE_5__.a,{result:state.result,history:state.history}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_keyboard__WEBPACK_IMPORTED_MODULE_4__.a,{handleChange:handleChange})]})};__webpack_exports__.a=App},6:function(_,e,t){"use strict";var a=t(0);e.a=function(_){var e=_.handleChange,t=function(_){e(_.target)};return Object(a.jsxs)("div",{className:"keyboard",children:[Object(a.jsx)("button",{onClick:t,className:"operator",id:"%",children:"%"}),Object(a.jsx)("button",{onClick:t,className:"backspace",id:"backspace",children:"CE"}),Object(a.jsx)("button",{onClick:t,className:"clear",id:"clear",children:"C"}),Object(a.jsx)("button",{onClick:t,className:"operator",id:"*",children:"\xd7"}),Object(a.jsx)("button",{onClick:t,className:"number",id:"7",children:"7"}),Object(a.jsx)("button",{onClick:t,className:"number",id:"8",children:"8"}),Object(a.jsx)("button",{onClick:t,className:"number",id:"9",children:"9"}),Object(a.jsx)("button",{onClick:t,className:"operator",id:"/",children:"\xf7"}),Object(a.jsx)("button",{onClick:t,className:"number",id:"4",children:"4"}),Object(a.jsx)("button",{onClick:t,className:"number",id:"5",children:"5"}),Object(a.jsx)("button",{onClick:t,className:"number",id:"6",children:"6"}),Object(a.jsx)("button",{onClick:t,className:"operator",id:"-",children:"-"}),Object(a.jsx)("button",{onClick:t,className:"number",id:"1",children:"1"}),Object(a.jsx)("button",{onClick:t,className:"number",id:"2",children:"2"}),Object(a.jsx)("button",{onClick:t,className:"number",id:"3",children:"3"}),Object(a.jsx)("button",{onClick:t,className:"operator",id:"+",children:"+"}),Object(a.jsx)("button",{onClick:t,className:"minus-symbol",children:"-/+"}),Object(a.jsx)("button",{onClick:t,className:"number",id:"0",children:"0"}),Object(a.jsx)("button",{onClick:t,className:"dot",id:"dot",children:"."}),Object(a.jsx)("button",{onClick:t,className:"calculate",id:"calculate",children:"="})]})}},7:function(_,e,t){"use strict";var a=t(0);e.a=function(_){var e=_.result,t=_.history;return Object(a.jsxs)("div",{className:"calculator",children:[Object(a.jsx)("div",{className:"history",children:t}),Object(a.jsx)("div",{className:"result",children:Number(e).toLocaleString("en")})]})}},9:function(_,e,t){"use strict";t.r(e);var a=t(0),s=t(2),c=t.n(s),r=t(4),l=t.n(r),o=t(5);l.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(o.a,{})}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.4a9a6766.chunk.js.map