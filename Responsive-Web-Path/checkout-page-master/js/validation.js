const form = document.getElementById("form"),
  email = document.getElementById("email"),
  fullname = document.getElementById("fullname"),
  phone = document.getElementById("phone"),
  address = document.getElementById("address"),
  city = document.getElementById("city"),
  zipcode = document.getElementById("zipcode"),
  errorMessages = document.getElementsByClassName("message"),
  successIcon = document.getElementsByClassName("success-icon"),
  failureIcon = document.getElementsByClassName("error-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let message = "This field Cannot be blank";
  validateFields(email, 0, message);
  validateFields(fullname, 1, message);
  validateFields(phone, 2, message);
  validateFields(address, 3, message);
  validateFields(city, 4, message);
  validateFields(zipcode, 6, message);
});

const validateFields = (item, id, message) => {
  if (item.value.trim() === "") {
    item.style.cssText = "border:1px solid red";
    errorMessages[id].textContent = message;
    failureIcon[id].style.cssText = "visibility:visible;";
    successIcon[id].style.cssText = "visibility:hidden;";
  } else {
    item.style.cssText = "border:none";
    errorMessages[id].textContent = "";
    successIcon[id].style.cssText = "visibility:visible;";
    failureIcon[id].style.cssText = "visibility:hidden;";
  }
};
