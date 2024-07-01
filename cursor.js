gsap.set('.cursor', {
    xPercent: -50, yPercent: -50,  opacity: 1
  });
  
  window.addEventListener("mousemove", (e) => {
  
    gsap.to('.cursor', {
      duration: 1.5,
      overwrite: "auto",
      x: e.clientX,
      y: e.clientY,
      stagger: 0.15,
      ease: 'power3.out',
    });
  
    let TL = gsap.timeline({
      defaults: {duration: 0.5, ease: "none"}
    });
  
    TL.to('.cursor', {
      overwrite: "auto",
      stagger: {amount: 0.15, from: "start", ease: "none"}
    });
    TL.to(
      '.cursor',
      {
        overwrite: "auto",
        stagger: {amount: 0.15, from: "end", ease: "none"}
      },
      "<+=2.5"
    );
  });
const slider = document.querySelector(".slider")
slider.addEventListener("mouseover", () => {
      document.querySelector(".cursor").classList.add("hidden")
})
slider.addEventListener("mouseleave", () => {
    document.querySelector(".cursor").classList.remove("hidden")
})
document.addEventListener('DOMContentLoaded', (event) => {
    const items = document.querySelectorAll(".zoom");
    items.forEach(item => {
        item.addEventListener("mouseenter", () => {
            console.log("Salam");
            document.querySelector("cursor").classList.add("zoomStart");
        });
        item.addEventListener("mouseleave", () => {
            document.querySelector("cursor").classList.remove("zoomStart");
        });
    });
});