/* 1 -  Resolva os passos a seguir: 
    
    a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:** */
const informacoesPessoais = {
	nomeDaPessoa: 'Amanda',
	apelidosDaPessoa: ['Amandinha', ' Mandinha', 'Mandi'],
}
const fraseDeApresentacao = `Eu sou ${informacoesPessoais.nomeDaPessoa}, mas pode me chamar de: ${informacoesPessoais.apelidosDaPessoa[0]}, ${informacoesPessoais.apelidosDaPessoa[1]}, ou ${informacoesPessoais.apelidosDaPessoa[2]}.`
console.log(fraseDeApresentacao)
/*b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto*/
const novasIndormacoesPessoais = {
	...informacoesPessoais,
	novosApelidosDaPessoa: ['nãoSeiDarApelidos', 'éSerio', 'NãoSei'],
}
const novosApelidos = `Eu sou ${informacoesPessoais.nomeDaPessoa}, mas pode me chamar de: ${novasIndormacoesPessoais.novosApelidosDaPessoa[0]}, ${novasIndormacoesPessoais.novosApelidosDaPessoa[1]}, ou ${novasIndormacoesPessoais.novosApelidosDaPessoa[2]}.`
console.log(novosApelidos)
/*2 - Resolva os passos a seguir: 
     a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. */
const inforDaPrimeiraPessoa = {
	nomeDoPrimeiro: 'Alan',
	idadeDoprimeiro: 23,
	profissaoDoPrimeiro: 'Dev',
}
const inforDaSegundaPessoa = {
	nomeDoSegundo: 'Felipe',
	idadeDoSegundo: 50,
	profissaoDoSegundo: 'Medico',
}

/*  - 
    b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:*/
const funcaoQueRecebe1 = ['Alan', 'Alan'.length, 23, 'Dev', 'Dev'.length]
const funcaoQueRecebe2 = [
	'Felipe',
	'Felipe'.length,
	23,
	'Médico',
	'Médico'.length,
]
console.log(funcaoQueRecebe1)
console.log(funcaoQueRecebe2)
/*3 -  Resolva os passos a seguir: 
    
    a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`*/
const carrinho = []
/*  - b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)*/
const frutaDeUmSacolao1 = {
	nome: 'Banana',
	disponibilidade: true,
}
const frutaDeUmSacolao2 = {
	nome: 'Uva',
	disponibilidade: false,
}
const frutaDeUmSacolao3 = {
	nome: 'Pinha',
	disponibilidade: true,
}
carrinho.push(frutaDeUmSacolao1)
carrinho.push(frutaDeUmSacolao2)
carrinho.push(frutaDeUmSacolao3)
console.log(carrinho)
//Exercícios de interpretação de código
//1 - a) O que vai ser impresso no console? vai ser impresso o nome do elenco, canal que vai ser transmitido e o horario.
//2 - a) O que vai ser impresso no console?nome , idade dos animais e sem raça definida.
// b) O que faz a sintaxe dos três pontos antes do nome de um objeto? ela copia o objeto anterior inteiro.
//3 -a) O que vai ser impresso no console?falso e undefined
// b) Explique o valor impresso no console. Você sabe por que isso aconteceu? no valor do objeto, backender é false
