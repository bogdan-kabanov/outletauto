// Скрипт для открытия и закрытия модального окна

var modal = document.getElementById("myModal");
var btn = document.querySelectorAll("#myBtn");
var span = document.getElementsByClassName("close")[0];
btn.forEach(item => {
    item.onclick = function() {
    modal.style.display = "block";
    }
//    span.onclick = function() {
//    modal.style.display = "none";
//    }
    window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
    }
})

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
