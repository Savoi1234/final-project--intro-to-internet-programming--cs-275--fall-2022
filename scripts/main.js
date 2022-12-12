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
function showModal() {
    modalContent.classList.remove(`modal-hidden`);
    pageBody.classList.add(`no-scroll`);
}

function hideModal() {
    modalContent.classList.add(`modal-hidden`);
    pageBody.classList.remove(`no-scroll`);
}
