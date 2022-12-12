window.onload = () => {
    // Select the modal button and the modal element
    let modalButn = document.getElementById(`mod-elem`);
    let modalElem = document.querySelectorAll(`div`)[0];

    // Select the men button and the menu element
    let menButn = document.getElementById(`men-elem`);
    let menuElem = document.querySelector(`nav`);

    // Add an event listener to activate the modal when the button is clicked
    modalButn.addEventListener(`click`, () => {
        if (modalElem.classList.contains(`none`)) {
            modalElem.classList.remove(`none`);
        }
    });

    // Add an event listener to deactivate the modal when the user clicks outside the content panel
    modalElem.addEventListener(`click`, () => {
        if (!modalElem.classList.contains(`none`)) {
            modalElem.classList.add(`none`);
        }
    });

    // Add an event listener to activate the menu when the button is clicked
    menButn.addEventListener(`click`, () => {
        if (!menuElem.classList.contains(`none`)) {
            menuElem.classList.add(`none`);
        }else{
            menuElem.classList.remove(`none`);
        }
    });

    // Add an event listener to deactivate the modal when the user presses the Escape key
    document.addEventListener(`keydown`, (e) => {
        if (e.key === `Escape` && !modalElem.classList.contains(`none`)) {
            modalElem.click();
        }
    });
};
