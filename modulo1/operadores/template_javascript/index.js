//Exercício de escrita de código 10/02/2022
/* 1. */ const nomeDoUsuario = prompt('Qual o seu nome?')
const idadeDoUsuario = prompt(' Qual a sua idade ?')
const idadeDoAmigo = prompt(
	'Qual a idade do seu melhor amigo ou sua melhor amiga?'
)
const diferencaDeIdade = Number(idadeDoUsuario) - Number(idadeDoAmigo)
const resultado = idadeDoUsuario >= idadeDoAmigo
console.log('Nome do usuario:', nomeDoUsuario)
console.log('Idade do usuario:', idadeDoUsuario)
console.log('Idade do melhor amigo(a):', idadeDoAmigo)
console.log('Sua idade é maior do que a do seu melhor amigo(a)?', resultado)
console.log('Diferencia de idade:', diferencaDeIdade)
/* 2.*/ let numeroParDoUsuario = prompt('Por favor insira um número par.')
const numeroDivisor = 2
const resultadoDaDivisão = Number(numeroParDoUsuario) % numeroDivisor
console.log('Resto da divisão:', resultadoDaDivisão) //notei que sempre da o valor de 0, caso o usuario insira um número impar passa a dar o valor de 1.
/* 3. */ let idadeEmAnos = prompt('Qual a sua idade?')
const idadePorMeses = 12
const idadePorDias = 365
const idadePorHoras = 8760
const resultadoMeses = Number(idadeEmAnos) * idadePorMeses
const resultadoPorDias = Number(idadeEmAnos) * idadePorDias
const resultadoPorHoras = Number(idadeEmAnos) * idadePorHoras
console.log('Idade do usuário em meses:', resultadoMeses)
console.log('Idade do usuário em dias:', resultadoPorDias)
console.log('Idade do usuário em horas:', resultadoPorHoras)
/* 4. */ let primeiroNumero = prompt('Escolha um primeiro número!')
let segundoNumero = prompt('Escolhar um segundo número!')
const resultado1 = Number(primeiroNumero) > Number(segundoNumero)
const resultado2 = Number(primeiroNumero) === Number(segundoNumero)
//const resultado3 = Number(primeiroNumero)  Number(segundoNumero)
//const resultado4 = Number(primeiroNumero)  Number(segundoNumero)
// Não consegui resolver a parte de divisão da quarta questão.
console.log('O primeiro número é maior que o segundo?', resultado1)
console.log('O primeiro número é igual ao segundo?', resultado2)
//console.log('O primeiro número é divisível pelo segundo?', resultado3)
//console.log('O segundo número é divisível pleo primeiro?', resultado4)
//Exercício de interpretação de código 10/02/2022
//1. a. false / b. false / c. true / d. boolean
//2. Meu amigo não converteu para number.
//3.const soma = Number(primeiroNumero) + Number(segundoNumero).
