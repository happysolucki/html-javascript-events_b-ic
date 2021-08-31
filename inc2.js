// make colors array
const colors = [
  "blue",
  "red",
  "yellow",
  "brown",
  "orange",
  "purple",
  "black",
  "green",
];

// select button from dom
const button = document.querySelector("button");

// initialize starting index
let idx = 0;

// add event listener on button
button.addEventListener("click", () => {
  // if idx equals length of colors array, reset idx to zero
  if (idx === colors.length) idx = 0;
  // set bg color of body to current idx of colors array
  document.body.style.backgroundColor = colors[idx];
  // increment idx by one
  idx++;
});
