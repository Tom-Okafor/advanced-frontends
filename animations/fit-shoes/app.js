const lenis = new Lenis({ autoRaf: true });
gsap.registerPlugin(SplitText, ScrollTrigger);

const scrollSections = gsap.utils.toArray("main section");
const main = document.querySelector("main");
const firstSection = document.querySelector(".section-one");

gsap.set(main, { autoAlpha: 1 });

const charsAnim = {
  yPercent: 110,
  stagger: { each: 0.02, from: "center" },
};
const linesAnim = {
  yPercent: 110,
  stagger: 0.08,
};

const coloredBoxAnim = {
  scaleY: 0,
  transformOrigin: "bottom",
};

const imageAnim = {
  opacity: 0,
  y: 200,
};

const firstSectionHeadingSplit = new SplitText(
  firstSection.querySelector("h3"),
  { type: "chars", mask: "chars" },
);

const firstSectionParagraphSplit = new SplitText(
  firstSection.querySelector("p"),
  { type: "lines", mask: "lines" },
);

const timeline = gsap.timeline({ defaults: { ease: "power4.out" } });

timeline
  .from(firstSectionHeadingSplit.chars, charsAnim)
  .from(firstSectionParagraphSplit.lines, linesAnim, "<0.3")
  .from(firstSection.querySelector(".colored-box"), coloredBoxAnim, "<0.1")
  .from(firstSection.querySelector("img"), imageAnim, "<0.3");

const timeline1 = gsap.timeline({
  scrollTrigger: {
    trigger: "main",
    start: "top top",
    end: `+=${main.offsetWidth}`,
    pin: true,
    scrub: 1,
  },
});

const anim = timeline1
  .to("main section", {
    ease: "none",
    xPercent: -100 * (scrollSections.length - 1),
  })
  .to(
    ".progress",
    {
      ease: "none",
      scaleX: 1,
    },
    "<",
  );
scrollSections.forEach((section, index) => {
  if (index !== 0) {
    const sectionTitle = section.querySelector("h3");
    const sectionText = section.querySelector("p");
    const coloredBox = section.querySelector(".colored-box");
    const image = section.querySelector("img");
    const sectionTitleSplit = new SplitText(sectionTitle, {
      type: "chars, words",
      mask: "chars",
    });
    const sectionTextSplit = new SplitText(sectionText, {
      type: "lines",
      mask: "lines",
    });
    const timeline = gsap.timeline({
      defaults: { ease: "power4.out" },
      scrollTrigger: {
        trigger: section,
        start: "left center",
        end: "right 15%",
        toggleActions: "play none none reverse",
        containerAnimation: anim,
      },
    });
    timeline
      .from(section, { backgroundColor: "#fee3e0", duration: 1 })
      .from(sectionTitleSplit.chars, charsAnim, "<0.3")
      .from(sectionTextSplit.lines, linesAnim, "<0.1")
      .from(coloredBox, coloredBoxAnim, "<0.3")
      .from(image, imageAnim, "<0.3");
  }
});
