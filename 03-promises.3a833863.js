!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequire7bc7;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequire7bc7=r);var i=r("6JpON");function a(e,n){return new Promise((function(o,t){setTimeout((function(){Math.random()>.3?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}document.querySelector("form").addEventListener("submit",(function(n){n.preventDefault();var o=new FormData(n.currentTarget),t={};o.forEach((function(e,n){t[n]=Number(e)}));for(var r=t.delay,u=0;u<t.amount;u+=1)a(u+1,r).then((function(n){var o=n.position,t=n.delay;e(i).Notify.success("Fulfilled promise ".concat(o," in ").concat(t,"ms"),{useIcon:!1})})).catch((function(n){var o=n.position,t=n.delay;e(i).Notify.failure("Reject promise ".concat(o," in ").concat(t,"ms"),{useIcon:!1})})),r+=t.step}))}();
//# sourceMappingURL=03-promises.3a833863.js.map
