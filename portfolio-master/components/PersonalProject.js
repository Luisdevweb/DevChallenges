import { createHtml } from "../helpers/createHtml.js";
import { createNode } from "../helpers/createNode.js";

class PersonalProject extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.injectStyleSheet();
  }
  connectedCallback() {
    this.title = this.getAttribute("title") ?? "Recipe Blog";
    this.img=this.getAttribute("image") ?? "./assets/images/recipe-blog.png"
    this.renderHtml();
  }
  renderHtml() {
    const template = createHtml`
     <section class="project">
        <div class="column-40">  
          <img src="${this.img}" alt="project-img" class="image">
        </div>
        <div class="column-60">
          <div class="head">
            <span class="tag">#HTML</span>
            <span class="tag">#CSS</span>
            <span class="tag">#Responsive</span>
          </div>
          <div class="body">
          <h2 class="title">Recipe Blog</h2>
          <p class="description">In this project, I work with HTML and CSS to create a responsive page .
          The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id.
           Quisque feugiat malesuada molestie. </p>
          </div>
            <a href="#" class="link">Demo</a> 
            <a href="#" class="link link-code">Code</a>
        </div>
           
     </section>
     `()
    const node = createNode(template);
    this.shadowRoot.appendChild(node);
  }

  injectStyleSheet() {
    const linkStyle = document.createElement("link");
    linkStyle.setAttribute("rel", "stylesheet");
    linkStyle.setAttribute("href", "./components/PersonalProject.css");
    this.shadowRoot.appendChild(linkStyle);
  }
}

customElements.define("personal-project", PersonalProject)