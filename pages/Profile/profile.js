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
const savedSection = document.querySelector(".saved-section");
const userInfo = document.querySelector(".user-info");

const linkResults = localStorage.getItem("linkResults");
if (linkResults) {
  phone?.insertAdjacentHTML("beforeend", linkResults);
}

const storedImage = localStorage.getItem("profileImg");
if (storedImage) {
  profileImage.setAttribute("src", storedImage);
  profileImage.classList.add("img-appear");
  var temporaryImage = storedImage;
}

if (storedFirstName) {
  firstName.innerText = storedFirstName;
  firstNameInput.value = storedFirstName;
  userInfo.classList.add("user-info-active");
}

if (storedLastName) {
  lastName.innerText = storedLastName;
  lastNameInput.value = storedLastName;
  userInfo.classList.add("user-info-active");
}

if (storedUserEmail) {
  userEmail.innerText = storedUserEmail;
  emailAddressInput.value = storedUserEmail;
  userInfo.classList.add("user-info-active");
}
// ----------------------------------------

imageInput.addEventListener("input", (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
    profileImage.setAttribute("src", reader.result);
    profileImage.classList.add("img-appear");
    svgSizeLabel.style.background = "none";
    backgroundSvg.setAttribute("src", reader.result);
    backgroundSvg.style.display = "block";
    temporaryImage = reader.result;
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
  let formValid = true;

  inputFields.forEach((inputField, index) => {
    if (inputField.value.trim() === "") {
      inputField.classList.add("error-border");
      errorMessages[index].style.display = "inline";
      inputField.style.border = "1px solid red";
      formValid = false;
    }
  });
  if (formValid && temporaryImage) {
    localStorage.setItem("profileImg", temporaryImage);
    localStorage.setItem("firstName", firstNameInput.value);
    localStorage.setItem("lastName", lastNameInput.value);
    localStorage.setItem("userEmail", emailAddressInput.value);

    savedSection.style.display = "flex";

    setTimeout(() => {
      savedSection.style.display = "none";
    }, 2000);
  }
});

// local storage

firstNameInput.addEventListener("input", (event) => {
  firstName.innerText = event.target.value;
  if (firstNameInput.value || lastNameInput.value || emailAddressInput.value) {
    userInfo.classList.add("user-info-active");
  } else {
    userInfo.classList.remove("user-info-active");
  }
});

lastNameInput.addEventListener("input", (event) => {
  lastName.innerText = event.target.value;
  if (firstNameInput.value || lastNameInput.value || emailAddressInput.value) {
    userInfo.classList.add("user-info-active");
  } else {
    userInfo.classList.remove("user-info-active");
  }
});

emailAddressInput.addEventListener("input", (event) => {
  userEmail.innerText = event.target.value;
  if (firstNameInput.value || lastNameInput.value || emailAddressInput.value) {
    userInfo.classList.add("user-info-active");
  } else {
    userInfo.classList.remove("user-info-active");
  }
});
