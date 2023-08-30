//top level code

const addLinkButton = document.querySelector(".btn");
const empty = document.querySelector(".empty");
const phone = document.querySelector(".link-results");
const links = document.querySelector(".links");
const save = document.querySelector(".btnSave");

const storedLinks = localStorage.getItem("links");
if (storedLinks) {
  links?.insertAdjacentHTML("beforeend", storedLinks);
}

const linkResults = localStorage.getItem("linkResults");
if (linkResults) {
  phone?.insertAdjacentHTML("beforeend", linkResults);
}

let removeButtons = Array.from(document.getElementsByClassName("remove-btn"));
let linkInputs = Array.from(document.querySelectorAll(".link-input"));
let socialLinks = Array.from(document.getElementsByClassName("social-link"));
let linksArray = Array.from(document.getElementsByClassName("form"));
let select = [...document.querySelectorAll("select")];

const storedLinkData = JSON.parse(localStorage.getItem("linkData"));
linksArray?.map((item, index) => {
  if (
    item.querySelector(".link-input").value ||
    item.querySelector(".platform-input").value
  ) {
    item.querySelector(".link-input").value = storedLinkData[index].link || "";
    item.querySelector(".platform-input").value =
      storedLinkData[index]?.platform || "Frontend Mentor";
  }
});

hideAndAppearEmptySection();
addEventListenerToRemoveButton();