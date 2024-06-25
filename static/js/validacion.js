function validarFormulario() {
  // Obtener los valores ingresados por el usuario y recortar los posibles espacios en blanco al principio y al final.
  var nombre = document.getElementById("firstname").value.trim();
  var apellido = document.getElementById("lastname").value.trim();
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value.trim();
  var birthdate = document.getElementById("birthdate").value;
  var pais = document.getElementById("country").value;
  var terms = document.getElementById("terms").checked;

  // Limpiar los mensajes de error y eliminar clases de error
  limpiarErrores();

  // Verificar si algún campo está en blanco y establecer mensajes de error en el placeholder o debajo del campo
  if (nombre === "") {
      mostrarError("firstname", "Por favor, ingrese su nombre.");
      return false;
  }
  if (apellido === "") {
      mostrarError("lastname", "Por favor, ingrese su apellido.");
      return false;
  }
  if (email === "") {
      mostrarError("email", "Por favor, ingrese su email.");
      return false;
  }
  if (password === "") {
      mostrarError("password", "Por favor, ingrese su contraseña.");
      return false;
  }
  if (birthdate === "") {
      mostrarError("birthdate", "Por favor, ingrese su fecha de nacimiento.");
      return false;
  }
  if (pais === "") {
      mostrarError("country", "Por favor, seleccione su país.");
      return false;
  }
  if (!terms) {
      mostrarError("terms", "Debe aceptar los términos y condiciones.");
      return false;
  }

  // Si todas las validaciones son exitosas, mostrar un mensaje de éxito
  alert("Formulario enviado correctamente.");
  return true;
}

function limpiarErrores() {
  var elementos = document.querySelectorAll(".error");
  elementos.forEach(function(el) {
      el.classList.remove("error");
  });

  var mensajes = document.querySelectorAll(".error-message");
  mensajes.forEach(function(mensaje) {
      mensaje.innerText = "";
  });
}

function mostrarError(id, mensaje) {
  var elemento = document.getElementById(id);
  var mensajeError = document.getElementById("error-" + id);
  
  if (id === "terms" || id === "country" || id === "birthdate") {
      mensajeError.innerText = mensaje;
      mensajeError.classList.add("error-message");
      elemento.classList.add("error");
  } else {
      elemento.classList.add("error");
      elemento.value = "";
      elemento.placeholder = mensaje;
  }
}