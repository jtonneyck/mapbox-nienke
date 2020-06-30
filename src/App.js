import React, {useEffect, useState} from 'react';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import {Route} from "react-router-dom";
import Diggy from "./Diggy";
import "./App.css";

let mapStyles = {
  width: "50%",
  height: "100vh"
}

let data = [{
  coordinates: [12.550343, 55.665957],
  name: "Diggy",
  },{
    coordinates: [12.70343, 55.665957],
    name: "Du Waist"
  }
]
function App(props) {
  debugger
  let mapRef = React.createRef();

  useEffect(()=> {
    mapboxgl.accessToken = 'pk.eyJ1IjoicGllcG9uZ3dvbmciLCJhIjoiY2tjMjUyaG8xMXp4bjMzbXhueDVscXR0cCJ9.Who2g0qEGkMLBmp8dgMhPQ';

    var map = new mapboxgl.Map({
        container: mapRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [12.550343, 55.665957],
        zoom: 8
      });
       

      
      // var marker = new mapboxgl.Marker()
      // .setLngLat([12.550343, 55.665957])
      // .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
      // .setHTML('<h3>diggy</h3>'))
      // .addTo(map);

      map.on('click', "settlement-label", function(e) {
        var features = map.queryRenderedFeatures(e.point);
        debugger
      })

      data.forEach((marker)=> {
        var el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage =
        'url(https://placekitten.com/g/' +
        [40, 40].join('/') +
        '/)';
        el.style.width = 40 + 'px';
        el.style.height = 40 + 'px';
        
        el.addEventListener('click', function() {
          props.history.push(`/${marker.name}`)
        });
   
        new mapboxgl.Marker(el)
        .setLngLat(marker.coordinates)
        .addTo(map); 
      })


  })

  return (
    <div className="app">
      <div style={mapStyles} ref={mapRef}/>
      <Route path="/:id" component={Diggy}/>
    </div>
  );
}

export default App;

//https://docs.mapbox.com/studio-manual/help/#add-points-to-a-map