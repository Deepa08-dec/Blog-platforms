let productsDiv = document.getElementById("products");
let cart = 0;

for(let i = 1; i <= 50; i++){

    let productCard = `
    <div class="card">
        <img src="https://via.placeholder.com/150">
        <h2>Product ${i}</h2>
        <p>₹${i * 100}</p>
        <button onclick="addToCart()">Add to Cart</button>
    </div>
    `;

    productsDiv.innerHTML += productCard;
}

function addToCart(){
    cart++;
    document.getElementById("cart-count").innerText = cart;
    alert("Product Added to Cart");
}
