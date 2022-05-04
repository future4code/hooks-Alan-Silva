import React from 'react'
import styled from 'styled-components'
export default class PagInformacaoNaoTemCursoSuperiorDoUsuario extends React.Component {
	render() {
		return (
			<>
				<h1>Informações gerais de ensino</h1>
				<h2>7. Por que Você não terminou um curso de graduação ?</h2>
				<input
					type='text'
					name='não terminou a graduação'
					value='Descreve o motivo'
				/>
				<h2>6. Você faz algum curso complementar ?</h2>
				<select name='Nenhum'>
					<option value='Nenhum'>Nenhum</option>
					<option value='Curso técnico'>Curso técnico</option>
					<option value='Curso de inglês'>Curso de inglês</option>
				</select>
			</>
		)
	}
}
