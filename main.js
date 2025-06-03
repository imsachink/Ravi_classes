// Set current year in footer dynamically
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth' // Smooth scrolling effect
            });
            // Close mobile menu after clicking a link
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Mobile menu toggle functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden'); // Toggle visibility of mobile menu
    });
}

// Contact form submission handling for WhatsApp
const contactForm = document.getElementById('contactForm');

if(contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Construct the WhatsApp message
        let whatsappMessage = `Hello Ravi Classes!%0A`;
        whatsappMessage += `My name is ${name}.%0A`;
        whatsappMessage += `Email: ${email}%0A`;
        if (phone) {
            whatsappMessage += `Phone: ${phone}%0A`;
        }
        whatsappMessage += `Subject: ${subject}%0A`;
        whatsappMessage += `Message: ${message}%0A%0A`;
        whatsappMessage += `I would like to know more about your courses.`;

        // WhatsApp number (replace with the actual number for Ravi Classes)
        const whatsappNumber = '918219583049'; // Indian number format without '+'

        // Construct the WhatsApp URL
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

        // Open WhatsApp in a new tab/window
        window.open(whatsappUrl, '_blank');

        contactForm.reset(); // Reset the form fields after submission
    });
}