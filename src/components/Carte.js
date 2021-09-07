import React from "react";
import "./Component.css";
import Mapp from "./Map";

function Carte() {
  return (
    <div>
        <div className="container-map">
            <div className="map">
            <Mapp />
            </div>
        </div>
    </div>
  );
}

export default Carte;
