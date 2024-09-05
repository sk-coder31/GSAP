let currentX = 0;

window.addEventListener("wheel", (e) => {
    let delta = e.deltaY > 0 ? -100 : 100; // Scroll up or down
    currentX += delta;

    // Animate .marque horizontally
    gsap.to(".marque", {
        x: currentX,
        duration: 2,
        ease: "none"
    });

    // Rotate images within .marque
    if (e.deltaY > 0) {
        gsap.to(".marque img", {
            rotate: 180,
            duration: 0.5, // Adding duration for smooth rotation
            ease: "power2.inOut"
        });
    } else {
        gsap.to(".marque img", {
            rotate: 0,
            duration: 0.5, // Adding duration for smooth rotation
            ease: "power2.inOut"
        });
    }
});
