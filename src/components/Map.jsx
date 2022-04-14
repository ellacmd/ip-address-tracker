import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';

import './Map.css';
import icon from '../images/icon-location.svg';

function MyComponent({ ipDetails }) {
  const map = useMap();
  map.flyTo(new L.LatLng(ipDetails.location?.lat, ipDetails.location?.lng));

  return null;
}

function Map({ ipDetails }) {
  
  const myIcon = new L.Icon({
    iconUrl: icon,
    iconSize: [26, 36],
  });
  return (
    <div className='map'>
      <MapContainer center={[ipDetails.location?.lat, ipDetails.location?.lng]} zoom={14}>
        <MyComponent ipDetails={ipDetails} />
        <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

        <Marker
          position={[ipDetails.location?.lat, ipDetails.location?.lng]}
          icon={myIcon}
        ></Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
