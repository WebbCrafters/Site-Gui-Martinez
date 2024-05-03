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