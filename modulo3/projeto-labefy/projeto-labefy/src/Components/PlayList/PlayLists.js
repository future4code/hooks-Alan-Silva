import React from 'react'
import PlayListCriadas from '../PlaylistsCriadas/PlaylistsCriadas'
import ConteudoDasPlayList from '../ConteudoDasPlayList/ConteudoDasPlayList'
export default class PlayLists extends React.Component {
	state = {
		paginaDasPlaylist: 'playlist',
	}
	trocarDePagina = (paginaDasPlaylist) => {
		this.setState({ paginaDasPlaylist: paginaDasPlaylist })
	}

	render() {
		const paginaDasPlaylist = () => {
			if (this.state.paginaDasPlaylist === 'playlist') {
				return <PlayListCriadas trocarDepagina={this.trocarDePagina} />
			} else if (this.state.paginaDasPlaylist === 'ConteudoDasPlayList') {
				return <ConteudoDasPlayList trocarDepagina={this.trocarDePagina} />
			}
		}
		return <section>{paginaDasPlaylist()}</section>
	}
}
