import { getElement } from "../utils.js";
import displayProducts from "../displayProducts.js";

function setupCompanies(products) {
  // Create a unique list of companies, including "all"
  let companies = [
    "all",
    ...new Set(products.map((product) => product.company)),
  ];

  const companiesBtnsContainer = getElement(".companies");

  // Generate the HTML for company buttons
  companiesBtnsContainer.innerHTML = companies
    .map((btn) => {
      return `<button class="company-btn">${btn}</button>`;
    })
    .join("");

  // Set up event listener for company button clicks
  companiesBtnsContainer.addEventListener("click", (e) => {
    const element = e.target;
    if (element.classList.contains("company-btn")) {
      if (element.textContent === "all") {
        displayProducts(products, getElement(".products-container"), true);
      } else {
        const filteredCompanies = products.filter(
          (product) => product.company === element.textContent
        );
        displayProducts(
          filteredCompanies,
          getElement(".products-container"),
          true
        );
      }
    }
  });
}

export default setupCompanies;
