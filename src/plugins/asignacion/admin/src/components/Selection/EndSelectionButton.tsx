import { BiSolidPencil } from "react-icons/bi";

import Button from "../UI/Button/Button";

import { useLandSelection } from "../../store/useLandSelection";

import EndSelectionModal from "./EndSelectionModal";

const EndSelectionButton = () => {
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

export default EndSelectionButton;
