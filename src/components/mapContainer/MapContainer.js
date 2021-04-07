import React, { useState } from 'react';
import {
	GoogleMap,
	LoadScript,
	Marker,
	InfoWindow,
} from '@react-google-maps/api';
import { API_KEY } from './API_KEY';

const MapContainer = ({ routeName, location }) => {
	console.log(location);
	const [selected, setSelected] = useState({});

	const onSelect = (item) => {
		setSelected(item);
	};

	const mapStyles = {
		height: '200px',
		width: '100%',
		zIndex: '-1',
	};

	const defaultCenter = {
		lat: 31.4117257,
		lng: 35.0818155,
	};

	return (
		<LoadScript googleMapsApiKey={API_KEY}>
			<GoogleMap
				resetBoundsOnResize={true}
				mapContainerStyle={mapStyles}
				zoom={8}
				center={defaultCenter}
			/>
			<Marker key={routeName} position={location} />
			{/* {selected.location && (
				<InfoWindow
					position={selected.location}
					clickable={true}
					onCloseClick={() => setSelected({})}
				>
					<p>{selected.name}</p>
				</InfoWindow>
			)} */}
		</LoadScript>
	);
};

export default MapContainer;
