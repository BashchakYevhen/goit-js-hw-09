!function(){var e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=document.querySelector("body");e.addEventListener("click",(function(a){e.disabled=!0,t.disabled=!1,timerId=setInterval((function(){d.style.backgroundColor="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16)))}),1e3)})),t.addEventListener("click",(function(d){e.disabled=!1,t.disabled=!0,clearInterval(timerId)})),t.disabled=!0}();
//# sourceMappingURL=01-color-switcher.59c7766f.js.map
