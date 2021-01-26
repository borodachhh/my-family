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
    .from(".main-heading.part-1", { yPercent: -10, opacity: 0 })
    .from(".main-image", { yPercent: -10, opacity: 0 })
    .from(".main-heading.part-2", { yPercent: -10, opacity: 0 });
};
