$(document).on('pjax:success', function() {
  const popup = document.querySelector('#popup');
  if (popup) {
    document.body.removeChild(popup);
  }
  const newPopup = document.createElement('div');
  newPopup.setAttribute('id', 'popup');
  newPopup.innerHTML = `
    <iframe src="https://www.siteweb.cn" style="width: 100%;"></iframe>
    <button id="close">&times;</button>
  `;
  document.body.appendChild(newPopup);
  let btn = document.querySelector('#btn');
  let close = document.querySelector('#close');
  newPopup.style.display = 'none';
  newPopup.style.position = 'fixed';
  newPopup.style.top = '50%';
  newPopup.style.left = '50%';
  newPopup.style.transform = 'translate(-50%, -50%)';
  newPopup.style.width = '90%';
  newPopup.style.height = '90%';
  newPopup.style.maxWidth = '90%';
  newPopup.style.maxHeight = '90%';
  newPopup.style.background = '#fff';
  newPopup.style.borderRadius = '10px';
  newPopup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
  newPopup.style.zIndex = '9999';
  close.style.position = 'absolute';
  close.style.top = '10px';
  close.style.right = '10px';
  close.style.fontSize = '20px';
  close.style.color = 'rgb(0 0 0)';
  close.style.border = 'none';
  close.style.backgroundColor = 'transparent';
  close.style.outline = 'none';
  close.style.cursor = 'pointer';
  btn.addEventListener('click', () => {
    newPopup.style.display = 'flex';
  });
  close.addEventListener('click', () => {
    newPopup.style.display = 'none';
  });
  document.addEventListener('wheel', (e) => {
    // 如果滚动事件不发生在弹出窗口或弹出窗口的子代元素上
    if (!newPopup.contains(e.target)) {
      // 将弹出窗口关闭
      newPopup.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const popup = document.createElement('div');
  popup.setAttribute('id', 'popup');
  popup.innerHTML = `
    <iframe src="https://www.siteweb.cn" style="width: 100%;"></iframe>
    <button id="close">&times;</button>
  `;
  document.body.appendChild(popup);
  let btn = document.querySelector('#btn');
  let close = document.querySelector('#close');
  popup.style.display = 'none';
  popup.style.position = 'fixed';
  popup.style.top = '50%';
  popup.style.left = '50%';
  popup.style.transform = 'translate(-50%, -50%)';
  popup.style.width = '90%';
  popup.style.height = '90%';
  popup.style.maxWidth = '90%';
  popup.style.maxHeight = '90%';
  popup.style.background = '#fff';
  popup.style.borderRadius = '10px';
  popup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
  popup.style.zIndex = '9999';
  close.style.position = 'absolute';
  close.style.top = '10px';
  close.style.right = '10px';
  close.style.fontSize = '20px';
  close.style.color = 'rgb(0 0 0)';
  close.style.border = 'none';
  close.style.backgroundColor = 'transparent';
  close.style.outline = 'none';
  close.style.cursor = 'pointer';
  btn.addEventListener('click', () => {
    popup.style.display = 'flex';
  });
  close.addEventListener('click', () => {
    popup.style.display = 'none';
  });
  document.addEventListener('wheel', (e) => {
    // 如果滚动事件不发生在弹出窗口或弹出窗口的子代元素上
    if (!popup.contains(e.target)) {
      // 将弹出窗口关闭
      popup.style.display = 'none';
    }
  });
});

$(document).ready(function() {
  let url = window.location.href;
  let btn = document.querySelector('#btn');

  // 根据条件设置初始按钮字体颜色
  if (url.indexOf('posts') > -1) {
    if (window.scrollY === 0) {
      if ($('html').attr('data-theme') === 'dark') {
        btn.style.color = 'rgba(255, 255, 255, 0.7)';
      } else {
        btn.style.color = '#fff';
      }
    } else {
      btn.style.color = '#4c4948';
    }
  } else if (url.indexOf('music') > -1) {
    btn.style.color = '#fff';
  } else {
    if (window.scrollY === 0) {
      if ($('html').attr('data-theme') === 'dark') {
        btn.style.color = 'rgba(255, 255, 255, 0.7)';
      } else {
        btn.style.color = '#4c4948';
      }
    } else {
      btn.style.color = '#4c4948';
    }
  }

  // 监听滚动事件，根据条件修改按钮字体颜色
  window.addEventListener('scroll', function() {
    if (url.indexOf('posts') > -1) {
      if (window.scrollY === 0) {
        if ($('html').attr('data-theme') === 'dark') {
          btn.style.color = 'rgba(255, 255, 255, 0.7)';
        } else {
          btn.style.color = '#fff';
        }
      } else {
        if ($('html').attr('data-theme') === 'dark') {
          btn.style.color = '#fff';
        } else {
          btn.style.color = '#4c4948';
        }
      }
    } else if (url.indexOf('music') > -1) {
      btn.style.color = '#fff';
    } else {
      if (window.scrollY === 0) {
        if ($('html').attr('data-theme') === 'dark') {
          btn.style.color = 'rgba(255, 255, 255, 0.7)';
        } else {
          btn.style.color = '#4c4948';
        }
      } else {
        if ($('html').attr('data-theme') === 'dark') {
          btn.style.color = '#fff';
        } else {
          btn.style.color = '#4c4948';
        }
      }
    }
  });
});
if ($('html').attr('data-theme') === 'dark') {
  // 如果是暗黑模式，并且滚动条处于顶部，则按钮字体颜色为淡白色
  btn.style.color = 'rgba(255, 255, 255, 0.7)';
} else {
  // 如果不是暗黑模式，或者滚动条不在顶部，则按钮字体颜色为白色
  btn.style.color = '#fff';
}
// 获取当前地址栏链接
let url = window.location.href;

// 检查地址栏是否包含 "about"
if (url.indexOf("about") > -1) {
  // 如果包含，给 body 添加背景图片
  document.querySelector("body").style.backgroundImage = "url('https://img0.baidu.com/it/u=1820810252,2383896203&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500')";
}

document.addEventListener("DOMContentLoaded", () => {
  // 获取要监测的元素
  const el = document.querySelector("#post .post-copyright .post-copyright-info");

  // 创建一个 MutationObserver
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "attributes" && mutation.attributeName === "style") {
        const height = el.getBoundingClientRect().height;
        if (height > 66) {
          el.querySelector(".post-copyright-info").style.fontSize = "1em";
        } else {
        }
      }
    }
  });

  // 开始监听目标元素的变化
  observer.observe(el, { attributes: true });
});
