// exercício do dia 07/03/2022 (laços)
// 1. (escrita de código)1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.

//     a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

//     b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

//.....c) Por fim, imprima o array com os nomes dos bichinhos no console

let contagemDosBichos = Number(
	prompt('Quantos bichinhos de estimação você tem ?')
)
let quantidadeDosBichos = 0
let nomeDosPets = []
while (quantidadeDosBichos < contagemDosBichos) {
	nomeDosPets.push(prompt('Qual o nome do seu pet ?'))
	quantidadeDosBichos++
}
if (contagemDosBichos === 0) {
	console.log('Que pena! Você pode adotar um pet!')
} else {
	console.log('Nomes dos bichos:', nomeDosPets)
}

//2. (escrita de código)2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

// a) Escreva um programa que **imprime** cada um dos valores do array original.

// b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

// c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

// d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

// const arrayOriginal = [
// 	'5',
// 	'10',
// 	'15',
// 	'20',
// 	'55',
// 	'60',
// 	'65',
// 	'70',
// 	'75',
// 	'80',
// 	'85',
// 	'90',
// 	'95',
// 	'100',
// 	'25',
// 	'30',
// 	'35',
// 	'40',
// 	'45',
// 	'50',
// ]
// console.log(arrayOriginal)
// function funcaoDeDivisao(parametroDeDivisao) {
// 	const numerosDivididos = []
// 	for (let numerosParaDivisao of parametroDeDivisao) {
// 		numerosDivididos.push(numerosParaDivisao / 10)
// 	}
// 	return numerosDivididos
// }
// const numerosDivididos = [
// 	'5',
// 	'10',
// 	'15',
// 	'20',
// 	'55',
// 	'60',
// 	'65',
// 	'70',
// 	'75',
// 	'80',
// 	'85',
// 	'90',
// 	'95',
// 	'100',
// 	'25',
// 	'30',
// 	'35',
// 	'40',
// 	'45',
// 	'50',
// ]
// funcaoDeDivisao(numerosDivididos)
// console.log(`Numeros divididos são: ${funcaoDeDivisao}`)
// let arrayDosPares = [20, 30, 45, 60]
// function numerospares(array1, array2) {
// 	for (let numeros of array1) {
// 		if (numeros % 2 === 0) {
// 			array2.push(numeros)
// 		}
// 	}
// }
// console.log(numerospares)
// const numerosParaOIndex = [5, 10, 20, 30, 40]
// function colocarArray(array) {
// 	const novoArray = []
// 	for (let i = 0; i < array.lenght; i++) {
// 		novoArray.push(`O elemento do index ${i} é ${array[i]}`)
// 	}
// 	return novoArray
// }
// colocarArray(numerosParaOIndex)
let maiorNumero = 0
let menorNumero = 0
function meuNumeros(numeros) {
	for (let numerosParaComparar of numeros) {
		if (numerosParaComparar > maiorNumero) {
			maiorNumero = numerosParaComparar
		} else {
			menorNumero = numerosParaComparar
		}
	}
	console.log(
		'Meu maior numero é',
		maiorNumero,
		'e o meu menor numero é',
		menorNumero
	)
}
const numeros = [30, 15, 25, 5, 9, 50, 70, 10, 8]
meuNumeros(numeros)
