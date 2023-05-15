function updateUrl() {
  // 获取当前页面的地址
  var url = window.location.href;
  // 检查是否为首页
  if (url.slice(-1) === "/") {
    // 检查地址栏是否包含.html
    if (!url.includes('.html')) {
      // 如果不包含，则在地址栏末尾添加.html扩展名
      url += 'index.html';
      url = url.replace('.html', '.php');
      history.replaceState(null, null, url);
    }
  } else {
    // 如果不是首页，检查地址栏是否包含.html
    if (url.indexOf('.html') !== -1) {
      // 如果包含，则将.html替换为.php
      url = url.replace('.html', '.php');
      history.replaceState(null, null, url);
    }
  }
  // 更新页面URL
  history.replaceState(null, null, url);
}
$(document).on('pjax:success', function() {
  updateUrl();
})