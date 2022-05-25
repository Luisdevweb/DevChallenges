import { createHtml } from "../helpers/createHtml.js";
import { createNode } from "../helpers/createNode.js";

class Hobbies extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.injectStyleSheet();
  }
  connectedCallback() {
    this.picture = this.getAttribute("picture") ?? " ";
    this.hobbie = this.getAttribute("hobbie") ?? " ";
    this.content = this.getAttribute("content") ?? " ";
    this.renderHtml();
  }
  renderHtml() {
    const template = createHtml`
                <article class="card">
                    <img class="picture" src=${this.picture} alt=${this.hobbie}>
                    <h4 class="hobbie">${this.hobbie}</h4>
                    <p class="info">${this.content}</p>
                </article>
      `();
    const node = createNode(template);
    this.shadowRoot.appendChild(node);
  }

  injectStyleSheet() {
    const linkStyle = document.createElement("link");
    linkStyle.setAttribute("rel", "stylesheet");
    linkStyle.setAttribute("href", "./components/Hobbies.css");
    this.shadowRoot.appendChild(linkStyle);
  }
}

customElements.define("my-hobbies", Hobbies);
