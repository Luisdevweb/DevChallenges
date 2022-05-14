import { createHtml } from "../helpers/createHtml.js";
import { createNode } from "../helpers/createNode.js";

class PostPreview extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.injectStyleSheet();
  }
  connectedCallback() {
    this.title = this.getAttribute("title") ?? "How to organize your CSS";
    this.img = this.getAttribute("img") ?? "./assets/images/post-css.png";
    this.domain = this.getAttribute("domain") ?? "dev.to";
    this.renderHtml();
  }
  renderHtml() {
    const template = createHtml`
        <article class="post-preview">
            <span class="blog-name">Blog</span>
            <h3 class="post-title">${this.title}</h3>
            <img class="post-image" src="${this.img}" alt="post blog">
            <p class="post-text">In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt.Vivamus non volutpat nisl, a luctus mi.</p>
            <p class="post-text">Donec aliquam est dui, vel vestibulum diam sollicitudin id.Quisque feugiat malesuada molestie.</p>
            <span class="web-domain">${this.domain}</span>
        <article>
      `();
    const node = createNode(template);
    this.shadowRoot.appendChild(node);
  }

  injectStyleSheet() {
    const linkStyle = document.createElement("link");
    linkStyle.setAttribute("rel", "stylesheet");
    linkStyle.setAttribute("href", "./components/PostPreview.css");
    this.shadowRoot.appendChild(linkStyle);
  }
}

customElements.define("post-preview", PostPreview);
