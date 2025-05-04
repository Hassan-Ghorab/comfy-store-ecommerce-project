import { getElement } from "../utils.js";
import displayProducts from "../displayProducts.js";

function setupSearch(products) {
  const searchInput = getElement(".search-input");
  searchInput.addEventListener("input", () => {
    const inputValue = searchInput.value;
    console.log(inputValue);
    if (inputValue) {
      const filteredProducts = products.filter((product) => {
        let { name } = product;
        name = name.toLowerCase();
        if (name.startsWith(inputValue)) {
          return product;
        }
      });
      displayProducts(
        filteredProducts,
        getElement(".products-container"),
        true
      );

      if (filteredProducts.length < 1) {
        const products = getElement(".products-container");
        products.innerHTML = `<h2 class="filter-error">sorry, no product matched your search!</h2>`;
      }
    } else {
      displayProducts(products, getElement(".products-container"), true);
    }
  });
}

export default setupSearch;
