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
