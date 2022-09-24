const cards = document.getElementsByClassName("card");
var isTouch = "ontouchstart" in document.documentElement;

if (isTouch) {
  for (let card of cards) {
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
  window.addEventListener("click", (e) => removeFocus());
}

function removeFocus() {
  for (let card of cards) {
    card.classList.remove("mobile-tapped");
  }
}
