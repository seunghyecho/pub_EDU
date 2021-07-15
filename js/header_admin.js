$(document).ready(function () {
    // 모바일 메뉴팝업
    var mobileMenu = $("header.header_admin .menu");
    var mobileGnb = $(".modal.mobileGnb");
    var modalClose = $(".modal .closeBtn");

    $(mobileMenu).on("click", function () {
      $(mobileGnb).addClass("on");
    });
    // $(modalClose).on("click", function () {
    //   $(mobileGnb).removeClass("on");
    // });
    // 모바일 메뉴 list 선택
    var gnb = $('.gnb > ul > li');
    var subGnb = $('.sub_gnb');
    $(gnb).on('click', function(){
      $(this).next('.sub_gnb').toggle();
    });

  });