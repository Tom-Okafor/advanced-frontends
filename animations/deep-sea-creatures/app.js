gsap.registerPlugin(ScrollTrigger, SplitText);

const lenis = new Lenis({ autoRaf: true });

const scrollSections = gsap.utils.toArray(".scroll-section");
const sectionOne = document.querySelector(".section-one");
const mainSection = document.querySelector("main");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: mainSection,
    start: "top top",
    end: `+=${mainSection.offsetWidth}px`,
    pin: true,
    scrub: 2,
  },
});

tl.to(scrollSections, {
  xPercent: -100 * (scrollSections.length - 1),
  ease: "none",
}).to(
  ".tiny-fish",
  {
    x: () => Math.random() * 300 - 50,
    ease: "none",
  },
  "<",
);

const sectionOneTimeLine = gsap.timeline();

const headingSplit = new SplitText(sectionOne.querySelector("h3"), {
  type: "chars, words",
  mask: "chars",
});
const textSplit = new SplitText(sectionOne.querySelector("p"), {
  type: "lines",
  mask: "lines",
});
const image = sectionOne.querySelector("img");
animateSections(image, headingSplit, textSplit, sectionOneTimeLine);
gsap.utils.toArray(".scroll-section:not(.section-one)").forEach((section) => {
  const headingSplit = new SplitText(section.querySelector("h3"), {
    type: "chars, words",
    mask: "chars",
  });
  const textSplit = new SplitText(section.querySelector("p"), {
    type: "lines",
    mask: "lines",
  });
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      containerAnimation: tl,
      start: "left 40%",
      end: "right 20%",
      toggleActions: "play none none reverse",
    },
  });
  const image = section.querySelector("img");
  animateSections(image, headingSplit, textSplit, timeline);
});

function animateSections(image, headingSplit, textSplit, timeline) {
  timeline
    .from(image, {
      x: 400,
      y: -300,
      opacity: 0,
      ease: "power3.out",
      duration: 0.8,
    })
    .from(
      headingSplit.chars,
      {
        yPercent: 110,
        stagger: { each: 0.03, from: "center" },
        ease: "power4.out",
      },
      "<",
    )
    .from(
      textSplit.lines,
      { yPercent: 110, stagger: 0.1, ease: "power4.out" },
      "<0.2",
    );
}
