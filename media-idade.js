let n = parseInt(prompt("quantas pessoas? "));
let soma = 0;
for (let i = 0; i < 10; i++){
     soma += parseInt(prompt(`idade da pessoa ${i + 1}: `));
}
let media = soma /n;
document.writeln(` media das idades : ${media.toFixed(1)}`);

