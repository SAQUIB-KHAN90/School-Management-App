const registrationForm = document.getElementById("register");
const registerMessage = document.getElementById("register-message");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  if (!gmailRegex.test(email)) {
    registerMessage.style.color = "#f83c7a";
    registerMessage.textContent = "Please enter a valid Gmail address.";
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  let emailExists = false;

  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      emailExists = true;
      break;
    }
  }
  if (emailExists) {
    registerMessage.style.color = "#f83c7a";
    registerMessage.textContent = "Email already registered. Please login.";
  } else {
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    registerMessage.style.color = "#f83c7a";
    registerMessage.textContent = "Registration successful! You can now login";
  }
});

//Handle login

const loginForm = document.getElementById("login");
const loginMessage = document.getElementById("login-message");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  if (email === "admin" && password === "password") {
    window.location.href = "admin.html";
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  let validUser = false;

  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      validUser = true;
      break;
    }
  }
  if (validUser) {
    loginMessage.style.color = "#f83c7a";
    loginMessage.textContent = "Login successful";
    window.location.href = "main.html";
  } else {
    loginMessage.style.color = "#f83c7a";
    loginMessage.textContent = "Invalid email or password / Register ur self";
  }
});
