import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Botoes = styled.div`
	display: grid;
	grid-auto-flow: column;
	gap: 16px;
	text-decoration: none;
`
const Titulo = styled.h1`
	margin: 65px;
	align-items: center;
	color: purple;
`

const HomePage = () => {
	return (
		<div>
			<section>
				<Titulo>Labex</Titulo>
				<Botoes>
					<Link to={'/inscricao'}>
						<button>Inscrever - se</button>
					</Link>
					<Link to={'/login'}>
						<button>Administração</button>
					</Link>
				</Botoes>
			</section>
		</div>
	)
}

export default HomePage
