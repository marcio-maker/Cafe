document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuIcon) {
        mobileMenuIcon.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-times');
        });
    }

    // Quantity Controls
    const decreaseButtons = document.querySelectorAll('.decrease');
    const increaseButtons = document.querySelectorAll('.increase');

    decreaseButtons.forEach(button => {
        button.addEventListener('click', function () {
            const quantityElement = this.nextElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
            }
        });
    });

    increaseButtons.forEach(button => {
        button.addEventListener('click', function () {
            const quantityElement = this.previousElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
        });
    });

    // Add to Cart Functionality
    const addToCartButtons = document.querySelectorAll('.btn-order, .add-to-cart-main');
    const cartCount = document.querySelector('.cart-count');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            let count = parseInt(cartCount.textContent);
            count++;
            cartCount.textContent = count;

            // Animation feedback
            this.textContent = 'Adicionado!';
            setTimeout(() => {
                this.textContent = this.classList.contains('btn-order') ? 'Pedir Agora' : 'Adicionar ao Carrinho';
            }, 1000);
        });
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth',
                });

                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileMenuIcon.querySelector('i').classList.remove('fa-times');
                }
            }
        });
    });

    // Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Here you would typically send the data to a server
            console.log('Form submitted:', { name, email, message });

            // Show success message
            alert('Obrigado por sua mensagem! Entraremos em contato em breve.');
            contactForm.reset();
        });
    }

    // Scroll Animation
    const animateElements = document.querySelectorAll('.product-card, .about-content, .about-image');

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;

        animateElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top + scrollPosition;
            const windowHeight = window.innerHeight;

            if (scrollPosition > elementPosition - windowHeight + 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    });

    // Initialize elements with animation properties
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Trigger scroll event to check initial positions
    window.dispatchEvent(new Event('scroll'));
});
