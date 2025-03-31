import { Feature, FeatureCollection, Polygon } from "geojson";
import { Map } from "leaflet";
import { featureCollection, union } from "@turf/turf";

export const getGeomanMask = (
  map: Map
): FeatureCollection<Polygon> | undefined => {
  const geomanFeatureLayers = map.pm.getGeomanLayers();
  const features: Feature<Polygon>[] = [];

  // Remove all Geoman layers and convert it into GeoJSON.
  for (let featureLayer of geomanFeatureLayers) {
    map.removeLayer(featureLayer);
    const feature = featureLayer.toGeoJSON();
    if (feature.type === "Feature" && feature.geometry.type === "Polygon") {
      features.push(feature as Feature<Polygon>);
    }
  }

  if (geomanFeatureLayers.length == 1) {
    // Single feature, return as FeatureCollection
    const collection = featureCollection(features);
    return collection;
  } else if (geomanFeatureLayers.length > 1) {
    // Multiple features, then return mask
    const collection = featureCollection(features);
    const unionGeoJSON = union(
      collection
    ) as unknown as FeatureCollection<Polygon>;
    return unionGeoJSON;
  } else {
    // Empty, undefined
    return undefined;
  }
};
