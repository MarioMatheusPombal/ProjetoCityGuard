import React from 'react';
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api';
import './map.css';

export default function Maps() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyD1qK_YnwjioBoxDQKWMwplvzlXgbXqRmc"
    });
    if (!isLoaded) return <div>Loading...</div>;
    return <div className="map-container">
        {isLoaded ? (
            <GoogleMap
                mapContainerStyle={{width: '100%', height: '100%'}}
                center={{lat: -10, lng: -48}}
                zoom={10}

            >
            </GoogleMap>
        ) : <></>}
    </div>;
}