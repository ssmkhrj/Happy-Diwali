const title = document.querySelector(".title");
const characters = title.children;
let idx = 0;
let isFirstIter = true;

function hideAll() {
  Array.from(characters).forEach((el) => {
    el.style.visibility = "hidden";
  });
}

const animation = setInterval(() => {
  if (idx >= characters.length) {
    idx = 0;
    hideAll();
  }
  characters[idx].style.visibility = "visible";
  idx++;
}, 300);
