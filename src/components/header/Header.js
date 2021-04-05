import NavBar from '../navBar/NavBar';
import './header.css';
import { useOnClickOutside } from '../../hooks';
import Burger from '../burger/Burger';

import { useState, useRef } from 'react';
import FocusLock from 'react-focus-lock';
import { useHistory } from 'react-router';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const node = useRef();
	useOnClickOutside(node, () => setIsOpen(false));
	const menuId = 'main-menu';
	const { push } = useHistory();

	return (
		<header ref={node}>
			<FocusLock disabled={!isOpen}>
				<Burger open={isOpen} setOpen={setIsOpen} aria-controls={menuId} />
				<NavBar open={isOpen} setOpen={setIsOpen} id={menuId} />
			</FocusLock>
			{/* <input type="search" /> */}
			<div className="logo" onClick={() => push('/')}>
				<img alt="logo" src="./img/Logo-travel-in-israel.png" />
			</div>
		</header>
	);
};
export default Header;
