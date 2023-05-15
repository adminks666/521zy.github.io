// 爱发电
var heo = {
  addPowerLinksInPostRightSide: async function() {
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
      const randomIndex = heo.getRandomInt(0, data[0].link_list.length);
      const randomPerson = data[0].link_list[randomIndex];

      powerStarImage.style.backgroundImage = `url(${randomPerson.avatar})`;
      powerStar.href = randomPerson.link;
      powerStarTitle.innerText = randomPerson.name;
      powerStarDesc.innerText = randomPerson.descr;
    } catch (error) {
      // console.warn('Error fetching JSON data:', error);
    }
  },

  // 获取一个随机数
  getRandomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
};

heo.addPowerLinksInPostRightSide();