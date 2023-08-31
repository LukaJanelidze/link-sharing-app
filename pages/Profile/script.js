const inputFields = document.querySelectorAll("input[required]");
const errorMessages = document.querySelectorAll(".error-message");
const btnSave = document.querySelector(".btnSave");

inputFields.forEach((inputField, index) => {
  inputField.addEventListener("input", () => {
    inputField.classList.remove("error-border");
    errorMessages[index].style.display = "none";
    inputField.style.border = "";
  });
});

btnSave.addEventListener("click", (event) => {
  event.preventDefault();

  inputFields.forEach((inputField, index) => {
    if (inputField.value.trim() === "") {
      inputField.classList.add("error-border");
      errorMessages[index].style.display = "inline";
      inputField.style.border = "1px solid red";
    }
  });
});

// ----------------------------------

const userFullName = document.getElementById("user-full-name");
const userEmail = document.getElementById("user-email");
const firstNameInput = document.getElementById("firs-name-input");
const lastNameInput = document.getElementById("last-name-input");
const emailAddressInput = document.getElementById("email-address-input");
const saveBtn = document.querySelector(".btnSave");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");

firstNameInput.addEventListener("input", (event) => {
  firstName.innerText = event.target.value;
});

lastNameInput.addEventListener("input", (event) => {
  lastName.innerText = event.target.value;
});

emailAddressInput.addEventListener("input", (event) => {
  userEmail.innerText = event.target.value;
});


