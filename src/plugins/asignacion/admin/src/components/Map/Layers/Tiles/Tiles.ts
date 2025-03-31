import { tileLayer, Map, TileLayerOptions, maplibreGL } from "leaflet";

const Tiles = async (map: Map) => {
  // const url = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";

  // const layer = tileLayer(url, TilesConfig);

  const url = "https://tiles.openfreemap.org/styles/liberty";
  const layer = maplibreGL({
    style: url,
  });

  layer.addTo(map);

  return layer;
}

export default Tiles;

const TilesConfig: TileLayerOptions = {
  id: "minciencias-layer-tiles",
  maxZoom: 20,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}