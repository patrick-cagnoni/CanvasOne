$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', onClick);

});

function onScroll(event){

    var scrollPos = $(document).scrollTop();
    var width = $(window).width();

    $('.header__links a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.header__link').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });

    //Header text fading effect
    var headerText = $(".header__text");
    var headerHeight = $('header').outerHeight();
    var scrollTop = $(window).scrollTop();
    var opacity = 1 -  scrollTop / (headerHeight / 3);

    if(width > 1200)
        headerText.css({transform:"translateY(" + (scrollPos / 1.4) + "px)", opacity: opacity});

    if (scrollPos >= $(".testimonials").scrollTop()) {
        var width = $(window).width();

        if(width > 768)
            $(".testimonials").css({"background-position": "0px " + (scrollPos / 4) + "px"})
    }

    //gotoTop button
    if(scrollPos >= 320)
        $("#goToTop").css("opacity", 1);
    else
        $("#goToTop").css("opacity", 0);

    //Navbar opacity
    var offset = $('header').outerHeight() / 4;
    var navbar = $('.header__navbar');
    
    if(width > 992){

        if(scrollTop > offset)
            navbar.css({ 'background-color' : 'rgba(255,255,255,1)', 'border': '1px solid #f5f5f5'});
        
        else
            navbar.css({ 'background-color' : 'rgba(255,255,255,0)', 'border': 0});
    
    }

    else 
        navbar.css({ 'background-color' : 'rgba(255,255,255,1)', 'border': '1px solid #f5f5f5'});
}

function onClick(e){
    e.preventDefault();
    
    $(document).off("scroll");
    
    $('a').each(function () {
        $(this).removeClass('active');
    })
    $(this).addClass('active');
    
    var target = this.hash;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top+2
    }, 500, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
    });
}