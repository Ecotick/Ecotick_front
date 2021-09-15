/*import React from "react";
import mapboxgl from "react-mapbox-gl";

mapboxgl.accessToken='pk.eyJ1IjoiaHVndWVzYnJpcXVlbGVyIiwiYSI6ImNrdDlzbmRqZDFmYWwydnBkYmd1ODE1b3cifQ.vQEDGUe5ofdbdaQ1mXbAyQ';

const data = [
	{
		"location": "Manhattan Ave & Norman Ave at NE corner",
		"city": "Brooklyn",
		"state": "New York",
		"coordinates": [-73.9516030004786,40.72557300071668],
	},
  {
		"location": "6th Ave & 42nd St at NW corner",
		"city": "Manhattan",
		"state": "New York",
		"coordinates": [-73.98393399979334,40.75533300052329],
	}
]

class Mapp extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      lng:4.72,
      lat:49.76,
      zoom: 5
    }
  }
  componentDidMount(){
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    })

    data.forEach((location) => {
			console.log(location)
			var marker = new mapboxgl.Marker()
							.setLngLat(location.coordinates)
							.setPopup(new mapboxgl.Popup({ offset: 30 })
							.setHTML('<h4>' + location.city + '</h4>' + location.location))
							.addTo(map);

		})

  }

  render(){
    return(
      <div>
        <div ref={el => this.mapContainer = el} style={{width: '100%', height: '100vh'}}></div>
      </div>
    )
  }

}

export default Mapp;*/
