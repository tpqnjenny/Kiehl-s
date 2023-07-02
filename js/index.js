$(function(){
  // Menu
  $(".menubar>li>img").click(function(){
    $("#menu").stop().animate({"left" : 0}, 800);
  });
  $(".close>a>img").click(function(){
    $("#menu").stop().animate({"left" : "-100%"}, 800);
  });
  $(".sub").stop().hide();
  $(".main>li>a").click(function(){
    const submenu = $(this).next(".sub");
    if(submenu.is(":visible")){
      submenu.stop().slideUp(500);
      $(".main>li>a").children("img").css("rotate", "none");
    } else{
      submenu.slideDown(500);
      $(this).children("img").css("rotate", "180deg");
    }
  });

  // Main Banner SLICK
  $(".mbanner").slick({
    slide: "li",
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    pauseOnHover: true,
    dots: false,
  });

  // gotop
  $(".gotop").click(function(){
    $("html, body").animate({scrollTop: 0}, "slow");
    return false;
  });
});