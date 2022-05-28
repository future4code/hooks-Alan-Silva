import React from 'react'

const Cabecalho = (props) => {
	return (
		<section>
			<hi>Vibe</hi>
			<nav>
				<button onClick={() => props.trocarDePagina('CriarPlayList')}>
					Crie uma playlist
				</button>
				<button onClick={() => props.trocarDePagina('ModificarPlayList')}>
					Deixe sua playlist com a sua cara
				</button>
			</nav>
		</section>
	)
}
export default Cabecalho
