import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LeafletMap = ({ serviceLocations }) => {
    console.log(`serviceLocations are ${serviceLocations}`); 

    return (
        <MapContainer center={[29.9881, 75.3929]} zoom={12} style={{ height: '400px', width: '70%', margin: "auto" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {serviceLocations.map(location => (
                <Marker key={location.id} position={[location.latitude, location.longitude]}>
                    <Popup>
                        Marker for Service Location
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default LeafletMap;

