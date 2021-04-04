import { useState, useEffect } from 'react';

const Recomended = (props) => {
	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			console.log('Latitude is :', position.coords.latitude);
			console.log('Longitude is :', position.coords.longitude);
		});
	}, []);
	console.log('hi', props);
	return <div>Recomended</div>;
};
export default Recomended;
