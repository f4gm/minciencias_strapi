import { create } from "zustand";

import { Feature, FeatureCollection, Polygon } from "geojson";

import { Layer, geoJSON } from "leaflet";

import { featureCollection, union } from "@turf/turf";

import { useMap } from "./useMap";

import { LandHighlightFeatureStyle } from "../components/Map/Layers/Lands/Lands";
import { featureInCollection } from "../utils/geometryUtils/featureInCollection";

interface State {
  geojson: FeatureCollection<Polygon>;
  layer: Layer;
  updateSelection: (
    geojson: FeatureCollection<Polygon>,
    replace: boolean
  ) => void;
  selectFeature: (feature: Feature<Polygon>) => void;
  clearSelection: () => void;
}

export const useLandSelection = create<State>((set, get) => ({
  geojson: undefined,
  layer: undefined,
  updateSelection: (geojson, replace) => {
    const { layer: oldLayer, geojson: oldGeojson } = get();

    if (JSON.stringify(geojson) != JSON.stringify(oldGeojson)) {
      const { map } = useMap.getState();
      try {
        map.removeLayer(oldLayer);
      } catch (error) {
        console.warn("Cannot remove old layer.", error);
      }

      if (replace) {
        const layer = geoJSON(geojson, {
          style: LandHighlightFeatureStyle,
          pmIgnore: true,
        });
        map.addLayer(layer);
        set({ geojson: geojson, layer: layer });
      } else {
        const features = [...geojson.features, ...oldGeojson.features];
        const newGeojson = featureCollection(features);
        const layer = geoJSON(newGeojson, {
          style: LandHighlightFeatureStyle,
          pmIgnore: true,
        });
        map.addLayer(layer);
        set({ geojson: newGeojson, layer: layer });
      }
    }
  },
  selectFeature: (feature) => {
    const { layer: oldLayer, geojson: oldGeojson } = get();
    const { map } = useMap.getState();

    console.log(oldGeojson)

    if (oldGeojson) {
      if (!featureInCollection(oldGeojson, feature)) {
        const newGeojson = structuredClone(oldGeojson);
        newGeojson.features.push(feature);

        const newLayer = geoJSON(newGeojson, {
          style: LandHighlightFeatureStyle,
          pmIgnore: true,
        });
        map.removeLayer(oldLayer);
        map.addLayer(newLayer);
        set({ layer: newLayer, geojson: newGeojson });
      }
    } else {
      const newGeojson = featureCollection([feature]);
      const newLayer = geoJSON(newGeojson, {
        style: LandHighlightFeatureStyle,
        pmIgnore: true,
      });
      map.addLayer(newLayer);
      set({ layer: newLayer, geojson: newGeojson });
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
