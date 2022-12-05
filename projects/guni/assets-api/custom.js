switchSections = [
    {"title": "Who we are?", "description": "We are Guni, a software company based in paramatta, Australia, who strives to provide businesses with tools that would help in better engagement and growth.", "image": "assets-api/img/about/about-1.png"},
    {"title": "What do we do?", "description": "We aim to improve upon the means of communication for businesses all across the world by leveraging technology.", "image": "https://images.unsplash.com/photo-1550795598-717619d32900?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=736&q=80"},
    {"title": "How do we do it?", "description": "Our messaging platform helps businesses in engaging with their key stakeholders through an omnichannel approach. With engagement tools such as SMS, MMS, Landing Pages, Email and Vice-Versa and Chatbots, your business could deliver the right message, on the right set of channels, at the right moment.", "image": "https://images.unsplash.com/photo-1550133804-0d34e3130759?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"},
];
let aboutActiveTitleEle = $("p#about-active-title");
let aboutActiveImgEle = $("img#about-active-img");
let aboutActiveDescEle = $("p#about-active-desc");
let defaultAbout = switchSections[0];

const switchAboutContent = function(thisEle, replaceObj, defaultObj) {
    aboutActiveTitleEle.html(replaceObj.title);
    aboutActiveImgEle.attr("src", replaceObj.image);
    aboutActiveDescEle.html(replaceObj.description);

    thisEle.find("div.feature-about-head > p").html(defaultObj.title)
    thisEle.find("div.feature-about-body > p").html(defaultObj.description);
}

$(function() {
    $(".about-default").hover(function() {
        let switchSectionIndex = $(this).data('index') || 0;
        let activeAbout = switchSections[switchSectionIndex];
        switchAboutContent($(this), activeAbout, defaultAbout);
    }, function() {
        let switchSectionIndex = $(this).data('index') || 0;
        let activeAbout = switchSections[switchSectionIndex];
        switchAboutContent($(this), defaultAbout, activeAbout);
    });

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
    $('.carousel-value').slick({
        infinite: true,
        slidesToShow: 4, // Shows a three slides at a time
        slidesToScroll: 4, // When you click an arrow, it scrolls 1 slide at a time
        arrows: true, // Adds arrows to sides of slider
        dots: false, // Adds the dots on the bottom
        responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});