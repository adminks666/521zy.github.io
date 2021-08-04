$(function() {

    // 登录窗口差号显示控制 end

    // footer位置调整函数使用说明：
    // 如果文档高度小于浏览器窗口高度时，让footer居于最下方；当屏幕小于1220时，任何情况下都不添加position:fixed样式，防止滚动条对footer不起作用。
    // 如果页面中有点击按钮向页面中添加数据的情况，在加载数据完毕之后，也要执行一下footerfixed();此函数，来调整footer的位置。
    // 1220是主题内容宽度
    footerfixed()
    $(window).resize(function() {
        footerfixed();
    })

    function footerfixed() {
        $('#footer').css('position', 'static')
        var bodyheitht = $(document.body).height()
        var windowheight = $(window).height()
        var windowwidth = $(window).width()
        if (bodyheitht < windowheight) {
            if (windowwidth >= 1220) {
                $('#footer').css({
                    'position': 'fixed',
                    'bottom': 0,
                    'width': '100%'
                })
            } else {
                $('#footer').css({
                    'position': 'fixed',
                    'bottom': 0,
                    'width': '1220px'
                })
            }
        } else {
            if (windowwidth >= 1220) {
                $('#footer').css({
                    'position': 'static',
                    'bottom': 'atuo',
                    'width': '100%'
                })
            } else {
                $('#footer').css({
                    'position': 'static',
                    'bottom': 'auto',
                    'width': '1220px'
                })
            }
        }
    }
})