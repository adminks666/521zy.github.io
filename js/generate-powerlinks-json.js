const images = [
'https://pic1.afdiancdn.com/user/c4aba03401cf11ed86b152540025c377/avatar/a4f622bdac351c7860959a0d95a8e0ea_w512_h512_s202.png?imageView2/1/w/120/h/120',
'https://afdian.net/static/img/logo/logo.png',
'https://websitecssjs.oss-cn-beijing.aliyuncs.com/links/favicon.ico'
];
const texts = [
{
text: '这是文本1',
link: 'http://example.com/1'
},
{
text: '这是文本2',
link: 'http://example.com/2'
},
{
text: '这是文本3',
link: 'http://example.com/3'
}
];

// 创建图片容器，设置 CSS 样式和背景
const imageContainer = document.createElement('power-star-image');
imageContainer.setAttribute('link', ''); // 设置自定义属性 link
imageContainer.style.width = '48px';
imageContainer.style.height = '48px';
imageContainer.style.backgroundRepeat = 'no-repeat';
imageContainer.style.backgroundSize = 'contain';
imageContainer.style.marginRight = '10px';

// 创建文本容器，随机添加一个带链接的文本
const textIndex = getRandomInt(0, texts.length);
const textContainer = document.createElement('power-star-body');
textContainer.innerHTML = <a target="_blank" href="${texts[textIndex].link}">${texts[textIndex].text}</a>;

// 创建整个卡片容器，将图片和文本容器放入其中
const cardContainer = document.createElement('power-star);
cardContainer.style.display= 'flex';
cardContainer.appendChild(imageContainer);
cardContainer.appendChild(textContainer);

// 将整个卡片容器添加到目标 div 中
const targetDiv = document.querySelector('.card-widget.card-power');
if (targetDiv !== null) {
targetDiv.appendChild(cardContainer);
}

// 设置卡片图片和自定义属性 link
imageContainer.style.background = url(${images[getRandomInt(0, images.length)]}) center no-repeat;
imageContainer.setAttribute('link', texts[textIndex].link); // 设置自定义属性 link

// 获取一个 0 到数组长度减一之间的随机整数
function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min)) + min;
}
// 卡片容器被点击时，打开链接
cardContainer.addEventListener('click', function() {
const link = imageContainer.getAttribute('link');
if (link !== '') {
window.open(link, '_blank');
}
});