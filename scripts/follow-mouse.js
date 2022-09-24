document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const guy = document.getElementById("guy");
  const boundingBox = guy.getBoundingClientRect();
  const guyX = boundingBox.left + boundingBox.width / 2 + 30;
  const guyY = boundingBox.top + boundingBox.height / 2 - 45;

  const angleDeg = angle(mouseX, mouseY, guyX, guyY);
  // console.log(angleDeg);

  const eyes = document.querySelectorAll(".eye");
  eyes.forEach((eye) => {
    eye.style.transform = `rotate(${90 - angleDeg}deg)`;
  });
});

function angle(cx, cy, ex, ey) {
  const dx = cx - ex;
  const dy = cy - ey;
  const rad = Math.atan2(dx, dy);
  const deg = (rad * 180) / Math.PI;
  return deg;
}
