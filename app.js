$(function() {
  
  var header = $("#header"),
      introH = $("#intro").innerHeight(),
      scrollOffset = $(window).scrollTop();
  
  // fixed header
  checkScroll(scrollOffset);

  $(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);

  });

  function checkScroll() {
    

    if(scrollOffset > introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

// smooth scroll
$("[data-scroll]").on("click", function(event) {
  event.preventDefault();

  var $this = $(this),
      blockId = $this.data("scroll"), 
      blockOffset;

  blockOffset = $(blockId).offset().top;

  $("nav a").removeClass("active");
  $this.addClass("active");


  $("html, body").animate({
    scrollTop: blockOffset
  }, 500);
});


// nav toggle
$("#nav__toggle").on("click", function(event) {
  event.preventDefault();

  $(this).toggleClass("active")
  $("#nav").toggleClass("active")
});


// wedo accordion
$("[data-collapse]").on("click", function(event) {
  event.preventDefault();

  var $this = $(this),
      blockId = $this.data("collapse");

  $(this).toggleClass("active");
  

});


// slider
$("[data-slider]").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
});

});