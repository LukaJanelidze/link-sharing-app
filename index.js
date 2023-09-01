localStorage.removeItem("token");

const createButton = document.querySelector(".create-btn");
const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".password-input");
const loginValid = document.getElementById("login-validation");
const passwordValidation = document.getElementById("password-validation");
const emailText = document.querySelector(".email-text");
const passwordText = document.querySelector(".create-password");
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const authError = document.querySelector(".auth-error");

let emailValid = false;
let passwordValid = false;

createButton.addEventListener("click", () => {
  if (!emailInput.value) {
    emailText.style.color = "red";
    emailInput.style.border = "1px solid red";
    loginValid.innerText = "Can’t be empty";
    emailValid = false;
    passwordText.style.color = "red";
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
    const users = JSON.parse(localStorage.getItem("users"));
    users?.map((item) => {
      if (
        item.email == emailInput.value &&
        item.password == passwordInput.value
      ) {
        createButton.setAttribute("href", "./pages/AddLink/addLink.html");
        localStorage.setItem("token", "true");
      }
    });
    const storedToken = localStorage.getItem("token");
    if (!storedToken) {
      authError.innerText = "Invalid Email or Password";
    } else {
      authError.innerText = "";
    }
  }
});

emailInput.addEventListener("input", () => {
  emailInput.style.border = "";
  loginValid.innerText = "";
  emailText.style.color = "var(--dark-grey, #333)";
  authError.innerText = "";
});

passwordInput.addEventListener("input", () => {
  passwordInput.style.border = "";
  passwordValidation.innerText = "";
  passwordText.style.color = "var(--dark-grey, #333)";
  authError.innerText = "";
});
