import { getUser } from "../data/storage";

export default function createMenu() {
  const { pathname } = document.location;
  const container = document.querySelector(".menu-container");
  const username = getUser();

  let authLink = `<a href="login.html" class="${
    pathname === "/login.html" ? "active" : ""
  }">Login</a>`;

  if (username) {
    authLink = `<a href="admin.html" class="${
      pathname === "/admin.html" ? "active" : ""
    }">Add Product</a>
                    <span>Hi ${username}</span>`;
  }

  console.log(username);

  container.innerHTML = `<div class="menu">
                                <a href="/" class="${
                                  pathname === "/" || pathname === "/index.html"
                                    ? "active"
                                    : ""
                                }">Home</a>
                                ${authLink}
                        </div>`;
}
