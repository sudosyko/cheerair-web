document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");

    navToggle.addEventListener("click", () => {
        navToggle.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Optional: Close menu when clicking on a menu link
    const navLinks = document.querySelectorAll(".nav-menu ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navToggle.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });
    
    const readMoreButtons = document.querySelectorAll(".read-more-btn");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", function() {
            const descriptionContainer = this.previousElementSibling;
            descriptionContainer.classList.toggle("expanded");

            // Button-Text ändern
            if (descriptionContainer.classList.contains("expanded")) {
                this.innerHTML = 'Weniger anzeigen <span class="arrow">▼</span>';
            } else {
                this.innerHTML = 'Mehr lesen <span class="arrow">▼</span>';
            }
        });
    });
});




