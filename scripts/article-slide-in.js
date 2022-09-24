const articles = document.querySelectorAll(".article-slide > article");

// Intersection Observer

const options = {
  root: null,
  threshold: 0.2,
  rootMargin: "0px",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
    entry.isIntersecting ? entry.target.classList.add("show") : null;
  });
}, options);

for (let article of articles) {
  article.classList.add("js-active");
  observer.observe(article);
}
