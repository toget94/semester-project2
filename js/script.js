// const url = "http://localhost:1337/products";
// const productContainer = document.querySelector(".product-container");

// async function getProducts() {
//   try {
//     const response = await fetch(url);
//     const getResults = await response.json();

//     postContainer.innerHTML = "";

//     createHTML(getResults);
//   } catch (error) {
//     console.log(error);
//   }

//   console.log(getProducts);
// }

// getProducts();

// function createHTML(products) {
//   products.forEach((product) => {
//     productContainer.innerHTML += `<div class="product">
//                                           <a href="index.html">
//                                           <img src="${product.image.formats.thumbnail.url}"/>
//                                           </a>
//                                           <h4>${product.title}</h4>
//                                           <p>$${product.price}</p>
//                                       </div>`;
//   });
// }
