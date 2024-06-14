let menuAberto = false;

function expandirMenu() {
    const menu = document.querySelector('.espacoMenu');
    const iconMenu = document.querySelector('#iconMenuDois');

    if (!menuAberto) {
        menu.classList.add('aberto'); // Adiciona a classe 'aberto' para mostrar o menu
    } else {
        menu.classList.remove('aberto'); // Remove a classe 'aberto' para esconder o menu
    }

    menuAberto = !menuAberto; // Inverte o estado do menu
}

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.itemVantagens');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });
});
