import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import Rate from '../rate/Rate';
const Content = (props) => {
	const { route, category, region } = useParams();
	const [routeInfo, setRouteInfo] = useState(null);
	useEffect(() => {
		if (props.routs.length) {
			setRouteInfo(
				props.routs.find(
					(routeItem) =>
						routeItem.Name.replaceAll(' ', '').toLowerCase() ===
						route.toLowerCase()
				)
			);
		}
	}, [route]);
	const renderRoute = () => {
		const tempInfo = [];
		for (let key in routeInfo) {
			if (key === 'Name') {
				tempInfo.push(<h2>{routeInfo.Name}</h2>);
			} else if (key !== '_id' && key !== 'Id') {
				tempInfo.push(
					<p>
						<span>{`${key}:`}</span>
						{`${routeInfo[key]}`}
					</p>
				);
			}
		}
		return tempInfo;
	};

	return (
		<div>
			{routeInfo && renderRoute()}
			<div>
				<h3>Rate the Route:</h3>
				<Rate />
			</div>
		</div>
	);
};
export default Content;
