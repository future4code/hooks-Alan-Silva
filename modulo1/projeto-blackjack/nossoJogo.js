/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
  
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
  
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log('Bem vindos ao jogo de blackjack')

const iniciandoJogo = confirm('Quer iniciar uma nova rodada?')

if (iniciandoJogo) {
	const primeiraCartaDoJogador = comprarCarta()
	const segundaCartaDoJogador = comprarCarta()
	const primeiraCartaDoComputador = comprarCarta()
	const segundaCartaDoComputador = comprarCarta()

	const contagemDoUsuario =
		primeiraCartaDoJogador.valor + segundaCartaDoJogador.valor
	const contagemDoComputador =
		primeiraCartaDoComputador.valor + segundaCartaDoComputador.valor

	console.log(
		`Cartas do usuário: ${primeiraCartaDoJogador.texto} ${segundaCartaDoJogador.texto} = ${contagemDoUsuario}`
	)
	console.log(
		`Cartas do computador: ${primeiraCartaDoComputador.texto} ${segundaCartaDoComputador.texto} = ${contagemDoComputador}`
	)
	contagemDoUsuario > contagemDoComputador
		? console.log('O usuário ganhou!')
		: contagemDoComputador > contagemDoUsuario
		? console.log('O computador ganhou!')
		: contagemDoUsuario === contagemDoComputador
		? console.log('Empate!')
		: console.log('O jogo acabou')
}
// 	if (contagemDoUsuario > contagemDoComputador) {
// 		console.log('O usuário ganhou!')
// 	} else if (contagemDoComputador > contagemDoUsuario) {
// 		console.log('O computador ganhou!')
// 	} else if (contagemDoUsuario === contagemDoComputador) {
// 		console.log('Empate!')
// 	}
// } else {
// console.log('O jogo acabou')
