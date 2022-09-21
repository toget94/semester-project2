import { baseUrl } from "./data/baseUrl.js";
const productContainer = document.querySelector(".product-container");
const products = baseUrl + "products";

async function getProducts() {
  try {
    const response = await fetch(products);
    const getResults = await response.json();

    productContainer.innerHTML = "";

    createHTML(getResults);
  } catch (error) {
    console.log(error);
  }
}

getProducts();

function createHTML(products) {
  products.forEach((product) => {
    productContainer.innerHTML += `<div class="product">
                                      <a href="product-detail.html?id=${product.id}">
                                      <img src="${product.image.url}">
                                      </a>
                                      <div class="name-price">
                                        <h4>${product.title}</h4>
                                        <p>Price: ${product.price}kr</p>
                                      </div>
                                  </div>`;
  });
}
