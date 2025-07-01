import Home from './pages/Home';
import Agenda from './pages/Agenda';
import Financas from './pages/Financas';
import OrganizadorDeIdeias from './pages/OrganizadorDeIdeias';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';

function App() {
	return (
		<div className="layout">
			<NavBar />
			<div className="content">
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/agenda/*"
						element={<Agenda />}
					/>
					<Route
						path="/financas/*"
						element={<Financas />}
					/>
					<Route
						path="/organizador/*"
						element={<OrganizadorDeIdeias />}
					/>
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
