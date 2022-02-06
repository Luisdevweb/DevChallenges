const navBar = document.getElementById("nav-bar");
const header = navBar.parentElement;
const menu = document.getElementById("menu");
const menuItems = document.querySelectorAll(".menu__item");
header.addEventListener("click", (e) => {
  if (e.target.classList.contains("icon-menu")) {
    navBar.classList.add("navbar-mobile--translate");
  }
  if (e.target.classList.contains("icon-close")) {
    navBar.classList.remove("navbar-mobile--translate");
  }
});
