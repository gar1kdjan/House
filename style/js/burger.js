const burgerIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const burgerMenu = document.querySelector(".header__menu");

// Функция для закрытия меню
function closeMenu() {
  burgerMenu.classList.remove("open"); // Закрываем меню
  burgerIcon.style.display = "block"; // Отображаем бургер
  closeIcon.style.display = "none"; // Скрываем иконку закрытия
}

burgerIcon.addEventListener("click", () => {
  burgerMenu.classList.add("open"); // Открываем меню
  burgerIcon.style.display = "none"; // Скрываем бургер
  closeIcon.style.display = "block"; // Отображаем иконку закрытия
});

closeIcon.addEventListener("click", closeMenu);

// Добавляем обработчики события на все ссылки в меню
const menuLinks = document.querySelectorAll(".header__menu a");
menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
