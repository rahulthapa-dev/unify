$(document).ready(function() {
    $('.slick-features').slick({
        slidesToShow: 4,
        infinite: false,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  autoplay: true,
                autoplaySpeed: 3000,
                }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  autoplay: true,
                autoplaySpeed: 3000,
                }
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                autoplaySpeed: 3000,
                }
            }
        ]
    });
    // 
    $('.slick-diaper-detail').slick({
        slidesToShow: 4,
        // infinite: false
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  
                }
              },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                
              }
            },
        ]
    });
    //
    $('.slick-product-carousal').slick({
        slidesToShow: 4,
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  
                }
              },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                
              }
            },
            {
                breakpoint: 400,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  
                }
              },
        ]
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
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  
                }
              },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                
              }
            },
        ]
    });
    $('.config-slick').slick({
        slidesToShow: 1,
        dots: true,
        arrows: true,
        adaptiveHeight: true,
        prevArrow: '<div class="slide-arrow prev-arrow">< Précedent</div>',
        nextArrow: '<div class="slide-arrow next-arrow">Suivant</div>'
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
        $(this).addClass('active').siblings().removeClass('active');;
        
        $("div[id=" + $(this).attr("data-info-div") + "]").addClass("show").siblings().removeClass('show');;
        // $(divSelect).removeClass('d-none')

    })

    
});