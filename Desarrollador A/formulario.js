const formRegistro = document.getElementById("form-registro");

// Función que muestra un mensaje de error en el span correspondiente
function mostrarError(idSpan, mensaje) {
    document.getElementById(idSpan).textContent = mensaje;
}

// Función que limpia un mensaje de error
function limpiarError(idSpan) {
    document.getElementById(idSpan).textContent = "";
}

formRegistro.addEventListener("submit", function(e) {
    e.preventDefault(); // Siempre frenamos el envío primero

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const edad = parseInt(document.getElementById("edad").value, 10);
    const pais = document.getElementById("pais").value;
    const terminos = document.getElementById("terminos").checked;

    // Limpiamos todos los errores anteriores antes de validar de nuevo
    limpiarError("error-nombre");
    limpiarError("error-email");
    limpiarError("error-edad");
    limpiarError("error-pais");
    limpiarError("error-terminos");

    let hayErrores = false;

    // Validación nombre
    if (nombre.length < 5) {
        mostrarError("error-nombre", "El nombre debe tener al menos 5 caracteres.");
        hayErrores = true;
    }

    // Validación email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        mostrarError("error-email", "Por favor, ingresá un correo electrónico válido.");
        hayErrores = true;
    }

    // Validación edad
    if (isNaN(edad) || edad < 18 || edad > 60) {
        mostrarError("error-edad", "La edad debe estar entre 18 y 60 años.");
        hayErrores = true;
    }

    // Validación país
    if (pais === "") {
        mostrarError("error-pais", "Por favor, seleccioná un país de la lista.");
        hayErrores = true;
    }

    // Validación términos
    if (!terminos) {
        mostrarError("error-terminos", "Debés aceptar los términos y condiciones.");
        hayErrores = true;
    }

    // Solo enviamos si no hay ningún error
    if (!hayErrores) {
        formRegistro.submit();
    }
});
