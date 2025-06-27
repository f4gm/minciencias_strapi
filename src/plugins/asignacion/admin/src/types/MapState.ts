import { Map, Layer } from "leaflet";
import type { FeatureCollection } from "geojson";

export interface MapState {
  map: Map;
  setMap: (map: Map) => void;
  lands: {
    geojson: FeatureCollection;
    layer: Layer;
  };
  setLands: (geojson: FeatureCollection, layer: Layer) => void;
}
