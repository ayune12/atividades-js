let soma = 0;
let numero;

while (true) {
  numero = Number(prompt("Informe um número. Caso queira encerrar digite 0:"));

  if (numero === 0) {
    break;
  }

  soma += numero;
}

alert("Soma total: " + soma)
