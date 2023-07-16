var iframe = document.getElementById('article-frame');
var radioButtons = document.querySelectorAll('#options input[type="radio"]');
var textElements = document.querySelectorAll('p');

function loadArticle(articleFile) {
    iframe.src = articleFile;
}

var buttons = document.querySelectorAll('.death-button button');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    var articleFile = this.getAttribute('data-article');
    loadArticle(articleFile);
  });
});


function highlightText() {
    var selectedValues = Array.from(document.querySelectorAll('#options input[type="radio"]:checked')).map(function(radio) {
      return radio.value;
    });
    
    for (var i = 0; i < textElements.length; i++) {
      var textElement = textElements[i];
      var textClasses = textElement.classList;
      
      textClasses.forEach(function(className) {
        if (selectedValues.includes(className)) {
          textElement.classList.add('highlight-' + className.toLowerCase());
        } else {
          textElement.classList.remove('highlight-' + className.toLowerCase());
        }
      });
    }
  }
  
  radioButtons.forEach(function(radio) {
    radio.addEventListener('click', highlightText);
    loadArticle(articleFile);
  });