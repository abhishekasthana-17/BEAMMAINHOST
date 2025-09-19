import React from "react";
import styles from "./Header.module.css"; // Keep using Header styles for the social bar

const Header = () => {
  {
    /* Need to make some changes to the social bar, icons theme, font, UI */
  }
  return (
    // Top Social Bar
    <div className={styles.socialBar}>
      <div className={styles.container}>
        <div className={styles.socialIcons}>
          {/* Social Icons Links */}
          <a
            href="https://www.instagram.com/beamwallet/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/thebeamwallet/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="Facebook"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a
            href="https://x.com/beamwallet"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="Twitter"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/beam-wallet/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.youtube.com/@beamwallet"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="YouTube"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a
            href="https://medium.com/beam-wallet"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="Medium"
          >
            <i className="fa-brands fa-medium"></i>
          </a>
          <a
            href="https://t.me/s/beamwalletgbc"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="Telegram"
          >
            <i className="fa-brands fa-telegram"></i>
          </a>
          <a
            href="https://www.tiktok.com/@beamwallet"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="TikTok"
          >
            <i className="fa-brands fa-tiktok"></i>
          </a>
          <a
            href="https://pt.pinterest.com/06e88r16nl83mr975pe7zlnr4qtu6o/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="Pinterest"
          >
            <i className="fa-brands fa-pinterest-p"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
