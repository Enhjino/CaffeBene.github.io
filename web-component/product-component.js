class ProductComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return ["title", "price", "image"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue) {
            if (name === 'price') {
              try {
                this.price = JSON.parse(newValue);
              } catch (e) {
                console.error('Invalid JSON in price attribute:', newValue);
                this.price = {};
              }
            } else {
              this[name] = newValue;
            }
            this.render();
          }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const title = this.getAttribute("title");
    const price = this.price || {};
    const image = this.getAttribute("image");

    this.shadowRoot.innerHTML = ` 
            <style> 
            .new_product_item {
                  display: flex;
                  flex-direction: column;
                  justify-content: space-evenly;
                  align-items: center;
                  width: 12rem;
                  height: 19rem;
                  margin: 15px;
                  box-sizing: border-box;
                  float: center;
                  text-align: center;
                  box-sizing: border-box;
                  border: 1px solid #ddb892;
                  border-radius: 12px;
                  cursor: pointer;
                  box-shadow: 0 14px 28-x rgba(0, 0, 0, 0.25);
                  z-index: 10;
              }   
                .new_product_item .product_image {
                  position: relative;
                  overflow: hidden;
                }
                
                .new_product_item img {
                  display: block;
                  width: 100%;
                  height: auto;
                  transition: transform 0.3s ease;
                }
                
                .new_product_item  .product_info {
                  position: relative;
                  overflow: hidden;
                  width: 100%;
                  background-color: rgba(255, 255, 255, 0.9);
                  padding: 20px;
                  border-radius: 5px;
                  display: none;
                  text-align: center;
                }
                
                .new_product_item:hover .product_info {
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  width: 100%;
                  height: 100%;
                }
                
                .new_product_item:hover img {
                  transform: scale(1.05);
                  width: 100%;
                }
                
                .new_product_item .product_title {
                  margin: 0;
                  font-size: 14px;
                }
                .new_product_item:hover .product_image .product_title {
                  visibility: hidden;
                }
            </style>
            <article class="new_product_item">
            <div class="product_image">
              <img src="${image}" alt="product">
              <h3 class="product_title">${title}</h3>
            </div>
            <div class="product_info">
              <h3 class="product_title">${title}</h3>
              <div class="product_price">R........................${price.smallPrice}₮</div>
              <div class="product_price">L........................${price.mediumPrice}₮</div>
              <div class="product_price">V........................${price.largePrice}₮</div>
            </div>
          </article>
            `;
  }
}
customElements.define("product-component", ProductComponent);

export default ProductComponent;
