// 初始化 typed 实例
var typed = new Typed("#footer-banner-tips", {
  strings: ["用行动去思考，去改变、去创造。","Take action to think, to change, to create."],
  startDelay: 200,
  backDelay: 2000,
  typeSpeed: 100,
  loop: true,
  backSpeed: 20
});

// pjax 已经加载
$(document).on('pjax:end', function() {
  // 在每次页面切换时重新初始化 typed 实例
  typed.destroy();
  typed = new Typed("#footer-banner-tips", {
    strings: ["用行动去思考，去改变、去创造。","Take action to think, to change, to create."],
    startDelay: 200,
    backDelay: 2000,
    typeSpeed: 100,
    loop: true,
    backSpeed: 20
  });
});

// pjax 尚未加载
$(document).ready(function() {
  // 在页面初次加载时手动初始化 typed 实例
  initTyped();

  // 启用 pjax
  $('body').pjax('a', '#pjax-container');
});

// 页面刷新时也执行初始化函数
$(window).on('beforeunload', function(){
  typed.destroy();
});
$(window).on('unload', function(){
  initTyped();
});
