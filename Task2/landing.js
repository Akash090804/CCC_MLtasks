let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showSlide(index) {
    // Make sure the index wraps around if it's out of bounds
    currentSlide = (index + totalSlides) % totalSlides;
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-slide').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Auto-slide every 5 seconds
let autoSlideInterval = setInterval(nextSlide, 5000);

// Pause the carousel on hover
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.addEventListener('mouseover', () => {
    clearInterval(autoSlideInterval);
});
carouselContainer.addEventListener('mouseout', () => {
    autoSlideInterval = setInterval(nextSlide, 5000);
});

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

showSlide(currentSlide);  // Show the first slide initially




const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('rating-value');

stars.forEach(star => {
    star.addEventListener('click', setRating);
    star.addEventListener('mouseover', highlightStars);
    star.addEventListener('mouseout', resetHighlight);
});

let selectedRating = 0;

function setRating(event) {
    selectedRating = event.target.dataset.value;
    updateRatingText();
    highlightStars();
}

function highlightStars() {
    stars.forEach(star => {
        if (star.dataset.value <= selectedRating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}

function resetHighlight() {
    highlightStars();
}

function updateRatingText() {
    ratingValue.textContent = `You rated: ${selectedRating} star${selectedRating > 1 ? 's' : ''}`;
}
