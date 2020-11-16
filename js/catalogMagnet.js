const catalogMagnet = new Vue({
	el:'#catalogMagnet',
	data:{
		message:'你好！欢迎访问我的主页https://www.hack-gov.com.cn/',
		link: [],
		postnum:[],
		//这里是磁贴背景图片
		img:[
			"https://www.hack-gov.com.cn/img/lanse.jpg",
			"https://www.hack-gov.com.cn/img/lvse.jpg",
			"https://www.hack-gov.com.cn/img/hese.jpg",
			"https://www.hack-gov.com.cn/img/zise.jpg",
			"https://zfe.space/images/b5.JPG",
			"https://zfe.space/images/b6.JPG",
			"https://zfe.space/images/b7.JPG",
			"https://zfe.space/images/b8.JPG",
		],
		//这里是磁贴描述信息
		describe:[
			"HEXO教程",
			"一切胡思乱想",
			"信息安全资讯",
			"网络安全资讯",
			"我的学习整理",
			"我的各种教程",
			"我的游戏评测",
			"生活点点滴滴",
			
		],
		//这里是磁贴的文字颜色
		figLetColor: {color:'white'},
		//这里是磁贴的文字遮罩
		figLetimg: {backgroundImage: 'linear-gradient(to bottom,rgba(0, 0, 0, 0.4) 25%,rgba(16,16,16,0) 100%)'},
		//这里是当磁贴图片为透明背景png时默认展示的背景颜色
		figbackColor: {background:'#000000 URL()'},
		//这里是当磁贴图片为透明背景png时默认展示的凹凸效果
		figShadow: {boxShadow: 'inset 3px 3px 18px 0px rgba(50,50,50, 0.4)'},
	},

})

catalogMagnet.link = $(".categoryMagnetitem").children().children().children("a");
catalogMagnet.postnum = $(".categoryMagnetitem").children().children().children("span");
let linecolor = catalogMagnet.figLetColor.color
$("<style type='text/css' id='dynamic-after' />").appendTo("head");
$("#dynamic-after").text(".magnetname:after{background:" + linecolor + "!important}");