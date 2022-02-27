// Exercício do dia 23/02/2022-condicionais
//Exercícios de escrita de código

// 1 - Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

// a) Faça um prompt para receber a idade do usuário e guarde em uma variável.

//b) Garanta que essa variável é do tipo Number, você deve usar o cast para number para isso.

//c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir."
let idadeDoUsuario = Number(prompt('Qual a sua idade ?'))
function verificandoIdade(idadeParaDirigir) {
	if (idadeParaDirigir >= 18) {
		console.log('Você pode dirigir!')
	} else {
		idadeParaDirigir <= 18
		console.log('Você não pode dirigir!')
	}
}
verificandoIdade(idadeDoUsuario)
// 2 - Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else
const horarioDeAulaDoEstudante = prompt(
	'Em qual turno você ? Digite M para matutino, V para vespertino ou N para noturno.'
).toUpperCase()
function turnosDoEstudante(turno) {
	if (turno === 'M') {
		console.log('Bom dia!')
	} else if (turno === 'V') {
		console.log('Boa tarde!')
	} else if (turno === 'N') {
		console.log('Boa noite!')
	} else {
		console.log('Turno não encontrado.')
	}
}
turnosDoEstudante(horarioDeAulaDoEstudante)
// 3 - Repita o exercício anterior, mas utilizando a estrutura de switch case agora.
switch (horarioDeAulaDoEstudante) {
	case 'M':
		console.log('Bom dia!')
		break
	case 'V':
		console.log('Boa tarde!')
		break
	case 'N':
		console.log('Boa noite!')
		break
	default:
		console.log('Turno não encontrado.')
		break
}
// 4 - Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("
const generoDoFilme =
	prompt('Qual o gênero de filme que você deseja assistir ?').toLowerCase() ===
	'fantasia'
const valorDoIngresso = Number(prompt('Qual o valor do ingresso ?')) <= 15
function cinema(parametroDoGenero, parametroDoIngresso) {
	if (parametroDoGenero && parametroDoIngresso) {
		console.log('Bom filme!')
	} else {
		console.log('Escolha outro filme!')
	}
}
console.log(cinema(generoDoFilme, valorDoIngresso))

//Exercícios de interpretação de código

// 1 - a) Explique o que o código faz. Qual o teste que ele realiza? Ele descobre se um número é par.

//b) Para que tipos de números ele imprime no console "Passou no teste"? Números pares, ex: 10, 30 e 80.

//c) Para que tipos de números a mensagem é "Não passou no teste"? Números impares, ex:15, 35 e 85.

//2 - a) Para que serve o código acima? Serve para verificar o valor especifico de 3 tipos de  frutas e esclarece o valor das demais frutas.

//b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"? Se impresso o valor de fruta que é de 2,25.

//c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")? Como não ouve o fechamento da case pêra o valor passa a ser o default.
