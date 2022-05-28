import React from 'react'

export default class ConteudoDasPlayList extends React.Component {
	render() {
		return (
			<section>
				<button onClick={() => this.props.trocarDePagina('playList')}>
					Playlists
				</button>
			</section>
		)
	}
}
