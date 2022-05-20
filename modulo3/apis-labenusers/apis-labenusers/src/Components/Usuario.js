import React from 'react'
import axios from 'axios'

export default class Usuario extends React.Component {
	state = {
		todosUsuarios: [],
		inputNovoUsuario: '',
	}
	componentDidMount() {
		this.pegarUsuario()
	}

	onChangeinputNovoUsuario = (event) => {
		this.setState({ inputNovoUsuario: event.target.value })
	}

	pegarUsuario = () => {
		axios
			.get(
				'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',

				{
					headers: {
						Authorization: 'alan-fabricio-hopper',
					},
				}
			)
			.then((response) => {
				this.setState({ todosUsuarios: response.data })
			})
			.catch((error) => {
				console.log('Error', error.response.data)
			})
	}

	criarUmUsuario = () => {
		const body = {
			name: this.state.inputNovoUsuario,
			email: this.state.inputNovoUsuario + '@labenu.com',
		}
		axios
			.post(
				'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
				body,
				{
					headers: { Authorization: 'alan-fabricio-hopper' },
				}
			)
			.then(() => {
				this.setState({ inputNovoUsuario: '' })
				this.pegarUsuario()
			})
			.catch((error) => {
				console.log('Erro ao criar usuario', error.response.data)
			})
	}

	render() {
		const list = this.state.todosUsuarios.map((cadausuario) => {
			return <h3>{cadausuario.name}</h3>
		})

		return (
			<section>
				<input
					value={this.state.inputNovoUsuario}
					onChange={this.onChangeinputNovoUsuario}
				/>
				<input
					value={this.state.inputNovoUsuario}
					onChange={this.state.inputNovoUsuario}
				/>
				<button onClick={this.criarUmUsuario}>Crie um novo usuario</button>

				<section>{list}</section>
			</section>
		)
	}
}
