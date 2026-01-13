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
  ease: 'power2.out',
  onComplete: () => {
    gsap.to(".top-container p", {
      y: 20,
      yoyo: true,
      repeat: -1,
      ease: "power3.in",
    });
  },
});
