const template = document.querySelector("#picture");
const content = template.content.cloneNode(true);
const userPicture = content.querySelector("user__picture");

for (let i = 0; i < 26; i++) {
  const element = userPicture.cloneNode(true);
  element.classList.add("user__picture");
  userPicture.appendChild(element);
}
