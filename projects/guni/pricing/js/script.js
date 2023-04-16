jQuery(function(){
    $(".slider").owlCarousel({
        loop:!0,
        margin:10,
        nav:!0,
        autoHeight:!0,
        autoplay:!0,
        autoplayTimeout:3e3,
        autoplayHoverPause:!0,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    // $(".value-owl-carousel").owlCarousel({
    //     loop:false,
    //     margin:10,
    //     nav:true,
    //     autoWeight: true,
    //     autoHeight:true,
    //     autoplay:false,
    //     autoplayTimeout:3e3,
    //     autoplayHoverPause:!0,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:1
    //         },
    //         1000:{
    //             items:1
    //         }
    //     }
    // });

    $('.mobile-features-carousel, .mobile-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    
    $("#ex8").slider({tooltip:"always"})});