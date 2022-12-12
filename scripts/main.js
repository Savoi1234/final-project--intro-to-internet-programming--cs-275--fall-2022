window.onload = () => {
    let pageBody = document.querySelector(`body`);
    let navigationMenu = document.querySelector(`nav`);
    let modalContent = document.querySelector(`div`);
    let menuButton = document.getElementById(`menu`);
    let modalButton = document.getElementById(`modal`);


    menuButton.addEventListener(`click`, toggleMenu);
    modalButton.addEventListener(`click`, showModal);
    modalContent.addEventListener(`click`, hideModal);
    document.addEventListener(`keydown`, closeModal);

};

function toggleMenu() {
    navigationMenu.classList.toggle(`menu-hidden`);
}

