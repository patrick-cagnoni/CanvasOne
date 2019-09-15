$( document ).ready(function() {

    //Active link
    $(".menu-trigger").click(function() {
        $(".header__links").toggleClass("menu-active")
    })

    //Team member css
    $(".team__member").hover(
        function(){
            $(this).children(".team__image").css("opacity", "0.4");
            $(this).children(".social-icons").css("opacity", "1");
        },
        function () {
            $(this).children(".team__image").css("opacity", "1")
            $(this).children(".social-icons").css("opacity", "0");
        }
    )

    //Social icons animation
    $('.social-icon').hover(
        function(){
            $(this).children().css("transform","translateY(-30px)")
        },
        function(){
            $(this).children().css("transform","translateY(0px)")
        }
    )
});
