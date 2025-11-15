let vetorA = [], vetorB = [], vetorC = [];
 for (let i = 0; i < 10; i++){
    vetorA[i] = parseInt(prompt(`A[${i + 1}] :`));
    vetorB[i] = parseInt(prompt(`B[${i + 1}] :`));
     vetorC [i] = vetorA[i]  * vetorB[i];
 }
 document.writeln("resultados : " + vetorC.join(","));

