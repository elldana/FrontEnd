let index = 0;
const slides = document.querySelector('.slides');
const stories = document.querySelectorAll('.story');
const totalSlides = stories.length;

function updateSlide() {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    index = (index + 1) % totalSlides;
    updateSlide();
}

function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlide();
}

setInterval(nextSlide, 4000); 
