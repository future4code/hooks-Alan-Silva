const nome = 'Alan'
const idade = 23
console.log(typeof nome) //strings
console.log(typeof idade) //number
// foi impresso strings que  representa textos e foi impresso number que representa números
const nomeDoUsuario = prompt('Qual é o seu nome ?')
const idadeDoUsuario = prompt('Qual é a sua idade ?')
console.log(typeof nomeDoUsuario)
console.log(typeof idadeDoUsuario)
//nomdeDoUsuario é string
//idadeDoUsuario é string
console.log('Olá', nomeDoUsuario, 'você tem', idadeDoUsuario, 'anos')
const sono = prompt('Você dormiu bem ?')
const cafe = prompt('Você gosta de café ?')
const estudanteOuNao = prompt('Você é aluno labenu ?')
console.log('Dormiu bem ?', sono)
console.log('Você gosta de café?', cafe)
console.log('Você é aluno labenu?', estudanteOuNao)
let valorA = 10
let valorB = 25
let valorC = 0
valorC = valorA
valorA = valorB
valorB = valorC
console.log('O novo valor de a é ', valorA) // O novo valor de a é 25
console.log('O novo valor de b é ', valorB) // o novo valor de b é 10
/*Exercício de interpretação de código
1 - aprece console 10 para console.log(b) e aparece 10 , 5 para console.log(a , b)
2 - é impresso 10 , 10 , 10
3 -  primeira sugestão : let horarioDeTrabalho
3 -  segunda sugestão : let diariaPaga
 */
let primeiroNumeroSoma = 50
let segundoNumeroSoma = 50
let multiPlicaSegundo = 50
primeiroNumeroSoma += segundoNumeroSoma
multiPlicaSegundo *= segundoNumeroSoma
console.log('O primeiro número soma com o segundo número', primeiroNumeroSoma)
console.log(
	'O primeiro número multiplica com o segundo número',
	multiPlicaSegundo
)
