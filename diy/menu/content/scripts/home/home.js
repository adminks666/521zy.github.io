$(document).ready(function() {
    $(window).scroll(function() {
        var h = $(this).scrollTop();
        console.log(h);

        if (h > 30) {
            $(".header-nav").addClass("fix")
                // $(".header .fix .nav-left").children().css({
                //     display: 'none'
                // })
            $(".header-nav .nav .nav-left").addClass("left-fix")
            $(".header-nav .nav .nav-right").addClass("right-fix")
            $(".header-nav .nav-left span.train").addClass("train1")
            $(".header-nav").css("line-height", "50px");
        } else {
            $(".header-nav").removeClass("fix")
            $(".header .nav-left").children().css({
                display: 'inline-block'
            })
            $(".header-nav .nav .nav-left").removeClass("left-fix")
            $(".header-nav .nav .nav-right").removeClass("right-fix")
            $(".header-nav .nav-left span.train").removeClass("train1")
            $(".header-nav").css("line-height", "80px");
        }

    })


    // 控制底部按钮渐变
    $(".slogan2 .slogan2-btn a .img").on("mouseover", function() {
        $(this).css({
            display: 'none'
        }).animate({
            opacity: 0
        });
        $(this).siblings().css({
            display: 'inline-block'
        }).animate({
            opacity: 1
        }, 500)
    });
    $(".slogan2 .slogan2-btn a .hover").on("mouseleave", function() {
        $(this).css({
            display: 'none'
        }).animate({
            opacity: 0
        });
        $(this).siblings().css({
            display: 'inline-block'
        }).animate({
            opacity: 1
        }, 500)
    });

})