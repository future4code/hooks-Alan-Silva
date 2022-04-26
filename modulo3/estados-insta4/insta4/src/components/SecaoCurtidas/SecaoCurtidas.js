import React, { Component } from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 5px;
`

const InputComentario = styled.input`
	width: 100%;
	margin-right: 5px;
`

export class SecaoCurtidas extends Component {
	state = {}

	onClickCurtida() {}

	render() {
		return (
			<CommentContainer>
				<InputComentario
					placeholder={'Curtida'}
					value={''}
					onChange={this.onClickCurtida}
				/>
				<button onClick={this.props.aoEnviar}>Enviar</button>
			</CommentContainer>
		)
	}
}
