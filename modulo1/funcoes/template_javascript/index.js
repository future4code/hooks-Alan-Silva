/* Exercício de quinta 16/02/2022
escrita de código */
/* 1) A- */ console.log(
	'Eu sou Alan, tenho 23 anos, moro em maceió - Al e sou estudande na Labenu. '
)
/* B- */ const informacoesSobreUsuario = (nome, idade, cidade, profissao) => {
	const templeteNoConsole = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
	console.log(templeteNoConsole)
}
informacoesSobreUsuario('Alan', '23', 'Maceió', 'Dev')

/* 2) A - */ const somaParametros = (a, b) => {
	const soma = a + b
	console.log(soma)
}
somaParametros(85, 85)
/* B - */ const retornaParametrosBooleano = (a, b) => {
	const trueOrFalse = a >= b
	console.log(trueOrFalse)
}
retornaParametrosBooleano(15, 15)
/* C - */ const retornaValorPar = (a) => {
	const valorPar = a % 2 === 0
	console.log(valorPar)
}
retornaValorPar(15)
/*D - */ const mensagemEmMenuscula = (a) => {
	const mensagem = a.toLowerCase()
	console.log(mensagem)
	console.log(mensagem.length)
}
mensagemEmMenuscula('TESTANDO')
/* 3) */ const numerosDoUsuario1 = Number(prompt('Insira um primeiro números'))
const numerosDoUsuario2 = Number(prompt('Insira um segundo número'))
function operacoesBasicas(parametro1, parametro2) {
	const soma = parametro1 + parametro2
	const subtracao = parametro1 - parametro2
	const multiplicacao = parametro1 * parametro2
	const divisao = parametro1 / parametro2
	console.log(soma)
	console.log(subtracao)
	console.log(multiplicacao)
	console.log(divisao)
}
operacoesBasicas(numerosDoUsuario1, numerosDoUsuario2)
//exercício de interpretação de código
// 1) A - é feito a multiplicação e impresso no console os valores 10 e 50.
//B - não iria imprimir nada.
// 2) A - essa função faz com que meu texto fique em menuscula e que quando o usuario digite o texto se não for encontrada a plavra cenoura volta como false.
/*B - todas as entradas retornam verdadeiro (true), em especial a III entrada retorna true pois msm a palavra sendo diferente ( tendo um "s" no final), o include indentifica primeiro a palavra cenoura e depois a palavra cenouras.*/
