const dropDownList = document.querySelectorAll(".drop-down");

const btn = document.querySelectorAll(".drop-down-btn");
const lists = document.querySelectorAll(".list");
btn.forEach((e) => {
  e.addEventListener("click", (e) => {
    const wrapper = e.target.parentNode;
    const btn = wrapper.querySelector(".drop-down-btn");
    const input = wrapper.querySelector('.hidden-item')
    const list = wrapper.querySelector(".list");

    closedAllList(lists, list);
    toggleShowList(list);
    const newValue = itemClosedList(list, {
      btn,
      input,
      wrapper
    });
  });
});

function itemClosedList(list, valueItems) {
  list.querySelectorAll(".list-item").forEach((e) => {
    e.addEventListener("click", (e) => {
      if (valueItems.wrapper?.getAttribute('data-select-type') == "active") {
        result = e.target.innerText;
        valueItems.btn.innerText = result
        valueItems.input.value = result
        closedAllList(lists, list);
      } else {
        toggleShowList(list);
      }
    });
  });
}

function toggleShowList(list) {
  list.classList.toggle("list-hidden");
}

function closedAllList(lists, list) {
  lists.forEach((e) => {
    if (e != list) {
      e.classList.add("list-hidden");
    }
  });
}
