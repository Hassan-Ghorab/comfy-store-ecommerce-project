import { getElement } from "../utils.js";
import displayProducts from "../displayProducts.js";

function setupPrice(products) {
  const priceInput = getElement(".price-filter");
  const priceValue = getElement(".price-value");

  let productWithMaxPrice = products.map((product) => product.price);
  productWithMaxPrice = Math.max(...productWithMaxPrice);
  productWithMaxPrice = Math.ceil(productWithMaxPrice / 100);

  priceInput.value = productWithMaxPrice;
  priceValue.max = productWithMaxPrice;
  priceInput.min = 0;

  priceValue.textContent = `Value : $${productWithMaxPrice}`;

  priceInput.addEventListener("input", () => {
    const inputValue = priceInput.value;
    priceValue.textContent = `Value : $${inputValue}`;

    let filteredPriceProducts = products.filter(
      (product) => product.price / 100 <= inputValue
    );
    displayProducts(
      filteredPriceProducts,
      getElement(".products-container"),
      true
    );

    if (filteredPriceProducts < 1) {
      const products = getElement(".products-container");
      products.innerHTML = `<h2>sorry, no products matched your search</h2>`;
    }
  });
}

export default setupPrice;
