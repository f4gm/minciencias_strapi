import { Map } from "leaflet";

import { useLandEdit } from "../../../store/useLandEdit";

const GeomanEvents = (map: Map) => {
  DrawStart(map);
  Edit(map);
  Drag(map);
  Remove(map);
  // DrawEnd(map);
  // DrawCreate(map);
};

export default GeomanEvents;

const DrawStart = (map: Map) => {
  map.on("pm:drawstart", (e) => {
    const { activeEdit, active } = useLandEdit.getState();

    console.log("DrawStart");

    if (!activeEdit) {
      active();
    }
  });
};

const Edit = (map: Map) => {
  map.on("pm:edit", (e) => {
    const { activeEdit, active } = useLandEdit.getState();

    console.log("Edit");

    if (!activeEdit) {
      active();
    }
  });
};

const Drag = (map: Map) => {
  map.on("pm:drag", (e) => {
    const { activeEdit, active } = useLandEdit.getState();

    console.log("Drag");

    if (!activeEdit) {
      active();
    }
  });
};

const Remove = (map: Map) => {
  map.on("pm:remove", (e) => {
    const { activeEdit, active } = useLandEdit.getState();

    console.log("Removed");

    if (!activeEdit) {
      active();
    }
  });
};

const DrawEnd = (map: Map) => {
  map.on("pm:drawend", (e) => {
    console.log(e);
  });
};

const DrawCreate = (map: Map) => {
  map.on("pm:create", (e) => {
    console.log(e.layer);
    console.log(e.shape);
  });
};
