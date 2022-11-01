document.querySelector(".search__btn-open").addEventListener("click", function() {
    document.querySelector(".search").classList.add("active");
    document.querySelector(".search-form").classList.add("search-form__active");
    document.querySelector(".search__btn-close").classList.add("active");
    document.querySelector(".header__btn-open").classList.add("invisible");
    this.classList.add("active");
  })

  document.querySelector(".search__btn-close").addEventListener("click", function() {
    document.querySelector(".search").classList.remove("active");
    document.querySelector(".search-form").classList.remove("search-form__active");
    document.querySelector(".search__btn-open").classList.remove("active");
    document.querySelector(".search__btn-close").classList.remove("active");
    document.querySelector(".header__btn-open").classList.remove("invisible");
})
