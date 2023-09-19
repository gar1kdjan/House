// let cartItemCount = 0;
// const cartCounterElement = document.querySelector(
//   ".header__menu-itm-cart-counter"
// );
// const addToCartBtns = document.querySelectorAll(".addToCartBtn");

// addToCartBtns.forEach((button) => {
//   button.addEventListener("click", () => {
//     cartItemCount++;
//     updateCartCounter();

//     button.textContent = "В корзине";
//     button.disabled = true;

//     setTimeout(() => {
//       button.textContent = "В корзину";
//       button.disabled = false;
//     }, 1000);
//   });

//   function updateCartCounter() {
//     cartCounterElement.textContent = cartItemCount;

//     if (cartItemCount > 0) {
//       cartCounterElement.style.display = "inline-block";
//     }
//   }
// });

let cartItemCount = 0;
const cartCounterElement = document.querySelector(
  ".header__menu-itm-cart-counter"
);
const cartCounterMobElement = document.querySelector(
  ".header__menu-itm-cart-counter-mob"
);

const addToCartBtns = document.querySelectorAll(".addToCartBtn");

addToCartBtns.forEach((button) => {
  button.addEventListener("click", () => {
    cartItemCount++;
    updateCartCounter();

    button.textContent = "В корзине";
    button.disabled = true;

    setTimeout(() => {
      button.textContent = "В корзину";
      button.disabled = false;
    }, 1000);
  });

  function updateCartCounter() {
    cartCounterElement.textContent = cartItemCount;
    cartCounterMobElement.textContent = cartItemCount; // Обновляем оба счетчика

    if (cartItemCount > 0) {
      cartCounterElement.style.display = "inline-block";
      cartCounterMobElement.style.display = "inline-block"; // Показываем оба счетчика
    }
  }
});
