export async function onRequestPost(context) {
    const dados = await context.request.json();

    const usuario = context.env.usuario;
    const senha = context.env.senha;

    if (dados.usuario === usuario && dados.senha === senha){
        return new Response ("Autorizado", {status: 200})
    } else{
        return new Response ("Acesso Negado", {status: 401})
    }

    
}