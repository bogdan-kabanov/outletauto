const authOn = document.querySelectorAll(".auth-on");
const authOff = document.querySelectorAll(".auth-off");
const headerAccount = document.querySelector(".header-account");
const burgerWrapper = document.querySelector(".burger-wrapper");

if (localStorage.getItem("authToggle") == null) {
  localStorage.setItem("authToggle", false);
  authOffFn();
}

let authToggle = JSON.parse(localStorage.getItem('authToggle'));

let auth = (authToggle) ? authOnFn() : authOffFn();


function authOnFn() {
  localStorage.setItem("authToggle", JSON.stringify(true));
  authToggle = JSON.parse(localStorage.getItem("authToggle"));

  authOff.forEach((e) => {
    e.style.display = "none";
  });
  authOn.forEach((e) => {
    e.style.display = "flex";
  });
  headerAccount.style.width = "16%";
  burgerWrapper.style.width = "6%";
}

function authOffFn() {
  localStorage.setItem("authToggle", JSON.stringify(false));
  authToggle = JSON.parse(localStorage.getItem("authToggle"));

  authOff.forEach((e) => {
    e.style.display = "flex";
  });
  authOn.forEach((e) => {
    e.style.display = "none";
  });
  headerAccount.style.width = "25%";
  burgerWrapper.style.width = "10%";
}
