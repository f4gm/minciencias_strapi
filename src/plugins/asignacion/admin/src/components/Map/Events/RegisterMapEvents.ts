import { Map } from "leaflet";

import GeomanEvents from "./Geoman/GeomanEvents";

const RegisterMapEvents = (map: Map) => {
  GeomanEvents(map);
};

export default RegisterMapEvents;
