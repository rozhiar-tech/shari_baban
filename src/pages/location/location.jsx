import React from "react";
import "./style.css";
// eslint-disable-next-line
import GoogleMapReact from "google-map-react";
import logo from "../../assets/logo2.png";

const LocationScreen = () => {
  const center = {
    lat: 37.7749, // Latitude for San Francisco
    lng: -122.4194, // Longitude for San Francisco
  };

  // Define custom marker component
  const Marker = ({ text }) => (
    <div
      style={{
        backgroundColor: "#028e73",
        color: "white",
        borderRadius: "30%",
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
    <div
      style={{
        height: "400px",
        width: "80%",
        margin: "0 auto", // Center the map container horizontally
        border: "1px solid #ccc", // Add border
        borderRadius: "12px", // Add border radius for a rounded look
        marginTop: "40px",
        position: "relative", // Make the container relative for absolute positioning of images
      }}
    >
      {/* Apply media query */}
      <style>
        {`
          @media screen and (max-width: 768px) {
            img {
              height: 150px;
              width: 150px;
            }
          }
        `}
      </style>

      <img
        src={logo}
        alt="logo"
        style={{
          position: "absolute",
          height: "200px",
          width: "200px",
          right: "0",
          transform: "rotate(45deg)",
          overflow: "hidden",
        }}
      />
      <img
        src={logo}
        alt="logo"
        style={{
          position: "absolute",
          height: "200px",
          width: "200px",
          left: "0",
          transform: "rotate(-45deg)",
          overflow: "hidden",
        }}
      />

      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyDKWkllqPaeJYbbEewb3fKd-20jsTe648Q",
        }}
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
