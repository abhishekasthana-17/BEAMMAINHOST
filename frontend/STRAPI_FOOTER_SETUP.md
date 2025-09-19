# Strapi Footer Setup Guide

## Overview

The `StrapiFooter` component allows you to manage the website footer content dynamically through Strapi CMS. This includes partners, quick links, social media links, and other footer content without needing to modify code.

## Implementation Status

✅ **Completed:**

- `StrapiFooter` component created with full functionality
- Fallback content ensures the footer always displays correctly
- Strapi service integration (`getFooter` function)
- Component exports updated to use StrapiFooter by default

## Strapi Content Structure Setup

You need to create a **Single Type** called "Footer" in your Strapi admin panel with the following structure:

### 1. Create Single Type: "Footer"

Navigate to **Content-Types Builder** → **Create new single type** → Name: "Footer"

### 2. Add the following fields:

#### Basic Text Fields:

- **newsletterTitle** (Text) - Newsletter section title
- **description** (Rich Text or Text) - Company description paragraphs
- **quickLinksTitle** (Text) - Quick links section title
- **downloadTitle** (Text) - Download section title
- **copyrightText** (Text) - Copyright text
- **appStoreUrl** (Text) - App Store download URL
- **googlePlayUrl** (Text) - Google Play download URL

#### Media Field:

- **logo** (Media - Single) - Footer logo image

#### Repeatable Components:

Create the following **Components** first, then add them as repeatable fields:

#### Component: "Partner" (partners)

- **name** (Text) - Partner name
- **image** (Media - Single) - Partner logo
- **altText** (Text) - Alt text for accessibility

#### Component: "Quick Link" (quickLinks)

- **title** (Text) - Link text
- **url** (Text) - Link URL
- **external** (Boolean) - Is external link?

#### Component: "Social Link" (socialLinks)

- **platform** (Text) - Social platform name
- **url** (Text) - Social media URL
- **iconClass** (Text) - FontAwesome icon class (e.g., "fa-brands fa-instagram")

#### Component: "Certification" (certifications)

- **url** (Text) - Certification link URL
- **altText** (Text) - Alt text for certification badge
- **image** (Media - Single) - Certification badge image

### 3. Add Repeatable Components to Footer Single Type:

- **partners** (Component - Repeatable) → Partner
- **quickLinks** (Component - Repeatable) → Quick Link
- **socialLinks** (Component - Repeatable) → Social Link
- **certifications** (Component - Repeatable) → Certification

## Sample Content Structure

Here's an example of how to populate the Footer content:

### Basic Fields:

- **newsletterTitle**: "Newsletter"
- **description**: "BEAM is a marketing platform and digital wallet that processes electronic payments. It operates from smartphones of Consumers/Users who download this application, giving them immediate benefits with every purchase."
- **quickLinksTitle**: "Quick Link"
- **downloadTitle**: "Download BEAM"
- **copyrightText**: "BEAM is a registered trademark of GBC S.A."
- **appStoreUrl**: "https://apps.apple.com/app/beam-wallet"
- **googlePlayUrl**: "https://play.google.com/store/apps/details?id=com.beamwallet"

### Partners (Repeatable):

1. **Partner 1:**

   - name: "Sage"
   - image: [Upload sage logo]
   - altText: "Sage"

2. **Partner 2:**
   - name: "Competir"
   - image: [Upload competir logo]
   - altText: "Competir"

[Continue for all partners...]

### Quick Links (Repeatable):

1. **Link 1:**

   - title: "Blog"
   - url: "https://www.blog.beamwallet.com/"
   - external: true

2. **Link 2:**
   - title: "Help Center"
   - url: "/help-center"
   - external: false

[Continue for all links...]

### Social Links (Repeatable):

1. **Instagram:**

   - platform: "Instagram"
   - url: "https://www.instagram.com/beamwallet/"
   - iconClass: "fa-brands fa-instagram"

2. **Facebook:**
   - platform: "Facebook"
   - url: "https://www.facebook.com/thebeamwallet/"
   - iconClass: "fa-brands fa-facebook-f"

[Continue for all social platforms...]

### Certifications (Repeatable):

1. **PCI Certification:**
   - url: "https://my-pci.usd.de/compliance/2909-2A2C-E055-8FEA-A952-A7AC/details_en.html"
   - altText: "International Certified Domain"
   - image: [Upload certification badge]

## FontAwesome Icon Classes Reference

For social media icons, use these exact classes:

- Instagram: `fa-brands fa-instagram`
- Facebook: `fa-brands fa-facebook-f`
- Twitter/X: `fa-brands fa-x-twitter`
- LinkedIn: `fa-brands fa-linkedin-in`
- YouTube: `fa-brands fa-youtube`
- Medium: `fa-brands fa-medium`
- Telegram: `fa-brands fa-telegram`
- TikTok: `fa-brands fa-tiktok`
- Pinterest: `fa-brands fa-pinterest-p`

## Testing the Setup

1. Create the Footer single type in Strapi
2. Add all the fields and components as described above
3. Populate the content with your desired data
4. Save and publish the Footer content
5. Visit your website - the footer should now display the Strapi content
6. Any changes made in Strapi will automatically reflect on the website

## Fallback Behavior

If Strapi data is unavailable or there's an error:

- The component will show fallback content with the current static data
- This ensures the footer is always functional even if Strapi is down
- A console error will be logged for debugging purposes


✅ **Dynamic Partner Management**: Add/remove partner logos without code changes
✅ **Flexible Quick Links**: Update navigation links through Strapi
✅ **Social Media Control**: Add/remove social platforms as needed
✅ **Content Updates**: Change descriptions, titles, and text content easily
✅ **Team Collaboration**: Non-technical team members can manage footer content
✅ **Internationalization Ready**: Can be extended for multiple languages
✅ **SEO Friendly**: Easy to update footer content for better SEO