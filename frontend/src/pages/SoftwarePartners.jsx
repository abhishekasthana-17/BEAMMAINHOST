import React, { useEffect } from "react";
import styles from "./SoftwarePartners.module.css";
import Hero from "../components/Hero";
import Section from "../components/Section/Section";
import PageHelmet from "../components/PageHelmet";
import codingImage from "../assets/images/softwareimg.png";
import logoBeam from "../assets/images/logo_beam.png";
import { FaLaptopCode } from "react-icons/fa";

const pageData = {
  softwarePartners: {
    title: "Increase Your Software Company's Revenue with Beam Wallet",
    subtitle: "WHY INTEGRATE BEAM WALLET?",
    description: (
      <p>
        If you're looking to increase your software company's revenue and{" "}
        <strong>customer loyalty</strong>, <strong>Beam Wallet</strong> offers
        the ideal solution. Integrate your billing solution with our platform
        and provide your customers with a complete and advantageous experience
        in cashback and transactions with digital currencies.
      </p>
    ),
  },
  integration: {
    title: "How does the integration work?",
    features: [
      {
        icon: <FaLaptopCode />,
        description:
          "Integrating Beam Wallet with your billing solution is simple and fast. Our team of experts will work closely with you to ensure an efficient and customized implementation.",
      },
    ],
  },
  contact: {
    subtitle: "JOIN BEAM WALLET AND BOOST THE GROWTH OF YOUR SOFTWARE COMPANY!",
    title:
      "Contact us and find out how we can help your business reach new heights of success.",
    email: "business@beamwallet.com",
  },
};

const SoftwarePartners = () => {
  // Set page title when component mounts
  useEffect(() => {
    document.title = "Software Partners - Beam Wallet";
  }, []);

  return (
    <>
      <PageHelmet
        title="Software Partners - Beam Wallet"
        pageName="software-partners"
      />

      <Hero title="Software Partners" backgroundColor="bg-yellow" />

      {/* Main content section */}
      <Section
        title={pageData.softwarePartners.title}
        subtitle={pageData.softwarePartners.subtitle}
        description={pageData.softwarePartners.description}
      />

      {/* Image section */}
      <div className={styles.imageSection}>
        <div className={styles.imageContainer}>
          <img
            src={codingImage}
            alt="Developer coding"
            className={styles.codingImage}
          />
        </div>
      </div>

      {/* Integration section */}
      <div className={styles.integrationSection}>
        <div className={styles.integrationContainer}>
          <h2 className={styles.integrationTitle}>
            {pageData.integration.title}
          </h2>

          <div className={styles.integrationBox}>
            {pageData.integration.features.map((feature, index) => (
              <div className={styles.featureItem} key={index}>
                <div className={styles.iconWrapper}>{feature.icon}</div>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact section */}
      <div className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <div className={styles.logoContainer}>
            <img src={logoBeam} alt="Beam Logo" className={styles.beamLogo} />
          </div>

          <h3 className={styles.contactSubtitle}>
            {pageData.contact.subtitle}
          </h3>
          <h2 className={styles.contactTitle}>{pageData.contact.title}</h2>

          <div className={styles.emailButtonContainer}>
            <a
              href={`mailto:${pageData.contact.email}`}
              className={styles.emailButton}
            >
              {pageData.contact.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SoftwarePartners;
