import { useState, useEffect } from 'react';

const Recomended = (props) => {
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				console.log(position);
			},
			(error) => {
				console.error('Error Code = ' + error.code + ' - ' + error.message);
			}
		);
	}, []);
	console.log('hi', props);
	return <div>Recomended</div>;
};
export default Recomended;
