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
  collectionName: 'col_areatipos';
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

export interface ApiColDocumentotipoColDocumentotipo
  extends Schema.CollectionType {
  collectionName: 'col_documentotipos';
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
  collectionName: 'col_estadodisponibilidadtipos';
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
  collectionName: 'col_formatotipos';
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
  collectionName: 'col_fuenteadministrativatipos';
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
  collectionName: 'col_fuenteespacialtipos';
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
  collectionName: 'colgrupo_interesadotipos';
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
  collectionName: 'col_interesadotipos';
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
  collectionName: 'col_interpolaciontipos';
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

export interface ApiColMetodoproducciontipoColMetodoproducciontipo
  extends Schema.CollectionType {
  collectionName: 'col_metodoproducciontipos';
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

export interface ApiColPuntotipoColPuntotipo extends Schema.CollectionType {
  collectionName: 'col_puntotipos';
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
  collectionName: 'col_relacionsuperficietipos';
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

export interface ApiColUnidadadministrativabasicatipoColUnidadadministrativabasicatipo
  extends Schema.CollectionType {
  collectionName: 'col_unidadadministrativabasicatipos';
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

export interface ApiCrAutoreconocimientoetnicotipoCrAutoreconocimientoetnicotipo
  extends Schema.CollectionType {
  collectionName: 'cr_autoreconocimientoetnicotipos';
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

export interface ApiCrCondicionprediotipoCrCondicionprediotipo
  extends Schema.CollectionType {
  collectionName: 'cr_condicionprediotipos';
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
  collectionName: 'cr_construccionplantatipos';
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

export interface ApiCrDerechotipoCrDerechotipo extends Schema.CollectionType {
  collectionName: 'cr_derechotipos';
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
  collectionName: 'cr_destinacioneconomicatipos';
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

export interface ApiCrEstadoanotaciontipoCrEstadoanotaciontipo
  extends Schema.CollectionType {
  collectionName: 'cr_estadoanotaciontipos';
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
    timestamps: true;
  };
  attributes: {
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
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    resetPasswordToken: Attribute.String & Attribute.Private;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
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
      'api::col-documentotipo.col-documentotipo': ApiColDocumentotipoColDocumentotipo;
      'api::col-estadodisponibilidadtipo.col-estadodisponibilidadtipo': ApiColEstadodisponibilidadtipoColEstadodisponibilidadtipo;
      'api::col-formatotipo.col-formatotipo': ApiColFormatotipoColFormatotipo;
      'api::col-fuenteadministrativatipo.col-fuenteadministrativatipo': ApiColFuenteadministrativatipoColFuenteadministrativatipo;
      'api::col-fuenteespacialtipo.col-fuenteespacialtipo': ApiColFuenteespacialtipoColFuenteespacialtipo;
      'api::col-grupointeresadotipo.col-grupointeresadotipo': ApiColGrupointeresadotipoColGrupointeresadotipo;
      'api::col-interesadotipo.col-interesadotipo': ApiColInteresadotipoColInteresadotipo;
      'api::col-interpolaciontipo.col-interpolaciontipo': ApiColInterpolaciontipoColInterpolaciontipo;
      'api::col-metodoproducciontipo.col-metodoproducciontipo': ApiColMetodoproducciontipoColMetodoproducciontipo;
      'api::col-puntotipo.col-puntotipo': ApiColPuntotipoColPuntotipo;
      'api::col-relacionsuperficietipo.col-relacionsuperficietipo': ApiColRelacionsuperficietipoColRelacionsuperficietipo;
      'api::col-unidadadministrativabasicatipo.col-unidadadministrativabasicatipo': ApiColUnidadadministrativabasicatipoColUnidadadministrativabasicatipo;
      'api::cr-autoreconocimientoetnicotipo.cr-autoreconocimientoetnicotipo': ApiCrAutoreconocimientoetnicotipoCrAutoreconocimientoetnicotipo;
      'api::cr-condicionprediotipo.cr-condicionprediotipo': ApiCrCondicionprediotipoCrCondicionprediotipo;
      'api::cr-construccionplantatipo.cr-construccionplantatipo': ApiCrConstruccionplantatipoCrConstruccionplantatipo;
      'api::cr-derechotipo.cr-derechotipo': ApiCrDerechotipoCrDerechotipo;
      'api::cr-destinacioneconomicatipo.cr-destinacioneconomicatipo': ApiCrDestinacioneconomicatipoCrDestinacioneconomicatipo;
      'api::cr-estadoanotaciontipo.cr-estadoanotaciontipo': ApiCrEstadoanotaciontipoCrEstadoanotaciontipo;
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
