// import Product from './product.js';
// //URL zadlah

// console.log("Search:", document.location.search);

// const usp = new URLSearchParams(document.location.search);
// const category = usp.get("category");
// const type = usp.get("type");

// console.log("Category:", category);
// console.log("Type:", type);



// fetch("/json/product.json")
//     .then(result => result.json())
//     .then(resultObj => { 

//         const rawCoffee = resultObj.products;
//         const coffee = rawCoffee.filter(product => product.type == type)
//         const coffeeHTMLArray = coffee.map(productObj =>
//         { 
//             const product = new Product(productObj);
//             return product.Render();
//         })
//         const coffeeHTML = coffeeHTMLArray.reduce((prev, current) => prev + current);

//         document.getElementById("coffee").innerHTML = coffeeHTML;
// })

import Product from './product.js';

let allProducts = []; // Variable to store all products initially

// Function to fetch all products from the JSON file
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

// Function to render products based on applied filters
function renderFilteredProducts() {
    const checkedTypes = Array.from(document.querySelectorAll('input[name="type"]:checked')).map(input => input.value);
    
    const coffeeContainer = document.getElementById("coffee");
    coffeeContainer.innerHTML = ""; // Clear the container before rendering
    
    if (checkedTypes.length === 0) {
        // If no filter is checked, render all products
        allProducts.forEach(productData => {
            const product = new Product(productData);
            const productHTML = product.Render();
            coffeeContainer.innerHTML += productHTML;
        });
    } else {
        // If filters are checked, render filtered products
        const filteredProducts = allProducts.filter(product => checkedTypes.includes(product.type));
        filteredProducts.forEach(productData => {
            const product = new Product(productData);
            const productHTML = product.Render();
            coffeeContainer.innerHTML += productHTML;
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
