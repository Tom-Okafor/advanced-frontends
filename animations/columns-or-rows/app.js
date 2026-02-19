gsap.registerPlugin(Flip);

const flipButton = document.querySelector(".display-direction");
let currentDirection = "columns";
const main = document.querySelector("main");
const figure = document.querySelectorAll("figure");
const figureImage = document.querySelectorAll("figure img");

flipButton.addEventListener("click", function () {
  flipButton.querySelector("p").innerText =
    `Change to ${currentDirection === "rows" ? "rows" : "columns"}`;
  flipButton
    .querySelector("img")
    .setAttribute(
      "src",
      `./assets/${currentDirection === "columns" ? "rows-svgrepo-com (1).svg" : "columns-svgrepo-com.svg"}`,
    );
  currentDirection = currentDirection === "columns" ? "rows" : "columns";

  const figureState = Flip.getState(figure, {
    props: "width, height",
  });
  const figureImageState = Flip.getState(figureImage, {
    props: "width, height",
  });
  main.classList.toggle("column");
  Flip.from(figureState, {
    duration: 0.6,
    ease: "power2.out",
  }).from(figureImageState, {
    duration: 0.6,
    ease: "power2.out",
  });
});
