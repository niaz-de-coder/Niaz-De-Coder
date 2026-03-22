// Reveal elements on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Mobile Menu Toggle
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');

        menuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
            } else {
                mobileMenu.classList.add('hidden');
                menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            }
        });

        // Close mobile menu on click
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            });
        });

        // Form Handling
        const contactForm = document.getElementById('contact-form');
        const modal = document.getElementById('success-modal');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            contactForm.reset();
        });

        function closeModal() {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('main-nav');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-md', 'py-1');
                nav.classList.remove('py-4');
            } else {
                nav.classList.remove('shadow-md', 'py-1');
                nav.classList.add('py-4');
            }
        });