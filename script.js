// Welcome message
console.log("Welcome to Divine's Portfolio!");

// Smooth scrolling for navigation links
const links = document.querySelectorAll("nav a");

links.forEach(function(link) {
    link.addEventListener("click", function(event) {

        event.preventDefault();

        const section = document.querySelector(
            this.getAttribute("href")
        );

        section.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Button interaction
const button = document.querySelector(".button");

button.addEventListener("click", function() {
    console.log("Thanks for visiting my portfolio!");
});