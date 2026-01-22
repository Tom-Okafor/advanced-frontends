const lenis = new Lenis({ autoRaf: true });
gsap.registerPlugin(SplitText, ScrollTrigger);

const scrollSections = gsap.utils.toArray("main section");
const main = document.querySelector("main");

gsap.set(main, { autoAlpha: 1 });
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

scrollSections.forEach((section) => {
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
    scrollTrigger: {
      trigger: section,
      start: "left center",
      end: "right 15%",
      toggleActions: "play none none reverse",
      containerAnimation: anim,
    },
  });
  timeline
    .from(section, { backgroundColor: "#fee3e0" })
    .from(
      sectionTitleSplit.chars,
      {
        yPercent: 110,
        ease: "power4.out",
        stagger: 0.01,
      },
      "<0.3",
    )
    .from(
      sectionTextSplit.lines,
      {
        yPercent: 110,
        ease: "power4.out",
        stagger: 0.08,
      },
      "<0.2",
    )
    .from(
      coloredBox,
      {
        scaleY: 0,
        transformOrigin: "bottom",
        ease: "power4.out",
      },
      "<0.3",
    )
    .from(
      image,
      {
        opacity: 0,
        y: 200,
        ease: "power3.out",
      },
      "<0.3",
    );
});
