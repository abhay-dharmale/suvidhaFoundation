(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();

const navBarAnime = () =>{
    gsap.to("nav", {
        y:"-100%",
        ease: "power4.inOut",
        opacity: 0,
        // duration: 1,
        scrollTrigger: {
            trigger: "nav",
            // scroller: "main",
            // markers: true,
            start: "top -10%",
            end: "top -40%",
            scrub: 5
        }
    })
}

const menuBtn = () =>{
    document.querySelector(".menu-icon").addEventListener("click", () =>{
        gsap.to(".menu", {
            right: 0,
            ease: "power4.inOut",
            // duration: 1,
        })
    })
    
    document.querySelector(".close-icon").addEventListener("click", () =>{
        gsap.to(".menu", {
            right: "-100%",
            ease: "power4.inOut",
        })
    })
}

const page1Swiper = () =>{
    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
    //   spaceBetween: 30,
    loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev"
      },
    //   on: {
    //     autoplayTimeLeft(s, time, progress) {
    //       progressCircle.style.setProperty("--progress", 1 - progress);
    //       progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    //     }
    //   }
    });
}



navBarAnime();
menuBtn();
page1Swiper();