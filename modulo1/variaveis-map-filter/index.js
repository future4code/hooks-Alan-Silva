// - **Exercícios de escrita de código**
//     1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:**
// a) Crie um novo array que contenha apenas o nome dos doguinhos

// b) Crie um novo array apenas com os [cachorros salsicha](https://www.youtube.com/watch?v=YQ404vwjzus)

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

const cachorrinhosDosClientes = [
	{ nome: 'Valentina', raca: 'Pinscher' },
	{ nome: 'Gustavinho', raca: 'Salsicha' },
	{ nome: 'Felipe', raca: 'Vira-Lata' },
	{ nome: 'Jonatha', raca: 'Poodle' },
	{ nome: 'Caramelo', raca: 'Pitbull' },
	{ nome: 'Arthur', raca: 'Salsicha' },
	{ nome: 'Linconl', raca: 'Poodle' },
]
const apenasNomes = cachorrinhosDosClientes.map((cachorro) => {
	return cachorro.nome
})
console.log(apenasNomes)
const apenasSalsicha = cachorrinhosDosClientes.filter((cachorro) => {
	return cachorro.raca === 'Salsicha'
})
console.log(apenasSalsicha)
const descontoParaClientes = cachorrinhosDosClientes.filter((desconto) => {
	return desconto.raca === 'Poodle'
})
descontoParaClientes.map((cachorro) =>
	console.log(
		`Você ganhou um cupom de desconto de 10% para tosar o/a ${cachorro.nome}`
	)
)

//    2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
// a) Crie um novo array que contenha apenas o nome de cada item

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const produtosDoMercado = [
	{ nome: 'Alface Lavada', categoria: 'Hortifruti', preco: 2.5 },
	{ nome: 'Guaraná 2l', categoria: 'Bebidas', preco: 7.8 },
	{ nome: 'Veja Multiuso', categoria: 'Limpeza', preco: 12.6 },
	{ nome: 'Dúzia de Banana', categoria: 'Hortifruti', preco: 5.7 },
	{ nome: 'Leite', categoria: 'Bebidas', preco: 2.99 },
	{ nome: 'Cândida', categoria: 'Limpeza', preco: 3.3 },
	{ nome: 'Detergente Ypê', categoria: 'Limpeza', preco: 2.2 },
	{ nome: 'Vinho Tinto', categoria: 'Bebidas', preco: 55 },
	{ nome: 'Berinjela kg', categoria: 'Hortifruti', preco: 8.99 },
	{ nome: 'Sabão em Pó Ypê', categoria: 'Limpeza', preco: 10.8 },
]
const nomesDosItens = produtosDoMercado.map((nomeitem) => {
	return nomeitem.nome
})
console.log(nomesDosItens)
const produtosComDesconto = produtosDoMercado.map((itensComDescontos) => {
	return {
		nome: itensComDescontos.nome,
		precosComDescontos: ((itensComDescontos.preco / 100) * 95).toFixed(2),
	}
})
console.log(produtosComDesconto)
const apenasBebidas = produtosDoMercado.filter((itensBebidas) => {
	return itensBebidas.categoria === 'Bebidas'
})
console.log(apenasBebidas)
const apenasYpe = produtosDoMercado.filter((itensYpe) => {
	return itensYpe.nome.includes('Ypê')
})
console.log(apenasYpe)
apenasYpe.map((produto) =>
	console.log(`Compre ${produto.nome} por ${produto.preco}`)
)

//    1.Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:
// a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética
// b) Crie um novo array apenas com os tipos dos pokémons, sem repetição

const pokemons = [
	{ nome: 'Bulbasaur', tipo: 'grama' },
	{ nome: 'Bellsprout', tipo: 'grama' },
	{ nome: 'Charmander', tipo: 'fogo' },
	{ nome: 'Vulpix', tipo: 'fogo' },
	{ nome: 'Squirtle', tipo: 'água' },
	{ nome: 'Psyduck', tipo: 'água' },
]
const ordemAlfabetica = pokemons.map((alfabetico) => {
	return alfabetico.nome
})
console.log(ordemAlfabetica.sort())
const pokemonstipos = pokemons.map((NaoRepetidos) => {
	return NaoRepetidos.tipo
})
const removerDuplicados = (tipo) => {
	return [...new Set(tipo)]
}
const tiposUnicos = removerDuplicados(pokemonstipos)
console.log(tiposUnicos)

// - **Exercícios de interpretação de código**

//     Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.**
//     1.Leia o código abaixo
// a) O que vai ser impresso no console?
// ele vai imprimir os nomes e os apelidos das usuarias.

//    2.Leia o código abaixo
// a) O que vai ser impresso no console?
// mostra apenas os nomes das usuarias.

//    3.Leia o código abaixo
// a) O que vai ser impresso no console?
// retorna apenas os nomes amanda rangel e lais petra com os apelidos mandi e laura.
