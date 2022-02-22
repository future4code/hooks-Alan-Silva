// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
	// implemente sua lógica aqui
	return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
	// implemente sua lógica aqui
	const mensagem = prompt('Digite uma mensagem!')

	console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
	// implemente sua lógica aqui
	const calculoAltura = Number(prompt('Qual a altura do retângulo ?'))
	const calculoLargura = Number(prompt('Qual a largura do retângulo ?'))
	const areaDoRetangulo = calculoAltura * calculoLargura
	console.log(areaDoRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
	// implemente sua lógica aqui
	const anoAtual = Number(prompt('Em qual ano você se encontra ?'))
	const nascimento = Number(prompt('Qual o ano que você nasceu ?'))
	idadeDaSub = anoAtual - nascimento
	console.log(idadeDaSub)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
	// implemente sua lógica aqui
	return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
	// implemente sua lógica aqui
	// "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
	const nomeDoUsuario = prompt('Qual o seu nome ?')
	const idadeDoUsuario = Number(prompt('Qual a sua idade ?'))
	const emailDoUsuario = prompt('Qual o seu e-mail ?')
	const tempString = `Meu nome é ${nomeDoUsuario}, tenho ${idadeDoUsuario} anos, e o meu email é ${emailDoUsuario}.`
	console.log(tempString)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
	// implemente sua lógica aqui
	const coresFavoritas = []
	const perguntaSobreCores = alert(
		'Agora vamos te pergunta três cores favoritas, ok ? '
	)
	coresFavoritas.push(prompt('Qual a sua primeira cor favorita ?'))
	coresFavoritas.push(prompt('Qual a sua segunda cor favorita ?'))
	coresFavoritas.push(prompt('Qual a sua terceira cor favorita ?'))
	console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
	// implemente sua lógica aqui
	return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
	// implemente sua lógica aqui
	return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
	// implemente sua lógica aqui
	return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
	// implemente sua lógica aqui
	return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
	// implemente sua lógica aqui
	return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
	// implemente sua lógica aqui
	const primeira = array[0]
	const ultima = array[array.length - 1]
	array[0] = array[array.length - 1]
	array[array.length - 1] = primeira

	return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
	// implemente sua lógica aqui
	return string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
	// implemente sua lógica aqui
	/*const anoAtual = Number(prompt('Qual o ano atual ?'))
	const anoDeNascimento = Number(prompt('Qual o seu ano de nascimento ?'))
	const anoDaEmissãoDaCarteira = Number(
		prompt('Qual sua carteira de identidade foi emitida ?')
	)
	const idadeDoUsuario = anoAtual - anoDeNascimento
	console.log(
		(idadeDoUsuario <= 20 && anoDaEmissãoDaCarteira >= 5) ||
			(idadeDoUsuario <= 20 &&
				idadeDoUsuario <= 50 &&
				anoDaEmissãoDaCarteira >= 10) ||
			(idadeDoUsuario > 50 && anoDaEmissãoDaCarteira >= 15)
	)*/
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
	// implemente sua lógica aqui
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
	// implemente sua lógica aqui
}
