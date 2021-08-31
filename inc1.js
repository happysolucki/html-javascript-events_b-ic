// select elements in dom
let header = document.querySelector("h2");
let buttons = document.querySelectorAll("button");

// make function for changing body bg color
const setBodyBGColor = (evt) => {
  // capture text that shows on the button
  let color = evt.target.textContent;
  // change header text to text from button
  header.textContent = color;
  // change
  document.body.style.backgroundColor = color.toLowerCase();
};

// add event listener
buttons.forEach((element) => element.addEventListener("mouseover", setBodyBGColor));
