const productsContainer = document.getElementById("products-container");

const searchInput = document.getElementById("searchInput");

const categoryFilter = document.getElementById("categoryFilter");

function renderProducts(productList) {
  if (!productsContainer) return;

  productsContainer.innerHTML = "";

  productList.forEach((product) => {
    productsContainer.innerHTML += `

        <div class="product-card">

            <img
                src="${product.image}"
                alt="${product.name}"
                onclick="viewProduct(${product.id})"
            >

            <div class="product-info">

                <h3>${product.name}</h3>

                <p class="price">
                    ₹${product.price}
                </p>

                <button
                    class="add-cart"
                    onclick="addToCart(${product.id})"
                >
                    Add To Cart
                </button>

            </div>

        </div>

    `;
  });
}

if (productsContainer) {
  renderProducts(products);
}

if (searchInput) {
  searchInput.addEventListener("input", filterProducts);
}

if (categoryFilter) {
  categoryFilter.addEventListener("change", filterProducts);
}

function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();

  const category = categoryFilter.value;

  const filtered = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm);

    const matchesCategory = category === "all" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  renderProducts(filtered);
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const product = products.find((item) => item.id === id);

  const existing = cart.find((item) => item.id === id);

  if (existing) {
    alert("Already Added");

    return;
  }

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();

  alert("Added To Cart");
}

function updateCartCount() {
  const badge = document.getElementById("cart-count");

  if (!badge) return;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  badge.textContent = cart.length;
}

updateCartCount();
function viewProduct(id){

    window.location.href =
        `product.html?id=${id}`;
}