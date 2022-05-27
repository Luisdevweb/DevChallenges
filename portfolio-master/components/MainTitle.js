import { createHtml } from "../helpers/createHtml.js";
import { createNode } from "../helpers/createNode.js";

class MainTitle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.injectStyleSheet();
  }
  connectedCallback() {
    this.title = this.getAttribute("title") ?? " ";
    this.amount = this.getAttribute("amount") ?? " ";
    this.renderHtml();
  }
  renderHtml() {
    const template = createHtml`
            <article class="article">
                <h2 class="title">${this.title} <span>(${this.amount})</span></h2>
                <div class="flex">
                  <slot></slot>
                </div>
            </article>
      `();
    const node = createNode(template);
    this.shadowRoot.appendChild(node);
  }

  injectStyleSheet() {
    const linkStyle = document.createElement("link");
    linkStyle.setAttribute("rel", "stylesheet");
    linkStyle.setAttribute("href", "./components/MainTitle.css");
    this.shadowRoot.appendChild(linkStyle);
  }
}

customElements.define("main-title", MainTitle);
