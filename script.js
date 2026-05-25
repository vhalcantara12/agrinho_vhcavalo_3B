// Aguarda o DOM ser totalmente carregado para evitar erros de execução
document.addEventListener("DOMContentLoaded", () => {
    
    /* ==========================================================================
       1. FUNCIONALIDADE: MODO ESCURO
       ========================================================================== */
    const btnDarkMode = document.getElementById("toggle-dark-mode");
    
    btnDarkMode.addEventListener("click", () => {
        // Alterna a classe no body
        document.body.classList.toggle("dark-mode");
        
        // Altera o texto do botão de forma dinâmica para feedback visual
        if (document.body.classList.contains("dark-mode")) {
            btnDarkMode.textContent = "☀️ Modo Claro";
        } else {
            btnDarkMode.textContent = "🌓 Modo Escuro";
        }
    });

    /* ==========================================================================
       2. FUNCIONALIDADE: INTERAÇÃO E MENSAGEM DINÂMICA
       ========================================================================== */
    const btnConhecer = document.getElementById("btn-conhecer");
    const msgBox = document.getElementById("dynamic-message-box");
    const msgText = document.getElementById("dynamic-text");

    // Lista de frases dinâmicas sobre sustentabilidade no agro
    const fatosAgro = [
        "💡 Você sabia? A agricultura de precisão pode reduzir em até 30% o uso de água na lavoura!",
        "🌱 Fato Ecológico: O plantio direto evita a erosão e mantém o carbono estocado com segurança no solo.",
        "🚜 Tecnologia: Drones agrícolas ajudam a identificar pragas precocemente, reduzindo o uso de defensivos."
    ];

    btnConhecer.addEventListener("click", () => {
        // Sorteia uma mensagem aleatória do array
        const randomIndex = Math.floor(Math.random() * fatosAgro.length);
        msgText.textContent = fatosAgro[randomIndex];
        
        // Remove a classe 'hidden' para revelar o card com animação CSS
        msgBox.classList.remove("hidden");
        
        // Faz o scroll suave até a seção de pilares
        document.getElementById("sobre").scrollIntoView({ behavior: 'smooth' });
    });

    /* ==========================================================================
       3. FUNCIONALIDADE: VALIDAÇÃO SIMPLES DE FORMULÁRIO
       ========================================================================== */
    const form = document.getElementById("contact-form");
    const inputNome = document.getElementById("nome");
    const inputEmail = document.getElementById("email");
    
    const errorNome = document.getElementById("error-nome");
    const errorEmail = document.getElementById("error-email");
    const successMsg = document.getElementById("form-success");

    form.addEventListener("submit", (event) => {
        // Previne o comportamento padrão de atualizar a página ao enviar
        event.preventDefault();
        
        let isValid = true;

        // Validação do campo Nome (mínimo 3 caracteres)
        if (inputNome.value.trim().length < 3) {
            errorNome.style.display = "block";
            inputNome.style.borderColor = "var(--error-color)";
            isValid = false;
        } else {
            errorNome.style.display = "none";
            inputNome.style.borderColor = "#ccc";
        }

        // Validação do campo E-mail (Regex simples para verificar estrutura de e-mail)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(inputEmail.value.trim())) {
            errorEmail.style.display = "block";
            inputEmail.style.borderColor = "var(--error-color)";
            isValid = false;
        } else {
            errorEmail.style.display = "none";
            inputEmail.style.borderColor = "#ccc";
        }

        // Se passar por todas as validações, exibe sucesso e limpa os campos
        if (isValid) {
            successMsg.style.display = "block";
            form.reset(); // Limpa os campos do formulário
            
            // Oculta a mensagem de sucesso após 4 segundos
            setTimeout(() => {
                successMsg.style.display = "none";
            }, 4000);
        }
    });
});