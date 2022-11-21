$('.feature').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
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
            slidesToShow: 6,
            slidesToScroll: 1
        }
        },
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 540,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
        }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
    });
    $('.trusted-by').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
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
                slidesToShow: 6,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 540,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.testimonial-slide').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
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
                slidesToShow: 1,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 540,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $(document).on('click', 'a[href^="#"]:not(".nav-link")', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 180
        }, 500);
    });
    $("#quick-navigation a").on('click', function(e){
        e.preventDefault();
        console.log('click');
        var dest = $(this).attr('href');   
        console.log('href: ' + dest);   
        $('html,body').animate({ scrollTop: $(dest).offset().top - 120 }, 'slow');
    })
    subMenuAnchor = $('.menu-item-has-children > a');
    subMenuAnchor.append('<span class="aib plus-icon"></span>');
    $('.sub-menu').hide();
    subMenuAnchor.click(function(e) {
    e.preventDefault();
    $(this).closest('li').find('.sub-menu').first().slideToggle(300);
    $(this).closest('a').toggleClass('submenu-active');
    });
    $('.page-nav .parent-p').on('click', function() {$('.page-nav .ul-application-child').fadeToggle("100");});

    var $container = $('.bola');
    var renderer = new THREE.WebGLRenderer({antialias: true});
    var camera = new THREE.PerspectiveCamera(80,1,0.1,10000);
    var scene = new THREE.Scene();

    scene.add(camera);
    renderer.setSize(300,300);
    $container.append(renderer.domElement);

    ///////////////////////////////////////////////

    // Camera
    camera.position.z = 200;

    // Material
    var pinkMat = new THREE.MeshPhongMaterial({
    color      :  new THREE.Color("rgb(241,99,52)"),
    emissive   :  new THREE.Color("rgb(218,54,0)"),
    specular   :  new THREE.Color("rgb(241,99,52)"),
    shininess  :  100,
    shading    :  THREE.FlatShading,
    transparent: 1,
    opacity    : 1
    });

    var L1 = new THREE.PointLight( 0xffffff, 1);
    L1.position.z = 100;
    L1.position.y = 100;
    L1.position.x = 100;
    scene.add(L1);

    var L2 = new THREE.PointLight( 0xffffff, 0.8);
    L2.position.z = 200;
    L2.position.y = 400;
    L2.position.x = -100;
    scene.add(L2);

    // IcoSphere -> THREE.IcosahedronGeometry(80, 1) 1-4
    var Ico = new THREE.Mesh(new THREE.IcosahedronGeometry(75,1), pinkMat);
    Ico.rotation.z = 0.5;
    scene.add(Ico);

    function update(){
    Ico.rotation.x+=2/100;
    Ico.rotation.y+=2/100;
    }

    // Render
    function render() {
    requestAnimationFrame(render);			
    renderer.render(scene, camera);	
    update();
    }

    render();
    