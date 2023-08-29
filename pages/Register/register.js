const createButton = document.querySelector(".create-btn");
const emailInput = document.querySelector(".email-input");
const emailError = document.getElementById("email-error");
const passwordInput = document.querySelector(".password-input");
const passwordError = document.getElementById("password-error");
const confirmPasswordInput = document.querySelector(".confirm-input");
const confirmPasswordError = document.getElementById("confirm-password-error")

let emailValid = false;
let passwordValid = false;
let confirmPasswordValid = false;

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

createButton.addEventListener("click", () => {

  if (!emailRegex.test(emailInput.value)) {
    emailInput.style.border = "1px solid red";
    emailError.innerText = "Can't be empty";
    emailValid = false;

  } else {
    emailInput.style.border = "";
    emailError.innerText = "";
    emailValid = true;
  };

  if(passwordInput.value.length < 8) {
    passwordInput.style.border = "1px solid red";
    passwordError.innerText = "Please check again";
    passwordValid = false;
  } else {
    passwordInput.style.border = ""
    passwordError.innerText = ""
    passwordValid = true;
    
  };

  if(passwordInput.value != confirmPasswordInput.value) {
    confirmPasswordInput.style.border = "1px solid red";
    confirmPasswordError.innerText = "Passwords do NOT match";
    confirmPasswordValid = false;
  } else {
    confirmPasswordInput.style.border = ""
    confirmPasswordError.innerText = ""
    confirmPasswordValid = true;
    
  };


  if (emailValid && passwordValid && confirmPasswordValid) {
    createButton.setAttribute("href", "../../index.html");
  }
});

emailInput.addEventListener("input", () => {
    emailInput.style.border = "";
    emailError.innerText = "";
});

passwordInput.addEventListener("input", () => {
    passwordInput.style.border = "";
    passwordError.innerText = ""
  });

confirmPasswordInput.addEventListener("input", () => {
    confirmPasswordInput.style.border = "";
    confirmPasswordError.innerText = ""
  });