document.addEventListener('DOMContentLoaded', function() {
  var passwordInput = document.getElementById('password');
  var confirmPasswordInput = document.getElementById('conf-password');
  var passwordMessage = document.getElementById('password-message');
  var signupButton = document.getElementById('signup');
  
  // Función para verificar si las contraseñas coinciden en tiempo real
  function checkPasswords() {
    if (passwordInput.value !== confirmPasswordInput.value) {
      passwordMessage.textContent = 'Las contraseñas no coinciden';
    } else {
      passwordMessage.textContent = '';
    }
  }
  
  // Verificar las contraseñas cuando se escriben
  passwordInput.addEventListener('input', checkPasswords);
  confirmPasswordInput.addEventListener('input', checkPasswords);
  
  // Función para verificar si el formulario está completo y enviar el mensaje correspondiente
  function submitForm(event) {
    event.preventDefault();
    if (checkForm()) {
      showSuccessMessage();
    } else {
      showErrorMessage();
    }
  }

  // Función para verificar si los campos del formulario son correctos
  function checkForm() {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var confirmPasswordInput = document.getElementById('conf-password');
    var errorMessage = '';

    if (nameInput.value.trim() === '') {
      errorMessage = 'el nombre no puede estar vacío';
    } else if (emailInput.value.trim() === '') {
      errorMessage = 'el correo no puede estar vacío';
    } else if (passwordInput.value.trim() === '' || confirmPasswordInput.value.trim() === '') {
      errorMessage = 'la contraseña no puede estar vacía';
    } else if (passwordInput.value !== confirmPasswordInput.value) {
      errorMessage = 'las contraseñas no coinciden';
    }

    if (errorMessage) {
      showErrorMessage(errorMessage);
      return false;
    } else {
      return true;
    }
  }

  // Función para mostrar un mensaje de registro exitoso
  function showSuccessMessage() {
    alert('¡Registro completado correctamente!');
  }

  // Función para mostrar un mensaje de error
  function showErrorMessage(message) {
    alert('No se pudo registrar debido a: ' + message);
  }

  // Asignar la función submitForm al evento click del botón de registro
  signupButton.addEventListener('click', submitForm);
});
