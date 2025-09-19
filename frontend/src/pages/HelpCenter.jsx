import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import PageHelmet from "../components/PageHelmet";
import support1 from "../assets/images/support1.jpg";
import support2 from "../assets/images/support2.jpg";
import support3 from "../assets/images/support3.jpg";
import styles from "./HelpCenter.module.css";

const cards = [
  {
    img: support1,
    number: "01",
    label: "Want to learn more about Beam?",
    phrase:
      "You can provide the answers that your potential customers are trying to find, so you can become the industry.",
    linkText: "VISIT KNOWLEDGE BASE",
    linkUrl:
      "https://support.beamwallet.com/hc/en-us/sections/115000261283-About-Beam",
  },
  {
    img: support2,
    number: "02",
    label: "Frequently Asked Questions",
    phrase:
      "You can provide the answers that your potential customers are trying to find, so you can become the industry.",
    linkText: "VISIT FAQs",
    linkUrl: "https://support.beamwallet.com/hc/en-us",
  },
  {
    img: support3,
    number: "03",
    label: "No access to the app, terminal or portal?",
    phrase:
      "We only provide technical support outside of the app if it is not possible to access one of the Beam platforms.",
    linkText: "GET IN TOUCH",
    linkUrl:
      "https://support.beamwallet.com/hc/en-us/sections/201740376-Troubleshooting",
  },
];

const HelpCenter = () => {
  // Set page title when component mounts
  useEffect(() => {
    document.title = "Help Center - Beam Wallet";
  }, []);

  return (
    <>
      <PageHelmet title="Help Center - Beam Wallet" pageName="help-center" />

      <Hero title="Help Center" backgroundColor="bgPink" />
      <Section
        title="Can we help?"
        subtitle="QUESTIONS"
        align="center"
        textAlign="center"
      />
      <div className={styles.cardsContainer}>
        {cards.map((card, idx) => (
          <div key={idx} className={styles.flipContainer}>
            <div className={styles.flipCard}>
              <div
                className={styles.flipFront}
                style={{ backgroundImage: `url(${card.img})` }}
              >
                <div className={styles.cardNumber}>{card.number}</div>
                <div className={styles.cardLabelFront}>{card.label}</div>
              </div>
              <div className={styles.flipBack}>
                <p className={styles.backPhrase}>{card.phrase}</p>
                <a href={card.linkUrl} className={styles.backLink}>
                  &rarr; {card.linkText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Contact Section */}
      <div className={styles.contactSection}>
        <div className={styles.contactContent}>
          <div className={styles.contactText}>
            <h3>COMMERCIAL QUESTIONS ABOUT BEAM?</h3>
            <h2>Contact our team</h2>
          </div>
          <a href="/contacts" className={styles.contactButton}>
            CONTACT US
          </a>
        </div>
      </div>
    </>
  );
};

export default HelpCenter;
