
import React, { useEffect,useState,useCallback, memo } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import "./Maps.css"
import { googleApiKey } from '../../config';

const containerStyle = {
  width: '1080px',
  height: '720px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const Maps = () =>{
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: googleApiKey
  })

  const [map, setMap] =useState(null)

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  useEffect(() => {
    if(map){
        console.log("Map Loaded");
    }
  }, [map])
  

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default memo(Maps)