import React, {useEffect, useState} from 'react';
import mapboxgl from 'mapbox-gl'; 
import {Route} from "react-router-dom";
import Diggy from "./Member";
import "./App.css";
import Map from "./Diggy";


let data = [{
  coordinates: [12.550343, 55.665957],
  name: "Diggy",
  },{
    coordinates: [12.70343, 55.665957],
    name: "Lalala"
  }
]
function App(props) {

  let mapRef = React.createRef();
  let [map, setMap] = useState({})
  let [coordinates, setCoordinates] = useState([12.550343, 55.665957]);

  // useEffect(()=> {
  //   navigator.geolocation.getCurrentPosition(location=> {
  //     debugger
  //     setCoordinates([location.coords.latitude, location.coords.longitude]);
  //   })
  // },[]);
  
  useEffect(()=> {
    mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_ACCESS_TOKEN;

    var map = new mapboxgl.Map({
        container: mapRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center:[12.550343, 55.665957],
        zoom: 8
      });
      
      data.forEach((marker)=> {
        var el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage =
        'url(https://placekitten.com/g/' +
        [40, 40].join('/') +
        '/)';
        el.style.width = 40 + 'px';
        el.style.height = 40 + 'px';
        debugger
        el.addEventListener('click', function() {
          debugger
          props.history.push(`/${marker.name}`)
        });
   
        new mapboxgl.Marker(el)
        .setLngLat(marker.coordinates)
        .addTo(map); 
      })
  },[coordinates])

  
  return (
    <div className="app">
      <Map {...props} ref={mapRef} />
      <Route path="/:id" component={Diggy}/>
    </div>
  );
}

export default App;

//https://docs.mapbox.com/studio-manual/help/#add-points-to-a-map