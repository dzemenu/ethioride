import React, {  useEffect } from 'react';
import tw from 'tailwind-styled-components'
import mapboxgl from '!mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoiZHplbWVudSIsImEiOiJja3lteHlicHAyY3IyMnZwMGJjczlkcWJvIn0.DptAsDX-6_E2EzBXS5RhXw';
  const Map = (props) => {

    useEffect(() => {
        // initialize map only once
          const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [38.7578,8.9806],
          zoom: 5
          });
          if(props.pickup){
          const marker1=new mapboxgl.Marker()
          .setLngLat([props.pickup[0],props.pickup[1]])
          .addTo(map);
          const marker2=new mapboxgl.Marker()
          .setLngLat([props.dropoff[0],props.dropoff[1]])
          .addTo(map);
          map.fitBounds([props.pickup,props.dropoff],{padding:40})
         
          }
          map.addControl(
            new mapboxgl.GeolocateControl({
            positionOptions: {
            enableHighAccuracy: true
            },
            // When active the map will receive updates to the device's location as it changes.
            trackUserLocation: true,
            // Draw an arrow next to the location dot to indicate which direction the device is heading.
            showUserHeading: true
            })
            );
          }, []);
        
  return <Wrapper id='map'></Wrapper>;
};
export default Map;
const Wrapper=tw.div`
flex-1 w-10/12 shadow-2xl h-10/12 m-10  bg-green-200 
rounded-lg `