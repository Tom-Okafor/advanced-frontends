gsap.registerPlugin(ScrollTrigger, SplitText);

const sections = gsap.utils.toArray("section");

sections.forEach((section) => {
  const pElement = section.querySelector("article p");
  const image = section.querySelector("img");
  const splitWords = new SplitText(pElement, { type: "words, lines" });
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 30%",
      end: "bottom center",
      toggleActions: "play none none reverse",
    },
    defaults: { ease: "power2.out" },
  });
  timeline
    .fromTo(
      splitWords.words,
      { y: 50, opacity: 0 },
      { opacity: 1, y: 0, stagger: 0.02, duration: 1 }
    )
    .to(image, { opacity: 1, top: "50%", duration: 1 }, "<0.3");
});
