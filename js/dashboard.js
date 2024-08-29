const ctx = document.getElementById("myChart").getContext("2d");
const attandance = document.getElementById("attandance").getContext("2d");

new Chart(ctx, {
  type: "polarArea",
  data: {
    labels: ["Employee", "Teacher", "Students"],
    datasets: [
      {
        label: "Strength",
        data: [500, 150, 3500],
        backgroundColor: [
          "rgba(255,99,132,1)",
          "rgba(54,162,235,1)",
          "rgba(255,206,86,1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});

new Chart(attandance, {
  type: "bar",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Student Attandance",
        data: [20, 18, 16, 15, 10, 20, 18, 19, 14, 16],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(255, 159, 64, 0.8)",
          "rgba(255, 205, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(201, 203, 207, 0.8)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});

//MENU TOGGLE
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

let list = document.querySelectorAll(".navigation li");
function activeLink() {
  list.forEach((item) => item.classList.remove("hovered"));
  this.classList.add("hovered");
}
list.forEach((item) => item.addEventListener("mouseover", activeLink));

const loggedInUserEmail = localStorage.getItem("loggedInUserEmail");
const logoutButton = document.getElementById("logoutButton");

logoutButton.addEventListener("click", function () {
  localStorage.removeItem("loggedInUserEmail");

  // Redirect to login page
  window.location.href = "index.html";
});
