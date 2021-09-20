import React from "react";
import "./Component.css";
import Mapp from "./Map";
import SearchBar from './SearchBar'

function Carte() {
  return (
    <div>
        <div className="container-map">
          
            <div className="map">
              <SearchBar />
              <Mapp />
            </div>
        </div>
    </div>
  );
}

export default Carte;
