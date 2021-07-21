var flag=false,winH,winW,len,tt;

function init( event) {
    setTimeout(function(){
        $("#loading").animate({top:-winH},600);
        //addImg();
        setTimeout(function(){
            arrow();
        },600);
    },600);
};

window.onload=function(){
    winH=$(window).height();
    winW=$(window).width();
    init();
}

function arrow(){
    $("img.stop").attr("class","arrow");
    $("img.arrow").addClass("cur").show();
}
function left(){
    $("img.stop").attr("class","left");
    $("img.left").addClass("cur").show();
}


$('.m_nav span').click(function(){
    var i = $(this).closest('.section').index();
    $(".section").eq(i).find($(".m_nav span")).eq($(this).index()).addClass("cur").siblings().removeClass('cur');
    $(".section").eq(i).find($(".m_tab_main div")).eq($(this).index()).show().siblings().hide();
});

$(window).load(
    $('#fullpage').fullpage({
    anchors: ["a","b","c","d","e","f"],
    menu:"#nav",
    slidesNavigation:true,
    navigation: true,
    navigationPosition: 'right',
    onLeave: function(index, nextIndex, direction){
        var leavingSection = $(this);
        if(index && nextIndex==1){
            $("#main-title").addClass("myfirst");
            $("#nav").removeClass("active");
            $(".turnPage .up").hide();
            $(".turnPage .down").show();
        }else if(index && nextIndex==6){
            $("#main-title").removeClass("myfirst");
            $("#nav").removeClass("active");
            $(".turnPage .up").show();
            $(".turnPage .down").hide();
        }else{
            $("#main-title").removeClass("myfirst");
            $("#nav").addClass("active");
            $(".turnPage .up").show();
            $(".turnPage .down").show();
        }

    }
}));

//漂浮物
$('#large-header').parallax();
$('.decorations').parallax();