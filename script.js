//EXERCÍCIOS DE REVISÃO DE ARRAY




//SOMA DOS NÚMEROS PARES
const numeros_originais = []
const numeros_em_dobro = []
for(let i = 0; i < 10; i++)
{
  const numero = Number(prompt("Digite um número: "))
  numeros_originais.push(numero)
  numeros_em_dobro.push(numero * 2)
}
console.log(numeros_originais)
console.log(numeros_em_dobro)







//SOMA DOS NÚMEROS PARES 
const lista = []
let soma = 0

for(let i = 0; i < 8; i++)
{const numero = Number(prompt("Digite um número: "))
  lista.push(numero)}
for(let numero_da_vez of lista){
  if(numero_da_vez % 2 === 0){
   soma += numero_da_vez }
}
console.log(soma)








//NÚMEROS MÚLTIPLOS DE 3 E 5 AO MESMO TEMPO
const lista = []
let multiplo = []

for(let i = 0; i < 6; i++){
  const numero = Number(prompt("Digite um número: "))
  lista.push(numero)
}
for(let numero_da_vez of lista){
  if(numero_da_vez % 3 === 0 && numero_da_vez % 5 === 0){
    multiplo.push(numero_da_vez)
  }
}
console.log(multiplo)

function cumprimentar(nome_da_pessoa){
  console.log(`Olá, bem vindo ${nome_da_pessoa}`)
}
cumprimentar("Andrade!")



//EXERCÍCIOS DE FUNCTION




//SOMAR DOIS NÚMEROS
function somar(primeiro_numero, segundo_numero){
  const soma = primeiro_numero + segundo_numero
  return soma
}

console.log(somar(5,8))




//CONTADOR DE VOGAIS
let contador_de_vogais = 0
const vogais = "aeiouáàãâäéêíóôõúü"

function contar_vogais(palavra){
  for(let letra_da_vez of palavra){
    if(vogais.includes(letra_da_vez)){
      contador_de_vogais ++
    }
  }
  return contador_de_vogais
}
console.log(contar_vogais("andrade"));





//QUADRADO DO NÚMERO DIGITADO PELO USUÁRIO
const numero = Number(prompt("Digite um número: "))
function quadrado_do_numero(m){
  return numero ** 2
}
console.log(quadrado_do_numero(numero))




//CALCULAR ÁREA E CIRCUNFERÊNCIA
function calcularCirculo(r){
  const area = Math.PI * r ** 2 
  const circunferencia = 2 * Math.PI * r 

  return [area.toFixed(2), circunferencia.toFixed(2)]
}

const raio = Number(prompt("Digite o raio do circulo: "))
const circulo1 = calcularCirculo(raio)
console.log(`Área do circulo ${circulo1[0]}`)
console.log(`Circunferência do circulo ${circulo1[1]}`)






//CUMPRIMENTAR A PESSOA DE ACORDO COM O NOME E A HORA INFORMADA 
const nome = prompt("Digite o seu nome: ")
const hora = Date(prompt("Digite a hora do dia: "))

function cumprimentar(nome,hora){
  if(hora >= 4 && hora <= 12){
    return `bom dia, ${nome}!`
  }else if(hora >= 13 && hora <= 18){
    return `boa tarde, ${nome}`
  }else{
    return `boa noite, ${nome}`
  }
}
console.log(cumprimentar(nome, hora))