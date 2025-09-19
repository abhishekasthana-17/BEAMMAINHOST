import React from "react";
import "./Section.css";

{
  /* everything is commented out and its optional choice to use it or not */
}
/* Design to be CMS-friendly and highly reusable */

const Section = ({
  // Content
  subtitle, // Optional small heading above the title
  title, // Main heading
  description, // Text content (string or component)
  secondaryDescription, // Text content (string or component)

  // Layout System
  align = "left", // Options: "center", "left", "right"
  imagePosition = "right", // Options: "center", "left", "right"
  textAlign = "left", // Options: "left", "center", "right"

  // Visual elements
  image, // Main visual (image URL or component)
  imageAlt = "", // Image alt text

  cardStyle = false,
  cardLabel = "",

  // Styling
  backgroundColor, // Background color class or direct value
  textColor, // Text color class or direct value

  // Optional elements
  children, // Additional content to render below description
  actionElement, // Button, link, or other call to action
  decoration, // Additional decorative element (like badge/icon)

  // Additional features
  hasBorder = false,
  hasPlayButton = false, // For video thumbnails
  onPlayButtonClick = null, // Callback function for play button click

  // Container customization
  className = "", // Additional classes
  id = "",
  containerStyle = {}, // Direct style object if needed
}) => {
  // Determine layout class based on align and imagePosition
  const getLayoutClass = () => {
    // If there's no image, use full-width layout
    if (!image) {
      return align === "center" ? "layout-center" : "layout-full-width";
    }

    if (align === "center") {
      return "layout-center";
    }

    // For left/right align with image, create two-column layout
    if (imagePosition === "left") {
      return "layout-two-column layout-image-left";
    } else if (imagePosition === "right") {
      return "layout-two-column layout-image-right";
    } else {
      // Default to center if imagePosition is "center"
      return "layout-center";
    }
  };

  // Build the section classes
  const sectionClasses = [
    "section-container",
    backgroundColor ? `bg-${backgroundColor}` : "",
    textColor ? `text-${textColor}` : "",
    hasBorder ? "has-border" : "",
    cardStyle ? "card-style" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Build content classes
  const contentClasses = [
    "section-content",
    getLayoutClass(),
    `text-align-${textAlign}`, // Add text alignment class
  ]
    .filter(Boolean)
    .join(" ");

  // Render image with proper wrapper and constraints
  const renderImage = () => {
    if (!image) return null;

    return (
      <div className="section-image">
        <div className="image-wrapper" style={{ position: "relative" }}>
          {typeof image === "string" ? (
            <img src={image} alt={imageAlt} />
          ) : (
            image
          )}
          {hasPlayButton && (
            <div
              className="play-button"
              onClick={onPlayButtonClick}
              role="button"
              aria-label="Play video"
              tabIndex="0"
            >
              <div className="play-icon"></div>
            </div>
          )}
        </div>
        {decoration && <div className="decoration">{decoration}</div>}
      </div>
    );
  };

  // Render text content with proper alignment
  const renderTextContent = () => {
    return (
      <div className="section-text-container">
        {cardLabel && <div className="card-label">{cardLabel}</div>}

        {subtitle && (
          <div className={`section-subtitle text-align-${textAlign}`}>
            {subtitle}
          </div>
        )}

        {title && (
          <h2 className={`section-title text-align-${textAlign}`}>{title}</h2>
        )}

        {description && (
          <div className={`section-description text-align-${textAlign}`}>
            {description}
          </div>
        )}

        {actionElement && <div className="section-action">{actionElement}</div>}
      </div>
    );
  };

  return (
    <section className={sectionClasses} id={id} style={containerStyle}>
      <div className={contentClasses}>
        {/* Render text content */}
        {renderTextContent()}

        {/* Render image */}
        {renderImage()}

        {/* Render children if any */}
        {children}
      </div>

      {/* Secondary description always appears below everything, centered */}
      {secondaryDescription && (
        <div className="section-secondary-description">
          {typeof secondaryDescription === "string" ? (
            <p>{secondaryDescription}</p>
          ) : (
            secondaryDescription
          )}
        </div>
      )}
    </section>
  );
};

export default Section;
