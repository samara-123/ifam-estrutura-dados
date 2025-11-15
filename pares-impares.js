let n = parseInt(prompt("quantos numeros ?"));
let numeros = [];
    let pares = 0, impares = 0;
    for (let i = 0; i < n; i++){
let num = parseInt(prompt(`numero${i + 1}`));
numeros.push(num);
if (num % 2 === 0) pares++;
else impares++;
    }
    document.writeln(`vetor : ${numeros.join(" ,")}<br>`);
    document.writeln(`pares: ${pares } | impares : ${impares}`);

