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
import { getFooter } from "../../utils/strapiService";

// Import images using URL constructor for better path resolution
const dmcaImage = new URL('../../assets/images/dmca.png', import.meta.url).href;
const seal65Image = new URL('../../assets/images/seal_65.png', import.meta.url).href;

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
        setFooterData(data);
      } catch (err) {
        console.error("Error fetching footer data:", err);
        setError(err);
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
    if (!email.trim()) return;

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setShowSuccess(true);
        setEmail("");
        setTimeout(() => setShowSuccess(false), 3000);
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
    }
  };

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
      imageField[0] &&
      typeof imageField[0] === "object"
    ) {
      const url = imageField[0].url;
      return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
    }
    return null;
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

  return (
    <footer className={styles.footer}>
      {/* Newsletter Section */}
      <div className={styles.newsletterSection}>
        <div className={styles.container}>
          <h2 className={styles.newsletterTitle}>
            {currentData.newsletterTitle || "Newsletter"}
          </h2>
          {showSuccess && (
            <p className={styles.successMessage}>
              Thank you for subscribing to our newsletter!
            </p>
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

        <div className={styles.partners}>
          {currentData.partners && currentData.partners.length > 0 ? (
            currentData.partners.map((partner, index) => {
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
                />
              );
            })
          ) : (
            <>
              <img src={sage} alt="Sage" />
              <img src={competir} alt="Competir" />
              <img src={partnerhotels} alt="Partner Hotels" />
              <img src={sabersaude} alt="Saber Saude" />
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
                  <>
                    <p>
                      BEAM is a marketing platform and digital wallet that
                      processes electronic payments.
                    </p>
                    <p>
                      It operates from smartphones of Consumers/Users who download
                      this application, giving them immediate benefits with every
                      purchase.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>
              {currentData.quickLinksTitle || "Quick Links"}
            </h3>
            <ul className={styles.footerLinks}>
              {currentData.links && currentData.links.length > 0 ? (
                currentData.links.map((link, index) => (
                  <li key={index}>
                    {link.isExternal ? (
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
                  "https://apps.apple.com/us/app/beam-wallet/id1446974079"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={appStore}
                  alt="Download on the App Store"
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

        <div className={styles.bottomFooter}>
          <div className={styles.socialContainer}>
            <div className={styles.socialIcons}>
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
            </div>

            <div className={styles.legalText}>
              <p>
                BEAM is a registered trademark of{" "}
                <a href="https://gbc.sa" target="_blank" rel="noopener noreferrer">
                  GBC S.A.
                </a>
              </p>
              <p>Copyright ©{new Date().getFullYear()} | All rights reserved</p>
            </div>

            {/* Add certification badges */}
            <div className={styles.certifications}>
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
