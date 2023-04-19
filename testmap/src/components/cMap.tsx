import { GoogleMap, Marker } from "@react-google-maps/api";

import { useQuery } from "react-query";

import getData from "../hooks/useAxios";

function ComponentMap() {
  const { isLoading, isError, data } = useQuery("markers", getData);

  const containerStyle = {
    width: "80%",
    height: "85%",
    borderRadius: "20px",
    border: "1px solid black",
  };

  const center = {
    lat: 10.9632,
    lng: -74.7964,
  };

  return (
    <>
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
        {data &&
          data.data.map((marker: any) => (
            <Marker
              key={marker._id}
              position={{ lat: marker.lat, lng: marker.lng }}
              title={marker.name}
            />
          ))}
      </GoogleMap>
    </>
  );
}

export default ComponentMap;
