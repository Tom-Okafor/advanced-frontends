const tl = gsap.timeline({ });

tl.to(".circle", {
  duration: 1,
  ease: "bounce.out",
  transform: "translateY(0px) rotate(0deg)",
  delay: 0.5,
})
  .to(".line-one", {
    duration: 1,
    ease: "power4.out",
    transform: "scaleX(1)",
    transformOrigin: "right",
  })
  .to(
    ".line-two",
    {
      duration: 1,
      ease: "power4.out",
      transform: "scaleX(1)",
      transformOrigin: "left",
    },
    "<"
  )
  .to(
    ".loader_text div",
    {
      ease: "bounce.out",
      y: 0,
    },
    "<0.5"
  );
