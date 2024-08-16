let pages = [
  "How%20databases%20work.html",
  "Breadboard.html",
  "CrowdStirke%20-%20Vulnerabilities%20in%20windows.html",
  "LEDs%20And%20Semi%20Conductors.html",
];
let pageNames = [
  "How databases work",
  "Breadboards ?",
  "Crowdstrike Vulnerabilities In Windows ?",
  "Led's And Semi Conductors",
];
let prevWebpage = document.querySelector(".backButton h6");
let nextWebpage = document.querySelector(".fowardButton h6");

let currentPage = window.location.pathname.split("/").pop();
console.log("Current Page:", currentPage); // Debugging

let currentIndex = pages.indexOf(currentPage);
console.log("Current Index:", currentIndex); // Debugging

function neighbouringPages(array, direction) {
  if (direction === "next") {
    return currentIndex < array.length - 1 ? array[currentIndex + 1] : null;
  } else if (direction === "prev") {
    return currentIndex > 0 ? array[currentIndex - 1] : null;
  } else {
    return "Error";
  }
}

let nextPage = neighbouringPages(pages, "next");
let prevPage = neighbouringPages(pages, "prev");

prevWebpage.innerHTML = neighbouringPages(pageNames, "prev");
nextWebpage.innerHTML = neighbouringPages(pageNames, "next");

let nextButton = document.getElementById("nextButton");
let prevButton = document.getElementById("prevButton");

// Set up the next page button
if (nextPage) {
  nextButton.onclick = function () {
    window.location.href = nextPage;
  };
} else {
  nextButton.onclick = function () {
    window.location.href = "/index.html";
  };
}

// Set up the previous page button
if (prevPage) {
  prevButton.onclick = function () {
    window.location.href = prevPage;
  };
} else {
  prevButton.onclick = function () {
    window.location.href = "/index.html";
  };
}
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

/*
// Function to increase the font size of all <p> elements
function increaseFontSize() {
  // Select all <p> elements
  const paragraphs = document.querySelectorAll("p");

  // Iterate through each <p> element
  paragraphs.forEach((paragraph) => {
    // Get the current font size
    const currentFontSize = window.getComputedStyle(paragraph).fontSize;

    // Convert the current font size to a number (in rem units)
    const currentFontSizeInRem =
      parseFloat(currentFontSize) /
      parseFloat(getComputedStyle(document.documentElement).fontSize);

    // Increase the font size by 0.1 rem
    const newFontSizeInRem = currentFontSizeInRem + 0.1;

    // Set the new font size in rem units
    paragraph.style.fontSize = `${newFontSizeInRem}rem`;
  });
}

// Attach event listener to the button
document
  .getElementById("increase-font-size")
  .addEventListener("click", increaseFontSize);

// Function to decrease the font size of all <p> elements
function decreaseFontSize() {
  // Select all <p> elements
  const paragraphs = document.querySelectorAll("p");

  // Iterate through each <p> element
  paragraphs.forEach((paragraph) => {
    // Get the current font size
    const currentFontSize = window.getComputedStyle(paragraph).fontSize;

    // Convert the current font size to a number (in rem units)
    const currentFontSizeInRem =
      parseFloat(currentFontSize) /
      parseFloat(getComputedStyle(document.documentElement).fontSize);

    // Decrease the font size by 0.1 rem
    const newFontSizeInRem = Math.max(currentFontSizeInRem - 0.1, 0.1); // Prevent font size from becoming too small

    // Set the new font size in rem units
    paragraph.style.fontSize = `${newFontSizeInRem}rem`;
  });
}

// Attach event listener to the button
document
  .getElementById("decrease-font-size")
  .addEventListener("click", decreaseFontSize);

function resetFontSize() {
  const paragraphs = document.querySelectorAll("p");

  paragraphs.forEach((paragraph) => {
    paragraph.style.fontSize = "1.2rem";
  });
}

document
  .getElementById("reset-font-size")
  .addEventListener("click", resetFontSize);
*/
