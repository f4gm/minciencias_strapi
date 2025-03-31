import { useEffect, useRef } from "react";

import { useMap } from "../../store/useMap";

import { InitializeMap } from "./InitializeMap";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const { setMap } = useMap.getState();

  useEffect(() => {
    if (map.current) return;

    const mountMap = async () => {
      map.current = await InitializeMap(mapContainer.current);
      setMap(map.current);
    };

    try {
      mountMap();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div
      ref={mapContainer}
      style={{
        height: "100dvh",
        width: "100%",
      }}
    ></div>
  );
};

export default Map;
