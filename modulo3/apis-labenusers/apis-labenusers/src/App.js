import React from 'react'
import Usuario from './Components/Usuario'
import ListaDeUsuarios from './Components/ListaDeUsuarios'
export default class App extends React.Component {
	state = {
		telaDoUsuario: 'cadastro',
	}

	trocarDePagina = () => {
		this.setState(
			{
				telaDoUsuario: this.state.telaDoUsuario === 'cadastro',
			}
				? 'lista'
				: 'cadastro'
		)
	}

	render() {
		return (
			<section>
				{this.state.telaDoUsuario === 'cadastro' ? (
					<Usuario filhoUm={this.trocarDePagina} />
				) : (
					<ListaDeUsuarios filhoDois={this.trocarDePagina} />
				)}
			</section>
		)
	}
}
