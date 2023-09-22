export default function validacao(valores){
    const erros = {}

    //estabelecendo o padrão dos emails
    const email_padrao = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    //erro se o nome for vazio
    if(valores.nome === ""){
        erros.nome = "O nome é obrigatório!";
    }

    //erro se o email for vazio
    if(valores.email === ""){
        erros.email = "O email é obrigatório!";
    }

    //erro se o email não está no padrão
    else if(!email_padrao.test(valores.email)) {
        erros.email = "O email não é válido!"
    }

    //erro se a mensagem for vazia
    if(valores.mensagem === ""){
        erros.mensagem = "A mensagem está vazia!";
    }   

    return erros;
}