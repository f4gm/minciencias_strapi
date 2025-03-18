import { Feature, FeatureCollection } from "@types/geojson";
import { booleanIntersects, featureCollection, featureEach } from "@turf/turf";

export const selectFeatures = (geojson: FeatureCollection, mask: Feature) => {
  const list = [];
  featureEach(geojson, (feature, index) => {
    let copiedFeature = structuredClone(feature);
    if (booleanIntersects(copiedFeature, mask)) {
      list.push(copiedFeature);
    }
  });
  if (list.length != 1) {
    return featureCollection(list);
  } else {
    return undefined;
  }
};
