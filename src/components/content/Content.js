import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import Rate from '../rate/Rate';
import { Wrapper } from './content.styled';
const Content = ({ routs, onClick, starsSelected }) => {
	const { route, category, region } = useParams();
	const [routeInfo, setRouteInfo] = useState(null);
	useEffect(() => {
		if (routs.length) {
			setRouteInfo(
				routs.find(
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
			} else if (
				key !== '_id' &&
				key !== 'Id' &&
				key !== 'VendorId' &&
				key !== 'Vendor_Name' &&
				key !== 'ShortDescription'
			) {
				if (routeInfo[key] !== '') {
					// if (typeof key === 'string') {
					// 	key = ;
					// }
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

	return (
		<Wrapper>
			<div className="content">{routeInfo && renderRoute()}</div>
			<div className="rate">
				<h3>Rate the Route:</h3>
				<Rate onClick={onClick} starsSelected={starsSelected} />
				<p>
					<span>{starsSelected}</span> of 5 stars
				</p>
			</div>
		</Wrapper>
	);
};
export default Content;
