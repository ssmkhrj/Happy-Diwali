const title = document.querySelector(".title");
const diwali = "HappyDiwali!";
let idx = 0;
const animation = setInterval(() => {
  if (idx >= diwali.length) {
    title.textContent = "";
    idx = 0;
  }
  if (diwali[idx] === "D") title.textContent += " ";

  title.textContent += diwali[idx];
  idx++;
}, 300);
