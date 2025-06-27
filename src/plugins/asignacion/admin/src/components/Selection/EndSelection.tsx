import { BiSolidPencil } from "react-icons/bi";

import Button from "../UI/Button/Button";

import { useLandEdit } from "../../store/useLandEdit";
import { useLandSelection } from "../../store/useLandSelection";
import { useMap } from "../../store/useMap";

import { getGeomanMask } from "../../utils/geometryUtils/getGeomanMask";
import { selectFeatures } from "../../utils/geometryUtils/selectFeatures";

import EndSelectionModal from "./EndSelectionModal";

const EndSelection = () => {
  const { map, lands } = useMap((state) => state);
  const { geojson } = useLandSelection((state) => state);

  const modalId = "modal-selection"

  const clickHandler = () => {
    (document.getElementById(modalId) as HTMLDialogElement).showModal();
  };

  return (
    <>
      <Button onClick={clickHandler} disabled={!geojson}>
        <BiSolidPencil style={{ fontSize: "large" }} />
        Asignar
      </Button>
      <EndSelectionModal modalId={modalId} />
    </>
  );
};

export default EndSelection;
