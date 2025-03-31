import { Layer } from "leaflet";
import { Feature, Polygon } from "geojson";

import { featureCollection } from "@turf/turf";

import { useLandSelection } from "../../../../../store/useLandSelection";

const RegisterLandsEvents = (lands: Layer) => {
  Click(lands);
};

export default RegisterLandsEvents;

const Click = (lands: Layer) => {
  const { updateSelection } = useLandSelection.getState();
  lands.on("click", (event) => {
    const feature = event.propagatedFrom.feature as Feature<Polygon>;

    const collection = featureCollection([feature]);
    updateSelection(collection);
  });
};
