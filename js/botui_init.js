function botui_init() {
  var botui = new BotUI("hello-akilar");
  botui.message.add({
    delay: 800,
    content: "Hi, 欢迎光临海客GO"
  }).then(function() {
    botui.message.add({
      delay: 1100,
      content: "我是店长xwcker"
    }).then(function() {
      botui.message.add({
        delay: 1100,
        content: "你也可以叫我海客😋"
      }).then(function() {
        botui.action.button({
          delay: 1600,
          action: [{
            text: "我想知道更多关于海客GO!😃",
            value: "sure"
          }, {
            text: "好的，就这样吧，拜拜！🙄",
            value: "skip"
          }]
        }).then(function(a) {
          "sure" == a.value && sure();
          "skip" == a.value && end()
        })
      })
    })
  });
  var sure = function() {
      botui.message.add({
        delay: 600,
        content: "🎉🎉🎉🎉🎉🎉"
      }).then(function() {
        secondpart()
      })
    },
    end = function() {
      botui.message.add({
        delay: 600,
        content: "w(ﾟДﾟ)w 不要走！再看看嘛！"
      })
    },
    secondpart = function() {
      botui.message.add({
        delay: 5000,
        content: "首先呢，很感谢您肯在这里驻足片刻❤️。海客GO是一个个人性质的博客，我会在这里发表各种各样的内容。"
      }).then(function() {
        botui.message.add({
          delay: 15000,
          content: "起这个名字是因为想到了海客，指徒步旅行者。一般指有自主创业意念，有户外徒步旅行，自驾游等户外活动精神享受爱好的青年一族吧。海客也指跨越不同文化，体验全球化生活方式，拥有国际触觉、爱好新鲜事物，讲求生活品质、充满生活热情的人群。"
        }).then(function() {
          botui.message.add({
            delay: 5000,
            content: "分类也有一点我的恶趣味在。👀"
          }).then(function() {
            botui.message.add({
              delay: 8000,
              content: "比如是HEXO的教程，网络安全的教程，信息安全胡教程啦！🎉"
            }).then(function() {
              botui.message.add({
                delay: 5000,
                content: "QQ空间是个人日记哦，流水账一样的，不要看，很羞耻的。😶"
              }).then(function() {
                botui.message.add({
                  delay: 4000,
                  content: "我个人最推荐的是网络安全版块哦，这里可都是我引以为豪的作品呢💝！帮助人们识别网络攻击方式已经如何防守。👻"
                }).then(function() {
                  botui.action.button({
                    delay: 1100,
                    action: [{
                      text: "为什么叫海客GO呢？🤔",
                      value: "因为喜欢这个海客其中内含的故事与含义"
                    }]
                  }).then(function(a) {
                    thirdpart()
                  })
                })
              })
            })
          })
        })
      })
    },
    thirdpart = function() {
      botui.message.add({
        delay: 1e3,
        content: "诶？海客GO是我的别名啊😏，海客GO，emm🤔，海客，指徒步旅行者。一般指有自主创业意念，有户外徒步旅行，自驾游等户外活动精神享受爱好的青年一族吧。"
      }).then(function() {
        botui.action.button({
          delay: 1500,
          action: [{
            text: "😲，那英文名为什么叫xwcker呢？",
            value: "why-cat"
          }]
        }).then(function(a) {
          fourthpart()
        })
      })
    },
    fourthpart = function() {
      botui.message.add({
        delay: 3000,
        content: " "
      }).then(function() {
        botui.message.add({
          delay: 3000,
          content: "灵感来自yxcker大佬胡中国黑客部"
        }).then(function() {
          botui.action.button({
            delay: 1500,
            action: [{
              text: "方便透露一下真名吗？👀",
              value: "why-domain"
            }]
          }).then(function(a) {
            fifthpart()
          })
        })
      })
    },
    fifthpart = function() {
      botui.message.add({
        delay: 5000,
        content: "emmmm,还是叫我xwcker吧"
      }).then(function() {
        botui.message.add({
          delay: 3000,
          content: "一名网络安全爱好者而已^_^"
        })
      })
    }
}
