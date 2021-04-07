import { useEffect, useState } from 'react/cjs/react.development';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarked } from '@fortawesome/free-solid-svg-icons';

const SearchList = ({ searchTerm, routs }) => {
	const [results, setResults] = useState([]);
	useEffect(() => {
		setResults(
			routs.filter((route) => {
				for (let key of route) {
					if (route[key].includes(searchTerm)) {
						return route;
					}
				}
			})
		);
	}, [searchTerm, routs]);
	const renderList = () => {
		return results.map((routeItem) => (
			<Link
				key={routeItem.id}
				to={`/categories/${
					routeItem.Trail_Type
				}/routs/${routeItem.Name.replaceAll(' ', '')}`}
			>
				<div>
					<h3>Name: {routeItem.routeName}</h3>
					<p>Duration: {routeItem.duration}</p>
				</div>
				<FontAwesomeIcon icon={faMapMarked} size="3x" />
			</Link>
		));
	};
	return <div>{results && renderList()}</div>;
};
export default SearchList;
