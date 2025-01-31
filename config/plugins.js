module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      register: {
        allowedFields: [
          "tipo_documento",
          "numero_documento",
          "primer_nombre",
          "segundo_nombre",
          "primer_apellido",
          "segundo_apellido",
          "sexo",
          "autoreconocimientoetnico",
          "autoreconocimientocampesino",
          "razon_social",
          "tipo_interesado"
        ]
      }
    }
  }
});
