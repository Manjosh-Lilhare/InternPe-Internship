let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cart-container");
const totalElement = document.getElementById("cart-total");

function renderCart(){

    if(cart.length === 0){

        cartContainer.innerHTML = `
            <div class="empty-cart">
                <h3>Your cart is empty</h3>
                <a href="products.html" class="btn">
                    Continue Shopping
                </a>
            </div>
        `;

        totalElement.textContent = 0;

        return;
    }

    let total = 0;

    cartContainer.innerHTML = "";

    cart.forEach((item,index)=>{

        total += item.price;

        cartContainer.innerHTML += `
            <div class="cart-item">

                <img src="${item.image}" alt="${item.name}">

                <div class="cart-details">
                    <h3>${item.name}</h3>
                    <p>₹${item.price}</p>
                </div>

                <button
                    class="remove-btn"
                    onclick="removeItem(${index})">
                    Remove
                </button>

            </div>
        `;
    });

    totalElement.textContent = total;
}

function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    renderCart();
}

renderCart();