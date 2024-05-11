setInterval(function() {
  //找到所有class为 post_bg, entered, loaded 的img标签，可能会有多个
  var imgList = document.querySelectorAll("img.post_bg.entered.loaded");

  //检查网页是否启用深色模式，若启用则将图片路径替换为深色模式时的路径
  var isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
  var imgPath = isDarkMode ? "https://pic.rmb.bdstatic.com/bjh/ec2690a24c5f07270e6134d78985716b8757.png" : "https://pic.rmb.bdstatic.com/bjh/f638d1081b1e6476814ece268808e54e2263.png"; // 这里替换为您自己的图片路径

  //循环遍历每个img标签
  for (var i = 0; i < imgList.length; i++) {
    var img = imgList[i];
    img.src = imgPath;
  }
}, 50);

document.addEventListener('DOMContentLoaded', function() {
    function createModal() {
        var modal = document.createElement('div');
        modal.className = 'modal';

        // 创建并添加样式
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

        var link = document.createElement('a');
        link.href = 'https://www.123pan.com/s/Ulh1jv-YbD4.html';
        link.target = '_blank';

        var img = document.createElement('img');
        img.src = 'https://pic.rmb.bdstatic.com/bjh/240510/material/ebc3df5500125e6267fe66a29fb7e916364.png';
        img.alt = '示例图片';

        link.appendChild(img);

        var text = document.createElement('p');
        text.textContent = '这是一个图文弹窗，点击图片将跳转到链接。弹窗将在三秒后关闭。';

        modal.appendChild(link);
        modal.appendChild(text);

        document.body.appendChild(modal);

        setTimeout(function() {
            modal.remove();
            document.head.removeChild(style);
        }, 3000);
    }

    createModal();
});
