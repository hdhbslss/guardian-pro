const animatedElements = document.querySelectorAll(
    '.feature-card, .protection-item, .command-group'
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

animatedElements.forEach((element) => observer.observe(element));

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    navbar.style.background = window.scrollY > 50
        ? 'rgba(8, 8, 8, 0.96)'
        : 'rgba(8, 8, 8, 0.85)';
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', function (event) {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.addEventListener('mousemove', (event) => {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;

    document.body.style.background = `
        radial-gradient(
            circle at ${x * 100}% ${y * 100}%,
            rgba(100, 140, 220, 0.04),
            #080808 35%
        )
    `;
});
