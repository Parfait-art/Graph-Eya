// JavaScript animation: Move the box left and right on button click

const animateBtn = document.getElementById('animateBtn');
const box = document.getElementById('box');

if (animateBtn && box) {
    animateBtn.addEventListener('click', () => {
        let position = 0;
        let direction = 1; // 1 means moving right, -1 means moving left
        const maxPosition = 200; // max pixels to move right

        const interval = setInterval(() => {
            position += direction * 5;
            box.style.transform = `translateX(${position}px)`;

            if (position >= maxPosition) {
                direction = -1;
            } else if (position <= 0) {
                direction = 1;
            }
        }, 30);

        // Stop animation after 4 seconds
        setTimeout(() => {
            clearInterval(interval);
            box.style.transform = 'translateX(0)';
        }, 4000);
    });
}

// Cookie Consent Logic
document.addEventListener('DOMContentLoaded', () => {
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptCookiesBtn = document.getElementById('acceptCookies');

    if (!localStorage.getItem('cookiesAccepted')) {
        cookieConsent.style.display = 'flex';
    } else {
        cookieConsent.style.display = 'none';
    }

    acceptCookiesBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieConsent.style.display = 'none';
    });

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Here you could add form validation or send data to a server

        // Show thank you message
        formMessage.style.display = 'block';

        // Reset form fields
        contactForm.reset();
    });
});
