gsap.registerPlugin(SplitText);

const match_media = gsap.matchMedia();

const splitParagraph = new SplitText("p", {
  type: "chars, words",
  mask: "chars",
});

match_media.add(
  { isMobile: "(max-width: 799px)", isDesktopOrTab: "(min-width: 800px)" },
  (context) => {
    const { isMobile, isDesktopOrTab } = context.conditions;

    gsap.set("p", { autoAlpha: 1 });
    if (isMobile) {
      gsap.from(splitParagraph.chars, {
        xPercent: 115,
        skewY: 120,
        ease: "power2.out",
        stagger: 0.02,
      });
    }

    if (isDesktopOrTab) {
      gsap.from(splitParagraph.chars, {
        yPercent: 115,
        skewX: 120,
        ease: "power4.out",
        stagger: 0.02,
      });
    }
  },
);
