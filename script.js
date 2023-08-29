document.addEventListener( 'DOMContentLoaded', function () {

  var main = new Splide( '#main-carousel', {
  type       : 'fade',
  heightRatio: 0.4,
  fixedWidth : 480,
  fixedHeight: 200,
  pagination : false,
  arrows     : false,
  cover      : true,
} );

var thumbnails = new Splide( '#thumbnail-carousel', {
  rewind          : true,
  fixedWidth      : 104,
  fixedHeight     : 58,
  isNavigation    : true,
  gap             : 10,
  focus           : 'center',
  pagination      : false,
  cover           : true,
  dragMinThreshold: {
    mouse: 4,
    touch: 10,
  },
  breakpoints : {
    640: {
      fixedWidth  : 66,
      fixedHeight : 38,
    },
  },
} );

main.sync( thumbnails );
main.mount();
thumbnails.mount();
  
} );

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
  const fontBgWidthValue = fontBgWidthSlider.value + 'px';
  targetParagraph.style.width = fontBgWidthValue;
});

const fontBgHeightSlider = document.getElementById('font-bg-height-slider');
fontBgHeightSlider.addEventListener('input', function() {
  const fontBgHeightValue = fontBgHeightSlider.value + 'px';
  targetParagraph.style.height = fontBgHeightValue;
});


document.getElementById("mex-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting traditionally

  var formData = new FormData(this); // Create a FormData object from the form

  var xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object

  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          var result = JSON.parse(xhr.responseText); // Assign the response from the server to a variable
          const bylinesContainer = document.getElementById('bylines');
          for (const language in result) {
            if (result.hasOwnProperty(language)) {
              const bylines = result[language];
              console.log(`Language: ${language}`);
              const listItem = document.createElement('li');
              listItem.textContent = language;
              bylinesContainer.appendChild(listItem);

              // Loop through each phrase in the language
              for (const byline of bylines) {
                const listItem = document.createElement('li');
                listItem.textContent = byline;
                listItem.addEventListener('click', function() {
                  overlayText.innerText = byline
                });
                bylinesContainer.appendChild(listItem);
              }
            }
          }
      }
  };

  xhr.open("POST", "https://m3api.e3l.in/copywrite", true); // Replace with your server endpoint
  xhr.send(formData); // Send the form data

});


const deleteButton = document.getElementById('deleteTaglines');
const myList = document.getElementById('bylines');

deleteButton.addEventListener('click', function() {
  while (myList.firstChild) {
    myList.removeChild(myList.firstChild);
  }
});