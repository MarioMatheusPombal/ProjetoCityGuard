import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import './map.css';

export default function Maps() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    });
    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
}

function Map() {
    return <GoogleMap zoom={10} center={{lat: -10, lng: -48}} mapContainerClassName="map-container"></GoogleMap>
}