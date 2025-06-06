import { map } from "leaflet";
import "leaflet/dist/leaflet.css";

import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
import "@maplibre/maplibre-gl-leaflet/leaflet-maplibre-gl";

import { mapConfig } from "./config.map";

import RegisterLayers from "./Layers/RegisterLayers";
import RegisterMapEvents from "./Events/RegisterMapEvents";

export const InitializeMap = async (container) => {
  const map_ = map(container, mapConfig);

  map_.pm.addControls({
    position: "topleft",
    drawMarker: false,
    drawCircleMarker: false,
    drawCircle: false,
    drawPolyline: false,
    drawText: false,
    cutPolygon: false,
    rotateMode: false,
    dragMode: false,
    editMode: false,
    removalMode: false,
  });

  map_.pm.setPathOptions({
    fillColor: "#FCDE70",
    fillOpacity: 0.4,
    stroke: true,
    weight: 0.5,
    color: "#EB8317",
    opacity: 0.4,
  });

  await RegisterLayers(map_);
  RegisterMapEvents(map_);

  const {
    mapPane,
    markerPane,
    overlayPane,
    popupPane,
    shadowPane,
    tilePane,
    tooltipPane,
  } = map_.getPanes();

  mapPane.style.zIndex = "auto";
  tilePane.style.zIndex = "-800";
  overlayPane.style.zIndex = "-600";
  shadowPane.style.zIndex = "-500";
  markerPane.style.zIndex = "-400";
  tooltipPane.style.zIndex = "-300";
  popupPane.style.zIndex = "-200";

  return map_;
};
