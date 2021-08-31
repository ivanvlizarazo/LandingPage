import React, { useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Polyline,
  Polygon,
  useMapEvents,
} from "react-leaflet";
import { Icon } from "leaflet";
import "../../css/react-leaflet.css";
import { states, magdalenaPolygon } from "../../states";
import Card from "./Card";
import { Link, Typography } from "@material-ui/core";


const icon = new Icon({
  iconUrl: "location.png",
  iconSize: [18, 25],
});

function invertCoordinates(state) {
  /**Función que invierte el orden de longitud y latitud a latitud a longitud y ajusta las coordenadas*/
  var invert = [];
  for (const i of state) {
    invert.push([i[1] + 0.009, i[0] + 0.015]);
  }
  return invert;
}

function LocationMarker(props) {
  /**Función para redireccionar al area de inicio*/
  const position = { lat: props.center[0], lng: props.center[1] };
  const map = useMapEvents({
    click() {
      map.flyTo(position, 8);
    },
  });

  map.flyTo(position, 8);
  return <div/>;
}

export default function MapView() {
  const [activeState, setActiveState] = useState(null);
  const center =[10.1287919, -74.366555];

  return (
    <div >
      <MapContainer center={center} zoom={8}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker center={center} />
       
        {states.map((state) => (
          <React.Fragment>
            <Marker
              key={state.id}
              position={[state.location.latitude, state.location.longitude]}
              icon={icon}
              eventHandlers={{
                click: (e) => {
                  setActiveState(state);
                },
              }}
            />

            <Polygon
              positions={invertCoordinates(state.polygon)}
              pathOptions={{ fillColor: "#6AFFA5", color:'#00A915' }}
            ></Polygon>
          </React.Fragment>
        ))}

        {activeState && (
          <Popup
            position={[
              activeState.location.latitude,
              activeState.location.longitude,
            ]}
            onClose={() => {
              setActiveState(null);
            }}
          >
            <Card
              image={activeState.image}
              title={activeState.name}
              description={
                <div>
                  <Typography>
                    <b>Población:</b>
                    {` ${activeState.population}`}
                  </Typography>
                  <Typography variant="h6">Atracciones Turísticas</Typography>

                  {activeState.sites.map((site) => (
                    <Typography variant="caption">
                      {site.name.map((item, idx) => {
                        return <div>{`${idx + 1}. ${item}`}</div>;
                      })}
                    </Typography>
                  ))}
                  <Link target="_blank" href={activeState.url}>
                    <br />
                    <b>{`Conoce más de ${activeState.name}`}</b>
                  </Link>
                </div>
              }
            />
          </Popup>
        )}

        <Polyline
          pathOptions={{ color: "#00A91599" }}
          positions={invertCoordinates(magdalenaPolygon)}
        ></Polyline>
      </MapContainer>
    </div>
  );
}
