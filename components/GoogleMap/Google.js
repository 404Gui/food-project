"use client";

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export default function MapaGoogle() {
  const unesp = {
    lat: -22.6494127,
    lng: -50.4375146,
  };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
      <div
        style={{
          width: "100%",
          height: "350px",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <Map
          center={unesp}
          zoom={16}
          gestureHandling="greedy"
          disableDefaultUI={false}
          style={{ width: "100%", height: "100%" }}
        >
          <Marker position={unesp} />
        </Map>
      </div>
    </APIProvider>
  );
}
