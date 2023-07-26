let cartItemCount = 0;
const cartCounterElement = document.querySelector(
  ".header__menu-itm-cart-counter"
);
const addToCartBtns = document.querySelectorAll(".addToCartBtn");

// Обнуляем значение счетчика при загрузке страницы
cartItemCount = 0;
updateCartCounter();

addToCartBtns.forEach((button) => {
  button.addEventListener("click", () => {
    cartItemCount++;
    updateCartCounter();
  });
});

function updateCartCounter() {
  cartCounterElement.textContent = cartItemCount;

  // Скрываем элемент счетчика, если значение равно нулю
  if (cartItemCount === 0) {
    cartCounterElement.style.display = "none";
  } else {
    cartCounterElement.style.display = "inline-block";
  }
}
