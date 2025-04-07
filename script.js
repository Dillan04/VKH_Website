document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        link.classList.add('clicked');
        setTimeout(() => link.classList.remove('clicked'), 1000);
    });
});

// Select menu toggle button and navbar links
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Toggle active class on click
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

