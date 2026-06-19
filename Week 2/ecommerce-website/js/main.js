const productsContainer = document.getElementById("products-container");

if(productsContainer){

    products.forEach((product)=>{

        productsContainer.innerHTML += `
            <div class="product-card">

                <img src="${product.image}" alt="${product.name}">

                <div class="product-info">

                    <h3>${product.name}</h3>

                    <p class="price">₹${product.price}</p>

                    <button class="add-cart" onclick="addToCart(${product.id})">
                        Add To Cart
                    </button>

                </div>

            </div>
        `;
    });

}

function addToCart(id){

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    const product =
        products.find((item)=>item.id === id);

    const existing =
        cart.find((item)=>item.id === id);

    if(existing){

        alert("Already Added To Cart");

        return;
    }

    cart.push(product);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert("Product Added To Cart");
}