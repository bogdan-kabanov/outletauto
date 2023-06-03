const searchHeader = document.querySelector("#header-search");
window.addEventListener("resize", function () {
  searchHeader.setAttribute(
    "placeholder",
    this.innerWidth >= 768 ? "Поиск по артикулу или VIN коду" : "Артикул"
  );
});
window.dispatchEvent(new Event("resize"));

// Анимация стрелочки на лицевом блоке сайта
const fixedArrow = document.querySelectorAll(".arrow-fixed .arrow");
setInterval(() => {
  fixedArrow.forEach((e) => {
    e.classList.toggle("arrow-animate");
  });
}, 800 * 4);
