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

let clutter = "";

document.querySelector(".btns").textContent.split("").forEach((e) => {
    if (e === " ")
        clutter += "<span>&nbsp;</span>";
    else
        clutter += `<span class="inline-block">${e}</span>`;
});

document.querySelector(".btns-container a").innerHTML = clutter;

// Function to animate the spans when mouse is over
function animateOnMouseOver() {
    gsap.to(".btns-container a span", {
        y: "-200%",
        stagger: -0.03,
        ease: "cubic-bezier(0.645, 0.045, 0.355, 1)"
    });
}

// Function to animate the spans when mouse leaves
function animateOnMouseLeave() {
    gsap.to(".btns-container a span", {
        y: "0%",
        stagger: 0.03, // Adjust the stagger value if needed
        ease: "cubic-bezier(0.645, 0.045, 0.355, 1)"
    });
}

// Add mouseover event listener
document.querySelector(".btns-container a").addEventListener("mouseover", animateOnMouseOver);

// Add mouseleave event listener
document.querySelector(".btns-container a").addEventListener("mouseleave", animateOnMouseLeave);










navBarAnime();
menuBtn();