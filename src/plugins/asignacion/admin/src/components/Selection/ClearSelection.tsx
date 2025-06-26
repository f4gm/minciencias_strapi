import { BiSolidTrash } from "react-icons/bi";

import Button from "../UI/Button/Button";

import { useLandSelection } from "../../store/useLandSelection";

const ClearSelection = () => {
  const { geojson, clearSelection } = useLandSelection((state) => state);

  const disabled = geojson == undefined;

  return (
    <Button disabled={disabled} onClick={clearSelection}>
      <BiSolidTrash style={{fontSize: "large"}} />
      Borrar selección
    </Button>
  );
};

export default ClearSelection;
