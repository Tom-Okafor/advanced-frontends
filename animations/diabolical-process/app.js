const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);

const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: "main",
    start: "top 30%",
    end: "bottom center",
    toggleActions: "play none reverse none",
  },
});

tl1.to(["aside h2", "aside p", ".description"], {
  y: 0,
  stagger: 0.15,
  ease: "power4.out",
});

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "main",
    start: "top top",
    end: "bottom top",
    scrub: 2,
    pin: true,
  },
});

tl2
  .to(".line", {
    scaleY: 1,
    ease: "power2.out",
  })
  .to(
    ".background-text",
    {
      xPercent: 40,
      ease: "power2.out",
    },
    "<"
  );
