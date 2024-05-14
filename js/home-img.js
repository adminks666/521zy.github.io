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

function createModalStyles() {
  return `
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
        /* 可以为包含button的div添加一些样式，比如间距、边距等 */
        display: flex;  
        justify-content: center; /* 水平居中 */
        margin-top: 20px; /* 顶部边距 */
      }
      
      .styled-button {  
        /* 定义按钮的样式 */
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
  `;
}

// 使用该函数来创建CSS字符串
const modalStyles = createModalStyles();

// 将CSS字符串插入到文档的<head>部分
const head = document.head || document.getElementsByTagName('head')[0];
const style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(modalStyles));
head.appendChild(style);
function createModal() {
  return `
    <div id="modal" class="modal">
      <div class="modal-content">
        <span class="close" onclick="closeModal()">&times;</span>
        <div class="modal-image">
          <img id="modalImage" src="large-image.jpg" alt="示例图片">
        </div>
        <div class="modal-text">
          <p>开发者会嘤嘤嘤。</p>
          <div class="button-container">
            <button class="button" onclick="window.location.href='https://www.example.com';">点击下载</button>
            <button class="button1" onclick="window.location.href='点击链接加入群聊【远航】：https://qm.qq.com/q/4GWKUepisU';">点击进群</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// 使用该函数来创建HTML字符串
const modalHTML = createModal();

// 然后你可以将这个HTML字符串插入到DOM中的某个元素里，例如：
document.body.innerHTML += modalHTML;
			// 初始打开弹窗的函数  
						  function openModal() {  
						    document.getElementById('modal').style.display = 'flex';  
						  }  
						  
						  // 关闭弹窗的函数  
						  function closeModal() {  
						    document.getElementById('modal').style.display = 'none';  
						  }  
						  
						  // 监听窗口大小变化，并更改图片链接  
						  function resizeImage() {  
						    var img = document.getElementById('modalImage');  
						    var windowWidth = window.innerWidth;  
						  
						    if (windowWidth <= 600) {  
						      // 如果窗口宽度小于等于600px，则更换为小图的链接  
						      img.src = 'https://pic.rmb.bdstatic.com/bjh/240513/material/642256f4d7e743721aaea11764b0da341408.png';  
						    } else {  
						      // 否则，更换为大图的链接  
						      img.src = 'https://pic.rmb.bdstatic.com/bjh/240510/material/ebc3df5500125e6267fe66a29fb7e916364.png';  
						    }  
						  }  
						  
						  // 页面加载完成后打开弹窗并设置图片链接  
						  window.onload = function() {  
						    openModal();  
						    resizeImage();  
						  };  
						  
						  // 监听窗口大小变化  
						  window.addEventListener('resize', resizeImage);  
						  
						  // 阻止事件冒泡到弹窗内容  
						  document.querySelector('.modal-content').addEventListener('click', function(e) {  
						    e.stopPropagation();  
						  });
