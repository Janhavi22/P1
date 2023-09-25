// ---------------------loader---------------------
var tl = gsap.timeline()
function time(){
    var a=0
    setInterval(function(){
        a = a + Math.floor(Math.random()*20)
        if(a<100){
            document.querySelector("#loader h1").innerHTML = a+"%"
        }else{
            a = 100
            document.querySelector("#loader h1").innerHTML = a+"%"
        }
        
    },150)
}
tl.to("#loader h1" ,{
    delay:0.5,
    duration:1,
    onStart:time()
})
tl.to("#loader",{
    top:"-100vh",
    delay:0.4,
    duration:1.5
})
// --------------------------menu----------------------------
function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
// -------------------------heading----------------------------  
gsap.to("#page1 h1",{
    transform:"translateX(-100%)",
    fontWeight:"100",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        // markers:true,
        start:"top 0",
        end:"top -200%",
        scrub:2,
        pin:true
    }
})

var ts = gsap.timeline()
ts.from("#video",{
  transform:"translate-y-2/4",
  scale:0.6,
   duration:2,
   scrollTrigger:{
    trigger:"#video",
    scroller:"body",
    
    start:"top 90%",
    scrub:2,

}
})
// ---------------------------title----------------------

// var t2=gsap.timeline()
// t2.from("title",{
//    y : -100,
    
//     scrollTrigger:{
//         trigger:"#title",
//         scroller:"body",
//         markers:true,
//         start:"bottom bottom",
//         end:"top top",
//         scrub:2,
//         pin:true
//     }
// })

//-------------------MouseEvent----------------
window.addEventListener("mousemove", function (details){
    var cir = document.querySelector("#cir");
    var xval = gsap.utils.mapRange(
        0,
        window.innerWidth,
        200 + cir.getBoundingClientRect().width / 2,
        window.innerWidth - (200 + cir.getBoundingClientRect().width / 2),
        details.clientX,
    );
    gsap.to("#cir",{
        left: xval,
        ease: Power3,
        
    });
});
// function text(a){
//     a.style.bgColor="black",
//     a.style.color="white"
// }
// text(b){
//     a.style.bgColor="black"
//     a.style.color="white"
// }