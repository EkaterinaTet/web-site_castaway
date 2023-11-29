const menuBtn = document.querySelector(".menu__btn");
const headerMenu = document.querySelector(".header-menu");
menuBtn.addEventListener("click", () => {
  headerMenu.classList.toggle("header-menu--active");
});

const email = document.getElementById("mail");
email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Incorrect email");
  } else {
    email.setCustomValidity("");
  }
});
