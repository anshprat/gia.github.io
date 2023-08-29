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


const fontSizeSlider = document.getElementById('font-size-slider');
const targetParagraph = document.getElementById('overlayText');

fontSizeSlider.addEventListener('input', function() {
    const fontSizeValue = fontSizeSlider.value + 'px';
    targetParagraph.style.fontSize = fontSizeValue;
    console.log(fontSizeValue);
});

/* <div>Text Color
  <input type="color" id="font-color-picker" value="#000000">
  </div>
  <div>Text background Color
    <input type="color" id="font-bg-color-picker" value="#ffffff">
  </div>
  <div>
    Text background width
    <input type="range" id="font-bg-width-slider" min="0" max="100" step="1" value="0">
  </div>
  <div>
    Text background height
    <input type="range" id="font-bg-height-slider" min="0" max="100" step="1" value="0"></input> */

const fontColorPicker = document.getElementById('font-color-picker');
fontColorPicker.addEventListener('input', function() {
  const fontColorValue = fontColorPicker.value;
  targetParagraph.style.color = fontColorValue;

});

const fontBgColorPicker = document.getElementById('font-bg-color-picker');
fontBgColorPicker.addEventListener('input', function() {
  const fontBgColorValue = fontBgColorPicker.value;
  targetParagraph.style.backgroundColor = fontBgColorValue;
});

const fontBgWidthSlider = document.getElementById('font-bg-width-slider');
fontBgWidthSlider.addEventListener('input', function() {
  const fontBgWidthValue = fontBgWidthSlider.value + '%';
  targetParagraph.style.width = fontBgWidthValue;
});

const fontBgHeightSlider = document.getElementById('font-bg-height-slider');
fontBgHeightSlider.addEventListener('input', function() {
  const fontBgHeightValue = fontBgHeightSlider.value + '%';
  targetParagraph.style.height = fontBgHeightValue;
});