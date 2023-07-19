// for issues page
import { PenthesileaArray } from './metadata.js'


var iframe = document.getElementById('article-frame');

function loadArticle(articleFile) {
  iframe.src = articleFile;
}

var buttons = document.querySelectorAll('.issue-button button');

buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    var articleFile = this.getAttribute('data-article');
    loadArticle(articleFile);
  });
});



var options = document.querySelectorAll('input[name="highlight-option"]');

options.forEach(function (option) {
  option.addEventListener('change', function () {
    var selectedOptions = getSelectedOptions();
    highlightText(selectedOptions);
  });
});

function getSelectedOptions() {
  var selectedOptions = [];
  options.forEach(function (option) {
    if (option.checked) {
      selectedOptions.push(option.value);
    }
  });
  return selectedOptions;
}

function highlightText(selectedOptions) {
  var message = {
    type: 'highlight',
    selectedOptions: selectedOptions,
    cssClassPrefix: 'highlight-' // Prefix for CSS class names
  };

  iframe.contentWindow.postMessage(message, '*');
}

window.addEventListener('message', function (event) {
  var message = event.data;

  if (message.type === 'highlight') {
    var selectedOptions = message.selectedOptions;
    var cssClassPrefix = message.cssClassPrefix;

    // Remove all previous highlight CSS classes
    var elements = document.querySelectorAll('.highlight-name, .highlight-place, .highlight-concept');
    elements.forEach(function (element) {
      element.classList.remove('highlight-name', 'highlight-place', 'highlight-concept');
    });

    // Add highlight CSS classes for selected options
    selectedOptions.forEach(function (option) {
      var cssClass = cssClassPrefix + option;
      var elements = document.getElementsByClassName(option);

      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add(cssClass);
      }
    });
  }
});