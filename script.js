document.addEventListener('DOMContentLoaded', function() {
    const botoes = document.querySelectorAll('.botao-mostrar-respostas');
    
    botoes.forEach(botao => {
        botao.addEventListener('click', function() {
            const resposta = this.previousElementSibling;
            
            if (resposta.style.display === 'block') {
                resposta.style.display = 'none';
                this.textContent = 'Mostrar resposta';
            } else {
                resposta.style.display = 'block';
                this.textContent = 'Ocultar resposta';
            }
        });
    });
});