const glitchTexts = document.querySelectorAll(".glitch");

function glitch(elem, charLen) {
  const charList = "&#*+%?£@§$";
  let randomText = "";
  for (let i = 0; i < charLen; i++) {
    randomText += charList[Math.floor(Math.random() * charList.length)];
  }
  elem.innerText = randomText;
  setTimeout(glitch, 100, elem, charLen);
}

for (elem of glitchTexts) {
  console.log(elem);
  glitch(elem, elem.innerText.length);
}
