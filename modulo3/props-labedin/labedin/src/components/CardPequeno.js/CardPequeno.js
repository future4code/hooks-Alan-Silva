import React from 'react'

function CardPequeno(props) {
	return (
		<div className='smallcard-container'>
			<img src={props.imagem} />
			<h4>{props.Email}</h4>
			<p>{props.descrição}</p>
		</div>
	)
}
export default CardPequeno
