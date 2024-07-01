// console.log("Index file of JS");

async function fetchCategories() {
  // this function is marked async so this will also return a promise
  const response = await fetch("https://fakestoreapi.com/products/categories");
  const data = await response.json();
  return data;
}

async function populateCategories() {
  const categories = await fetchCategories();
  const loaderBackdrop = document.getElementById("loader-backdrop");
  loaderBackdrop.style.display = "none";
  const categoryList = document.getElementById("categoryList");
  categories.forEach((category) => {
    const categoryHolder = document.createElement("div");
    const categoryLink = document.createElement("a");

    categoryLink.textContent = category; // setting the category name as the text of the anchor tag
    categoryLink.href = `productList.html?category=${category}`;
    categoryHolder.classList.add(
      "category-item",
      "d-flex",
      "align-items-center",
      "justify-content-center"
    );
    categoryHolder.appendChild(categoryLink);

    categoryList.appendChild(categoryHolder);
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  await populateCategories();
  const queryParamsObject = getQueryParams();
  let products;

  if (queryParamsObject["category"]) {
    products = await fetchProductsByCategory(queryParamsObject["category"]);
  } else {
    products = await fetchProducts();
  }

  populateProducts(products); // Populate products based on fetched data
  populateLatestProducts(products);
  removeLoader(); // Hide loader when content is loaded
});

async function fetchProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
}

async function fetchProductsByCategory(category) {
  const response = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  const data = await response.json();
  return data;
}

// Populating  products for the  
function populateProducts(products) {
  const categoryProducts = document.getElementById("categoryProducts");
  categoryProducts.innerHTML = ""; // Clear previous content
  const limitedProducts = products.slice(0, 8);

  limitedProducts.forEach((product) => {
    const productItem = document.createElement("a");
    productItem.target = "_blank";
    productItem.classList.add(
      "product-item",
      "text-decoration-none",
      "d-inline-block"
    );
    productItem.href = `productDetails.html?id=${product.id}`;

    const productImage = document.createElement("div");
    const productName = document.createElement("div");
    const productPrice = document.createElement("div");

    const imageInsideProductImage = document.createElement("img");
    imageInsideProductImage.src = product.image;

    productImage.classList.add("product-img");
    productName.classList.add("product-name", "text-center");
    productPrice.classList.add("product-price", "text-center");

    productName.textContent = product.title.substring(0, 20);
    productPrice.textContent = ` $${product.price}`;

    productImage.appendChild(imageInsideProductImage);
    productItem.appendChild(productImage);
    productItem.appendChild(productName);
    productItem.appendChild(productPrice);

    categoryProducts.appendChild(productItem);
  });
}

function populateLatestProducts(products) {
  const latestProducts = document.getElementById("latestArrivals");
  latestProducts.innerHTML = ""; // Clear previous content
  const limitedProducts = products.slice(8, 16);

  limitedProducts.forEach((product) => {
    const productItem = document.createElement("a");
    productItem.target = "_blank";
    productItem.classList.add(
      "product-item",
      "text-decoration-none",
      "d-inline-block"
    );
    productItem.href = `productDetails.html?id=${product.id}`;

    const productImage = document.createElement("div");
    const productName = document.createElement("div");
    const productPrice = document.createElement("div");

    const imageInsideProductImage = document.createElement("img");
    imageInsideProductImage.src = product.image;

    productImage.classList.add("product-img");
    productName.classList.add("product-name", "text-center");
    productPrice.classList.add("product-price", "text-center");

    productName.textContent = product.title.substring(0, 20);
    productPrice.textContent = ` $${product.price}`;

    productImage.appendChild(imageInsideProductImage);
    productItem.appendChild(productImage);
    productItem.appendChild(productName);
    productItem.appendChild(productPrice);

    latestProducts.appendChild(productItem);
  });
}


function removeLoader() {
  const loaderBackdrop = document.getElementById("loader-backdrop");
  loaderBackdrop.style.display = "none"; // Hide loader when content is loaded
}

function getQueryParams() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const params = {};
  for (let [key, value] of urlParams) {
    params[key] = value;
  }
  return params;
}
