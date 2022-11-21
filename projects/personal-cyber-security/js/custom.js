$('.responsive').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
        }
        },
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
            autoplay: true, /* this is the new line */
            autoplaySpeed: 2000,
            infinite: true,
            touchThreshold: 1000,
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
            autoplay: true, /* this is the new line */
            autoplaySpeed: 3000,
            infinite: true,
            touchThreshold: 1000,
        }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
    });
    $('.responsive2').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    autoplay: true, /* this is the new line */
    autoplaySpeed: 3000,
    touchThreshold: 1000,
    arrows: true,
    responsive: [
        {
        breakpoint: 991,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
        },
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 540,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
    });


    // The function actually applying the offset
    function offsetAnchor() {
    if (location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 180);
    }
    }
    function getVisible() {    
        var $el = $('#notification'),
            scrollTop = $(this).scrollTop(),
            scrollBot = scrollTop + $(this).height(),
            elTop = $el.offset().top,
            elBottom = elTop + $el.outerHeight(),
            visibleTop = elTop < scrollTop ? scrollTop : elTop,
            visibleBottom = elBottom > scrollBot ? scrollBot : elBottom;
        // $('#notification').text(visibleBottom - visibleTop);
        $('#notification').hide();
        console.log(visibleTop)
        if(visibleTop > 768) {
            $('#notification').show();
        }
    }

    $(window).on('scroll resize', getVisible);

    $('.contact-sect form .phone-wrap svg').click(function() {
        $('.contact-sect form .phone-wrap .phone-select ul').slideToggle(300)
    });
    $('.contact-sect form .phone-wrap .phone-select ul li').click(function() {
        $('.cuurentVal').text($(this).text().slice(0,3))
        $('.contact-sect form .phone-wrap .phone').val($(this).text().slice(3))
        $('.contact-sect form .phone-wrap .numbvalue').val($(this).text().slice(3))
        $('.contact-sect form .phone-wrap .phone-select ul').slideToggle(300)
    });
    $('form button').click(function() {
        $('.numbvalue').val($('.cuurentVal').text() + $('form .phone').text())
    });
    $('.phone').focus(function() {
        $('.phone').val($('.contact-sect form .phone-wrap .numbvalue').val() + ' ')
    });

    $('#notification').click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });

    $(".nav-main a").click(function () {
        var deduction = 120;
        var widnowWidth = window.innerWidth;
        if(widnowWidth < 1300){
            deduction = 100;
        } 
        var elementClick = $(this).attr("href");
        if (elementClick) {
            var destination = $(elementClick).offset().top - deduction;
        }
    
        $('html, body').animate({ scrollTop: destination }, 600); //1100 - ÑÐºÐ¾Ñ€Ð¾ÑÑ‚ÑŒ

    });
