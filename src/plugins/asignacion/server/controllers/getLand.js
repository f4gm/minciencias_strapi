"use strict";

const wkx = require("wkx");

const baunit = {
  api: "col-uebaunit",
  fields: {
    id: "id",
    terreno: "ue_cr_terreno",
    predio: "baunit",
  },
};

const land = {
  api: "cr-terreno",
  fields: {
    id: "id",
    geom: "geometria",
  },
};

const property = {
  api: "cr-predio",
  fields: {
    id: "id",
    npn: "numero_predial_nacional",
    recognizer: "reconocedor",
  },
};

module.exports = ({ strapi }) => ({
  async find(ctx) {
    const result = await strapi.entityService.findMany(
      `api::${baunit.api}.${baunit.api}`,
      {
        populate: {
          [baunit.fields.terreno]: {
            fields: [land.fields.id, land.fields.geom],
          },
          [baunit.fields.predio]: {
            fields: [property.fields.id, property.fields.npn],
            populate: [property.fields.recognizer],
          },
        },
      }
    );

    const parsed = parseGeoJSON(result);

    return {
      data: parsed,
    };
  },
});

const parseGeoJSON = (data) => {
  const parsed = data.map((item) => {
    const geometryBuffer = Buffer.from(
      item[baunit.fields.terreno][land.fields.geom],
      "hex"
    );

    const geometry = wkx.Geometry.parse(geometryBuffer).toGeoJSON();

    return {
      id: item[baunit.fields.id],
      land: item[baunit.fields.terreno][land.fields.id],
      property: item[baunit.fields.predio][property.fields.id],
      npn: item[baunit.fields.predio][property.fields.npn],
      recognizer: item[baunit.fields.predio][property.fields.recognizer]
        ? item[baunit.fields.predio][property.fields.recognizer]["id"]
        : null,
      feature: {
        type: "Feature",
        properties: {
          land: item[baunit.fields.terreno][land.fields.id],
          property: item[baunit.fields.predio][property.fields.id],
          npn: item[baunit.fields.predio][property.fields.npn],
          recognizer: item[baunit.fields.predio][property.fields.recognizer]
            ? item[baunit.fields.predio][property.fields.recognizer]["id"]
            : null,
        },
        geometry: geometry,
      },
    };
  });

  return parsed;
};
