// 添加样式
var styleEle = document.createElement('style');
styleEle.textContent = `
.popup-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99999;
  background-color: #3b70fc;
  color: #fff;
  padding: 25px;
  line-height: 22px;
  font-weight: 300;
  width: 360px;
  border-radius: 15px;
}
.popup-title {
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 15px;
}
.popup-info {
  font-size: 16px;
  margin-bottom: 30px;
}
.popup-btn {
  display: flex;
  justify-content: center;
}
.popup-btn button {
  margin-left: 20px;
}
a.layui-btn.layui-btn-primary {
    color: aliceblue;
}
a.layui-btn.layui-btn-primary {
    color: aliceblue;
    display: block;
    width: 100px;
    height: 40px;
    background-color: #6699D5;
    color: #fff;
    text-align: center;
    line-height: 38px;
    border-radius: 5px;
    background: #35D27F;
    border-color: #009f95;
}
a.layui-btn.layui-btn-primary:hover {
    background: #34DF84;
    /* background: linear-gradient(151deg,#0AE18A 0,#34DF84 100%); */
}
.popup-btn button {
    margin-left: 20px;
    color: aliceblue;
    display: block;
    width: 100px;
    height: 40px;
    background-color: #6699D5;
    color: #000;
    text-align: center;
    line-height: 38px;
    border-radius: 5px;
    background: #ffffff;
    border-color: #000000;
	border: 1px solid #02AE55;
}
`;

document.head.appendChild(styleEle);

// 获取所有外部链接
var externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="' + window.location.host + '"])');

// 循环遍历所有外部链接
for (var i = 0; i < externalLinks.length; i++) {
  var link = externalLinks[i];
  
  // 给所有外部链接添加一个点击事件
  link.addEventListener('click', function(e) {
    e.preventDefault(); // 阻止默认行为
    
    // 创建一个新 div 元素
    var newDiv = document.createElement('div');
    newDiv.classList.add('popup-container');
    
    // 创建提示标题元素
    var titleDiv = document.createElement('div');
    titleDiv.classList.add('popup-title');
    titleDiv.innerText = '提示';
    newDiv.appendChild(titleDiv);
    
    // 创建提示信息元素
    var infoDiv = document.createElement('div');
    infoDiv.classList.add('popup-info');
    infoDiv.innerText = '我们收录的网站保证安全，但不保证永久安全。请您仔细查看谨慎辨别，建议您进入外部网站时不要随意泄漏帐号密码等安全信息！！！';
    newDiv.appendChild(infoDiv);
    
    // 创建按钮元素
    var btnDiv = document.createElement('div');
    btnDiv.classList.add('popup-btn');
    
    var continueBtn = document.createElement('a');
    continueBtn.classList.add('layui-btn', 'layui-btn-primary');
    continueBtn.innerText = '继续前往';
    continueBtn.href = this.href;
    continueBtn.target = '_blank';
    continueBtn.onclick = function() {
      newDiv.style.display = 'none';
    }
    btnDiv.appendChild(continueBtn);
    
    var cancelBtn = document.createElement('button');
    cancelBtn.classList.add('layui-btn', 'layui-btn-primary', 'layui-btn-danger');
    cancelBtn.innerText = '取消';
    cancelBtn.onclick = function() {
        document.body.removeChild(newDiv);
    }
    btnDiv.appendChild(cancelBtn);

    var cancelBtn = document.createElement('button');
    var netSecurityLink = '/posts/58432.html'; // 这里替换成你预定义的自定义链接	
    cancelBtn.classList.add('layui-btn', 'layui-btn-primary', 'layui-btn-danger');
    cancelBtn.innerText = '网络安全法';
    cancelBtn.onclick = function() {
        document.body.removeChild(newDiv);
    }
	cancelBtn.onclick = function() {  
	window.open(netSecurityLink);
        document.body.removeChild(newDiv);
	}

    btnDiv.appendChild(cancelBtn);
    
    newDiv.appendChild(btnDiv);
    
    // 将 div 元素添加到页面中
    document.body.appendChild(newDiv);
  });
}
