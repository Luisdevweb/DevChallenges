const navBar = document.getElementById("nav-bar");
const header = navBar.parentElement;

header.addEventListener("click", (e) => {
  if (e.target.classList.contains("icon-menu")) {
    navBar.classList.add("navbar--translate");
  }
  if (e.target.classList.contains("icon-close")) {
    navBar.classList.remove("navbar--translate");
  }
  if (e.target.classList.contains("menu__link")) {
    e.target.classList.contains("menu__link--active")
      ? e.target.classList.remove("menu__link--active")
      : e.target.classList.add("menu__link--active");
  }
});
