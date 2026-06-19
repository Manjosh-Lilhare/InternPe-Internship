const params = new URLSearchParams(window.location.search);

const productId = Number(params.get("id"));

const product = products.find((item) => item.id === productId);

const container = document.getElementById("product-details");

if (product) {
  container.innerHTML = `

        <div class="product-view">

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>

            <div class="product-content">

                <h1>
                    ${product.name}
                </h1>

                <div class="rating">
                    ⭐⭐⭐⭐⭐
                </div>

                <p class="detail-price">
                    ₹${product.price}
                </p>

                <p class="description">

                    Premium quality product
                    available exclusively
                    on MyEcom.

                </p>

                <div class="product-actions">

                    <button
                        class="add-cart"
                        onclick="addToCart(${product.id})"
                    >
                        Add To Cart
                    </button>

                    <button
    class="buy-now"
    onclick="buyNow(${product.id})"
>
    Buy Now
</button>

                </div>

            </div>

        </div>

    `;
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const item = products.find((product) => product.id === id);

  cart.push(item);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added To Cart");
}
function buyNow(id){

    const selectedProduct =
        products.find((item)=>
            item.id === id
        );

    localStorage.setItem(
        "checkoutItem",
        JSON.stringify(selectedProduct)
    );

    window.location.href =
        "checkout.html";
}