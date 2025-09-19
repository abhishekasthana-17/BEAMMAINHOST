import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import logoBeam from "../../assets/images/logo_beam_footer.png";
import appStore from "../../assets/icons/logo_app_store_footer.png";
import googlePlay from "../../assets/icons/logo_google_play_footer.png";
import { getFooter } from "../../utils/strapiService";

const STRAPI_URL =
  import.meta.env.VITE_STRAPI_URL ||
  "https://fortunate-flower-1807835526.strapiapp.com";

const StrapiFooter = () => {
  const [footerData, setFooterData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        setLoading(true);
        const data = await getFooter();
        if (data) {
          setFooterData(data);
        }
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFooterData();
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement email to Beam Email Platform
    console.log("Subscribing email:", email);
    setEmail("");
  };

  // Use Strapi data if available, otherwise an empty object to avoid null derefs
  const currentData = footerData || {};

  if (loading) {
    return (
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>Loading footer...</p>
        </div>
      </footer>
    );
  }

  if (error && !footerData) {
    console.error("Footer error, using fallback:", error);
  }

  // Helper function to get image URL from Strapi
  const getImageUrl = (imageField) => {
    // Handle a single media object (like for the logo)
    if (imageField && imageField.url) {
      const url = imageField.url;
      return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
    }
    // Handle a media field within a component, which is often an array
    if (
      Array.isArray(imageField) &&
      imageField.length > 0 &&
      imageField[0] &&
      imageField[0].url
    ) {
      const url = imageField[0].url;
      return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
    }
    return null; // Return null if no valid image URL is found
  };

  return (
    <footer className={styles.footer}>
      {/* Newsletter Section */}
      <div className={styles.newsletterSection}>
        <div className={styles.container}>
          <h2 className={styles.newsletterTitle}>
            {currentData.newsletterTitle || "Newsletter"}
          </h2>
          <form className={styles.newsletterForm} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={handleEmailChange}
              className={styles.emailInput}
              required
            />
            <button type="submit" className={styles.subscribeButton}>
              Subscribe
            </button>
          </form>
        </div>

        {/* Partners Section */}
        <div className={styles.partners}>
          {currentData.Partner && currentData.Partner.length > 0 ? (
            currentData.Partner.map((partner, index) => (
              <img
                key={index}
                src={getImageUrl(partner.image)}
                alt={partner.altText || partner.name || `Partner ${index + 1}`}
              />
            ))
          ) : (
            <></>
          )}
        </div>
        <hr className={styles.hr} />
      </div>

      {/* Footer Content */}
      <div className={styles.footerContent}>
        <div className={styles.footerContainer}>
          {/* Logo and Description Column */}
          <div className={styles.footerColumn}>
            <div className={styles.logoSection}>
              <img
                src={getImageUrl(currentData.logo) || logoBeam}
                alt="Beam Logo"
                className={styles.footerLogo}
              />
              <div className={styles.description}>
                {currentData.description &&
                Array.isArray(currentData.description) ? (
                  currentData.description.map((block, index) => {
                    if (block.type === "paragraph") {
                      const text = block.children
                        .map((child) => child.text)
                        .join("");
                      return <p key={index}>{text}</p>;
                    }
                    return null;
                  })
                ) : (
                  <p>{currentData.description}</p>
                )}
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>
              {currentData.quickLinksTitle || "Quick Link"}
            </h3>
            <ul className={styles.footerLinks}>
              {currentData.quickLinks && currentData.quickLinks.length > 0 ? (
                currentData.quickLinks.map((link, index) => (
                  <li key={index}>
                    {link.external ? (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.title}
                      </a>
                    ) : (
                      <Link to={link.url}>{link.title}</Link>
                    )}
                  </li>
                ))
              ) : (
                <>
                  <li>
                    <a
                      href="https://www.blog.beamwallet.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <Link to="/help-center">Help Center</Link>
                  </li>
                  <li>
                    <Link to="/terms-and-conditions">Terms and Conditions</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/contacts">Contacts</Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Download Column */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>
              {currentData.downloadTitle || "Download BEAM"}
            </h3>
            <div className={styles.downloadButtons}>
              <a
                href={
                  currentData.appStoreUrl ||
                  "https://apps.apple.com/app/beam-wallet"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={appStore}
                  alt="Download on App Store"
                  className={styles.downloadButton}
                />
              </a>
              <a
                href={
                  currentData.googlePlayUrl ||
                  "https://play.google.com/store/apps/details?id=com.beamwallet"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={googlePlay}
                  alt="Get it on Google Play"
                  className={styles.downloadButton}
                />
              </a>
            </div>
          </div>
        </div>

        <hr className={styles.hr} />

        {/* Bottom Footer */}
        <div className={styles.bottomFooter}>
          <div className={styles.socialContainer}>
            {/* Social Icons */}
            <div className={styles.socialIcons}>
              {currentData.socialLinks && currentData.socialLinks.length > 0 ? (
                currentData.socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                  >
                    <i className={social.iconClass}></i>
                  </a>
                ))
              ) : (
                <>
                  <a
                    href="https://www.instagram.com/beamwallet/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/thebeamwallet/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://x.com/beamwallet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                  >
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/beam-wallet/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/@beamwallet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                  <a
                    href="https://medium.com/beam-wallet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                  >
                    <i className="fa-brands fa-medium"></i>
                  </a>
                  <a
                    href="https://t.me/s/beamwalletgbc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                  >
                    <i className="fa-brands fa-telegram"></i>
                  </a>
                  <a
                    href="https://www.tiktok.com/@beamwallet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                  >
                    <i className="fa-brands fa-tiktok"></i>
                  </a>
                  <a
                    href="https://pt.pinterest.com/06e88r16nl83mr975pe7zlnr4qtu6o/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                  >
                    <i className="fa-brands fa-pinterest-p"></i>
                  </a>
                </>
              )}
            </div>

            {/* Legal Text */}
            <div className={styles.legalText}>
              <p>{currentData.copyrightText}</p>
              <p>{currentData.legalText}</p>
            </div>

            {/* Certifications */}
            <div className={styles.certifications}>
              {currentData.certifications &&
                currentData.certifications.length > 0 &&
                currentData.certifications.map((cert, index) => (
                  <a
                    key={index}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.certLink}
                  >
                    <img
                      src={getImageUrl(cert.image)}
                      alt={cert.altText || `Certification ${index + 1}`}
                      className={styles.certBadge}
                    />
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default StrapiFooter;
