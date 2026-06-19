const summary =
    document.getElementById("order-summary");

const buyNowItem =
    JSON.parse(
        localStorage.getItem("checkoutItem")
    );

const cartItems =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];

let total = 0;

if(buyNowItem){

    total = buyNowItem.price;

    summary.innerHTML = `

        <h2>Order Summary</h2>

        <img
            src="${buyNowItem.image}"
            class="summary-image"
            alt="${buyNowItem.name}"
        >

        <h3>${buyNowItem.name}</h3>

        <p>₹${buyNowItem.price}</p>

        <hr>

        <h2>Total: ₹${total}</h2>

    `;

}else if(cartItems.length > 0){

    summary.innerHTML =
        "<h2>Order Summary</h2>";

    cartItems.forEach((item)=>{

        total += item.price;

        summary.innerHTML += `

            <div class="checkout-item">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                    class="checkout-thumb"
                >

                <div>

                    <h4>${item.name}</h4>

                    <p>₹${item.price}</p>

                </div>

            </div>

        `;
    });

    summary.innerHTML += `

        <hr>

        <h2>Total: ₹${total}</h2>

    `;
}

function placeOrder(){

    alert(
        "Order Placed Successfully!"
    );

    localStorage.removeItem(
        "checkoutItem"
    );

    localStorage.removeItem(
        "cart"
    );

    window.location.href =
        "index.html";
}