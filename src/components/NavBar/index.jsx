import './navbar.css';

const NavBar = () => {
	return (
		<nav className="navbar">
			<div className="logo">
				<a href="/">Apollo</a>
			</div>
			<ul>
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/agenda">Agenda</a>
				</li>
				<li>
					<a href="/financas">Finanças</a>
				</li>
				<li>
					<a href="/organizador">Organizador</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
