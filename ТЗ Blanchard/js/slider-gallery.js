new Swiper('.slider-gallery', {
    navigation: {
      nextEl: ".slider-gallery__btn-next",
      prevEl: ".slider-gallery__btn-prev"
    },
    pagination: {
      el: '.slider-gallery__pagination',
      type: 'fraction',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    speed: 800,
    breakpoints: {

      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },

      481: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      },

      767: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 38,
      },

      992: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 36,
      },

      1300: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },
    },
  })