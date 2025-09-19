import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./SocialSidebar.module.css";

const SocialSidebar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();
  const currentUrl = window.location.origin + location.pathname;
  const pageTitle = document.title || "Beam Wallet";
  const pagePath = location.pathname.split("/").filter(Boolean).pop() || "home";

  // Get current page name for tooltips
  const getPageName = () => {
    if (pagePath === "home") return "Home";
    return pagePath.charAt(0).toUpperCase() + pagePath.slice(1);
  };

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  // Generate sharing URLs for different platforms
  const getShareUrl = (platform) => {
    const encodedUrl = encodeURIComponent(currentUrl);
    // eslint-disable-next-line no-unused-vars
    const encodedTitle = encodeURIComponent(pageTitle);

    switch (platform) {
      case "instagram":
        return "https://www.instagram.com/beamwallet";
      case "facebook":
        return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
      case "twitter":
        return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${getPageName()}`;
      case "linkedin":
        return `https://www.linkedin.com/feed/?shareActive=true&shareUrl=${encodedUrl}`;
      case "youtube":
        // YouTube doesn't support direct sharing via URL
        return "https://www.youtube.com/@beamwallet";
      case "telegram":
        return `https://t.me/share/url?url=${encodedUrl}&text=${getPageName()} ${currentUrl}`;
      default:
        return "#";
    }
  };

  return (
    <>
      <div
        className={`${styles.socialSidebar} ${isVisible ? "" : styles.hidden}`}
      >
        <a
          href={getShareUrl("instagram")}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialIcon} ${styles.instagram}`}
          aria-label="Share on Instagram"
        >
          <i className="fa-brands fa-instagram"></i>
          <span className={styles.tooltip}>
            Share on Instagram
            <span className={styles.tooltipUrl}>{getPageName()}</span>
          </span>
        </a>
        <a
          href={getShareUrl("facebook")}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialIcon} ${styles.facebook}`}
          aria-label="Share on Facebook"
        >
          <i className="fa-brands fa-facebook-f"></i>
          <span className={styles.tooltip}>
            Share on Facebook
            <span className={styles.tooltipUrl}>{getPageName()}</span>
          </span>
        </a>
        <a
          href={getShareUrl("twitter")}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialIcon} ${styles.twitter}`}
          aria-label="Share on Twitter"
        >
          <i className="fa-brands fa-x-twitter"></i>
          <span className={styles.tooltip}>
            Share on Twitter
            <span className={styles.tooltipUrl}>
              {getPageName()} {currentUrl}
            </span>
          </span>
        </a>
        <a
          href={getShareUrl("linkedin")}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialIcon} ${styles.linkedin}`}
          aria-label="Share on LinkedIn"
        >
          <i className="fa-brands fa-linkedin-in"></i>
          <span className={styles.tooltip}>
            Share on LinkedIn
            <span className={styles.tooltipUrl}>{getPageName()}</span>
          </span>
        </a>
        <a
          href={getShareUrl("youtube")}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialIcon} ${styles.youtube}`}
          aria-label="Watch on YouTube"
        >
          <i className="fa-brands fa-youtube"></i>
          <span className={styles.tooltip}>
            Watch on YouTube
            <span className={styles.tooltipUrl}>{getPageName()}</span>
          </span>
        </a>
        <a
          href={getShareUrl("telegram")}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialIcon} ${styles.telegram}`}
          aria-label="Share on Telegram"
        >
          <i className="fa-brands fa-telegram"></i>
          <span className={styles.tooltip}>
            Share on Telegram
            <span className={styles.tooltipUrl}>
              {getPageName()} {currentUrl}
            </span>
          </span>
        </a>

        {isVisible && (
          <button
            className={styles.toggleButton}
            onClick={toggleSidebar}
            aria-label="Hide social sidebar"
          >
            <i className="fa-solid fa-chevron-left"></i>
            <span className={styles.tooltip}>Hide social bar</span>
          </button>
        )}
      </div>

      {!isVisible && (
        <button
          className={`${styles.toggleButton} ${styles.showButton}`}
          onClick={toggleSidebar}
          aria-label="Show social sidebar"
        >
          <i className="fa-solid fa-chevron-right"></i>
          <span className={styles.tooltip}>Show social bar</span>
        </button>
      )}
    </>
  );
};

export default SocialSidebar;
