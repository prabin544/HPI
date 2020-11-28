(function($) {
"use strict";
    
    $(window).on('load',function(){
        /*-------------------------------------------
        0.loader
        --------------------------------------------- */
        $('#loader_wrpper').delay(500).fadeOut();
    });
    $(document).ready(function() {
        /*-------------------------------------------
        01.js wow
        --------------------------------------------- */
        new WOW().init();

        /*-------------------------------------------
        02.hero-slide
        --------------------------------------------- */
        $(".hero-slide").owlCarousel({
            smartSpeed: 1000,
            loop: true,
            margin:0,
            center: true,
            mouseDrag: true,
            touchDrag: true,
            nav: false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots: false,
            items: 1,
            autoplay:false,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:1,
                },
                1000:{
                    items:1,
                }
            }
        });
        /*-------------------------------------------
        03.categories-list
        --------------------------------------------- */
        $(".categories-list").owlCarousel({
            smartSpeed: 1000,
            loop: true,
            margin:10,
            center: true,
            mouseDrag: true,
            touchDrag: true,
            nav: false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots: false,
            items: 3,
            autoplay:false,
            responsiveClass:true,
            responsive:{
                0:{
                    items:3,
                },
                600:{
                    items:3,
                },
                1000:{
                    items:3,
                }
            }
        });
        /*-------------------------------------------
        04.doctor-slide
        --------------------------------------------- */
        // $(".doctor-slide").owlCarousel({
        //     smartSpeed: 1000,
        //     loop: true,
        //     margin:10,
        //     center: false,
        //     mouseDrag: true,
        //     touchDrag: true,
        //     nav: false,
        //     navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        //     dots: false,
        //     items: 1.5,
        //     autoplay:false,
        //     responsiveClass:true,
        //     responsive:{
        //         0:{
        //             items:1.5,
        //         },
        //         600:{
        //             items:3,
        //         },
        //         700:{
        //             items:3,
        //         },
        //         1000:{
        //             items:5,
        //         }
        //     }
        // });
         $(".doctor-slide").owlCarousel({
            smartSpeed: 1000,
            loop: true,
            margin:15,
            center: false,
            mouseDrag: true,
            touchDrag: true,
            nav: false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots: false,
            items: 1.5,
            autoplay:false,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1.5,
                },
                600:{
                    items:3,
                },
                1000:{
                    items:4,
                }
            }
        });
        /*-------------------------------------------
        05.doctor-slide
        --------------------------------------------- */
        $(".date-list").owlCarousel({
            smartSpeed: 1000,
            loop: true,
            margin:5,
            center: false,
            mouseDrag: true,
            touchDrag: true,
            nav: false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots: false,
            items: 6,
            autoplay:false,
            responsiveClass:true,
            responsive:{
                0:{
                    items:6,
                },
                600:{
                    items:6,
                },
                1000:{
                    items:6,
                }
            }
        });
        /*---------------------------------
        06.scroll_auto
        -----------------------------------*/
        if($(".scroll_auto").length) {
            $(".scroll_auto").mCustomScrollbar({
                setWidth: false,
                setHeight: false,
                setTop: 0,
                setLeft: 0,
                axis: "y",
                scrollbarPosition: "inside",
                scrollInertia: 950,
                autoDraggerLength: true,
                autoHideScrollbar: false,
                autoExpandScrollbar: false,
                alwaysShowScrollbar: 0,
                snapAmount: null,
                snapOffset: 0
            });
        };
        /*-------------------------------------------
        07.niceSelect
        --------------------------------------------- */
        $('select').niceSelect();
      /*-------------------------------------------
        08.niceSelect
       --------------------------------------------- */
        $(".open-search").click(function(){
            $(".search-box").toggleClass("show");
        });
    });
   

})(jQuery);