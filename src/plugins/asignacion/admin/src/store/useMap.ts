import { create } from "zustand";
import { MapState } from "../types/MapState";

export const useMap = create<MapState>((set) => ({
  map: undefined,
  lands: {
    geojson: undefined,
    layer: undefined,
  },
  setMap: (map) => {
    set({ map: map });
  },
  setLands: (geojson, layer) => {
    set({ lands: { geojson: geojson, layer: layer } });
  },
}));
