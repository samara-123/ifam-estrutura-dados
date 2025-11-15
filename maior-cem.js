let n = parseInt(prompt("quantos numeros?"));
let soma = 0;
for (let i = 0; i < n; i++){
    soma+= parseFloat(prompt(`numero ${i + 1}: `));
}
if (soma > 100) document.writeln(`soma = ${soma}`);
else document.writeln(" a soma nao e maior que 100");
 
