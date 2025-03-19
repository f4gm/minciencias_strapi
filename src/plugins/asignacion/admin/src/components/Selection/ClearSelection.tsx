import { Button } from "@strapi/design-system";

import { useLandSelection } from "../../store/useLandSelection";

const ClearSelection = () => {
  const { geojson, clearSelection } = useLandSelection((state) => state);

  const disabled = geojson == undefined;

  return <Button variant="danger" disabled={disabled} onClick={clearSelection}>Borrar selección</Button>;
};

export default ClearSelection;
