const timeline = gsap.timeline({ delay: 0.5 });

timeline
  .to(".block", {
    scaleY: 1,
    transformOrigin: "top",
    stagger: 0.15,
    ease: "power4.out",
  })
  .to(
    "h1",
    {
      x: 0,
      ease: "elastic.out(1, 0.3)",
      duration: 1,
    },
    "<0.5"
  )
  .to(
    ".block-one",
    {
      scaleY: 0,
      transformOrigin: "top",
      ease: "power4.out",
    },
    ">1"
  )
  .to(
    ".block-three",
    {
      scaleY: 0,
      transformOrigin: "bottom",
      ease: "power4.out",
    },
    "<"
  )
  .to(
    ".block-two",
    {
      ease: "power4.out",
      height: "100vh",
    },
    "<"
  )
  .to("h1", { ease: "bounce.out", scale: 0.4 }, "<0.1");
