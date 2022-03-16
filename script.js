function verificaEmail () {
    let emailInserido = document.querySelector('#email');
    let emailTestado = email.value;
    if (emailTestado.includes("@" && ".")) {
        alert ("E-mail válido")
        error.setAttribute ('style', 'color: green');
        botao.setAttribute ('style', 'background-color: green' )
        error.innerHTML = 'E-mail cadastrado com sucesso!*';
        setInterval('window.location.reload()', 3000);
    } else {
        alert ("E-mail inválido.")
        error.setAttribute ('style', 'color: red');
        botao.setAttribute ('style', 'background-color: red' )
        error.innerHTML = 'Insira um e-mail válido*';
        setInterval('window.location.reload()', 3000);
    }
}

