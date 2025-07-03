import axios from "axios";

import type { FeatureCollection, Polygon } from "geojson";

const AssignLands = async (geojson: FeatureCollection<Polygon>, recognizer: number): Promise<undefined | null> => {
  try {
    await axios.post("/asignacion/assign-lands", {
      geojson: geojson,
      recognizer: recognizer,
    });
    return;
  } catch(error) {
    console.error(error);
    return null;
  }
}

export default AssignLands;