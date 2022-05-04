class PersonalDetails extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <div class="personal-details" style="display:flex">

    <img src="./assets/photo.jpg" alt="photo" width="100" height="100" style="object-fit:cover">
    <div >
        <h1>Luis Machaca P.</h1
        <p>Frontend Developer</p>
    </div>
    <div >
        <p>luis@example.com</p>
        <p>(+51)999 999 929</p>
    </div>
    <div>
    <p>Self-motivated developer, who is willing to learn and create outstanding UI applications.</p> 

    <p>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p> 
    </div>
    </div>
    `;
  }
}

customElements.define("personal-details", PersonalDetails);
