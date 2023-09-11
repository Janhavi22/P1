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
//  const scroll = new LocomotiveScroll({
//      el: document.querySelector('#main'),
//      smooth: true
// });
// ------------------------video--------------------------
var ts = gsap.timeline()
ts.from("#video",{
  transform:"translate-y-2/4",
  scale:0.6,
   duration:2,
   scrollTrigger:{
    trigger:"#video",
    scroller:"body",
    //  markers:true,
    start:"top 90%",
    scrub:2,
    // pin:true
}
})
// ---------------------------title----------------------

var t2=gsap.timeline()
t2.to("title",{
   y : -100,
    
    scrollTrigger:{
        trigger:"#title",
        scroller:"body",
        markers:true,
        start:"top 80%",
        end:"bottom 20%",
        scrub:2,
        // pin:true
    }
})
// -------------------MouseEvent----------------