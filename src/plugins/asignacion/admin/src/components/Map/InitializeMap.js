import { map, tileLayer } from "leaflet";

export const InitializeMap = async (container) => {
  const map_ = map(container, {
    center: [4.0998, -72.9089],
    zoom: 6,
  });
  
  tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map_);

  return map_;
}