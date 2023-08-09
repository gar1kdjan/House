// const footerLinks = document.querySelectorAll(".footer-link");

// footerLinks.forEach((link) => {
//   link.addEventListener("click", function (event) {
//     event.preventDefault();

//     const targetId = link.getAttribute("data-target");
//     const targetBlock = document.getElementById(targetId);

//     if (targetBlock) {
//       // Скрыть все блоки контента
//       const contentBlocks = document.querySelectorAll(".content-block");
//       contentBlocks.forEach((block) => {
//         block.style.display = "none";
//       });

//       // Показать выбранный блок контента
//       targetBlock.style.display = "grid";

//       // Плавный скролл к выбранному блоку
//       window.scrollTo({
//         top: targetBlock.offsetTop,
//         behavior: "smooth",
//       });
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".catalog__btn");
  const blocks = document.querySelectorAll(".card__wrapper-js");
  const footerLinks = document.querySelectorAll(".footer-link");

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

      // Выполнить плавный скролл к активному блоку
      window.scrollTo({
        top: targetBlock.offsetTop,
        behavior: "smooth",
      });
    });
  });
});
