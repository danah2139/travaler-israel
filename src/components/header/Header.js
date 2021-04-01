import NavBar from '../navBar/NavBar';
import { useState } from 'react';
import './header.css';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<header>
			<img alt="logo" src="./img/Logo-travel-in-israel.jpg" />
			<div>
				<div
					class="nav-icon"
					onClick={() => {
						setIsOpen(!isOpen);
					}}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
				{isOpen && <NavBar />}
			</div>
		</header>
	);
};
export default Header;
