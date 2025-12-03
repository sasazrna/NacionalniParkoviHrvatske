
let slideIndex = 0;
showSlides();

function plusSlides(n) {
  slideIndex += n;
  showSlides();
}

function showSlides() {
  const slides = document.querySelectorAll(".gallery-slide");
  const wrapper = document.querySelector(".gallery-wrapper");
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  wrapper.style.transform = `translateX(${-slideIndex * 100}%)`;
}
