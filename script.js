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


        const scriptURL = 'https://script.google.com/macros/s/AKfycbyLfqYIVhAkGtHA0gKGUazq7YHkQX3NgXMb8SkeRNQlarbCneCF-QD1qw4AMbHNVCAlww/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  
  // Show a loading state on the button if you like
  const submitBtn = form.querySelector('button[type="submit"]')
  submitBtn.disabled = true
  submitBtn.innerText = 'Sending...'

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        // Show your success modal (already in your HTML)
        document.getElementById('success-modal').style.display = 'flex';
        form.reset();
        submitBtn.disabled = false;
        submitBtn.innerText = 'Submit Booking';
    })
    .catch(error => {
        console.error('Error!', error.message);
        alert('Something went wrong. Please try again.');
        submitBtn.disabled = false;
    })
})

function closeModal() {
    document.getElementById('success-modal').style.display = 'none';
}