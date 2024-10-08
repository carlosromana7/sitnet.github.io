// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll('nav a, .btn-primary');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });

    // Form submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Gracias por su mensaje. Nos pondremos en contacto pronto.');
        form.reset();
    });

    // Animate services on scroll
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(animateOnScroll, { threshold: 0.1 });

    const animateElements = document.querySelectorAll('.service-item, .project-item, .cert-item');
    animateElements.forEach(el => observer.observe(el));

    // Simple testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;

    function showNextTestimonial() {
        testimonials[currentTestimonial].style.display = 'none';
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonials[currentTestimonial].style.display = 'block';
    }

    setInterval(showNextTestimonial, 5000); // Change testimonial every 5 seconds
});