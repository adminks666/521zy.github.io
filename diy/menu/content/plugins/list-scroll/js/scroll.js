//就业薪资自动滚动
function autoScroll(obj) {
    $(obj).find("#pay").animate({
        marginTop: "-45px"
    }, 800, function() {
        $(this).css({ marginTop: "0px" }).find("li:first").appendTo(this);
    });
    //    学员评价截图滚动
    $(obj).find("#shot").animate({
        marginLeft: "-251px"
    }, 1500, function() {
        $(this).css({ marginLeft: "0px" }).find("li:first").appendTo(this);
    })
}

function updateMsg() {
    var f_id = $('#pay li:eq(1)');
    var name = f_id.find(".student-name").text();
    var c_n = f_id.find(".company-name").text();
    var dig = f_id.find("span").text();

    $(".figure").find("span").text("￥" + dig);
    $(".nm-company").find(".name").text(name);
    $(".nm-company").find(".company").text(c_n);
}




$(function() {
    setInterval('updateMsg()', 3000);
    setInterval('autoScroll(".information")', 3000);
    setInterval('autoScroll(".screenshot")', 6000);
});