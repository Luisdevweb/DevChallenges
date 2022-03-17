const header = document.getElementById("home");
const navMobile = document.getElementById("nav-mobile");
header.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("menu-icon") ||
    e.target.classList.contains("menu__link")
  ) {
    navMobile.classList.toggle("nav-mobile--visible");
  }
});
