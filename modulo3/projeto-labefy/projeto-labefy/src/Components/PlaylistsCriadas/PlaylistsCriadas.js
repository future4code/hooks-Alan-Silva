import React from 'react'

export default class PlayListCriadas extends React.Component {
	render() {
		return (
			<section>
				<button
					onClick={() => this.props.trocarDePagina('ConteudoDasPlayList')}
				>
					Ver sua playlist
				</button>
			</section>
		)
	}
}
