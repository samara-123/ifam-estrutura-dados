 let a1 =  parseInt(prompt("digite o prineiro termo da PA:" ));
 let r = parseInt(prompt("digite a razao da PA: "));
 let n = parseInt (prompt("digite a quantidade de termos:"));
 let an= a1+(n-1) *r
 
 while (a1 <=an) {
        document.writeln(a1 + ',');
       a1+=r
    
 }
