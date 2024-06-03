// sessão
function validarSessao() {
    var nome = sessionStorage.NOME_USUARIO;
    var usuario = sessionStorage.USER_USUARIO;

    var nomeCompleto = document.getElementById("nomeCompleto");
    var userName = document.getElementById("userName");

    if (nome != null && usuario != null) {
        nomeCompleto.innerHTML = nome;
        userName.innerHTML = usuario;
    } else {
        // window.location = "login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "index.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    // divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

