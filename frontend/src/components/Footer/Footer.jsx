import React, { useState } from "react";
import styles from "./Footer.module.css";
import sage from "../../assets/images/logo_sage.png";
import sabersaude from "../../assets/images/logo_sabersaude.png";
import partnerhotels from "../../assets/images/logo_partnerhotel.png";
import competir from "../../assets/images/logo_competir.png";
import logoBeam from "../../assets/images/logo_beam_footer.png";
import appStore from "../../assets/icons/logo_app_store_footer.png";
import googlePlay from "../../assets/icons/logo_google_play_footer.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement email to Beam Email Platform
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.newsletterSection}>
        <div className={styles.container}>
          <h2 className={styles.newsletterTitle}>Newsletter</h2>
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
          <img src={sage} alt="Sage" />
          <img src={competir} alt="Competir" />
          <img src={partnerhotels} alt="Partner Hotels" />
          <img src={sabersaude} alt="Saber Saude" />
        </div>
        <hr className={styles.hr} />
      </div>

      <div className={styles.footerContent}>
        <div className={styles.footerContainer}>
          <div className={styles.footerColumn}>
            <div className={styles.logoSection}>
              <img
                src={logoBeam}
                alt="Beam Logo"
                className={styles.footerLogo}
              />
              <div className={styles.description}>
                <p>
                  BEAM is a marketing platform and digital wallet that processes
                  electronic payments.
                </p>
                <p>
                  It operates from smartphones of Consumers/Users who download
                  this application, giving them immediate benefits with every
                  purchase.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Quick Link</h3>
            <ul className={styles.footerLinks}>
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
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Download BEAM</h3>
            <div className={styles.downloadButtons}>
              <a
                href="https://apps.apple.com/app/beam-wallet"
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
                href="https://play.google.com/store/apps/details?id=com.beamwallet"
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
                BEAM is a registered trademark of <a>GBC S.A.</a>
              </p>
              <p>Copyright ©{new Date().getFullYear()} | All rights reserved</p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
