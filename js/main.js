// js/main.js

document.addEventListener('DOMContentLoaded', function() {
    // Counter animation for statistics
    const counters = document.querySelectorAll('.counter');
    
    if (counters.length > 0) {
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const stepTime = 50;
            const steps = duration / stepTime;
            const increment = target / steps;
            
            let current = 0;
            const timer = setInterval(() => {
                current += increment;
                counter.innerText = Math.ceil(current);
                
                if (current >= target) {
                    counter.innerText = target;
                    clearInterval(timer);
                }
            }, stepTime);
        });
    }

    // Mobile menu toggle (if you implement a mobile menu)
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});