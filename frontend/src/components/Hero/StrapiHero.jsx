import React from "react";
import Hero from "./Hero"; // Assuming this is your "dumb" Hero component
import styles from "./Hero.module.css"; // Import styles for background color mapping

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

/**
 * A "dumb" component that receives its content directly via props from a parent component (like StrapiPage).
 * It is responsible for rendering the hero section based on the provided content.
 */
const StrapiHero = ({ defaultContent }) => {
  if (!defaultContent) {
    return <div className="error">Hero content is missing.</div>;
  }

  // Strapi v4/v5 returns image data within a 'data.attributes' object.
  let imageUrl = null;
  if (defaultContent.backgroundImage && defaultContent.backgroundImage.data) {
    const { url } = defaultContent.backgroundImage.data.attributes;
    imageUrl = url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
  }

  // Map Strapi background color to CSS module class
  const getBackgroundColorClass = (bgColor) => {
    const colorMap = {
      "bg-pink": styles.bgPink,
      "bg-teal": styles.bgTeal,
      "bg-yellow": styles.bgYellow,
      "bg-purple": styles.bgPurple,
      "bg-charcoal": styles.bgCharcoal,
      default: "",
    };
    return colorMap[bgColor] || "";
  };

  // Build hero props from the defaultContent
  const heroProps = {
    title: defaultContent.title || "",
    description: defaultContent.description || "",
    image: imageUrl,
    backgroundColor: getBackgroundColorClass(defaultContent.backgroundColor),
    primaryButton: defaultContent.primaryButton,
    secondaryButton: defaultContent.secondaryButton,
  };

  return <Hero {...heroProps} />;
};

export default StrapiHero;
