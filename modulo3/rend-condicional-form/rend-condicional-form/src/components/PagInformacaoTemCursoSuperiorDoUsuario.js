import React from 'react'
import styled from 'styled-components'
export default class PagInformacaoTemCursoSuperiorDoUsuario extends React.Component {
	render() {
		return (
			<>
				<h1>Informações do ensino superior</h1>
				<h2>5. Qual curso?</h2>
				<input type='text' name='curso' value='Digite o nome do curso' />
				<h2>6. Qual a unidade de ensino?</h2>
				<input
					type='text'
					name='unidadeEnsino'
					value='Qual a unidade de ensino?'
				/>
			</>
		)
	}
}
