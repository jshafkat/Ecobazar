$(document).ready(function () {

    /* =========================================
       VERTICAL PRODUCT THUMBNAIL SLIDER
    ========================================= */

    $('.product-thumbnails').slick({

        vertical: true,

        verticalSwiping: true,

        slidesToShow: 4,

        slidesToScroll: 1,

        infinite: false,

        arrows: true,

        prevArrow: $('.slider-arrow slider-prev'),

        nextArrow: $('.slider-slider-arrow slider-next'),

        focusOnSelect: true,

        speed: 300,

        responsive: [

            {
                breakpoint: 768,

                settings: {

                    slidesToShow: 4,

                    vertical: true,

                    verticalSwiping: true

                }

            }

        ]

    });



    /* =========================================
       CHANGE MAIN PRODUCT IMAGE
    ========================================= */

    $('.product-thumbnails').on(
        'afterChange',
        function (event, slick, currentSlide) {

            var currentImage =
                $('.product-thumbnails')
                .find('.slick-current img')
                .attr('src');


            $('#mainProductImage').attr(
                'src',
                currentImage
            );

        }
    );



    /* =========================================
       CLICK THUMBNAIL
    ========================================= */

    $('.product-thumbnails').on(
        'click',
        '.thumbnail',
        function () {

            var image =
                $(this)
                .find('img')
                .attr('src');


            $('#mainProductImage').attr(
                'src',
                image
            );

        }
    );



    /* =========================================
       QUANTITY
    ========================================= */

    var quantity = 5;


    $('#plus').click(function () {

        quantity++;

        $('#quantity').text(quantity);

    });


    $('#minus').click(function () {

        if (quantity > 1) {

            quantity--;

            $('#quantity').text(quantity);

        }

    });
    //* ZOOM EFFECT 
 $(".example").imagezoomsl();

});