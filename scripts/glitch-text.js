const swapTexts = document.querySelectorAll(".glitch");

// Swap

function glitchSwap(elem, charLen) {
  const charList = "&#*+%?£@§$";
  let randomText = "";
  for (let i = 0; i < charLen; i++) {
    randomText += charList[Math.floor(Math.random() * charList.length)];
  }
  elem.innerText = randomText;
  setTimeout(glitchSwap, 100, elem, charLen);
}

for (elem of swapTexts) {
  glitchSwap(elem, elem.innerText.length);
}
