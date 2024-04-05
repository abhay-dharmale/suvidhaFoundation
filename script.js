(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();

const navBarAnime = () =>{
    gsap.to("nav", {
        y:"-100%",
        opacity: 0,
        scrollTrigger: {
            trigger: "nav",
            start: "top -10%",
            end: "top -40%",
            scrub: 5
        }
    });
};

const menuBtn = () =>{
    const menuIcon = document.querySelector(".menu-icon");
    const closeIcon = document.querySelector(".close-icon");
    const menu = document.querySelector(".menu");

    menuIcon.addEventListener("click", () =>{
        gsap.to(menu, {
            right: 0,
            ease: "power4.inOut",
        });
    });

    closeIcon.addEventListener("click", () =>{
        gsap.to(menu, {
            right: "-100%",
            ease: "power4.inOut",
        });
    });
};

const page1Swiper = () =>{
    var swiper = new Swiper(".mySwiper", {
        speed: 600,
        parallax: true,
        loop:true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
};

navBarAnime();
menuBtn();
page1Swiper();
