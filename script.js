document.addEventListener('DOMContentLoaded', function () {

  var main = new Splide('#main-carousel', {
    type: 'fade',
    heightRatio: 0.5,
    fixedHeight: 210,
    fixedWidth: 440,
    pagination: false,
    arrows: false,
    cover: true,
  });

  var thumbnails = new Splide('#thumbnail-carousel', {
    rewind: true,
    fixedWidth: 104,
    fixedHeight: 58,
    isNavigation: true,
    gap: 10,
    focus: 'center',
    pagination: false,
    cover: true,
    dragMinThreshold: {
      mouse: 4,
      touch: 10,
    },
    breakpoints: {
      640: {
        fixedWidth: 66,
        fixedHeight: 38,
      },
    },
  });

  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();

});


function update_taglines(result) {
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
        listItem.addEventListener('click', function () {
          overlayText.innerText = byline
        });
        bylinesContainer.appendChild(listItem);
      }
    }
  }
}

function saveAs(uri, filename) {

  var link = document.createElement('a');

  if (typeof link.download === 'string') {

    link.href = uri;
    link.download = filename;

    //Firefox requires the link to be in the body
    document.body.appendChild(link);

    //simulate click
    link.click();

    //remove the link when done
    document.body.removeChild(link);

  } else {

    window.open(uri);

  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numbers = Array.from({ length: 30 }, (_, index) => index + 1);

for (let i = numbers.length - 1; i > 0; i--) {
  const j = getRandomInt(0, i);
  [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
}


const mock_results = `{
  "English": [
    "Authentic Thai food with 10% off!",
    "Enjoy Thai cuisine with 10% discount!",
    "Savor Thai delicacies at a 10% lower price!"
  ],
  "Malay": [
    "Makanan Thai asli dengan diskaun 10%!",
    "Nikmati masakan Thai dengan 10% diskaun!",
    "Nikmati hidangan Thai dengan harga 10% lebih murah!"
  ],
  "Bahasa": [
    "Makanan Thai asli dengan diskon 10%!",
    "Nikmati hidangan Thai dengan diskon 10%!",
    "Santap hidangan Thai dengan harga 10% lebih murah!"
  ],
  "Vietnamese": [
    "Đồ ăn Thái chính hiệu giảm giá 10%!",
    "Thưởng thức ẩm thực Thái với ưu đãi 10%!",
    "Thưởng thức đặc sản Thái Lan với giá giảm 10%!"
  ],
  "Filipino": [
    "Authentic Thai food na may 10% discount!",
    "Mag-enjoy ng Thai cuisine sa 10% discount!",
    "Tikman ang mga pagkaing Thai sa mas mababang presyo na may 10% discount!"
  ],
  "Thai": [
    "อาหารไทยแท้พร้อมส่วนลด 10%!",
    "สัมผัสรสชาติอาหารไทยพร้อมส่วนลด 10%!",
    "รับประทานอาหารไทยแสนอร่อยในราคาสุดคุ้ม ลด 10%!"
  ],
  "Burmese": [
    "အမြန်ကျေးဇူးတင်ပါတယ် ထုတ်လုပ်သူများအတွက် 10% လျှော့စျေးကိုပါဝင်ပြီး!",
    "10% လျှော့စျေးကိုသွားမည့် အမြန်ကျေးဇူးတင်ပါတယ်!",
    "10% လျှော့စျေးနှင့် အမြန်ကျေးဇူးတင်ပါသည်ဟုတ်ယူသည်ပြီး ထုတ်လုပ်သူများအတွက် အရသာတစ်ခုကိုရယူပါ!"
  ],
  "Khmer": [
    "អាហារនៅថៃដែលមានការបញ្ចុះតម្លៃ 10%!",
    "សារម្នាក់លួចទស្សនាអាហារថៃដែលមានការបញ្ចុះតម្លៃ 10%!",
    "សម្រាប់អ្នកដែលចូលរួមទស្សនាអាហារថៃដែលមានតម្លៃទាបជាង 10%!"
  ]
}`

// Function to dynamically insert <li> elements into a given <ul> element
function insertLiElements(count, htmlContent, ulElement) {
  for (let i = 1; i < count; i++) {
    const liElement = document.createElement('li');
    liElement.className = 'splide__slide';
    liElement.innerHTML = '<img src="i/thumbnail' + numbers[i] + '.jpg" alt="">';
    ulElement.appendChild(liElement);
  }
}

// Get the <ul> element where you want to insert the <li> elements
const mainCarouselUl = document.querySelector('#main-carousel .splide__list');
const thumbnailCarouselUl = document.querySelector('#thumbnail-carousel .splide__list');

// HTML content to be inserted
const htmlContent = '';

// Number of <li> elements to insert
const liCount = 30; // Change this to the desired number

// Insert <li> elements into the main carousel
insertLiElements(liCount, htmlContent, mainCarouselUl);

// Insert <li> elements into the thumbnail carousel
insertLiElements(liCount, htmlContent, thumbnailCarouselUl);


// script.js
const textInput = document.getElementById('textInput');
const applyButton = document.getElementById('applyButton');
const selectedImage = document.getElementById('selectedImage');
const overlayText = document.getElementById('overlayText');
const saveCreative = document.getElementById('saveCreative');

applyButton.addEventListener('click', () => {
  overlayText.innerText = textInput.value;
  overlayText.classList.remove('hidden');
});

saveCreative.addEventListener('click', () => {

  const getScreenshotOfElement = async (element) => {
    const canvas = await html2canvas(element)
    saveAs(canvas.toDataURL(), 'm3-creative.png');

  }

  const creative = document.getElementById('main-carousel')
  getScreenshotOfElement(creative)


});


const fontSizeSlider = document.getElementById('font-size-slider');
const targetParagraph = document.getElementById('overlayText');

fontSizeSlider.addEventListener('input', function () {
  const fontSizeValue = fontSizeSlider.value + 'px';
  targetParagraph.style.fontSize = fontSizeValue;
  console.log(fontSizeValue);
});


const fontColorPicker = document.getElementById('font-color-picker');
fontColorPicker.addEventListener('input', function () {
  const fontColorValue = fontColorPicker.value;
  targetParagraph.style.color = fontColorValue;

});

const fontBgColorPicker = document.getElementById('font-bg-color-picker');
fontBgColorPicker.addEventListener('input', function () {
  const fontBgColorValue = fontBgColorPicker.value;
  targetParagraph.style.backgroundColor = fontBgColorValue;
});

const fontBgWidthSlider = document.getElementById('font-bg-width-slider');
fontBgWidthSlider.addEventListener('input', function () {
  const fontBgWidthValue = fontBgWidthSlider.value + 'px';
  targetParagraph.style.width = fontBgWidthValue;
});

const fontBgHeightSlider = document.getElementById('font-bg-height-slider');
fontBgHeightSlider.addEventListener('input', function () {
  const fontBgHeightValue = fontBgHeightSlider.value + 'px';
  targetParagraph.style.height = fontBgHeightValue;
});


document.getElementById("mex-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting traditionally
  var checkbox = document.getElementById('mex-mock');
  if (checkbox.checked) {
    console.log('Checkbox is checked');
    return update_taglines(JSON.parse(mock_results));
  }
  var formData = new FormData(this); // Create a FormData object from the form

  var xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var result = JSON.parse(xhr.responseText); // Assign the response from the server to a variable
      update_taglines(result);
    }
  };

  xhr.open("POST", "https://m3api.e3l.in/copywrite", true); // Replace with your server endpoint
  xhr.send(formData); // Send the form data

});


const deleteButton = document.getElementById('deleteTaglines');
const myList = document.getElementById('bylines');

deleteButton.addEventListener('click', function () {
  while (myList.firstChild) {
    myList.removeChild(myList.firstChild);
  }
});

var languages = [
  "English",
  "Malay",
  "Thai",
  "Chinese",
  "Japanese",
  "Korean",
  "Vietnamese",
  "Filipino",
  "Indonesian",
  "Burmese",
  "Khmer"
];

var container = document.getElementById("control-languages");

languages.forEach(function(language) {
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = language;
  checkbox.id = "lang-" + language.toLowerCase();
  checkbox.value = "0";

  var label = document.createElement("label");
  label.textContent = language;
  label.setAttribute("for", "lang-" + language.toLowerCase());

  container.appendChild(checkbox);
  container.appendChild(label);
  container.appendChild(document.createElement("br"));
});