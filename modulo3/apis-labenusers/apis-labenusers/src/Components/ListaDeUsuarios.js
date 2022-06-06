import React from 'react'
import axios from 'axios'

export default class ListaDeUsuarios extends React.Component {
	state = {
		clientes: [],
	}
	componentDidMount() {
		this.pergarListaDeUsuarios()
	}

	pergarListaDeUsuarios = () => {
		const url =
			'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

		axios
			.get(url, {
				headers: { Authorization: 'alan-fabricio-hopper' },
			})
			.then((response) => {
				console.log(response.data)
				this.setState({ clientes: response.data })
			})
			.catch((error) => {
				console.log(error.response)
			})
	}

	deletarCliente = (id) => {
		const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
		axios
			.delete(url, { headers: { Authorization: 'alan-fabricio-hopper' } })
			.then(() => {
				alert('Usuario Deletado com Sucesso')
				this.pergarListaDeUsuarios()
			})
			.catch(() => {
				alert('Erro ao Deletar')
			})
	}
	render() {
		return (
			<section>
				<button onClick={this.props.filhoDois}>Trocar De Pagina</button>
				<h1>Tela De Lista</h1>
				{this.state.clientes.map((cliente) => {
					return (
						<section>
							<ul>
								<li>{cliente.name}</li>
								<button onClick={() => this.deletarCliente}>
									Deletar usuariow
								</button>
								<li>{cliente.email}</li>
								<button onClick={() => this.deletarCliente}>
									Deletar Email
								</button>
							</ul>
						</section>
					)
				})}
			</section>
		)
	}
}
