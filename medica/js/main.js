$(document).ready(function () {
    $('.main__info').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/slider-arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/slider-arrow-right.svg" alt=""></button>',
        autoplay: true,
        autoplaySpeed: 8000,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                  arrows: false,
                  prevArrow: false,
                  nextArrow: false
                }
              },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false
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
});