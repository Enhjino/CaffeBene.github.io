class HeaderComponent extends HTMLElement {
      constructor() {
        super();
        this.innerHTML = ` <style>
            header {
                  display: flex;
                  position: fixed;
                  width: 100%;
                  height: 5rem;
                  background-color: var(--color-white-1);
                  align-items: center;
                  justify-content: space-between;
                  z-index: 1000;
            
                  & img {
                        height: 4rem;
                        width: auto;
                        margin-left: 3rem;
                  }
            
            }
            
            header nav {
                  margin-right: 3rem;
            
                  & li {
                        position: relative;
                        background-color: white;
                        float: left;
                  }
            }
            
            header nav ul li a {
                  font-size: 20px;
                  line-height: 30px;
                  padding: 25px;
                  width: auto;
                  display: block;
            }
            
            header nav ul li a:hover {
                  background-color: #e1cfbd;
                  color: #745f50;
            }
            
            header nav ul li ul {
                  position: absolute;
                  width: auto;
                  display: none;
            }
            
            header nav ul li ul li {
                  width: 100%;
            }
            
            header nav ul li:hover>ul {
                  display: block;
            }
           
            </style>
            <header>
            <section>
              <a href="index.html">
                <img src="images/Background/caffebene_logo.png" alt="Caffe Bene Logo" width="100" />
              </a>
            </section>
            <section>
              <nav>
                <ul>
                  <li>
                    <a href="product.html">Бүтээгдэхүүн</a>
                    <ul>
                      <li><a href="coffee.html">Кофе</a></li>
                      <li><a href="drink.html">Уух зүйл</a></li>
                      <li><a href="dessert.html">Дессерт</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="location.html">Салбар</a>
                  </li>
                  <li>
                    <a href="franchise.html">Франчайз</a>
                  </li>
                  <li><a href="contact.html">Холбоо барих</a></li>
                </ul>
              </nav>
            </section>
        
        
          </header>
          <hr class="solid" style="position: relative; top: 5rem;">
            `;
  }
}

class FooterComponent extends HTMLElement {
      constructor() {
        super();
        this.innerHTML = `<style>
    footer {
      height: 6rem;
      z-index: 1000;
}

footer img {
      height: 4rem;
      width: auto;
}

footer ul li {
      display: inline-block;
      margin: 40px;
}

.arrow {
      display: inline-block;
      width: 15px;
      height: 15px;
      border-top: 2px solid #745F50;
      border-right: 2px solid #745F50;
}

.bottom {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      padding-top: 1rem;
}

address a {
      padding-right: 1.5rem;
}

.arrow-top {
      transform: rotate(-45deg);
      /* padding: 2rem;
      float: right; */
}

.hr.solid {
      border-top: 1px solid #745F50;
}
            </style>
            <footer>
    <a href="#"><span class="arrow arrow-top"></span></a>
    <hr class="solid" />
    <section class="bottom">
      <a href="index.html">
        <img src="images/Background/caffebene_logo.png" alt="Caffe Bene Logo" width="100" />
      </a>
      <h4>
        © Caffe Bene Mongolia Registration number : ☎
        <a href="tel:75553000">75553000</a>
        <br />
        <address>
          Bldg 5, Hunnu 2222, Khoroo 18, Khan Uul, Ulaanbaatar 17011
        </address>
      </h4>
      <address>
        <a href="https://www.instagram.com/caffebenemn/?hl=en" aria-label="caffebene instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">
            <path fill="#745f50"
              d="M8 0C5.829 0 5.556.01 4.703.048C3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7C.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297c.04.852.174 1.433.372 1.942c.205.526.478.972.923 1.417c.444.445.89.719 1.416.923c.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417c.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046c.78.035 1.204.166 1.486.275c.373.145.64.319.92.599c.28.28.453.546.598.92c.11.281.24.705.275 1.485c.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598c-.28.11-.704.24-1.485.276c-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598a2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485c-.038-.843-.046-1.096-.046-3.233c0-2.136.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486c.145-.373.319-.64.599-.92c.28-.28.546-.453.92-.598c.282-.11.705-.24 1.485-.276c.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92a.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217a4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334a2.667 2.667 0 0 1 0-5.334z" />
          </svg>
        </a>
        <a href="https://www.facebook.com/CaffeBeneMN/" aria-label="caffebene facebook">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">
            <path fill="#745f50"
              d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131c.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
          </svg>
        </a>
        <a href="https://www.youtube.com/channel/UCi5oL0rB6Sz1pmBlikioxVQ?app=desktop" aria-label="caffebene youtube">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">
            <path fill="#745f50"
              d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104l.022.26l.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105l-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006l-.087-.004l-.171-.007l-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103l.003-.052l.008-.104l.022-.26l.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007l.172-.006l.086-.003l.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
          </svg>
        </a>
        <a href="https://twitter.com/CaffeBeneMN" aria-label="caffebene twitter">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">
            <path fill="#745f50"
              d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334c0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518a3.301 3.301 0 0 0 1.447-1.817a6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429a3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218a3.203 3.203 0 0 1-.865.115a3.23 3.23 0 0 1-.614-.057a3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
          </svg>
        </a>
      </address>
    </section>
  </footer> `;
  }
}
customElements.define("header-component", HeaderComponent);
customElements.define("footer-component", FooterComponent);