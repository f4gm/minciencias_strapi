import type { Attribute, Schema } from '@strapi/strapi';

export interface FormularioEntrada extends Schema.Component {
  collectionName: 'components_formulario_entradas';
  info: {
    description: '';
    displayName: 'Entrada';
    icon: 'pencil';
  };
  attributes: {
    category: Attribute.Enumeration<
      ['fisica', 'juridica', 'economica', 'registro_actualizacion']
    >;
    collection: Attribute.Enumeration<
      [
        'no-definido',
        'col-areatipo',
        'col-areavalor',
        'col-baunitcomointeresado',
        'col-baunitfuente',
        'col-cclfuente',
        'col-documentotipo',
        'col-estadodisponibilidadtipo',
        'col-formatotipo',
        'col-fuenteadministrativatipo',
        'col-fuenteespacialtipo',
        'col-grupointeresadotipo',
        'col-interesadotipo',
        'col-interpolaciontipo',
        'col-masccl',
        'col-menosccl',
        'col-metodoproducciontipo',
        'col-puntoccl',
        'col-puntofuente',
        'col-puntotipo',
        'col-relacionsuperficietipo',
        'col-responsablefuente',
        'col-rrrfuente',
        'col-uebaunit',
        'col-uefuente',
        'col-unidadadministrativabasicatipo',
        'col-unidadfuente',
        'cr-agrupacioninteresado',
        'cr-anotacionregistro',
        'cr-autoreconocimientoetnicotipo',
        'cr-caracteristicasuc',
        'cr-condicionprediotipo',
        'cr-construccionplantatipo',
        'cr-datosmatriz',
        'cr-derecho',
        'cr-derechotipo',
        'cr-destinacioneconomicatipo',
        'cr-errsa',
        'cr-errsa-tipo-referencia',
        'cr-estadoanotaciontipo',
        'cr-estadofmitipo',
        'cr-estadotipo',
        'cr-estrucavalcarac',
        'cr-estrucavalinter',
        'cr-estrucmatrisegre',
        'cr-estrucpredmatrinpn',
        'cr-estrucpredorinpn',
        'cr-estructuraalertapredio',
        'cr-estructuraavaluo',
        'cr-estructuramatriculamatriz',
        'cr-estructuraprocedimientocr',
        'cr-fotoidentificaciontipo',
        'cr-fuenteadministrativa',
        'cr-fuenteespacial',
        'cr-hipoteca',
        'cr-hipotecaderecho',
        'cr-informalidad',
        'cr-informalidadtipo',
        'cr-interesado',
        'cr-lindero',
        'cr-mutaciontipo',
        'cr-predio',
        'cr-predio-copropiedad',
        'cr-predio-tramitecatastral',
        'cr-predioinformalidad',
        'cr-prediotipo',
        'cr-procedimientocatastralregistraltipo',
        'cr-publicidad',
        'cr-publicidadfuente',
        'cr-publicidadtipo',
        'cr-puntocontrol',
        'cr-puntocontroltipo',
        'cr-puntolindero',
        'cr-responsabilidad',
        'cr-responsabilidadtipo',
        'cr-restriccion',
        'cr-restricciontipo',
        'cr-sexotipo',
        'cr-terreno',
        'cr-tramitecatastral',
        'cr-unidadconstruccion',
        'cr-unidadconstrucciontipo',
        'cr-usouconstipo',
        'extarchivo',
        'extdireccion',
        'extdireccion-clase-via-principal',
        'extdireccion-sector-ciudad',
        'extdireccion-sector-predio',
        'extdireccion-tipo-direccion',
        'extinteresado'
      ]
    >;
    context: Attribute.JSON & Attribute.Required;
    field: Attribute.String;
    help: Attribute.RichText;
    identifier: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<
      [
        'text',
        'number',
        'boolean',
        'checkbox',
        'date',
        'datetime',
        'email',
        'file',
        'image',
        'radio',
        'select',
        'range',
        'password',
        'map',
        'camera',
        'gps',
        'address'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'text'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'formulario.entrada': FormularioEntrada;
    }
  }
}
