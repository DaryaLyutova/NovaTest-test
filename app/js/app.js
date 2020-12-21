const reviews = document.querySelector('.reviews');
const reviewSlider = reviews.querySelectorAll('.reviews__slider');
const reviewSliderGreen = reviews.querySelector('.reviews__slider-green');
const reviewSliderGrey = reviews.querySelector('.reviews__slider-grey');
const reviewSliderRed = reviews.querySelector('.reviews__slider-red');
const button = document.querySelector('.trailer__video-play');
const counter = reviews.querySelectorAll('.reviews__item-counter');

function showGreen(i, element) {
    let width = 1;
    const value = (counter[i].textContent * 0.5);
    const id = setInterval(frame, 10);
    function frame() {
      if (width >= value) {
        clearInterval(id);
      } else {
        width++; 
        element.style.width = width + 'px';
      }
    }    
};

function showAll() {
    showGreen(0, reviewSliderGreen);
    showGreen(1, reviewSliderGrey);
    showGreen(2, reviewSliderRed);
}

button.addEventListener('click', showAll);