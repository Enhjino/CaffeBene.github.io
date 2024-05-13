import Product from '../modules/product.js';

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
    
    const coffeeContainer = document.getElementById("coffee");
    coffeeContainer.innerHTML = "";
    
    if (checkedTypes.length === 0) {
       
        allProducts.forEach(productData => {
            const product = new Product(productData);
            const productHTML = product.Render();
            coffeeContainer.innerHTML += productHTML;
        });
    } else {
        const filteredProducts = allProducts.filter(product => checkedTypes.includes(product.type));
        filteredProducts.forEach(productData => {
            const product = new Product(productData);
            const productHTML = product.Render();
            coffeeContainer.innerHTML += productHTML;
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
