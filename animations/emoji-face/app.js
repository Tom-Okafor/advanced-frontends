gsap.registerPlugin(Flip);
const main = document.querySelector("main");
const emoji_face = document.querySelector(".face");
const left_section = document.querySelector(".left");
const right_section = document.querySelector(".right");
const eyes = document.querySelectorAll(".eyes div");

let isEmojiLeft = true;
main.addEventListener("click", () => {
  const currentEmojiState = Flip.getState(emoji_face, {
    props: "backgroundColor, borderRadius",
  });
  const currentEyesState = Flip.getState(eyes, { props: "backgroundColor" });

  if (isEmojiLeft) {
    right_section.appendChild(emoji_face);
    isEmojiLeft = false;
  } else {
    left_section.appendChild(emoji_face);
    isEmojiLeft = true;
  }
  Flip.from(currentEmojiState, {
    ease: "power3.out",
  });
  Flip.from(currentEyesState, {
    ease: "power3.out",
  });
});
