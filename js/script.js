window.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");

    if (preloader) {
        preloader.style.display = "none";
    }
});
var typed = new Typed(".multiple-text", {
    strings: [
        "BS Information Technology Student",
        "Front-End Developer",
        "UI Enthusiast",
        "JavaScript Learner"
    ],
    typeSpeed: 55,
    backSpeed: 35,
    backDelay: 1800,
    startDelay: 500,
    loop: true,
    smartBackspace: true,
    showCursor: true,
    cursorChar: "|"
});