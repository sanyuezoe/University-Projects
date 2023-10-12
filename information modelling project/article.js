const iframe = document.getElementById("article-frame");
var options = document.querySelectorAll('input[name="highlight-option"]');
const buttons = document.querySelectorAll(".issue-button button");

async function fetchDataAndSetup() {
  let data;

  try {
    const response = await fetch("/data.json");
    data = await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  const Penthesilea = data["Penthesilea"];
  const Hecabe = data["Hecabe"];
  const Medea = data["Medea"];
  const Circe = data["Circe"];
  const Klytemnestra = data["Klytemnestra"];
  const Girlsmeetsboys = data["Girlsmeetsboys"];

  const arrayMap = {
    Penthesilea: Penthesilea,
    Hecabe: Hecabe,
    Medea: Medea,
    Circe: Circe,
    Klytemnestra: Klytemnestra,
    "Girls Meets Boys": Girlsmeetsboys,
  };

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const articleFile = this.getAttribute("data-article");
      loadArticle(articleFile);

      const clickedArray = arrayMap[this.textContent] || [];
      populateMetadataLists(clickedArray);
    });
  });
}

fetchDataAndSetup();

function loadArticle(articleFile) {
  uncheckAllCheckboxes();
  iframe.src = articleFile;
}

function uncheckAllCheckboxes() {
  options.forEach((option) => {
    option.checked = false;
  });
}

function populateMetadataLists(array) {
  const peopleList = document.getElementById("people-list");
  const placeList = document.getElementById("place-list");
  const conceptList = document.getElementById("concept-list");

  function createLinkElement(name, link) {
    const linkElement = document.createElement("a");
    linkElement.textContent = name;
    linkElement.href = link;
    linkElement.target = "_blank";

    return linkElement;
  }

  peopleList.innerHTML = "";
  placeList.innerHTML = "";
  conceptList.innerHTML = "";

  array.forEach((item) => {
    const linkElement = createLinkElement(item.name, item.link);

    const linkWrapper = document.createElement("div");
    linkWrapper.appendChild(linkElement);

    if (item.type === "people") {
      peopleList.appendChild(linkWrapper);
    } else if (item.type === "place") {
      placeList.appendChild(linkWrapper);
    } else if (item.type === "concept") {
      conceptList.appendChild(linkWrapper);
    }
  });
}

options.forEach(function (option) {
  option.addEventListener("change", function () {
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
    type: "highlight",
    selectedOptions: selectedOptions,
    cssClassPrefix: "highlight-",
  };

  iframe.contentWindow.postMessage(message, "*");
}

window.addEventListener("message", function (event) {
  var message = event.data;

  if (message.type === "highlight") {
    var selectedOptions = message.selectedOptions;
    var cssClassPrefix = message.cssClassPrefix;

    var elements = document.querySelectorAll(
      ".highlight-name, .highlight-place, .highlight-concept"
    );
    elements.forEach(function (element) {
      element.classList.remove(
        "highlight-name",
        "highlight-place",
        "highlight-concept"
      );
    });

    selectedOptions.forEach(function (option) {
      var cssClass = cssClassPrefix + option;
      var elements = document.getElementsByClassName(option);

      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add(cssClass);
      }
    });
  }
});
