import React from 'react'
import styled from 'styled-components'

export default class PagDadosGeraisDosUsuarios extends React.Component {
	render() {
		return (
			<>
				<h1>Dados Gerais dos Usuários</h1>
				<h2>1. Qual o seu nome ?</h2>
				<input type='text' name='nome' value='Digite seu nome' />
				<h2>2. Qual a sua idade ? </h2>
				<input type='text' name='idade' value='Digite sua idade' />
				<h2>3. Qual o seu email ?</h2>
				<input type='text' name='email' value='Digite seu email' />
				<h2>4. Qual a sua escolaridade ?</h2>
				<select name='escolaridade'>
					<option value=''>Selecione</option>
					<option value='Ensino Fundamental'>
						Ensino Fundamental Completo
					</option>
					<option value='Ensino Fundamental'>
						Ensino Fundamental Incompleto
					</option>
					<option value='Ensino Médio'>Ensino Médio Completo</option>
					<option value='Ensino Médio'>Ensino Médio Incompleto</option>
					<option value='Ensino Superior'>Ensino Superior Completo</option>
					<option value='Ensino Superior'>Ensino Superior Incompleto</option>
				</select>
			</>
		)
	}
}
