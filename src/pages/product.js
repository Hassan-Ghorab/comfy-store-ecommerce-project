// global imports
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";

import { addToCart } from "../cart/setupCart.js";
import { singleProductUrl, getElement, formatPrice } from "../utils.js";

const loading = getElement(".page-loading");
const centerEl = getElement(".single-product-center");
const pageTitleEl = getElement(".page-hero-title");
const imgEl = getElement(".single-product-img");
const titleEl = getElement(".single-product-title");
const companyEl = getElement(".single-product-company");
const priceEl = getElement(".single-product-price");
const colorsEl = getElement(".single-product-colors");
const descEl = getElement(".single-product-desc");
const cartBtn = getElement(".addToCartBtn");

let productID;

window.addEventListener("load", async () => {
  const urlID = window.location.search;

  const response = await fetch(`${singleProductUrl}${urlID}`);
  if (response.status >= 200 && response.status <= 299) {
    const product = await response.json();

    const { id, fields } = product;
    productID = id;

    const { name, company, price, colors, description } = fields;
    const image = fields.image[0].thumbnails.large.url;
    document.title = `${name.toUpperCase()} | Comfy`;
    pageTitleEl.textContent = `Home / ${name}`;
    imgEl.src = image;
    titleEl.textContent = name;
    companyEl.textContent = `by ${company}`;
    priceEl.textContent = formatPrice(price);
    descEl.textContent = description;

    colors.forEach((color) => {
      const span = document.createElement("span");
      span.classList.add("product-color");
      span.style.backgroundColor = `${color}`;
      colorsEl.appendChild(span);
    });
  } else {
    centerEl.innerHTML = `
      <h2 class="error">sorry, something went wrong!</h2>
      <a href="index.html" class="btn">back home</a>
      `;
  }

  loading.style.display = "none";
});

cartBtn.addEventListener("click", () => {
  addToCart(productID);
});
