const container = document.querySelector(".container");
console.log("Before I use GSAP");
const animation = gsap.to(container, {
  width: "20vw",
  height: "28vw",
  borderRadius: "2%",
  paused: true,
  ease: "power3.out",
});
const shrinkText = gsap.to(".container p", {
  x: 0,
  fontSize: "clamp(5rem, 3vw, 12rem)",
  ease: "power3.out",
  paused: true,
});
console.log("I am here");

container.addEventListener("mouseenter", () => {
  animation.play();
  shrinkText.play();
});

container.addEventListener("mouseleave", () => {
  animation.reverse();
  shrinkText.reverse();
});
