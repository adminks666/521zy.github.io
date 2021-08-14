	// 1.得到当前的时间（时间戳）
	function DateFormat() {
	  let date = new Date(),
	    currentDate,
	    currentTime,
	    seperator = "-", // 如果想要其他格式 只需 修改这里
	    month = date.getMonth() + 1,
	    day = date.getDate(),
	    hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
	    minute =
	      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
	    second =
	      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
	  month >= 1 && month <= 9 ? (month = "0" + month) : "";
	  day >= 0 && day <= 9 ? (day = "0" + day) : "";
	  //当前 日期
	  currentDate = month + seperator + day;
	  //当前 时间
	  currentTime = hour + ":" + minute + ":" + second;
	  // 输出格式 为 8-27 14:45:33
	  return currentDate + " " + currentTime;
	}
	var nowTime = DateFormat();
	// 2.设置4·4全国哀悼日
	var NJ_country_startTime = "04-04 00:00:00";
	var NJ_country_overTime = "04-05 00:00:00";
	//2.设置汶川哀悼开始及结束 是 5月12号凌晨
	var earthquake_startTime = "05-19 00:00:00";
	var earthquake_overTime = "05-22 00:00:00";
	//3.设置世界慰安妇纪念日
	var earthquake_startTime = "08-14 00:00:00";
	var earthquake_overTime = "08-15 00:00:00";	
	//4.设置七七事变纪念日
	var earthquake_startTime = "07-07 00:00:00";
	var earthquake_overTime = "07-08 00:00:00";
	//5.设置九一八事变纪念日
	var earthquake_startTime = "09-18 00:00:00";
	var earthquake_overTime = "09-19 00:00:00";
	//6.设置南京大屠杀纪念日
	var earthquake_startTime = "12-13 00:00:00";
	var earthquake_overTime = "12-14 00:00:00";	
	// .将变灰封装到一个函数里，需要的时候再调用
	function grey() {
	  $("html").css({
	    "-webkit-filter": "grayscale(100%)",
	    "-moz-filter": "grayscale(100%)",
	    "-ms-filter": "grayscale(100%)",
	    "-o-filter": "grayscale(100%)",
	    // ie滤镜
	    filter: "progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)",
	    // ie6 等低版本浏览器不需要加滤镜
	    _filter: "none"
	  });
	}
	//在这判断时间，时间字符串可以直接判断大小，不过要精确到秒
	if (nowTime >= NJ_country_startTime && nowTime <= NJ_country_overTime) {
	  // 4.把html 设置灰色滤镜
	  grey();
	} else if (nowTime >= earthquake_startTime && nowTime <= earthquake_overTime) {
	  // 4.把html 设置灰色滤镜
	  grey();
}
