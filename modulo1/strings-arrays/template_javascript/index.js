// exercício do dia 15/02/2022
// exercício de escrita de código
/* 1) */ const nomeDoUsuario = prompt('Qual seu nome ?')
const emailDoUsuario = prompt('Qual o seu email ?')
const templeteDeStrings = `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeDoUsuario}.`
console.log(templeteDeStrings)
/* 2) */ const comidas = [
	'Lasanha',
	'Hambúrguer',
	'Pastel',
	'Churrasco',
	'sorvete',
]
console.log(comidas)
console.log('Essas são as minhas comidas preferidas:')
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])
comidas[1] = prompt('Usuário, qual a sua comida preferida ?')
console.log(comidas)
/* 3) */ const listaDeTarefas = []
listaDeTarefas.push(prompt('Qual a sua primeira tarefa ?'))
listaDeTarefas.push(prompt('Qual a sua segunda tarefa ?'))
listaDeTarefas.push(prompt('Qual a sua terceira tarefa ?'))
const tarefeita = Number(prompt('Digite qual tarefa foi realizada, de 0 a 2 '))
listaDeTarefas.splice(tarefeita, 1)
console.log(listaDeTarefas)
/* Desafio 1)*/ const frase =
	'Seu sorriso é tão resplandecente Que deixou meu coração alegre Me dê a mão Pra fugir desta terrível Escuridão'
const arreyDaFrase = frase.split(' ')
console.log(arreyDaFrase)
/* Desafio 2)*/
const frutas = ['Banana', 'Morango', 'Abacaxi', 'Laranja', 'Ameixa']
const indice = frutas.indexOf('Abacaxi')
console.log(indice)
console.log(frutas.length)
//Exercício de interpretação de código
// 1) undefined, null, 11, 3, [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13], 9
// 2) subi num ônibus em marricis : valor impresso 27
