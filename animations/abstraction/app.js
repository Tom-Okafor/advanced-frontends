gsap.set("img", {
  yPercent: -120,
});

gsap.set("p", {
  opacity: 0,
});

gsap.to("img", {
  yPercent: 0,
  delay: 0.5,
  stagger: 0.1,
  duration: 1.5,
  scale: 1.3,
  ease: "power4.out",
  onComplete: scaleDownAndFadeIn,
});

function scaleDownAndFadeIn() {
  gsap.to("img", {
    scale: 1,
    ease: "power2.out",
    stagger: 0.1
  });
  gsap.fromTo(
    "p",
    {
      opacity: 0,
      x: -50,
      y: -50,
      delay: 1
    },
    {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 1.5,
      stagger: 0.1,
      ease: "power2.out",
    }
  );
}
