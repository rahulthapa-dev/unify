$(document).ready(function () {
    setTimeout(() => {
        AOS.init();
    }, 120);

    // Intro slider
    $(".intro-slider").owlCarousel({
        margin: 15,
        nav: false,
        autoplayHoverPause: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                dotsContainer: '.carousel-custom-dots',
                items: 1,
            },
            1000: {
                items: 1
            }
        }
    });
    $('.owl-dot').click(function () {
        owl.trigger('to.owl.carousel', [$(this).index(), 300]);
    });
    var owl;
    owl = $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplaySpeed: 600,
        nav: false,
        navText: ["<", ">"],
        dots: false,
        items: 1
    });
    $('.carousel-custom-dots').on('click', 'li', function (e) {
        owl.trigger('to.owl.carousel', [$(this).index(), 300]);
    });

    // Mobile slider
    $('.mobile-features-carousel, .mobile-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // Range slider
    $("#ex8").slider({
        tooltip: "always"
    })
});