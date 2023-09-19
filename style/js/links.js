// document.addEventListener("DOMContentLoaded", function () {
//   const buttons = document.querySelectorAll(".catalog__btn");
//   const blocks = document.querySelectorAll(".card__wrapper-js");
//   const footerLinks = document.querySelectorAll(".footer-link");

//   footerLinks.forEach((link) => {
//     link.addEventListener("click", function (event) {
//       event.preventDefault();

//       const targetBlockId = link.getAttribute("data-target");
//       const targetBlock = document.getElementById(targetBlockId);

//       // Скрыть все блоки контента
//       blocks.forEach((block) => {
//         block.classList.remove("active");
//       });

//       // Показать только целевой блок контента
//       targetBlock.classList.add("active");

//       // Сделать активной соответствующую кнопку
//       buttons.forEach((button) => {
//         button.classList.remove("active");
//       });
//       const correspondingButton = document.querySelector(
//         `[data-target="${targetBlockId}"]`
//       );
//       correspondingButton.classList.add("active");

//       // Выполнить плавный скролл к активному блоку
//       window.scrollTo({
//         top: targetBlock.offsetTop,
//         behavior: "smooth",
//       });
//     });
//   });

//   buttons.forEach((button) => {
//     button.addEventListener("click", function (event) {
//       event.preventDefault();

//       const targetBlockId = this.getAttribute("data-target");
//       const targetBlock = document.getElementById(targetBlockId);

//       // Скрыть все блоки контента
//       blocks.forEach((block) => {
//         block.classList.remove("active");
//       });

//       // Показать только целевой блок контента
//       targetBlock.classList.add("active");

//       // Сделать активной текущую кнопку
//       buttons.forEach((btn) => {
//         btn.classList.remove("active");
//       });
//       this.classList.add("active");
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".catalog__btn");
  const blocks = document.querySelectorAll(".card__wrapper-js");
  const footerLinks = document.querySelectorAll(".footer-link");

  // Устанавливаем класс active на первой кнопке и соответствующем блоке
  if (buttons.length > 0 && blocks.length > 0) {
    buttons[0].classList.add("active");
    blocks[0].classList.add("active");
  }

  footerLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetBlockId = link.getAttribute("data-target");
      const targetBlock = document.getElementById(targetBlockId);

      // Скрыть все блоки контента
      blocks.forEach((block) => {
        block.classList.remove("active");
      });

      // Показать только целевой блок контента
      targetBlock.classList.add("active");

      // Сделать активной соответствующую кнопку
      buttons.forEach((button) => {
        button.classList.remove("active");
      });
      const correspondingButton = document.querySelector(
        `[data-target="${targetBlockId}"]`
      );
      correspondingButton.classList.add("active");

      // Выполнить плавный скролл к активному блоку
      window.scrollTo({
        top: targetBlock.offsetTop,
        behavior: "smooth",
      });
    });
  });

  buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      const targetBlockId = this.getAttribute("data-target");
      const targetBlock = document.getElementById(targetBlockId);

      // Скрыть все блоки контента
      blocks.forEach((block) => {
        block.classList.remove("active");
      });

      // Показать только целевой блок контента
      targetBlock.classList.add("active");

      // Сделать активной текущую кнопку
      buttons.forEach((btn) => {
        btn.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
});
