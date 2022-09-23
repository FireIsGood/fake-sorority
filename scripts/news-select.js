const articles = document.getElementsByClassName("story");
var isTouch = "ontouchstart" in document.documentElement;

if (isTouch) {
  for (let article of articles) {
    console.log(article);
    article.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
    article.addEventListener("click", function (e) {
      e.preventDefault();
      this.classList.add("mobile-tapped");
      const otherArticles = [...articles].filter((item) => item !== this);
      for (let otherArticle of otherArticles) {
        otherArticle.classList.remove("mobile-tapped");
      }
    });
  }
}
