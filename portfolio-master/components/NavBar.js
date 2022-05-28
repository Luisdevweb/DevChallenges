import { createHtml } from "../helpers/createHtml.js";
import { createNode } from "../helpers/createNode.js";

class NavBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.injectStyleSheet();
  }
  connectedCallback() {
    this.renderHtml();
  }
  renderHtml() {
    const template = createHtml`
            <nav class="navbar">
              <a href="#" class="link"><img src="../assets/images/arrow-back.svg" alt="arrow back" class="icon"></a>
              <a href="#" class="link">1</a>
              <a href="#" class="link">2</a>
              <a href="#" class="link">3</a>
              <img src="../assets/images/more-horiz.svg" alt="three points horizontal" class="icon-more">
              <a href="#" class="link">9</a>
              <a href="#" class="link">10</a>
              <a href="#" class="link"><img src="../assets/images/arrow-forward.svg" alt="arrow forward" class="icon"></a>
            </nav>
      `();
    const node = createNode(template);
    this.shadowRoot.appendChild(node);
  }

  injectStyleSheet() {
    const linkStyle = document.createElement("link");
    linkStyle.setAttribute("rel", "stylesheet");
    linkStyle.setAttribute("href", "./components/NavBar.css");
    this.shadowRoot.appendChild(linkStyle);
  }
}

customElements.define("nav-bar", NavBar);
