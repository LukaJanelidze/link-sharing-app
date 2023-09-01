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
