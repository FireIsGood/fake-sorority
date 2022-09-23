const cards = document.getElementsByClassName("card");
var is_touch_device = "ontouchstart" in document.documentElement;

if (is_touch_device) {
  for (let card of cards) {
    console.log(card);
    card.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
    card.addEventListener("click", function (e) {
      e.preventDefault();
      this.classList.add("mobile-tapped");
      const otherCards = [...cards].filter((item) => item !== this);
      for (let otherCard of otherCards) {
        otherCard.classList.remove("mobile-tapped");
      }
    });
  }
}

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
