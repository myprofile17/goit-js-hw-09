!function(){var e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),a=document.querySelector("body");t.disabled=!0;var d=null;e.addEventListener("click",(function(){e.disabled=!0,t.removeAttribute("disabled"),a.style.background,d=setInterval((function(){a.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),t.addEventListener("click",(function(){t.disabled=!0,e.removeAttribute("disabled"),clearInterval(d)}))}();
//# sourceMappingURL=01-color-switcher.bb3d258e.js.map
