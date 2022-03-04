import React, { useState } from 'react';
import Map, { Marker, Popup } from "react-map-gl";

const MapComponent = ({ hLatitude, hLongitude, hImageUrl }) => {
  const [showPopup, setShowPopup] = useState(true);
  return (
    <div className='map'>
      <Map
        initialViewState={{
          longitude: `${hLongitude}`,
          latitude: `${hLatitude}`,
          zoom: 14
        }}
        style={{ width: "100vw", height: "95vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={"pk.eyJ1Ijoic3VyYmhpc2VuIiwiYSI6ImNsMGIzdWQ3dDA2NmMzam83MzhiZGdkOTUifQ.eoZljEMMs4qk0YeYDcElyA"}
        pitch="50"
      >
        {
        showPopup && (
          <Popup longitude={hLongitude} latitude={hLatitude}
            anchor="bottom-left"
            onClose={() => setShowPopup(false)}>
            <img height={50} width={50} src={hImageUrl} alt="hospital__image" />
          </Popup>)
          }
        <Marker longitude={hLongitude} latitude={hLatitude} anchor="center" >
          <img width={50} height={50} alt="pin" src="https://cdn1.iconfinder.com/data/icons/medicine-pt-7/100/051_-_hospital_map_marker_pin_doctor-512.png" />
        </Marker>
      </Map>
    </div>
  )
}

export default MapComponent