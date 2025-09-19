import React, { useEffect } from "react";
import styles from "./Banks.module.css";
import banksImg from "../assets/images/banks.png";
import Hero from "../components/Hero/Hero";
import heroStyles from "../components/Hero/Hero.module.css";
import PageHelmet from "../components/PageHelmet";
import logoBeam from "../assets/images/logo_beam.png";

const Banks = () => {
  // Set page title when component mounts
  useEffect(() => {
    document.title =
      "Beam Wallet - Unlocking New Opportunities: Beam Wallet Partners with Banks";
  }, []);

  // Benefits data
  const benefits = [
    {
      title: "Access to a growing market",
      description:
        "Beam Wallet has a solid and ever-expanding user base in the MENA region, providing a promising market for banks looking to expand their services.",
    },
    {
      title: "Innovative technology",
      description:
        "Beam Wallet uses state-of-the-art technologies to offer secure, convenient, and affordable financial solutions to its users.",
    },
    {
      title: "Expertise in the MENA market",
      description:
        "Beam Wallet has a deep understanding of the MENA market and the needs of its users, which can be valuable for banks looking to enter or expand their operations in the region.",
    },
    {
      title: "Mutual growth",
      description:
        "The partnership between Beam Wallet and a bank can generate new business opportunities and promote growth for both parties.",
    },
  ];

  return (
    <>
      <PageHelmet 
        title="Beam Wallet - Unlocking New Opportunities: Beam Wallet Partners with Banks" 
        pageName="banks" 
      />
      
      <Hero title="Banks" backgroundColor={heroStyles.bgYellow} />
      <div className={styles.banksContainer}>
        <div className={styles.headerSection}>
          <div className={styles.subtitle}>BEAM WALLET</div>
          <h1 className={styles.title}>
            Middle East and North Africa's Leading Fintech Seeks Strategic
            Partnership with Banks
          </h1>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.textContent}>
            <p>
              <span className={styles.boldText}>Beam Wallet</span>, an
              award-winning fintech recognized by Forbes as one of the top 50 in
              the world, is expanding its horizons and pursuing strategic
              partnerships with banks. With over 16 million active users in the
              MENA region, Beam Wallet is a leader in the digital financial
              solutions market, offering a wide range of services such as
              peer-to-peer transfers, bill payments, and mobile top-ups, through
              innovative technologies such as NFC, QR codes, and{" "}
              <span className={styles.boldText}>blockchain</span>.
            </p>
            <p>
              Given the growing demand for digital financial solutions in the
              region and Beam Wallet's extensive experience in the MENA market,
              the company is looking to establish partnerships with banks
              looking to expand their services. Beam Wallet has already received
              numerous collaboration requests from banks in China, Russia, Latin
              America, and other regions, demonstrating the company's great
              potential for growth and expansion.
            </p>
            <p>
              Through a strategic partnership, Beam Wallet and the partner bank
              could combine their expertise and resources to offer innovative
              and personalized financial solutions to their customers, expanding
              their operations and consolidating their leadership in the
              region's fintech market.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img
              src={banksImg}
              alt="Banking professionals discussing partnership opportunities"
            />
          </div>
        </div>

        {/* Benefits Section */}
        <div className={styles.benefitsSection}>
          <h2 className={styles.benefitsTitle}>
            Benefits of partnering with Beam Wallet:
          </h2>

          <div className={styles.benefitsCards}>
            {benefits.map((benefit, index) => (
              <div className={styles.benefitCard} key={index}>
                <h3 className={styles.benefitCardTitle}>{benefit.title}</h3>
                <p className={styles.benefitCardDescription}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className={styles.contactSection}>
          <div className={styles.logoContainer}>
            <img src={logoBeam} alt="Beam Logo" className={styles.beamLogo} />
          </div>

          <div className={styles.contactInfo}>
            <p className={styles.contactNote}>
              IF YOUR BANK IS INTERESTED IN EXPLORING THE POSSIBILITIES OF A
              STRATEGIC PARTNERSHIP WITH BEAM WALLET:
            </p>
            <h2 className={styles.contactTitle}>Please contact us by email</h2>
            <a
              href="mailto:business@beamwallet.com"
              className={styles.contactButton}
            >
              business@beamwallet.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banks;
