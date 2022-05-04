import react from 'react'
import PagAgradecimentos from './components/PagAgradecimento'
import PagDadosGeraisDosUsuarios from './components/PagDadosGeraisDosUsuarios'
import PagInformacaoTemCursoSuperiorDoUsuario from './components/PagInformacaoTemCursoSuperiorDoUsuario'
import PagInformacaoNaoTemCursoSuperiorDoUsuario from './components/PagInformacaoNaoTemCursoSuperiorDoUsuario'

export default class App extends react.Component {
	state = {
		dados: 1,
	}
	retornaPagina = () => {
		switch (this.state.dados) {
			case 1:
				return <PagDadosGeraisDosUsuarios />
			case 2:
				return <PagInformacaoTemCursoSuperiorDoUsuario />
			case 3:
				return <PagInformacaoNaoTemCursoSuperiorDoUsuario />
			case 4:
				return <PagAgradecimentos />
			default:
				return <PagAgradecimentos />
		}
	}
	irParaAProximaPagina = () => {
		if (this.state.dados < 3) {
			this.setState({
				dados: this.state.dados + 1,
			})
		}
	}

	render() {
		return (
			<>
				{this.retornaPagina()}
				{this.state.dados <= 3 ? (
					<>
						<button name='button' onClick={this.dados}>
							Próxima etapa
						</button>
					</>
				) : null}
			</>
		)
	}
}
