cafe.js
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const item = this.parentElement;
            const itemName = item.querySelector('h3').innerText;
            const itemPrice = item.querySelector('p').innerText;

            alert(`Adicionado ao carrinho: ${itemName} - ${itemPrice}`);
        });
    });

    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
        contactForm.reset();
    });
});