
import '../web-component/product-component.js';
function getCategoryFromURL() {
    try {
        const url = window.location.pathname;
        const category = url.split('/').pop().split('.')[0]; 
        return category;
      } catch (error) {
        console.error("Error getting category from URL:", error.message);
        return null; 
      }
  }


function fetchAllProducts(category) {
    return fetch("/json/product.json")
      .then((response) => response.json())
      .then((data) => {
        const filteredProducts = category ? data.products.filter(product => product.category === category) : data.products;
        console.log(filteredProducts);
        return filteredProducts;
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        return [];
      });
  }
  function renderFilteredProducts() {
    const category = getCategoryFromURL();
    const checkedTypes = Array.from(document.querySelectorAll('input[name="type"]:checked')).map((input) => input.value);
  
    const drinkContainer = document.getElementById(category); 
    drinkContainer.innerHTML = "";
  
    fetchAllProducts(category).then(filteredProducts => { 
      const productsToRender = checkedTypes.length === 0
        ? filteredProducts
        : filteredProducts.filter((product) => checkedTypes.includes(product.type));
  
      productsToRender.forEach((productData) => {
        const productComponent = document.createElement("product-component");
        productComponent.setAttribute("title", productData.title);
        productComponent.setAttribute("price", JSON.stringify(productData.price));
        productComponent.setAttribute("image", productData.img);
  
        drinkContainer.appendChild(productComponent);
      });
    });
  }

window.addEventListener("load", () => {
  fetchAllProducts().then(() => renderFilteredProducts());
});

document.querySelectorAll('input[name="type"]').forEach((checkbox) => {
  checkbox.addEventListener("change", renderFilteredProducts);
});
