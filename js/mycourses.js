const loggedInUser = localStorage.getItem("loggedInUserEmail");

// Handle logout
const logoutButton = document.getElementById("logoutButton");

logoutButton.addEventListener("click", function () {
  localStorage.removeItem("loggedInUserEmail");

  // Redirect to login page
  window.location.href = "index.html";
});
