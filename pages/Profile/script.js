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
const firsNameInput = document.getElementById("firs-name-input");
const lastNameInput = document.getElementById("last-name-input");
const emailAddressInput = document.getElementById("email-address-input");
const saveBtn = document.querySelector(".btnSave");

// show name

function showName(inputName) {
  userFullName.innerText = inputName;
}

// show email

function showEmail(inputEmail) {
  userEmail.innerText = inputEmail;
}

saveBtn.addEventListener("click", () => {
  showName(firsNameInput.value + " " + lastNameInput.value);
  showEmail(emailAddressInput.value);

  const prevUsers = JSON.parse(localStorage.getItem("information"));
  if (prevUsers) {
    localStorage.setItem(
      "information",
      JSON.stringify([
        ...prevUsers,
        { email: firsNameInput.value, password: passwordInput.value },
      ])
    );
  } else {
    localStorage.setItem(
      "users",
      JSON.stringify([
        { email: emailInput.value, password: emailAddressInput.value },
      ])
    );
  }
});
