new SimpleBar(document.querySelector(".dropdown-list"), {
    autoHide: false,
    scrollbarMaxSize: 28,
  });

  document.querySelectorAll(".dropdown-list").forEach(item => {
    new SimpleBar(item, {
    autoHide: false,
    scrollbarMaxSize: 28,
  });
  })