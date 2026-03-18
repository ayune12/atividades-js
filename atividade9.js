let usuarioCorreto = "admin";
let senhaCorreta = "1234";

let tentativas = 0;
let maxTentativas = 3;

while (tentativas < maxTentativas) {
    let usuario = prompt("Informe o usuário:");
    let senha = prompt("Informe a senha:");

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        alert("Login realizado com sucesso");
        break;
    } else {
        tentativas++;
        alert("Usuário ou senha incorretos. Tentativa " + tentativas + " de " + maxTentativas);
    }

    if (tentativas === maxTentativas) {
        alert("Acesso bloqueado");
    }
}
