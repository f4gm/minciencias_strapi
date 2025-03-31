import { Button } from "@strapi/design-system";

import { useLandEdit } from "../../store/useLandEdit";
import { useLandSelection } from "../../store/useLandSelection";
import { useMap } from "../../store/useMap";

import { getGeomanMask } from "../../utils/geometryUtils/getGeomanMask";
import { selectFeatures } from "../../utils/geometryUtils/selectFeatures";

const EndSelection = () => {
  const { map, lands } = useMap((state) => state);
  const { activeEdit, deactive } = useLandEdit((state) => state);
  const { updateSelection } = useLandSelection((state) => state);

  const clickHandler = () => {
    deactive();

    const landsGeoJSON = lands.geojson;
    const areaGeoJSON = getGeomanMask(map);

    const selectedLands = selectFeatures(landsGeoJSON, areaGeoJSON);

    updateSelection(selectedLands);

    console.log(selectedLands);
  };

  return (
    <Button onClick={clickHandler} disabled={!activeEdit}>
      Seleccionar
    </Button>
  );
};

export default EndSelection;
