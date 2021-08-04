$(function() {
    //banner轮播
    var swiper1 = new Swiper('.swiper', {
        pagination: '.swiper-pagination1',
        paginationClickable: true,
        spaceBetween: 0,
        grabCursor: true,
        loop: $(".swiper-wrapper0 > div").length > 1 ? true : false,
        autoplay: 5000,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoplayDisableOnInteraction: false
    });

    $(".swiper").mouseenter(function() {
        swiper1.stopAutoplay();
    }).mouseleave(function() {
        swiper1.startAutoplay();
    })

    //banner end

})