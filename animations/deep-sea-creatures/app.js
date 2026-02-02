gsap.registerPlugin(ScrollTrigger, SplitText);

const lenis = new Lenis({ autoRaf: true });

const scrollSections = gsap.utils.toArray(".scroll-section");
const mainSection = document.querySelector("main");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: mainSection,
    start: "top top",
    end: `+=${mainSection.offsetWidth}px`,
    pin: true,
    scrub: 2,
    markers: true,
  },
});

tl.to(scrollSections, {
  xPercent: -100 * (scrollSections.length - 1),
  ease: "none",
}).to(
  ".tiny-fish",
  {
    x: () => Math.random() * 300 - 50,
    ease: "power2.out",
  },
  "<",
);
