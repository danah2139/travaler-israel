import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
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
		zIndex: '1',
	};

	const defaultCenter = {
		lat: 31.771959,
		lng: 35.217018,
	};

	return (
		<LoadScript googleMapsApiKey={API_KEY}>
			<GoogleMap
				resetBoundsOnResize={true}
				mapContainerStyle={mapStyles}
				zoom={10}
				center={location[0]}
				zoomControl={true}
				draggable={true}
				scaleControl={true}
			>
				{/* <Marker key={'hi'} position={{ lat: 31.6685542, lng: 34.5639033 }} /> */}
				<Marker key={'start:' + { routeName }} position={location[0]} />
				<Marker key={routeName} position={location[1]} />
			</GoogleMap>
		</LoadScript>
	);
};

export default MapContainer;
