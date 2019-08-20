/*
$(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
        $(".navbar").addClass('fixed-top');
        $("#navbarToggler ul li a").css({"color":"black","text-shadow":"none"});
        $(".navbar").css("background-color","rgba(255,255,255,1)");
        $(".navbar").css("box-shadow","0 0.5rem 1rem rgba(0,0,0,.15)");
    } else {
        $(".navbar").removeClass('fixed-top');
        $("#navbarToggler ul li a").css('color','white');
        $(".navbar").css("background-color","rgba(255,255,255,0)");
        $(".navbar").css("box-shadow","none");
    }
});

*/

// progress bar
$(".progress-element").each(function() {
    $(this).waypoint(function() {
        var progressBar = $(".progress-bar");
        progressBar.each(function(){
            $(this).delay(100).animate({
                width: $(this).attr('aria-valuenow') + '%'
            }, 100);
        });
    }, {
        triggerOnce: true,
    });
});
// progress bar end

//scrollreveal
window.scrollReveal = new scrollReveal();

//menu js
(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 72)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 75
    });

    // Collapse Navbar
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-scrolled");
        } else {
            $("#mainNav").removeClass("navbar-scrolled");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);


})(jQuery); // End of use strict

