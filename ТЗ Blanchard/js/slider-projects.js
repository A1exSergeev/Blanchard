new Swiper('.slider-projects', {
  navigation: {
    nextEl: ".section-projects__btn-next",
    prevEl: ".section-projects__btn-prev"
  },
  
  pagination: {
    el: '.slider-projects__pagination',
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
      spaceBetween: 15,
    },

    700: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },

    1200: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 80,
    },

    1300: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    },

    1600: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  }, 
})

