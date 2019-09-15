$(document).ready(function(){
  $('.slider').bxSlider({
    controls: false,
    auto: true,
    wrapperClass: "slider"
  });

  $('.carousel').bxSlider({
    adaptiveHeight: true,
    touchEnabled:   false,
    controls:       false,
    pager:          false,
    auto:           true,
    infiniteLoop:   true,
    autoHover:      false,
    minSlides:      2,
    maxSlides:      6,
    moveSlides:     1,
    slideWidth:     800,
    shrinkItems:    true,
    speed:          500
  });
  
});