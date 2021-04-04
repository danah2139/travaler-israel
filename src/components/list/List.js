import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarked } from '@fortawesome/free-solid-svg-icons';

import { StyledList, Wrapper } from './list.styled';

const List = (props) => {
	const [filterRouts, setFilterRouts] = useState(null);

	useEffect(() => {
		console.log(props);
		if (props.routs.length) {
			const result = props.routs
				.filter((route) =>
					route.Region.toLowerCase()
						.replaceAll(' ', '')
						.includes(props.match.params.region.toLowerCase())
				)
				.map((route) => ({
					routeName: route.Name,
					id: route.Id,
					duration: route.Trail_Duration,
				}));

			setFilterRouts(result);
		}
	}, [props.match.params.region]);

	// 			.map((route) => ({ routeName: route.Name, id: route.Id })); setFilterRouts(result);

	const renderRoutes = () => {
		return filterRouts.map((routeItem) => (
			<Link
				key={routeItem.id}
				to={`/categories/${props.match.params.category}/regions/${
					props.match.params.region
				}/routs/${routeItem.routeName.replaceAll(' ', '')}`}
			>
				<div>
					<h3>Name: {routeItem.routeName}</h3>
					<p>Duration: {routeItem.duration}</p>
				</div>
				<FontAwesomeIcon icon={faMapMarked} size="3x" />
			</Link>
		));
	};
	return (
		<Wrapper>
			<h2>Routes:</h2>
			<StyledList>{filterRouts && renderRoutes()}</StyledList>
		</Wrapper>
	);
};
export default List;
