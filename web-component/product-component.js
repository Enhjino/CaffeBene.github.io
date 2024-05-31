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
              width: var(--product-width);
              height: var(--product-height);
              margin: var(--margin-size-1);
              box-sizing: border-box;
              text-align: center;
              border: var(--default-border-style);
              border-radius: var(--default-border-radius);
              cursor: pointer;
              z-index: 10;
          }
          
          .new_product_item .product_image {
              position: relative;
              overflow: hidden;
          }
          
          .new_product_item img {
              display: block;
              width: var(--main-width);
              height: auto;
              transition: transform 0.3s ease;
          }
          
          .new_product_item .product_info {
              position: relative;
              overflow: hidden;
              background-color: var(--form-bg-color);
              padding: var(--padding-size-1);
              border-radius: var(--default-border-radius);
              display: none;
              text-align: center;
          }
          
          .new_product_item:hover .product_info {
              display: flex;
              flex-direction: column;
              justify-content: center;
          }
          
          .new_product_item:hover img {
              transform: scale(1.05);
          }
          
          .new_product_item .product_title {
              margin: var(--main-margin);
              font-size: var(--font-size-1);
          }
          
          .new_product_item:hover .product_image .product_title {
              visibility: hidden;
          }
          @media (prefers-color-scheme: dark) {
            .new_product_item {
              color : var( --dark-font-color);
              border: var(--default-border-style);
              background-color: var(--dark-bg-color);
            }
            .new_product_item:hover .product_info {
              color : var( --color-white);
              background-color: var(--dark-info-color);
            }
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
