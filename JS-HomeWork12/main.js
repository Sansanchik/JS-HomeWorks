const slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
const stop = document.getElementById('stop');
stop.addEventListener('click', sliderStop);
const play = document.getElementById('play');
play.addEventListener('click', sliderPlay);

let start = setInterval(nextSlide, 3000);
let showing = true;

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide showing';
}

function sliderStop() {
    clearInterval(start);
    showing = false
}

function sliderPlay() {
    if (!showing) {
        start = setInterval(nextSlide, 3000);
        showing = true
    }
}
