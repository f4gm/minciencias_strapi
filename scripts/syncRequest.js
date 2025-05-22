const fs = require("fs");
const path = require("path");

const { GetCurrentTime } = require("../utils/dateUtils");

const inputGroup = "formulario";
const inputName = "entrada";

const inputPath = path.join(
  __dirname,
  `../src/components/${inputGroup}/${inputName}.json`
);

const requestPath = path.join(
  __dirname,
  `../src/api/solicitud/content-types/solicitud/schema.json`
);

const requestBase = {
  kind: "collectionType",
  collectionName: "solicitudes",
  info: {
    singularName: "solicitud",
    pluralName: "solicitudes",
    displayName: "Solicitud",
  },
  options: {
    draftAndPublish: false,
  },
  pluginOptions: {},
  attributes: {
    cr_interesado: {
      type: "relation",
      relation: "oneToOne",
      target: "plugin::users-permissions.user",
    },
    // cr_lindero: {
    //   type: "relation",
    //   relation: "oneToOne",
    //   target: "api::cr-lindero.cr-lindero"
    // },
    // cr_terreno: {
    //   type: "relation",
    //   relation: "oneToOne",
    //   target: "api::cr-terreno.cr-terreno"
    // },
    cr_predio: {
      type: "relation",
      relation: "oneToOne",
      target: "api::cr-predio.cr-predio",
    },
    // cr_unidadconstruccion: {
    //   type: "relation",
    //   relation: "oneToOne",
    //   target: "api::cr-unidadconstruccion.cr-unidadconstruccion"
    // },
    valor: {
      type: "text",
      required: true,
    },
    paquete: {
      type: "relation",
      relation: "oneToOne",
      target: "api::paquete.paquete",
    },
    estado: {
      type: "enumeration",
      enum: [
        "Pendiente",
        "Revisado con errores",
        "Correcto",
        "Se requiere más información",
      ],
      default: "Pendiente",
    },
    retroalimentacion: {
      type: "richtext",
    },
  },
};

const syncRequest = () => {
  try {
    const inputSchema = JSON.parse(fs.readFileSync(inputPath, "utf-8"));

    requestBase.attributes = {
      ...requestBase.attributes,
      ...inputSchema.attributes,
    };

    fs.writeFileSync(requestPath, JSON.stringify(requestBase, null, 2));
    console.log(
      `${GetCurrentTime()} ✅ The 'solicitud' schema has been synchronized with 'entrada'`
    );
  } catch (error) {
    console.error("❌ Error al sincronizar esquemas:", error);
  }
};

syncRequest();
