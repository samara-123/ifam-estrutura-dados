let n  = parseInt(prompt(" digite um numero : "));
let tabuada = [ ];
 for (let i = 0; i <= 10; i++){
    tabuada.push(n * i);
 }
 document.writeln(`tabuada de ${n}: ${tabuada.join(", ")  }`)