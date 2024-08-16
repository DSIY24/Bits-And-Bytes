const hamburgerMenu = document.querySelector(".hamburgerMenu");
const offScreenMenu = document.querySelector(".offScreenMenu");
const closeMenu = document.querySelector(".closeMenu");

function show(object) {
  object.classList.toggle("active");
}

hamburgerMenu.addEventListener("click", function () {
  show(offScreenMenu);
  show(closeMenu);
});

closeMenu.addEventListener("click", function () {
  offScreenMenu.classList.remove("active");
  closeMenu.classList.remove("active");
});

const articleDropBtn = document.querySelector(".articleButton");
const projectDropBtn = document.querySelector(".projectButton");

articleDropBtn.addEventListener("click", function () {
  const dropdownMenu = document.querySelector(".dropdown-menu.articles");
  show(dropdownMenu);
});
projectDropBtn.addEventListener("click", function () {
  const dropdownMenu = document.querySelector(".dropdown-menu.projects");
  show(dropdownMenu);
});

/*
const dropdowns = document.querySelectorAll(".navButton");

dropdowns.forEach((dropdown) => {
  const dropbtn = dropdown.querySelector(".articleButton");
  const dropdownMenu = dropdown.querySelector(".dropdown-menu");

  dropbtn.addEventListener("click", function (event) {
    event.preventDefault();
    dropdownMenu.classList.toggle("show");
  });

  document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
      dropdownMenu.classList.remove("show");
    }
  });
});
*/
