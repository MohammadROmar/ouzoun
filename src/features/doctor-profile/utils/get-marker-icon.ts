import L from 'leaflet';

import markerIcon from '../../../assets/images/marker.png';

export const marker = new L.Icon({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon.src,
  iconSize: [40, 40],
});
