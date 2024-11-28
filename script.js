// Validación con expresión regular literal
function validarTelefono() {
    const input = document.getElementById("phoneInput").value;
    const mensaje = document.getElementById("message");
  
    // Expresión regular literal para formato: 123-456-789
    const regex = /^\d{3}-\d{3}-\d{3}$/;
  
    if (regex.test(input)) {
      mensaje.textContent = "Número de teléfono válido. 🎉";
      mensaje.className = "message success";
    } else {
      mensaje.textContent = "Número de teléfono no válido . ❌";
      mensaje.className = "message error";
    }
  }
  
  // Validación con constructor de RegExp
  function validarTelefonoConstructor() {
    const input = document.getElementById("phoneInput").value;
    const mensaje = document.getElementById("message");
  
    // Crear expresión regular dinámicamente con constructor RegExp
    const pattern = "^\\d{3}-\\d{3}-\\d{3}$";
    const regex = new RegExp(pattern);
  
    if (regex.test(input)) {
      mensaje.textContent = "Número de teléfono válido . 🎉";
      mensaje.className = "message success";
    } else {
      mensaje.textContent = "Número de teléfono no válido . ❌";
      mensaje.className = "message error";
    }
  }
  