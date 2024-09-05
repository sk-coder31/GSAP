gsap.to("#box1",{
    x:1000,
    duration:4,
    delay:1,
    rotate:360,
    backgroundColor:"white",
    borderRadius:"50%",
    scale:0.5   
})

gsap.from("#box2",{
    x:1000,
    duration:4,
    delay:1,
    rotate:-360,
    backgroundColor:"orange",
    borderRadius:"50%",
    // repeat -1 is infinite
    repeat:2
    // yoyo:true
})
// gsap.from("h1",{
//     color:"orange",
//     duration:2,
//     opacity:0,
//     y:20,
//     stagger:1
// })
var t1 = gsap.timeline();
t1.from(".title",{
    y:20,
    opacity:0,
    duration:1,
    delay:0.5
})
t1.from("h2",{
    y:20,
    opacity:0,
    duration:1,
    stagger:0.3,
    delay:0.5
})
t1.from(".logo",{
    y:-30,
    opacity:0,
    duration:1,
    
})