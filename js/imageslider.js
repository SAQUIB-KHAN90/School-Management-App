let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  document.querySelector(".slider").style.transform = `translateX(-${
    currentSlide * 100
  }%)`;
}

function moveSlide(step) {
  showSlide(currentSlide + step);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
});
