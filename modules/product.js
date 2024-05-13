export default class Product {
  constructor(productObj) {
    this.title = productObj.title;
    this.price = productObj.price;
    this.image = productObj.img;
  }

  Render() {
    return `
    <article class="new_product_item">
      <div class="product_image">
        <img src="${this.image}" alt="product">
        <h3 class="product_title">${this.title}</h3>
      </div>
      <div class="product_info">
        <h3 class="product_title">${this.title}</h3>
        <div >R........................${this.price.small}₮</div>
        <div >L........................${this.price.medium}₮</div>
       <div div>V........................${this.price.large}₮</div>
    </div>
    </article>`;
  }
}
