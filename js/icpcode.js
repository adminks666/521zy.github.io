var wordObj = {
    'www.hack-gov.com.cn': {
        'icpcode': '豫ICP备2022019867号-2',
    },
    'www.hack-gov.cn': {
        'icpcode': '豫ICP备2022019867号-3',
    },
    'blog.siteweb.cn': {
        'icpcode': '豫ICP备2022019867号-1',
    },
    '127.0.0.1:4000': {
        'icpcode': '本地测试虚拟备案号:test001',
    } 		
};
var host = location.host;
var currentObj = wordObj[host];  //获取到当前域名下的内容

if (currentObj) {
    Object.keys(currentObj).map(function (key) {
        $('.icpcode').html(currentObj[key]);
    });

    $('.icpcode').click(function(){
        window.open('https://beian.miit.gov.cn/#/Integrated/index','_blank')
    });
} else {
    console.error('未在wordObj对象中找到' + host + '对应的icp备案号');
}
