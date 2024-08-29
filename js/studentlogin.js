document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const loginName = document.getElementById("login-email").value.trim();
    const loginID = document.getElementById("login-password").value.trim();

    const students = JSON.parse(localStorage.getItem("students")) || [];

    const student = students.find(
      (s) => s.name === loginName && s.id === loginID
    );

    if (student) {
      // alert(`Welcome, ${student.name}!`);
      loginMessage.style.color = "#f83c7a";
      loginMessage.textContent = "Login successful";
      window.location.href = "mycourses.html";
    } else {
      // Login failed
      loginMessage.style.color = "#f83c7a";
      loginMessage.textContent = "Invalid email or password / Register ur self";
      // alert("Invalid name or ID.");
    }
  });
});
