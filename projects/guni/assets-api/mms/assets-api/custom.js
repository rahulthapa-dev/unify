$(function() {
    $('.slider-thumb').slick({
        autoplay: false,
        vertical: true,
        infinite: true,
        verticalSwiping: true,
        slidesPerRow: 6,
        slidesToShow: 6,
        asNavFor: '.slider-preview',
        focusOnSelect: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-up"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-down"></i></button>',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    vertical: false,
                    slidesPerRow: 1,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    vertical: false,
                    slidesPerRow: 1,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    vertical: false,
                    slidesPerRow: 1,
                    slidesToShow: 1,
                }
            },
        ]
    });
    $('.slider-preview').slick({
        autoplay: false,
        vertical: true,
        infinite: true,
        slidesPerRow: 1,
        slidesToShow: 1,
        asNavFor: '.slider-thumb',
        arrows: false,
        draggable: false,
        responsive: [{
            breakpoint: 1200,
            settings: {
                vertical: false,
                fade: true,
            }
        }, ]
    });
    $('.carousel-sms').slick({
        infinite: true,
        slidesToShow: 3, // Shows a three slides at a time
        slidesToScroll: 3, // When you click an arrow, it scrolls 1 slide at a time
        arrows: true, // Adds arrows to sides of slider
        dots: false, // Adds the dots on the bottom
        responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.carousel-cases-solution').slick({
        infinite: true,
        slidesToShow: 1, // Shows a three slides at a time
        slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
        arrows: true, // Adds arrows to sides of slider
        dots: false // Adds the dots on the bottom
    });
    $('.carousel-message-medium').slick({
        infinite: true,
        slidesToShow: 1, // Shows a three slides at a time
        slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
        arrows: true, // Adds arrows to sides of slider
        dots: false, // Adds the dots on the bottom
        responsive: [{
            breakpoint: 600,
            settings: {
                adaptiveHeight: true,
            }
        }]
    });
    $('.carousel-diff-industries').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6, // When you click an arrow, it scrolls 1 slide at a time
        arrows: true, // Adds arrows to sides of slider
        dots: false, // Adds the dots on the bottom
        responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.carousel-mms-messaging').slick({
        infinite: true,
        slidesToShow: 3, // Shows a three slides at a time
        slidesToScroll: 3, // When you click an arrow, it scrolls 1 slide at a time
        arrows: true, // Adds arrows to sides of slider
        dots: false, // Adds the dots on the bottom
        responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});