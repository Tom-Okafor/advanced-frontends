gsap.registerPlugin(Flip);

const buttons = gsap.utils.toArray("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const state = Flip.getState("button", {
      props: "backgroundColor, height, width, borderRadius",
    });
    document.querySelector("section").classList.toggle("vertical");
    Flip.from(state, {
      duration: 0.5,
      ease: "elastic.out(1, 0.5)",
    });
  });
});
