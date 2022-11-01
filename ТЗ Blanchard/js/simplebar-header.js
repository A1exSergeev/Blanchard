new SimpleBar(document.querySelector(".header__nav-list"), {
    autoHide: false,
    scrollbarMaxSize: 28,
  });

  document.querySelectorAll(".header__nav-list").forEach(item => {
    new SimpleBar(item, {
    autoHide: false,
    scrollbarMaxSize: 28,
  });
  })