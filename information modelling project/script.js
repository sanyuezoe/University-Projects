const styleButtons = document.querySelectorAll(".style-buttons button");
const activeStyleLink = document.getElementById("active-style");

const userPreferredStyle = localStorage.getItem("preferredStyle");
if (userPreferredStyle) {
  activeStyleLink.href = `${userPreferredStyle}.css`;
}

styleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const styleName = button.id;
    localStorage.setItem("preferredStyle", styleName);

    activeStyleLink.href = `${styleName}.css`;
  });
});
