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

//event listeners

document.addEventListener("click", () => {
  select = [...document.querySelectorAll("select")];
  
  linkInputs = Array.from(document.querySelectorAll(".link-input"));
  socialLinks = Array.from(document.getElementsByClassName("social-link"));
  removeButtons = Array.from(document.getElementsByClassName("remove-btn"));
  linksArray = Array.from(document.getElementsByClassName("form"));

  const collectionArray = linksArray.map((element) => element.outerHTML);
  localStorage.setItem("links", collectionArray.join(" "));

  console.log(collectionArray.join(" "));
  storeLinkDataAtLocalStorage();
  hideAndAppearEmptySection();
  addEventListenerToRemoveButton();
  addResults();

  linkInputs.map((item) => {
    item.addEventListener("input", () => {
      console.log(item);
      item.style.border = "";
      item.nextElementSibling.style.display = "none";
    });
  });
});
document.addEventListener("input", () => {
  storeLinkDataAtLocalStorage();
  addResults();
});

addLinkButton?.addEventListener("click", () => {
  links.insertAdjacentHTML("beforeend", linkChild(linksArray.length));
  addResults();
});

save.addEventListener("click", () => {
  linkInputs.map((item) => {
    if (!item.value) {
      item.style.border = "1px solid red";
      item.nextElementSibling.style.display = "block";
    } else {
      item.style.border = "";
      item.nextElementSibling.style.display = "none";
    }
  });

  if (linkInputs.every((item) => item.value) && linksArray.length != 0) {
    save.setAttribute("href", "../Profile/profile.html");
  }
});

//utils

function addEventListenerToRemoveButton() {
  removeButtons.map((remove, index) => {
    let numbers = Array.from(document.querySelectorAll(".form p strong"));
    numbers[index].innerText = `Link #${index + 1}`;

    remove.addEventListener("click", () => {
      remove.parentElement.parentElement.parentElement.remove();
    });
    const collectionArray = linksArray.map((element) => element.outerHTML);

    localStorage.setItem("links", collectionArray.join(" "));
  });
}

function hideAndAppearEmptySection() {
  if (linksArray.length == 0) {
    empty.style.display = "block";
    links.style.display = "none";
    save.style.opacity = "0.25";
  } else {
    empty.style.display = "none";
    links.style.display = "block";
    save.style.opacity = "1";
  }
}

function getColor(platform){}