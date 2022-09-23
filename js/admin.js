import displayMessage from "./components/displayMessage.js";
import createMenu from "./components/createNavMenu.js";
import { getToken } from "./data/storage.js";
import { baseUrl } from "./data/baseUrl.js";

createMenu();

const form = document.querySelector("#addForm");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const message = document.querySelector(".message-container");

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value);
  const descriptionValue = description.value.trim();

  if (
    titleValue.length === 0 ||
    priceValue.length === 0 ||
    isNaN(priceValue) ||
    descriptionValue.length === 0
  ) {
    return displayMessage(
      "error",
      "Please add valid values",
      ".message-container"
    );
  }

  addProduct(titleValue, priceValue, descriptionValue);
}

async function addProduct(title, price, description) {
  const url = baseUrl + "products";

  const data = JSON.stringify({
    title: title,
    price: price,
    description: description,
  });
  const token = getToken();

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
