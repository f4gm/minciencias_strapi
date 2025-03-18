import { Button } from "@strapi/design-system";

import { geoJSON } from "leaflet";

import { useLandEdit } from "../../store/useLandEdit";
import { useMap } from "../../store/useMap";

import { unionGeomanLayers } from "../../utils/geometryUtils/unionGeomanLayers";
import { selectFeatures } from "../../utils/geometryUtils/selectFeatures";

import { LandhighlightFeatureStyle } from "../Map/Layers/Lands/Lands";

const EndSelection = () => {
  const { map, lands } = useMap((state) => state);
  const { activeEdit, deactive } = useLandEdit((state) => state);

  const clickHandler = () => {
    deactive();

    const landsGeoJSON = lands.geojson;
    const areaGeoJSON = unionGeomanLayers(map);

    const selectedLands = selectFeatures(landsGeoJSON, areaGeoJSON);

    const selectedLandsLayer = geoJSON(selectedLands, {
      style: LandhighlightFeatureStyle,
    });

    console.log(selectedLands);

    map.addLayer(selectedLandsLayer);
  };

  return (
    <Button onClick={clickHandler} disabled={!activeEdit}>
      End selection
    </Button>
  );
};

export default EndSelection;
