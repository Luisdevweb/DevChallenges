import { createHtml } from "../helpers/createHtml.js";
import { createNode } from "../helpers/createNode.js";

class FrontendSkill extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.injectStyleSheet();
  }
  connectedCallback() {
    this.tech = this.getAttribute("tech") ?? "";
    this.percent = this.getAttribute("percent") ?? "0";
    this.renderHtml();
  }
  renderHtml() {
    const template = createHtml`
          <div class="skill">
            <div class="item">
              <p class="tech">${this.tech}</p>
              <div class="bar bar-${this.percent}"></div>
            </div>
          </div>
      `();
    const node = createNode(template);
    this.shadowRoot.appendChild(node);
  }

  injectStyleSheet() {
    const linkStyle = document.createElement("link");
    linkStyle.setAttribute("rel", "stylesheet");
    linkStyle.setAttribute("href", "./components/FrontendSkill.css");
    this.shadowRoot.appendChild(linkStyle);
  }
}

customElements.define("frontend-skill", FrontendSkill);
