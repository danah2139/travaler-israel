import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StyledList } from './list.styled';

const List = (props) => {
	const [regions, setRegions] = useState(null);
	const [filterRouts, setFilterRouts] = useState(null);

	useEffect(() => {
		console.log(props);
		if (props.routs.length) {
			if (props.type === 'region') {
				const result = props.routs
					.filter((route) => {
						if (
							route.Trail_Type.toLowerCase()
								.replace(' ', '')
								.includes(props.match.params.category.toLowerCase()) &&
							route.Region.search(/[^a-z|A-Z| ]/) === -1
						) {
							return route.Region;
						}
					})
					.map((route) => ({ region: route.Region, id: route._id }));

				setRegions(
					result.filter(
						(regionItem, index, arr) =>
							index === arr.findIndex((r) => r.region === regionItem.region)
					)
				);
			} else {
				const result = props.routs
					.filter((route) => {
						if (
							route.Region.toLowerCase()
								.replace(' ', '')
								.includes(props.match.params.region.toLowerCase())
						) {
							return route.Region;
						}
					})
					.map((route) => ({ routeName: route.Name, id: route._id }));

				setFilterRouts(result);
			}
		}
	}, [props.match.params.category, props.match.params.region]);

	const renderRegions = () => {
		return regions.map((regionItem) => (
			<Link
				key={regionItem.id}
				to={`/categories/${props.match.params.category}/regions/${regionItem.region}`}
			>
				{regionItem.region}
			</Link>
		));
	};

	const renderRoutes = () => {
		return filterRouts.map((routeItem) => (
			<Link
				key={routeItem.id}
				to={`/categories/${props.match.params.category}/regions/${props.match.params.region}/routes/${routeItem.routeName}`}
			>
				{routeItem.route}
			</Link>
		));
	};
	return (
		<div>
			{props.type === 'region' && regions && renderRegions()}
			{props.type === 'route' && regions && renderRoutes()}
		</div>
	);
};
export default List;
