$(document).ready(function () {
  var headerOffset = $("#headerFix").offset();

  $(window).scroll(function () {
    if (window.outerWidth >= 599) {
      var docScrollY = $(document).scrollTop();
      // console.log(headerFix, docScrollY);

      var headerFix = $("#headerFix");
      var headerNext = $("#headerNext");

      if (docScrollY > headerOffset.top) {
        headerFix.addClass("header_top_fix");
        headerNext.addClass("pd_top_92");
      } else {
        headerFix.removeClass("header_top_fix");
        headerNext.removeClass("pd_top_92");
      }
    }
  });

  var mobileMenu = $("header.mobile .menu");
  var mobileGnb = $(".modal.mobileGnb");
  var modalClose = $(".modal .closeBtn");

  $(mobileMenu).on("click", function () {
    $(mobileGnb).addClass("on");
  });
  $(modalClose).on("click", function () {
    $(mobileGnb).removeClass("on");
  });
});
