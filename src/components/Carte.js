import React from "react";
import "./Component.css";
import MapBox from "./MapBox";
import SearchBar from "./SearchBar";
import useGeolocation from "react-hook-geolocation";

function Carte() {
  const geolocation = useGeolocation();
  console.log(geolocation);
  return (
    <div>
      <div className="container-map">
        <div className="map">
          <SearchBar />
          <MapBox
            lng={geolocation.longitude}
            lat={geolocation.latitude}
            zoom={9}
          />
        </div>
      </div>
    </div>
  );
}

export default Carte;
