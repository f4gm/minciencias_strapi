import type { Attribute, Schema } from '@strapi/strapi';

export interface FormularioEntrada extends Schema.Component {
  collectionName: 'components_formulario_entradas';
  info: {
    description: '';
    displayName: 'Entrada';
    icon: 'pencil';
  };
  attributes: {
    context: Attribute.JSON & Attribute.Required;
    help: Attribute.RichText;
    hide: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    identifier: Attribute.String & Attribute.Required;
    required: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
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
