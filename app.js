

let t1 = new gsap.timeline({})
t1.from(".img", {
    duration: 2,
    stagger: 0.2,
    scale: 0,
    ease:Expo.easeInOut
})
t1.to(".imgLast5", {
    duration: 1,
    scale: 3.5,
    ease:Expo.easeInOut
})
.call(function() {
    gsap.to('.content', {
        duration: 0.1,
        opacity: 1
    });
}, null, '+=0.1')
t1.from(".nav_anim", {
    duration: 1,
    opacity:0,
    ease:Expo.easeInOut
})
t1.to(".anim_item", {
    duration: 1,
    stagger:0.2,
    opacity:1,
    ease:Expo.easeInOut
})
.call(function() {
    gsap.from('.content', {
        duration: 1,
        opacity: 1
    });
    gsap.to('.slider', {
        duration: 1,
        opacity: 1
    });
}, null, '+=0.1')
t1.play();
function animation(img_name) {
    gsap.to('.img', {
        duration: 1,
        opacity: 0,
        scale: 0,
        ease:Expo.easeInOut
    })
    gsap.to(img_name, {
        duration: 1,
        opacity: 1,
        scale: 3.85,
        zIndex:2,
        ease:Expo.easeInOut
    })
}
