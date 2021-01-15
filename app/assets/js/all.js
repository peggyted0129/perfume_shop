console.log('Hello!');

// AOS 動畫
AOS.init({
  offset: 200, 
  delay: 0,
  duration: 1000, 
}); 

// RWD navbar 首頁
$(document).ready(function() {
  console.log('HesSchool Hello!');
    $(".navbar-toggler").on('click',(function(){
      $(".toggler-bar-top").toggleClass("toggler-bar-top-rotate");
      $(".toggler-bar-middle").toggleClass("d-none");
      $(".toggler-bar-bottom").toggleClass("toggler-bar-bottom-rotate");
    }))
})

// declare variable
var scrollTop = $(".scroll-top");

$(window).scroll(function() {
  var topPos = $(this).scrollTop();
  if (topPos > 100) {
    $(".scroll-top").css("opacity", "1");
  } else {
    $(".scroll-top").css("opacity", "0");
  }
}); // scroll END

//Click event to scroll to top
$(".scroll-top").click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;

}); // click() scroll top EMD

$(document).ready(function(){
  $(window).scroll (function() {
      if ($(window).scrollTop()>685) {
          $('#navbarShow').addClass('sticky-top');
      };
      if ($(window).scrollTop()<686) {
          $('#navbarShow').removeClass('sticky-top');
      };
  })
})

