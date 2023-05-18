window.addEventListener('scroll', function(){
    let header = document.querySelector('.header')
    header.classList.toggle('rolagem',window.scrollY > 0)
})


var carousel = document.querySelector('.carousel');
var slides = carousel.querySelectorAll('.carousel-slide');
var currentIndex = 0;
var prevButton = document.querySelector('.carousel-prev');
var nextButton = document.querySelector('.carousel-next');

function showSlide(index) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[index].style.display = 'block';
}

function nextSlide(event) {
  event.preventDefault(); // Evita o comportamento padrão do link
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function prevSlide(event) {
  event.preventDefault(); // Evita o comportamento padrão do link
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
}

showSlide(currentIndex);
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

