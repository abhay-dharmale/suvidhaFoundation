(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();

const menuSwiper = () =>{
  let menuButton = document.querySelector('.menu-button');
    let openMenu = function () {
      swiper.slidePrev();
    };
    let swiper = new Swiper('.swiper1', {
      slidesPerView: 'auto',
      initialSlide: 1,
      resistanceRatio: 0,
      slideToClickedSlide: true,
      on: {
        slideChangeTransitionStart: function () {
          let slider = this;
          if (slider.activeIndex === 0) {
            menuButton.classList.add('cross');
            // required because of slideToClickedSlide
            menuButton.removeEventListener('click', openMenu, true);
          } else {
            menuButton.classList.remove('cross');
          }
        },
        slideChangeTransitionEnd: function () {
          let slider = this;
          if (slider.activeIndex === 1) {
            menuButton.addEventListener('click', openMenu, true);
          }
        },
      },
    });
}

const landingPageSwiper = () =>{
  let swiper = new Swiper(".landing-page-content .mySwiper", {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },
  });
}

const page2Swiper = () => {
  var swiper = new Swiper(".cards-wrapper-swiper .mySwiper", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  });
}



menuSwiper();
landingPageSwiper();
page2Swiper();