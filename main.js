// Register Scroll Trigger Plugin
gsap.registerPlugin(ScrollTrigger);

// Wait for everything on the page to load
window.addEventListener("DOMContentLoaded", () => {
    // Create gsap timeline
    const tl = gsap.timeline({delay: 1});
    // Add fade up animation to the main title
    tl.from("h1", {y: 100, opacity: 0});
    // Add fade up animation to mouse scroll indicator
    tl.from(".mouse-scroll", {y: 50, opacity: 0});
});

// Banner parallax animation
gsap.to(".bg-image", {
    y: 200, // Move on the y axis
    scrollTrigger: {
        trigger: ".hero", // Use hero section as animation trigger
        start: "top top", // Set trigger start position
        scrub: true, // Have the animation follow the scroll position
    }
});

// Image parallax animations
const images = gsap.utils.toArray(".image img");
images.forEach(image => {
    gsap.to(image, {
        y: 200,
        scrollTrigger: {
            trigger: image.parentElement,
            scrub: true,
        }
    });
});

// Title fade up animations
const titles = gsap.utils.toArray("h2");
titles.forEach(title =>{
    gsap.from(title, {
        y: 100,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
            trigger: title,
        }
    });
});

// Initialize Lenis Smooth Scroll
const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

