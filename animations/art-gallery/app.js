gsap.registerPlugin(ScrollTrigger);

gsap.to(".top-container h1", {
  y: 0,
  duration: 0.6,
  ease: "power3.in",
  delay: 0.5,
});

gsap.to(".top-container p", {
  y: 0,
  opacity: 1,
  delay: 1,
  ease: "power2.out",
  onComplete: () => {
    gsap.to(".top-container p", {
      y: 20,
      yoyo: true,
      repeat: -1,
      ease: "power3.in",
    });
  },
});

const mainSection = document.querySelector("main");
const figures = gsap.utils.toArray("figure");

const mainSectionTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: mainSection,
    start: "top 20%",
    end: "bottom center",
    toggleActions: "play none none none",
  },
});
const captionEase = {
  y: 0,
  stagger: 0.2,
  duration: 0.3,
  ease: "power3.in",
};
mainSectionTimeline
  .to("figure img", {
    clipPath: "polygon(0% 80%, 100% 40%, 100% 100%, 0% 100%)",
    ease: "power3.out",
    stagger: 0.2,
    duration: 0.6,
  })
  .to(
    "figure img",
    {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power3.out",
      stagger: 0.15,
    },
    "<0.5"
  )
  .to(
    "figure .line",
    {
      scaleX: 1,
      ease: "power4.out",
      stagger: 0.15,
    },
    "<0.1"
  )
  .to(".caption-number", captionEase, "<0.1")

  .to(".caption-name", captionEase, "<0.05");

figures.forEach((figure) => {
  const image = figure.querySelector("img");
  const imagePathAnimation = gsap.to(image, {
    clipPath: "polygon(0% 15%, 100% 0%, 100% 85%, 0% 100%)",
    ease: "power2.inOut",
  });
  imagePathAnimation.pause()
  figure.addEventListener("mouseenter", () => imagePathAnimation.play());
  figure.addEventListener("mouseleave", () => imagePathAnimation.reverse());
});


