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

	const handleSearch = (event) => {
		event.preventDefault();
	};
	console.log('hi', props);
	return (
		<Wrapper>
			<form onSubmit={handleSearch}>
				<label>
					Insert Duration of Your trip:{' '}
					<input type="text" name="" onChange="" value="" />
				</label>
				<label>
					Choose Region:{' '}
					<select>
						<option>Select Region</option>
					</select>
				</label>
				<div>
					<label>
						<input
							type="radio"
							value="Cycling"
							//checked={state.selectedOption === 'Male'}
							///onChange={onValueChange}
						/>
						Cycling
					</label>
				</div>
				<label>
					Trail Type:
					<input type="radio" name="type" value="Walking" />
					Walking
					<input type="radio" value="4x4" name="type" />
					4x4
					<input type="radio" value="VehicleRoute" name="type" />
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
