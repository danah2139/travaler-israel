import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Wrapper } from './selector.styled';

import List from '../list/List';

const RegionsSelector = (props) => {
	const [regions, setRegions] = useState(null);
	const [selectedRegion, setSelectedRegion] = useState('');
	// let history = useHistory();
	let { category } = useParams();

	useEffect(() => {
		if (props.routs[0] !== 'undefined') {
			console.log(props.routs);
			const result = props.routs
				.filter(
					(route) =>
						route.Trail_Type.toLowerCase()
							.replaceAll(' ', '')
							.includes(category.toLowerCase()) &&
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
	}, [category]);

	const handleChange = (value) => {
		// history.push(
		// 	`/categories/${category}/regions/${value.replaceAll(' ', '')}/routs`
		// );

		setSelectedRegion(value.replaceAll(' ', ''));
	};

	const renderRegions = () => {
		return regions.map((regionItem) => (
			<option key={regionItem.id} value={regionItem.region}>
				{regionItem.region}
			</option>
		));
	};
	return (
		<Wrapper>
			<h1>Choose Region:</h1>
			<select onChange={(event) => handleChange(event.target.value)}>
				<option>Select Region</option>
				{regions && renderRegions()}
			</select>
			{selectedRegion && (
				<List region={selectedRegion} routs={props.routs} category={category} />
			)}
		</Wrapper>
	);
};
export default RegionsSelector;
