const cutInText = document.querySelectorAll(".left, .right");

// Intersection Observer

const options = {
  root: null,
  threshold: 0.5,
  rootMargin: "0px",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    entry.isIntersecting ? entry.target.classList.add("show") : null;
  });
}, options);

for (let text of cutInText) {
  text.classList.add("js-active");
  observer.observe(text);
}
