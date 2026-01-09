const portfolio_items = gsap.utils.toArray(".portfolio-item");
console.log(portfolio_items);

portfolio_items.forEach((eachItem) => {
  const timeline = gsap.timeline({
    paused: true,
    defaults: { ease: "power4.inOut", duration: 0.3},
  });
  const bottomLayer = eachItem.querySelector(".copy");
  const upperLayer = eachItem.querySelector(".original");
  const line = eachItem.querySelector(".line");
  timeline
    .to(upperLayer, {
      yPercent: -100,
    })
    .to(
      bottomLayer,
      {
        yPercent: -110,
      },
      "<"
    )
    .to(
      line,
      {
        scaleX: 1,
        transformOrigin: "left",
      },
      "<"
    );
  eachItem.addEventListener("mouseenter", () => timeline.play());
  eachItem.addEventListener("mouseleave", () => timeline.reverse());
});
