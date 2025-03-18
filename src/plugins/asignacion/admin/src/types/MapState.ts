import { Map, Layer } from "leaflet";
import { FeatureCollection } from "@types/geojson";

export interface MapState {
  map: Map;
  setMap: (map: Map) => void;
  lands: {
    geojson: FeatureCollection;
    layer: Layer;
  };
  setLands: (geojson: FeatureCollection, layer: Layer) => void;
}
