import React from 'react'

export default class CriarPlayList extends React.Component {
	state = {}
	render() {
		return (
			<section>
				<h2>Crie uma playlist so sua</h2>
				<label>coloque aqui o nome da sua playlist</label>
				<input placeholder='Nome da sua playlist' />
				<button>Criar</button>
			</section>
		)
	}
}
