import React from 'react'
import styled from 'styled-components'

const ContainerForm = styled.div`
	color: purple;
`
const LoginH2 = styled.h2`
	margin: 65px;
`

const LoginPage = () => {
	return (
		<ContainerForm>
			<section>
				<LoginH2>Login</LoginH2>
				<form action='' method='get'>
					<p>Usuário:</p>
					<input type='email' name='Email' /> <br />
					<p>Senha:</p>
					<input type='password' name='senha' /> <br />
					<button>Enviar</button>
				</form>
			</section>
		</ContainerForm>
	)
}

export default LoginPage
