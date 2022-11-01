new Swiper('.slider-event', {
  navigation: {
    nextEl: ".section-event__btn-next",
    prevEl: ".section-event__btn-prev"
  },
  
  pagination: {
    el: '.section-event__pagination',
    clickable: true,
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
      slidesPerView: 1,
      slidesPerGroup: 2,
      spaceBetween: 20,
    },

    695: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },

    992: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,
    },

    1300: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 35,
    },

    1350: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 50,
    },
  }, 
})

