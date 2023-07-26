const buttons = document.querySelectorAll(".card__btn");

buttons.forEach((button) => {
  button.addEventListener("mousedown", () => {
    button.classList.add("clicked");
  });

  button.addEventListener("mouseup", () => {
    button.classList.remove("clicked");
  });
});
