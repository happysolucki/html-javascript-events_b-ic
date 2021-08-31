let header = document.querySelector("h2");
let buttons = document.querySelectorAll("button");

const setBodyBGColor = (evt) => {
  let color = evt.target.textContent;
  header.textContent = color;
  document.body.style.backgroundColor = color.toLowerCase();
};

buttons.forEach((element) => element.addEventListener("click", setBodyBGColor));
