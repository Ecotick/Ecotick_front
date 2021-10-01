import React, { useEffect, useRef, useState, useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Sample data
const data = [
  {
    location: "Musée Arthur Rimbaud, 7 quai Arthur Rimbaud",
    city: "Charleville-Mezière",
    state: "France",
    coordinates: [4.726096, 49.762085],
  },
  {
    location: "Tribunal judiciaire",
    city: "Charleville-Mezière",
    state: "France",
    coordinates: [4.721555, 49.760994],
  },
  {
    location: "Lycée Vauban, 15 rue André Bouzy",
    city: "Givet",
    state: "France",
    coordinates: [4.816667, 50.133333],
  },
];

const styles = {
  width: "125%",
  height: "100%",
  position: "absolute"
};

const position = {
  lng: 4.833333,
  lat: 49.933333,
  zoom: 9,
};

const MapBox = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  const { sidebar } = useContext(SidebarContext);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiaHVndWVzYnJpcXVlbGVyIiwiYSI6ImNrdDlzbmRqZDFmYWwydnBkYmd1ODE1b3cifQ.vQEDGUe5ofdbdaQ1mXbAyQ";
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [position.lng, position.lat],
        zoom: position.zoom
      });

      data.forEach((location) => {
        console.log(location);
        // eslint-disable-next-line no-unused-vars
        var marker = new mapboxgl.Marker()
          .setLngLat(location.coordinates)
          .setPopup(
            new mapboxgl.Popup({ offset: 30 }).setHTML(
              "<h4>" + location.city + "</h4>" + location.location
            )
          )
          .addTo(map);
      });
  
      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={el => (mapContainer.current = el)} style={styles} />;
};

export default MapBox
