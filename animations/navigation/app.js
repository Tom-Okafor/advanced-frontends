const timeline = gsap.timeline({
  paused: true,
  defaults: { ease: "power4.out", x: 0 },
});

timeline
  .to("aside", {})
  .to("main", {}, "<")
  .to("aside ul a", { stagger: { amount: 0.2 } }, "<0.1");
let isMenuOpen = false;
document.querySelector(".menu-toggle").addEventListener("click", () => {
  isMenuOpen ? timeline.reverse() : timeline.play();
  isMenuOpen = !isMenuOpen;
});
