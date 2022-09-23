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
