import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { API_KEY } from './API_KEY';

const MapContainer = ({ routeName, location }) => {
	const mapStyles = {
		height: '20%',
		width: '100%',
	};

	const defaultCenter = {
		lat: 31.948995001443276,
		lng: 33.622852171540295,
	};

	return (
		<LoadScript googleMapsApiKey={API_KEY}>
			<GoogleMap
				mapContainerStyle={mapStyles}
				zoom={13}
				center={defaultCenter}
			/>
			<Marker key={routeName} position={location} />
		</LoadScript>
	);
};

export default MapContainer;
