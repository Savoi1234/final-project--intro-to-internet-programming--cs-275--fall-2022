window.onload = () => {
    let pageBody = document.querySelector(`body`);
    let menuButton = document.getElementById(`menu`);
    let navigationMenu = document.querySelector(`nav`);
    let modalButton = document.getElementById(`modal`);
    let modalContent = document.querySelector(`div`);

    menuButton.addEventListener(`click`, toggleMenu);
    modalButton.addEventListener(`click`, showModal);
    modalContent.addEventListener(`click`, hideModal);
    document.addEventListener(`keydown`, closeModal);

};
