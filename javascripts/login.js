async function entrar() {

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    let resposta = await fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            usuario: usuario,
            senha: senha
        })
    });

    if (resposta.ok) {
        alert("Login realizado com sucesso!");
        window.location.href = "painel.html";
    }
    else {
        document.getElementById("mensagem").textContent = "Usuário ou senha incorretos!";
    }

}

function sair() {
    alert("Beijinho, beijinho, tchau, tchau");
    window.location.href = "login.html";
}