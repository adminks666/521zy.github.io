// 获取用户地理位置信息
function getLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("浏览器不支持地理定位。");
    }
}

// 显示用户所在位置
function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    // 判断其是否在中国大陆范围内
    if (isInChina(lat, lon)) {
        console.log("您所在的位置在中国大陆内。");
    } else {
        removeAllDiv();
		anzhiyu.snackbarShow('已检测到您使用国外网络访问本站。We have detected that you are using a foreign network to access this website');
    }
	alert("请注意! 您当前访问的IP地址显示位置非中国大陆，页面将自动清空。");
}

// 判断是否在中国大陆范围内
function isInChina(lat, lon) {
    // 使用正则表达式进行匹配，提高灵活性
    var chinaBorder = /^((30\.[0123456789]+)|(31\.[0123456789]+)|([123456789]\d\.[0123456789]+)|(1[0-2]\d\.[0123456789]+)|([78]\d\.[0123456789]+)|(90\.0+))(,)((73\.[0123456789]+)|(74\.[0123456789]+)|(([8-9]\d|1[01]0)\.[0123456789]+)|(112\.[0123456789]+)|((1[19]\d|12[01])\.[0123456789]+))(;)?$/;
    return chinaBorder.test(lat + ',' + lon);
}

// 移除页面中所有的div元素
function removeAllDiv() {
    var divs = document.getElementsByTagName("div");
    for (var i = divs.length - 1; i >= 0; i--) {
        divs[i].parentNode.removeChild(divs[i]);
    }
}

// 调用getLocation函数
getLocation();
