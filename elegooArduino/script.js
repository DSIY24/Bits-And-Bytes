const root = document.documentElement;

// Function to increase the root font size by 1 rem
function increaseFontSize() {
  // Get the current font size from the root element
  const currentFontSize = parseFloat(
    getComputedStyle(root).getPropertyValue("--font-size")
  );

  // Increase the font size by 1 rem
  const newFontSize = currentFontSize + 0.1;

  // Set the new font size in rem units
  root.style.setProperty("--font-size", `${newFontSize}rem`);
}

// Event listener for the increase font size button
document
  .getElementById("increase-font-size")
  .addEventListener("click", increaseFontSize);

// Function to increase the root font size by 1 rem
function decreaseFontSize() {
  // Get the current font size from the root element
  const currentFontSize = parseFloat(
    getComputedStyle(root).getPropertyValue("--font-size")
  );

  // Increase the font size by 1 rem
  const newFontSize = currentFontSize - 0.1;

  // Set the new font size in rem units
  root.style.setProperty("--font-size", `${newFontSize}rem`);
}

document
  .getElementById("decrease-font-size")
  .addEventListener("click", decreaseFontSize);

function resetFontSize() {
  root.style.setProperty("--font-size", `1.3rem`);
}

document
  .getElementById("reset-font-size")
  .addEventListener("click", resetFontSize);

const button = document.getElementById("menu-button");
const mobileBar = document.getElementById("mobile-sidebar");
const page = document.getElementById("page");

button.addEventListener("click", function () {
  mobileBar.classList.toggle("active");
  button.classList.toggle("active");
  page.classList.toggle("active");
});
