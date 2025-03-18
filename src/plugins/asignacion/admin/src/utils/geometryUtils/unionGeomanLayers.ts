import { Map } from "leaflet";
import { featureCollection, union } from "@turf/turf";

export const unionGeomanLayers = (map: Map) => {
  const geomanLayers = map.pm.getGeomanLayers()
  const features = [];


  if (geomanLayers.length > 1) {
    for (let layer of geomanLayers) {
      map.removeLayer(layer);
      features.push(layer.toGeoJSON());
    }
    return union(featureCollection(features));
  } else if (geomanLayers.length == 1) {
    const geomanLayer = geomanLayers[0];
    const feature = geomanLayer.toGeoJSON();
    map.removeLayer(geomanLayer);
    return feature;
  } else {
    return undefined;
  }
};
