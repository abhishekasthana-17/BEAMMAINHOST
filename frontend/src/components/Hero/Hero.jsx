import React from "react";
import styles from "./Hero.module.css";

/**
 * Hero component for creating page banners
 * @param {string} category - Optional category text displayed above title
 * @param {string} title - Main hero title
 * @param {string} description - Description text
 * @param {string} buttonText - Text for the call-to-action button
 * @param {string} buttonUrl - URL for the button
 * @param {string} image - Image URL
 * @param {string} imageClassName - Additional class for the hero image
 * @param {string} imagePosition - Position of image ("left" or "right")
 * @param {string} backgroundColor - Background color class (options: styles.bgPink, styles.bgYellow, styles.bgTeal, styles.bgPurple, styles.bgCharcoal)
 */
const Hero = ({
  category,
  title,
  description,
  buttonText,
  buttonUrl,
  image,
  imageClassName,
  imagePosition = "left",
  backgroundColor,
  children,
}) => {
  return (
    <div className={`${styles.heroContainer} ${backgroundColor || ""}`}>
      <div className={styles.heroContent}>
        {image && (
          <div className={`${styles.heroImage} ${styles[imagePosition]}`}>
            <img
              src={image}
              alt={title || "Hero image"}
              className={imageClassName || ""}
            />
          </div>
        )}
        <div className={styles.heroTextContainer}>
          {category && <div className={styles.heroCategory}>{category}</div>}

          {title && <h1 className={styles.heroTitle}>{title}</h1>}
          {description && (
            <div className={styles.heroDescription}>{description}</div>
          )}
          {buttonText && (
            <a href={buttonUrl} className={styles.heroButton}>
              {buttonText}
            </a>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Hero;
