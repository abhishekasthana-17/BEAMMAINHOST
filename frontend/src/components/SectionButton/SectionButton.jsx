import React from "react";
import styles from "./SectionButton.module.css";

/**
 * SectionButton component for CTA sections
 * @param {string} subtitle - Pink subtitle text (e.g., "DO YOU WANT TO KNOW MORE ABOUT US?")
 * @param {string} title - Main title text (e.g., "Get in touch")
 * @param {string} buttonText - Text for the button (e.g., "CONTACT US")
 * @param {string} url - URL for the button (can be internal like "/contacts" or external like "https://...")
 * @param {boolean} external - Whether the link is external (opens in new tab)
 * @param {string} className - Additional CSS classes
 */
const SectionButton = ({
  subtitle,
  title,
  buttonText,
  url,
  external = false,
  className = "",
}) => {
  return (
    <div className={`${styles.sectionButton} ${className}`}>
      {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
      {title && <h2 className={styles.title}>{title}</h2>}
      {buttonText && url && (
        <a
          href={url}
          className={styles.button}
          target={external ? "_blank" : "_self"}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {buttonText}
        </a>
      )}
    </div>
  );
};

export default SectionButton;
