import Product from './product.js';

let allProducts = []; 
function fetchAllProducts() {
    return fetch("/json/product.json")
        .then(response => response.json())
        .then(data => {
            allProducts = data.products; // Store all products
            return allProducts;
        })
        .catch(error => {
            console.error('Error fetching products:', error);
            return []; // Return an empty array in case of error
        });
}

function renderFilteredProducts() {
    const checkedTypes = Array.from(document.querySelectorAll('input[name="type"]:checked')).map(input => input.value);
    
    const drinkContainer = document.getElementById("drink");
    drinkContainer.innerHTML = ""; // Clear the container before rendering
    
    if (checkedTypes.length === 0) {
        // If no filter is checked, render all products
        allProducts.forEach(productData => {
            const product = new Product(productData);
            const productHTML = product.Render();
            drinkContainer.innerHTML += productHTML;
        });
    } else {
        // If filters are checked, render filtered products
        const filteredProducts = allProducts.filter(product => checkedTypes.includes(product.type));
        filteredProducts.forEach(productData => {
            const product = new Product(productData);
            const productHTML = product.Render();
           drinkContainer.innerHTML += productHTML;
        });
    }
}

// Load all products and render them when the page loads
window.addEventListener('load', () => {
    fetchAllProducts()
        .then(() => renderFilteredProducts()); // Initially render all products
});

// Add event listeners to checkboxes for filtering
document.querySelectorAll('input[name="type"]').forEach(checkbox => {
    checkbox.addEventListener('change', renderFilteredProducts);
});
