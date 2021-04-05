import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarked } from '@fortawesome/free-solid-svg-icons';

import { StyledList, Wrapper } from './list.styled';

const List = ({ routs, region, category }) => {
	const [filterRouts, setFilterRouts] = useState(null);

	useEffect(() => {
		if (routs.length) {
			const result = routs
				.filter((route) =>
					route.Region.toLowerCase()
						.replaceAll(' ', '')
						.includes(region.toLowerCase())
				)
				.map((route) => ({
					routeName: route.Name,
					id: route.Id,
					duration: route.Trail_Duration,
				}));

			setFilterRouts(result);
		}
	}, [region]);

	// 			.map((route) => ({ routeName: route.Name, id: route.Id })); setFilterRouts(result);

	const renderRoutes = () => {
		return filterRouts.map((routeItem) => (
			<Link
				key={routeItem.id}
				to={`/categories/${category}/routs/${routeItem.routeName.replaceAll(
					' ',
					''
				)}`}
			>
				<div>
					<h3>Name: {routeItem.routeName}</h3>
					<p>Duration: {routeItem.duration}</p>
				</div>
				<FontAwesomeIcon icon={faMapMarked} size="3x" />
			</Link>
		));
	};
	return <StyledList>{filterRouts && renderRoutes()}</StyledList>;
};
export default List;
