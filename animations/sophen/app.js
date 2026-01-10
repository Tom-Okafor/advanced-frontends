const tl = gsap.timeline({
  defaults: { ease: "power3.out", duration: 0.7 },
  delay: 1,
});

tl.to("h1", {
  scaleX: 1,
  opacity: 1,
  transformOrigin: "right",
  ease: "elastic.out(1, 0.4)",
})
  .to("h3", {
    y: 0,
    stagger: 0.2,
  }, '<0.3')
  .to(
    "p",
    {
      y: 0,
      stagger: 0.1,
    },
    "<0.2"
  )
  .to(
    ".box",
    {
      scaleY: 1,
      ease: "elastic.out(1, 0.7)",
      stagger: 0.15,
      duration: 0.6
    },
    "<0.4"
  );
