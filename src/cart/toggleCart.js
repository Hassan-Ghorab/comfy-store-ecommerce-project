import { getElement } from "../utils.js";

const toggleCart = getElement(".toggle-cart");
const cart = getElement(".cart-overlay");
const cartClose = getElement(".cart-close");

toggleCart.addEventListener("click", openCart);

cartClose.addEventListener("click", () => {
  cart.classList.remove("show");
});

export function openCart() {
  cart.classList.add("show");
}
