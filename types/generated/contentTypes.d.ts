import type { Attribute, Schema } from '@strapi/strapi';

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    description: Attribute.String;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Attribute.String;
    registrationToken: Attribute.String & Attribute.Private;
    resetPasswordToken: Attribute.String & Attribute.Private;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    username: Attribute.String;
  };
}

export interface ApiColAreatipoColAreatipo extends Schema.CollectionType {
  collectionName: 'col_areatipo';
  info: {
    description: '';
    displayName: 'COL_AreaTipo';
    pluralName: 'col-areatipos';
    singularName: 'col-areatipo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::col-areatipo.col-areatipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::col-areatipo.col-areatipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiColAreavalorColAreavalor extends Schema.CollectionType {
  collectionName: 'col_areavalor';
  info: {
    displayName: 'COL_AreaValor';
    pluralName: 'col-areavalors';
    singularName: 'col-areavalor';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    area: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 1000000000000000;
        },
        number
      >;
    cr_terreno_area: Attribute.Relation<
      'api::col-areavalor.col-areavalor',
      'oneToOne',
      'api::cr-terreno.cr-terreno'
    >;
    cr_unidadconstruccion_area: Attribute.Relation<
      'api::col-areavalor.col-areavalor',
      'oneToOne',
      'api::cr-unidadconstruccion.cr-unidadconstruccion'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::col-areavalor.col-areavalor',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    datos_proyeccion: Attribute.Blocks;
    tipo: Attribute.Relation<
      'api::col-areavalor.col-areavalor',
      'oneToOne',
      'api::col-areatipo.col-areatipo'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::col-areavalor.col-areavalor',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiColBaunitcomointeresadoColBaunitcomointeresado
  extends Schema.CollectionType {
  collectionName: 'col_baunitcomointeresado';
  info: {
    displayName: 'col_baUnitComointeresado';
    pluralName: 'col-baunitcomointeresados';
    singularName: 'col-baunitcomointeresado';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::col-baunitcomointeresado.col-baunitcomointeresado',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    inte_cr_agrupinte: Attribute.Relation<
      'api::col-baunitcomointeresado.col-baunitcomointeresado',
      'oneToOne',
      'api::cr-agrupacioninteresado.cr-agrupacioninteresado'
    >;
    interesado_cr_interesado: Attribute.Relation<
      'api::col-baunitcomointeresado.col-baunitcomointeresado',
      'oneToOne',
      'api::cr-interesado.cr-interesado'
    >;
    unidad: Attribute.Relation<
      'api::col-baunitcomointeresado.col-baunitcomointeresado',
      'oneToOne',
      'api::col-areatipo.col-areatipo'
    > &
      Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::col-baunitcomointeresado.col-baunitcomointeresado',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiColBaunitfuenteColBaunitfuente
  extends Schema.CollectionType {
  collectionName: 'col_baunitfuente';
  info: {
    displayName: 'col_baunitFuente';
    pluralName: 'col-baunitfuentes';
    singularName: 'col-baunitfuente';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::col-baunitfuente.col-baunitfuente',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    fuente_espacial: Attribute.Relation<
      'api::col-baunitfuente.col-baunitfuente',
      'oneToOne',
      'api::cr-fuenteespacial.cr-fuenteespacial'
    > &
      Attribute.Required;
    unidad: Attribute.Relation<
      'api::col-baunitfuente.col-baunitfuente',
      'oneToOne',
      'api::cr-predio.cr-predio'
    > &
      Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::col-baunitfuente.col-baunitfuente',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiColCclfuenteColCclfuente extends Schema.CollectionType {
  collectionName: 'col_cclfuente';
  info: {
    displayName: 'col_cclFuente';
    pluralName: 'col-cclfuentes';
    singularName: 'col-cclfuente';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    ccl: Attribute.Relation<
      'api::col-cclfuente.col-cclfuente',
      'oneToOne',
      'api::cr-lindero.cr-lindero'
    > &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::col-cclfuente.col-cclfuente',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    fuente_espacial: Attribute.Relation<
      'api::col-cclfuente.col-cclfuente',
      'oneToOne',
      'api::cr-fuenteespacial.cr-fuenteespacial'
    > &
      Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::col-cclfuente.col-cclfuente',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiColDocumentotipoColDocumentotipo
  extends Schema.CollectionType {
  collectionName: 'col_documentotipo';
  info: {
    description: '';
    displayName: 'COL_DocumentoTipo';
    pluralName: 'col-documentotipos';
    singularName: 'col-documentotipo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::col-documentotipo.col-documentotipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::col-documentotipo.col-documentotipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiColEstadodisponibilidadtipoColEstadodisponibilidadtipo
  extends Schema.CollectionType {
  collectionName: 'col_estadodisponibilidadtipo';
  info: {
    description: '';
    displayName: 'COL_EstadoDisponibilidadTipo';
    pluralName: 'col-estadodisponibilidadtipos';
    singularName: 'col-estadodisponibilidadtipo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::col-estadodisponibilidadtipo.col-estadodisponibilidadtipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::col-estadodisponibilidadtipo.col-estadodisponibilidadtipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiColFormatotipoColFormatotipo extends Schema.CollectionType {
  collectionName: 'col_formatotipo';
  info: {
    description: '';
    displayName: 'COL_FormatoTipo';
    pluralName: 'col-formatotipos';
    singularName: 'col-formatotipo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::col-formatotipo.col-formatotipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::col-formatotipo.col-formatotipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiColFuenteadministrativatipoColFuenteadministrativatipo
  extends Schema.CollectionType {
  collectionName: 'col_fuenteadministrativatipo';
  info: {
    displayName: 'COL_FuenteAdministrativaTipo';
    pluralName: 'col-fuenteadministrativatipos';
    singularName: 'col-fuenteadministrativatipo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::col-fuenteadministrativatipo.col-fuenteadministrativatipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::col-fuenteadministrativatipo.col-fuenteadministrativatipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiColFuenteespacialtipoColFuenteespacialtipo
  extends Schema.CollectionType {
  collectionName: 'col_fuenteespacialtipo';
  info: {
    displayName: 'COL_FuenteEspacialTipo';
    pluralName: 'col-fuenteespacialtipos';
    singularName: 'col-fuenteespacialtipo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::col-fuenteespacialtipo.col-fuenteespacialtipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::col-fuenteespacialtipo.col-fuenteespacialtipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiColGrupointeresadotipoColGrupointeresadotipo
  extends Schema.CollectionType {
  collectionName: 'col_grupointeresadotipo';
  info: {
    displayName: 'COL_GrupoInteresadoTipo';
    pluralName: 'colgrupo-interesadotipos';
    singularName: 'col-grupointeresadotipo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::col-grupointeresadotipo.col-grupointeresadotipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::col-grupointeresadotipo.col-grupointeresadotipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiColInteresadotipoColInteresadotipo
  extends Schema.CollectionType {
  collectionName: 'col_interesadotipo';
  info: {
    displayName: 'COL_InteresadoTipo';
    pluralName: 'col-interesadotipos';
    singularName: 'col-interesadotipo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::col-interesadotipo.col-interesadotipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::col-interesadotipo.col-interesadotipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiColInterpolaciontipoColInterpolaciontipo
  extends Schema.CollectionType {
  collectionName: 'col_interpolaciontipo';
  info: {
    displayName: 'COL_InterpolacionTipo';
    pluralName: 'col-interpolaciontipos';
    singularName: 'col-interpolaciontipo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::col-interpolaciontipo.col-interpolaciontipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::col-interpolaciontipo.col-interpolaciontipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiColMascclColMasccl extends Schema.CollectionType {
  collectionName: 'col_masccl';
  info: {
    displayName: 'col_masCcl';
    pluralName: 'col-masccls';
    singularName: 'col-masccl';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    ccl_mas: Attribute.Relation<
      'api::col-masccl.col-masccl',
      'oneToOne',
      'api::cr-lindero.cr-lindero'
    > &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::col-masccl.col-masccl',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    ue_mas_cr_terreno: Attribute.Relation<
      'api::col-masccl.col-masccl',
      'oneToOne',
      'api::cr-terreno.cr-terreno'
    >;
    ue_mas_cr_unidadconstruccion: Attribute.Relation<
      'api::col-masccl.col-masccl',
      'oneToOne',
      'api::cr-unidadconstruccion.cr-unidadconstruccion'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::col-masccl.col-masccl',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiColMenoscclColMenosccl extends Schema.CollectionType {
  collectionName: 'col_menosccl';
  info: {
    displayName: 'col_menosCcl';
    pluralName: 'col-menosccls';
    singularName: 'col-menosccl';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    ccl_menos: Attribute.Relation<
      'api::col-menosccl.col-menosccl',
      'oneToOne',
      'api::cr-lindero.cr-lindero'
    > &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::col-menosccl.col-menosccl',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    ue_menos_cr_terreno: Attribute.Relation<
      'api::col-menosccl.col-menosccl',
      'oneToOne',
      'api::cr-terreno.cr-terreno'
    >;
    ue_menos_cr_unidadconstruccion: Attribute.Relation<
      'api::col-menosccl.col-menosccl',
      'oneToOne',
      'api::cr-unidadconstruccion.cr-unidadconstruccion'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::col-menosccl.col-menosccl',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiColMetodoproducciontipoColMetodoproducciontipo
  extends Schema.CollectionType {
  collectionName: 'col_metodoproducciontipo';
  info: {
    displayName: 'COL_MetodoProduccionTipo';
    pluralName: 'col-metodoproducciontipos';
    singularName: 'col-metodoproducciontipo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::col-metodoproducciontipo.col-metodoproducciontipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::col-metodoproducciontipo.col-metodoproducciontipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiColPuntocclColPuntoccl extends Schema.CollectionType {
  collectionName: 'col_puntoccl';
  info: {
    displayName: 'col_puntoCcl';
    pluralName: 'col-puntoccls';
    singularName: 'col-puntoccl';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    ccl: Attribute.Relation<
      'api::col-puntoccl.col-puntoccl',
      'oneToOne',
      'api::cr-lindero.cr-lindero'
    > &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::col-puntoccl.col-puntoccl',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    punto_cr_puntocontrol: Attribute.Relation<
      'api::col-puntoccl.col-puntoccl',
      'oneToOne',
      'api::cr-puntocontrol.cr-puntocontrol'
    >;
    punto_cr_puntolindero: Attribute.Relation<
      'api::col-puntoccl.col-puntoccl',
      'oneToOne',
      'api::cr-puntolindero.cr-puntolindero'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::col-puntoccl.col-puntoccl',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiColPuntofuenteColPuntofuente extends Schema.CollectionType {
  collectionName: 'col_puntofuente';
  info: {
    displayName: 'col_puntoFuente';
    pluralName: 'col-puntofuentes';
    singularName: 'col-puntofuente';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::col-puntofuente.col-puntofuente',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    fuente_espacial: Attribute.Relation<
      'api::col-puntofuente.col-puntofuente',
      'oneToOne',
      'api::cr-fuenteespacial.cr-fuenteespacial'
    > &
      Attribute.Required;
    punto_cr_puntocontrol: Attribute.Relation<
      'api::col-puntofuente.col-puntofuente',
      'oneToOne',
      'api::cr-puntocontrol.cr-puntocontrol'
    >;
    punto_cr_puntolindero: Attribute.Relation<
      'api::col-puntofuente.col-puntofuente',
      'oneToOne',
      'api::cr-puntolindero.cr-puntolindero'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::col-puntofuente.col-puntofuente',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiColPuntotipoColPuntotipo extends Schema.CollectionType {
  collectionName: 'col_puntotipo';
  info: {
    displayName: 'COL_PuntoTipo';
    pluralName: 'col-puntotipos';
    singularName: 'col-puntotipo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::col-puntotipo.col-puntotipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::col-puntotipo.col-puntotipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiColRelacionsuperficietipoColRelacionsuperficietipo
  extends Schema.CollectionType {
  collectionName: 'col_relacionsuperficietipo';
  info: {
    displayName: 'COL_RelacionSuperficieTipo';
    pluralName: 'col-relacionsuperficietipos';
    singularName: 'col-relacionsuperficietipo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::col-relacionsuperficietipo.col-relacionsuperficietipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::col-relacionsuperficietipo.col-relacionsuperficietipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiColResponsablefuenteColResponsablefuente
  extends Schema.CollectionType {
  collectionName: 'col_responsablefuente';
  info: {
    displayName: 'col_responsableFuente';
    pluralName: 'col-responsablefuentes';
    singularName: 'col-responsablefuente';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::col-responsablefuente.col-responsablefuente',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    fuente_administrativa: Attribute.Relation<
      'api::col-responsablefuente.col-responsablefuente',
      'oneToOne',
      'api::cr-fuenteadministrativa.cr-fuenteadministrativa'
    > &
      Attribute.Required;
    inte_cr_agrup: Attribute.Relation<
      'api::col-responsablefuente.col-responsablefuente',
      'oneToOne',
      'api::cr-agrupacioninteresado.cr-agrupacioninteresado'
    >;
    interesado_cr_interesado: Attribute.Relation<
      'api::col-responsablefuente.col-responsablefuente',
      'oneToOne',
      'api::cr-interesado.cr-interesado'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::col-responsablefuente.col-responsablefuente',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiColRrrfuenteColRrrfuente extends Schema.CollectionType {
  collectionName: 'col_rrrfuente';
  info: {
    displayName: 'col_rrrFuente';
    pluralName: 'col-rrrfuentes';
    singularName: 'col-rrrfuente';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::col-rrrfuente.col-rrrfuente',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    fuente_administrativa: Attribute.Relation<
      'api::col-rrrfuente.col-rrrfuente',
      'oneToOne',
      'api::cr-fuenteadministrativa.cr-fuenteadministrativa'
    > &
      Attribute.Required;
    rrr_cr_derecho: Attribute.Relation<
      'api::col-rrrfuente.col-rrrfuente',
      'oneToOne',
      'api::cr-derecho.cr-derecho'
    >;
    rrr_cr_hipoteca: Attribute.Relation<
      'api::col-rrrfuente.col-rrrfuente',
      'oneToOne',
      'api::cr-hipoteca.cr-hipoteca'
    >;
    rrr_cr_informalidad: Attribute.Relation<
      'api::col-rrrfuente.col-rrrfuente',
      'oneToOne',
      'api::cr-informalidad.cr-informalidad'
    >;
    rrr_cr_responsabilidad: Attribute.Relation<
      'api::col-rrrfuente.col-rrrfuente',
      'oneToOne',
      'api::cr-responsabilidad.cr-responsabilidad'
    >;
    rrr_cr_restriccion: Attribute.Relation<
      'api::col-rrrfuente.col-rrrfuente',
      'oneToOne',
      'api::cr-restriccion.cr-restriccion'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::col-rrrfuente.col-rrrfuente',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiColUebaunitColUebaunit extends Schema.CollectionType {
  collectionName: 'col_uebaunit';
  info: {
    displayName: 'col_ueBaUnit';
    pluralName: 'col-uebaunits';
    singularName: 'col-uebaunit';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    baunit: Attribute.Relation<
      'api::col-uebaunit.col-uebaunit',
      'oneToOne',
      'api::cr-predio.cr-predio'
    > &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::col-uebaunit.col-uebaunit',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    ue_cr_terreno: Attribute.Relation<
      'api::col-uebaunit.col-uebaunit',
      'oneToOne',
      'api::cr-terreno.cr-terreno'
    >;
    ue_cr_unidadconstruccion: Attribute.Relation<
      'api::col-uebaunit.col-uebaunit',
      'oneToOne',
      'api::cr-unidadconstruccion.cr-unidadconstruccion'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::col-uebaunit.col-uebaunit',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiColUefuenteColUefuente extends Schema.CollectionType {
  collectionName: 'col_uefuente';
  info: {
    displayName: 'col_ueFuente';
    pluralName: 'col-uefuentes';
    singularName: 'col-uefuente';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::col-uefuente.col-uefuente',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    fuente_espacial: Attribute.Relation<
      'api::col-uefuente.col-uefuente',
      'oneToOne',
      'api::cr-fuenteespacial.cr-fuenteespacial'
    > &
      Attribute.Required;
    ue_cr_terreno: Attribute.Relation<
      'api::col-uefuente.col-uefuente',
      'oneToOne',
      'api::cr-terreno.cr-terreno'
    >;
    ue_cr_unidadconstruccion: Attribute.Relation<
      'api::col-uefuente.col-uefuente',
      'oneToOne',
      'api::cr-unidadconstruccion.cr-unidadconstruccion'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::col-uefuente.col-uefuente',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiColUnidadadministrativabasicatipoColUnidadadministrativabasicatipo
  extends Schema.CollectionType {
  collectionName: 'col_unidadadministrativabasicatipo';
  info: {
    displayName: 'COL_UnidadAdministrativaBasicaTipo';
    pluralName: 'col-unidadadministrativabasicatipos';
    singularName: 'col-unidadadministrativabasicatipo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::col-unidadadministrativabasicatipo.col-unidadadministrativabasicatipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::col-unidadadministrativabasicatipo.col-unidadadministrativabasicatipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiColUnidadfuenteColUnidadfuente
  extends Schema.CollectionType {
  collectionName: 'col_unidadfuente';
  info: {
    displayName: 'colunidadFuente';
    pluralName: 'col-unidadfuentes';
    singularName: 'col-unidadfuente';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::col-unidadfuente.col-unidadfuente',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    fuente_administrativa: Attribute.Relation<
      'api::col-unidadfuente.col-unidadfuente',
      'oneToOne',
      'api::cr-fuenteadministrativa.cr-fuenteadministrativa'
    > &
      Attribute.Required;
    unidad: Attribute.Relation<
      'api::col-unidadfuente.col-unidadfuente',
      'oneToOne',
      'api::cr-predio.cr-predio'
    > &
      Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::col-unidadfuente.col-unidadfuente',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrAgrupacioninteresadoCrAgrupacioninteresado
  extends Schema.CollectionType {
  collectionName: 'cr_agrupacioninteresados';
  info: {
    displayName: 'CR_AgrupacionInteresados';
    pluralName: 'cr-agrupacioninteresados';
    singularName: 'cr-agrupacioninteresado';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    comienzo_vida_util_version: Attribute.DateTime & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-agrupacioninteresado.cr-agrupacioninteresado',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    espacio_de_nombres: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    fin_vida_util_version: Attribute.DateTime;
    local_id: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    nombre: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    numero_documento: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    tipo: Attribute.Relation<
      'api::cr-agrupacioninteresado.cr-agrupacioninteresado',
      'oneToOne',
      'api::col-grupointeresadotipo.col-grupointeresadotipo'
    >;
    tipo_documento: Attribute.Relation<
      'api::cr-agrupacioninteresado.cr-agrupacioninteresado',
      'oneToOne',
      'api::col-documentotipo.col-documentotipo'
    >;
    tipo_interesado: Attribute.Relation<
      'api::cr-agrupacioninteresado.cr-agrupacioninteresado',
      'oneToOne',
      'api::col-interesadotipo.col-interesadotipo'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-agrupacioninteresado.cr-agrupacioninteresado',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrAnotacionregistroCrAnotacionregistro
  extends Schema.CollectionType {
  collectionName: 'cr_anotacionregistro';
  info: {
    displayName: 'CR_AnotacionRegistro';
    pluralName: 'cr-anotacionregistros';
    singularName: 'cr-anotacionregistro';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    cr_fuenteadministrativa: Attribute.Relation<
      'api::cr-anotacionregistro.cr-anotacionregistro',
      'oneToOne',
      'api::cr-fuenteadministrativa.cr-fuenteadministrativa'
    > &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-anotacionregistro.cr-anotacionregistro',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    estado_anotacion: Attribute.Relation<
      'api::cr-anotacionregistro.cr-anotacionregistro',
      'oneToOne',
      'api::cr-estadoanotaciontipo.cr-estadoanotaciontipo'
    >;
    fecha_radicacion: Attribute.Date;
    numero_anotacion: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 10000000000;
          min: 0;
        },
        number
      >;
    numero_radicacion: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 10;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-anotacionregistro.cr-anotacionregistro',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    valor_transaccion: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          max: 10000000000000000;
          min: 0;
        },
        number
      >;
  };
}

export interface ApiCrAutoreconocimientoetnicotipoCrAutoreconocimientoetnicotipo
  extends Schema.CollectionType {
  collectionName: 'cr_autoreconocimientoetnicotipo';
  info: {
    displayName: 'CR_AutoreconocimientoEtnicoTipo';
    pluralName: 'cr-autoreconocimientoetnicotipos';
    singularName: 'cr-autoreconocimientoetnicotipo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-autoreconocimientoetnicotipo.cr-autoreconocimientoetnicotipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-autoreconocimientoetnicotipo.cr-autoreconocimientoetnicotipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrCaracteristicasucCrCaracteristicasuc
  extends Schema.CollectionType {
  collectionName: 'cr_caracteristicasuc';
  info: {
    description: '';
    displayName: 'CR_CaracteristicasUnidadConstruccion';
    pluralName: 'cr-caracteristicasucs';
    singularName: 'cr-caracteristicasuc';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    anio_construccion: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 2500;
          min: 1512;
        },
        number
      >;
    area_construida: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 1000000000000000;
          min: 0;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-caracteristicasuc.cr-caracteristicasuc',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    estado_conservacion: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
    identificador: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    observaciones: Attribute.Text;
    tipo_unidad_construccion: Attribute.Relation<
      'api::cr-caracteristicasuc.cr-caracteristicasuc',
      'oneToOne',
      'api::cr-unidadconstrucciontipo.cr-unidadconstrucciontipo'
    > &
      Attribute.Required;
    total_plantas: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 150;
        },
        number
      >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-caracteristicasuc.cr-caracteristicasuc',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    uso: Attribute.Relation<
      'api::cr-caracteristicasuc.cr-caracteristicasuc',
      'oneToOne',
      'api::cr-usouconstipo.cr-usouconstipo'
    > &
      Attribute.Required;
  };
}

export interface ApiCrCondicionprediotipoCrCondicionprediotipo
  extends Schema.CollectionType {
  collectionName: 'cr_condicionprediotipo';
  info: {
    description: '';
    displayName: 'CR_CondicionPredioTipo';
    pluralName: 'cr-condicionprediotipos';
    singularName: 'cr-condicionprediotipo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-condicionprediotipo.cr-condicionprediotipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-condicionprediotipo.cr-condicionprediotipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrConstruccionplantatipoCrConstruccionplantatipo
  extends Schema.CollectionType {
  collectionName: 'cr_construccionplantatipo';
  info: {
    displayName: 'CR_ConstruccionPlantaTipo';
    pluralName: 'cr-construccionplantatipos';
    singularName: 'cr-construccionplantatipo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-construccionplantatipo.cr-construccionplantatipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-construccionplantatipo.cr-construccionplantatipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrDatosmatrizCrDatosmatriz extends Schema.CollectionType {
  collectionName: 'cr_datosmatriz';
  info: {
    description: '';
    displayName: 'CR_DatosMatriz';
    pluralName: 'cr-datosmatrizs';
    singularName: 'cr-datosmatriz';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    area_total_construida: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          max: 100000000000000;
        },
        number
      >;
    area_total_construida_comun: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          max: 100000000000000;
        },
        number
      >;
    area_total_construida_privada: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          max: 100000000000000;
        },
        number
      >;
    area_total_terreno: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          max: 100000000000000;
        },
        number
      >;
    area_total_terreno_comun: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          max: 100000000000000;
        },
        number
      >;
    area_total_terreno_privada: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          max: 100000000000000;
        },
        number
      >;
    cr_predio: Attribute.Relation<
      'api::cr-datosmatriz.cr-datosmatriz',
      'oneToOne',
      'api::cr-predio.cr-predio'
    > &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-datosmatriz.cr-datosmatriz',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    numero_torres: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 1000;
        },
        number
      >;
    total_unidades_privadas: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 100000000;
        },
        number
      >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-datosmatriz.cr-datosmatriz',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrDerechoCrDerecho extends Schema.CollectionType {
  collectionName: 'cr_derecho';
  info: {
    displayName: 'CR_Derecho';
    pluralName: 'cr-derechos';
    singularName: 'cr-derecho';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    codigo_naturaleza_juridica: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 5;
      }>;
    comienzo_vida_util_version: Attribute.DateTime & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-derecho.cr-derecho',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    espacio_de_nombres: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    fecha_anotacion: Attribute.Date;
    fin_vida_util_version: Attribute.DateTime;
    fraccion_derecho: Attribute.Float &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 1;
          min: 0;
        },
        number
      >;
    interesado_cr_agrupacioninteresados: Attribute.Relation<
      'api::cr-derecho.cr-derecho',
      'oneToOne',
      'api::cr-agrupacioninteresado.cr-agrupacioninteresado'
    >;
    interesado_cr_interesado: Attribute.Relation<
      'api::cr-derecho.cr-derecho',
      'oneToOne',
      'api::cr-interesado.cr-interesado'
    >;
    local_id: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    naturaleza_complemento: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    naturaleza_juridica: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    tipo: Attribute.Relation<
      'api::cr-derecho.cr-derecho',
      'oneToOne',
      'api::cr-derechotipo.cr-derechotipo'
    > &
      Attribute.Required;
    unidad: Attribute.Relation<
      'api::cr-derecho.cr-derecho',
      'oneToOne',
      'api::cr-predio.cr-predio'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-derecho.cr-derecho',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrDerechotipoCrDerechotipo extends Schema.CollectionType {
  collectionName: 'cr_derechotipo';
  info: {
    displayName: 'CR_DerechoTipo';
    pluralName: 'cr-derechotipos';
    singularName: 'cr-derechotipo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-derechotipo.cr-derechotipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-derechotipo.cr-derechotipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrDestinacioneconomicatipoCrDestinacioneconomicatipo
  extends Schema.CollectionType {
  collectionName: 'cr_destinacioneconomicatipo';
  info: {
    displayName: 'CR_DestinacionEconomicaTipo';
    pluralName: 'cr-destinacioneconomicatipos';
    singularName: 'cr-destinacioneconomicatipo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-destinacioneconomicatipo.cr-destinacioneconomicatipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-destinacioneconomicatipo.cr-destinacioneconomicatipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrErrsaTipoReferenciaCrErrsaTipoReferencia
  extends Schema.CollectionType {
  collectionName: 'cr_errsa_tipo_referencia';
  info: {
    displayName: 'CR_ERRSA_Tipo_Referencia';
    pluralName: 'cr-errsa-tipo-referencias';
    singularName: 'cr-errsa-tipo-referencia';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-errsa-tipo-referencia.cr-errsa-tipo-referencia',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-errsa-tipo-referencia.cr-errsa-tipo-referencia',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrErrsaCrErrsa extends Schema.CollectionType {
  collectionName: 'cr_errsa';
  info: {
    displayName: 'CR_ERRSA';
    pluralName: 'cr-errsas';
    singularName: 'cr-errsa';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    anio: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 2;
      }>;
    cr_predio_rrsa: Attribute.Relation<
      'api::cr-errsa.cr-errsa',
      'oneToOne',
      'api::cr-predio.cr-predio'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-errsa.cr-errsa',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    dia: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 2;
      }>;
    libro: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 1;
      }>;
    matricula: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    mes: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 2;
      }>;
    numero: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 4;
      }>;
    oficina: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    pagina: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 4;
      }>;
    tipo_referencia: Attribute.Relation<
      'api::cr-errsa.cr-errsa',
      'oneToOne',
      'api::cr-errsa-tipo-referencia.cr-errsa-tipo-referencia'
    >;
    tomo: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 2;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-errsa.cr-errsa',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrEstadoanotaciontipoCrEstadoanotaciontipo
  extends Schema.CollectionType {
  collectionName: 'cr_estadoanotaciontipo';
  info: {
    displayName: 'CR_EstadoAnotacionTipo';
    pluralName: 'cr-estadoanotaciontipos';
    singularName: 'cr-estadoanotaciontipo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-estadoanotaciontipo.cr-estadoanotaciontipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-estadoanotaciontipo.cr-estadoanotaciontipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrEstadofmitipoCrEstadofmitipo
  extends Schema.CollectionType {
  collectionName: 'cr_estadofmitipo';
  info: {
    displayName: 'CR_EstadoFMITipo';
    pluralName: 'cr-estadofmitipos';
    singularName: 'cr-estadofmitipo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-estadofmitipo.cr-estadofmitipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-estadofmitipo.cr-estadofmitipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrEstadotipoCrEstadotipo extends Schema.CollectionType {
  collectionName: 'cr_estadotipo';
  info: {
    displayName: 'CR_EstadoTipo';
    pluralName: 'cr-estadotipos';
    singularName: 'cr-estadotipo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-estadotipo.cr-estadotipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-estadotipo.cr-estadotipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrEstrucavalcaracCrEstrucavalcarac
  extends Schema.CollectionType {
  collectionName: 'cr_estrucavalcarac';
  info: {
    displayName: 'CR_EstructuraAvaluoCaracterizacion';
    pluralName: 'cr-estrucavalcaracs';
    singularName: 'cr-estrucavalcarac';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    avaluo_catastral: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 10000000000000000;
        },
        number
      >;
    cr_crctrstcdcnstrccion_aval_caract: Attribute.Relation<
      'api::cr-estrucavalcarac.cr-estrucavalcarac',
      'oneToOne',
      'api::cr-caracteristicasuc.cr-caracteristicasuc'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-estrucavalcarac.cr-estrucavalcarac',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    fecha_avaluo: Attribute.Date;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-estrucavalcarac.cr-estrucavalcarac',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    valor_comercial: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 10000000000000000;
        },
        number
      >;
  };
}

export interface ApiCrEstrucavalinterCrEstrucavalinter
  extends Schema.CollectionType {
  collectionName: 'cr_estrucavalinter';
  info: {
    description: '';
    displayName: 'CR_EstructuraAvaluoInterseccion';
    pluralName: 'cr-estrucavalinters';
    singularName: 'cr-estrucavalinter';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    avaluo_catastral_interseccion_terreno: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 10000000000000000;
        },
        number
      >;
    avaluo_catastral_interseccion_total: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 10000000000000000;
        },
        number
      >;
    avaluo_catastral_interseccion_unidades_construccion: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 10000000000000000;
        },
        number
      >;
    cr_pred_infor_aval_catas_inter: Attribute.Relation<
      'api::cr-estrucavalinter.cr-estrucavalinter',
      'oneToOne',
      'api::cr-predioinformalidad.cr-predioinformalidad'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-estrucavalinter.cr-estrucavalinter',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-estrucavalinter.cr-estrucavalinter',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrEstrucmatrisegreCrEstrucmatrisegre
  extends Schema.CollectionType {
  collectionName: 'cr_estrucmatrisegre';
  info: {
    displayName: 'CR_EstructuraMatriculaSegregados';
    pluralName: 'cr-estrucmatrisegres';
    singularName: 'cr-estrucmatrisegre';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    codigo_orip: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    cr_predmatrisegre: Attribute.Relation<
      'api::cr-estrucmatrisegre.cr-estrucmatrisegre',
      'oneToOne',
      'api::cr-predio.cr-predio'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-estrucmatrisegre.cr-estrucmatrisegre',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    matricula_inmobiliaria: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-estrucmatrisegre.cr-estrucmatrisegre',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrEstrucpredmatrinpnCrEstrucpredmatrinpn
  extends Schema.CollectionType {
  collectionName: 'cr_estrucpredmatrinpn';
  info: {
    displayName: 'CR_EstructuraPredioMatrizNPN';
    pluralName: 'cr-estrucpredmatrinpns';
    singularName: 'cr-estrucpredmatrinpn';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    area_catastral_terreno: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          max: 1e25;
        },
        number
      >;
    cr_predmatrinpn: Attribute.Relation<
      'api::cr-estrucpredmatrinpn.cr-estrucpredmatrinpn',
      'oneToOne',
      'api::cr-predio.cr-predio'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-estrucpredmatrinpn.cr-estrucpredmatrinpn',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    numero_predial_nacional: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-estrucpredmatrinpn.cr-estrucpredmatrinpn',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrEstrucpredorinpnCrEstrucpredorinpn
  extends Schema.CollectionType {
  collectionName: 'cr_estrucpredorinpn';
  info: {
    description: '';
    displayName: 'CR_EstructuraPredioOrigenNPN';
    pluralName: 'cr-estrucpredorinpns';
    singularName: 'cr-estrucpredorinpn';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    cr_predorinpn: Attribute.Relation<
      'api::cr-estrucpredorinpn.cr-estrucpredorinpn',
      'oneToOne',
      'api::cr-predio.cr-predio'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-estrucpredorinpn.cr-estrucpredorinpn',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    fecha_cambio_npn: Attribute.Date & Attribute.Required;
    numero_predial_nacional: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-estrucpredorinpn.cr-estrucpredorinpn',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrEstructuraalertapredioCrEstructuraalertapredio
  extends Schema.CollectionType {
  collectionName: 'cr_estructuraalertapredio';
  info: {
    description: '';
    displayName: 'CR_EstructuraAlertaPredio';
    pluralName: 'cr-estructuraalertapredios';
    singularName: 'cr-estructuraalertapredio';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    cr_predio_alerta_predio: Attribute.Relation<
      'api::cr-estructuraalertapredio.cr-estructuraalertapredio',
      'oneToOne',
      'api::cr-predio.cr-predio'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-estructuraalertapredio.cr-estructuraalertapredio',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion_alerta: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    entidad_emisora_alerta: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    fecha_apertura_alerta: Attribute.Date & Attribute.Required;
    fecha_cierre_alerta: Attribute.Date;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-estructuraalertapredio.cr-estructuraalertapredio',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrEstructuraavaluoCrEstructuraavaluo
  extends Schema.CollectionType {
  collectionName: 'cr_estructuraavaluo';
  info: {
    description: '';
    displayName: 'CR_EstructuraAvaluo';
    pluralName: 'cr-estructuraavaluos';
    singularName: 'cr-estructuraavaluo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    autoestimacion: Attribute.Boolean & Attribute.Required;
    avaluo_catastral: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 10000000000000000;
        },
        number
      >;
    avaluo_catastral_terreno: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          max: 10000000000000000;
        },
        number
      >;
    avaluo_catastral_total_unidadesconstruccion: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          max: 10000000000000000;
        },
        number
      >;
    cr_predio_avaluo: Attribute.Relation<
      'api::cr-estructuraavaluo.cr-estructuraavaluo',
      'oneToOne',
      'api::cr-predio.cr-predio'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-estructuraavaluo.cr-estructuraavaluo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    fecha_avaluo: Attribute.Date & Attribute.Required;
    incremento: Attribute.Boolean;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-estructuraavaluo.cr-estructuraavaluo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    valor_comercial: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          max: 10000000000000000;
        },
        number
      >;
    valor_comercial_terreno: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          max: 10000000000000000;
        },
        number
      >;
    valor_comercial_total_unidadesconstruccion: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          max: 10000000000000000;
        },
        number
      >;
  };
}

export interface ApiCrEstructuramatriculamatrizCrEstructuramatriculamatriz
  extends Schema.CollectionType {
  collectionName: 'cr_estructuramatriculamatriz';
  info: {
    displayName: 'CR_EstructuraMatriculaMatriz';
    pluralName: 'cr-estructuramatriculamatrizs';
    singularName: 'cr-estructuramatriculamatriz';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    codigo_orip: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    cr_predmatrimatriz: Attribute.Relation<
      'api::cr-estructuramatriculamatriz.cr-estructuramatriculamatriz',
      'oneToOne',
      'api::cr-predio.cr-predio'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-estructuramatriculamatriz.cr-estructuramatriculamatriz',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    matricula_inmobiliaria: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-estructuramatriculamatriz.cr-estructuramatriculamatriz',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrEstructuraprocedimientocrCrEstructuraprocedimientocr
  extends Schema.CollectionType {
  collectionName: 'cr_estructuraprocedimientocr';
  info: {
    displayName: 'CR_EstructuraProcedimientoCatastralRegistral';
    pluralName: 'cr-estructuraprocedimientocrs';
    singularName: 'cr-estructuraprocedimientocr';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    cr_predio_procedimientocr: Attribute.Relation<
      'api::cr-estructuraprocedimientocr.cr-estructuraprocedimientocr',
      'oneToOne',
      'api::cr-predio.cr-predio'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-estructuraprocedimientocr.cr-estructuraprocedimientocr',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    procedimientocr: Attribute.Relation<
      'api::cr-estructuraprocedimientocr.cr-estructuraprocedimientocr',
      'oneToOne',
      'api::cr-procedimientocatastralregistraltipo.cr-procedimientocatastralregistraltipo'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-estructuraprocedimientocr.cr-estructuraprocedimientocr',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrFotoidentificaciontipoCrFotoidentificaciontipo
  extends Schema.CollectionType {
  collectionName: 'cr_fotoidentificaciontipo';
  info: {
    displayName: 'CR_FotoidentificacionTipo';
    pluralName: 'cr-fotoidentificaciontipos';
    singularName: 'cr-fotoidentificaciontipo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-fotoidentificaciontipo.cr-fotoidentificaciontipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-fotoidentificaciontipo.cr-fotoidentificaciontipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrFuenteadministrativaCrFuenteadministrativa
  extends Schema.CollectionType {
  collectionName: 'cr_fuenteadministrativa';
  info: {
    displayName: 'CR_FuenteAdministrativa';
    pluralName: 'cr-fuenteadministrativas';
    singularName: 'cr-fuenteadministrativa';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    ciudad_origen: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-fuenteadministrativa.cr-fuenteadministrativa',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    ente_emisor: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    espacio_de_nombres: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    estado_disponibilidad: Attribute.Relation<
      'api::cr-fuenteadministrativa.cr-fuenteadministrativa',
      'oneToOne',
      'api::col-estadodisponibilidadtipo.col-estadodisponibilidadtipo'
    >;
    fecha_documento_fuente: Attribute.Date;
    fecha_fin: Attribute.Date;
    local_id: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    nombre: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    oficina_origen: Attribute.Integer;
    tipo: Attribute.Relation<
      'api::cr-fuenteadministrativa.cr-fuenteadministrativa',
      'oneToOne',
      'api::col-fuenteadministrativatipo.col-fuenteadministrativatipo'
    >;
    tipo_formato: Attribute.Relation<
      'api::cr-fuenteadministrativa.cr-fuenteadministrativa',
      'oneToOne',
      'api::col-formatotipo.col-formatotipo'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-fuenteadministrativa.cr-fuenteadministrativa',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 2000;
      }>;
  };
}

export interface ApiCrFuenteespacialCrFuenteespacial
  extends Schema.CollectionType {
  collectionName: 'cr_fuenteespacial';
  info: {
    displayName: 'CR_FuenteEspacial';
    pluralName: 'cr-fuenteespacials';
    singularName: 'cr-fuenteespacial';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-fuenteespacial.cr-fuenteespacial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    espacio_de_nombres: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    estado_disponibilidad: Attribute.Relation<
      'api::cr-fuenteespacial.cr-fuenteespacial',
      'oneToOne',
      'api::col-estadodisponibilidadtipo.col-estadodisponibilidadtipo'
    >;
    fecha_documento_fuente: Attribute.Date;
    local_id: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    metadato: Attribute.Blocks;
    nombre: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    tipo: Attribute.Relation<
      'api::cr-fuenteespacial.cr-fuenteespacial',
      'oneToOne',
      'api::col-fuenteespacialtipo.col-fuenteespacialtipo'
    >;
    tipo_formato: Attribute.Relation<
      'api::cr-fuenteespacial.cr-fuenteespacial',
      'oneToOne',
      'api::col-formatotipo.col-formatotipo'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-fuenteespacial.cr-fuenteespacial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 2000;
      }>;
  };
}

export interface ApiCrHipotecaCrHipoteca extends Schema.CollectionType {
  collectionName: 'cr_hipoteca';
  info: {
    displayName: 'CR_Hipoteca';
    pluralName: 'cr-hipotecas';
    singularName: 'cr-hipoteca';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    codigo_naturaleza_juridica: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 5;
      }>;
    comienzo_vida_util_version: Attribute.DateTime & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-hipoteca.cr-hipoteca',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    espacio_de_nombres: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    fecha_anotacion: Attribute.Date;
    fin_vida_util_version: Attribute.DateTime;
    inte_cr_agrup: Attribute.Relation<
      'api::cr-hipoteca.cr-hipoteca',
      'oneToOne',
      'api::cr-agrupacioninteresado.cr-agrupacioninteresado'
    >;
    interesado_cr_interesado: Attribute.Relation<
      'api::cr-hipoteca.cr-hipoteca',
      'oneToOne',
      'api::cr-interesado.cr-interesado'
    >;
    local_id: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    naturaleza_complemento: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    naturaleza_juridica: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    tipo: Attribute.Relation<
      'api::cr-hipoteca.cr-hipoteca',
      'oneToOne',
      'api::cr-restricciontipo.cr-restricciontipo'
    >;
    unidad: Attribute.Relation<
      'api::cr-hipoteca.cr-hipoteca',
      'oneToOne',
      'api::cr-predio.cr-predio'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-hipoteca.cr-hipoteca',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrHipotecaderechoCrHipotecaderecho
  extends Schema.CollectionType {
  collectionName: 'cr_hipotecaderecho';
  info: {
    displayName: 'cr_hipotecaDerecho';
    pluralName: 'cr-hipotecaderechos';
    singularName: 'cr-hipotecaderecho';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    cr_derecho: Attribute.Relation<
      'api::cr-hipotecaderecho.cr-hipotecaderecho',
      'oneToOne',
      'api::cr-derecho.cr-derecho'
    > &
      Attribute.Required;
    cr_hipoteca: Attribute.Relation<
      'api::cr-hipotecaderecho.cr-hipotecaderecho',
      'oneToOne',
      'api::cr-hipoteca.cr-hipoteca'
    > &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-hipotecaderecho.cr-hipotecaderecho',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-hipotecaderecho.cr-hipotecaderecho',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrInformalidadCrInformalidad extends Schema.CollectionType {
  collectionName: 'cr_informalidad';
  info: {
    displayName: 'CR_Informalidad';
    pluralName: 'cr-informalidads';
    singularName: 'cr-informalidad';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    comienzo_vida_util_version: Attribute.DateTime & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-informalidad.cr-informalidad',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    espacio_de_nombres: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    fin_vida_util_version: Attribute.DateTime;
    inte_cr_agrup: Attribute.Relation<
      'api::cr-informalidad.cr-informalidad',
      'oneToOne',
      'api::cr-agrupacioninteresado.cr-agrupacioninteresado'
    >;
    interesado_cr_interesado: Attribute.Relation<
      'api::cr-informalidad.cr-informalidad',
      'oneToOne',
      'api::cr-interesado.cr-interesado'
    >;
    local_id: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    tipo: Attribute.Relation<
      'api::cr-informalidad.cr-informalidad',
      'oneToOne',
      'api::cr-informalidadtipo.cr-informalidadtipo'
    > &
      Attribute.Required;
    unidad: Attribute.Relation<
      'api::cr-informalidad.cr-informalidad',
      'oneToOne',
      'api::cr-predio.cr-predio'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-informalidad.cr-informalidad',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrInformalidadtipoCrInformalidadtipo
  extends Schema.CollectionType {
  collectionName: 'cr_informalidadtipo';
  info: {
    displayName: 'CR_InformalidadTipo';
    pluralName: 'cr-informalidadtipos';
    singularName: 'cr-informalidadtipo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-informalidadtipo.cr-informalidadtipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-informalidadtipo.cr-informalidadtipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrInteresadoCrInteresado extends Schema.CollectionType {
  collectionName: 'cr_interesado';
  info: {
    description: '';
    displayName: 'CR_Interesado';
    pluralName: 'cr-interesados';
    singularName: 'cr-interesado';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    autoreconocimientocampesino: Attribute.Boolean;
    autoreconocimientoetnico: Attribute.Relation<
      'api::cr-interesado.cr-interesado',
      'oneToOne',
      'api::cr-autoreconocimientoetnicotipo.cr-autoreconocimientoetnicotipo'
    >;
    comienzo_vida_util_version: Attribute.DateTime & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-interesado.cr-interesado',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    espacio_de_nombres: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    fin_vida_util_version: Attribute.DateTime;
    local_id: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    nombre: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    numero_documento: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    primer_apellido: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    primer_nombre: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    razon_social: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    segundo_apellido: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    segundo_nombre: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    sexo: Attribute.Relation<
      'api::cr-interesado.cr-interesado',
      'oneToOne',
      'api::cr-sexotipo.cr-sexotipo'
    > &
      Attribute.Required;
    tipo_documento: Attribute.Relation<
      'api::cr-interesado.cr-interesado',
      'oneToOne',
      'api::col-documentotipo.col-documentotipo'
    > &
      Attribute.Required;
    tipo_interesado: Attribute.Relation<
      'api::cr-interesado.cr-interesado',
      'oneToOne',
      'api::col-interesadotipo.col-interesadotipo'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-interesado.cr-interesado',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrLinderoCrLindero extends Schema.CollectionType {
  collectionName: 'cr_lindero';
  info: {
    description: '';
    displayName: 'CR_Lindero';
    pluralName: 'cr-linderos';
    singularName: 'cr-lindero';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    comienzo_vida_util_version: Attribute.DateTime & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-lindero.cr-lindero',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    espacio_de_nombres: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    fin_vida_util_version: Attribute.DateTime;
    geometria: Attribute.JSON &
      Attribute.Required &
      Attribute.CustomField<'plugin::postgis.map'>;
    local_id: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    localizacion_textual: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    longitud: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 100000000000;
        },
        number
      >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-lindero.cr-lindero',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrMutaciontipoCrMutaciontipo extends Schema.CollectionType {
  collectionName: 'cr_mutaciontipo';
  info: {
    displayName: 'CR_MutacionTipo';
    pluralName: 'cr-mutaciontipos';
    singularName: 'cr-mutaciontipo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-mutaciontipo.cr-mutaciontipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-mutaciontipo.cr-mutaciontipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrPredioCopropiedadCrPredioCopropiedad
  extends Schema.CollectionType {
  collectionName: 'cr_predio_copropiedad';
  info: {
    displayName: 'cr_predio_copropiedad';
    pluralName: 'cr-predio-copropiedads';
    singularName: 'cr-predio-copropiedad';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    area_catastral_terreno_coeficiente: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 10000000000000000;
          min: 0;
        },
        number
      >;
    area_privada_construida: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          max: 1e27;
          min: 0;
        },
        number
      >;
    area_privada_libre: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          max: 1e27;
          min: 0;
        },
        number
      >;
    area_privada_terreno: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          max: 1e27;
          min: 0;
        },
        number
      >;
    coeficiente: Attribute.Float &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 1;
          min: 0;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-predio-copropiedad.cr-predio-copropiedad',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    matriz: Attribute.Relation<
      'api::cr-predio-copropiedad.cr-predio-copropiedad',
      'oneToOne',
      'api::cr-predio.cr-predio'
    >;
    unidad_predial: Attribute.Relation<
      'api::cr-predio-copropiedad.cr-predio-copropiedad',
      'oneToOne',
      'api::cr-predio.cr-predio'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-predio-copropiedad.cr-predio-copropiedad',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrPredioTramitecatastralCrPredioTramitecatastral
  extends Schema.CollectionType {
  collectionName: 'cr_predio_tramitecatastral';
  info: {
    displayName: 'cr_predio_tramitecatastral';
    pluralName: 'cr-predio-tramitecatastrals';
    singularName: 'cr-predio-tramitecatastral';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    cr_predio: Attribute.Relation<
      'api::cr-predio-tramitecatastral.cr-predio-tramitecatastral',
      'oneToOne',
      'api::cr-predio.cr-predio'
    > &
      Attribute.Required;
    cr_tramite_catastral: Attribute.Relation<
      'api::cr-predio-tramitecatastral.cr-predio-tramitecatastral',
      'oneToOne',
      'api::cr-tramitecatastral.cr-tramitecatastral'
    > &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-predio-tramitecatastral.cr-predio-tramitecatastral',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-predio-tramitecatastral.cr-predio-tramitecatastral',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrPredioCrPredio extends Schema.CollectionType {
  collectionName: 'cr_predio';
  info: {
    description: '';
    displayName: 'CR_Predio';
    pluralName: 'cr-predios';
    singularName: 'cr-predio';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    area_catastral_terreno: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 1e22;
        },
        number
      >;
    area_registral_m2: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          max: 1e22;
        },
        number
      >;
    codigo_homologado: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 11;
      }>;
    codigo_orip: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 4;
      }>;
    comienzo_vida_util_version: Attribute.DateTime & Attribute.Required;
    condicion_predio: Attribute.Relation<
      'api::cr-predio.cr-predio',
      'oneToOne',
      'api::cr-condicionprediotipo.cr-condicionprediotipo'
    > &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-predio.cr-predio',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    departamento: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 2;
      }>;
    destinacion_economica: Attribute.Relation<
      'api::cr-predio.cr-predio',
      'oneToOne',
      'api::cr-destinacioneconomicatipo.cr-destinacioneconomicatipo'
    > &
      Attribute.Required;
    espacio_de_nombres: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    estado: Attribute.Relation<
      'api::cr-predio.cr-predio',
      'oneToOne',
      'api::cr-estadotipo.cr-estadotipo'
    > &
      Attribute.Required;
    estado_fmi: Attribute.Relation<
      'api::cr-predio.cr-predio',
      'oneToOne',
      'api::cr-estadofmitipo.cr-estadofmitipo'
    >;
    fecha_apertura_fmi: Attribute.Date;
    fecha_inscripcion_catastral: Attribute.Date;
    fin_vida_util_version: Attribute.DateTime;
    local_id: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    matricula_inmobiliaria: Attribute.Integer;
    municipio: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 3;
      }>;
    nombre: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    numero_predial_nacional: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
    nupre: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 11;
      }>;
    tipo: Attribute.Relation<
      'api::cr-predio.cr-predio',
      'oneToOne',
      'api::col-unidadadministrativabasicatipo.col-unidadadministrativabasicatipo'
    > &
      Attribute.Required;
    tipo_predio: Attribute.Relation<
      'api::cr-predio.cr-predio',
      'oneToOne',
      'api::cr-prediotipo.cr-prediotipo'
    > &
      Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-predio.cr-predio',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    vigencia_actualizacion_catastral: Attribute.Date & Attribute.Required;
  };
}

export interface ApiCrPredioinformalidadCrPredioinformalidad
  extends Schema.CollectionType {
  collectionName: 'cr_predioinformalidad';
  info: {
    displayName: 'CR_Predio_Informalidad';
    pluralName: 'cr-predioinformalidads';
    singularName: 'cr-predioinformalidad';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    area_construida_interseccion: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          max: 1e25;
        },
        number
      >;
    area_terreno_interseccion: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 1e25;
        },
        number
      >;
    cr_predio_formal: Attribute.Relation<
      'api::cr-predioinformalidad.cr-predioinformalidad',
      'oneToOne',
      'api::cr-predio.cr-predio'
    >;
    cr_predio_informal: Attribute.Relation<
      'api::cr-predioinformalidad.cr-predioinformalidad',
      'oneToOne',
      'api::cr-predio.cr-predio'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-predioinformalidad.cr-predioinformalidad',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-predioinformalidad.cr-predioinformalidad',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrPrediotipoCrPrediotipo extends Schema.CollectionType {
  collectionName: 'cr_prediotipo';
  info: {
    displayName: 'CR_PredioTipo';
    pluralName: 'cr-prediotipos';
    singularName: 'cr-prediotipo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-prediotipo.cr-prediotipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-prediotipo.cr-prediotipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrProcedimientocatastralregistraltipoCrProcedimientocatastralregistraltipo
  extends Schema.CollectionType {
  collectionName: 'cr_procedimientocatastralregistraltipo';
  info: {
    displayName: 'CR_ProcedimientoCatastralRegistralTipo';
    pluralName: 'cr-procedimientocatastralregistraltipos';
    singularName: 'cr-procedimientocatastralregistraltipo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-procedimientocatastralregistraltipo.cr-procedimientocatastralregistraltipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-procedimientocatastralregistraltipo.cr-procedimientocatastralregistraltipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrPublicidadCrPublicidad extends Schema.CollectionType {
  collectionName: 'cr_publicidad';
  info: {
    displayName: 'CR_Publicidad';
    pluralName: 'cr-publicidads';
    singularName: 'cr-publicidad';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    codigo_naturaleza_juridica: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 5;
      }>;
    col_inte_cr_agrup: Attribute.Relation<
      'api::cr-publicidad.cr-publicidad',
      'oneToOne',
      'api::cr-agrupacioninteresado.cr-agrupacioninteresado'
    >;
    col_interesado_cr_interesado: Attribute.Relation<
      'api::cr-publicidad.cr-publicidad',
      'oneToOne',
      'api::cr-interesado.cr-interesado'
    >;
    cr_baunit: Attribute.Relation<
      'api::cr-publicidad.cr-publicidad',
      'oneToOne',
      'api::cr-predio.cr-predio'
    > &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-publicidad.cr-publicidad',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    fecha_anotacion: Attribute.Date;
    naturaleza_complemento: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    naturaleza_juridica: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    tipo_publicidad: Attribute.Relation<
      'api::cr-publicidad.cr-publicidad',
      'oneToOne',
      'api::cr-publicidadtipo.cr-publicidadtipo'
    > &
      Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-publicidad.cr-publicidad',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrPublicidadfuenteCrPublicidadfuente
  extends Schema.CollectionType {
  collectionName: 'cr_publicidadfuente';
  info: {
    displayName: 'cr_publicidadFuente';
    pluralName: 'cr-publicidadfuentes';
    singularName: 'cr-publicidadfuente';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    col_fuente: Attribute.Relation<
      'api::cr-publicidadfuente.cr-publicidadfuente',
      'oneToOne',
      'api::cr-fuenteadministrativa.cr-fuenteadministrativa'
    > &
      Attribute.Required;
    cr_publicidad: Attribute.Relation<
      'api::cr-publicidadfuente.cr-publicidadfuente',
      'oneToOne',
      'api::cr-publicidad.cr-publicidad'
    > &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-publicidadfuente.cr-publicidadfuente',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-publicidadfuente.cr-publicidadfuente',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrPublicidadtipoCrPublicidadtipo
  extends Schema.CollectionType {
  collectionName: 'cr_publicidadtipo';
  info: {
    displayName: 'CR_PublicidadTipo';
    pluralName: 'cr-publicidadtipos';
    singularName: 'cr-publicidadtipo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-publicidadtipo.cr-publicidadtipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-publicidadtipo.cr-publicidadtipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrPuntocontrolCrPuntocontrol extends Schema.CollectionType {
  collectionName: 'cr_puntocontrol';
  info: {
    description: '';
    displayName: 'CR_PuntoControl';
    pluralName: 'cr-puntocontrols';
    singularName: 'cr-puntocontrol';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    comienzo_vida_util_version: Attribute.DateTime & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-puntocontrol.cr-puntocontrol',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    espacio_de_nombres: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    exactitud_horizontal: Attribute.Float &
      Attribute.SetMinMax<
        {
          max: 100000;
        },
        number
      >;
    fin_vida_util_version: Attribute.DateTime;
    geometria: Attribute.JSON &
      Attribute.Required &
      Attribute.CustomField<'plugin::postgis.map'>;
    id_punto_control: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    local_id: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    metodoproduccion: Attribute.Relation<
      'api::cr-puntocontrol.cr-puntocontrol',
      'oneToOne',
      'api::col-metodoproducciontipo.col-metodoproducciontipo'
    >;
    posicion_interpolacion: Attribute.Relation<
      'api::cr-puntocontrol.cr-puntocontrol',
      'oneToOne',
      'api::col-interpolaciontipo.col-interpolaciontipo'
    >;
    puntotipo: Attribute.Relation<
      'api::cr-puntocontrol.cr-puntocontrol',
      'oneToOne',
      'api::col-puntotipo.col-puntotipo'
    >;
    tipo_punto_control: Attribute.Relation<
      'api::cr-puntocontrol.cr-puntocontrol',
      'oneToOne',
      'api::cr-puntocontroltipo.cr-puntocontroltipo'
    >;
    ue_cr_terreno: Attribute.Relation<
      'api::cr-puntocontrol.cr-puntocontrol',
      'oneToOne',
      'api::cr-terreno.cr-terreno'
    >;
    ue_cr_unidadconstruccion: Attribute.Relation<
      'api::cr-puntocontrol.cr-puntocontrol',
      'oneToOne',
      'api::cr-unidadconstruccion.cr-unidadconstruccion'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-puntocontrol.cr-puntocontrol',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrPuntocontroltipoCrPuntocontroltipo
  extends Schema.CollectionType {
  collectionName: 'cr_puntocontroltipo';
  info: {
    displayName: 'CR_PuntoControlTipo';
    pluralName: 'cr-puntocontroltipos';
    singularName: 'cr-puntocontroltipo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-puntocontroltipo.cr-puntocontroltipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-puntocontroltipo.cr-puntocontroltipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrPuntolinderoCrPuntolindero extends Schema.CollectionType {
  collectionName: 'cr_puntolindero';
  info: {
    description: '';
    displayName: 'CR_PuntoLindero';
    pluralName: 'cr-puntolinderos';
    singularName: 'cr-puntolindero';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    comienzo_vida_util_version: Attribute.DateTime & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-puntolindero.cr-puntolindero',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    desacuerdo: Attribute.Boolean & Attribute.Required;
    espacio_de_nombres: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    exactitud_horizontal: Attribute.Float &
      Attribute.SetMinMax<
        {
          max: 100000;
        },
        number
      >;
    fin_vida_util_version: Attribute.DateTime;
    fotoidentificacion: Attribute.Relation<
      'api::cr-puntolindero.cr-puntolindero',
      'oneToOne',
      'api::cr-fotoidentificaciontipo.cr-fotoidentificaciontipo'
    >;
    geometria: Attribute.JSON &
      Attribute.Required &
      Attribute.CustomField<'plugin::postgis.map'>;
    id_punto_lindero: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    local_id: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    metodoproduccion: Attribute.Relation<
      'api::cr-puntolindero.cr-puntolindero',
      'oneToOne',
      'api::col-metodoproducciontipo.col-metodoproducciontipo'
    >;
    posicion_interpolacion: Attribute.Relation<
      'api::cr-puntolindero.cr-puntolindero',
      'oneToOne',
      'api::col-interpolaciontipo.col-interpolaciontipo'
    >;
    puntotipo: Attribute.Relation<
      'api::cr-puntolindero.cr-puntolindero',
      'oneToOne',
      'api::col-puntotipo.col-puntotipo'
    >;
    ue_cr_terreno: Attribute.Relation<
      'api::cr-puntolindero.cr-puntolindero',
      'oneToOne',
      'api::cr-terreno.cr-terreno'
    >;
    ue_cr_unidadconstruccion: Attribute.Relation<
      'api::cr-puntolindero.cr-puntolindero',
      'oneToOne',
      'api::cr-unidadconstruccion.cr-unidadconstruccion'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-puntolindero.cr-puntolindero',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrResponsabilidadCrResponsabilidad
  extends Schema.CollectionType {
  collectionName: 'cr_responsabilidad';
  info: {
    displayName: 'CR_Responsabilidad';
    pluralName: 'cr-responsabilidads';
    singularName: 'cr-responsabilidad';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    codigo_naturaleza_juridica: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 5;
      }>;
    comienzo_vida_util_version: Attribute.DateTime & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-responsabilidad.cr-responsabilidad',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    espacio_de_nombres: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    fecha_anotacion: Attribute.Date;
    fin_vida_util_version: Attribute.DateTime;
    interesado_cr_agrupacioninteresados: Attribute.Relation<
      'api::cr-responsabilidad.cr-responsabilidad',
      'oneToOne',
      'api::cr-agrupacioninteresado.cr-agrupacioninteresado'
    >;
    interesado_cr_interesado: Attribute.Relation<
      'api::cr-responsabilidad.cr-responsabilidad',
      'oneToOne',
      'api::cr-interesado.cr-interesado'
    >;
    local_id: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    naturaleza_complemento: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    naturaleza_juridica: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    tipo: Attribute.Relation<
      'api::cr-responsabilidad.cr-responsabilidad',
      'oneToOne',
      'api::cr-responsabilidadtipo.cr-responsabilidadtipo'
    >;
    unidad: Attribute.Relation<
      'api::cr-responsabilidad.cr-responsabilidad',
      'oneToOne',
      'api::cr-predio.cr-predio'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-responsabilidad.cr-responsabilidad',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrResponsabilidadtipoCrResponsabilidadtipo
  extends Schema.CollectionType {
  collectionName: 'cr_responsabilidadtipo';
  info: {
    displayName: 'CR_ResponsabilidadTipo';
    pluralName: 'cr-responsabilidadtipos';
    singularName: 'cr-responsabilidadtipo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-responsabilidadtipo.cr-responsabilidadtipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-responsabilidadtipo.cr-responsabilidadtipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrRestriccionCrRestriccion extends Schema.CollectionType {
  collectionName: 'cr_restriccion';
  info: {
    displayName: 'CR_Restriccion';
    pluralName: 'cr-restriccions';
    singularName: 'cr-restriccion';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    codigo_naturaleza_juridica: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 5;
      }>;
    comienzo_vida_util_version: Attribute.DateTime & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-restriccion.cr-restriccion',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    espacio_de_nombres: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    fecha_anotacion: Attribute.Date;
    fin_vida_util_version: Attribute.DateTime;
    interesado_cr_agrupacioninteresados: Attribute.Relation<
      'api::cr-restriccion.cr-restriccion',
      'oneToOne',
      'api::cr-agrupacioninteresado.cr-agrupacioninteresado'
    >;
    interesado_cr_interesado: Attribute.Relation<
      'api::cr-restriccion.cr-restriccion',
      'oneToOne',
      'api::cr-interesado.cr-interesado'
    >;
    local_id: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    naturaleza_complemento: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    naturaleza_juridica: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    tipo: Attribute.Relation<
      'api::cr-restriccion.cr-restriccion',
      'oneToOne',
      'api::cr-restricciontipo.cr-restricciontipo'
    >;
    unidad: Attribute.Relation<
      'api::cr-restriccion.cr-restriccion',
      'oneToOne',
      'api::cr-predio.cr-predio'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-restriccion.cr-restriccion',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrRestricciontipoCrRestricciontipo
  extends Schema.CollectionType {
  collectionName: 'cr_restricciontipo';
  info: {
    displayName: 'CR_RestriccionTipo';
    pluralName: 'cr-restricciontipos';
    singularName: 'cr-restricciontipo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-restricciontipo.cr-restricciontipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-restricciontipo.cr-restricciontipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrSexotipoCrSexotipo extends Schema.CollectionType {
  collectionName: 'cr_sexotipo';
  info: {
    displayName: 'CR_SexoTipo';
    pluralName: 'cr-sexotipos';
    singularName: 'cr-sexotipo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-sexotipo.cr-sexotipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-sexotipo.cr-sexotipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrTerrenoCrTerreno extends Schema.CollectionType {
  collectionName: 'cr_terreno';
  info: {
    displayName: 'CR_Terreno';
    pluralName: 'cr-terrenos';
    singularName: 'cr-terreno';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    comienzo_vida_util_version: Attribute.DateTime & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-terreno.cr-terreno',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    espacio_de_nombres: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    etiqueta: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    fin_vida_util_version: Attribute.DateTime;
    geometria: Attribute.JSON &
      Attribute.Required &
      Attribute.CustomField<'plugin::postgis.map'>;
    local_id: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    relacion_superficie: Attribute.Relation<
      'api::cr-terreno.cr-terreno',
      'oneToOne',
      'api::col-relacionsuperficietipo.col-relacionsuperficietipo'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-terreno.cr-terreno',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrTramitecatastralCrTramitecatastral
  extends Schema.CollectionType {
  collectionName: 'cr_tramitecatastral';
  info: {
    description: '';
    displayName: 'CR_TramiteCatastral';
    pluralName: 'cr-tramitecatastrals';
    singularName: 'cr-tramitecatastral';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    clasificacion_mutacion: Attribute.Relation<
      'api::cr-tramitecatastral.cr-tramitecatastral',
      'oneToOne',
      'api::cr-mutaciontipo.cr-mutaciontipo'
    > &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-tramitecatastral.cr-tramitecatastral',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    fecha_inscripcion: Attribute.Date & Attribute.Required;
    fecha_radicacion: Attribute.Date & Attribute.Required;
    fecha_resolucion: Attribute.Date & Attribute.Required;
    numero_resolucion: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-tramitecatastral.cr-tramitecatastral',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrUnidadconstruccionCrUnidadconstruccion
  extends Schema.CollectionType {
  collectionName: 'cr_unidadconstruccion';
  info: {
    description: '';
    displayName: 'CR_UnidadConstruccion';
    pluralName: 'cr-unidadconstruccions';
    singularName: 'cr-unidadconstruccion';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    altura: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 1000;
          min: 0;
        },
        number
      >;
    comienzo_vida_util_version: Attribute.DateTime & Attribute.Required;
    cr_caracteristicasuc: Attribute.Relation<
      'api::cr-unidadconstruccion.cr-unidadconstruccion',
      'oneToOne',
      'api::cr-caracteristicasuc.cr-caracteristicasuc'
    > &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-unidadconstruccion.cr-unidadconstruccion',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    espacio_de_nombres: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    etiqueta: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    fin_vida_util_version: Attribute.DateTime;
    geometria: Attribute.JSON &
      Attribute.Required &
      Attribute.CustomField<'plugin::postgis.map'>;
    local_id: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    planta_ubicacion: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 300;
          min: 0;
        },
        number
      >;
    relacion_superficie: Attribute.Relation<
      'api::cr-unidadconstruccion.cr-unidadconstruccion',
      'oneToOne',
      'api::col-relacionsuperficietipo.col-relacionsuperficietipo'
    >;
    tipo_planta: Attribute.Relation<
      'api::cr-unidadconstruccion.cr-unidadconstruccion',
      'oneToOne',
      'api::cr-construccionplantatipo.cr-construccionplantatipo'
    > &
      Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-unidadconstruccion.cr-unidadconstruccion',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrUnidadconstrucciontipoCrUnidadconstrucciontipo
  extends Schema.CollectionType {
  collectionName: 'cr_unidadconstrucciontipo';
  info: {
    displayName: 'CR_UnidadConstruccionTipo';
    pluralName: 'cr-unidadconstrucciontipos';
    singularName: 'cr-unidadconstrucciontipo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-unidadconstrucciontipo.cr-unidadconstrucciontipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-unidadconstrucciontipo.cr-unidadconstrucciontipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrUsouconstipoCrUsouconstipo extends Schema.CollectionType {
  collectionName: 'cr_usouconstipo';
  info: {
    description: '';
    displayName: 'CR_UsoUConsTipo';
    pluralName: 'cr-usouconstipos';
    singularName: 'cr-usouconstipo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cr-usouconstipo.cr-usouconstipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cr-usouconstipo.cr-usouconstipo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiExtarchivoExtarchivo extends Schema.CollectionType {
  collectionName: 'extarchivo';
  info: {
    displayName: 'ExtArchivo';
    pluralName: 'extarchivos';
    singularName: 'extarchivo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    cr_fuenteadministrtiva_ext_archivo_id: Attribute.Relation<
      'api::extarchivo.extarchivo',
      'oneToOne',
      'api::cr-fuenteadministrativa.cr-fuenteadministrativa'
    >;
    cr_fuenteespacial_ext_archivo_id: Attribute.Relation<
      'api::extarchivo.extarchivo',
      'oneToOne',
      'api::cr-fuenteespacial.cr-fuenteespacial'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::extarchivo.extarchivo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    datos: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    espacio_de_nombres: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    extraccion: Attribute.Date;
    fecha_aceptacion: Attribute.Date;
    fecha_entrega: Attribute.Date;
    fecha_grabacion: Attribute.Date;
    local_id: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::extarchivo.extarchivo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiExtdireccionClaseViaPrincipalExtdireccionClaseViaPrincipal
  extends Schema.CollectionType {
  collectionName: 'extdireccion_clase_via_principal';
  info: {
    displayName: 'extdireccion_clase_via_principal';
    pluralName: 'extdireccion-clase-via-principals';
    singularName: 'extdireccion-clase-via-principal';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::extdireccion-clase-via-principal.extdireccion-clase-via-principal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::extdireccion-clase-via-principal.extdireccion-clase-via-principal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiExtdireccionSectorCiudadExtdireccionSectorCiudad
  extends Schema.CollectionType {
  collectionName: 'extdireccion_sector_ciudad';
  info: {
    displayName: 'extdireccion_sector_ciudad';
    pluralName: 'extdireccion-sector-ciudads';
    singularName: 'extdireccion-sector-ciudad';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::extdireccion-sector-ciudad.extdireccion-sector-ciudad',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::extdireccion-sector-ciudad.extdireccion-sector-ciudad',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiExtdireccionSectorPredioExtdireccionSectorPredio
  extends Schema.CollectionType {
  collectionName: 'extdireccion_sector_predio';
  info: {
    displayName: 'extdireccion_sector_predio';
    pluralName: 'extdireccion-sector-predios';
    singularName: 'extdireccion-sector-predio';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::extdireccion-sector-predio.extdireccion-sector-predio',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::extdireccion-sector-predio.extdireccion-sector-predio',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiExtdireccionTipoDireccionExtdireccionTipoDireccion
  extends Schema.CollectionType {
  collectionName: 'extdireccion_tipo_direccion';
  info: {
    displayName: 'extdireccion_tipo_direccion';
    pluralName: 'extdireccion-tipo-direccions';
    singularName: 'extdireccion-tipo-direccion';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::extdireccion-tipo-direccion.extdireccion-tipo-direccion',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descripcion: Attribute.Text &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    descripcion_vista: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1024;
      }>;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    nombre_vista: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::extdireccion-tipo-direccion.extdireccion-tipo-direccion',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiExtdireccionExtdireccion extends Schema.CollectionType {
  collectionName: 'extdireccion';
  info: {
    description: '';
    displayName: 'ExtDireccion';
    pluralName: 'extdireccions';
    singularName: 'extdireccion';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    clase_via_principal: Attribute.Relation<
      'api::extdireccion.extdireccion',
      'oneToOne',
      'api::extdireccion-clase-via-principal.extdireccion-clase-via-principal'
    >;
    codigo_postal: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 6;
      }>;
    complemento: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    cr_predio_direccion: Attribute.Relation<
      'api::extdireccion.extdireccion',
      'oneToOne',
      'api::cr-predio.cr-predio'
    >;
    cr_terreno_ext_direccion_id: Attribute.Relation<
      'api::extdireccion.extdireccion',
      'oneToOne',
      'api::cr-terreno.cr-terreno'
    >;
    cr_uc_ext_direccion_id: Attribute.Relation<
      'api::extdireccion.extdireccion',
      'oneToOne',
      'api::cr-unidadconstruccion.cr-unidadconstruccion'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::extdireccion.extdireccion',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    es_direccion_principal: Attribute.Boolean;
    extinteresado_ext_direccion_id: Attribute.Relation<
      'api::extdireccion.extdireccion',
      'oneToOne',
      'api::extinteresado.extinteresado'
    >;
    letra_via_generadora: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    letra_via_principal: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    localizacion: Attribute.JSON &
      Attribute.Required &
      Attribute.CustomField<'plugin::postgis.map'>;
    nombre_predio: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    numero_predio: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    sector_ciudad: Attribute.Relation<
      'api::extdireccion.extdireccion',
      'oneToOne',
      'api::extdireccion-sector-ciudad.extdireccion-sector-ciudad'
    >;
    sector_predio: Attribute.Relation<
      'api::extdireccion.extdireccion',
      'oneToOne',
      'api::extdireccion-sector-predio.extdireccion-sector-predio'
    >;
    tipo_direccion: Attribute.Relation<
      'api::extdireccion.extdireccion',
      'oneToOne',
      'api::extdireccion-tipo-direccion.extdireccion-tipo-direccion'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::extdireccion.extdireccion',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    valor_via_generadora: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    valor_via_principal: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface ApiExtinteresadoExtinteresado extends Schema.CollectionType {
  collectionName: 'extinteresado';
  info: {
    displayName: 'ExtInteresado';
    pluralName: 'extinteresados';
    singularName: 'extinteresado';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    cr_agrupacionintersdos_ext_pid: Attribute.Relation<
      'api::extinteresado.extinteresado',
      'oneToOne',
      'api::cr-agrupacioninteresado.cr-agrupacioninteresado'
    >;
    cr_interesado_ext_pid: Attribute.Relation<
      'api::extinteresado.extinteresado',
      'oneToOne',
      'api::cr-interesado.cr-interesado'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::extinteresado.extinteresado',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    documento_escaneado: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    firma: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 2000;
      }>;
    fotografia: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 2000;
      }>;
    huella_dactilar: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 2000;
      }>;
    nombre: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::extinteresado.extinteresado',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFormForm extends Schema.CollectionType {
  collectionName: 'forms';
  info: {
    description: '';
    displayName: 'Form';
    pluralName: 'forms';
    singularName: 'form';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::form.form', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    description: Attribute.Text & Attribute.Required;
    identifier: Attribute.UID<'api::form.form', 'name'> & Attribute.Required;
    inputs: Attribute.Component<'formulario.entrada', true>;
    name: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::form.form', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    version: Attribute.String & Attribute.Required;
  };
}

export interface ApiSolicitudSolicitud extends Schema.CollectionType {
  collectionName: 'solicitudes';
  info: {
    displayName: 'Solicitud';
    pluralName: 'solicitudes';
    singularName: 'solicitud';
  };
  options: {
    draftAndPublish: false;
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
    cr_interesado: Attribute.Relation<
      'api::solicitud.solicitud',
      'oneToOne',
      'api::cr-interesado.cr-interesado'
    >;
    cr_lindero: Attribute.Relation<
      'api::solicitud.solicitud',
      'oneToOne',
      'api::cr-lindero.cr-lindero'
    >;
    cr_predio: Attribute.Relation<
      'api::solicitud.solicitud',
      'oneToOne',
      'api::cr-predio.cr-predio'
    >;
    cr_terreno: Attribute.Relation<
      'api::solicitud.solicitud',
      'oneToOne',
      'api::cr-terreno.cr-terreno'
    >;
    cr_unidadconstruccion: Attribute.Relation<
      'api::solicitud.solicitud',
      'oneToOne',
      'api::cr-unidadconstruccion.cr-unidadconstruccion'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::solicitud.solicitud',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::solicitud.solicitud',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    timezone: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    isEntryValid: Attribute.Boolean;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Attribute.String;
    caption: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    ext: Attribute.String;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    height: Attribute.Integer;
    mime: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    size: Attribute.Decimal & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url: Attribute.String & Attribute.Required;
    width: Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    type: Attribute.String & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    autoreconocimientocampesino: Attribute.Boolean & Attribute.Required;
    autoreconocimientoetnico: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'api::cr-autoreconocimientoetnicotipo.cr-autoreconocimientoetnicotipo'
    > &
      Attribute.Required;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    numero_documento: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    primer_apellido: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    primer_nombre: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    provider: Attribute.String;
    razon_social: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    segundo_apellido: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    segundo_nombre: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    sexo: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'api::cr-sexotipo.cr-sexotipo'
    > &
      Attribute.Required;
    tipo_documento: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'api::col-documentotipo.col-documentotipo'
    > &
      Attribute.Required;
    tipo_interesado: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'api::col-interesadotipo.col-interesadotipo'
    > &
      Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::col-areatipo.col-areatipo': ApiColAreatipoColAreatipo;
      'api::col-areavalor.col-areavalor': ApiColAreavalorColAreavalor;
      'api::col-baunitcomointeresado.col-baunitcomointeresado': ApiColBaunitcomointeresadoColBaunitcomointeresado;
      'api::col-baunitfuente.col-baunitfuente': ApiColBaunitfuenteColBaunitfuente;
      'api::col-cclfuente.col-cclfuente': ApiColCclfuenteColCclfuente;
      'api::col-documentotipo.col-documentotipo': ApiColDocumentotipoColDocumentotipo;
      'api::col-estadodisponibilidadtipo.col-estadodisponibilidadtipo': ApiColEstadodisponibilidadtipoColEstadodisponibilidadtipo;
      'api::col-formatotipo.col-formatotipo': ApiColFormatotipoColFormatotipo;
      'api::col-fuenteadministrativatipo.col-fuenteadministrativatipo': ApiColFuenteadministrativatipoColFuenteadministrativatipo;
      'api::col-fuenteespacialtipo.col-fuenteespacialtipo': ApiColFuenteespacialtipoColFuenteespacialtipo;
      'api::col-grupointeresadotipo.col-grupointeresadotipo': ApiColGrupointeresadotipoColGrupointeresadotipo;
      'api::col-interesadotipo.col-interesadotipo': ApiColInteresadotipoColInteresadotipo;
      'api::col-interpolaciontipo.col-interpolaciontipo': ApiColInterpolaciontipoColInterpolaciontipo;
      'api::col-masccl.col-masccl': ApiColMascclColMasccl;
      'api::col-menosccl.col-menosccl': ApiColMenoscclColMenosccl;
      'api::col-metodoproducciontipo.col-metodoproducciontipo': ApiColMetodoproducciontipoColMetodoproducciontipo;
      'api::col-puntoccl.col-puntoccl': ApiColPuntocclColPuntoccl;
      'api::col-puntofuente.col-puntofuente': ApiColPuntofuenteColPuntofuente;
      'api::col-puntotipo.col-puntotipo': ApiColPuntotipoColPuntotipo;
      'api::col-relacionsuperficietipo.col-relacionsuperficietipo': ApiColRelacionsuperficietipoColRelacionsuperficietipo;
      'api::col-responsablefuente.col-responsablefuente': ApiColResponsablefuenteColResponsablefuente;
      'api::col-rrrfuente.col-rrrfuente': ApiColRrrfuenteColRrrfuente;
      'api::col-uebaunit.col-uebaunit': ApiColUebaunitColUebaunit;
      'api::col-uefuente.col-uefuente': ApiColUefuenteColUefuente;
      'api::col-unidadadministrativabasicatipo.col-unidadadministrativabasicatipo': ApiColUnidadadministrativabasicatipoColUnidadadministrativabasicatipo;
      'api::col-unidadfuente.col-unidadfuente': ApiColUnidadfuenteColUnidadfuente;
      'api::cr-agrupacioninteresado.cr-agrupacioninteresado': ApiCrAgrupacioninteresadoCrAgrupacioninteresado;
      'api::cr-anotacionregistro.cr-anotacionregistro': ApiCrAnotacionregistroCrAnotacionregistro;
      'api::cr-autoreconocimientoetnicotipo.cr-autoreconocimientoetnicotipo': ApiCrAutoreconocimientoetnicotipoCrAutoreconocimientoetnicotipo;
      'api::cr-caracteristicasuc.cr-caracteristicasuc': ApiCrCaracteristicasucCrCaracteristicasuc;
      'api::cr-condicionprediotipo.cr-condicionprediotipo': ApiCrCondicionprediotipoCrCondicionprediotipo;
      'api::cr-construccionplantatipo.cr-construccionplantatipo': ApiCrConstruccionplantatipoCrConstruccionplantatipo;
      'api::cr-datosmatriz.cr-datosmatriz': ApiCrDatosmatrizCrDatosmatriz;
      'api::cr-derecho.cr-derecho': ApiCrDerechoCrDerecho;
      'api::cr-derechotipo.cr-derechotipo': ApiCrDerechotipoCrDerechotipo;
      'api::cr-destinacioneconomicatipo.cr-destinacioneconomicatipo': ApiCrDestinacioneconomicatipoCrDestinacioneconomicatipo;
      'api::cr-errsa-tipo-referencia.cr-errsa-tipo-referencia': ApiCrErrsaTipoReferenciaCrErrsaTipoReferencia;
      'api::cr-errsa.cr-errsa': ApiCrErrsaCrErrsa;
      'api::cr-estadoanotaciontipo.cr-estadoanotaciontipo': ApiCrEstadoanotaciontipoCrEstadoanotaciontipo;
      'api::cr-estadofmitipo.cr-estadofmitipo': ApiCrEstadofmitipoCrEstadofmitipo;
      'api::cr-estadotipo.cr-estadotipo': ApiCrEstadotipoCrEstadotipo;
      'api::cr-estrucavalcarac.cr-estrucavalcarac': ApiCrEstrucavalcaracCrEstrucavalcarac;
      'api::cr-estrucavalinter.cr-estrucavalinter': ApiCrEstrucavalinterCrEstrucavalinter;
      'api::cr-estrucmatrisegre.cr-estrucmatrisegre': ApiCrEstrucmatrisegreCrEstrucmatrisegre;
      'api::cr-estrucpredmatrinpn.cr-estrucpredmatrinpn': ApiCrEstrucpredmatrinpnCrEstrucpredmatrinpn;
      'api::cr-estrucpredorinpn.cr-estrucpredorinpn': ApiCrEstrucpredorinpnCrEstrucpredorinpn;
      'api::cr-estructuraalertapredio.cr-estructuraalertapredio': ApiCrEstructuraalertapredioCrEstructuraalertapredio;
      'api::cr-estructuraavaluo.cr-estructuraavaluo': ApiCrEstructuraavaluoCrEstructuraavaluo;
      'api::cr-estructuramatriculamatriz.cr-estructuramatriculamatriz': ApiCrEstructuramatriculamatrizCrEstructuramatriculamatriz;
      'api::cr-estructuraprocedimientocr.cr-estructuraprocedimientocr': ApiCrEstructuraprocedimientocrCrEstructuraprocedimientocr;
      'api::cr-fotoidentificaciontipo.cr-fotoidentificaciontipo': ApiCrFotoidentificaciontipoCrFotoidentificaciontipo;
      'api::cr-fuenteadministrativa.cr-fuenteadministrativa': ApiCrFuenteadministrativaCrFuenteadministrativa;
      'api::cr-fuenteespacial.cr-fuenteespacial': ApiCrFuenteespacialCrFuenteespacial;
      'api::cr-hipoteca.cr-hipoteca': ApiCrHipotecaCrHipoteca;
      'api::cr-hipotecaderecho.cr-hipotecaderecho': ApiCrHipotecaderechoCrHipotecaderecho;
      'api::cr-informalidad.cr-informalidad': ApiCrInformalidadCrInformalidad;
      'api::cr-informalidadtipo.cr-informalidadtipo': ApiCrInformalidadtipoCrInformalidadtipo;
      'api::cr-interesado.cr-interesado': ApiCrInteresadoCrInteresado;
      'api::cr-lindero.cr-lindero': ApiCrLinderoCrLindero;
      'api::cr-mutaciontipo.cr-mutaciontipo': ApiCrMutaciontipoCrMutaciontipo;
      'api::cr-predio-copropiedad.cr-predio-copropiedad': ApiCrPredioCopropiedadCrPredioCopropiedad;
      'api::cr-predio-tramitecatastral.cr-predio-tramitecatastral': ApiCrPredioTramitecatastralCrPredioTramitecatastral;
      'api::cr-predio.cr-predio': ApiCrPredioCrPredio;
      'api::cr-predioinformalidad.cr-predioinformalidad': ApiCrPredioinformalidadCrPredioinformalidad;
      'api::cr-prediotipo.cr-prediotipo': ApiCrPrediotipoCrPrediotipo;
      'api::cr-procedimientocatastralregistraltipo.cr-procedimientocatastralregistraltipo': ApiCrProcedimientocatastralregistraltipoCrProcedimientocatastralregistraltipo;
      'api::cr-publicidad.cr-publicidad': ApiCrPublicidadCrPublicidad;
      'api::cr-publicidadfuente.cr-publicidadfuente': ApiCrPublicidadfuenteCrPublicidadfuente;
      'api::cr-publicidadtipo.cr-publicidadtipo': ApiCrPublicidadtipoCrPublicidadtipo;
      'api::cr-puntocontrol.cr-puntocontrol': ApiCrPuntocontrolCrPuntocontrol;
      'api::cr-puntocontroltipo.cr-puntocontroltipo': ApiCrPuntocontroltipoCrPuntocontroltipo;
      'api::cr-puntolindero.cr-puntolindero': ApiCrPuntolinderoCrPuntolindero;
      'api::cr-responsabilidad.cr-responsabilidad': ApiCrResponsabilidadCrResponsabilidad;
      'api::cr-responsabilidadtipo.cr-responsabilidadtipo': ApiCrResponsabilidadtipoCrResponsabilidadtipo;
      'api::cr-restriccion.cr-restriccion': ApiCrRestriccionCrRestriccion;
      'api::cr-restricciontipo.cr-restricciontipo': ApiCrRestricciontipoCrRestricciontipo;
      'api::cr-sexotipo.cr-sexotipo': ApiCrSexotipoCrSexotipo;
      'api::cr-terreno.cr-terreno': ApiCrTerrenoCrTerreno;
      'api::cr-tramitecatastral.cr-tramitecatastral': ApiCrTramitecatastralCrTramitecatastral;
      'api::cr-unidadconstruccion.cr-unidadconstruccion': ApiCrUnidadconstruccionCrUnidadconstruccion;
      'api::cr-unidadconstrucciontipo.cr-unidadconstrucciontipo': ApiCrUnidadconstrucciontipoCrUnidadconstrucciontipo;
      'api::cr-usouconstipo.cr-usouconstipo': ApiCrUsouconstipoCrUsouconstipo;
      'api::extarchivo.extarchivo': ApiExtarchivoExtarchivo;
      'api::extdireccion-clase-via-principal.extdireccion-clase-via-principal': ApiExtdireccionClaseViaPrincipalExtdireccionClaseViaPrincipal;
      'api::extdireccion-sector-ciudad.extdireccion-sector-ciudad': ApiExtdireccionSectorCiudadExtdireccionSectorCiudad;
      'api::extdireccion-sector-predio.extdireccion-sector-predio': ApiExtdireccionSectorPredioExtdireccionSectorPredio;
      'api::extdireccion-tipo-direccion.extdireccion-tipo-direccion': ApiExtdireccionTipoDireccionExtdireccionTipoDireccion;
      'api::extdireccion.extdireccion': ApiExtdireccionExtdireccion;
      'api::extinteresado.extinteresado': ApiExtinteresadoExtinteresado;
      'api::form.form': ApiFormForm;
      'api::solicitud.solicitud': ApiSolicitudSolicitud;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
