import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import Rate from '../rate/Rate';
import { Wrapper } from './content.styled';
import MapContainer from '../mapContainer/MapContainer';

const Content = ({ routs, handleStarSelected }) => {
	const { route, category, region } = useParams();
	const [routeInfo, setRouteInfo] = useState({ Name: null });
	const [location, setLocation] = useState({
		lat: 31.948995001443276,
		lng: 33.622852171540295,
	});
	useEffect(() => {
		if (routs.length) {
			setRouteInfo(
				routs.find(
					(routeItem) =>
						routeItem.Name.replaceAll(' ', '').toLowerCase() ===
						route.toLowerCase()
				)
			);
			//console.log(routeName, 'check');
		}
	}, [route]);

	// useEffect(() => {
	// 	if (routeInfo) {
	// 		console.log(routeInfo.Name, 'hi');
	// 	}
	// }, [route]);
	const renderRoute = () => {
		const tempInfo = [];
		for (let key in routeInfo) {
			if (key === 'Name') {
				tempInfo.push(<h2>{routeInfo.Name}</h2>);
			} else if (
				key !== '_id' &&
				key !== 'Id' &&
				key !== 'VendorId' &&
				key !== 'Vendor_Name' &&
				key !== 'ShortDescription'
			) {
				if (routeInfo[key] !== '') {
					tempInfo.push(
						<div>
							<span>{`${key.replaceAll('_', ' ')}: `}</span>
							<p dangerouslySetInnerHTML={{ __html: routeInfo[key] }}></p>
						</div>
					);
				}
			} else if (key === 'Rate') {
				let avaregeRate = routeInfo[key] / routeInfo['Voters_Counter'];
				tempInfo.push(
					<div>
						<span>{`${key}: `}</span>
						<p> {avaregeRate}</p>
					</div>
				);
			}
		}
		return tempInfo;
	};

	return (
		<Wrapper>
			<div className="content-container">
				<div className="content">{routeInfo && renderRoute()}</div>
				{/* <MapContainer routeName={routeName} location={location} /> */}
			</div>
			<div className="rate">
				<Rate handleStarSelected={handleStarSelected} routeSelected={route} />
			</div>
		</Wrapper>
	);
};
export default Content;
