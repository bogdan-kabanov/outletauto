const selectAll = document.querySelector("#select-all");
const select = document.querySelectorAll(".select-all");

selectAll.addEventListener("click", () => {
  select.forEach((e) => {
    selectAll.checked ? (e.checked = true) : (e.checked = false);
  });
});

let checkedValue = 0;
select.forEach((e) => {
  e.addEventListener("click", (e) => {
    select.forEach((e) => {
      !e.checked ? (checkedValue += 1) : (checkedValue += 0);
    });
    if(checkedValue == select.length){
        selectAll.checked = false
    }
    checkedValue = 0
  });
});
