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

document.addEventListener("DOMContentLoaded", function() {
// 创建一个名为styles的对象来存储样式
var styles = {
  modal: {
    display: 'none',
    position: 'fixed',
    zIndex: 1,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgba(0,0,0,0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalContent: {
    backgroundColor: '#fefefe',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #888',
    width: '80%',
    maxWidth: '600px',
    borderRadius: '25px'
  },
  close: {
    color: '#aaa',
    float: 'right',
    fontSize: '28px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  modalImage: {
    width: '100%',
    borderRadius: '25px'
  },
  modalText: {
    p: {
      textAlign: 'center'
    }
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginRight: '25px'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px'
  },
  styledButton: {
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  button1: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginLeft: '25px'
  }
};
  // 创建模态框
    var modal = document.createElement("div");
    modal.id = "modal";
    modal.className = "modal";
    modal.style.display = "none"; // 初始状态为隐藏
    modal.style.position = "fixed";
    modal.style.zIndex = "1";
    modal.style.left = "0";
    modal.style.top = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.overflow = "auto";
    modal.style.backgroundColor = "rgba(0,0,0,0.4)";
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";

    // 创建模态框内容
    var modalContent = document.createElement("div");
    modalContent.className = "modal-content";
    modal.appendChild(modalContent);

    // 创建关闭按钮
    var close = document.createElement("span");
    close.className = "close";
    close.innerHTML = "&times;";
    close.onclick = closeModal;
    modalContent.appendChild(close);

    // 创建模态框图片容器和图片
    var modalImageContainer = document.createElement("div");
    modalImageContainer.className = "modal-image";
    var modalImage = document.createElement("img");
    modalImage.id = "modalImage";
    modalImage.src = "large-image.jpg";
    modalImage.alt = "示例图片";
    modalImageContainer.appendChild(modalImage);
    modalContent.appendChild(modalImageContainer);

    // 创建模态框文本
    var modalText = document.createElement("div");
    modalText.className = "modal-text";
    var modalTextP = document.createElement("p");
    modalTextP.innerText = "开发者会嘤嘤嘤。";
    modalText.appendChild(modalTextP);
    modalContent.appendChild(modalText);

    // 创建按钮容器和按钮
    var buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";
    var button = document.createElement("button");
    button.className = "button";
    button.innerText = "点击下载";
    button.onclick = function() {
        window.location.href = 'https://www.example.com';
    };
    buttonContainer.appendChild(button);

    var button1 = document.createElement("button");
    button1.className = "button1";
    button1.innerText = "点击进群";
    button1.onclick = function() {
        window.location.href = '点击链接加入群聊【远航】：https://qm.qq.com/q/4GWKUepisU';
    };
    buttonContainer.appendChild(button1);

    modalContent.appendChild(buttonContainer);

    // 将模态框添加到body中
    document.body.appendChild(modal);

    // 定义打开模态框的函数
    function openModal() {
        modal.style.display = "flex";
    }

    // 定义关闭模态框的函数
    function closeModal() {
        modal.style.display = "none";
    }

    // 定义调整图片大小的函数
    function resizeImage() {
        var img = document.getElementById('modalImage');
        var windowWidth = window.innerWidth;

        if (windowWidth <= 600) {
            img.src = 'https://pic.rmb.bdstatic.com/bjh/240513/material/642256f4d7e743721aaea11764b0da341408.png';
        } else {
            img.src = 'https://pic.rmb.bdstatic.com/bjh/240510/material/ebc3df5500125e6267fe66a29fb7e916364.png';
        }
    }

    // 页面加载完成后打开模态框并设置图片链接
    openModal();
    resizeImage();

    // 监听窗口大小变化
    window.addEventListener('resize', resizeImage);

    // 阻止事件冒泡到模态框内容
    modalContent.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});
