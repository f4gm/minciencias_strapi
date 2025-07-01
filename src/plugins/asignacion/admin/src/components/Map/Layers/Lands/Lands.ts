import { geoJSON, Map, GeoJSONOptions } from "leaflet";
import { toWGS84 } from "reproject-crs-geojson";

import { useMap } from "../../../../store/useMap";

import ReadLands from "../../../../services/Lands/ReadLands";

// @ts-ignore
import RegisterLandsEvents from "./Events/RegisterLandsEvents";

const Lands = async (map: Map) => {
  const { setLands } = useMap.getState();
  const epsg_9377 =
    "+proj=tmerc +lat_0=4.0 +lon_0=-73.0 +k=0.9992 +x_0=5000000 +y_0=2000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";

  try {
    const landsResponse = await ReadLands();

    if (landsResponse) {
      const lands = {
        "type": "FeatureCollection",
        "features": landsResponse.data.map((item) => {
          return item.feature
        })
      }
      const geojson = toWGS84(lands, epsg_9377);
      const layer = geoJSON(geojson, LandsConfig);

      RegisterLandsEvents(layer);

      setLands(geojson, layer);

      layer.addTo(map);

      setTimeout(() => {
        map.flyToBounds(layer.getBounds());
      }, 1000);

      return layer;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default Lands;

const LandDefaultStyle = {
  fillColor: "#E14434",
  fillOpacity: 1,
  stroke: true,
  weight: 0.5,
  color: "#722323",
  opacity: 1.0,
};

export const LandHighlightFeatureStyle = {
  fillColor: "#FCDE70",
  fillOpacity: 1,
  stroke: true,
  weight: 0.5,
  color: "#EB8317",
  opacity: 1.0,
};

export const LandsConfig: GeoJSONOptions = {
  style: (feature) => LandDefaultStyle,
  pmIgnore: true,
  // onEachFeature: (feature, layer) => {
  //   layer.on({
  //     mouseover: highlightFeature,
  //     mouseout: resetHighlight
  //   })
  // }
};
