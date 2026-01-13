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
let isfirstClipPathAnimationRunning = true;

const mainSectionTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: mainSection,
    start: "top 20%",
    end: "bottom center",
    toggleActions: "play none none reverse",
  },
});
const captionEase = {
  y: 0,
  stagger: 0.15,
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
      onComplete: () => {
        isfirstClipPathAnimationRunning = false;
      },
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
  const line = figure.querySelector(".line");
  const imagePathTimeline = gsap
    .timeline()
    .to(image, {
      clipPath: "polygon(0% 15%, 100% 0%, 100% 85%, 0% 100%)",
      ease: "power3.inOut",
      duration: 0.3,
    })
    .to(
      line,
      {
        scaleX: 0.3,
        transformOrigin: "center",
        ease: "power3.out",
      },
      "<"
    );
  imagePathTimeline.pause();
  figure.addEventListener("mouseenter", () => {
    toggleText(figure.querySelector(".caption-name"));
    !isfirstClipPathAnimationRunning && imagePathTimeline.play();
  });
  figure.addEventListener("mouseleave", () => imagePathTimeline.reverse());
});

function toggleText(elem) {
  const toggleLetters = "0 1";
    const originalTextContent = elem.getAttribute("data-name");
  let count = 0;
  let shuffledToggleLetters = "";
  requestAnimationFrame(handleToggle);

  function handleToggle() {
    if (
      count !== 0 &&
      shuffledToggleLetters.length === originalTextContent.length
    ) {
      const scrambledLetters = Array.from(shuffledToggleLetters)
        .map(
          () => toggleLetters[Math.floor(Math.random() * toggleLetters.length)]
        )
        .join("");
      shuffledToggleLetters =
        scrambledLetters.slice(0, shuffledToggleLetters.length - (count - 1)) +
        shuffledToggleLetters.slice(shuffledToggleLetters.length - (count - 1));
      elem.innerText = shuffledToggleLetters;
      count--;
      requestAnimationFrame(handleToggle);
    } else if (
      count === 0 &&
      shuffledToggleLetters.length === originalTextContent.length
    ) {
      let newCount = shuffledToggleLetters.length;
      function revertToOriginalString() {
        shuffledToggleLetters =
          shuffledToggleLetters.slice(0, newCount - 1) +
          originalTextContent.slice(newCount - 1);
        elem.innerText = shuffledToggleLetters;
        newCount--;
        if (shuffledToggleLetters !== originalTextContent)
          requestAnimationFrame(revertToOriginalString);
      }
      requestAnimationFrame(revertToOriginalString);
      console.log(count);
    } else if (shuffledToggleLetters.length !== originalTextContent.length) {
      shuffledToggleLetters +=
        toggleLetters[Math.floor(Math.random() * toggleLetters.length)];
      elem.innerText =
        shuffledToggleLetters +
        originalTextContent.slice(shuffledToggleLetters.length);
      count++;
      requestAnimationFrame(handleToggle);
    }
  }
}
