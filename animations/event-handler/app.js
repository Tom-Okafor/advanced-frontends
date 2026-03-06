const match_media = gsap.matchMedia();
const button = document.querySelector("button");
match_media.add(
  { isMobile: "(max-width: 799px)", isDesktop: "(min-width: 800px)" },
  (context) => {
    const { isMobile, isDesktop } = context.conditions;
    context.add("growButton", () => {
      gsap.to("button", {
        scale: isMobile ? 1.15 : 1.5,
        ease: "power3.in",
        repeat: -1,
        yoyo: true,
      });
    });
    button.addEventListener("click", context.growButton);
  },
);
