// Task 2: Add Event Listener for Product Selection

// Get references to the HTML elements
const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');
const placeOrderButton = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');

// Task 3: Calculate Total Price Dynamically

// Function to calculate and update total price
function updateTotalPrice() {
    const productPrice = parseFloat(productSelector.value); // Get selected product price
    const quantity = parseInt(quantityInput.value); // Get quantity from input field
    const totalPrice = productPrice * quantity; // Calculate total price
    
    totalPriceElement.textContent = totalPrice.toFixed(2); // Update the total price in the UI
}

// Add event listeners for dynamic updates
productSelector.addEventListener('change', updateTotalPrice); // Update when product is changed
quantityInput.addEventListener('input', updateTotalPrice); // Update when quantity is changed

// Task 4: Handle Order Submission

// Event listener to handle order submission
placeOrderButton.addEventListener('click', function() {
    const selectedProduct = productSelector.options[productSelector.selectedIndex].text.split(' - ')[0]; // Get selected product name
    const quantity = quantityInput.value; // Get quantity
    const totalPrice = totalPriceElement.textContent; // Get total price from UI
    
    // Display order summary in the UI
    orderSummary.textContent = `You ordered ${quantity} of ${selectedProduct}. Total price: $${totalPrice}`;
});