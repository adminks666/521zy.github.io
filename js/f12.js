//控制台
var x = document.createElement('div');
  Object.defineProperty(x, 'id', {
      get:function(){
          // 在这里放入你的代码
          alert('进入开发者模式！～');
          window.location.href='https://www.baidu.com/';
      }
  });
console.log(x); 