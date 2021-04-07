import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import Rate from '../rate/Rate';
import { Wrapper } from './content.styled';
import MapContainer from '../mapContainer/MapContainer';

const Content = ({ routs, handleStarSelected }) => {
	const { route, category, region } = useParams();
	const [routeInfo, setRouteInfo] = useState({ Name: null });
	const [location, setLocation] = useState({});
	useEffect(() => {
		if (routs.length) {
			setRouteInfo(
				routs.find(
					(routeItem) =>
						routeItem.Name.replaceAll(' ', '').toLowerCase() ===
						route.toLowerCase()
				)
			);
			console.log('banana', routeInfo);

			console.log('banana', routeInfo['Ending_point_-_X']);
			const temp = {
				lng: Number(routeInfo['Ending_point_-_X']),
				lat: Number(routeInfo['Ending_point_-_Y']),
			};
			setLocation(temp);
			console.log(temp);
		}
	}, [route, routs, routeInfo]);

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
			} else if (key === 'Rate') {
				let avaregeRate = routeInfo[key] / routeInfo['Voters_Counter'];
				tempInfo.push(
					<div>
						<span>{`${key}: `}</span>
						<p> {avaregeRate}</p>
					</div>
				);
			} else if (
				key !== '_id' &&
				key !== 'Id' &&
				key !== 'VendorId' &&
				key !== 'Vendor_Name' &&
				key !== 'ShortDescription' &&
				key !== 'URL' &&
				key !== 'Product_Url'
			) {
				if (routeInfo[key] !== '') {
					tempInfo.push(
						<div>
							<span>{`${key.replaceAll('_', ' ')}: `}</span>
							<p dangerouslySetInnerHTML={{ __html: routeInfo[key] }}></p>
						</div>
					);
				}
			}
		}
		return tempInfo;
	};
	//console.log(location);
	return (
		<Wrapper>
			<div className="content-container">
				<div className="content">{routeInfo && renderRoute()}</div>
				<MapContainer routeName={route} location={location} />
			</div>
			<div className="rate">
				<Rate handleStarSelected={handleStarSelected} routeSelected={route} />
			</div>
		</Wrapper>
	);
};
export default Content;
