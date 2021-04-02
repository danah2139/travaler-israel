import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './nav.styled';
import { Link } from 'react-router-dom';

const NavBar = ({ open, ...props }) => {
	const isHidden = open ? true : false;
	const tabIndex = isHidden ? 0 : -1;

	return (
		<StyledMenu open={open} aria-hidden={!isHidden} {...props}>
			<Link to="/">
				<span aria-hidden="true">🏠</span>
				Home Page
			</Link>
			<Link to="/categories/cycling/regions">
				<span aria-hidden="true">🚴‍♀️</span>
				Cycling
			</Link>
			<Link to="/categories/walking/regions">
				<span aria-hidden="true">🚶‍♀️</span>
				Walking
			</Link>
			<Link to="/categories/jeep_router/regions">
				<span aria-hidden="true">🚙</span>
				4x4
			</Link>
			<Link to="/categories/vehicle_route/regions">
				<span aria-hidden="true">🚗</span>
				Vehicle Route
			</Link>
			<Link to="/recomended" tabIndex={tabIndex}>
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
