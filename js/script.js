// Validadores para el formulario de login
function validateLoginForm(email, password) {
  const errors = [];

  if (!email) {
    errors.push("El correo electrónico es obligatorio.");
  } else if (!validateEmail(email)) {
    errors.push("El formato del correo electrónico no es válido.");
  }

  if (!password) {
    errors.push("La contraseña es obligatoria.");
  }

  return errors;
}

// Validadores para el formulario de registro
function validateRegisterForm(username, email, password, confirmPassword) {
  const errors = [];

  if (!username) {
    errors.push("El nombre de usuario es obligatorio.");
  }

  if (!email) {
    errors.push("El correo electrónico es obligatorio.");
  } else if (!validateEmail(email)) {
    errors.push("El formato del correo electrónico no es válido.");
  }

  if (!password) {
    errors.push("La contraseña es obligatoria.");
  } else if (password.length < 8) {
    errors.push("La contraseña debe tener al menos 8 caracteres.");
  } else if (!/[A-Z]/.test(password)) {
    errors.push("La contraseña debe contener al menos una letra mayúscula.");
  } else if (!/[a-z]/.test(password)) {
    errors.push("La contraseña debe contener al menos una letra minúscula.");
  } else if (!/[0-9]/.test(password)) {
    errors.push("La contraseña debe contener al menos un número.");
  } else if (!/[!@#$%^&*]/.test(password)) {
    errors.push(
      "La contraseña debe contener al menos un carácter especial (!@#$%^&*)."
    );
  }

  if (password !== confirmPassword) {
    errors.push("Las contraseñas no coinciden.");
  }

  return errors;
}

// Función auxiliar para validar el formato del correo electrónico
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Ejemplo de uso
const loginErrors = validateLoginForm("test@example.com", "password123");
if (loginErrors.length > 0) {
  console.log("Errores en el formulario de login:", loginErrors);
}

const registerErrors = validateRegisterForm(
  "username",
  "test@example.com",
  "Password123!",
  "Password123!"
);
if (registerErrors.length > 0) {
  console.log("Errores en el formulario de registro:", registerErrors);
}

const existEmail = "admintest@gmail.com";
const existPassword = "password123";

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    if (email === existEmail && password === existPassword) {
      alert("¡Bienvenido!");
      window.location.href = "ok.html";
    } else {
      alert("El correo electrónico o la contraseña son incorrectos.");
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("registerForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("registerPasswordConfirm").value;
  
        if (password === confirmPassword) {
          alert("¡Registro exitoso!");
          window.location.href = "ok.html";
        } else {
          alert("Las contraseñas no coinciden.");
        }
      });
  });
