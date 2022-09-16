import { getAddedProduct } from "./components/addFunction.js";
import { createNavMenu } from "./components/createNavMenu.js";
const productContainer = document.querySelector(".detail-container");
const addedProduct = getAddedProduct();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "http://localhost:1337/products/" + id;

createNavMenu();

async function getProduct() {
  const response = await fetch(url);
  const product = await response.json();

  let cssClass = "add-btn";

  const doesProductExist = addedProduct.find(function (added) {
    console.log(added);

    return parseInt(added.id) === product.id;
  });

  console.log(doesProductExist);

  if (doesProductExist) {
    cssClass = "added-btn";
  }

  function createHtml(product) {
    productContainer.innerHTML = `<section class="image">
                                      <img src="${product.image.url}">
                                    </section>
                                    <section class="product">
                                      <h1>${product.title}</h1>
                                      <h3>Details</h3>
                                      <p>${product.description}</p>
                                      <h3>Price</h3>
                                      <p>$${product.price}</p>
                                      <h4 class="add-btn" data-id="${product.id}" data-name="${product.title}">Add to cart</h4>
                                    </section>`;
  }

  createHtml(product);

  const addButton = document.querySelectorAll(".product .add-btn");

  addButton.forEach((button) => {
    button.addEventListener("click", buttonClick);
  });

  function buttonClick(event) {
    this.classList.toggle("add-btn");
    this.classList.toggle("added-btn");

    const id = this.dataset.id;
    const name = this.dataset.title;

    const currentlyAdded = getAddedProduct();

    const productExist = currentlyAdded.find(function (added) {
      return added.id === id;
    });

    if (productExist === undefined) {
      const item = { id: id, name: name };

      currentlyAdded.push(item);

      saveAdded(currentlyAdded);
    } else {
      const newAdded = currentlyAdded.filter((added) => added.id !== id);
      saveAdded(newAdded);
    }
  }

  function getAddedProduct() {
    const added = localStorage.getItem("addedProduct");

    if (added === null) {
      return [];
    } else {
      return JSON.parse(added);
    }
  }

  function saveAdded(added) {
    localStorage.setItem("addedProduct", JSON.stringify(added));
  }
}

getProduct();

// import products from "./data/productList.js";
// import { getAddedProduct } from "./components/addFunction.js";

// const queryString = document.location.search;
// const params = new URLSearchParams(queryString);
// const id = params.get("id");

// const specificProduct = products() + id;

// const productContainer = document.querySelector(".detail-container");

// const addedProduct = getAddedProduct();

// specificProduct.forEach((product) => {
//   let cssClass = "add-btn";

//   const doesProductExist = addedProduct.find(function (added) {
//     console.log(added);

//     return parseInt(added.id) === product.id;
//   });

//   if (doesProductExist) {
//     cssClass = "added-btn";
//   }

//   productContainer.innerHTML = `<section class="image">
//                                     <img src="${product.image.url}">
//                                   </section>
//                                   <section class="product">
//                                      <h1>${product.title}</h1>
//                                      <h3>Details</h3>
//                                      <p>${product.description}</p>
//                                      <h3>Price</h3>
//                                      <p>$${product.price}</p>
//                                      <h4 class="add-btn" data-id="${product.id}" data-name="${product.title}">Add to cart</h4>
//                                   </section>`;
// });

// const addButton = document.querySelectorAll(".product .add-btn");

// addButton.forEach((button) => {
//   button.addEventListener("click", handleClick);
// });

// function handleClick(event) {
//   this.classList.toggle("add-btn");
//   //this.classList.toggle("added-btn");

//   const id = this.dataset.id;
//   const name = this.dataset.title;

//   const currentlyAdded = getAddedProduct();

//   const productExists = currentlyAdded.find((added) => {
//     return added.id === id;
//   });

//   if (productExists === undefined) {
//     const product = { id: id, name: name };
//     currentlyAdded.push(product);
//     saveAddedProduct(currentlyAdded);
//   } else {
//     const newAdded = currentlyAdded.filter((added) => added.id !== id);
//     saveAddedProduct(newAdded);
//   }
// }

// function saveAddedProduct(added) {
//   localStorage.setItem("addedProduct", JSON.stringify(added));
// }
