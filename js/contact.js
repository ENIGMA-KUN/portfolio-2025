// js/contact.js

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // In a real scenario, you would send this data to a server
            // For demo purposes, we'll just show a success message
            
            // Clear form
            contactForm.reset();
            
            // Show success alert
            alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
        });
    }
});