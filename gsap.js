gsap.to(".box", {
    y: 100,
    duration: 0.3,

    stagger: {
        each: 0.3,
        from: "start",
        repeat: -1,
        yoyo: true,
    }

});

var animation = gsap.timeline();
animation
    .to(".christ", { y: -2200, duration: 3 })

.to(".grey", { x: 750, duration: 3 })

.to(".box", { y: 250, duration: 3 })

;