const retention = document.querySelectorAll(".retention");

function isEmptyRetention(product) {
  retention.forEach((e) => {
    const retentionEntityName = e.getAttribute("data-retention");
    if (product == undefined) {
      localStorage.setItem(retentionEntityName, []);
    } else {
      localStorage.setItem(retentionEntityName, JSON.stringify(product));
    }
    const entity = localStorage.getItem(retentionEntityName);
    const emptyResult = empty(entity);

    if (emptyResult) {
      e.querySelector(".not-empty").classList.toggle("active");
      e.querySelector(".empty").classList.toggle("active");
    }
  });
}

function empty(array) {
  return (result = JSON.parse(array).length > 0 ? true : false);
}

// Типа товары
const basket = [
  {
    title: "MOBIL Mobil Super 3000 X1 5W-40",
    type: "Масло",
    price: "3 705руб",
    img: "url..",
  },
  {
    title: "MOBIL Mobil Super 3000 X1 5W-40",
    type: "Масло",
    price: "3 705руб",
    img: "url..",
  },
  {
    title: "MOBIL Mobil Super 3000 X1 5W-40",
    type: "Масло",
    price: "3 705руб",
    img: "url..",
  },
];

// Сюда передаётся массив с товарами
isEmptyRetention(basket);
