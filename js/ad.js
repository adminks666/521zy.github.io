if(aidaori()){
  btf.isJqueryLoad(() => {
    $("html").css({
        "filter":"gray !important",
        "filter":"progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)",
        "filter":"grayscale(100%)",
        "-webkit-filter":"grayscale(100%)",
        "-moz-filter":"grayscale(100%)",
        "-ms-filter":"grayscale(100%)",
        "-o-filter":"grayscale(100%)" 
    });
    })	
}
function aidaori(){
    var aidaoriarr=new Array("0403","0404","0405","0406","0414","0512","0707","0807","0814","0909","0918","0930","1025","1213");
    //2020年4月4日 新冠肺炎哀悼日，清明节
    //2010年4月14日，青海玉树地震
    //2008年5月12日，四川汶川地震
    //1937年7月7日,七七事变 又称卢沟桥事变
    //2010年8月7日，甘肃舟曲特大泥石流
	//8月14日，世界慰安妇纪念日
    //1976年9月9日，毛泽东逝世
	//1931年9月18日，九一八事变
	//烈士纪念日为每年9月30日
    //1950年10月25日，抗美援朝纪念日	
    //1937年12月13日，南京大屠杀
    var mydate = new Date();
    var str = "";// + mydate.getFullYear();
    var mm = mydate.getMonth()+1;
    if(mydate.getMonth()>9){
      str += mm;
    }else{
      str += "0" + mm;
    }
    if(mydate.getDate()>9){
      str += mydate.getDate();
    }else{
      str += "0" + mydate.getDate();
    }
    if(aidaoriarr.indexOf(str)>-1){
        return 1;
    }else{
        return 0;
    }
}
