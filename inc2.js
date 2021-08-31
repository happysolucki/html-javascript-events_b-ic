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
const button = document.querySelector("button");
let idx = 0;

button.addEventListener("click", () => {
  if (idx === colors.length) idx = 0;
  document.body.style.backgroundColor = colors[idx];
  idx++;
});
