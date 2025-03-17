import { geoJSON, Map, GeoJSONOptions } from "leaflet";
import { toWGS84 } from "reproject-crs-geojson";

// @ts-ignore
import dummy from "../../../../assets/predios_origen.json" assert { type: "json" };

const Lands = async (map: Map) => {
  const epsg_9377 = "+proj=tmerc +lat_0=4.0 +lon_0=-73.0 +k=0.9992 +x_0=5000000 +y_0=2000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";
  
  const layer = geoJSON(toWGS84(dummy, epsg_9377), LandsConfig);

  layer.addTo(map);

  return layer;
}

export default Lands;

const LandDefaultStyle = {
  color: "#004386",
  stroke: true,
  weight: 1,
  opacity: 1.0,
  fillColor: "#91f6ff",
  fillOpacity: 0.75,
}

export const LandhighlightFeatureStyle = {
  fillColor: "#ffff00",
  fillOpacity: 0.75,
  stroke: true,
  weight: 1,
  opacity: 1.0,
  color: "#7a7a00"
}

export const LandsConfig: GeoJSONOptions= {
  style: (feature) => LandDefaultStyle,
  pmIgnore: true
  // onEachFeature: (feature, layer) => {
  //   layer.on({
  //     mouseover: highlightFeature,
  //     mouseout: resetHighlight
  //   })
  // }
}