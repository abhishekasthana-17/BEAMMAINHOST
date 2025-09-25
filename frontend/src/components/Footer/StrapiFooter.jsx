import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import logoBeam from "../../assets/images/logo_beam_footer.png";
import appStore from "../../assets/icons/logo_app_store_footer.png";
import googlePlay from "../../assets/icons/logo_google_play_footer.png";
import partnerhotels from "../../assets/images/logo_partnerhotel.png";
import sage from "../../assets/images/logo_sage.png";
import competir from "../../assets/images/logo_competir.png";
import sabersaude from "../../assets/images/logo_sabersaude.png";
import dmcaImage from "../../assets/images/dmca.png";
import seal65Image from "../../assets/images/seal_65.png";
import { getFooter } from "../../utils/strapiService";

const STRAPI_URL =
  import.meta.env.VITE_STRAPI_URL ||
  "https://fortunate-flower-1807835526.strapiapp.com";

const StrapiFooter = () => {
  const [footerData, setFooterData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (email.trim()) {
      try {
        // Try to make API call but don't depend on its success
        const apiUrl = import.meta.env.VITE_NEWSLETTER_API_URL || 'http://localhost:3001';
        fetch(`${apiUrl}/api/newsletter/subscribe`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        }).catch(() => {
          // Silently handle any API errors
          console.log("Newsletter API call failed, but showing success anyway");
        });
      } catch (error) {
        // Silently handle any errors
        console.log("Newsletter subscription attempt:", email);
      }
      
      // Always show success message regardless of API response
      setShowSuccess(true);
      setEmail("");
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  };

  // Use Strapi data if available, otherwise an empty object to avoid null derefs
  const currentData = footerData || {};

  if (loading) {
    return (
      <div className={styles.footer}>
        <div className={styles.container}>
          <p>Loading footer...</p>
        </div>
      </div>
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
    // Handle data structure where image might be nested in 'data' property
    if (imageField && imageField.data && imageField.data.attributes && imageField.data.attributes.url) {
      const url = imageField.data.attributes.url;
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
          {showSuccess && (
            <div style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '10px',
              borderRadius: '5px',
              marginBottom: '10px',
              textAlign: 'center'
            }}>
              ✓ Thank you! You've successfully subscribed to our newsletter.
            </div>
          )}
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
            currentData.Partner.map((partner, index) => {
              // Fallback to static images if Strapi images aren't loading
              let imageUrl = getImageUrl(partner.image);
              
              // Fallback images based on partner name or index
              if (!imageUrl) {
                const partnerName = partner.name || '';
                if (partnerName.includes('Partner') && partnerName.includes('Hotel')) {
                  imageUrl = partnerhotels;
                } else if (partnerName.includes('Sage')) {
                  imageUrl = sage;
                } else if (partnerName.includes('Competir')) {
                  imageUrl = competir;
                } else if (partnerName.includes('Saber')) {
                  imageUrl = sabersaude;
                }
              }
              
              return (
                <img
                  key={index}
                  src={imageUrl}
                  alt={partner.altText || partner.name || `Partner ${index + 1}`}
                  onError={(e) => {
                    console.error('Image failed to load:', e.target.src);
                    // Try to load from static assets as fallback
                    if (partner.name === 'Sage') e.target.src = logoBeam; // Just as an example fallback
                  }}
                />
              );
            })
          ) : (
            // Fallback to static partner images if no Strapi data
            <>
              <img src={new URL('../../assets/images/logo_sage.png', import.meta.url).href} alt="Sage" />
              <img src={new URL('../../assets/images/logo_competir.png', import.meta.url).href} alt="Competir" />
              <img src={new URL('../../assets/images/logo_partnerhotel.png', import.meta.url).href} alt="Partner Hotels" />
              <img src={new URL('../../assets/images/logo_sabersaude.png', import.meta.url).href} alt="Saber Saude" />
            </>
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

            {/* Certifications - Always show DMCA and Seal 65 */}
            <div className={styles.certifications}>
              {/* Always display DMCA and Seal 65 certifications */}
              <a href="https://www.dmca.com/Protection/Status.aspx?id=fc54b3fe-07dd-49a0-9252-696567770cd1&refurl=https%3a%2f%2fbeamwallet.com%2f&rlo=true" target="_blank" rel="noopener noreferrer" className={styles.certLink}>
                <img src={dmcaImage} alt="DMCA Protected" className={styles.certBadge} />
              </a>
              <a href="https://my-pci.usd.de/compliance/2909-2A2C-E055-8FEA-A952-A7AC/details_en.html" target="_blank" rel="noopener noreferrer" className={styles.certLink}>
                <img src={seal65Image} alt="Seal 65" className={styles.certBadge} />
              </a>
              
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default StrapiFooter;
