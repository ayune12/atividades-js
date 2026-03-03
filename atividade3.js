while(true){

let a = Number(prompt("Digite um número:"));
let b = Number(prompt("Digite um número: "));
let operacao = parseInt(prompt("1-soma\n2-subtração\n3-divisão\n4-multiplicação: "));

if(operacao == 1){
    console.log(a+b);
}else if(operacao == 2){
    console.log(a-b);
}else if(operacao == 3){
    console.log(a/b);
}else if(operacao == 4){
    console.log(a*b);
}else if(operacao == 0){
    break
}
}

