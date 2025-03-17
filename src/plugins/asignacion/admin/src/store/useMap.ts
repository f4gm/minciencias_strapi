import { create } from "zustand";
import { MapState } from "../types/MapState";

export const useMap = create<MapState>((set) => ({
  map: undefined,
  setMap: (map) => {
    set({ map: map });
  },
}));
