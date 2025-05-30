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

const terreno = {
  api: "cr-terreno",
  fields: {
    id: "id",
    geom: "geometria",
  },
};

const predio = {
  api: "cr-predio",
  fields: {
    id: "id",
    npn: "numero_predial_nacional",
  },
};

module.exports = ({ strapi }) => ({
  async index(ctx) {
    const result = await strapi.entityService.findMany(
      `api::${baunit.api}.${baunit.api}`,
      {
        populate: {
          [baunit.fields.terreno]: true,
          [baunit.fields.predio]: true,
        },
      }
    );

    const parsed = parseGeoJSON(result);

    return parsed;
  },
});

const parseGeoJSON = (data) => {
  const geojson = {
    type: "FeatureCollection",
    features: data.map((item) => {
      const geometryBuffer = Buffer.from(
        item[baunit.fields.terreno][terreno.fields.geom],
        "hex"
      );

      const geometry = wkx.Geometry.parse(geometryBuffer).toGeoJSON();

      return {
        type: "Feature",
        properties: {
          terreno: item[baunit.fields.terreno][terreno.fields.id],
          predio: item[baunit.fields.predio][predio.fields.id],
          npn: item[baunit.fields.predio][predio.fields.npn],
        },
        geometry: geometry,
      };
    }),
  };

  return geojson;
};
