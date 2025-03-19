import { create } from "zustand";

import { FeatureCollection } from "geojson";

import { Layer, geoJSON } from "leaflet";

import { useMap } from "./useMap";

import { LandHighlightFeatureStyle } from "../components/Map/Layers/Lands/Lands";

interface State {
  geojson: FeatureCollection;
  layer: Layer;
  updateSelection: (geojson: FeatureCollection) => void;
  clearSelection: () => void;
}

export const useLandSelection = create<State>((set, get) => ({
  geojson: undefined,
  layer: undefined,
  updateSelection: (geojson) => {
    const { layer: oldLayer, geojson: oldGeojson } = get();

    if (geojson != oldGeojson) {
      const { map } = useMap.getState();

      try {
        map.removeLayer(oldLayer);
      } catch (error) {
        console.warn("Cannot remove old layer.", error);
      }

      const layer = geoJSON(geojson, {
        style: LandHighlightFeatureStyle,
        pmIgnore: true,
      });

      map.addLayer(layer);

      set({ geojson: geojson, layer: layer });
    }
  },
  clearSelection: () => {
    try {
      const { map } = useMap.getState();
      const { layer } = get();
      map.removeLayer(layer);
      set({ geojson: undefined, layer: undefined });
    } catch (error) {
      console.warn("Cannot remove old layer.", error);
    }
  },
}));
