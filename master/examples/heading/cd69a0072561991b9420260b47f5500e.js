!function(n){function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var t={};e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:r})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/",e(e.s=1089)}({10:function(n,e,t){"use strict";function r(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0;var o=t(68),i=r(o),a=t(65),l=r(a),s=t(63),u=r(s),c=t(21),f=r(c);e.default=function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,f.default)(e)));n.prototype=(0,u.default)(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(l.default?(0,l.default)(n,e):(0,i.default)(n,e))}},1089:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(3),o=t.n(r),i=t(22),a=(t.n(i),t(595)),l=document.getElementById("heading"),s=o.a.createElement("div",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."),u=o.a.createElement("div",null,o.a.createElement(a.a,{level:a.a.Levels.H1},"Heading 1"),s,o.a.createElement(a.b,{caps:!0},"Heading 1 caps"),s,o.a.createElement(a.c,null,"Heading 2"),s,o.a.createElement(a.d,null,"Heading 3"),s,o.a.createElement(a.e,null,"Heading 4"),s);t.i(i.render)(u,l)},11:function(n,e,t){"use strict";e.__esModule=!0;var r=t(21),o=function(n){return n&&n.__esModule?n:{default:n}}(r);e.default=function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,o.default)(e))&&"function"!=typeof e?n:e}},12:function(n,e){function t(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var i=r(o);return[t].concat(o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"})).concat([i]).join("\n")}return[t].join("\n")}function r(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var r=t(e,n);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},13:function(n,e,t){n.exports=t(2)(396)},14:function(n,e,t){"use strict";e.__esModule=!0;var r=t(23),o=function(n){return n&&n.__esModule?n:{default:n}}(r);e.default=o.default||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}},15:function(n,e,t){e=n.exports=t(12)(!1),e.push([n.i,'/* stylelint-disable color-no-hex */\n\n:root {\n  /* Element */\n  --ring-line-color: #dfe5eb;\n  --ring-dark-line-color: #263b4c;\n  --ring-borders-color: #b8d1e5;\n  --ring-icon-color: #b8d1e5;\n  --ring-icon-color: var(--ring-borders-color);\n  --ring-border-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: var(--ring-border-disabled-color);\n  --ring-border-hover-color: #80c6ff;\n  --ring-icon-hover-color: #80c6ff;\n  --ring-icon-hover-color: var(--ring-border-hover-color);\n  --ring-main-color: #008eff;\n  --ring-main-hover-color: #007ee5;\n  --ring-icon-error-color: #db5860;\n  --ring-icon-warning-color: #eda200;\n  --ring-icon-success-color: #59a869;\n  --ring-pale-control-color: #cfdbe5;\n  --ring-popup-border-components: 0, 42, 76;\n  --ring-popup-border-color: rgba(0, 42, 76, .1);\n  --ring-popup-border-color: rgba(var(--ring-popup-border-components), 0.1);\n  --ring-popup-shadow-color: rgba(0, 42, 76, .15);\n  --ring-popup-shadow-color: rgba(var(--ring-popup-border-components), 0.15);\n  --ring-message-shadow-color: rgba(0, 42, 76, .3);\n  --ring-message-shadow-color: rgba(var(--ring-popup-border-components), 0.3);\n\n  /* Text */\n  --ring-search-color: #669ecc;\n  --ring-hint-color: #406380;\n  --ring-link-color: #0f5b99;\n  --ring-link-hover-color: #ff008c;\n  --ring-error-color: #c22731;\n  --ring-warning-color: #cc8b00;\n  --ring-success-color: #1c8c32;\n  --ring-text-color: #444;\n  --ring-dark-text-color: #fff;\n  --ring-heading-color: #222;\n  --ring-secondary-color: #999;\n  --ring-dark-secondary-color: #888;\n  --ring-disabled-color: #bbb;\n  --ring-dark-active-color: #ccc;\n\n  /* Background */\n  --ring-content-background-color: #fff;\n  --ring-sidebar-background-color: #f7f9fa;\n  --ring-selected-background-color: #d4edff;\n  --ring-hover-background-color: #f2f9ff;\n  --ring-dark-selected-background-color: #002a4d;\n  --ring-message-background-color: rgba(0, 21, 38, .9);\n  --ring-navigation-background-color: #000;\n\n  /* Metrics */\n  --ring-border-radius: 3px;\n  --ring-border-radius-small: 2px;\n  --ring-font-size-larger: 14px;\n  --ring-font-size: 13px;\n  --ring-font-size-smaller: 12px;\n  --ring-line-height-taller: 21px;\n  --ring-line-height: 20px;\n  --ring-line-height-lower: 18px;\n  --ring-line-height-lowest: 16px;\n  --ring-ease: 0.3s ease-out;\n  --ring-fast-ease: 0.15s ease-out;\n\n  /* TODO: return raw value back if this issue fixed https://github.com/JLHwung/postcss-font-family-system-ui/issues/65 */\n  --ring-font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  --ring-font-family-monospace: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n\n  /* Common z-index-values */\n\n  /* Invisible element is an absolutely positioned element which should be below */\n  /* all other elements on the page */\n  --ring-invisible-element-z-index: -1;\n\n  /* z-index for position: fixed elements */\n  --ring-fixed-z-index: 1;\n\n  /* Elements that should overlay all other elements on the page */\n  --ring-overlay-z-index: 5;\n\n  /* Alerts should de displayed above overlays */\n  --ring-alert-z-index: 6;\n}\n',""])},16:function(n,e,t){"use strict";e.__esModule=!0,e.default=function(n,e){var t={};for(var r in n)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}},17:function(n,e,t){function r(n,e){for(var t=0;t<n.length;t++){var r=n[t],o=h[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(f(r.parts[i],e))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(f(r.parts[i],e));h[r.id]={id:r.id,refs:1,parts:a}}}}function o(n,e){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],l=i[1],s=i[2],u=i[3],c={css:l,media:s,sourceMap:u};r[a]?r[a].parts.push(c):t.push(r[a]={id:a,parts:[c]})}return t}function i(n,e){var t=v(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=_[_.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),_.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=v(n.insertAt.before,t);t.insertBefore(e,o)}}function a(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=_.indexOf(n);e>=0&&_.splice(e,1)}function l(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var t=c();t&&(n.attrs.nonce=t)}return u(e,n.attrs),i(n,e),e}function s(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",u(e,n.attrs),i(n,e),e}function u(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function c(){return t.nc}function f(n,e){var t,r,o,i;if(e.transform&&n.css){if(!(i=e.transform(n.css)))return function(){};n.css=i}if(e.singleton){var u=y++;t=x||(x=l(e)),r=d.bind(null,t,u,!1),o=d.bind(null,t,u,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=s(e),r=g.bind(null,t,e),o=function(){a(t),t.href&&URL.revokeObjectURL(t.href)}):(t=l(e),r=p.bind(null,t),o=function(){a(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}function d(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=M(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e){var t=e.css,r=e.media;if(r&&n.setAttribute("media",r),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function g(n,e,t){var r=t.css,o=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=w(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),l=n.href;n.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}var h={},m=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),b=function(n,e){return e?e.querySelector(n):document.querySelector(n)},v=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var r=b.call(this,n,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}}(),x=null,y=0,_=[],w=t(60);n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=m()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=o(n,e);return r(t,e),function(n){for(var i=[],a=0;a<t.length;a++){var l=t[a],s=h[l.id];s.refs--,i.push(s)}n&&r(o(n,e),e);for(var a=0;a<i.length;a++){var s=i[a];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete h[s.id]}}}};var M=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},18:function(n,e,t){"use strict";e.__esModule=!0;var r=t(26),o=function(n){return n&&n.__esModule?n:{default:n}}(r);e.default=function(n,e,t){return e in n?(0,o.default)(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}},19:function(n,e,t){n.exports=t(2)(566)},2:function(n,e){n.exports=vendor_lib},20:function(n,e,t){n.exports=t(2)(645)},21:function(n,e,t){"use strict";function r(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0;var o=t(67),i=r(o),a=t(66),l=r(a),s="function"==typeof l.default&&"symbol"==typeof i.default?function(n){return typeof n}:function(n){return n&&"function"==typeof l.default&&n.constructor===l.default&&n!==l.default.prototype?"symbol":typeof n};e.default="function"==typeof l.default&&"symbol"===s(i.default)?function(n){return void 0===n?"undefined":s(n)}:function(n){return n&&"function"==typeof l.default&&n.constructor===l.default&&n!==l.default.prototype?"symbol":void 0===n?"undefined":s(n)}},22:function(n,e,t){n.exports=t(2)(402)},23:function(n,e,t){n.exports={default:t(44),__esModule:!0}},24:function(n,e,t){n.exports=t(2)(529)},26:function(n,e,t){n.exports={default:t(43),__esModule:!0}},3:function(n,e,t){n.exports=t(2)(128)},4:function(n,e,t){"use strict";e.__esModule=!0,e.default=function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}},42:function(n,e){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(n){"object"==typeof window&&(t=window)}n.exports=t},43:function(n,e,t){t(61);var r=t(8).Object;n.exports=function(n,e,t){return r.defineProperty(n,e,t)}},44:function(n,e,t){t(71),n.exports=t(8).Object.assign},45:function(n,e,t){t(72);var r=t(8).Object;n.exports=function(n,e){return r.create(n,e)}},46:function(n,e,t){t(73);var r=t(8).Object;n.exports=function(n,e){return r.getOwnPropertyDescriptor(n,e)}},47:function(n,e,t){t(75),n.exports=t(8).Object.getPrototypeOf},473:function(n,e,t){(function(e){function t(n,e){function t(){if(!o){if(r("throwDeprecation"))throw new Error(e);r("traceDeprecation")?console.trace(e):console.warn(e),o=!0}return n.apply(this,arguments)}if(r("noDeprecation"))return n;var o=!1;return t}function r(n){try{if(!e.localStorage)return!1}catch(n){return!1}var t=e.localStorage[n];return null!=t&&"true"===String(t).toLowerCase()}n.exports=t}).call(e,t(42))},48:function(n,e,t){t(76),n.exports=t(8).Object.setPrototypeOf},49:function(n,e,t){t(77),t(24),t(78),t(79),n.exports=t(8).Symbol},5:function(n,e,t){"use strict";e.__esModule=!0;var r=t(26),o=function(n){return n&&n.__esModule?n:{default:n}}(r);e.default=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}()},50:function(n,e,t){t(19),t(20),n.exports=t(70).f("iterator")},52:function(n,e,t){n.exports={default:t(46),__esModule:!0}},595:function(n,e,t){"use strict";function r(n,e){var t,r;return r=t=function(t){function r(){return p()(this,r),b()(this,(r.__proto__||f()(r)).apply(this,arguments))}return x()(r,t),h()(r,[{key:"render",value:function(){var t=this.props,r=t.className,o=t.caps,a=u()(t,["className","caps"]),s=k()(r,i()({},z.a.caps,e&&o));return _.a.createElement(H,l()({},a,{level:n,className:s}))}}]),r}(y.PureComponent),t.propTypes={children:M.a.node,className:M.a.string,caps:M.a.bool},r}t.d(e,"b",function(){return N}),t.d(e,"c",function(){return L}),t.d(e,"d",function(){return R}),t.d(e,"e",function(){return A});var o=t(18),i=t.n(o),a=t(14),l=t.n(a),s=t(16),u=t.n(s),c=t(9),f=t.n(c),d=t(4),p=t.n(d),g=t(5),h=t.n(g),m=t(11),b=t.n(m),v=t(10),x=t.n(v),y=t(3),_=t.n(y),w=t(6),M=t.n(w),O=t(13),k=t.n(O),U=t(473),S=t.n(U),j=t(608),z=t.n(j),C={H1:1,H2:2,H3:3,H4:4},E=S()(function(){return"h3"},"Headings of level 5 and higher are replaced with h3"),H=function(n){function e(){return p()(this,e),b()(this,(e.__proto__||f()(e)).apply(this,arguments))}return x()(e,n),h()(e,[{key:"render",value:function(){var n=this.props,e=n.children,t=n.className,r=n.level,o=u()(n,["children","className","level"]),i=k()(z.a.heading,t),a=r<=C.H4?"h"+r:E();return _.a.createElement(a,l()({},o,{className:i}),e)}}]),e}(y.PureComponent);H.Levels=C,H.propTypes={children:M.a.node,className:M.a.string,level:M.a.number},H.defaultProps={level:C.H1},e.a=H;var N=r(C.H1,!0),L=r(C.H2),R=r(C.H3),A=r(C.H4)},6:function(n,e,t){n.exports=t(2)(187)},60:function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var o=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o))return n;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?t+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},603:function(n,e,t){e=n.exports=t(12)(!1),e.i(t(15),""),e.i(t(7),void 0),e.push([n.i,".heading_37d {\n\n  margin-top: 20px;\n\n  margin-top: var(--ring-line-height)\n}\n\n.heading_37d:first-child {\n  margin-top: 0;\n}\n\nh1.heading_37d, h2.heading_37d{\n  margin-bottom: 8px;\n  color: #222;\n  color: var(--ring-heading-color);\n  font-size: 24px;\n  line-height: 28px;\n}\n\nh2.heading_37d{\n  font-weight: 200;\n}\n\nh3.heading_37d{\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: inherit;\n}\n\nh4.heading_37d{\n  margin-bottom: 1px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 16px;\n}\n\n.caps_b04 {\n  letter-spacing: 2px;\n  text-transform: uppercase;\n}\n",""]),e.locals={heading:"heading_37d "+t(7).locals.font,caps:"caps_b04"}},608:function(n,e,t){var r=t(603);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0};o.transform=void 0,o.insertInto=void 0,t(17)(r,o),r.locals&&(n.exports=r.locals)},61:function(n,e,t){n.exports=t(2)(516)},63:function(n,e,t){n.exports={default:t(45),__esModule:!0}},64:function(n,e,t){n.exports={default:t(69),__esModule:!0}},65:function(n,e,t){n.exports={default:t(48),__esModule:!0}},66:function(n,e,t){n.exports={default:t(49),__esModule:!0}},67:function(n,e,t){n.exports={default:t(50),__esModule:!0}},68:function(n,e,t){"use strict";function r(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0;var o=t(26),i=r(o),a=t(52),l=r(a),s=t(64),u=r(s);e.default=function(n,e){for(var t=(0,u.default)(e),r=0;r<t.length;r++){var o=t[r],a=(0,l.default)(e,o);a&&a.configurable&&void 0===n[o]&&(0,i.default)(n,o,a)}return n}},69:function(n,e,t){t(74);var r=t(8).Object;n.exports=function(n){return r.getOwnPropertyNames(n)}},7:function(n,e,t){e=n.exports=t(12)(!1),e.push([n.i,'/* https://readymag.com/artemtiunov/RingUILanguage/colours/ */\n\n/*\nUnit shouldn\'t be CSS custom property because it is not intended to change\nAlso it won\'t form in FF47 https://bugzilla.mozilla.org/show_bug.cgi?id=594933\n*/\n\n.clearfix_1e8::after {\n  display: block;\n  clear: both;\n  content: \'\';\n}\n\n.font_3f3 {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  font-family: var(--ring-font-family);\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  line-height: 20px;\n  line-height: var(--ring-line-height);\n}\n\n.font-lower_cf2 {\n\n  line-height: 18px;\n\n  line-height: var(--ring-line-height-lower);\n}\n\n.font-smaller_1da {\n\n  font-size: 12px;\n\n  font-size: var(--ring-font-size-smaller);\n}\n\n.font-smaller-lower_c69 {\n\n  line-height: 16px;\n\n  line-height: var(--ring-line-height-lowest);\n}\n\n.font-larger-lower_fa1 {\n\n  font-size: 14px;\n\n  font-size: var(--ring-font-size-larger);\n}\n\n.font-larger_938 {\n\n  line-height: 21px;\n\n  line-height: var(--ring-line-height-taller);\n}\n\n/* To be used at large sizes */\n/* As close as possible to Helvetica Neue Thin (to replace Gotham) */\n.thin-font_52b {\n  font-family: "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  font-weight: 100; /* Renders Helvetica Neue UltraLight on OS X  */\n}\n\n.monospace-font_b2e {\n  font-family: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n  font-family: var(--ring-font-family-monospace);\n  font-size: 12px;\n  font-size: var(--ring-font-size-smaller);\n}\n\n.ellipsis_894 {\n  overflow: hidden;\n\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n/* Note: footer also has top margin which isn\'t taken into account here */\n\n/* Media breakpoints (minimal values) */\n\n/* Media queries */\n',""]),e.locals={unit:"8px","footer-height":"64px","breakpoint-small":"640px","breakpoint-middle":"960px","breakpoint-large":"1200px","extra-small-screen-media":"(max-width: 639px)","small-screen-media":"(min-width: 640px) and (max-width: 959px)","middle-screen-media":"(min-width: 960px) and (max-width: 1199px)","large-screen-media":"(min-width: 1200px)",clearfix:"clearfix_1e8",font:"font_3f3","font-lower":"font-lower_cf2 font_3f3","font-smaller":"font-smaller_1da font-lower_cf2 font_3f3","font-smaller-lower":"font-smaller-lower_c69 font-smaller_1da font-lower_cf2 font_3f3","font-larger-lower":"font-larger-lower_fa1 font-lower_cf2 font_3f3","font-larger":"font-larger_938 font-larger-lower_fa1 font-lower_cf2 font_3f3","thin-font":"thin-font_52b","monospace-font":"monospace-font_b2e",ellipsis:"ellipsis_894"}},70:function(n,e,t){n.exports=t(2)(222)},71:function(n,e,t){n.exports=t(2)(513)},72:function(n,e,t){n.exports=t(2)(514)},73:function(n,e,t){n.exports=t(2)(518)},74:function(n,e,t){n.exports=t(2)(519)},75:function(n,e,t){n.exports=t(2)(520)},76:function(n,e,t){n.exports=t(2)(528)},77:function(n,e,t){n.exports=t(2)(576)},78:function(n,e,t){n.exports=t(2)(638)},79:function(n,e,t){n.exports=t(2)(639)},8:function(n,e,t){n.exports=t(2)(24)},9:function(n,e,t){n.exports={default:t(47),__esModule:!0}}});