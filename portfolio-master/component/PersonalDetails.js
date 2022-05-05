import { createHtml } from "../helpers/createHtml.js";
import { createNode } from "../helpers/createNode.js";

class PersonalDetails extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.name = this.getAttribute("name") ?? "Luis Machaca";
    this.role = this.getAttribute("role") ?? "Frontend Developer";
    this.email = this.getAttribute("email") ?? "example@email.com";
    this.phone = this.getAttribute("phone") ?? "(+51)888 888 888";
    this.render();
  }
  render() {
    const template = createHtml`
      <div class="personal-details">
      <img  class="photo" src="./assets/photo.jpg" alt="photo" width="100" height="100">
        <div>
            <h1 class="personal-details__title">${this.name}</h1
            <p class="personal-details__subtitle">${this.role}</p>
        </div>
        <div>
          <p class="personal-details__email">${this.email}</p>
          <p class=""personal-details__phone"">${this.phone}</p>
        </div>
        <div>
          <p class="personal-details__summary">Self-motivated developer,who is willing to learn and create outstanding UI applications.</p>
          <p class="personal-details__summary">Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
        </div>
      </div>`();
    const node = createNode(template);
    this.shadowRoot.appendChild(node);
  }
}

customElements.define("personal-details", PersonalDetails);
