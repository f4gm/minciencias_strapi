/*
 *
 * HomePage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';

// Map
import { InitializeMap } from '../../components/Map/InitializeMap';

const HomePage = () => {
  const mapContainer = React.useRef(null);
  const map = React.useRef(null);

  React.useEffect(() => {
    if (map.current) return;
    
    const mountMap = async () => {
      map.current = await InitializeMap(mapContainer.current);
    }

    try {
      mountMap();
    } catch(error) {
      console.error(error);
    }
  }, []);

  return (
    <div
      ref={mapContainer}
      style={{
        height: "100dvh",
        width: "100%"
      }}
    >
    </div>
  );
};

export default HomePage;
