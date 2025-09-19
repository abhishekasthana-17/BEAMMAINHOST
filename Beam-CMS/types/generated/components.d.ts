import type { Schema, Struct } from '@strapi/strapi';

export interface CertificationsCertification extends Struct.ComponentSchema {
  collectionName: 'components_certifications_certifications';
  info: {
    displayName: 'Certification';
    icon: 'certificate';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ContentHero extends Struct.ComponentSchema {
  collectionName: 'components_content_heroes';
  info: {
    description: 'Hero section with title, subtitle, description, background and CTAs';
    displayName: 'Hero';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'default'>;
    backgroundImage: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Text;
    primaryButton: Schema.Attribute.Component<'ui.button', false>;
    secondaryButton: Schema.Attribute.Component<'ui.button', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentSection extends Struct.ComponentSchema {
  collectionName: 'components_content_sections';
  info: {
    description: 'Flexible content section with title, rich content, image and layout options';
    displayName: 'Section';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'white'>;
    buttons: Schema.Attribute.Component<'ui.button', true>;
    content: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    imagePosition: Schema.Attribute.Enumeration<
      ['left', 'right', 'center', 'top', 'bottom']
    > &
      Schema.Attribute.DefaultTo<'right'>;
    layout: Schema.Attribute.Enumeration<
      ['default', 'centered', 'full-width', 'two-column', 'three-column']
    > &
      Schema.Attribute.DefaultTo<'default'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ContentSectionButton extends Struct.ComponentSchema {
  collectionName: 'components_content_section_buttons';
  info: {
    description: '';
    displayName: 'SectionButton';
    icon: 'envelop';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface HeroHero extends Struct.ComponentSchema {
  collectionName: 'components_hero_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<['Pink', 'Yellow', 'Teal']> &
      Schema.Attribute.DefaultTo<'Pink'>;
    buttonText: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.String;
    category: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageAlt: Schema.Attribute.String;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PartnerPartner extends Struct.ComponentSchema {
  collectionName: 'components_partner_partners';
  info: {
    displayName: 'Partner';
    icon: 'hand-holding-heart';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface QuickLinksQuickLink extends Struct.ComponentSchema {
  collectionName: 'components_quick_links_quick_links';
  info: {
    displayName: 'Quick Link';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionSection extends Struct.ComponentSchema {
  collectionName: 'components_section_sections';
  info: {
    description: 'Flexible section component with systematic layout engine';
    displayName: 'Section';
    icon: 'sun';
  };
  attributes: {
    align: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right', 'center']> &
      Schema.Attribute.DefaultTo<'right'>;
    link: Schema.Attribute.String;
    linkText: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    textAlign: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    title: Schema.Attribute.String;
  };
}

export interface SocialLinksSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_social_links_social_links';
  info: {
    displayName: 'Social Link';
    icon: 'earth';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiButton extends Struct.ComponentSchema {
  collectionName: 'components_ui_buttons';
  info: {
    description: '';
    displayName: 'Button';
    icon: 'mouse-pointer';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    style: Schema.Attribute.Enumeration<['primary', 'secondary']> &
      Schema.Attribute.DefaultTo<'primary'>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'certifications.certification': CertificationsCertification;
      'content.hero': ContentHero;
      'content.section': ContentSection;
      'content.section-button': ContentSectionButton;
      'hero.hero': HeroHero;
      'partner.partner': PartnerPartner;
      'quick-links.quick-link': QuickLinksQuickLink;
      'section.section': SectionSection;
      'social-links.social-link': SocialLinksSocialLink;
      'ui.button': UiButton;
    }
  }
}
