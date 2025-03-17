import { Button } from "@strapi/design-system";

import { geoJson } from "leaflet";
import { union, featureCollection } from "@turf/turf";

import { useLandEdit } from "../../store/useLandEdit";
import { useMap } from "../../store/useMap";

const EndSelection = () => {
  const { map } = useMap((state) => state);
  const { activeEdit, deactive } = useLandEdit((state) => state);

  const clickHandler = () => {
    deactive();

    const layers = map.pm.getGeomanLayers();

    const features = [];
    let area;

    if (layers.length != 0) {
      for (let layer of layers) {
        map.removeLayer(layer);
        features.push(layer.toGeoJSON());
      }

      if (features.length == 1) {
        area = geoJson(featureCollection(features));
      } else {
        area = geoJson(union(featureCollection(features)));
      }

      area.addTo(map);

      console.log(area);
    }

    console.log(layers);
  };

  return (
    <Button onClick={clickHandler} disabled={!activeEdit}>
      End selection
    </Button>
  );
};

export default EndSelection;
