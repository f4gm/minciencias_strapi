import { FeatureCollection, Feature } from "geojson"

export const featureInCollection = (featureCollection: FeatureCollection, search: Feature) => {
  let response = false;
  for (let feature of featureCollection.features) {
    if (JSON.stringify(feature) == JSON.stringify(search)) {
      response = true;
      break;
    }
  }
  return response;
}