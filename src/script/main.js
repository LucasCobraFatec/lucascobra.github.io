// Cria o observador de interseção
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Se o elemento estiver visível na tela
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { 
    threshold: 0.15 // Ativa quando 15% da seção estiver visível
});

// Seleciona todas as suas seções e manda o observador monitorá-las
const elements = document.querySelectorAll('section');
elements.forEach((el) => observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});