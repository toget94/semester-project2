import { baseUrl } from "./data/baseUrl.js";
//import { createNavMenu } from "./components/createNavMenu.js";
const bannerUrl = baseUrl + "home";
const productsUrl = baseUrl + "products";
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
  try {
    const response2 = await fetch(productsUrl);
    const products = await response2.json();

    arrivalsContainer.innerHTML = "";

    createProductHTML(products);

    function createProductHTML(products) {
      for (let i = 0; i < products.length; i++) {
        if (i === 2) {
          break;
        }

        arrivalsContainer.innerHTML += `<div class="product">
                                           <a href="product-detail.html?id=${products[i].id}">
                                              <img src="${products[i].image.formats.medium.url}">
                                           </a>
                                           <div class="name-price">
                                              <h4>${products[i].title}</h4>
                                              <p>Price: $${products[i].price}</p>
                                           </div>
                                        </div>`;
      }
    }
  } catch (error) {
    console.log(error);
  }
}

getProducts();
