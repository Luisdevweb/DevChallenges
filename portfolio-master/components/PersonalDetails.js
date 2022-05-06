import { createHtml } from "../helpers/createHtml.js";
import { createNode } from "../helpers/createNode.js";

class PersonalDetails extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.injectStyleSheet();
  }
  connectedCallback() {
    this.name = this.getAttribute("name") ?? "Luis Machaca";
    this.role = this.getAttribute("role") ?? "Front-end Developer";
    this.email = this.getAttribute("email") ?? "example@email.com";
    this.phone = this.getAttribute("phone") ?? "(+51)888 888 888";
    this.url = this.getAttribute("url") ?? "assets/images/photo.jpg";
    this.renderHtml();
  }
  renderHtml() {
    const template = createHtml`
      <div class="personal-details">
        <img  class="photo" src=${this.url} alt="photo" width="100" height="100">
        <div class="wrapper-inner">
            <div class="row">
              <div class="column">
                <h1 class="title">${this.name}</h1>
                <p class="subtitle">${this.role}</p>
              </div>
              <div class="column">
                <p class="email"><img class="icon" src="./assets/images/email.svg" alt="icon-email">${this.email}</p>
                <p class="phone"><img class="icon" src="./assets/images/phone.svg" alt="icon-phone">${this.phone}</p>
              </div>
            </div>
            <div class="summary">
              <p class="text">Self-motivated developer,who is willing to learn and create outstanding UI applications.</p>
              <p class="text">Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
            </div>
        </div>
      </div>`();
    const node = createNode(template);
    this.shadowRoot.appendChild(node);
  }

  injectStyleSheet() {
    const linkStyle = document.createElement("link");
    linkStyle.setAttribute("rel", "stylesheet");
    linkStyle.setAttribute("href", "./components/PersonalDetails.css");
    this.shadowRoot.appendChild(linkStyle);
  }
}

customElements.define("personal-details", PersonalDetails);
