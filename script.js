// Toggler for navigation menu
const toggler = document.querySelector(".toggler");
const navLinks = document.querySelector(".nav-links"); // Updated to match HTML
const navItems = document.querySelectorAll(".nav-item");

toggler.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
});

navItems.forEach((item) => {
    item.addEventListener("click", function () {
        navItems.forEach((i) => i.classList.remove("nav-item-active")); // Corrected syntax
        this.classList.add("nav-item-active");
        navLinks.classList.toggle("nav-active");
    });
});

// Handle resume download
document.querySelector('.download-btn').addEventListener('click', function() {
    console.log('Resume download');
    alert('Thank you for downloading my resume!');
});

// Initialize EmailJS
(function() {
    emailjs.init("ishajadhav910@gmail.com"); // Replace with your EmailJS user ID
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // These IDs from the previous steps
    emailjs.sendForm('ishajadhav910@gmail.com', 'Hire-Me', this)
        .then(function() {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send message. Please try again later.');
            console.error('EmailJS error:', error); // Log the error for debugging
        });
});

// Filter projects
const projectsTabBtns = document.querySelectorAll(".projects-tab-btn");
const projectsItems = document.querySelectorAll(".projects-item");

projectsTabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        projectsTabBtns.forEach((btn) => 
            btn.classList.remove("projects-tab-btn-active")
        );

        this.classList.add("projects-tab-btn-active");

        projectsItems.forEach((item) => {
            if (item.classList.contains(btn.id)) {
                item.classList.remove("hidden");
            } else {
                item.classList.add("hidden");
            }
        });
    });
});
