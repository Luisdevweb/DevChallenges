import { createHtml } from "../helpers/createHtml.js";
import { createNode } from "../helpers/createNode.js";

class TechButton extends HTMLElement {
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
              <button type="button" class="button" >
                <slot></slot>
              </button>
      `();
    const node = createNode(template);
    this.shadowRoot.appendChild(node);
  }

  injectStyleSheet() {
    const linkStyle = document.createElement("link");
    linkStyle.setAttribute("rel", "stylesheet");
    linkStyle.setAttribute("href", "./components/TechButton.css");
    this.shadowRoot.appendChild(linkStyle);
  }
}

customElements.define("tech-button", TechButton);
