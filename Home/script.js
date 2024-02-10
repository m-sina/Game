// start nav
const openMenu = document.querySelector("#menu-icon");
const burgerMenu = document.querySelector("#under-menu");

const closeMenu = document.querySelector("#close-nav-menu");

openMenu.addEventListener("click", () => {
  burgerMenu.classList.add("show-under-menu");
});
closeMenu.addEventListener("click", () => {
  burgerMenu.classList.remove("show-under-menu");
});
// end nav