const body = document.querySelector('html');

const redirecionamento = () => {
    const bg = document.querySelector('.popup-bg');
    const popup =  document.getElementById('popup');
    const botao = document.getElementById('fechar');
    bg.classList.add("mostrar");
    botao.addEventListener("click", (e) => {
        bg.classList.remove("mostrar");
        bg.remove();
    });
}

body.addEventListener("mouseleave", redirecionamento);
