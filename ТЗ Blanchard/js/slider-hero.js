const container = document.querySelector(".container")
    const swiper = new Swiper('.slider-hero', {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 5000,
        autoplay: {
        delay: 2000
      },
        effect: "fade",
        allowTouchMove: false,
        navigation: {
        nextEl: "",
        prevEl: ""
      },
        pagination: {
        el: '.swiper-bullet-pagination',
        type: 'bullets',
        clickable: true
      }
    })