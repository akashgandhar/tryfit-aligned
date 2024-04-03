import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '1480px',
  height: '400px',
  margin: '172px',
};

// Replace these coordinates with the latitude and longitude of your specific location
const location = {
  lat: 28.664087120746654,  // Example latitude
  lng: 77.26519894839346 // Example longitude
};

function MyMapComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCK2YSyAaJYlcn9QqeE_1T8PCH1eMuzBdc" // Replace with your API key
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={15} // You can adjust the zoom level here
      >
        {/* Marker for the specific location */}
        <Marker
          position={location}
        />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyMapComponent);
