import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import Bubble from './Bubble';

const MapComponent = ({ data }) => {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} className="map-container">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {data.map((item, index) => (
                <Bubble key={index} data={item} />
            ))}
        </MapContainer>
    );
};

export default MapComponent;