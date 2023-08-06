const catalogBtn = document.querySelectorAll(".catalog-popup");
const popUpAll = document.querySelectorAll(".sidebar .nav");
const closeCatalogBtn = document.querySelectorAll(".closed-catalog-popup");
catalogBtn.forEach((e) => {
  e.addEventListener("click", (e) => {
    closedCatalogPopUp(false);
    const popUp = document.querySelector(".tab-active .sidebar .nav");
    document.querySelector("body").style.overflow = "hidden";
    popUp.classList.toggle("active");
  });
});

closeCatalogBtn.forEach((e) => {
  e.addEventListener("click", () => {
    closedCatalogPopUp(true);
    document.querySelector("body").style.overflow = "auto";
  });
});

function closedCatalogPopUp(status) {
  popUpAll.forEach((e) => {
    if (!e.closest(".tab").classList.contains("tab-active") || status) {
      e.classList.remove("active");
    }
  });
}
