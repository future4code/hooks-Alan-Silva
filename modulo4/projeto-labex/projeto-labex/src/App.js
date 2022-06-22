import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import AdminHomePage from './Pages/AdminHomePage'
import ApplicationFormPage from './Pages/ApplicationFormPage'
import CreateTripPage from './Pages/CreateTripPage'
import HomePage from './Pages/HomePage'
import ListTripPage from './Pages/ListTripsPage'
import LoginPage from './Pages/LoginPage'
import TripDetailsPage from './Pages/TripDetailsPage'

const AppContainerGeral = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
`

const App = () => {
	return (
		<AppContainerGeral>
			<BrowserRouter>
				<Routes>
					<Route path={'/home'} element={<HomePage />} />
					<Route path={'/login'} element={<LoginPage />} />
					<Route path={'/inscricao'} element={<ApplicationFormPage />} />
					<Route path={'/criar-viagens'} element={<CreateTripPage />} />
					<Route path={'/viagens/detalhes'} element={<TripDetailsPage />} />
					<Route path={'/viagens/lista'} elements={<ListTripPage />} />
					<Route path={'/admin'} element={<AdminHomePage />} />
				</Routes>
			</BrowserRouter>
		</AppContainerGeral>
	)
}

export default App
