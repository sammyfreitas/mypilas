function entrar() {
    let usuarioCorreto = "_variable_usuario";
    let senhaCorreta = "1234";

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if (usuario === usuarioCorreto && senha === senhaCorreta){
        alert("Login realizado com sucesso!")
        window.location.href = "painel.html"
    }
    else {
        document.getElementById("mensagem").textContent = "Usuário ou senha incorretos!";
    }

}

function sair(){
    alert("Beijinho, beijinho, tchau, tchau")
    window.location.href = "login.html"
}