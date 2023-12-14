import { createComments } from "./script.js";
import { randomLikes } from "./script.js";

const userPictures = document.querySelectorAll(".pictures");
const templatePicture = document.querySelector("#picture").content;
const template = templatePicture.querySelector(".div");
const fragment = document.createDocumentFragment();

const pictureInfo = document.querySelector(".picture__comments");
pictureInfo.textContent = createComments();

const pictureLikes = document.querySelector(".picture__likes");
pictureLikes.textContent = randomLikes;

for (let i = 0; i < 26; i++) {
  const element = template.cloneNode(true);
  element.classList.add("user__picture");
  fragment.appendChild(element);
}

userPictures.appendChild(fragment);
