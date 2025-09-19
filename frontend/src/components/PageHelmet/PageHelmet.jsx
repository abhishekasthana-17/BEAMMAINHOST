import React from "react";
import { Helmet } from "react-helmet";

const PageHelmet = ({ title, pageName }) => {
  // Map of page names to their respective banner images
  const pageImageMap = {
    home: "/banner-images/home.jpg",
    about: "/banner-images/about_us.jpg",
    investors: "/banner-images/investors.jpg",
    news: "/banner-images/news.jpg",
    "pay-in-store": "/banner-images/pay_store.jpg",
    "pay-online": "/banner-images/pay_online.jpg",
    "local-store": "/banner-images/local_store.jpg",
    "local-partner": "/banner-images/local_partner.jpg",
    banks: "/banner-images/banks.jpg",
    blog: "/banner-images/blog.jpg",
    careers: "/banner-images/careers.jpg",
    contacts: "/banner-images/contacts.jpg",
    "help-center": "/banner-images/help_center.jpg",
    "online-store": "/banner-images/online_store.jpg",
    "privacy-policy": "/banner-images/privacy_policy.jpg",
    "software-partners": "/banner-images/software_partners.jpg",
    "technology-partners": "/banner-images/technology_partners.jpg",
    "terms-conditions": "/banner-images/terms_conditions.jpg",
    "visionary-developers": "/banner-images/visionary_developerss.jpg",
  };

  // Get the image URL for the current page, or default to the home image
  const imageUrl = pageImageMap[pageName] || pageImageMap.home;

  // Get the full image URL (assuming we're running on a domain)
  const siteUrl = window.location.origin;
  const fullImageUrl = `${siteUrl}${imageUrl}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={fullImageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={fullImageUrl} />
    </Helmet>
  );
};

export default PageHelmet;
