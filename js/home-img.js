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

// CSS样式字符串
var cssStyles = `.modal {
    display: none;
    /* 初始状态为隐藏 */
    position: fixed;
    z - index: 1;
    left: 0;
    top: 0;
    width: 100 % ;
    /* 宽度覆盖全屏 */
    height: 100 % ;
    /* 高度覆盖全屏 */
    overflow: auto;
    /* 允许滚动条 */
    background - color: rgba(0, 0, 0, 0.4);
    /* 黑色背景带有40%的不透明度 */
    display: flex;
    /* 使用Flexbox布局 */
    align - items: center;
    /* 垂直居中 */
    justify - content: center;
    /* 水平居中 */
    z-index: 9999999 !important;
}

/* 模态框内容样式 */
.modal - content {
    background - color: #fefefe;
    margin: auto;
    /* 保留此属性，尽管在此例中不是必要的 */
    padding: 20px;
    border: 1px solid#888;
    width: 80 % ;
    /* 内容宽度 */
    max - width: 600px;
    /* 最大内容宽度 */
    border - radius: 25px;
}

/* 关闭按钮样式 */
.close {
    color: #aaa;
    float: right;
    font - size: 28px;
    font - weight: bold;
    cursor: pointer;
}

.close: hover,
.close: focus {
    color: black;
    text - decoration: none;
    cursor: pointer;
}
img#modalImage {
    width: 100 % ;
    border - radius: 25px;
}.modal - text p {
    text - align: center;
}.button {
    padding: 10px 20px;
    background - color: #007BFF;
    color: white;
    border - radius: 4px;
    border: none;
    cursor: pointer;
    transition: background - color 0.3s;
    margin - right: 25px;
}

.button: hover {
    background - color: #0056b3;
}.button - container {
    /* 可以为包含button的div添加一些样式，比如间距、边距等 */
    display: flex;
    justify - content: center;
    /* 水平居中 */
    margin - top: 20px;
    /* 顶部边距 */
}

.styled - button {
    /* 定义按钮的样式 */
    display: inline - block;
    padding: 10px 20px;
    font - size: 16px;
    color: white;
    background - color: #007BFF;
    border: none;
    border - radius: 4px;
    cursor: pointer;
    transition: background - color 0.3s;
}

.styled - button: hover {
    background - color: #0056b3;
    /* 鼠标悬停时改变背景色 */
}
button.button1 {
    padding: 10px 20px;
    background - color: #007BFF;
    color: white;
    border - radius: 4px;
    border: none;
    cursor: pointer;
    transition: background - color 0.3s;
    margin - left: 25px;
}`;

// 创建<style>元素和文本节点
var style = document.createElement('style');
var cssTextNode = document.createTextNode(cssStyles);

// 将CSS样式添加到<style>元素中
style.appendChild(cssTextNode);

// 将<style>元素添加到文档的<head>部分
document.head.appendChild(style);
// 首先，创建模态框的函数
function createModal() {
    // 创建模态框的容器
    var modal = document.createElement('div');
    modal.id = 'modal';
    modal.className = 'modal';
    modal.style.display = 'none'; // 初始状态为隐藏
    modal.style.position = 'fixed';
    modal.style.zIndex = '1';
    modal.style.left = '0';
    modal.style.top = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.overflow = 'auto';
    modal.style.backgroundColor = 'rgba(0,0,0,0.4)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';

    // 创建模态框的内容容器
    var modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    // 创建关闭按钮
    var closeButton = document.createElement('span');
    closeButton.className = 'close';
    closeButton.innerHTML = '&times;';
    closeButton.onclick = closeModal; // 绑定关闭函数
    // 创建图片容器
    var modalImageContainer = document.createElement('div');
    modalImageContainer.className = 'modal-image';

    // 创建图片
    var modalImage = document.createElement('img');
    modalImage.id = 'modalImage';
    modalImage.src = 'https://pic.rmb.bdstatic.com/bjh/3ede906cd38/240704/a995fe97e490caf60e6a690832a983de.jpeg'; // 默认图片路径
    modalImage.alt = '示例图片';
    modalImage.style.width = '100%';
    modalImage.style.borderRadius = '25px';

    // 创建文本内容
    var modalText = document.createElement('div');
    modalText.className = 'modal-text';

    var modalTextP = document.createElement('p');
    modalTextP.innerText = '焘酱紫会嘤嘤嘤，加群即可领略JK、双马尾萝莉。';

    // 创建按钮容器
    var buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    // 创建下载按钮  
    var downloadButton = document.createElement('button');  
    downloadButton.className = 'button';  
    downloadButton.innerText = '点击下载';  
    downloadButton.onclick = function() {  
        window.open('https://www.123pan.com/s/Ulh1jv-3VD4.html', '_blank'); // 在新窗口或标签页中打开链接  
    };  
    // 将按钮添加到文档的某个位置，例如body  
    document.body.appendChild(downloadButton);

    // 创建进群按钮
    var joinGroupButton = document.createElement('button');
    joinGroupButton.className = 'button1';
    joinGroupButton.innerText = '点击进群';
    joinGroupButton.onclick = function() {
        window.open('https://qm.qq.com/q/4GWKUepisU', '_blank'); // 在新窗口或标签页中打开链接
    };

    // 将所有元素组合到一起
    modalContent.appendChild(closeButton);
    modalImageContainer.appendChild(modalImage);
    modalText.appendChild(modalTextP);
    buttonContainer.appendChild(downloadButton);
    buttonContainer.appendChild(joinGroupButton);
    modalContent.appendChild(modalImageContainer);
    modalContent.appendChild(modalText);
    modalContent.appendChild(buttonContainer);
    modal.appendChild(modalContent);

    // 将模态框添加到文档中
    document.body.appendChild(modal);

// 假设这是你的模态框显示函数
function showModal() {
  var modal = document.getElementById('modal');
  modal.style.display = 'flex'; // 或者 'block'，取决于你的CSS设置

  // 模态框显示后，设置图片的src属性
  resizeImage();
}

// 修改你的resizeImage函数，使其可以在模态框打开时正确设置图片
function resizeImage() {
  var img = document.getElementById('modalImage');
  var windowWidth = window.innerWidth;

  // 设置图片的src属性
  if (windowWidth <= 600) {
    img.src = 'https://pic.rmb.bdstatic.com/bjh/240513/material/642256f4d7e743721aaea11764b0da341408.png';
  } else {
    img.src = 'https://pic.rmb.bdstatic.com/bjh/240510/material/ebc3df5500125e6267fe66a29fb7e916364.png';
  }
}
  

    // 页面加载完成后打开模态框并设置图片链接
    window.onload = function() {
        openModal();
        resizeImage();
    };

    // 监听窗口大小变化
    window.addEventListener('resize', resizeImage);

    // 阻止事件冒泡到模态框内容
    modalContent.addEventListener('click',
    function(e) {
        e.stopPropagation();
    });
}

// 打开模态框的函数
function openModal() {
    document.getElementById('modal').style.display = 'flex';
}

// 关闭模态框的函数
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// 创建模态框
createModal();
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
document.querySelector('.modal-content').addEventListener('click',
function(e) {
    e.stopPropagation();
});
