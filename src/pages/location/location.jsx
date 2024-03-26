import React from "react";
import "./style.css";
import GoogleMapReact from "google-map-react";

const LocationScreen = () => {
  const center = {
    lat: 37.7749, // Latitude for San Francisco
    lng: -122.4194, // Longitude for San Francisco
  };

  // Define custom marker component
  const Marker = ({ text }) => (
    <div
      style={{
        backgroundColor: "red",
        color: "white",
        borderRadius: "50%",
        padding: "10px 15px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transform: "translate(-50%, -50%)",
      }}
    >
      {text}
    </div>
  );

  return (
    <div style={{ height: "400px", width: "100%", position: "relative" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDKWkllqPaeJYbbEewb3fKd-20jsTe648Q" }}
        defaultCenter={center}
        defaultZoom={10}
      >
        {/* Add custom markers */}
        <Marker
          lat={37.7749} // Latitude for San Francisco
          lng={-122.4194} // Longitude for San Francisco
          text="Baban"
        />
      </GoogleMapReact>
    </div>
  );
};

export default LocationScreen;
