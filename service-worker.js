if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,r,c)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return a;case"module":return d;default:return e(i)}}))).then((e=>{const i=c(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"12135.html",revision:"4489bb882c9a3ff704f90682ab1eab19"},{url:"14644.html",revision:"2f950a9f50ce409e56ca3142e4a874b3"},{url:"147.html",revision:"0496842af931e51540ef6a63d4288968"},{url:"16284.html",revision:"a1ade7664984eedccaacede432ce7855"},{url:"16767.html",revision:"e531383162652c1c8ae8b527e4fa4f3d"},{url:"17366.html",revision:"68579c69337c6d287d9b434240f3dc97"},{url:"18535.html",revision:"cfc0d985d0312a8dbf5fba63fd7f3bc4"},{url:"20305.html",revision:"a3e5bbd4daf06fe1eaf3e7c87ccedbcd"},{url:"25232.html",revision:"85945ce858c9c322d85752840d6f9927"},{url:"29294.html",revision:"5edc9e567bf51cc898a0e767e3647e29"},{url:"2c21ecd9.html",revision:"055fdbe35ed3bc1507e6c2bdf1f6e82e"},{url:"30436.html",revision:"01c632557d96758c53acd4d084216504"},{url:"31903.html",revision:"db48f3e7d70df9ad4672480498ae52d4"},{url:"32228.html",revision:"f46f587fec293f242887b872034c7918"},{url:"34687.html",revision:"bedf9277ac84f58f015f889f55321ca6"},{url:"35815.html",revision:"a3f09eaf81983eae4159d7896434fbca"},{url:"37785.html",revision:"eaead3076f5b3f4e42ab7b0fda32158e"},{url:"39800.html",revision:"c877c99951c35c7189a0334629f07e99"},{url:"40347.html",revision:"459b7d8a722c642249c0ff08e7291311"},{url:"404.html",revision:"8a562c8bff23f1bb958fcdea31e757d4"},{url:"42214.html",revision:"c2769833abd89f23e99d76c0ea3ca6da"},{url:"43447.html",revision:"f680e875d885cd408b91ef4cb825a244"},{url:"44232.html",revision:"555072ed2b7529166a4fc7aedb88323e"},{url:"460.html",revision:"642c849626e6ebe597d800332c990fe6"},{url:"50261.html",revision:"226f572981b50c8d25d422233e25f74a"},{url:"50421.html",revision:"29f93997e069f1f62f11004b1b0eb491"},{url:"51279.html",revision:"fd2a066f4d12a9ba643e8ce4845983a0"},{url:"5184.html",revision:"0162876667ee74c893158d4ecd7f4277"},{url:"54739.html",revision:"38af3852ed9a04ad116b9fa69feb0628"},{url:"56961.html",revision:"f89e908764f14499e6db56feef94ff56"},{url:"58432.html",revision:"d82e846dfc6891fbc0a545b20cdc2db6"},{url:"64532.html",revision:"dcd84c31e3e68cc4191bcc1947eaafd8"},{url:"7489.html",revision:"ce4a30684f9776b166a73bf528659319"},{url:"795.html",revision:"16a5132ff849f62428b4621c961cebeb"},{url:"8834.html",revision:"46e1e82e1d730cbbdef5ea0c51520566"},{url:"9101.html",revision:"134abe3d6cb1ceba0b3a62993349be1a"},{url:"archives/2020/10/index.html",revision:"9440cf342286694eee772b99ab6ff887"},{url:"archives/2020/11/index.html",revision:"42171c8a2404f3fa699670fb0ae9accb"},{url:"archives/2020/11/page/2/index.html",revision:"c60cd807c469f76d28fdd4de3cf5c035"},{url:"archives/2020/11/page/3/index.html",revision:"9bbf204bd8633e37efa0f64dcb5ed4b6"},{url:"archives/2020/12/index.html",revision:"6cbc72c6c7b2a2edcbab856ca88c0de0"},{url:"archives/2020/index.html",revision:"d8c2c049d9b09f1a91e597f8551b04aa"},{url:"archives/2020/page/2/index.html",revision:"44b93679a68df6406c4439d92c58b206"},{url:"archives/2020/page/3/index.html",revision:"7f279d63038e7355ea147ea0f99b4970"},{url:"archives/2020/page/4/index.html",revision:"619bd2a629529ee31b1540cc88720346"},{url:"archives/2021/06/index.html",revision:"045be9c4b9a0dad2fc529d4372f8e009"},{url:"archives/2021/07/index.html",revision:"e8589cffb2e6f1a39d0ea2a76a941ef2"},{url:"archives/2021/index.html",revision:"5a8b010e713d23299b9c8faeac49da87"},{url:"archives/index.html",revision:"44d1afc41b82d11bd7758b05fc9b6465"},{url:"archives/page/2/index.html",revision:"02a1d7952df687dbfe6ef0b7f100dbdf"},{url:"archives/page/3/index.html",revision:"bd34b6c44245b4b8417494374f9dac5d"},{url:"archives/page/4/index.html",revision:"dac5edbf473f73770b4f49cb0fcb71ac"},{url:"bb/index.html",revision:"6cb69f0bdc32bef4e766b66c197996da"},{url:"categories/HEXO/index.html",revision:"4f531ef4b0d94e4b60d01962f5bffe9d"},{url:"categories/信息安全/index.html",revision:"4192f2dcc7cf84556d90e8ca33194e2a"},{url:"categories/大数据/index.html",revision:"f1e7de564a53a576c7082c53a52327f3"},{url:"categories/思想实验/index.html",revision:"c6ab22df912968bb75d88106868b56bf"},{url:"categories/科学幻想/index.html",revision:"8e115dd26a6bcd4f9d7a03c7e2eefc37"},{url:"categories/科技杂谈/index.html",revision:"2e7f7fd85e233732d6444532371aa12f"},{url:"categories/网络安全/index.html",revision:"38534f2639c01395edfb3b6edc8ab94b"},{url:"categories/网络安全/page/2/index.html",revision:"147b5a8fa1fb5c061789a82447a320e8"},{url:"categories/网络安全/page/3/index.html",revision:"644886e98a7ebb78dcda38e3fad9147a"},{url:"categories/闲言碎语/index.html",revision:"d8aca57ee8caa77320809f3a05692967"},{url:"css/hdp.css",revision:"1810ebe679af7a013bbd1668db3edeaf"},{url:"css/index.css",revision:"d79c114b1403799f221ccfb79494a7e7"},{url:"css/rightside.css",revision:"9fe72e25b9b9e6ab5e11670400b6aa08"},{url:"css/showbb_in_index.css",revision:"793f32ea0d24bf05f418a0f4911ddbd2"},{url:"css/touxiang.css",revision:"5ed97bbcbd6a2365295214bb2c0c0473"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/zhheoblog.css",revision:"4964af1ffe18e241d4c7e886307ff884"},{url:"didi.html",revision:"bbcfb7256cbb11623aeaf0cf95048c78"},{url:"img/1.gif",revision:"1ab860c028e79a33e17ec69d81b79a21"},{url:"img/10-21.jpg",revision:"ab4c15aa281457660374a4a55c744a9a"},{url:"img/100.jpg",revision:"c2aeb4f45a93c521a12befd51f79972d"},{url:"img/100.png",revision:"95c74c68e087d7c0899784b9379681ba"},{url:"img/1000.jpg",revision:"28aedbb0a91f93f4a89f88f889b82533"},{url:"img/14.gif",revision:"919e325ada9f456c4d8bb3d98027f3e4"},{url:"img/15.gif",revision:"0cc747d35ba00d87c4c472417822f9d9"},{url:"img/2.gif",revision:"e84853053955c107bc85dee8eef85df9"},{url:"img/2wm.png",revision:"664bba725639337f58693f8845c93ccd"},{url:"img/3.gif",revision:"f071876778993aadd71652ac786cdc24"},{url:"img/404.jpg",revision:"295bfdd30f56ce02fd600868ff20056d"},{url:"img/98798.png",revision:"bd277622581ebd96d9737a56907c7ea6"},{url:"img/about.jpg",revision:"0ceaeb73e6ce26f12d1fd0ddedc2aa34"},{url:"img/aiq.webp",revision:"c30a32e1a9ad612caa07d72b2b7b0bed"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/api.jpg",revision:"0f454f8bc3e775227b0fee5f47ed3797"},{url:"img/avatar.jpg",revision:"ae3dbd8c94269f5a61ffddf0624a5530"},{url:"img/chengse.jpg",revision:"a9746693e2c22d8398931a34d34d3606"},{url:"img/dasj.jpg",revision:"a1102b13d7a3db01009187f0c90eb1f5"},{url:"img/favicon.png",revision:"00bd54696193a5c541c76963b5353895"},{url:"img/fense.jpg",revision:"588c4c00c6e66c1b4bf01fa412cc073e"},{url:"img/friend_404.gif",revision:"fe4b5122e565ce83019df4898600237c"},{url:"img/github.jpg",revision:"85d00b8f6ae3c4d33a4619057a52035d"},{url:"img/hese.jpg",revision:"e5b416cbbe6a0f04b68c305753ba0a54"},{url:"img/hexo.jpg",revision:"3c2576ecd956f4f2ab077f83c0145568"},{url:"img/hexo.png",revision:"261104c32d13e551db138d9ffd866bd7"},{url:"img/icp.png",revision:"dca98543fce6b0a00e9e7b65939cf8bc"},{url:"img/jieshao.jpg",revision:"e046cb17ed4b88ccc54289f74032471b"},{url:"img/kjzt.jpg",revision:"36d1b35201a5c0a3fd8cb764280599cb"},{url:"img/kxhx.jpg",revision:"34d7e8da53582f3302fb341a20e5e071"},{url:"img/lanse.jpg",revision:"97154de3a0568299b17fc587496c3330"},{url:"img/loader/timg.gif",revision:"ee899a5657f0fa9617f634cd9642a763"},{url:"img/loading.gif",revision:"f3fef7694ca5f181db968f8c3dbe15ea"},{url:"img/lvse.jpg",revision:"f2599fe7c4b312d17509eafdd1c9c7bd"},{url:"img/nav-40.png",revision:"b2e9cca6b2ce4faba6bccc45c84fe288"},{url:"img/next-40.png",revision:"3e7496c92d4215186a18c0cbadf77709"},{url:"img/next-60.png",revision:"19d2a7365ff0b4d5162e3233cab8deb7"},{url:"img/psb.jpg",revision:"a5c2ccd2a7ed47ffbc4993115f39c47a"},{url:"img/pwa/16.jpg",revision:"6508a40614678a99895b8e10caaea856"},{url:"img/pwa/32.jpg",revision:"9236ed0cfac2e05845a71a75b593d686"},{url:"img/qianlan.jpg",revision:"feb5f2ffa8dd84609db500e3d484c5a1"},{url:"img/qss.jpg",revision:"e58479341728c656cae530df6eb72747"},{url:"img/raster.png",revision:"3ccb89d999c6ba1e8d45178ddd509578"},{url:"img/rightmenu/rightmenu1.png",revision:"6b316311ee797478633915e48757bcff"},{url:"img/rightmenu/rightmenu2.png",revision:"7383d9e90e622879de326c3ee3782843"},{url:"img/rightmenu/rightmenu3.png",revision:"fbbc7faf6b70edf73c2ac5aeadc3f554"},{url:"img/rightmenu/rightmenu4.png",revision:"4bd61306189dcd70a6da620adae4569b"},{url:"img/rightmenu/rightmenu5.png",revision:"7633d8b088882b6e1b254405e3fd8f0a"},{url:"img/shenlan.jpg",revision:"a73ec1cb5aa65fd78353376af3126643"},{url:"img/shipin.jpg",revision:"057aaa57391a19629173538a706f734d"},{url:"img/square.png",revision:"ffc089b58246139987e2bf2629fc2b5e"},{url:"img/ssl.png",revision:"d0f3ae6a437346ea4c79c2a80fac2bb9"},{url:"img/strip.png",revision:"7e290e5b729298f122306a33c2ab8629"},{url:"img/sxsy.jpg",revision:"3a219b2c68d39e4af35923274ee2e66d"},{url:"img/timg.gif",revision:"988e007f9aa6aff6524a597a60d8a9f0"},{url:"img/top.png",revision:"0f7b9f9cdc8072d98504f1f4e012b6d5"},{url:"img/wangluoanquan.jpg",revision:"c4b5e21814b641fd27a46241ee9681cd"},{url:"img/wanwusheng.jpg",revision:"5deac437184dee0e52b1454027fc97e0"},{url:"img/xinli.jpg",revision:"24397b51922f6654eeafbeec79029bc2"},{url:"img/xinxianquan.jpg",revision:"f84b288dd4f63d125b2c95d2e3f74251"},{url:"img/youlian.webp",revision:"7a952f03588cf47206faf54512e3b222"},{url:"img/youqing.jpg",revision:"480fea2f46eb44f8da99fc04f5757559"},{url:"img/zhcover.png",revision:"e779d2c73a6df55400a895e901b10a44"},{url:"img/zhuye.gif",revision:"59a7b7616679ae1d26a6ee049c98ae5f"},{url:"img/zise.jpg",revision:"cd832c940a1ea388332d85bc7a43ff99"},{url:"index.html",revision:"6624ad4ab42cd79a5050e27cfc5911a6"},{url:"index/hdp.css",revision:"1810ebe679af7a013bbd1668db3edeaf"},{url:"index/hdp.js",revision:"0c76dde1c138df8e8999c0987e2bdbd7"},{url:"index/index.html",revision:"47271e23a34896446bc9c45b79c15bf0"},{url:"js/hdp.js",revision:"0c76dde1c138df8e8999c0987e2bdbd7"},{url:"js/main.js",revision:"01f62452fd05335569c6341d3ac0f52b"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/shense.js",revision:"82e0f6ce9156d633bab6b88d8a9dc99c"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"8cad93d3930e2eaf23eba4f5e42efb3e"},{url:"links/baiye.png",revision:"8346fb4cf945e40c74f8262a5e6a0927"},{url:"links/baiyu.png",revision:"514b0b031b4cd8300925a3f4bd1ec26a"},{url:"links/baowenbei.jpg",revision:"67384981ddef651aa3e350d504dbc6a7"},{url:"links/Boo.png",revision:"b0bb08e58c58e35eea167e864d0319ed"},{url:"links/changzhengbuluoge.png",revision:"a430cb0b88bd6b446d989b29691a7a01"},{url:"links/ealy-20.png",revision:"bdc2c0c5dc428417dcdc2e5345b44b4d"},{url:"links/fanjichen.png",revision:"41c324ff17e5777c6acec20c945cc358"},{url:"links/fengzi.png",revision:"811a8b0951a6b52ea22ce5326ffea844"},{url:"links/fly6022.png",revision:"9cd96995ea4bda0f51700bfd4f6c3b11"},{url:"links/GamerNoTitle.png",revision:"98f76b1144fcbf632fc30fc834b99fa7"},{url:"links/hack-er.png",revision:"64c818d58a929cef6e218f5225301a45"},{url:"links/hacker.png",revision:"9bdb57f849acf22637d5bc2ee6ef30f9"},{url:"links/hanguang.png",revision:"88d6173de55836d8bdbb9cffd6af1a53"},{url:"links/heishi.png",revision:"bc6966b476c401bbff66782560305e4f"},{url:"links/keding.png",revision:"2d0936bc2fce4ca391ea772ed456e5cc"},{url:"links/killua.jpg",revision:"740a6fbbf9b07d05eb2441533a21f2ee"},{url:"links/Laihsiao.png",revision:"79ff6f4ecd1d1f0fe4d466c263094e0e"},{url:"links/luobo.png",revision:"c8252c95fadeba32f3d7e21db2529402"},{url:"links/meihao.png",revision:"7c7c5d78f452846a4d7bcf685cfa3782"},{url:"links/mujin.png",revision:"483bb09ddb1928a1c87b1383bd254542"},{url:"links/muzi.png",revision:"a079bf0108dffc10db5202b838aa4339"},{url:"links/nan.jpg",revision:"f5a04b3e70a8f328f0b35e422cd0245c"},{url:"links/nescx.jpg",revision:"e7211ca4be66a529e1122add5d5f34b6"},{url:"links/owomoe.net.jpg",revision:"baee6c93a5d90c4519378679eefc5d3b"},{url:"links/pangao.png",revision:"026a4cd106635e45f37bd672054bbbf3"},{url:"links/pjdyu.png",revision:"497c10dc0f83175ea0ac1f3f270130e9"},{url:"links/ql'sHexoBlog.png",revision:"7abc8c32447c5cc9908d7f06de5e4f1d"},{url:"links/rtmacha.png",revision:"58520ec040a4f12bd987c6541ae82320"},{url:"links/Rui's Blog.png",revision:"8d56e49991de7d8028b0b8476bd15f57"},{url:"links/shanhe.jpg",revision:"a26d65ed1f96028f79e64297e5413c4f"},{url:"links/shineshen.png",revision:"102134bea2c7bbccafab127604fbfe76"},{url:"links/suiyue.png",revision:"8565b267e3cf870d3c51a38ba21ab522"},{url:"links/taigeer.png",revision:"456e0640c93c2228d145cf05c14599fb"},{url:"links/tianze.png",revision:"4646b3944f751dded779c7645509b21e"},{url:"links/weiqudian.png",revision:"d33d385a71efde3b17a0622d7eb552f9"},{url:"links/xiaojia.png",revision:"259d4e99f2ff681aea825d8a362e93ac"},{url:"links/xiaoxin.jpg",revision:"e8ef5e19873914d7c1920bf1a7b1190b"},{url:"links/ximouren.png",revision:"e4785ba475fb926e213d2b6ffc39aa19"},{url:"links/xingchen.jpg",revision:"bc44901b6282d68253c5a9e380e51757"},{url:"links/xuzelin.png",revision:"74cf9d3bd27e762ba64d6a9e7ce20e4d"},{url:"links/yiyezhiqiu.png",revision:"9cc733d2dac47463e209bf822da94f88"},{url:"links/YlovexLN.png",revision:"251bb09a65ef2b6309a19e71e0153a83"},{url:"links/yunchen.png",revision:"5b3c27a2aaf178b592dc83f755151ae1"},{url:"links/zhijin.png",revision:"ffab5226d83e25685c58b376b079aaff"},{url:"links/zhijing.png",revision:"15a967e0932e266268bdfc870b039607"},{url:"links/zhiyongyuan.png",revision:"9f141348f50968bbd1ad36ba8d4224b0"},{url:"links/チェンシャン.png",revision:"087f8f15e4c636ab59e16e27560ebfa3"},{url:"page/2/index.html",revision:"1b2a0d3a1477773fd0c8a04e53ff403a"},{url:"page/3/index.html",revision:"0be22ff83420513d27067b1e089ae9b1"},{url:"page/4/index.html",revision:"5623b8d94fc9b7b3d46b84f9ac218ff3"},{url:"photo/css/bootstrap-combined.min.css",revision:"15ce0fcd2e48df4f357ac806dc3973cf"},{url:"photo/css/juicyslider-min.css",revision:"d2653721016d6ab08afe9d0fc1b33534"},{url:"photo/css/juicyslider.css",revision:"1dc100a4b474d630f2f657227111be93"},{url:"photo/data/0.jpg",revision:"38b17ff7e4bdcfb8a28d0d8f1bdfa129"},{url:"photo/data/1.jpg",revision:"38b17ff7e4bdcfb8a28d0d8f1bdfa129"},{url:"photo/data/2.jpg",revision:"38b17ff7e4bdcfb8a28d0d8f1bdfa129"},{url:"photo/data/3.jpg",revision:"38b17ff7e4bdcfb8a28d0d8f1bdfa129"},{url:"photo/data/4.jpg",revision:"38b17ff7e4bdcfb8a28d0d8f1bdfa129"},{url:"photo/data/5.jpg",revision:"38b17ff7e4bdcfb8a28d0d8f1bdfa129"},{url:"photo/img/nav-40.png",revision:"b2e9cca6b2ce4faba6bccc45c84fe288"},{url:"photo/img/next-40.png",revision:"3e7496c92d4215186a18c0cbadf77709"},{url:"photo/img/next-60.png",revision:"19d2a7365ff0b4d5162e3233cab8deb7"},{url:"photo/img/raster.png",revision:"3ccb89d999c6ba1e8d45178ddd509578"},{url:"photo/img/square.png",revision:"ffc089b58246139987e2bf2629fc2b5e"},{url:"photo/img/strip.png",revision:"7e290e5b729298f122306a33c2ab8629"},{url:"photo/index.html",revision:"3b6534f67dbea7c92e9c5d9797e31ecd"},{url:"photo/js/bootstrap.min123.js",revision:"be1c5898c4332c8e7f9906011e005bb0"},{url:"photo/js/jquery-ui.min123.js",revision:"74b53f6c3b7ef724b0c8e8f484a71d8e"},{url:"photo/js/jquery.min123.js",revision:"25721ced154b3a99e818431446d7506d"},{url:"photo/js/juicyslider-min.js",revision:"880ad67c22b54a1960d848ecd1cfb90c"},{url:"photo/js/juicyslider.js",revision:"cd9482fa55257ba24bff9aa812779063"},{url:"Projects/index.html",revision:"9d8ee8c0b688973ce8ef1c9881095cab"},{url:"tags/HEXO/index.html",revision:"20d169ccd91c34b9508554ef67fccb1c"},{url:"tags/信息安全/index.html",revision:"c7de6a62ebfc3daa9811ef4224cc630b"},{url:"tags/大数据/index.html",revision:"ab5d0d6ae96535bd0edf9bb8262713c2"},{url:"tags/心理学/index.html",revision:"44b4d26922b8ac527184c9a462771e97"},{url:"tags/思想实验/index.html",revision:"ae58eb17ed3d376878da8ab20c86588c"},{url:"tags/知识科普/index.html",revision:"72d497ca0f5c9599bbe1af7094aafbc4"},{url:"tags/科学幻想/index.html",revision:"1e653d0b93a9d8d833fb7f6d38e4de0e"},{url:"tags/科技杂谈/index.html",revision:"603a7a4b0a964896476ca708d4103d90"},{url:"tags/网络安全/index.html",revision:"0f640d0b3ef035fbf1b832dcc51fe054"},{url:"tags/网络安全/page/2/index.html",revision:"054d553c428d1c2a206747c4e0bbd834"},{url:"tags/网络安全/page/3/index.html",revision:"bb4a69f11945cb6046461f957a965538"},{url:"tags/闲言碎语/index.html",revision:"23057cdeea046b3e26522d6f96644121"},{url:"undefined.html",revision:"a8f21f742043b877b536ff4c1c6cfd09"}],{})}));
//# sourceMappingURL=service-worker.js.map
