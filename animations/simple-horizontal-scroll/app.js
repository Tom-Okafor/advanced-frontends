gsap.registerPlugin(SplitText, ScrollTrigger);

const scroller = document.querySelector(".scroller");
const sections = gsap.utils.toArray(".scroll-item");

const mainHeading = document.querySelector("h1");
const split = new SplitText(mainHeading, {
  type: "chars, words",
  mask: "chars",
});
const paragraphSplit = new SplitText(".last-section p", {
  type: "chars, words",
  mask: "chars",
});
gsap.set(split.chars, { xPercent: -110 });
gsap.set(mainHeading, { autoAlpha: 1 });
gsap.to(split.chars, { xPercent: 0, stagger: 0.01, ease: "power4.in" });
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
    stagger: 0.008,
    y: 50,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "left 35%",
      end: "right 55%",
      containerAnimation: scrollerTween,
      toggleActions: "play reverse play reverse",
    },
  });
});

gsap.from(paragraphSplit.chars, {
  xPercent: 110,
  stagger: {each: 0.01, from: 'end'},
  ease: 'power4.in',
  scrollTrigger: {
    trigger: ".last-section",
    start: "top 40%",
    end: "bottom center",
    toggleActions: 'play none none reverse'
  },
});

const lenis = new Lenis({ autoRaf: true });
