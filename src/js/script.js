const buttonMenu = document.getElementById('menu');


buttonMenu.addEventListener('click', () => {

    const menu = document.getElementById("opcoes_menu")
    menu.classList.toggle('show_menu');
    menu.classList.toggle('is-activ');
    
})
