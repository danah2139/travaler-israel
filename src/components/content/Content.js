import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import Rate from '../rate/Rate';
const Content = (props) => {
	console.log(props);
	const { route, category, region } = useParams();
	console.log(route);
	useEffect(() => {}, [route]);

	return (
		<div>
			Hi
			<div>
				<h3>Rate the Route:</h3>
				<Rate />
			</div>
		</div>
	);
};
export default Content;
