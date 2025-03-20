import { Layer } from "leaflet";

import { useLandSelection } from "../../../../../store/useLandSelection";

const RegisterLandsEvents = (lands: Layer) => {
  Click(lands);
}

export default RegisterLandsEvents;

const Click = (lands: Layer) => {
  const { selectFeature } = useLandSelection.getState();
  lands.on("click", event => {
    const feature = event.propagatedFrom.feature;
    selectFeature(feature);
  })
}