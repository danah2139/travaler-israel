import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StyledList } from './list.styled';

const RegionsList = (props) => {
	console.log('hi', props);
	const [regions, setRegions] = useState(null);
	useEffect(() => {
		if (props.routs.length) {
			const result = props.routs
				.filter((route) => {
					if (
						route.Trail_Type.toLowerCase().includes(props.match.params.category)
					) {
						return route.Region;
					}
				})
				.map((route) => route.Region);
			setRegions([...new Set(result)]);
		}
	}, [props.routs]);

	const renderRegions = () => {
		return regions.map((region) => (
			<Link to={`/categories/cycling/regions/${region}`}>{region}</Link>
		));
	};
	return <div>{regions && renderRegions()}</div>;
};
export default RegionsList;
