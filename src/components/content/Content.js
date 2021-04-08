import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import Rate from '../rate/Rate';
import { Wrapper } from './content.styled';
import MapContainer from '../mapContainer/MapContainer';

const Content = ({ routs, handleStarSelected }) => {
	const { route, category, region } = useParams();
	const [routeInfo, setRouteInfo] = useState({ Name: null });
	const [location, setLocation] = useState([]);
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
			let temp = [];
			//console.log('banana', routeInfo['Ending_point_-_X']);
			temp.push(
				{
					lng: parseFloat(routeInfo['Starting_point_-_X']),
					lat: parseFloat(routeInfo['Starting_point_-_Y']),
				},
				{
					lng: parseFloat(routeInfo['Ending_point_-_X']),
					lat: parseFloat(routeInfo['Ending_point_-_Y']),
				}
			);
			setLocation(temp);
			console.log(temp);
		}
	}, [route, routs, routeInfo]);

	const renderRoute = () => {
		const tempInfo = [];
		const notDisplayArr = [
			'Name',
			'_id',
			'VendorId',
			'Vendor_Name',
			'ShortDescription',
			'URL',
			'Product_Url',
			'Ending_point_-_X',
			'Ending_point_-_Y',
			'Starting_point_-_X',
			'Starting_point_-_Y',
		];
		for (let key in routeInfo) {
			if (key === 'Rate') {
				let avaregeRate = routeInfo[key] / routeInfo['Voters_Counter'];
				tempInfo.push(
					<div>
						<span>{`${key}: `}</span>
						<p> {avaregeRate}</p>
					</div>
				);
			} else if (notDisplayArr.includes(key) === -1) {
				if (routeInfo[key] !== '') {
					tempInfo.push(
						<div>
							<span className="title">{`${key.replaceAll('_', ' ')}: `}</span>
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
				<h2>{routeInfo.Name}</h2>
				<MapContainer routeName={route} location={location} />
				<div className="content">{routeInfo && renderRoute()}</div>
			</div>
			<div className="rate">
				<Rate handleStarSelected={handleStarSelected} routeSelected={route} />
			</div>
		</Wrapper>
	);
};
export default Content;
