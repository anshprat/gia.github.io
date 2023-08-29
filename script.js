// Function to dynamically insert <li> elements into a given <ul> element
function insertLiElements(count, htmlContent, ulElement) {
  for (let i = 1; i < count; i++) {
    const liElement = document.createElement('li');
    liElement.className = 'splide__slide';
    liElement.innerHTML = '<img src="thumbnail0'+i+'.jpg" alt="">';
    ulElement.appendChild(liElement);
  }
}

// Get the <ul> element where you want to insert the <li> elements
const mainCarouselUl = document.querySelector('#main-carousel .splide__list');
const thumbnailCarouselUl = document.querySelector('#thumbnail-carousel .splide__list');

// HTML content to be inserted
const htmlContent = '';

// Number of <li> elements to insert
const liCount = 9; // Change this to the desired number

// Insert <li> elements into the main carousel
insertLiElements(liCount, htmlContent, mainCarouselUl);

// Insert <li> elements into the thumbnail carousel
insertLiElements(liCount, htmlContent, thumbnailCarouselUl);


// script.js
const textInput = document.getElementById('textInput');
const applyButton = document.getElementById('applyButton');
const selectedImage = document.getElementById('selectedImage');
const overlayText = document.getElementById('overlayText');

applyButton.addEventListener('click', () => {
  overlayText.innerText = textInput.value;
  overlayText.classList.remove('hidden');
});

selectedImage.addEventListener('change', (event) => {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    const imageUrl = URL.createObjectURL(selectedFile);
    selectedImage.src = imageUrl;
  }
});
