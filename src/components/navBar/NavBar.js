import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './nav.styled';
import { Link } from 'react-router-dom';

const NavBar = ({ open, setOpen, ...props }) => {
	const isHidden = open ? true : false;
	const tabIndex = isHidden ? 0 : -1;
	console.log(isHidden);

	return (
		<StyledMenu open={open} aria-hidden={!isHidden} {...props}>
			<Link to="/" tabIndex={tabIndex} onClick={() => setOpen(!open)}>
				<span aria-hidden="true">🏠</span>
				Home Page
			</Link>
			<Link
				to="/categories/cycling/routs"
				tabIndex={tabIndex}
				onClick={() => setOpen(!open)}
			>
				<span aria-hidden="true">🚴‍♀️</span>
				Cycling
			</Link>
			<Link
				to="/categories/walking/routs"
				tabIndex={tabIndex}
				onClick={() => setOpen(!open)}
			>
				<span aria-hidden="true">🚶‍♀️</span>
				Walking
			</Link>
			<Link
				to="/categories/4X4/routs"
				tabIndex={tabIndex}
				onClick={() => setOpen(!open)}
			>
				<span aria-hidden="true">🚙</span>
				4x4
			</Link>
			<Link
				to="/categories/vehicleRoute/routs"
				tabIndex={tabIndex}
				onClick={() => setOpen(!open)}
			>
				<span aria-hidden="true">🚗</span>
				Vehicle Route
			</Link>
			<Link to="/recomended" tabIndex={tabIndex} onClick={() => setOpen(!open)}>
				<span aria-hidden="true">🌟</span>
				Recomended
			</Link>
		</StyledMenu>
	);
};

NavBar.propTypes = {
	open: bool.isRequired,
};

export default NavBar;
