import NavBar from '../navBar/NavBar';
import './header.css';
import { useOnClickOutside } from '../../hooks';
import Burger from '../burger/Burger';

import { useState, useRef } from 'react';
import FocusLock from 'react-focus-lock';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const node = useRef();
	useOnClickOutside(node, () => setIsOpen(false));
	const menuId = 'main-menu';

	return (
		<header ref={node}>
			<FocusLock disabled={!isOpen}>
				<div className="logo">
					<img alt="logo" src="./img/Logo-travel-in-israel.png" />
				</div>
				<Burger open={isOpen} setOpen={setIsOpen} aria-controls={menuId} />
				<NavBar open={isOpen} setOpen={setIsOpen} id={menuId} />
			</FocusLock>
		</header>
	);
};
export default Header;
