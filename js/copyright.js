$(document).ready(function() {
  replaceImgSrc(); // 执行一次替换图像源的操作
  setInterval(replaceImgSrc, 5000); // 定时执行替换图像源的操作，时间间隔为5秒（根据需要调整）
});

function replaceImgSrc() { 
  var qrcodeImg = $('.wechat-qrcode .qrcode img').attr('src');
  if (qrcodeImg) {
    $('.code1 img').attr('src', qrcodeImg);
  }
};

replaceImgSrc(); // 页面加载后立即执行一次替换图像源的操作


// 获取一个随机数
function agetRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

async function addPowerLinksInPostRightSide() {
  const powerStarImage = document.getElementById('power-star-image');
  const powerStar = document.getElementById('power-star');
  const powerStarTitle = document.getElementById('power-star-title');
  const powerStarDesc = document.getElementById('power-star-desc');
  if (!powerStar || !powerStarImage || !powerStarTitle || !powerStarDesc) {
    // console.warn('Required DOM elements not found, skipping updatePowerStar.');
    return;
  }
  try {
    const response = await fetch('/zhheo/powerlink.json');
    const data = await response.json();
    const randomIndex = getRandomInt(0, data[0].link_list.length);
    const randomPerson = data[0].link_list[randomIndex];
    powerStar.href = randomPerson.link;
    powerStarTitle.innerText = randomPerson.name;
    powerStarDesc.innerText = randomPerson.descr;
  } catch (error) {
    // console.warn('Error fetching JSON data:', error);
  }
}

addPowerLinksInPostRightSide()