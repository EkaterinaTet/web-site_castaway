const menuBtn = document.querySelector(".menu__btn");
const headerMenu = document.querySelector(".header-menu");
menuBtn.addEventListener("click", () => {
  headerMenu.classList.toggle("header-menu--active");
});
