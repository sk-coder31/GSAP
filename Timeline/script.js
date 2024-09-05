var t1 = gsap.timeline();
var menu = document.querySelector("#nav i");
var close = document.querySelector("#full i"); 
t1.to("#full",{
    right:0,
    duration:0.5
})
t1.from("#full h4",{
    x:100,
    duration:0.5,
    stagger:0.28,
    opacity:0
})
t1.from("#full i",{
    opacity:0
})
t1.pause();
menu.addEventListener("click",()=>{
    t1.play();
})
close.addEventListener("click",()=>{
    t1.reverse();
})