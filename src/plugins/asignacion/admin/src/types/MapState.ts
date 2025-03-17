import { Map } from "leaflet";

export interface MapState {
  map: Map,
  setMap: (map: Map) => void;
}