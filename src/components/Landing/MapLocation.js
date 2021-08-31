import React from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";


function LocationMarker(props) {
    /**Función para redireccionar al area de inicio*/
    const position = { lat: props.center[0], lng: props.center[1] };
    const map = useMapEvents({
      click() {
        map.flyTo(position, 12);
      },
    });
  
    map.flyTo(position, 12);
    return <div/>;
  }


export default function MapView(props) {
 
  const { center, zoom} = props;

 
  return (
    
      <MapContainer center={center} zoom={zoom} style={{ height: '15vh', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center}>
        <Popup>Innovanex SAS</Popup>
        <LocationMarker center={center} />
      </Marker>
       
      </MapContainer>
 
  );
}
