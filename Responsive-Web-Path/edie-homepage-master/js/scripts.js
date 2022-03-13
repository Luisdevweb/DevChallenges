const menuIcon = document.getElementById("menu-icon");
const navMobile = document.getElementById("nav-mobile");
menuIcon.addEventListener("click", (e) => {
  if (e.target.classList.contains("menu-icon")) {
    navMobile.classList.toggle("nav-mobile--visible");
  }
});
