document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("id_email");
    const cpfInput = document.getElementById("id_cpf");

    form.addEventListener("submit", function(event) {
        const emailVal = emailInput.value.trim();
        const cpfVal = cpfInput.value.trim();

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

        const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

        if (!emailRegex.test(emailVal)) {
            alert("Por favor, insira um e-mail válido!");
            emailInput.focus();
            event.preventDefault();
            return;
        }

        if (!cpfRegex.test(cpfVal)) {
            alert("Por favor, insira o CPF válido!");
            cpfInput.focus();
            event.preventDefault();
            return;
        }

        alert("Mensagem enviada com sucesso!");
    });
});