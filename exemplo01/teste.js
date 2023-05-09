//alert("oioioioioioi")
/*
*/

//var nome = prompt("Digite seu nome:")
//console.log(nome)
//document.write(nome)







/*variaveis
var a = 10
console.log(a)
a = 15
console.log(a)*/


//var nome = prompt("digite seu nome:")
//alert("bom dia"+ nome)

//template string => interpolação
//alert(`Bom dia ${nome} `)

var n1 = parseInt(prompt("digite o N1:"))
var n2 = parseInt(prompt("digite o N2:"))
console.log("N1 e:"+typeof n1)
console.log("N2 e:"+typeof n2)

var soma = n1 + n2

console.log("Soma e:"+ typeof soma)

if(soma>10){
    document.write(`<p Class="maior"> A soma de ${n1} com ${n2} e ${soma}</p>`)

}
else{
    document.write(`<p Class="menor"> A soma de ${n1} com ${n2} e ${soma}</p>`)
}

//document.write(`<p>A soma de ${n1} com ${n2} e ${soma}</p>`)

