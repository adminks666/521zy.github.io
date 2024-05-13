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

function generateModalHtml() {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>全局居中弹窗示例</title>
    <style>
      /* 模态框样式 */  
      .modal {  
        display: none; /* 初始状态为隐藏 */  
        position: fixed;  
        z-index: 1;  
        left: 0;  
        top: 0;  
        width: 100%; /* 宽度覆盖全屏 */  
        height: 100%; /* 高度覆盖全屏 */  
        overflow: auto; /* 允许滚动条 */  
        background-color: rgba(0,0,0,0.4); /* 黑色背景带有40%的不透明度 */  
        display: flex; /* 使用Flexbox布局 */  
        align-items: center; /* 垂直居中 */  
        justify-content: center; /* 水平居中 */  
      }  
      /* 模态框内容样式 */  
      .modal-content {  
        background-color: #fefefe;  
        margin: auto; /* 保留此属性，尽管在此例中不是必要的 */  
        padding: 20px;  
        border: 1px solid #888;  
        width: 80%; /* 内容宽度 */  
        max-width: 600px; /* 最大内容宽度 */ 
        border-radius: 25px; 
      }  
      /* 关闭按钮样式 */  
      .close {  
        color: #aaa;  
        float: right;  
        font-size: 28px;  
        font-weight: bold;  
        cursor: pointer;  
      }  
      .close:hover,  
      .close:focus {  
        color: black;  
        text-decoration: none;  
        cursor: pointer;  
      }
      img#modalImage {
        width: 100%;
        border-radius: 25px;
      }
      .modal-text p {
        text-align: center;
      }
      .button {  
        padding: 10px 20px;  
        background-color: #007BFF;  
        color: white;  
        border-radius: 4px;  
        border: none;  
        cursor: pointer;  
        transition: background-color 0.3s;
        margin-right: 25px;  
      }  
      .button:hover {  
        background-color: #0056b3;  
      }
      .button-container {  
        display: flex;  
        justify-content: center; /* 水平居中 */  
        margin-top: 20px; /* 顶部边距 */  
      }  
      .styled-button {  
        display: inline-block;  
        padding: 10px 20px;  
        font-size: 16px;  
        color: white;  
        background-color: #007BFF;  
        border: none;  
        border-radius: 4px;  
        cursor: pointer;  
        transition: background-color 0.3s;  
      }  
      .styled-button:hover {  
        background-color: #0056b3; /* 鼠标悬停时改变背景色 */  
      }
      button.button1 {
        padding: 10px 20px;
        background-color: #007BFF;
        color: white;
        border-radius: 4px;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s;
        margin-left: 25px;
      }
    </style>
  </head>
  <body>

    <!-- 模态框 -->
    <div id="modal" class="modal">
      <div class="modal-content">
        <span class="close" onclick="closeModal()">&times;</span>
        <div class="modal-image">
          < img id="modalImage" src="large-image.jpg" alt="示例图片">
        </div>
        <div class="modal-text">
          <p>开发者会嘤嘤嘤。</p >
          <div class="button-container">
            <button class="button" onclick="window.location.href='https://www.example.com';">点击下载</button>
            <button class="button1" onclick="window.location.href='点击链接加入群聊【远航】：https://qm.qq.com/q/4GWKUepisU';">点击进群</button>
          </div>
        </div>
      </div>
    </div>

    <script>
      // JavaScript代码将保持不变，因为它们是控制模态框行为的脚本
      // ...
    </script>
  </body>
</html>
  `;
}

// 使用函数生成HTML并将其插入到DOM中
var htmlContent = generateModalHtml();
document.body.innerHTML = htmlContent;
