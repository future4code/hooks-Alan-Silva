import React from 'react'
import './App.css'
import CardGrande from './components/CardGrande/CardGrande'
import CardPequeno from './components/CardPequeno.js/CardPequeno'
import ImagemButton from './components/ImagemButton/ImagemButton'

function App() {
	return (
		<div className='App'>
			<div className='page-section-container'>
				<h2>Dados pessoais</h2>
				<CardGrande
					imagem='https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png'
					nome='Alan Fabrício'
					descricao='Oi, eu sou Alan Fabrício. Sou estudande na escola de programação Labenu e na escola técnica Grau Técnico. Adoro Games e Board Games.'
				/>
				<ImagemButton
					imagem='https://image.flaticon.com/icons/png/512/117/117472.png'
					texto='Ver mais'
				/>
			</div>
			<div className='page-section-container'>
				<CardPequeno
					imagem='https://www.google.com/url?sa=i&url=https%3A%2F%2Fmanualdousuario.net%2Famp-para-email-gmail-google%2F&psig=AOvVaw0XCYflzXGQ0HJ7yvKqLTIG&ust=1650745892367000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKiM3eXBqPcCFQAAAAAdAAAAABAD'
					texto='Email'
					descrição='Este é meu email para contato : alanfabriciobarbosa1@gmail.com'
				/>
			</div>
			<div className='page-section-container'>
				<h2>Experiências profissionais</h2>
				<CardGrande
					imagem='https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png'
					nome='Hospital Alvorada'
					descricao='Estagiário em Radiologia'
				/>
			</div>
			<div className='page-section-container'>
				<h2>Minhas redes sociais</h2>
				<ImagemButton
					imagem='https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png'
					texto='Facebook'
				/>
				<ImagemButton
					imagem='https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png'
					texto='Twitter'
				/>
			</div>
		</div>
	)
}

export default App
