let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
  let slides = document.querySelectorAll(".slides");
  let dots = document.querySelectorAll(".dots span");

  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  slides.forEach((slide) => (slide.style.display = "none"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");
}

// Chuyển ảnh khi bấm nút
function changeSlide(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

// Chuyển ảnh khi bấm vào dấu chấm
function currentSlide(n) {
  slideIndex = n - 1;
  showSlides(slideIndex);
}

// // Tự động chuyển slide mỗi 3 giây
// setInterval(() => {
//   changeSlide(1);
// }, 6000);
