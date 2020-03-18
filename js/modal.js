const body = document.querySelector('html');

const redirecionamento = () => {
    const popup =  document.getElementById('popup');
    const botao = document.getElementById('fechar');
    popup.classList.add("mostrar");
    botao.addEventListener("click", (e) => {
        popup.classList.remove("mostrar");
        popup.remove();
    });
}

body.addEventListener("mouseleave", redirecionamento);
