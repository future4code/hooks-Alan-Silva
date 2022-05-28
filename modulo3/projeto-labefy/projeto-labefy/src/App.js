import React from 'react'
import Cabecalho from './Components/Cabecalho/Cabecalho'
import CriarPlayList from './Components/CriaPlayList/CriarPlayList'
import PlayLists from './Components/PlayList/PlayLists'

export default class App extends React.Component {
	state = {
		home: 'CriarPlayList',
	}
	trocarDePagina = (home) => {
		this.setState({ home: home })
	}

	render() {
		const home = () => {
			if (this.state.home === 'CriarPlayList') {
				return <CriarPlayList />
			} else if (this.state.home === 'ModificarPlayList') {
				return <PlayLists />
			}
		}
		return (
			<section>
				<Cabecalho trocarDePagina={this.trocarDePagina} />
				{home()}
			</section>
		)
	}
}
