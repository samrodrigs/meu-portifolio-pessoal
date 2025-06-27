// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Referências aos elementos do formulário no HTML.
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Referências aos elementos de mensagem de erro/sucesso.
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const successMessage = document.getElementById('successMessage');

    // Valida o formato básico de um e-mail.
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Limpa todas as mensagens de erro e sucesso exibidas.
    function clearMessages() {
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';

        successMessage.textContent = '';
        successMessage.style.color = '';
        successMessage.style.borderColor = '';
        successMessage.style.backgroundColor = '';
    }

    // Adiciona o ouvinte de evento para a submissão do formulário.
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o recarregamento da página.

            clearMessages(); // Limpa mensagens anteriores.

            let isValid = true; // Flag de validação.

            // Validação do Campo Nome.
            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Por favor, digite seu nome.';
                isValid = false;
            } else if (nameInput.value.trim().length < 2) {
                nameError.textContent = 'Seu nome deve ter pelo menos 2 caracteres.';
                isValid = false;
            }

            // Validação do Campo E-mail.
            if (emailInput.value.trim() === '') {
                emailError.textContent = 'Por favor, digite seu e-mail.';
                isValid = false;
            } else if (!isValidEmail(emailInput.value.trim())) {
                emailError.textContent = 'Por favor, digite um e-mail válido.';
                isValid = false;
            }

            // Validação do Campo Mensagem.
            if (messageInput.value.trim() === '') {
                messageError.textContent = 'Por favor, digite sua mensagem.';
                isValid = false;
            } else if (messageInput.value.trim().length < 10) {
                messageError.textContent = 'A mensagem deve ter pelo menos 10 caracteres.';
                isValid = false;
            }

            // Lógica final após a validação.
            if (isValid) {
                successMessage.textContent = 'Mensagem enviada com sucesso! Agradeço o contato.';
                successMessage.style.color = '#28a745';
                successMessage.style.borderColor = '#28a745';
                successMessage.style.backgroundColor = '#e6ffed';
                contactForm.reset(); // Limpa os campos do formulário.

                // A lógica para enviar os dados para um servidor (backend) iria aqui.
            } else {
                successMessage.textContent = 'Por favor, corrija os erros no formulário.';
                successMessage.style.color = '#dc3545';
                successMessage.style.borderColor = '#dc3545';
                successMessage.style.backgroundColor = '#f8d7da';
            }
        });
    } else {
        console.error("Erro JavaScript: Formulário com ID 'contactForm' não encontrado no HTML.");
    }

    // Limpa mensagens de erro individuais enquanto o usuário digita.
    if (nameInput) nameInput.addEventListener('input', clearMessages);
    if (emailInput) emailInput.addEventListener('input', clearMessages);
    if (messageInput) messageInput.addEventListener('input', clearMessages);
});