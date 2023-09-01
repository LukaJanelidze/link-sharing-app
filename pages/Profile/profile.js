const inputFields = document.querySelectorAll("input[required]");
const errorMessages = document.querySelectorAll(".error-message");
const btnSave = document.querySelector(".btnSave");
const userFullName = document.getElementById("user-full-name");
const userEmail = document.getElementById("user-email");
const firstNameInput = document.getElementById("firs-name-input");
const lastNameInput = document.getElementById("last-name-input");
const emailAddressInput = document.getElementById("email-address-input");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const storedFirstName = localStorage.getItem("firstName");
const storedLastName = localStorage.getItem("lastName");
const storedUserEmail = localStorage.getItem("userEmail");
const imageInput = document.getElementById("image-upload");
const profileImage = document.querySelector(".profile-img");
const backgroundSvg = document.querySelector(".background-svg");
const svgSizeLabel = document.querySelector(".svg-size-label");
const overlay = document.querySelector(".overlay");
const phone = document.querySelector(".link-results");

const linkResults = localStorage.getItem("linkResults");
if (linkResults) {
  phone?.insertAdjacentHTML("beforeend", linkResults);
}

const storedImage = localStorage.getItem("profileImg");
if (storedImage) {
  profileImage.setAttribute("src", storedImage);
  profileImage.style.display = "block";
}

if (storedFirstName) {
  firstName.innerText = storedFirstName;
  firstNameInput.value = storedFirstName;
}

if (storedLastName) {
  lastName.innerText = storedLastName;
  lastNameInput.value = storedLastName;
}

if (storedUserEmail) {
  userEmail.innerText = storedUserEmail;
  emailAddressInput.value = storedUserEmail;
}
// ----------------------------------------

imageInput.addEventListener("input", (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
    profileImage.setAttribute("src", reader.result);
    profileImage.style.display = "block";
    svgSizeLabel.style.background = "none";
    backgroundSvg.setAttribute("src", reader.result);
    backgroundSvg.style.display = "block";
    localStorage.setItem("profileImg", reader.result);
  };
  reader.readAsDataURL(file);
});

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

// local storage

firstNameInput.addEventListener("input", (event) => {
  firstName.innerText = event.target.value;
  localStorage.setItem("firstName", event.target.value);
});

lastNameInput.addEventListener("input", (event) => {
  lastName.innerText = event.target.value;
  localStorage.setItem("lastName", event.target.value);
});

emailAddressInput.addEventListener("input", (event) => {
  userEmail.innerText = event.target.value;
  localStorage.setItem("userEmail", event.target.value);
});
