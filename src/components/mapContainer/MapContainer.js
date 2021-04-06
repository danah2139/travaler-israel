import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { API_KEY } from './API_KEY';

const MapContainer = ({ routeName, location }) => {
	const mapStyles = {
		height: '250px',
		width: '100%',
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
		</LoadScript>
	);
};

export default MapContainer;
