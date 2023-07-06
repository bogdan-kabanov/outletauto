const retention = document.querySelectorAll(".retention");

retention.forEach((e) => {
  const storageName = e.getAttribute("data-retention");
  const empty = localStorage.setItem(storageName, JSON.stringify([{
    name: "123"
  }]));

  if (isEmptyStorage(storageName)) {
    console.log(1);
    e.querySelector(".not-empty").classList.add("active");
    e.querySelector(".empty").classList.remove("active");
  } else {
    console.log(2);
    e.querySelector(".not-empty").classList.remove("active");
    e.querySelector(".empty").classList.add("active");
  }
});

function isEmptyStorage(storageName) {
  console.log(JSON.parse(localStorage.getItem(storageName)));
  if (JSON.parse(localStorage.getItem(storageName)) == null) {
    return false;
  } else {
    return true;
  }
}

