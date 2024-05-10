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
// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 创建弹窗的HTML结构
    function createModal() {
        // 创建弹窗的容器元素
        var modal = document.createElement('div');
        modal.className = 'modal'; // 应用CSS类

        // 创建一个样式元素来动态添加CSS样式
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = `
            .modal {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-color: rgba(0, 0, 0, 0.5);
                color: #fff;
                padding: 20px;
                border-radius: 25px;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                z-index: 1000;
            }
            .modal img {
                max-width: 100%;
                height: auto;
                margin-bottom: 10px;
                border-radius: 25px;
            }
            .modal a {
                color: #fff;
                text-decoration: none;
            }
        `;
        document.head.appendChild(style);

        // 创建超链接元素包裹图片
        var link = document.createElement('a');
        link.href = 'https://pic.rmb.bdstatic.com/bjh/240510/material/ebc3df5500125e6267fe66a29fb7e916364.png';
        link.target = '_blank';

        // 创建图片元素
        var img = document.createElement('img');
        img.src = 'https://pic.rmb.bdstatic.com/bjh/240510/material/ebc3df5500125e6267fe66a29fb7e916364.png';
        img.alt = '示例图片';

        // 将图片添加到超链接中
        link.appendChild(img);

        // 创建文本元素
        var text = document.createElement('p');
        text.textContent = '这是一个图文弹窗，点击图片将跳转到链接。弹窗将在三秒后关闭。';

        // 将超链接和文本添加到弹窗中
        modal.appendChild(link);
        modal.appendChild(text);

        // 添加弹窗到body
        document.body.appendChild(modal);

        // 设置三秒后关闭弹窗
        setTimeout(function() {
            modal.remove(); // 移除弹窗
            document.head.removeChild(style); // 移除动态添加的样式元素
        }, 3000); // 3000毫秒 = 3秒
    }

    // 调用函数来创建并显示弹窗
    createModal();
});
