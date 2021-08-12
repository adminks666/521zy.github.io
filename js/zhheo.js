function fly_to_top() {
  btf.scrollToDest(0, 500);
}
window.addEventListener("scroll", function (event) {
  var scrollTop =
    document.documentElement.scrollTop ||
    window.pageYOffset ||
    document.body.scrollTop;
  if (scrollTop > 56) {
    document
      .getElementById("doraemon_to_top")
      .classList.add("doraemon_fixed");
  } else {
    document
      .getElementById("doraemon_to_top")
      .classList.remove("doraemon_fixed");
  }
});
"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function imgRightClick(){var e=$("img");e.on("contextmenu",function(){return!1}),e.on("dragstart",function(){return!1})}function coverColor(){var _document$getElementB,path=null===(_document$getElementB=document.getElementById("post-cover"))||void 0===_document$getElementB?void 0:_document$getElementB.src,httpRequest;void 0!==path?(httpRequest=new XMLHttpRequest,httpRequest.open("GET",path+"?imageAve",!0),httpRequest.send(),httpRequest.onreadystatechange=function(){var json,obj,value,value;4==httpRequest.readyState&&200==httpRequest.status&&(json=httpRequest.responseText,obj=eval("("+json+")"),value=obj.RGB,value="#"+value.slice(2),"light"==getContrastYIQ(value)&&(value=LightenDarkenColor(colorHex(value),-40)),document.styleSheets[0].addRule(":root","--heo-main:"+value+"!important"),document.styleSheets[0].addRule(":root","--heo-shadow-main: 0 8px 12px -3px"+value+"36!important"),document.getElementById("coverdiv").classList.add("loaded"))}):(document.styleSheets[0].addRule(":root","--heo-main: #286dea!important"),document.styleSheets[0].addRule(":root","--heo-shadow-main: 0 8px 12px -3px rgba(40, 109, 234,.20)!important"))}function colorHex(e){var t=e;if(/^(rgb|RGB)/.test(t)){for(var o=t.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(","),n="#",i=0;i<o.length;i++){var r=Number(o[i]).toString(16);"0"===r&&(r+=r),n+=r}return 7!==n.length&&(n=t),n}if(!/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t))return t;var a=t.replace(/#/,"").split("");if(6===a.length)return t;if(3===a.length){for(var l="#",i=0;i<a.length;i+=1)l+=a[i]+a[i];return l}}function colorRgb(e){var t=e.toLowerCase();if(t&&/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t)){if(4===t.length){for(var o="#",n=1;n<4;n+=1)o+=t.slice(n,n+1).concat(t.slice(n,n+1));t=o}for(var i=[],n=1;n<7;n+=2)i.push(parseInt("0x"+t.slice(n,n+2)));return"rgb("+i.join(",")+")"}return t}function LightenDarkenColor(e,t){var o=!1;"#"==e[0]&&(e=e.slice(1),o=!0);var n=parseInt(e,16),i=(n>>16)+t;255<i?i=255:i<0&&(i=0);var r=(n>>8&255)+t;255<r?r=255:r<0&&(r=0);var a=(255&n)+t;return 255<a?a=255:a<0&&(a=0),(o?"#":"")+String("000000"+(a|r<<8|i<<16).toString(16)).slice(-6)}function getContrastYIQ(e){var t=colorRgb(e).match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/),o=299*t[1]+587*t[2]+114*t[3];return.5<=(o/=255e3)?"light":"dark"}function hidecookie(){document.getElementById("cookies-window").classList.add("cw-hide")}function navTitle(){var e=document.title.replace(" | 御网尚书","");document.getElementById("page-name-text").innerHTML=e}function topPostScroll(){var o;document.getElementById("recent-post-top")&&(o=document.getElementById("recent-post-top")).addEventListener("mousewheel",function(e){var t=-e.wheelDelta/2;o.scrollLeft+=t,e.preventDefault()},!1)}function topCategoriesBarScroll(){var o;document.getElementById("category-bar-items")&&(o=document.getElementById("category-bar-items")).addEventListener("mousewheel",function(e){var t=-e.wheelDelta/2;o.scrollLeft+=t,e.preventDefault()},!1)}function showcopy(){var e;void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.success):((e=ctx.previousElementSibling).innerText=GLOBAL_CONFIG.copy.success,e.style.opacity=1,setTimeout(function(){e.style.opacity=0},700))}setTimeout("hidecookie()",3e3),window.onload=function(){coverColor(),document.getElementById("qrcode")&&new QRCode(document.getElementById("qrcode"),{text:window.location.href,width:250,height:250,colorDark:"#000",colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.H});for(var e=document.getElementsByClassName("copybtn"),t=0;t<e.length;t++)document.getElementsByClassName("copybtn")[t].addEventListener("click",function(){showcopy()})};var OriginTitile=document.title,titleTime;document.addEventListener("visibilitychange",function(){document.hidden?(document.title="御网尚书",clearTimeout(titleTime)):document.title=OriginTitile});var getTimeState=function(){var e=(new Date).getHours(),t="";return 0<=e&&e<=5?t="晚安":5<e&&e<=10?t="早上好":10<e&&e<=14?t="中午好":14<e&&e<=18?t="下午好":18<e&&e<=24&&(t="晚上好"),t};function sayhi(){document.querySelector("#author-info__sayhi")&&(document.getElementById("author-info__sayhi").innerHTML="👋  "+getTimeState()+"！我是")}function fly_to_top(){document.getElementById("guli_top").classList.add("open_wing"),setTimeout(function(){document.getElementById("guli_top").classList.add("flying"),btf.scrollToDest(0,300)},300),setTimeout(function(){document.getElementById("guli_top").classList.remove("flying"),document.getElementById("guli_top").classList.remove("open_wing"),document.getElementById("guli_top").style.cssText="opacity: ''; transform: ''"},600)}var navFn={switchDarkMode:function(){"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"===("undefined"==typeof FB?"undefined":_typeof(FB))&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout(function(){return window.disqusReset()},200);var e,t,o,n="light"===document.documentElement.getAttribute("data-theme")?"#363636":"#F7F7FA";document.getElementById("posts-chart")&&((e=postsOption).textStyle.color=n,e.title.textStyle.color=n,e.xAxis.axisLine.lineStyle.color=n,e.yAxis.axisLine.lineStyle.color=n,postsChart.setOption(e)),document.getElementById("tags-chart")&&((t=tagsOption).textStyle.color=n,t.title.textStyle.color=n,t.xAxis.axisLine.lineStyle.color=n,t.yAxis.axisLine.lineStyle.color=n,tagsChart.setOption(t)),document.getElementById("categories-chart")&&((o=categoriesOption).textStyle.color=n,o.title.textStyle.color=n,o.legend.textStyle.color=n,categoriesChart.setOption(o))}};
