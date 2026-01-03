gsap.to(".progress", {
  width: "100%",
  duration: 2,
  ease: "power4.out",
});

gsap.from('h1', {
    y: -200,
    duration: 2,
    ease: "elastic.out(1, 0.3)",
})

gsap.to('.progress', {
    backgroundColor: 'white',
    delay: 2,
    ease: "power4.in",
    top: 0,
    height: '100vh',
})