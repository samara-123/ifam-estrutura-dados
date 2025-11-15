let n = parseInt(prompt("quantos itens?"));
let itens = [], total = 0;
for (let i = 0; i < n; i++){
    let nome = prompt(`nome do item ${i + 1}:`);
     let valor = parseFloat(prompt(`valor do item ${i + 1}:`));
     itens.push({ nome, valor });
     total += valor;
}
itens.forEach(i => document.writeln(`${i.nome}: R$${ i.valor.toFixed(2)}`));
document.writeln(`<br>total : r$${total.toFixed(2)} <br>`);