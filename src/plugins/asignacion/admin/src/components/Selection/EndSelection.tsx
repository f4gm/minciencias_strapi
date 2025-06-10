import { Button } from "@strapi/design-system";

import { useLandEdit } from "../../store/useLandEdit";
import { useLandSelection } from "../../store/useLandSelection";
import { useMap } from "../../store/useMap";

import { getGeomanMask } from "../../utils/geometryUtils/getGeomanMask";
import { selectFeatures } from "../../utils/geometryUtils/selectFeatures";

const EndSelection = () => {
  const { map, lands } = useMap((state) => state);
  const { geojson } = useLandSelection((state) => state);

  const clickHandler = () => {
    console.log(geojson);
  }

  return (
    <Button
      onClick={clickHandler}
      disabled={!geojson || geojson.features.length == 0}
    >
      Seleccionar
    </Button>
  );
};

export default EndSelection;
