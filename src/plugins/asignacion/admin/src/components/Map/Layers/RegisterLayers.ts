import { Map } from "leaflet";

import Lands from "./Lands/Lands";
import Tiles from "./Tiles/Tiles";

const RegisterLayers = async (map: Map) => {
  await Lands(map);
  await Tiles(map);
}

export default RegisterLayers;