gsap.from("#page2 h1", {
    x: "-65%", // Move the element from 65% off-screen to the left
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      markers: true,
      start: "top 0%",
      end: "top -150%",
      scrub: 2,
      pin: true
    }
  });
  