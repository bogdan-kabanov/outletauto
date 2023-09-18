// Скрипт для открытия и закрытия модального окна

var RegModal = document.getElementById("RegModal");
var RegBtn = document.querySelectorAll("#RegBtn");
var span = document.getElementsByClassName("close")[0];
var AuthModal = document.getElementById("AuthModal");
var LogBtn = document.querySelectorAll("#LogBtn");
RegBtn.forEach(item => {
    item.onclick = function() {
    RegModal.style.display = "block";
    }

})
LogBtn.forEach(item => {
    item.onclick = function() {
    AuthModal.style.display = "block";
    }
})
window.onclick = function(event) {
    if (event.target == RegModal) {
      RegModal.style.display = "none";
    };
    if (event.target == AuthModal) {
      AuthModal.style.display = "none";
    }
}

function registerUser(button) {
  var formNode = button.parentNode.parentNode
  var form = $('#' + formNode.id); // Идентификатор вашей формы регистрации
  var url = form.attr('action');
  var formData = form.serialize();

  $.ajax({
    url: url,
    type: 'POST',
    data: formData,
    success: function(response) {
      // Обработка успешного ответа от сервера
      // Например, закрытие модального окна и обновление страницы
      $('#registration-modal').modal('hide');
      location.reload();
    },
    error: function(xhr) {
      // Обработка ошибки
      // Например, вывод сообщения об ошибке в модальном окне
      var errorMessage = xhr.responseText;
      $('#registration-error-message').text(errorMessage);
    }
  });
}
