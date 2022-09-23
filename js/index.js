import { baseUrl } from "./data/baseUrl.js";
// import { products } from "../data/productList";
const bannerUrl = baseUrl + "home";
const products = baseUrl + "products";
const bannerContainer = document.querySelector(".banner-container");
const arrivalsContainer = document.querySelector(".arrivals-container");

//createNavMenu();

async function getBanner() {
  try {
    const response = await fetch(bannerUrl);
    const json = await response.json();

    function createHtml(banner) {
      bannerContainer.innerHTML = `<div class="hero-banner">
                                        <img src="${banner.hero_banner.formats.medium.url}">
                                        <div>
                                        <h1 class="need-shoes">Need shoes?</h1>
                                        <h1 class="we-got-them">We got them</h1>
                                        </div>
                                   </div>`;
    }

    createHtml(json);
  } catch (error) {
    console.log(error);
  }
}

getBanner();

async function getProducts() {
  const response = await fetch(products);
  const product = await response.json();

  let html = "";

  for (let i = 0; i < product.length; i++) {
    console.log(product[i].featured);

    html += `<div class="product">
              <a href="product-detail.html?id=${product[i].id}">
                  <img src="${product[i].image.formats.medium.url}">
              </a>
              <div class="name-price">
                <h4>${product[i].title}</h4>
                <p>Price: $${product[i].price}</p>
              </div>
            </div>`;

    if (product[i].featured === true) {
      return (arrivalsContainer.innerHTML = html);
    }
  }
}

getProducts();

// async function getProducts() {
//   try {
//     const response2 = await fetch(productsUrl);
//     const products = await response2.json();

//     arrivalsContainer.innerHTML = "";

//     createProductHTML(products);

//     function createProductHTML(products) {
//       for (let i = 0; i < products.length; i++) {
//         if (i === 2) {
//           break;
//         }

//         arrivalsContainer.innerHTML += `<div class="product">
//                                            <a href="product-detail.html?id=${products[i].id}">
//                                               <img src="${products[i].image.formats.medium.url}">
//                                            </a>
//                                            <div class="name-price">
//                                               <h4>${products[i].title}</h4>
//                                               <p>Price: $${products[i].price}</p>
//                                            </div>
//                                         </div>`;
//       }
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// getProducts();
