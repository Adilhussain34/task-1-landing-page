var cursor = document.querySelector("#cursor")
document.addEventListener("mousemove", function (dets) {
  cursor.style.left = `${dets.x}px`
  cursor.style.top = `${dets.y}px`
})



// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });


// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();




// function code() {
//      gsap.registerPlugin(ScrollTrigger);
 
 
//  const locoScroll = new LocomotiveScroll({
//    el: document.querySelector("body"),
//    smooth: true,
//    smoothMobile: true
//  });
//  locoScroll.on("scroll", ScrollTrigger.update);
 
//  ScrollTrigger.scrollerProxy("body", {
//    scrollTop(value) {
//      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//    },
//    getBoundingClientRect() {
//      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//    },
//    pinType: document.querySelector("body").style.transform ? "transform" : "fixed"
//  });
 


// let images = gsap.utils.toArray('.z-out')

// images.forEach((item, index) => {

//   let exptl = gsap.timeline({
//     scrollTrigger:{
//       trigger: item,
//       start: "top 85%",
//       end: "top 5%",
//       scrub: 2,
//       markers: true,
//       scroller: 'body'
//     }
//   });
//   exptl.from(item, {
//     x: 100,
//     opacity: 0,
//     duration: 1
//   });
  
// });



 
 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// ScrollTrigger.refresh();
// }
// code();

gsap.from("#dog",{

        delay: 0.4,
        optcity: 0,
        duration: 3,
        y: -600,
      
      })
    







var tl = gsap.timeline();
tl.to("#bottel", {
    scrollTrigger: {
        trigger: "#bottel",
        start: "top 0%",
        end: "top -500%",
        
        pin: true,
        // markers: true,
        scroller: "body",
       
        scrub:5
        },
        rotate: -15,
        opicity:0,
        // ease:Expo.easeInOut
})


var overlay = document.querySelectorAll(".overlay");
document.querySelectorAll("#top-nav button").forEach(function (ekDiv, idx) {
  ekDiv.addEventListener("mouseover", function () {
    overlay[idx].style.opacity = 1;
    overlay[idx].style.transform = "translateY(-10px)";
  })
  ekDiv.addEventListener("mouseleave", function () {
    overlay[idx].style.opacity = 0;
    overlay[idx].style.transform = "translateY(10px)";
  })
})
