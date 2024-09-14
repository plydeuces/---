
        document.addEventListener('DOMContentLoaded', () => {
            // Smooth scroll for navbar links
            document.querySelectorAll('nav a').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });

            // Fade-in animation on scroll
            const sections = document.querySelectorAll('section');

            function onScroll() {
                sections.forEach(section => {
                    const sectionTop = section.getBoundingClientRect().top;
                    const viewportHeight = window.innerHeight;

                    if (sectionTop < viewportHeight - 150) {
                        section.classList.add('fade-in');
                    } else {
                        section.classList.remove('fade-in');
                    }
                });

                // Navbar scroll effect
                const header = document.querySelector('header');
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }

            window.addEventListener('scroll', onScroll);
            onScroll(); // Trigger on initial load

            // Scroll gallery with arrow
            const scrollArrow = document.getElementById('scrollArrow');
            const imageContainer = document.querySelector('.image-container');

            scrollArrow.addEventListener('click', () => {
                imageContainer.scrollBy({
                    left: 300,
                    behavior: 'smooth'
                });
            });
        });
