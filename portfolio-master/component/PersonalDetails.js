import { createHtml } from "../helpers/createHtml.js";
import { createNode } from "../helpers/createNode.js";

class PersonalDetails extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.name = this.getAttribute("name") ?? "Luis Machaca";
    this.role = this.getAttribute("role") ?? "Front-end Developer";
    this.email = this.getAttribute("email") ?? "example@email.com";
    this.phone = this.getAttribute("phone") ?? "(+51)888 888 888";
    this.render();
    this.styles();
  }
  render() {
    const template = createHtml`
      <div class="personal-details">
        <img  class="photo" src="./assets/images/photo.jpg" alt="photo" width="100" height="100">
        <div class="wrapper-inner">
            <div class="row">
              <div class="column">
                <h1 class="title">${this.name}</h1>
                <p class="subtitle">${this.role}</p>
              </div>
              <div class="column">
                <p class="email">${this.email}</p>
                <p class="phone">${this.phone}</p>
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

  styles() {
    const styles = document.createElement("style");
    styles.textContent = `
      .personal-details{
        display:flex;
        width:104rem;
        height:30rem;
        padding:1em;
        background-color: hsla(0, 0%, 100%, 1);
        border-radius:12px;
      }
      .photo{
        width:27.18rem;
        height:26.61rem;
        object-fit:cover;
        border-radius:12px;
      }
      .wrapper-inner{
         display:flex;
         flex-direction:column;
         justify-content:space-between;
         padding:1.5em;
      }
      .row{
        display:flex;
        justify-content:space-between;
      }
      .title{
        font-size:2.4rem;
        font-weight:600;
        color: hsla(0, 0%, 31%, 1);
        margin-bottom:.1em;
      }
      .subtitle{
        margin-top:0;
        font-size:1.8rem;
        font-weight:500;
        color: hsla(0, 0%, 51%, 1);
      }
      .email,
      .phone{
        font-size:1.8rem;
        font-weight:500;
        color: hsla(0, 0%, 31%, 1);
      }
      .summary{
        display:flex;
        flex-direction:column;
        justify-content:center;
      }
      .text{
        font-size:1.8rem;
        font-weight:500;
        color: hsla(0, 0%, 51%, 1);
      }
    `;
    this.shadowRoot.appendChild(styles);
  }
}

customElements.define("personal-details", PersonalDetails);
