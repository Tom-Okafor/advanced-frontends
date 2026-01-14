gsap.registerPlugin(ScrollTrigger);

gsap.from("text", {
  scrollTrigger: {
    trigger: "svg",
    start: "top 30%",
    end: "bottom center",
    toggleActions: "play none none reverse",
  },
  scale: 0.5,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
  transformOrigin: "center",
});
