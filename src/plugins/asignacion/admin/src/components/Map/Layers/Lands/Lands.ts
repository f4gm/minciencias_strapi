import { geoJSON, Map, GeoJSONOptions, marker, divIcon } from "leaflet";
import { toWGS84 } from "reproject-crs-geojson";

import { centroid } from "@turf/turf";

import { useMap } from "../../../../store/useMap";

import ReadLands from "../../../../services/Lands/ReadLands";

// @ts-ignore
import RegisterLandsEvents from "./Events/RegisterLandsEvents";
import { LandsPropertiesAPI } from "../../../../types/api";

import "./Lands.css";

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
      const layer = geoJSON(geojson, LandsConfig(map));

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

const LandRecognizerStyle = {
  fillColor: "#0B1D51",
  fillOpacity: 1,
  stroke: true,
  weight: 0.5,
  color: "#555879",
  opacity: 1.0,
}

export const LandHighlightFeatureStyle = {
  fillColor: "#FCDE70",
  fillOpacity: 1,
  stroke: true,
  weight: 0.5,
  color: "#EB8317",
  opacity: 1.0,
};

export const LandsConfig = (map: Map): GeoJSONOptions => ({
  style: (feature) => {
    const properties = feature.properties as LandsPropertiesAPI;

    if (properties.recognizer) {
      return LandRecognizerStyle;
    } else {
      return LandDefaultStyle;
    }
  },
  pmIgnore: true,
  onEachFeature: (feature, layer) => {
    const center = centroid(feature);
    const [lng, lat] = center.geometry.coordinates;

    const properties = feature.properties as LandsPropertiesAPI;

    const label = marker([lat, lng], {
      icon: divIcon({
        className: "polygon-label",
        html: `<div>${properties.recognizer ? properties.recognizer : ""}</div>`
      }),
      interactive: false
    });
    label.addTo(map)
  },
});
