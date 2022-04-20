const counter = document.querySelectorAll(".counter");
let number1 = 1,
  number2 = 1;
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
  const counterNumber = e.target.nextElementSibling;
  if (counterNumber.getAttribute("data-num") === "1") {
    number1 > 1 ? number1-- : (number1 = 1);
    counterNumber.textContent = number1;
  }
  if (counterNumber.getAttribute("data-num") === "2") {
    number2 > 1 ? number2-- : (number2 = 1);
    counterNumber.textContent = number2;
  }
};

const increaseNumber = (e) => {
  const counterNumber = e.target.previousElementSibling;
  if (counterNumber.getAttribute("data-num") === "1") {
    number1 < 10 ? number1++ : (number1 = 10);
    counterNumber.textContent = number1;
  }
  if (counterNumber.getAttribute("data-num") === "2") {
    number2 < 10 ? number2++ : (number2 = 10);
    counterNumber.textContent = number2;
  }
};
