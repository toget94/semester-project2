import { getAddedProduct } from "./components/addFunction.js";
const products = getAddedProduct();

const productContainer = document.querySelector(".product-container");

products.forEach((product) => {
  productContainer.innerHTML += ` <section class="product">
                                        <a href="product-detail.html?id=${product.id}">
                                        <h1>Product ID:</h1>
                                        <p>${product.id}</p>
                                        <h1>${product.title}</h1>
                                        <h3>Price</h3>
                                        <p>$${product.price}</p>
                                    </section>`;
});
