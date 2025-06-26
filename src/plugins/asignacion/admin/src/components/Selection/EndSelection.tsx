import { BiSolidPencil } from "react-icons/bi";

import Button from "../UI/Button/Button";

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
  };

  return (
    <Button>
      <BiSolidPencil style={{fontSize: "large"}} />
      Asignar
    </Button>
  );
};

export default EndSelection;
