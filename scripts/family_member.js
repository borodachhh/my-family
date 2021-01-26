window.onload = () => {
  gsap
    .timeline({
      defaults: {
        ease: "expo.out",
      },
    })
    .set("*", {visibility: "visible"})
    .delay(1)
    .from(".navbar-wrap", { yPercent: -100 })
    .from(".navbar__link", { opacity: 0, xPercent: -1, stagger: 0.15 })
    .delay(1)
    .from(".heading__avatar", { xPercent: -10, opacity: 0})
    .from(".heading__name", { xPercent: 10, opacity: 0})
    .from(".main-content", {yPercent: -10, opacity: 0});
  console.log("animation's played");
};
