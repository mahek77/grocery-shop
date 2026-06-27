// Shopping Cart Functionality
let cart = [];

// Function to add items to the cart
function addToCart(product) {
    const existingProduct = cart.find(item => item.name === product.name);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    alert(`${product.name} has been added to your cart!`);
}

// Function to view cart contents
function viewCart() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
    } else {
        let cartDetails = "Your Cart:\n";
        cart.forEach(item => {
            cartDetails += `${item.name} - Quantity: ${item.quantity}\n`;
        });
        alert(cartDetails);
    }
}

// Function to clear the cart
function clearCart() {
    cart = [];
    alert("Your cart has been cleared.");
}