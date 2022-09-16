export function createNavMenu() {
  const { pathname } = document.location;

  console.log(pathname);

  const navContainer = document.querySelector("nav");

  navContainer.innerHTML += `<ul>
                              <li><a href="index.html" id="home-btn" class="${
                                pathname === "index.html" ? "active" : ""
                              }">Home</a></li>
                              <li><a href="products.html" id="products-btn" class="${
                                pathname === "products.html" ? "active" : ""
                              }">Products</a></li>
                              <li><a href="cart.html" id="cart-btn" class="${
                                pathname === "cart.html" ? "active" : ""
                              }">Cart</a></li>
                              <li><a href="login.html" class="to-login-page">Log In</a></li>
                            </ul>`;
}
