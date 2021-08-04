function fly_to_top() {
  btf.scrollToDest(0, 500);
}
window.addEventListener("scroll", function (event) {
  var scrollTop =
    document.documentElement.scrollTop ||
    window.pageYOffset ||
    document.body.scrollTop;
  if (scrollTop > 56) {
    document
      .getElementById("doraemon_to_top")
      .classList.add("doraemon_fixed");
  } else {
    document
      .getElementById("doraemon_to_top")
      .classList.remove("doraemon_fixed");
  }
});