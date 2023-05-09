//alert("Animes")
/*
tudo o que tiver entre * / fica como comentário.

 var anime = prompt("Digite seu anime favorito:") 
 console.log(anime) //eu vejo isso como desenvolvedor na aba do F12, nop console
 document.write(anime)
 */

 // VARIAVEIS var: da para alterar, const: não da para se alterar e lat: variaveis locais, numa parte e dez e outra 15.'

/*let a = 10
 console.log(10)
 if(true){

    let a = 15
    console.log(a)
 }
 console.log(a)
 

 var a = 10
 console.log(10)

 const a = 15
 console.log(10)
 */



/*var nome = prompt (" Digite seu nome:")
//alert("Bom dia " + nome)

// TEMPLETE STRING => INTERPOLAÇÃO
alert(`Bom Dia ${nome}`)
*/


var n1 = parseInt (prompt(" digite o N1:"))
var n2 = parseInt (prompt(" digite o N2:"))
console.log("N1 é:" + typeof n1)
console.log("N2 é:" + typeof n2)

var soma = n1 + n2
console.log("Soma é:" + typeof soma)

if(soma>10){
    document.write(`<p class="maior">A soma de ${n1} com ${n2} é ${soma}<p>`)
}
else{
    document.write(`<p class="menor">A soma de ${n1} com ${n2} é ${soma}<p>`)
}




 