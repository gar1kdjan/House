// document.addEventListener("DOMContentLoaded", function () {
//   const buttons = document.querySelectorAll(".catalog__btn");
//   const blocks = document.querySelectorAll(".card__wrapper-js");

//   buttons.forEach((button) => {
//     button.addEventListener("click", function () {
//       const targetBlock = this.getAttribute("data-target");

//       // Скрыть все блоки контента
//       blocks.forEach((block) => {
//         block.classList.remove("active");
//       });

//       // Показать только целевой блок контента
//       const activeBlock = document.getElementById(targetBlock);
//       activeBlock.classList.add("active");

//       // Добавить класс active к активной кнопке
//       buttons.forEach((btn) => {
//         btn.classList.remove("active");
//       });
//       this.classList.add("active");
//     });
//   });
// });
