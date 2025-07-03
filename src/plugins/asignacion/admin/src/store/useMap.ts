import { create } from "zustand";
import { MapState } from "../types/MapState";

export const useMap = create<MapState>((set, get) => ({
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
  clearLands: () => {
    const { map, lands } = get();

    if (map && lands.geojson && lands.layer) {
      map.removeLayer(lands.layer);
      set({
        lands: {
          geojson: undefined,
          layer: undefined,
        },
      });
    }
  },
}));
