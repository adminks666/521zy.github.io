// 定义自动隐藏计时器
var hideTimeout = null;
// 定义自动显示计时器
var showTimeout = null;
// 指定要操作的 div 的 CSS 选择器
var divSelector = ".pagination-post";
// 隐藏和显示之间的暂停时间（1000ms）
var pauseWait = 1000;
// 是否正在滚动
var isScrolling = false;

// 监听窗口滚动事件
$(window).scroll(function() {
  // 判断是否存在 id 为 percent 的 span 元素
  if ($("#percent").length > 0) {
    // 获取 #percent 元素中的数字
    var percentNum = parseInt($("#percent").text());
	if ($("#percent").length > 0) {
    }

    // 判断是否显示 div 元素
    if (percentNum === 75) {
      $(divSelector).hide();
      return;
    }
  }

  // 当前滚动条距离顶部的距离
  var scrollTop = $(this).scrollTop();
  // 清除自动隐藏计时器
  clearTimeout(hideTimeout);
  // 清除自动显示计时器
  clearTimeout(showTimeout);

  // 判断当前是否已经滚动到页面高度的百分之75以上
  if (scrollTop > $(document).height() * 0.75) {
    // 隐藏 div 元素并结束函数
    $(divSelector).hide();
    return;
  }

  // 如果未在滚动状态中，则执行自动隐藏操作，并设置滚动状态为 true
  if (!isScrolling) {
    // 自动隐藏 div 元素
    $(divSelector).fadeOut();
    // 在一定时间内不再触发自动隐藏操作
    hideTimeout = setTimeout(function() {
      // 设置滚动状态为 true
      isScrolling = true;
    }, pauseWait);
  }

  // 在一定时间后，执行自动显示操作，并将滚动状态重新设置为 false
  showTimeout = setTimeout(function() {
    // 自动显示 div 元素
    $(divSelector).fadeIn();
    // 重新设置滚动状态为 false
    isScrolling = false;
  }, pauseWait);
});
