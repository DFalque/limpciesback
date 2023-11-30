import type { Schema, Attribute } from '@strapi/strapi';

export interface SeccionesCertificaciones extends Schema.Component {
  collectionName: 'components_secciones_certificaciones';
  info: {
    displayName: 'Certificaciones';
    icon: 'thumbUp';
  };
  attributes: {
    Titulo: Attribute.String;
    Subtitulo: Attribute.String;
    Descripcion: Attribute.Text;
  };
}

export interface SeccionesClientes extends Schema.Component {
  collectionName: 'components_secciones_clientes';
  info: {
    displayName: 'Clientes';
    icon: 'shield';
  };
  attributes: {
    Titulo: Attribute.String;
  };
}

export interface SeccionesGaleriaDeImagenes extends Schema.Component {
  collectionName: 'components_secciones_galeria_de_imagenes';
  info: {
    displayName: 'Galer\u00EDa de Imagenes';
    icon: 'landscape';
    description: '';
  };
  attributes: {};
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'secciones.certificaciones': SeccionesCertificaciones;
      'secciones.clientes': SeccionesClientes;
      'secciones.galeria-de-imagenes': SeccionesGaleriaDeImagenes;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
