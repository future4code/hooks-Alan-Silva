import React from 'react'
import { Link } from 'react-router-dom'

const ListTripSPage = () => {
	return (
		<div>
			<section>
				<h1>Viagens marcadas</h1>
				<Link to={'/criar-viagens'}>
					<button>Inscrever - se</button>
				</Link>
			</section>
		</div>
	)
}

export default ListTripSPage
