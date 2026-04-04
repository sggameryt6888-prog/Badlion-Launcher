// script.js

// Smooth scrolling effect
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Fade-in animation on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0,
    rootMargin: '0px 0px -50% 0px'
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Button glow effect
const buttons = document.querySelectorAll('.glow-button');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.classList.add('glow');
    });
    button.addEventListener('mouseleave', () => {
        button.classList.remove('glow');
    });
});

// Card hover lift effect
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('lift');
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('lift');
    });
});

