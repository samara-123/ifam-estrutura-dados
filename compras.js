let itens = prompt ("quantos itens tem no carrinho") 
var valor =0, produto =0 
document.writeln(`<b>Mercadinho da Samara</b><br>`)
for  (let i = 0; i < itens ; i++ ){
    produto = parseFloat(prompt (`Preço do item ${i} `))
    valor+=produto
    document.writeln(`Item ${i} = R$ ${produto}<br>`)
 }
 document.writeln(`Valor da compra R$ ${valor}`) 
 