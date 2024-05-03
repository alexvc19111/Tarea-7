document.addEventListener('DOMContentLoaded', function() {
  var emailInput = document.getElementById('email');
  var passwordInput = document.getElementById('password');

  // Función para verificar si se colocó el correo y la contraseña
  function checkCredentials(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Verificar si se ingresó el correo y la contraseña
    if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
      showMessage('No se pudo ingresar debido a: Por favor, complete todos los campos.');
    } else {
      showMessage('¡Login exitoso!');
    }
  }

  // Función para mostrar un mensaje
  function showMessage(message) {
    alert(message);
  }

  // Asignar la función checkCredentials al evento submit del formulario
  document.getElementById('signin').addEventListener('click', checkCredentials);
});
