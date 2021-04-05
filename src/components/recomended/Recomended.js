import { useState, useEffect } from 'react';
import { Wrapper } from './recomended.styled';

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
	return (
		<Wrapper>
			<form>
				<label>
					Insert Duration of Your trip: <input type="text" />
				</label>
				<label>
					Insert Region: <input type="text" />
				</label>
				<label>
					Trail Type:
					<input type="radio" />
					Cycling
					<input type="radio" />
					Walking
					<input type="radio" />
					4x4
					<input type="radio" />
					Vehicle Route
				</label>
				<label>
					Parking:
					<input type="radio" />
					Yes
					<input type="radio" />
					No
				</label>

				<input type="submit" value="Search" />
			</form>
		</Wrapper>
	);
};
export default Recomended;
