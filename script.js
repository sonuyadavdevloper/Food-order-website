const hamburgerIcon = document.querySelector(".hamburger-menu-container");
const headerContent = document.querySelector(".header-content");
const closeIcon = document.querySelector(".close-icon");
const nav = document.querySelector("nav");
const gototopicon = document.querySelector(".go-to-top");

hamburgerIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  headerContent.classList.add("menu-open");
});

nav.addEventListener("click", (e) => {
  e.stopPropagation();
});

closeIcon.addEventListener("click", () => {
  headerContent.classList.remove("menu-open");
});

window.addEventListener("click", () => {
  headerContent.classList.remove("menu-open");
});

gototopicon.addEventListener("click", (e) => {
  document.querySelector("body > div").scrollTo(0, 0);
});