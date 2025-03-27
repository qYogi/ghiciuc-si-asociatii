"use client";
import {
  APIProvider,
  Map,
  Marker,
  MapCameraChangedEvent,
} from "@vis.gl/react-google-maps";
import { useState } from "react";

export const Maps = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    throw new Error(
      "NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is not defined in the environment variables.",
    );
  }

  const [camera, setCamera] = useState({
    center: { lat: 47.1602197, lng: 27.5921758 },
    zoom: 18,
  });

  const handleCameraChange = (ev: MapCameraChangedEvent) => {
    // Update the state to reflect new center and zoom
    setCamera({
      center: ev.detail.center,
      zoom: ev.detail.zoom,
    });
  };

  return (
    <APIProvider apiKey={apiKey}>
      <div className="h-[50vh] w-full">
        {/* Button to demonstrate programmatically increasing the zoom */}
        <Map
          center={camera.center}
          zoom={camera.zoom}
          scaleControl={true}
          zoomControl={true}
          minZoom={10}
          maxZoom={20}
          onCameraChanged={handleCameraChange}
        >
          <Marker position={{ lat: 47.160249, lng: 27.59233 }} />
        </Map>
      </div>
    </APIProvider>
  );
};
