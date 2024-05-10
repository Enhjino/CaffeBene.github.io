import Product from './product.js';

let allProducts = []; 
function fetchAllProducts() {
    return fetch("/json/product.json")
        .then(response => response.json())
        .then(data => {
            allProducts = data.products; 
            return allProducts;
        })
        .catch(error => {
            console.error('Error fetching products:', error);
            return [];
        });
}

function renderFilteredProducts() {
    const checkedTypes = Array.from(document.querySelectorAll('input[name="type"]:checked')).map(input => input.value);
    
    const drinkContainer = document.getElementById("drink");
    drinkContainer.innerHTML = ""; 
    
    if (checkedTypes.length === 0) {
        allProducts.forEach(productData => {
            const product = new Product(productData);
            const productHTML = product.Render();
            drinkContainer.innerHTML += productHTML;
        });
    } else {
        const filteredProducts = allProducts.filter(product => checkedTypes.includes(product.type));
        filteredProducts.forEach(productData => {
            const product = new Product(productData);
            const productHTML = product.Render();
           drinkContainer.innerHTML += productHTML;
        });
    }
}

window.addEventListener('load', () => {
    fetchAllProducts()
        .then(() => renderFilteredProducts()); 
});

document.querySelectorAll('input[name="type"]').forEach(checkbox => {
    checkbox.addEventListener('change', renderFilteredProducts);
});
