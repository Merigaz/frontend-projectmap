import { GoogleMap } from "@react-google-maps/api";
import {  useSelector } from "react-redux";


function ComponentMap() {
 
    
  const geocoder = new google.maps.Geocoder();
  const addresses = useSelector((state:any) => state.data);
  addresses.forEach(( address:any, index:any) => {
    geocoder.geocode({ address }, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK && results != null) {
        
        console.log(`Address ${index}: ${results[0].formatted_address}`);

        console.log(`Latitude ${index}: ${results[0].geometry.location.lat()}`);

        console.log(
          `Longitude ${index}: ${results[0].geometry.location.lng()}`
        );
      } else {
        alert(`Geocode was not successful for Address ${index}: ${status}`);
      }
    });
  });
  const containerStyle = {
    width: "80%",
    height: "90%",
    borderRadius: "20px",
    border: "1px solid black"
  };

  const center = {
    lat: 10.9632,
    lng: -74.7964,
  };
  
  return (
    <GoogleMap
  
      mapContainerStyle={containerStyle}
      center={center}
      zoom={13}
      options={{
        mapId: import.meta.env.VITE_MAP_ID,
        streetViewControl: false,
        mapTypeControl: false,
      }}
    >  
     </GoogleMap>
  );
}

export default ComponentMap;


