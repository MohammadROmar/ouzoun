import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { marker } from '../utils/marker-icon';

type MapProps = { latitude: number; longtitude: number; markerLabel: string };

function Map({ latitude, longtitude, markerLabel }: MapProps) {
  return (
    <MapContainer
      center={[latitude, longtitude]}
      zoom={13}
      scrollWheelZoom={false}
      className="h-[inherit]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longtitude]} riseOnHover icon={marker}>
        <Popup>{markerLabel}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
