var dormiu = parseInt(prompt("hora de dormir"))
var acordou = parseInt(prompt("hora de acordar"))
var sono=0 
if ( dormiu> 12 && acordou <12) {
    sono = 24- (dormiu-acordou)
alert (`${sono} horas de sono`)
}else{
    sono = acordou-dormiu
alert (`${sono}horas de sono `)
}
let i 
while(i =1 <=sono){
    alert ( `${i} horas dormindo ` )
    i++
}
