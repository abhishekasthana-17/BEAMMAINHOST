import React, { useEffect } from "react";
import styles from "./VisionaryDev.module.css";
import Hero from "../components/Hero";
import Section from "../components/Section/Section";
import PageHelmet from "../components/PageHelmet";
import codeImage from "../assets/images/chalenge-limits-2.png";
import logoBeam from "../assets/images/logo_beam.png";
import { FaLightbulb, FaCode } from "react-icons/fa";

const pageData = {
  visionaryDev: {
    title: "Turn Your Innovative Ideas Into Reality with Beam Wallet",
    subtitle: "Visionary Developers",
    description: (
      <p>
        If you're a developer with game-changing ideas that can power the Beam
        ecosystem, we want to meet you! At <strong>Beam Wallet</strong>, we
        believe that innovation is the key to success, and we are always looking
        for new tools and features that can add value to our users.
      </p>
    ),
  },
  challenge: {
    subtitle: "CHALLENGE THE LIMITS OF YOUR CREATIVITY",
    image: codeImage,
    features: [
      {
        title: "Freedom to innovate",
        description:
          "We believe in the potential of creative minds and provide a conducive environment for you to develop your boldest and most futuristic ideas.",
      },
      {
        title: "Full integration",
        description:
          "Our platform is flexible and open to integrations, allowing you to connect your tools and functionality efficiently and securely.",
      },
      {
        title: "Technical support and collaboration",
        description:
          "Our team of experts is ready to offer technical support and collaborate with you at every stage of development.",
      },
    ],
  },
  lookingFor: {
    title: "What we're looking for:",
    features: [
      {
        icon: <FaLightbulb />,
        title: "Innovative ideas",
        description:
          "Solutions that can improve the user experience, increase security, optimize processes or create new business opportunities.",
      },
      {
        icon: <FaCode />,
        title: "State-of-the-art technology",
        description:
          "We use the most advanced technologies and are always on the lookout for new tools and programming languages that can drive innovation.",
      },
      {
        icon: <FaCode />,
        title: "Passion for technology",
        description:
          "We are looking for developers who are passionate about technology and who are willing to push the boundaries of what is possible.",
      },
    ],
  },
  contact: {
    subtitle:
      "JOIN BEAM WALLET AND TURN YOUR MOST UNIMAGINABLE IDEAS INTO REALITY!",
    title:
      "Get in touch with us via email and let's build the future of digital payments and services together.",
    email: "business@beamwallet.com",
  },
};

const VisionaryDev = () => {
  // Set page title when component mounts
  useEffect(() => {
    document.title = "Visionary Developers - Beam Wallet";
  }, []);

  return (
    <>
      <PageHelmet
        title="Visionary Developers - Beam Wallet"
        pageName="visionary-developers"
      />

      <Hero title="Visionary Developers" backgroundColor="bg-yellow" />
      <Section
        title={pageData.visionaryDev.title}
        subtitle={pageData.visionaryDev.subtitle}
        description={pageData.visionaryDev.description}
      />

      {/* Challenge section */}
      <div className={styles.challengeSection}>
        <div className={styles.challengeContainer}>
          <h3 className={styles.challengeSubtitle}>
            {pageData.challenge.subtitle}
          </h3>

          <div className={styles.challengeContent}>
            <div className={styles.featuresContainer}>
              {pageData.challenge.features.map((feature, index) => (
                <div className={styles.featureItem} key={index}>
                  <h2 className={styles.featureTitle}>{feature.title}</h2>
                  <p className={styles.featureDescription}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className={styles.imageContainer}>
              <div className={styles.imageWrapper}>
                <img
                  src={pageData.challenge.image}
                  alt="Developer coding"
                  className={styles.challengeImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Looking For section */}
      <div className={styles.lookingForSection}>
        <div className={styles.lookingForContainer}>
          <h2 className={styles.lookingForTitle}>
            {pageData.lookingFor.title}
          </h2>

          <div className={styles.lookingForBoxes}>
            {pageData.lookingFor.features.map((feature, index) => (
              <div className={styles.lookingForBox} key={index}>
                <div className={styles.iconWrapper}>{feature.icon}</div>
                <h3 className={styles.boxTitle}>{feature.title}</h3>
                <p className={styles.boxDescription}>{feature.description}</p>
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

export default VisionaryDev;
