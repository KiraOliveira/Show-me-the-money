// function iniciaModal(modalID) {
//     const modal = document.getElementById(modalID);
//     console.log(modal);
//     // modal.classList.add('mostrar');
// }


const iniciaModal = () => {
    let modal = document.getElementById("modal-promocao");
    modal.classList.add("mostrar");
    return console.log(modal);
}

document.addEventListener('mouseout', iniciaModal);