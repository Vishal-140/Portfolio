function toggleMenu() {
    const menu = document.getElementById("part2");
    menu.classList.toggle("show");
}

let lastScrollTop = 0; // Variable to keep track of the last scroll position
const navbar = document.getElementById('nav'); // Select the navigation bar

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Get the current scroll position

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.classList.add('hidden'); // Add the hidden class to hide the navbar
        navbar.classList.add('blurred'); // Optionally add the blurred class
    } else {
        // Scrolling up
        navbar.classList.remove('hidden'); // Remove the hidden class to show the navbar
        navbar.classList.remove('blurred'); // Optionally remove the blurred class
    }

    lastScrollTop = scrollTop; // Update last scroll position
});


// GSAP Animation Timeline
var tl = gsap.timeline();

tl.from("#greeting", {
    opacity: 0,
    x: -30,
    duration: 2, // Increased duration to 2 seconds
    delay: 0.5,
    ease: "power2.out" // Added easing for smoothness
});

tl.from("#page1 h1", {
    opacity: 0,
    x: -30,
    duration: 1,
    stagger: 0.3,
    ease: "power2.out" // Added easing for smoothness
});

tl.from("#page1 h4", {
    opacity: 0,
    x: -30,
    duration: 1,
    stagger: 0.3,
    ease: "power2.out" // Added easing for smoothness
});

tl.from(".profile-photo", {
    opacity: 0,
    x: 30,
    duration: 1,
    delay: 0.5,
    scale: 0.3,
    ease: "power2.out" // Added easing for smoothness
});

// JavaScript for rotating greeting text every 2 seconds
const greetings = ["Hello!", "नमस्ते!", "नमस्कार!","નમસ્તે!","নমস্কার!"];
let index = 0;

setInterval(() => {
    document.getElementById("greeting").textContent = greetings[index];
    index = (index + 1) % greetings.length;
}, 2000); // Changed interval to 2000ms (2 seconds)