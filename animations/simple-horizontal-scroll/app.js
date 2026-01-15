gsap.registerPlugin(SplitText, ScrollTrigger);

const scroller = document.querySelector(".scroller");
const sections = gsap.utils.toArray(".scroll-item");
console.log(scroller.clientWidth);
console.log(sections.length);
let scrollerTween = gsap.to(scroller, {
  xPercent: 100 / sections.length - 100,
  ease: "none",
  scrollTrigger: {
    trigger: scroller,
    scrub: true,
    pin: true,
    end: `+=${scroller.offsetWidth}`,
  },
});

sections.forEach((section) => {
  const headingText = section.querySelector("h3");
  const split = new SplitText(headingText, { type: "chars" });
  gsap.from(split.chars, {
    opacity: 0,
    filter: "blur(4px)",
    stagger: 0.02,
    y: 50,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "left 35%",
      end: 'right 55%',
      containerAnimation: scrollerTween,
      toggleActions: "play reverse play reverse",
    },
  });
});

const lenis = new Lenis({ autoRaf: true });
