// Скрипт для открытия и закрытия модального окна

var modal = document.getElementById("myModal");
var btn = document.querySelectorAll("#myBtn");
var span = document.getElementsByClassName("close")[0];
btn.forEach(item => {
    item.onclick = function() {
    modal.style.display = "block";
    }
    span.onclick = function() {
    modal.style.display = "none";
    }
    window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
    }
})
