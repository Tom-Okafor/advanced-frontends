const lenis = new Lenis({});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger, SplitText);

const splitHeading = new SplitText("h1", { type: "lines, words, chars" });
const images = gsap.utils.toArray("main img");
const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: "h1",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

timeline
  .from(splitHeading.chars, {
    opacity: 0,
    y: () => -700 * Math.random() + 120,
    rotate: () => 60 * Math.random() - 30,
    ease: "power4.out",
  })
  .to(
    splitHeading.chars,
    {
      y: () => 40 * Math.random() - 20,
    },
    ">",
  );

images.forEach((image) => {
  gsap.to(image, {
    yPercent: () => image.getAttribute("data-displacement") * 25,
    ease: "none",
    scrollTrigger: {
      trigger: document.querySelector("main"),
      start: "top center",
      end: "bottom 30%",
      ease: "power3.inOut",
      scrub: 2,
    },
  });
});
