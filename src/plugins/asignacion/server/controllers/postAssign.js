const yup = require("yup");

const property = {
  api: "cr-predio",
  fields: {
    id: "id",
    recognizer: "reconocedor",
  },
};

const identifier = yup
  .number()
  .integer()
  .min(0, "The 'id' must be a natural number.")
  .required("The 'id' is required.");

const featureSchema = yup.object({
  type: yup.string().oneOf(["Feature"]).required(),
  geometry: yup.object().required(),
  properties: yup
    .object({
      property: identifier,
    })
    .required(),
});

const geojsonSchema = yup.object({
  type: yup.string().oneOf(["FeatureCollection"]).required(),
  features: yup.array().of(featureSchema).required(),
});

module.exports = ({ strapi }) => ({
  async assign(ctx) {
    const { geojson, recognizer } = ctx.request.body;

    if (geojson && recognizer) {
      try {
        await geojsonSchema.validate(geojson);
        await identifier.validate(recognizer);

        // Safe zone
        const features = geojson.features;
        const propertiesIds = features.map((item) => item.properties.property);

        await Promise.all(
          propertiesIds.map(async (id) =>
            strapi.entityService.update(`api::${property.api}.${property.api}`, id, {
              data: {
                [property.fields.recognizer]: recognizer,
              },
            })
          )
        );
        return {
          data: null,
          error: false
        };
      } catch (error) {
        ctx.badRequest(error);
      }
    } else {
      ctx.badRequest(
        "The 'geojson' and 'recognizer' parameters must be defined."
      );
    }
  },
});
