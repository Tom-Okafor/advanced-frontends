const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray("main section");

sections.forEach((section) => {
  gsap.fromTo(
    section,
    {
      yPercent: section.getAttribute("data-displacement"),
    },
    {
      yPercent: 0,
      ease: "none",
      scrollTrigger: {
        trigger: 'main',
        start: "top 80%",
        end: "bottom 75%",
        scrub: true,
      },
    },
  );
});
