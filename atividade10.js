let numero = parseInt(prompt("Digite um número positivo:"));

if (numero < 1) {
    alert("não é numero positivo");
} else {
    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    alert("O fatorial de " + numero + " é: " + fatorial);
}
