import { create } from "zustand";

import { FeatureCollection, Polygon } from "geojson";

import { Layer, geoJSON } from "leaflet";

import { featureCollection } from "@turf/turf";

import { useMap } from "./useMap";
import { useControlKeyStore } from "./useControlKey";

import { LandHighlightFeatureStyle } from "../components/Map/Layers/Lands/Lands";

interface State {
  geojson: FeatureCollection<Polygon>;
  layer: Layer;
  updateSelection: (geojson: FeatureCollection<Polygon>) => void;
  clearSelection: () => void;
}

export const useLandSelection = create<State>((set, get) => ({
  geojson: undefined,
  layer: undefined,
  updateSelection: (geojson) => {
    const { layer: oldLayer, geojson: oldGeojson } = get();
    const { isControlPressed } = useControlKeyStore.getState();

    if (JSON.stringify(geojson) != JSON.stringify(oldGeojson)) {
      const { map } = useMap.getState();
      try {
        map.removeLayer(oldLayer);
      } catch (error) {
        console.warn("Cannot remove old layer.", error);
      }

      if (isControlPressed) {
        const features = oldGeojson
          ? [...geojson.features, ...oldGeojson.features]
          : [...geojson.features];
        const newGeojson = featureCollection(features);
        const layer = geoJSON(newGeojson, {
          style: LandHighlightFeatureStyle,
          pmIgnore: true,
        });
        map.addLayer(layer);
        set({ geojson: newGeojson, layer: layer });
      } else {
        const layer = geoJSON(geojson, {
          style: LandHighlightFeatureStyle,
          pmIgnore: true,
        });
        map.addLayer(layer);
        set({ geojson: geojson, layer: layer });
      }
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
