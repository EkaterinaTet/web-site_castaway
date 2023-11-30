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

//popup
let popupBg = document.querySelector(".popup__bg"); // Фон попап окна
let popup = document.querySelector(".popup"); // Само окно
let openPopupButtons = document.querySelectorAll(".open-popup"); // Кнопки для показа окна
let closePopupButton = document.querySelector(".close-popup"); // Кнопка для скрытия окна

openPopupButtons.forEach((a) => {
  // Перебираю все кнопки
  a.addEventListener("click", (e) => {
    // Для каждой вешаю обработчик событий на клик
    e.preventDefault(); // Предотвращаю дефолтное поведение браузера
    popupBg.classList.add("active"); // Добавляю класс 'active' для фона
    popup.classList.add("active"); // И для самого окна
  });
});

closePopupButton.addEventListener("click", () => {
  // Вешаю обработчик на крестик
  popupBg.classList.remove("active"); // Убираю активный класс с фона
  popup.classList.remove("active"); // И с окна
});

document.addEventListener("click", (e) => {
  // Вешаю обработчик на весь документ
  if (e.target === popupBg) {
    // Если цель клика - фон, то:
    popupBg.classList.remove("active"); // Убираю активный класс с фона
    popup.classList.remove("active"); // И с окна
  }
});
