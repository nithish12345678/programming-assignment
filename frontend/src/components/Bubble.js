import React from 'react';
import L from 'leaflet';
import { useMap } from 'react-leaflet';
import { usageToRadius, usageToColor } from '../utils/scaleUtils';


const Bubble = ({ data }) => {
    const map = useMap();

    // Create a circle marker using Leaflet
    const circle = L.circle([data.lat, data.lng], {
        color: usageToColor(data.usage),
        fillColor: usageToColor(data.usage),
        fillOpacity: 0.5,
        radius: usageToRadius(data.usage)
    }).addTo(map);

    // Event listener for click event
    circle.on('click', function () {
        // Implement the logic to display details
        console.log(`Usage Details: ${data.details}`);
    });

    return null; // As we're directly manipulating the map instance, no JSX is needed.
};

export default Bubble;