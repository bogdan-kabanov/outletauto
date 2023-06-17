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

const burgerBtns = document.querySelectorAll('.burger-btns');
const burgerNav = document.querySelector(".burger-nav-wrapper");
burgerBtns.forEach(e => {
  e.addEventListener('click', () => {
    if(burgerNav.classList.contains('burger-nav-wrapper_active') == true){
      document.body.style.overflow = "auto"
    } else {
      document.body.style.overflow = "hidden"
    }
    burgerNav.classList.toggle('burger-nav-wrapper_active');
  })
})