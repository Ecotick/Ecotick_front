import React from "react";
import "./Component.css";
import MapBox from "./MapBox";
import SearchBar from './SearchBar'

function Carte() {
  return (
    <div>
        <div className="container-map">
          
            <div className="map">
              <SearchBar />
              <MapBox />
            </div>
        </div>
    </div>
  );
}

export default Carte;
