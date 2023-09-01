const storedToken = localStorage.getItem("token");
if (!storedToken) {
  window.location.href = "../../index.html";
}

const storedProfileImg = localStorage.getItem("profileImg");
const storedFirstName = localStorage.getItem("firstName");
const storedlastName = localStorage.getItem("lastName");
const storedUserEmail = localStorage.getItem("userEmail");
const storedLinks = localStorage.getItem("linkResults");

const profileImage = document.querySelector(".profile-image");
const userName = document.querySelector(".user-name");
const lastName = document.querySelector(".last-name");
const email = document.querySelector(".email");
const links = document.querySelector(".links");
const shareSection = document.querySelector(".share-section");
const btnBtn = document.querySelector(".btn-btn");

if (storedProfileImg) {
  profileImage.setAttribute("src", storedProfileImg);
}

if (storedFirstName) {
  userName.innerText = storedFirstName;
}

if (storedlastName) {
  lastName.innerText = storedlastName;
}

if (storedUserEmail) {
  email.innerText = storedUserEmail;
}

if (storedLinks) {
  links.insertAdjacentHTML("beforeend", storedLinks);
}

btnBtn.addEventListener("click", (event) => {
  shareSection.style.display = "flex";

  setTimeout(() => {
    shareSection.style.display = "none";
  }, 2000);
});
