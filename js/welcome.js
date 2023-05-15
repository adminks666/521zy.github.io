const PROVINCES = ['北京', '上海', '天津', '重庆', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆','香港','台湾','澳门'];

const checkWelcomeInfos = () => {
  const welcomeInfos = document.querySelectorAll("#welcome-info");
  if (welcomeInfos.length > 0) {
    welcomeInfos.forEach((welcomeInfo) => {
      if (PROVINCES.some((province) => welcomeInfo.textContent.includes(province))) {
        anzhiyu.snackbarShow('欢迎光临本站。Welcome to this website');
      }
    });
  }
};

export default checkWelcomeInfos;
