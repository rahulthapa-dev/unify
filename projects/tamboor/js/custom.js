$(document).ready(function() {
    $('.slick-features').slick({
        slidesToShow: 4,
        infinite: false
    });
    // 
    $('.slick-diaper-detail').slick({
        slidesToShow: 4,
        // infinite: false
    });
    //
    $('.slick-product-carousal').slick({
        slidesToShow: 4,
        infinite: false
    });
    $('.product-box-carousal').slick({
        slidesToShow: 1,
        infinite: false
    });
    $('.slick-testimonial').slick({
        slidesToShow: 1,
        infinite: false
    })
    $('.slick-green-detail').slick({
        slidesToShow: 4,
        // infinite: false
    });
    // green.html
    $('.happy-slick').slick({
        slidesToShow: 1,
        // infinite: false
    });
    $('.slick-magical').slick({
        slidesToShow: 1,
        // infinite: false
    });
    //
    $('.product-box-select').on('click', function() {
        $('.product-box-select').removeClass('active');
        $(this).addClass('active');

        // var divSelect = $(this).attr('data-info-div')
        // $(divSelect).removeClass('d-none')
    })
});