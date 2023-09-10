const burgerIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const burgerMenu = document.querySelector(".header__menu");

burgerIcon.addEventListener("click", () => {
  burgerMenu.classList.add("open"); // Открываем меню
  burgerIcon.style.display = "none"; // Скрываем бургер
  closeIcon.style.display = "block"; // Отображаем иконку закрытия
});

closeIcon.addEventListener("click", () => {
  burgerMenu.classList.remove("open"); // Закрываем меню
  burgerIcon.style.display = "block"; // Отображаем бургер
  closeIcon.style.display = "none"; // Скрываем иконку закрытия
});
