const createButton = document.querySelector(".create-btn");
const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".password-input");
const loginValid = document.getElementById("login-validation");
const passwordValidation = document.getElementById("password-validation");
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

let emailValid = false;
let passwordValid = false;

createButton.addEventListener("click", () => {
  if (!emailInput.value) {
    emailInput.style.border = "1px solid red";
    loginValid.innerText = "Can’t be empty";
    emailValid = false;
    passwordInput.style.border = "1px solid red";
    passwordValidation.innerText = "Please check again";
    passwordValid = false;
  } else {
    emailInput.style.border = "";
    emailValid = true;
    passwordInput.style.border = "";
    passwordValid = true;
  }

  if (emailValid && passwordValid) {
    createButton.setAttribute("href", "./pages/AddLink/addLink.html");
  }
});

emailInput.addEventListener("input", () => {
  emailInput.style.border = "";
  loginValid.innerText = "";
});

passwordInput.addEventListener("input", () => {
  passwordInput.style.border = "";
  passwordValidation.innerText = "";
});
