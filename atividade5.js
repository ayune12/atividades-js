let a = Number(prompt("Insira sua primeira nota: "));
let b = Number(prompt("Insira sua segunda nota: "));
let c = Number(prompt("Insira sua terceira nota: "));
let media = a + b + c /3;

if(media >= 7){
    console.log("Aprovado");
}else if(media >= 5 && media < 7 ){
    console.log("Recuperação");
}else if(media < 5){
    console.log("Reprovado");
}
