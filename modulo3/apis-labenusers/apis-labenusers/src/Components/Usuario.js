import React from 'react'
import axios from 'axios'

export default class Usuario extends React.Component {
	state = {
		nome: '',
		email: '',
	}
	verificarNome = (event) => {
		this.setState({
			nome: event.target.value,
		})
	}
	verificarEmail = (event) => {
		this.setState({
			email: event.target.value,
		})
	}

	FazerUmCadastro = () => {
		const url =
			'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
		const body = {
			name: this.state.nome,
			email: this.state.email,
		}
		axios
			.post(url, body, {
				headers: {
					Authorization: 'alan-fabricio-hopper',
				},
			})
			.then(() => {
				alert('Cadastro Realizado com Sucesso')
			})
			.catch((error) => {
				alert('Erro ao Cadastrar')
			})
			.finally(() => {
				this.setState({ nome: '', email: '' })
			})
	}

	render() {
		return (
			<section>
				<h1>Tela De Cadastro</h1>
				<button onClick={this.props.filhoUm}>Trocar De Pagina</button>
				<input
					placeholder='Nome'
					value={this.state.nome}
					onChange={this.verificarNome}
				/>
				<input
					placeholder='Email'
					value={this.state.email}
					onChange={this.verificarEmail}
				/>
				<button onClick={this.FazerUmCadastro}>Cadastrar</button>
			</section>
		)
	}
}
