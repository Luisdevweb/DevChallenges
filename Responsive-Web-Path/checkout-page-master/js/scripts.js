const counter = document.querySelectorAll(".counter");
let number = 1;
counter.forEach((item) =>
  item.addEventListener("click", (e) => {
    if (e.target.classList.contains("button--decrease")) {
      decreaseNumber(e);
    }
    if (e.target.classList.contains("button--increase")) {
      increaseNumber(e);
    }
  })
);

const decreaseNumber = (e) => {
  const counterNumber = e.target.parentElement.nextElementSibling;
  number > 1 ? number-- : (number = 1);
  counterNumber.textContent = number;
};

const increaseNumber = (e) => {
  const counterNumber = e.target.parentElement.previousElementSibling;
  number >= 1 ? number++ : (number = 1);
  counterNumber.textContent = number;
};
