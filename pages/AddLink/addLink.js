//top level code

const storedToken = localStorage.getItem("token");
if (!storedToken) {
  window.location.href = "../../index.html";
}

const addLinkButton = document.querySelector(".btn");
const empty = document.querySelector(".empty");
const phone = document.querySelector(".link-results");
const links = document.querySelector(".links");
const save = document.querySelector(".btnSave");

const storedFirstName = localStorage.getItem("firstName");
const storedLastName = localStorage.getItem("lastName");
const storedUserEmail = localStorage.getItem("userEmail");

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const userEmail = document.getElementById("user-email");
const profileImage = document.querySelector(".profile-img");
const userInfo = document.querySelector(".user-info");
const savedSection = document.querySelector(".saved-section");

const storedLinks = localStorage.getItem("links");
if (storedLinks) {
  links?.insertAdjacentHTML("beforeend", storedLinks);
}

const linkResults = localStorage.getItem("linkResults");
if (linkResults) {
  phone?.insertAdjacentHTML("beforeend", linkResults);
}

const storedImage = localStorage.getItem("profileImg");
if (storedImage) {
  profileImage.setAttribute("src", storedImage);
  profileImage.classList.add("img-appear");
}

if (storedFirstName) {
  firstName.innerText = storedFirstName;
  userInfo.classList.add("user-info-active");
  userInfo.classList.add("user-info-active");
}

if (storedLastName) {
  lastName.innerText = storedLastName;
  userInfo.classList.add("user-info-active");
}

if (storedUserEmail) {
  userEmail.innerText = storedUserEmail;
  userInfo.classList.add("user-info-active");
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
    const collectionArray = linksArray.map((element) => element.outerHTML);
    localStorage.setItem("links", collectionArray.join(" "));
    storeLinkDataAtLocalStorage();
    socialLinks = Array.from(document.getElementsByClassName("social-link"));
    const linkResults = socialLinks?.map((element) => element.outerHTML);
    localStorage.setItem("linkResults", linkResults.join(" "));

    savedSection.style.display = "flex";

    setTimeout(() => {
      savedSection.style.display = "none";
    }, 2000);
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

function getColor(platform) {
  switch (platform) {
    case "GitHub":
      return "#1A1A1A";

    case "Frontend Mentor":
      return "#FFF";

    case "Twitter":
      return "#43B7E9";

    case "LinkedIn":
      return "#2D68FF";

    case "YouTube":
      return "#EE3939";

    case "Facebook":
      return "#2442AC";

    case "Twitch":
      return "#EE3FC8";

    case "Dev.to":
      return "#333";

    case "Codewars":
      return "#8A1A50";

    case "freeCodeCamp":
      return "#302267";

    case "GitLab":
      return "#EB4925";

    case "Hashnode":
      return "#0330D1";

    case "Stack Overflow":
      return "#EC7100";
  }
}

function storeLinkDataAtLocalStorage() {
  const linkData = [];
  linksArray.map((item) => {
    linkData.push({
      platform: item.querySelector(".platform-input").value,
      link: item.querySelector(".link-input").value,
      color: getColor(item.querySelector(".platform-input").value),
    });
  });
  localStorage.setItem("linkData", JSON.stringify(linkData));
}

function addResults() {
  console.log(linksArray);
  let arr = [];
  linksArray.map((item) => {
    arr.push({
      platform: item.querySelector(".platform-input").value,
      link: item.querySelector(".link-input").value,
      color: getColor(item.querySelector(".platform-input").value),
    });
  });
  console.log(arr);

  phone.innerHTML = "";
  arr.map((item) => {
    phone.insertAdjacentHTML(
      "beforeend",
      linkResult(item.platform, item.link, item.color)
    );
  });
}

function linkChild(num) {
  return `<div class="form">
<form >
  <div class="remove">
  <p> = <strong> Link #${num}</strong> </p>
   <p class="remove-btn">Remove</p>
  </div>
  <label for="platform">Platform</label>
   <select class="platform-input">
    <option value="Frontend Mentor"><img src="../../assets/images/icon-frontend-mentor.svg" alt="">Frontend Mentor</option>
    <option value="Twitter"><img src="../../assets/images/icon-twitter.svg" alt="">Twitter</option>
    <option value="LinkedIn"><img src="../../assets/images/icon-linkedin.svg" alt="">LinkedIn</option>
    <option value="YouTube"><img src="../../assets/images/icon-youtube.svg" alt="">YouTube</option>
    <option value="Facebook"><img src="../../assets/images/icon-facebook.svg" alt="">Facebook</option>
    <option value="Twitch"><img src="../../assets/images/icon-twitch.svg" alt="">Twitch</option>
    <option value="Dev.to"><img src="../../assets/images/icon-devto.svg" alt="">Dev.to</option>
    <option value="Codewars"><img src="../../assets/images/icon-codewars.svg" alt="">Codewars</option>
    <option value="freeCodeCamp"><img src="../../assets/images/icon-freecodecamp.svg" alt="">freeCodeCamp</option>
    <option value="GitHub"><img src="../../assets/images/icon-github.svg" alt="">GitHub</option>
    <option value="Hashnode"><img src="../../assets/images/icon-hashnode.svg" alt="">Hashnode</option>
    <option value="Stack Overflow"><img src="../../assets/images/icon-stack-overflow.svg" alt="">Stack Overflow</option>
  
  </select>
 <div class="input-text">
  <label for="link">Link<label>
    <img class="links-header" src="../../assets/images/icon-links-header.svg" alt="" />
    
 <input class="link-input"  type="text">
 <p class="error">Can’t be empty</p>
</div>
  </form> 
</div>`;
}

function linkResult(platform, link, color) {
  return `<a class="social-link" href="${link}" ${
    link && `target="blank"`
  } style="background-color: ${color}; border: ${
    platform == "Frontend Mentor" ? "1px solid #D9D9D9" : ""
  }; padding: ${platform == "Frontend Mentor" ? "9.5px 16px" : "11px 16px"}">
  <div style="color: ${platform == "Frontend Mentor" ? "black" : "white"}">
    <img 
    
    src="../../assets/images/icon-${platform
      .toLowerCase()
      .replace(" ", "-")
      .replace(".", "")}.svg" 
      style="filter: ${
        platform != "Frontend Mentor"
          ? "invert(92%) sepia(94%) saturate(22%) hue-rotate(16deg) brightness(504%) contrast(106%)"
          : ""
      }"
      />
    ${platform}
    
   
  </div>
  <img src="../../assets/images/icon-arrow-right.svg" alt="" style="filter: ${
    platform == "Frontend Mentor"
      ? "invert(47%) sepia(0%) saturate(71%) hue-rotate(263deg) brightness(95%) contrast(93%)"
      : ""
  }"/>
</a>`;
}
