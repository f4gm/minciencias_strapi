import { Feature, FeatureCollection, Geometry, Polygon } from "geojson";
import { booleanIntersects, featureCollection, featureEach } from "@turf/turf";

export const selectFeatures = (
  geojson: FeatureCollection | Feature,
  mask: Feature
): FeatureCollection | undefined => {
  const list = [];
  featureEach(geojson, (feature, index) => {
    let copiedFeature = structuredClone(feature);
    if (booleanIntersects(copiedFeature, mask)) {
      list.push(copiedFeature);
    }
  });
  if (list.length > 0) {
    return featureCollection(list);
  } else {
    return undefined;
  }
};
