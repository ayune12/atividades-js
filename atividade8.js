let p = 0;

for (let i = 1; i <= 5; i++) {
    let n = Number(prompt("informe um número: "));
    
    if(n > 0){
        p++;
    }
}
console.log("Quantidade de números positivos: ", p);
