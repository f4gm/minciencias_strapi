import { Map } from "leaflet";
import { FeatureCollection, Polygon } from "geojson";

import { useMap } from "../../../../store/useMap";
import { useLandSelection } from "../../../../store/useLandSelection";

import { getGeomanMask } from "../../../../utils/geometryUtils/getGeomanMask";
import { selectFeatures } from "../../../../utils/geometryUtils/selectFeatures";

export const Create = (map: Map) => {
  map.on("pm:create", (e) => {
    const { lands } = useMap.getState();
    const { updateSelection } = useLandSelection.getState();

    const landsGeoJSON = lands.geojson;
    const geomanGeoJSON = getGeomanMask(map);

    if (geomanGeoJSON) {
      const selectedFeatures = selectFeatures(
        landsGeoJSON,
        geomanGeoJSON.features[0]
      ) as FeatureCollection<Polygon>;
      if (selectedFeatures) {
        updateSelection(selectedFeatures);
      }
    }
  });
};
