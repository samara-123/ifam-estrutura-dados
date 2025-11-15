let n = parseInt(prompt("quantos numeros deseja dirigir ?"));
let numeros = [];
for (let i = 0; i < n; i++){
    numeros.push(parseInt(prompt(`digite o ${i + 1}° numero: `)))
}
document.writeln("ordem inversa:" + numeros.reverse().join(" ,"));