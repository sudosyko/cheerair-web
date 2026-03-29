document.addEventListener("DOMContentLoaded", function() {
    // --- Navigation ---
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");

    navToggle.addEventListener("click", () => {
        navToggle.classList.toggle("active");
        navMenu.classList.toggle("active");
        
        // Barrierefreiheit: Status des Menüs aktualisieren
        const isExpanded = navToggle.classList.contains("active");
        navToggle.setAttribute("aria-expanded", isExpanded);
    });

    // Optional: Close menu when clicking on a menu link
    const navLinks = document.querySelectorAll(".nav-menu ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navToggle.classList.remove("active");
            navMenu.classList.remove("active");
            // Wieder auf "false" setzen
            navToggle.setAttribute("aria-expanded", "false"); 
        });
    });
    
    // --- Read More Buttons (Lineup) ---
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

    // --- NEU: Countdown Logic ---
    const countdownElement = document.getElementById("countdown");
    
    // Wir führen den Code nur aus, wenn der Countdown auch auf der Seite ist (z.B. nicht auf lineup.html)
    if (countdownElement) {
        // Das Startdatum des Festivals (Anpassen, falls sich die Uhrzeit ändert!)
        const countDownDate = new Date("Aug 28, 2026 16:00:00").getTime();

        // Aktualisiere den Countdown jede Sekunde (1000 Millisekunden)
        const x = setInterval(function() {
            
            // Heutiges Datum und Uhrzeit
            const now = new Date().getTime();
            
            // Finde die Distanz zwischen jetzt und dem Countdown-Datum
            const distance = countDownDate - now;
            
            // Zeitberechnungen für Tage, Stunden, Minuten und Sekunden
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Zahlen formatieren (immer zweistellig, z.B. "05" statt "5")
            document.getElementById("cd-days").innerHTML = days < 10 ? "0" + days : days;
            document.getElementById("cd-hours").innerHTML = hours < 10 ? "0" + hours : hours;
            document.getElementById("cd-minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
            document.getElementById("cd-seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
            
            // Wenn der Countdown abgelaufen ist, zeige einen Text an
            if (distance < 0) {
                clearInterval(x);
                countdownElement.innerHTML = "<h2 style='color: var(--color-primary); margin: 0;'>DAS FESTIVAL LÄUFT! LET'S ROCK!</h2>";
            }
        }, 1000);
    }
});