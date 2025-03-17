import { tileLayer, Map, TileLayerOptions } from "leaflet";

const Tiles = async (map: Map) => {
  const url = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";

  const layer = tileLayer(url, TilesConfig);

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