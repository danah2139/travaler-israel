import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Wrapper } from './selector.styled';

const RegionsSelector = (props) => {
	const [regions, setRegions] = useState(null);
	//const [selectedRegion, setSelectedRegion] = useState('');
	let history = useHistory();

	//const [filterRouts, setFilterRouts] = useState(null);

	useEffect(() => {
		// console.log(props);
		if (props.routs.length) {
			const result = props.routs
				.filter(
					(route) =>
						route.Trail_Type.toLowerCase()
							.replaceAll(' ', '')
							.includes(props.match.params.category.toLowerCase()) &&
						route.Region.search(/[^a-z|A-Z| ]/) === -1 &&
						route.Region
				)
				.map((route) => ({ region: route.Region, id: route._id }));

			setRegions(
				result.filter(
					(regionItem, index, arr) =>
						index === arr.findIndex((r) => r.region === regionItem.region)
				)
			);
		}
	}, [props.match.params.category]);

	// 			.map((route) => ({ routeName: route.Name, id: route.Id })); setFilterRouts(result);

	const handleChange = (value) => {
		history.push(
			`/categories/${props.match.params.category}/regions/${value.replaceAll(
				' ',
				''
			)}/routs`
		);
	};

	const renderRegions = () => {
		return regions.map((regionItem) => (
			<option value={regionItem.region}>{regionItem.region}</option>
		));
	};
	return (
		<Wrapper>
			<h1>Choose Region:</h1>
			<select onChange={(event) => handleChange(event.target.value)}>
				{regions && renderRegions()}
			</select>
		</Wrapper>
	);
};
export default RegionsSelector;
