import React, { useState, useEffect } from "react";
import styles from "./LocalPartnersPage.module.css";
import Hero from "../components/Hero";
import Section from "../components/Section/Section";
import PageHelmet from "../components/PageHelmet";
import dispositivos from "../assets/images/dispositivos-600x859 (1).png";
import heroStyles from "../components/Hero/Hero.module.css";
import { Link } from "react-router-dom";
import icon1 from "../assets/icons/retail-icon.png";

import map from "../assets/images/map-testi-home9.png";
import CTA from "../components/CTA/CTA";

const pageData = {
  hero: {
    title: "Local Partners",
    subtitle: "Join the Beam Wallet Revolution",
    image: dispositivos,
    category: "Local Partners",

    description: (
      <div className={styles.heroDescription}>
        <p>
          Become a Beam Wallet Local Partner and Profit from a Perfect Business
          Model, Opening Doors to the Biggest Businesses in the World.
        </p>
        <p>
          Beam Wallet is revolutionizing retail worldwide, and you can be part
          of this transformation even without an established business model.
          Beam Wallet offers a ready-made and profitable business model for its
          Local Partners, allowing you to profit from the platform's expansion
          in your country and open doors to the world's biggest businesses.
        </p>
      </div>
    ),
    buttonText: "Join Now!",
  },
  infoSection: {
    title: "What is Beam Wallet?",
    description:
      "Beam Wallet is much more than a digital wallet. It is a complete platform that combines digital payments, consumer experience, and retail marketing. With Beam Wallet, consumers and retailers have access to several benefits, such as:",
    boxes: [
      {
        icon: icon1,
        title: "Fast and secure digital payments:",
        description:
          "Beam Wallet facilitates transactions in physical and online stores, offering a modern and convenient alternative to traditional payment methods.",
      },
      {
        icon: icon1,
        title: "Instant cashback and rewards:",
        description:
          "Consumers receive cashback on every purchase and can use it immediately at any establishment that accepts Beam Wallet.",
      },
      {
        icon: icon1,
        title: "Targeted marketing campaigns:",
        description:
          "Retailers can create personalized marketing campaigns for their customers, increasing engagement and driving results.",
      },
      {
        icon: icon1,
        title: "Business services management:",
        description:
          "The platform offers tools to manage business services, such as inventory control, customer management, and sales reports.",
      },
    ],
  },
  localPartnersSection: {
    title: "Want to be a local partner?",
    subtitle: "START YOU OWN BUSINESS!",
    description: (
      <>
        <p>
          Beam Wallet is looking for partners worldwide to expand its global
          presence. If you are ready to profit from a perfect business model,
          open doors to the world's biggest businesses, and revolutionize retail
          in your country, contact Beam Wallet and find out how to become a
          Local Partner.
        </p>
        <p>
          <strong>Join Beam Wallet and be part of the future of retail!</strong>
        </p>
      </>
    ),
  },
};

// FAQ Data for Local Partners
const localFaqData = [
  {
    id: 1,
    question: "Commissions on transactions made with Beam Wallet:",
    answer:
      "You will receive a percentage of the value of each transaction made through the platform in your country.",
  },
  {
    id: 2,
    question: "Profit sharing from Beam Wallet:",
    answer:
      "In addition to commissions, you may also receive a share of Beam Wallet's profits in your country as the platform grows and consolidates.",
  },
  {
    id: 3,
    question: "Support and training:",
    answer:
      "Beam Wallet offers support and training to ensure your success as a Local Partner.",
  },
  {
    id: 4,
    question: "Marketing and promotional materials:",
    answer:
      "Beam Wallet provides marketing and promotional materials to help promote the platform in your country.",
  },
];

const advantagesData = {
  title: "Advantages of Being a Beam Wallet Local Partner",
  subtitle: "Becoming a Beam Wallet Local Partner offers several advantages:",
  boxes: [
    {
      icon: icon1,
      title: "Ready-made and profitable business model:",
      description:
        "You don't have to worry about creating a business model from scratch, as Beam Wallet offers a complete and tested model.",
    },
    {
      icon: icon1,
      title: "Low initial investment:",
      description:
        "The initial investment to become a Local Partner is low, making the opportunity accessible to entrepreneurs of various profiles.",
    },
    {
      icon: icon1,
      title: "Unlimited earning potential:",
      description:
        "Your earning potential as a Local Partner is unlimited, as it is directly linked to the growth of Beam Wallet in your country.",
    },
    {
      icon: icon1,
      title: "Beam Wallet support and training:",
      description:
        "You will have access to Beam Wallet's support and training, ensuring you have the tools and knowledge needed to succeed.",
    },
    {
      icon: icon1,
      title: "Positive impact on the local economy:",
      description:
        "By promoting the use of Beam Wallet, you will be contributing to the modernization of retail and the development of the local economy.",
    },
    {
      icon: icon1,
      title: "Access to big businesses:",
      description:
        "As a Local Partner, you will have the opportunity to connect with large global companies and brands, opening doors to new business opportunities and strategic partnerships.",
    },
  ],
};

// Advantages Section Component
const AdvantagesSection = () => {
  return (
    <section className={styles.advantagesSection}>
      <div className={styles.advantagesContainer}>
        <div className={styles.advantagesHeader}>
          <h2 className={styles.advantagesTitle}>{advantagesData.title}</h2>
          <p className={styles.advantagesSubtitle}>{advantagesData.subtitle}</p>
        </div>
        <div className={styles.advantagesGrid}>
          {advantagesData.boxes.map((box, index) => (
            <div key={index} className={styles.advantageBox}>
              <img src={box.icon} alt="" className={styles.advantageIcon} />
              <h5 className={styles.advantageTitle}>{box.title}</h5>
              <p className={styles.advantageDescription}>{box.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Component for Local Partners Page
const LocalPartnersFAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(1); // Start with the first question open

  const toggleQuestion = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <div className={styles.faqSection}>
      <div className={styles.faqHeader}>
        <h3 className={styles.faqSubtitle}>
          THE BEAM WALLET BUSINESS MODEL FOR LOCAL PARTNERS
        </h3>
        <h2 className={styles.faqTitle}>
          Beam Wallet offers a complete and tested business model for its Local
          Partners. As a Local Partner, you will be responsible for:
        </h2>
      </div>

      <div className={styles.faqQuestions}>
        {localFaqData.map((item) => (
          <div key={item.id} className={styles.faqItem}>
            <div
              className={`${styles.faqQuestion} ${
                activeQuestion === item.id ? styles.active : ""
              }`}
              onClick={() => toggleQuestion(item.id)}
            >
              <h4>{item.question}</h4>
              <span className={styles.faqArrow}>
                {activeQuestion === item.id ? "↑" : "↓"}
              </span>
            </div>
            {activeQuestion === item.id && (
              <div className={styles.faqAnswer}>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactCTA = () => {
  return (
    <div className={styles.contactCTASection}>
      <div className={styles.contactCTASubtitle}>
        JOIN BEAM WALLET AND BE PART OF THE FUTURE OF RETAIL
      </div>
      <h2 className={styles.contactCTATitle}>Get in touch</h2>
      <a href="/lp-form" className={styles.contactCTAButton}>
        JOIN NOW!
      </a>
    </div>
  );
};

const LocalPartnersPage = () => {
  return (
    <>
      <PageHelmet
        title="Local Partners - Beam Wallet"
        pageName="local-partner"
      />

      <Hero
        title={pageData.hero.title}
        category={pageData.hero.category}
        subtitle={pageData.hero.subtitle}
        description={pageData.hero.description}
        image={pageData.hero.image}
        imagePosition="left"
        backgroundColor={heroStyles.bgTeal}
      >
        <div className={styles.descriptionCTA}>
          <Link to="/lp-form">
            <button className={styles.contactButton}>
              {pageData.hero.buttonText}
            </button>
          </Link>
        </div>
      </Hero>
      {/* New Info Section */}
      <section className={styles.infoSection}>
        <h2 className={styles.infoTitle}>{pageData.infoSection.title}</h2>
        <p className={styles.infoDescription}>
          {pageData.infoSection.description}
        </p>
        <div className={styles.infoGrid}>
          {pageData.infoSection.boxes.map((box, index) => (
            <div key={index} className={styles.infoBox}>
              <div className={styles.infoBoxIconContainer}>
                <img src={box.icon} alt="" className={styles.infoBoxIcon} />
              </div>
              <h5 className={styles.infoBoxTitle}>{box.title}</h5>
              <p className={styles.infoBoxDescription}>{box.description}</p>
            </div>
          ))}
        </div>
      </section>
      <AdvantagesSection />
      <LocalPartnersFAQ />
      <Section
        title={pageData.localPartnersSection.title}
        subtitle={pageData.localPartnersSection.subtitle}
        description={pageData.localPartnersSection.description}
      />
      <Section imagePosition="center">
        <div className={styles.mapContainer}>
          <img src={map} alt="Map" className={styles.mapImage} />
        </div>
      </Section>
      <Section backgroundColor="white" description={<ContactCTA />} />
      <CTA />
    </>
  );
};

export default LocalPartnersPage;
